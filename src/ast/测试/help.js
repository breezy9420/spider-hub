import { readFile, writeFile, getJsByAst, getAstByJs } from "../../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";

const traverse = traverseModule.default || traverseModule;

var window = {};

const variableMap = {
  _0x2ba6ea26: "Object",
  _0x2ba6ea27: "decodeURIComponent",
  //   _0x2ba6ea28: escape,
  //   _0x2ba6ea29: atob,
  //   _0x2ba6ea30: String,
  //   _0x2ba6ea31: window,
  //   _0x2ba6ea32: console,
  //   _0x2ba6ea33: URLSearchParams,
  //   _0x2ba6ea34: document,
  //   _0x2ba6ea35: isNaN,
  //   _0x2ba6ea36: parseInt,
  //   _0x2ba6ea37: location,
  //   _0x2ba6ea38: Array,
  //   _0x2ba6ea39: Math,
  //   _0x2ba6ea40: setInterval,
  //   _0x2ba6ea41: setTimeout,
  //   _0x2ba6ea42: performance,
  //   _0x2ba6ea43: Set,
  //   _0x2ba6ea44: fetch,
  //   _0x2ba6ea45: Error,
  //   _0x2ba6ea46: JSON,
  //   _0x2ba6ea47: NaN,
  //   _0x2ba6ea48: Date,
};

// 还原内置对象
function restoreGlobals(path) {
  if (types.isIdentifier(path.node.init)) {
    const name = path.node.init.name;
    if (Object.values(variableMap).includes(name)) {
      const key = Object.keys(variableMap).find((key) => variableMap[key] === name);
      const binding = path.scope.getBinding(key);
      if (binding) {
        const { referencePaths } = binding;
        for (const p of referencePaths) {
          if (types.isMemberExpression(p.parentPath)) {
            p.replaceWith(types.identifier(variableMap[key]));
          }
        }
      }
    }
  }
}

async function main() {
  const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./encrypt.js");
  let jsCode = await readFile(encryptJsPath);
  const ast = getAstByJs(jsCode);

  traverse(ast, {
    VariableDeclarator(path) {
      restoreGlobals(path);
    },
  });

  let newAst = getAstByJs(getJsByAst(ast));
  let newJsCode = getJsByAst(newAst);
  const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./decrypt.js");
  await writeFile(outputJsPath, newJsCode);
  console.log("还原结束");
}

main();
