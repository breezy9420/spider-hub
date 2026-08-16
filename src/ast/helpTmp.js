import { readFile, writeFile, getJsByAst, getAstByJs, decryptHexStr } from "../../../util/ast.js";
import { __dirname } from "../../../util/index.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import vm from "node:vm";

const traverse = traverseModule.default || traverseModule;

// 去除未引用代码
function removeUnusedCode(path) {
  const binding = path.scope.getBinding(path.node.name);
  if (binding) {
    const { referencePaths } = binding;
    if (referencePaths.length === 0) {
      if (types.isVariableDeclarator(path.parentPath)) {
        path.parentPath.remove();
        console.log(`remove ${path.node.name}`);
      }
    }
  }
}

function decryptStr(path, name) {
  if (types.isIdentifier(path.node.init, { name })) {
    const leftName = path.node.id.name;
    const binding = path.scope.getBinding(leftName);
    if (binding) {
      const { referencePaths } = binding;
      for (const p of referencePaths) {
        if (types.isCallExpression(p.parentPath)) {
          const [param1] = p.parentPath.node.arguments;
          const plainText = a0_0x1e0f(param1.value);
          p.parentPath.replaceWith(types.stringLiteral(plainText));
          console.log(`字符串解密${name}:${leftName}('${param1.value}') => ${plainText}`);
        } else {
          decryptStr(p.parentPath, leftName);
        }
      }
    }
  }
}

// 常量计算出具体数值
function computedCommon(path, type = "number") {
  if (types.isBinaryExpression(path.node.left)) {
    computedCommon(path.get("left"), type);
  }

  if (types.isBinaryExpression(path.node.right)) {
    computedCommon(path.get("right"), type);
  }

  const { confident, value } = path.evaluate();
  if (confident) {
    let val;
    try {
      val = eval(value);
    } catch (error) {
      val = value;
    }
    // console.log(`computedCommon: ${val}`);
    try {
      if (type === "string") {
        path.replaceWith(types.stringLiteral(val));
      } else {
        path.replaceWith(types.numericLiteral(val));
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function main() {
  const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./Lblfpo.js");
  let jsCode = await readFile(encryptJsPath);
  jsCode = decryptHexStr(jsCode);
  const ast = getAstByJs(jsCode);
  traverse(ast, {
    BinaryExpression(path) {
      computedCommon(path);
    },
  });
  // 字符串解密
  traverse(ast, {
    VariableDeclarator(path) {
      decryptStr(path, "LA");
    },
  });

  // 删除未引用代码
  let newAst = getAstByJs(getJsByAst(ast));
  traverse(newAst, {
    Identifier(path) {
      removeUnusedCode(path);
    },
  });
  let newJsCode = getJsByAst(newAst);
  newJsCode = decryptHexStr(newJsCode);
  const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./Lblfpo_decrypt.js");
  await writeFile(outputJsPath, newJsCode);
  console.log("还原结束");
}

main();
