import { readFile, writeFile, getJsByAst, getAstByJs, decryptHexStr } from "../../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";
import { isNil } from "lodash-es";

const traverse = traverseModule.default || traverseModule;

var window = {};

var encode_arr = [
  "",
  "L2F1dGhlbnRpY2F0aW9uL2FwaS9vYjFfY2hhbGxlbmdlL3BhZ2U=",
  "Z2V0",
  "YXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8q",
  "ZG93bg==",
  "NTAwMA==",
  "aXBob25l",
  "b25l",
  "cGFpZA==",
  "ZW5jb2RlVVJJQ29tcG9uZW50",
  "cmVwbGFjZQ==",
  "MHg=",
  "YnRvYQ==",
  "QnVmZmVy",
  "ZnJvbQ==",
  "dG9TdHJpbmc=",
  "YmFzZTY0",
  "cGx1Z2lucw==",
  "bGVuZ3Ro",
  "bG9jYXRpb24=",
  "aHJlZg==",
  "YWJvdXQ6Ymxhbms=",
  "Y2xvc2U=",
  "bGFuZ3VhZ2Vz",
  "ZW4tVVM=",
  "NjY=",
  "NzI=",
  "NmY=",
  "NmQ=",
  "NDM=",
  "Njg=",
  "NjE=",
  "NjQ=",
  "NjU=",
  "Zm9yRWFjaA==",
  "dW5lc2NhcGU=",
  "JXUwMA==",
  "U3RyaW5n",
  "c3BsaXQ=",
  "Y2hhckNvZGVBdA==",
  "am9pbg==",
  "b2IxX2NoZWNrPUExc2RSVUlRQ2h0eGVuOHBJMGRBTmk4emNYNXpIQmwrWW5FaEx5WklQeHc4V2tWUlZSbGlZR0JGVlZkZVNGa3VYQmM=",
  "YUFFRUFCQWhWVkZOUVFWQmFjVjVBVlZwRUIzeFVWMGNlQ3laUGFnY1NRRXB2QVdkVlNrY3NTejFMQkI0UUhCdFRYRjBHRFVWU1drbFdCUnNDSEFrY0JCb1k7IA==",
  "IFVTRVJJTkZPPUdqVlkwSXRPN0dDY01RcUpRZGlKY0hucXdtclQlMkZNeU5sM0lPJTJGJTJGTzExS1JSdGl0bk1kWTJFV21lUld6RkhIb0tOU0pm",
  "M2s2VXJkMEt4M3VrQ2JsZWdmNE1OWEJXbWxoRDBnOElBVEtNS00lMkZwa1hoJTJCQWM4JTJGdDFTQWppVjJmb2pTYiUyRkNBenZYR2lkNHZSTHBNZg==",
  "YnclMkZnQSUzRCUzRDsgQVVUSEtFWT1ZJTJCZ1JZZFJSc3lORGhBMGRydSUyQlF6RVphbllVT1lLb05KR2FQajdWaTN5bVdPZ1hkdDJCQSUyQkolMg==",
  "RkdlNzhaMm9QZlpqYWpHak03MjV5VUpkTU1zdHJqeXpWVWhZZldPaWNmRmdiSFFIRSUyQkJwZ0Nzb1A0Z0l4VTh3JTNEJTNEOw==",
  "IGFkYTM1NTc3MTgyNjUwZjFfZ3JfbGFzdF9zZW50X2NzMT1vYjEyMjQxNDA4NTk2NDsgYXNvX3VjZW50ZXI9NWJhYnlrV0g2QW5LcmJ6YzlkMHVnR1NPaG1PUQ==",
  "ME41bSUyRmtTQlhyYTlxbW10RzZBdVR2R2R6Zm16c2Y4ZXclMkJLJTJCdiUyRk07IGFkYTM1NTc3MTgyNjUwZjFfZ3Jfc2Vzc2lvbl9pZD0=",
  "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2xhc3Rfc2VudF9zaWRfd2l0aF9jczE9",
  "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX3Nlc3Npb25faWRfc2VudF92c3Q9",
  "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2NzMT1vYjEyMjQxNDA4NTk2NDsg",
  "c3luY3Q9",
  "bm93",
  "LjIyMzsgc3luY2Q9LTE1MzA=",
  "UmVnRXhw",
  "KF58ICk=",
  "PShbXjtdKikoO3wkKQ==",
  "bWF0Y2g=",
  "c3luY2Q=",
  "RGF0ZQ==",
  "QCM=",
  "T2JqZWN0",
  "a2V5cw==",
  "cGFyYW1z",
  "YW5hbHlzaXM=",
  "aGFzT3duUHJvcGVydHk=",
  "cHVzaA==",
  "c29ydA==",
  "dXJs",
  "YmFzZVVSTA==",
  "Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y",
  "ZG9jdW1lbnQ=",
  "aW5kZXhPZg==",
  "bmF0aXZlIGNvZGU=",
  "Y3JlYXRlRWxlbWVudA==",
  "Y2FudmFz",
  "Z2V0Q29udGV4dA==",
  "MmQ=",
  "dGV4dEJhc2VsaW5l",
  "dG9w",
  "Zm9udA==",
  "MTRweCBBcmlhbA==",
  "YWxwaGFiZXRpYw==",
  "ZmlsbFN0eWxl",
  "I2Y2MA==",
  "ZmlsbFJlY3Q=",
  "IzA2OQ==",
  "ZmlsbFRleHQ=",
  "QnJvd3NlciBmaW5nZXJwcmludA==",
  "cmdiYSgxMDIsIDIwNCwgMCwgMC43KQ==",
  "Z2V0VGltZQ==",
  "X0FVVE9NQVRJT05fREVURUNURURf",
  "X0xBTkdVQUdFX0RFVEVDVEVEXw==",
  "eHl6NTE3Y2RhOTZlZmdo",
  "Zmxvb3I=",
  "cmFuZG9t",
  "eHl6NTE3Y2RhOTZlZmho",
];

function restoreGlobals(path) {
  if (types.isIdentifier(path.node.init)) {
    const name = path.node.init.name;
    if (Object.values(variableMap).includes(name)) {
      const key = Object.keys(variableMap).find((key) => variableMap[key] === name);
      const binding = path.scope.getBinding(key);
      if (binding) {
        const { referencePaths } = binding;
        for (const p of referencePaths) {
          const newName = variableMap[key];
          p.replaceWith(types.identifier(newName));
          // console.log(`restoreGlobals: ${key} -> ${name}`);
        }
      }
    }
  }
}

// 去除未引用代码
function removeUnusedCode(path) {
  const binding = path.scope.getBinding(path.node.name);
  if (binding) {
    const { referencePaths } = binding;
    if (referencePaths.length === 0) {
      if (types.isVariableDeclarator(path.parentPath)) {
        path.parentPath.remove();
        // console.log(`remove ${path.node.name}`);
      }
    }
  }
}

// 常量计算出具体数值
function computedCommon(path) {
  if (types.isBinaryExpression(path.node.left)) {
    computedCommon(path.get("left"));
  }

  if (types.isBinaryExpression(path.node.right)) {
    computedCommon(path.get("right"));
  }

  const { confident, value } = path.evaluate();
  if (confident) {
    let val;
    try {
      val = eval(value);
    } catch (error) {
      console.log(error);
    }
    // console.log(`computedCommon: ${val}`);
    path.replaceWith(types.valueToNode(val));
  }
}

function OoO0ooo0(index) {
  for (var OooOooOO = 2; OooOooOO !== 0; ) {
    switch (OooOooOO) {
      case 4:
        return Oo000ooo;
        OooOooOO = 0;
        break;
      case 2:
        var o0O00Oo0 = encode_arr,
          Oo000ooo = atob(o0O00Oo0[index]);
        OooOooOO += 2;
        break;
    }
  }
}

async function main() {
  const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./5_ob1_challenge.js");
  let jsCode = await readFile(encryptJsPath);
  // jsCode = decryptHexStr(jsCode);
  const ast = getAstByJs(jsCode);
  traverse(ast, {
    DebuggerStatement(path) {
      path.remove();
    },
    ThrowStatement(path) {
      path.remove();
    },
  });
  traverse(ast, {
    BinaryExpression(path) {
      computedCommon(path);
    },
  });

  let newAst = getAstByJs(getJsByAst(ast));
  traverse(newAst, {
    Identifier(path) {
      removeUnusedCode(path);
    },
  });
  let newJsCode = getJsByAst(newAst);
  newJsCode = decryptHexStr(newJsCode);
  const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./5_ob1_challenge_decrypt.js");
  await writeFile(outputJsPath, newJsCode);
  console.log("还原结束");
}

main().catch((err) => console.error(err));
