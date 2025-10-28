import {readFile, writeFile, getJsByAst, getAstByJs} from "../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import {fileURLToPath} from "url";

const traverse = traverseModule.default || traverseModule;

function a0_0x2f71() {
    return [
    "ySzGh",
    "DHblG",
    "FfLLL",
    "ATABT",
    "stringify",
    "Function(arguments[0]+\"",
    "UsNSM",
    "vNxnj",
    "AWqTV",
    "5|0|2|7|1|3|6|4",
    "endian",
    "LSbFl",
    "8UIqksY",
    "SdiVa",
    "split",
    "KixAw",
    "aAQWb",
    "UpZXc",
    "WrcTA",
    "GaIWX",
    "RJmSR",
    "push",
    "KREPr",
    "ajjlZ",
    "FxzZg",
    "Fipjk",
    "indexOf",
    "USggA",
    "NwozC",
    "fvQJX",
    "VWoRZ",
    "jPLYP",
    "YpsTA",
    "JiqnR",
    "zVpYy",
    "LMDbr",
    "Blvds",
    "rucpt",
    "Qvouz",
    "Crajs",
    "dcXJQ",
    "uZHsx",
    "TtMyC",
    "GsqzD",
    "BCaee",
    "NiHkT",
    "ljkgG",
    "EWAop",
    "VBGtu",
    "TxzUV",
    "dwxSw",
    "OYrHD",
    "VkVrq",
    "csteW",
    "ZRmEg",
    "Bchuk",
    "UKMRl",
    "__esModule",
    "2123016cniZPB",
    "kpTHJ",
    "xrVKu",
    "jzDcP",
    "ZrJWU",
    "rZoZZ",
    "uUgCx",
    "UjTwq",
    "lTEhx",
    "hDvAR",
    "YNbNO",
    "VxyZO",
    "Prguv",
    "rotl",
    "xSPWH",
    "sgpPd",
    "PlJbA",
    "ISAaQ",
    "zirjT",
    "bin",
    "NhJIl",
    "JSrZQ",
    "WSSeZ",
    "BLxRn",
    "ARsbR",
    "YyOVc",
    "VsTOF",
    "CDHQI",
    "iMqSm",
    "sort",
    "ozkzd",
    "hCDVf",
    "bind",
    "CDcRk",
    "data",
    "ajaxSettings",
    "ZjQMp",
    "pCMJT",
    "MYtBq",
    "OvPUN",
    "rywzD",
    "Ldixu",
    "gjzjT",
    "XgvMt",
    "RmCZh",
    "65EnFhGB",
    "kMEHZ",
    "BQHKs",
    "aqZkC",
    "JhNeG",
    "error",
    "fWQwk",
    "gZGyI",
    "AWulQ",
    "prTaO",
    "qkWrZ",
    "YtbdU",
    "HGjCv",
    "YPhCb",
    "search",
    "fwjyj",
    "lhgUF",
    "KijYO",
    "join",
    "JgNyJ",
    "revsj",
    "qiLjE",
    "RZRYf",
    "IDQJs",
    "floor",
    "default",
    "gZusd",
    "gFMgt",
    "QXwvM",
    "DfFis",
    "tVDnJ",
    "log",
    "qCaKi",
    "exception",
    "parse",
    "bugger",
    "TNCDH",
    "xqNQk",
    "kYDUg",
    "rfJYQ",
    "constructor",
    "BUSEx",
    "HEiLd",
    "iRxwN",
    "apply",
    "LImts",
    "FexRj",
    "nHgmB",
    "OGKIs",
    "VckAb",
    "eFnlg",
    "YIYlR",
    "dCxOt",
    "vCJSo",
    "JzRdo",
    "nrzJG",
    "RURHo",
    "DLkdi",
    "pow",
    "WdMgf",
    "DbRoY",
    "BWzNn",
    "CISDw",
    "OGqFi",
    "DwCyQ",
    "function",
    "KPMvf",
    "VmAyS",
    "MkkMc",
    "faBxG",
    "KFlKl",
    "KAAJR",
    "QXzIR",
    "charCodeAt",
    "uhNfa",
    "fdkzJ",
    "bFeCP",
    "koyeC",
    "qCUHY",
    "beforeSend",
    "skGEO",
    "rfIDP",
    "dPyWS",
    "OreQs",
    "vLFGu",
    "FrREH",
    "ReiSo",
    "MZEAh",
    "\")()",
    "VLqxC",
    "ygFay",
    "jPVSf",
    "IcPKA",
    "ajPAF",
    "mPBLp",
    "undefined",
    "stringToBytes",
    "OCEvl",
    "isBuffer",
    "LkqeC",
    "DEhQo",
    "iKrZh",
    "Hftlx",
    "kGifL",
    "vntmf",
    "info",
    "HQyQI",
    "binary",
    "139314MCTppV",
    "HkLRN",
    "FbvCk",
    "MlszH",
    "yUhmE",
    "RSmLt",
    "bejtp",
    "gOsbL",
    "oKCRU",
    "GUgKD",
    "length",
    "AMLta",
    "Yulre",
    "sZZdi",
    "NGaEI",
    "xEjxf",
    "exports",
    "_blocksize",
    "Izqxf",
    "random",
    "aPWvK",
    "CHBNv",
    "aYlwM",
    "38700DTbOtN",
    "_gg",
    "iLfuy",
    "XVVbj",
    "IWAix",
    "eGwjJ",
    "KCcbT",
    "OmVRN",
    "NYZjh",
    "_hh",
    "readFloatLE",
    "CSNWc",
    "WZWhu",
    "ySPbq",
    "zUpNS",
    "eLYgx",
    "qesbJ",
    "cfJQM",
    "xSEIC",
    "KwCOo",
    "encoding",
    "ryjrr",
    "UsUzu",
    "WhdIO",
    "cUDdD",
    "oPFHM",
    "HGCcA",
    "isArray",
    "CnlBH",
    "fromCharCode",
    "hGupD",
    "vUfHc",
    "GpXkz",
    "aokAe",
    "prototype",
    "UAbbu",
    "Kxglj",
    "IaLIu",
    "vSaUL",
    "AmJQg",
    "FMjFm",
    "GwLrZ",
    "setRequestHeader",
    "call",
    "warn",
    "YyCZh",
    "dSAMc",
    "dPEup",
    "LHqyN",
    "HrKeb",
    "megFj",
    "PJDwB",
    "jAPcJ",
    "2874580oAyvEA",
    "zLjRH",
    "substr",
    "defineProperty",
    "pzaCF",
    "uWNGs",
    "API",
    "PPneI",
    "MDAZM",
    "bytesToString",
    "OHUpG",
    "AsjaJ",
    "csQEe",
    "IJwNG",
    "(((.+)+)+)+$",
    "RipEi",
    "gICmr",
    "VhnZJ",
    "wHRDA",
    "UnAfQ",
    "yQaMV",
    "ruyft",
    "IhAbC",
    "CHGSW",
    "fOBoP",
    "YKekD",
    "nGGbg",
    "wjyVc",
    "FtBnq",
    "Yuxot",
    "qCcgE",
    "kqwbi",
    "QaAal",
    "hkSyO",
    "mCGkI",
    "gRqEk",
    "cyzEC",
    "wZZjl",
    "_ii",
    "qlDEh",
    "sapoi",
    "YEhIq",
    "rwBhC",
    "KDhkQ",
    "hxfqV",
    "MnUVL",
    "iGZSm",
    "{}.constructor(\"return this\")( )",
    "130692QYiphv",
    "XKPoR",
    "672952qlggwr",
    "_ff",
    "QhVvR",
    "wafRJ",
    "mdxDU",
    "iGWPv",
    "uihWl",
    "EsZDx",
    "Illegal argument ",
    "return (function() ",
    "HMAWv",
    "HoilR",
    "toString",
    "replace",
    "gGTnY",
    "uMnmM",
    "sHyCG",
    "64xQgMVL",
    "charAt",
    "PBaBP",
    "yJTYQ",
    "xECJm",
    "zhLRY",
    "RYvDT",
    "sVWLG",
    "slice",
    "1712817gNXkzh",
    "pVDsI",
    "yJkKP",
    "jKxQq",
    "vNbwE",
    "dtLaT"
]
}

function a0_0xd3d3(_0x2c100d, _0x5d3a3b) {
    var _0x4d07a4 = a0_0x2f71();
    return a0_0xd3d3 = function(_0x292c11, _0x3193bb) {
        _0x292c11 = _0x292c11 - 0x199;
        var _0x32d88f = _0x4d07a4[_0x292c11];
        return _0x32d88f;
    }
    ,
    a0_0xd3d3(_0x2c100d, _0x5d3a3b);
}

var a0_0x17ef1c = a0_0xd3d3;
// 去除未引用代码
function removeUnusedCode(path) {
    const binding = path.scope.getBinding(path.node.name);
    if (binding) {
        const {referencePaths} = binding;
        if (referencePaths.length === 0) {
            if (types.isVariableDeclarator(path.parentPath)) {
                path.parentPath.remove();
                console.log(`remove ${path.node.name}`);
            }
        }
    }
}

function hexStringToStr(hexString) {
    const reg = /\\x[0-9a-fA-F]{2,8}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,6}\}/g;
    return hexString.replaceAll(reg, (match) => {
        return String.fromCharCode(parseInt(match.slice(2), 16));
    });
}

function decryptHexStr(originCode) {
    const reg = /['"`]([^'"`]*?(\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,6}\})+[^'"`]*?)['"`]/g;
    return originCode.replaceAll(reg, (match) => {
        const plainText = hexStringToStr(match);
        // if (["'\\x3b\\x0a'"].includes(match)) {
        //     return match;
        // }
        console.log(`${match} => ${plainText}`);
        return plainText;
    });
}

function encryptStr_a0_0x17ef1c(path, name) {
    if (types.isIdentifier(path.node.init, {name})) {
        const leftName = path.node.id.name;
        const binding = path.scope.getBinding(leftName);
        if (binding) {
            const {referencePaths} = binding;
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

async function main() {
    const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./jqueryxhr.js");
    let jsCode = await readFile(encryptJsPath);
    jsCode = decryptHexStr(jsCode);
    const ast = getAstByJs(jsCode);
    // 字符串解密
    traverse(ast, {
        VariableDeclarator(path) {
            encryptStr_a0_0x17ef1c(path, "a0_0xd3d3");
        }
    });
    let newAst = getAstByJs(getJsByAst(ast));
    traverse(newAst, {
        Identifier(path) {
            removeUnusedCode(path);
        }
    });
    const newJsCode = getJsByAst(ast);
    const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./jqueryxhr_decrypt.js");
    writeFile(outputJsPath, newJsCode);
    // writeFile(outputJsPath, jsCode);
}

main();
