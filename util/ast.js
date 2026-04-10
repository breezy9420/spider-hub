import fs from "node:fs";
import parser from "@babel/parser";
import generatorModule from "@babel/generator";

const { default: generator } = generatorModule;

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function readFile(path) {
  return await fs.promises.readFile(path, "utf8");
}

export async function writeFile(path, data) {
  await fs.promises.writeFile(path, data);
}

// js转ast
export function getAstByJs(jsCode) {
  return parser.parse(jsCode, {
    sourceType: "script",
  });
}

// ast转js
export function getJsByAst(ast) {
  const options = {
    retainLines: false, // 是否使用跟源文件一样的行号
    comments: false, // 是否生成注释
    compact: false, // 代码压缩
  };
  if (typeof ast === "string") {
    ast = JSON.parse(ast);
  }
  const { code } = generator(ast, options);
  return code;
}

export function getRndWord(len = 6) {
  const words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let word = "";
  for (let i = 0; i < len; i++) {
    word += words[getRandom(0, words.length - 1)];
  }
  return word;
}

/**
 * 生成相似标识符
 * */
export function genSimilIdentifier(length = 10) {
  const arr = ["O", "o", "0"];
  let str = "O";
  for (let i = 0; i < length; i++) {
    const index = getRandom(0, 2);
    str += arr[index];
  }
  return str;
}

export function hexStringToStr(hexString) {
  const reg = /\\(?:x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})|u\{([0-9a-fA-F]{1,6})\})/gi;

  return hexString.replaceAll(reg, (match, hex, unicode, unicodeBraced) => {
    const codePoint = parseInt(hex || unicode || unicodeBraced, 16);

    // 处理大于 0xFFFF 的字符
    if (codePoint > 0xffff) {
      return String.fromCodePoint(codePoint);
    }
    return String.fromCharCode(codePoint);
  });
}

export function decryptHexStr(originCode) {
  const reg = /(['"`])((?:(?!\1)[^\\]|\\.)*?)\1/g;

  return originCode.replaceAll(reg, (match, quote, content) => {
    if (!/\\x|\\u/i.test(content)) return match;

    const plainText = hexStringToStr(content);
    // console.log(`${match} => ${plainText}`);

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
