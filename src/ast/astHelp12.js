import {readFile, writeFile, getJsByAst, getAstByJs} from "../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import {fileURLToPath} from "url";

const traverse = traverseModule.default || traverseModule;

function QQQO() {
    return [
        "phKufSk6",
        "g8oOW5zzfG",
        "q8khWOrLkrCNWPmgu8oO",
        "WRDEW4/dOq",
        "WPneW4hcUZ4",
        "W7JcGv4",
        "W6JcS0FdMW",
        "WRiiW5pdLrC",
        "f8kFW5flFHPIWOPgw8kvW7dcG8oLn8oNimogWQTsFq",
        "cXpdLmoNWOu",
        "W7FcGCkDW7pcTG",
        "kYbuWQxdIxS",
        "jtldP8o1WPy",
        "DLFdU30",
        "WQ8DW77dHSkd",
        "WQ8QW5u",
        "bSkuW4u",
        "WRNcVCosW4TU",
        "W67cMSk4W5S",
        "W5KJW5ddL0i",
        "W7xcU8kUjLhcLmkmWRRdLmkFW6XH",
        "sXhdOr3dGG",
        "WR/dUNJdHcSIWRC",
        "W7BdSSo8W68GWQK",
        "nSoNW712oW",
        "W7ukW4dcGmok",
        "W6xdJCoaW7WK",
        "WR95wmklEG",
        "jSk9W5VdPM4",
        "WPNcPCk7smoI",
        "W5xdLmoHBxm",
        "WQ0hW7/dRCk0",
        "Be3dOxS",
        "WQZdShW",
        "WRb5qmoMW7W",
        "rCknWOVdHSkh",
        "W68JW77dVwS",
        "Dmorg8kcWP0",
        "j8ogCSk8zq",
        "iN4EpmkH",
        "kdzvWQG",
        "WQO8W7pdKZa",
        "WRJdO23dPSkk",
        "zCoklSkPi8kNWQtcMwrDW7Hpsq",
        "W6BdRCo+W6u1",
        "W6xdQmoHW6q",
        "WQRdQSoOraRdGSkCW4lcNG",
        "CfldLL3cVW",
        "WQ10W7NcOJ0",
        "BmkVW7ZcRfm",
        "W53dQmo0",
        "fSo5WPdcQGC",
        "EmkqWPZdQmkZ",
        "WODFwCkjyG",
        "WQFdKmo8W7qNyCkhWQFcSIJcGb/cNYW",
        "WQhdVhZdQ8kx",
        "nxChAXy",
        "WPNdPMtdMXC",
        "WRRdPXzRW7W",
        "W6ldR8o9W7SQ",
        "WPiYW6O",
        "W4VcRvldO18",
        "W7NcTKtdN3a",
        "jmozBG",
        "emkkW5jHuW",
        "AIWQrG",
        "W7BcU8k+W6tcNa",
        "C8ogiXJdPG",
        "pqZdG1hcLG",
        "aCoDt8kpvG",
        "W57dOSoWr1FdGapcGwXcrrK",
        "WQf0Fmo3W5VcVXq9",
        "W4dcOSkQW7VcSq",
        "WOyieq",
        "sW4QEYKXycG",
        "jmomW4vvkW",
        "p8ktWPVcVfW",
        "WPOhW7VdJCkRFxlcICkhWOvC",
        "WQa8s8oN",
        "x13dU0BcTq",
        "WRZdMgtdUWW",
        "WPqYW4ldMHCwzWNdMq",
        "W6BcLmk8WQS",
        "WRuUWRpcQCkUxYnpjq",
        "eX7dSSoFWPq",
        "AJqaASkQ",
        "WPNcNSoyW4T0",
        "WPCrW4tdRte",
        "WQpcRSoKWQas",
        "W6LZWPm",
        "W6mdW5VdSw8",
        "fmkaW5hdH0K",
        "gJRdNvBcHa",
        "oatdHq",
        "WOxdHb1iW50",
        "iCoZWPRcHH8",
        "WPzLzmo/W7K",
        "jSkrW4DTAG",
        "dSkkW7fjwq",
        "WPeYW5xdQJO",
        "WQxcISogWRy7",
        "grvlWQldVa",
        "WOVdNCoREqC",
        "WO9eFCoZW7/cRW",
        "W49WWRBcVSoV",
        "tcaEt8kK",
        "WQZdM3/dMmkL",
        "WRNcLCoJWO8N",
        "zCk1W5/cUv8",
        "WOVcO8otW7LY",
        "uZBdNbFdQW",
        "caxdLCovWOO6W78",
        "WO10Ba",
        "WP7dR0JdLc0",
        "W4JcGg3dPvO",
        "W7a9W5tcOCoUsN5u",
        "WRv8CSkuf8khW5DZdZq",
        "W7NdPCoRW6O7",
        "oYTCWQ/dTG",
        "WQddHHPgW44",
        "WOLWzSoXW7NcVG",
        "WOOmW6JdMSknFehcHCkIWOu",
        "W6FcLCkWW4tcNmkh",
        "W7JcM13dJa",
        "WOVcO8orWPiqWQLca8ogCW",
        "kcXw",
        "W7/dKCobW6eB",
        "W5NdOSo8CMhdLqlcJwjExXK",
        "WRRcVmolW5PB",
        "W4FcOepdSIi",
        "eLatgCkRbW",
        "t0PYze4KeX7cOCodxfvBW5ei",
        "ySoLpSkxWR4",
        "WQlcMmkk",
        "WRvOW6BdH8ou",
        "WOJdJtrRW5y",
        "WP7dMJvsW7i",
        "WOepFSopWRi",
        "WPzrW54",
        "oXVdMv7cUa",
        "WONdHv3dQG",
        "WOldMXr9W50",
        "dHVdISouWPC",
        "k8k7W63dJ0S",
        "W6qbWOK",
        "WR5NW6/dUmov",
        "sCkjWONdRSk6",
        "l8oMW5vdhW",
        "W57cG8kUW7VcMa",
        "W7/cHCkQW4S",
        "WP3dNCokqI0",
        "WQe8sCodWPi",
        "lHldULNcJW",
        "W6alWOhcRa",
        "WQDwvSkFrq",
        "uCoubmkT",
        "W47cVKZdVKW",
        "r8opW4vHo0XwWP1CtSkWWRK",
        "WRFdJJDDW7m",
        "naRdO8oNWOa",
        "WPOrW6RdI8kRyfy",
        "WQi2WPZdPbldTtJcT8kLWRfRW4q7",
        "WRVcKHZdMeaaWQOdBSoSvCoWBbxdQa",
        "WRxdSdD3W5C",
        "rCo9W67dGIeUWP3cS8ohWO8Xaq",
        "W7/cUmkQkfRcMSoDWR7dG8k8W65yaa",
        "FCo0W6ZdJ39HWQFdMG",
        "W6VcQL3dKgW",
        "W4NcVSk/WRf+j8orW4hcHq",
        "avan",
        "WPPwW6FcVHW",
        "srhdNIldHG",
        "k2TRgmowWPxdTaCtEsGL",
        "wCo4fCkaWR0",
        "W6BcJSk/",
        "jmodBCk9",
        "p8oXWOZcIWm",
        "pSkPW7ldM1L3WRVdUmoEW5WhWPdcNmkLDSohz8kiWRi",
        "dCkKWOxcSvO",
        "tCoofmkKWQpcJruD",
        "WQrXsG",
        "WQJcPSk2u8oS",
        "AIldIYxcHZxcI8o2k8kIW79ZW608W5xdT2i2bmkemCkH",
        "WPRcUSosWPi",
        "kbLtWOhdNa",
        "W7SpW6JdNey",
        "W6PEWQ7cTSok",
        "W4ldImovW7uV",
        "mCoxBmkIzG",
        "WR7dGSkAW4JcM8krW4NdUG",
        "WRPZW6lcGdG",
        "W6xdSSoI",
        "C8oOpq",
        "WRRcMSoo",
        "W43cR1RdHZRcGclcHWvWWQi",
        "WOaYxmo3WO84bt4",
        "eLuEaSkG",
        "W5ZcOCkJW6ZcSq",
        "WPv6Ea",
        "nMGB",
        "WPLRW77cQca",
        "WRPWWOrvW6a",
        "kwy8mSk/",
        "udrUW7BdLmo7WPZdNCkL",
        "WPJcQSosWOOEWQvueSoMFNNdQeGTwahdGW7dRwq",
        "WQtdLSo5W7OOzCklW5hcTtBcVHVcQa",
        "W7/dGmkmWQixW7VcVSofWQ0Xi8o7mG",
        "AMhdKxtcHW",
        "WOX3W7RdUSok",
        "W77cR1JdN13dLXVcGq",
        "W5ldLCoRW6KP",
        "ymo1iYtdRG",
        "qmofe8kxWRlcLWOCEvVdISoYWQrAjSkxWQ5KyNrKja",
        "W53dL8owDKy",
        "WPbGB8ki",
        "WQrRsCkN",
        "lG8fW5lcHW",
        "W6tcIgRdQIC",
        "WQBdKX51W4m",
        "WQddQSoVyGldI8kn",
        "W5RdR8oyW6mn",
        "vGWDrSkk",
        "pmk7WQ7cLgO",
        "W6JcQuq",
        "WO0MW6ldOSk7",
        "lmoTWPlcRtG",
        "W4JcLSkRW7xcTq",
        "WQldO8oqvHS",
        "WOhdUCowvI8",
        "BXaOr8kT",
        "WRVcMCkoB8owuSoFW6SjiKe",
        "WQBdU8ooqIG",
        "n3aVDa0",
        "WP3dLvJdNXO",
        "vCksW7JcVxu",
        "vs8yqmk5",
        "ESkoWOVdQmktkSoKW4dcVbe",
        "WPaYW7y",
        "dtruWO7dMq",
        "rmoKpCknWO4",
        "W4VdLSoQtvy",
        "WQxcMCoYW5XA",
        "nCoMWRhdRsPMnqlcUSkpWRJdK8oa",
        "p3WsvYu",
        "w8o4W6pcN3JdVMNdRSkhd8kJ",
        "WQaiE8oyWQu",
        "WQxcNSo1WRGq",
        "lI8YW6VcPW",
        "WRFdQHTyW4m",
        "WQngWQvTW4G",
        "WQlcLmonW5rvWQZdNSovWOGRdCoJdrG",
        "W6PSWO/cLSo9",
        "zSkSWR3dG8k9",
        "WOdcT8ouWRSG",
        "i8o0WOFcVsm",
        "WOjtW73cHJpdTXK",
        "WOf5ECkswW",
        "WR3dK1JdH8ky",
        "W6NcVfZdOHC",
        "obNdLmosWPf8W60jWPK2jmojWPqIW5qnB37cVW",
        "iCoyESkWD8kYW7NcGdy",
        "et0UW6i",
        "oeqCyJ8",
        "WQhcKSko",
        "W7ZcGmk1W4RcGa",
        "WQJdVrm",
        "W6VdRLDnWOPiW4vctW",
        "WPrYW7BdGmoj",
        "WOneWRT4W5q",
        "kcTtWQhdVG",
        "EmoXpXRdH2pcRa",
        "W6pdHSojpCksa8kdWQivkMmzWORdQq",
        "WOVcNCotWRWs",
        "pmkHW5RdQNu",
        "kx3dHIxdRghdK8kV",
        "kqLFWOVdOa",
        "oSowW4T1jG",
        "WRFdJb4",
        "ew4nFrW",
        "W5/dQCovAKq",
        "WONdOL7dK8kj",
        "dCkMWQW",
        "cLK2",
        "W7BdQCoQ",
        "WRxdSdzVW5G",
        "n8kXW5LDsq",
        "qmotemkWWRRcGrqhza",
        "WQz7ACknAG",
        "W6VcQZ7cOxr/W6lcQmomWRi5cWW",
        "5BYP5yM75O2b5lU85lMW5AYa5zYm772U6k2N5Qg/5P6j5OYU5lQj6zMRgW",
        "sCoteSkJ",
        "WRawW7RdUCk/",
        "vWRdPXFdHq",
        "WP8dW5VdKSkb",
        "B8kpWPG",
        "WQNdMLZdTSkt",
        "WRzwvmk1FW",
        "W6y/W5NdSa",
        "W7m7W6pcOCo0",
        "dcTiWRxdHq",
        "fSoermkVuW",
        "DSoSg8kKWQe",
        "jgWcsXi",
        "lqddVNdcPW/dJfe",
        "WQf2xSkRFG",
        "WQGWASoiWRu",
        "WPzwFCkHwG",
        "xbldMcRdQG",
        "oYzOWPddIa",
        "WP7dLvRdGCknpmoBggVdLa",
        "WPzHACoIW7JcPq",
        "o8oqW6XBogBdIa",
        "WRldMZD7W5a",
        "WQxcGmoVWQKB",
        "WRVdT3BdVXG",
        "z8o0obS",
        "m8otASkfy8k0W6pcIIzyWR1wmGq",
        "WRb1W7tdV8ok",
        "WQJcQmosWQSw",
        "lmkwW5zyAW",
        "WRuUWRpcQCkPxYbpj8ojmW",
        "bmooWRa",
        "WPzlW53dMa",
        "D3/dLL7cGa",
        "Ex3dI3FcOa",
        "W6yLW5O",
        "ymokl8kPi8kNWQFcMwe",
        "pSomW7bhpNtdHu4Y",
        "WQDKW4lcTbi",
        "WO8ez8ouWRG",
        "ed3dOmoUWPm",
        "qmoudaRdHG",
        "EfNdPNi",
        "hKS5AXC",
        "WQjZESoaW4W",
        "f18bCWa",
        "WOf7W4RdGSoN",
        "WORdLcjsW6W",
        "W50iWQdcQmkz",
        "cmkhW6NdVgK",
        "WQvZACo1W6JcUHq5W5e",
        "W53dSSo3BG",
        "bmkmWORcRgi",
        "WOX3FmkcrG",
        "W75RWOHSW5iqW7S",
        "W6CZW6VcUq",
        "WPGuW6FdRcK",
        "C8kjWOxdJ8kg",
        "lsRdV3tcTa",
        "gmoRWQe",
        "WORdTYnOW5S",
        "cue2uYC",
        "ddi3W4NcIG",
        "smkUWRRdVCkU",
        "pG7dJ8oOWQu",
        "AcRdMq",
        "W7P0WPNcKmot",
        "WP/cSCktzSou",
        "W7VcNKldJqa",
        "WPvDB8kMua",
        "fmkurCo8W6ldNuOrxuldPmorWOe",
        "j8k4W5NdM38",
        "d8kWW5jECW",
        "uCoobW",
        "WR9hWRO",
        "dCk8WQ/cNq",
        "FCo+WRhcMaKYWQZdK8oDW4WoWQO",
        "WQJdT3NdSra",
        "WPb7E8o+W6tcSau",
        "hGpdNmosWRK",
        "WP/cH8o1W6nQ",
        "WObrW4ddHa",
        "vSocerVdNG",
        "lSo/E8kgwa",
        "WR3dOmoS"
    ];
}

function QOQQ(_0x4aea86, _0x36e8fe) {
    const _0x576afd = QQQO();
    return QOQQ = function (_0x274772, _0x4d12b9) {
        _0x274772 = _0x274772 - 0x1e7;
        let _0x2e71a9 = _0x576afd[_0x274772];
        if (QOQQ["gYcXjc"] === undefined) {
            var _0x351913 = function (_0x5e79fc) {
                const _0x1ec579 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let _0x3460f6 = ""
                    , _0x56eb7a = "";
                for (let _0x5d09b1 = 0x0, _0x3d27b0, _0x3baf31, _0x5b9f69 = 0x0; _0x3baf31 = _0x5e79fc['charAt'](_0x5b9f69++); ~_0x3baf31 && (_0x3d27b0 = _0x5d09b1 % 0x4 ? _0x3d27b0 * 0x40 + _0x3baf31 : _0x3baf31,
                _0x5d09b1++ % 0x4) ? _0x3460f6 += String["fromCharCode"](0xff & _0x3d27b0 >> (-0x2 * _0x5d09b1 & 0x6)) : 0x0) {
                    _0x3baf31 = _0x1ec579["indexOf"](_0x3baf31);
                }
                for (let _0x4e3858 = 0x0, _0x13215a = _0x3460f6["length"]; _0x4e3858 < _0x13215a; _0x4e3858++) {
                    _0x56eb7a += "%" + ("00" + _0x3460f6["charCodeAt"](_0x4e3858)["toString"](0x10))["slice"](-0x2);
                }
                return decodeURIComponent(_0x56eb7a);
            };
            const _0xa4b335 = function (_0xe47c76, _0x35d1b5) {
                let _0xe2f071 = [], _0x1ec36b = 0x0, _0x1eeb4c, _0x24749e = "";
                _0xe47c76 = _0x351913(_0xe47c76);
                let _0x216b13;
                for (_0x216b13 = 0x0; _0x216b13 < 0x100; _0x216b13++) {
                    _0xe2f071[_0x216b13] = _0x216b13;
                }
                for (_0x216b13 = 0x0; _0x216b13 < 0x100; _0x216b13++) {
                    _0x1ec36b = (_0x1ec36b + _0xe2f071[_0x216b13] + _0x35d1b5["charCodeAt"](_0x216b13 % _0x35d1b5["length"])) % 0x100,
                        _0x1eeb4c = _0xe2f071[_0x216b13],
                        _0xe2f071[_0x216b13] = _0xe2f071[_0x1ec36b],
                        _0xe2f071[_0x1ec36b] = _0x1eeb4c;
                }
                _0x216b13 = 0x0,
                    _0x1ec36b = 0x0;
                for (let _0x53357e = 0x0; _0x53357e < _0xe47c76['length']; _0x53357e++) {
                    _0x216b13 = (_0x216b13 + 0x1) % 0x100,
                        _0x1ec36b = (_0x1ec36b + _0xe2f071[_0x216b13]) % 0x100,
                        _0x1eeb4c = _0xe2f071[_0x216b13],
                        _0xe2f071[_0x216b13] = _0xe2f071[_0x1ec36b],
                        _0xe2f071[_0x1ec36b] = _0x1eeb4c,
                        _0x24749e += String["fromCharCode"](_0xe47c76["charCodeAt"](_0x53357e) ^ _0xe2f071[(_0xe2f071[_0x216b13] + _0xe2f071[_0x1ec36b]) % 0x100]);
                }
                return _0x24749e;
            };
            QOQQ["tWYplk"] = _0xa4b335,
                _0x4aea86 = arguments,
                QOQQ["gYcXjc"] = !![];
        }
        const _0x3264a8 = _0x576afd[0x0]
            , _0x3b58ab = _0x274772 + _0x3264a8
            , _0x39cd3b = _0x4aea86[_0x3b58ab];
        return !_0x39cd3b ? (QOQQ["NVFzSW"] === undefined && (QOQQ["NVFzSW"] = !![]),
            _0x2e71a9 = QOQQ["tWYplk"](_0x2e71a9, _0x4d12b9),
            _0x4aea86[_0x3b58ab] = _0x2e71a9) : _0x2e71a9 = _0x39cd3b,
            _0x2e71a9;
    }
        ,
        QOQQ(_0x4aea86, _0x36e8fe);
}

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


function encryptStr_QOQQ(path, name) {
    if (types.isIdentifier(path.node.init, {name})) {
        const leftName = path.node.id.name;
        const binding = path.scope.getBinding(leftName);
        if (binding) {
            const {referencePaths} = binding;
            for (const p of referencePaths) {
                if (types.isCallExpression(p.parentPath)) {
                    const [param1, param2] = p.parentPath.node.arguments;
                    const plainText = QOQQ(param1.value, param2.value);
                    p.parentPath.replaceWith(types.stringLiteral(plainText));
                    console.log(`${leftName}('${param1.value}') => ${plainText}`);
                } else {
                    encryptStr_QOQQ(p.parentPath, leftName);
                }
            }
        }
    }
}

async function main() {
    const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./page12.js");
    let jsCode = await readFile(encryptJsPath);
    const ast = getAstByJs(jsCode);
    // 字符串解密
    traverse(ast, {
        VariableDeclarator(path) {
            encryptStr_QOQQ(path, "QOQQ");
        }
    });
    let newAst = getAstByJs(getJsByAst(ast));
    traverse(newAst, {
        Identifier(path) {
            removeUnusedCode(path);
        }
    });
    const newJsCode = getJsByAst(ast);
    const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./page12_decrypt.js");
    writeFile(outputJsPath, newJsCode);
    // writeFile(outputJsPath, jsCode);
}

main();
