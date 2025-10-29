import { readFile, writeFile, getJsByAst, getAstByJs } from "../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";
import { callExpression } from "@babel/types";

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

function hexStringToStr(hexString) {
  const reg =
    /\\(?:x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})|u\{([0-9a-fA-F]{1,6})\})/gi;

  return hexString.replaceAll(reg, (match, hex, unicode, unicodeBraced) => {
    const codePoint = parseInt(hex || unicode || unicodeBraced, 16);

    // 处理大于 0xFFFF 的字符
    if (codePoint > 0xffff) {
      return String.fromCodePoint(codePoint);
    }
    return String.fromCharCode(codePoint);
  });
}

function decryptHexStr(originCode) {
  const reg = /(['"`])((?:(?!\1)[^\\]|\\.)*?)\1/g;

  return originCode.replaceAll(reg, (match, quote, content) => {
    if (!/\\x|\\u/i.test(content)) return match;

    const plainText = hexStringToStr(content);
    console.log(`${match} => ${plainText}`);

    // 关键：根据原始引号类型，转义相应的特殊字符
    let escaped = plainText
      .replace(/\\/g, "\\\\") // 先转义反斜杠
      .replace(/\n/g, "\\n") // 换行字符转义为 \\n
      .replace(/\r/g, "\\r") // 回车字符转义为 \\r
      .replace(/\t/g, "\\t"); // 制表符转义为 \\t

    // 然后转义引号
    if (quote === "'") {
      escaped = escaped.replace(/'/g, "\\'");
    } else if (quote === '"') {
      escaped = escaped.replace(/"/g, '\\"');
    } else {
      escaped = escaped.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
    }

    return quote + escaped + quote;
  });
}

function encryptStr_a0_0x17ef1c(path, name) {
  if (types.isIdentifier(path.node.init, { name })) {
    const leftName = path.node.id.name;
    const binding = path.scope.getBinding(leftName);
    if (binding) {
      const { referencePaths } = binding;
      for (const p of referencePaths) {
        if (types.isCallExpression(p.parentPath)) {
          const [param1] = p.parentPath.node.arguments;
          const plainText = a0_0x17ef1c(param1.value);
          p.parentPath.replaceWith(types.stringLiteral(plainText));
          console.log(`${leftName}('${param1.value}') => ${plainText}`);
        } else {
          encryptStr_a0_0x17ef1c(p.parentPath, leftName);
        }
      }
    }
  }
}

function computedCommon(path) {
  if (types.isBinaryExpression(path.node.left)) {
    computedCommon(path.get("left"));
  }

  if (types.isBinaryExpression(path.node.right)) {
    computedCommon(path.get("right"));
  }

  if (types.isLiteral(path.node.left) && types.isLiteral(path.node.right)) {
    const leftVal = path.node.left.value;
    const rightVal = path.node.right.value;
    const operator = path.node.operator;
    if (!isNaN(leftVal) && !isNaN(rightVal)) {
      path.replaceWith(
        types.numericLiteral(+eval(leftVal + operator + rightVal))
      );
    }
  }
  if (
    types.isLiteral(path.node.left) &&
    types.isUnaryExpression(path.node.right)
  ) {
    if (isNaN(path.node.left.value) || isNaN(path.node.right.argument.value))
      return;
    const leftVal = path.node.left.value;
    const rightVal = eval(
      path.node.right.operator + path.node.right.argument.value
    );
    const operator = path.node.operator;
    if (!isNaN(leftVal) && !isNaN(rightVal)) {
      path.replaceWith(
        types.numericLiteral(eval(leftVal + operator + rightVal))
      );
    }
  }

  if (
    types.isUnaryExpression(path.node.left) &&
    types.isUnaryExpression(path.node.right)
  ) {
    if (
      isNaN(path.node.left.argument.value) ||
      isNaN(path.node.right.argument.value)
    )
      return;
    const leftVal = eval(
      path.node.left.operator + path.node.left.argument.value
    );
    const rightVal = eval(
      path.node.right.operator + path.node.right.argument.value
    );
    const operator = path.node.operator;
    if (!isNaN(leftVal) && !isNaN(rightVal)) {
      path.replaceWith(
        types.numericLiteral(eval(leftVal + operator + rightVal))
      );
    }
  }

  if (
    types.isUnaryExpression(path.node.left) &&
    types.isLiteral(path.node.right)
  ) {
    if (isNaN(path.node.left.argument.value)) return;
    const leftVal = eval(
      path.node.left.operator + path.node.left.argument.value
    );
    const rightVal = path.node.right.value;
    const operator = path.node.operator;
    if (!isNaN(leftVal) && !isNaN(rightVal)) {
      path.replaceWith(
        types.numericLiteral(eval(leftVal + operator + rightVal))
      );
    }
  }
}

// 14['toString'](22)  还原这种字符串加密
function dynamicEncryptStr(path) {
  const { node } = path;
  const { callee, arguments: args } = node;
  if (types.isMemberExpression(callee) && args?.length === 1) {
    const { object, property } = callee;
    if (
      !types.isNumericLiteral(object) ||
      !types.isIdentifier(property) ||
      !types.isNumericLiteral(args[0])
    )
      return;
    const obj = path.node.callee.object.value;
    const func = path.node.callee.property.name;
    const param = args[0].value;
    const plainText = eval(`${obj}['${func}'](${param})`);
    path.parentPath.replaceWith(types.stringLiteral(plainText));
  }
}

// @todo 解密模板字符串
function encryptTemplateLiteral(path) {
  if (types.isTemplateLiteral(path.node)) {
  }
}

async function main() {
  const encryptJsPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "./xhr14.js"
  );
  let jsCode = await readFile(encryptJsPath);
  jsCode = decryptHexStr(jsCode);
  const ast = getAstByJs(jsCode);
  traverse(ast, {
    VariableDeclarator(path) {
      encryptStr_a0_0x17ef1c(path, "a0_0xd3d3");
    },
    BinaryExpression(path) {
      computedCommon(path);
    },
    CallExpression(path) {
      dynamicEncryptStr(path);
    },
  });
  let newAst = getAstByJs(getJsByAst(ast));
  traverse(newAst, {
    Identifier(path) {
      removeUnusedCode(path);
    },
  });
  const newJsCode = getJsByAst(ast);
  const outputJsPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "./xhr14_decrypt.js"
  );
  writeFile(outputJsPath, newJsCode);
  //   writeFile(outputJsPath, jsCode);
}

main();
