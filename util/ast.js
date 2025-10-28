import fs from "node:fs";
import parser from "@babel/parser";
import generatorModule from "@babel/generator";

const {default: generator} = generatorModule;

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
    const {code} = generator(ast, options);
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

