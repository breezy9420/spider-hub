import {
  readFile,
  writeFile,
  getJsByAst,
  getAstByJs,
  decryptHexStr,
} from "../../../util/ast.js";
import { __dirname } from "../../../util/index.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import vm from "node:vm";

const traverse = traverseModule.default || traverseModule;
var qa = 116;
var Zi = 632;
var tk = 276;
var t=  [];

// 解密上下文：每次 eval 前会把抠出来的依赖文件在这里跑一遍
const decryptCtx = vm.createContext({});
const tmpDecryptPath = path.join(__dirname, "src/ast/pzds/tmp2_decrypt.js");

function U() {
  var ts = [
    "ulZuZSP",
    "vIZqNCm",
    "uHNb99m",
    "iiFSvO5",
    "ZUgM+SJ",
    "ZIIcvEHdsGgf",
    "iHg/2a6Xa4a83N",
    "9xKTvG",
    "wUZWNPj",
    "Wyp2NTj",
    "h/Fu+Os",
    "+/FwWJn",
    "+UN12Fs",
    "ZvKehFn",
    "NUYTkNj",
    "kxFXQN6inJ",
    "NHNzVCi",
    "kcaXAOq",
    "WUESZC5",
    "Zl21A9P",
    "Nqh7k9q",
    "kqhq9Tj",
    "kUZxQaxNr32t38",
    "r0eNpKj6jWaTLELE",
    "uvhEkNc",
    "+qBo2Fm",
    "Vc2XvT1iOZBPG8",
    "QqZ/ha62nKd4Ja",
    "wlpwTTc",
    "+/4aA+W",
    "Vc2XvT1Z++a3mF",
    "9U/xAac",
    "Ny8U9913oGKuUF",
    "iHgoiObNOnhqf8",
    "QxR9vZi",
    "jktwj4WPreKp4nDx",
    "2UEsk8i",
    "iIBqQtw9nbM",
    "QqFP2+b6K3KQ48",
    "u/h898P",
    "wvZ09aP",
    "QBKmh+5",
    "QQE6QNP",
    "+IhTvJ5",
    "vH/pvtwO",
    "Q/gPp4nnNM+ES8",
    "VIg+vtQ+OZBmG8",
    "QHZTNF6OOZBfC8",
    "kxgZAb",
    "hQIPvFScKT",
    "2//UvCn",
    "vcau2NwOa3ZSFF",
    "vHF/Q8T",
    "ZxN6kCP",
    "kl2PTP5",
    "Qs252am",
    "TiZqvNP",
    "NQZYvC5",
    "NU4JkM0",
    "2ilWp4inNMvmSN",
    "hxZXvb",
    "ko842aP",
    "Z/B2V6q",
    "rkR9pEWOe4Ft0nVB",
    "iBaRZ+i",
    "kqBz9mn",
    "hQIrAb",
    "kxKZ2OXgnVA",
    "9vF7k+q",
    "NHIX+NT",
    "9U8riJm",
    "w/azQOs",
    "iQBMZTW",
    "kcNZitUTX4ZD",
    "i0A+pu",
    "jjeZpKPaN++g88",
    "wi/bZMn",
    "iHFX29uO",
    "iHg/v+bTa3K3fa",
    "NxNMi+0",
    "+B2rZmm",
    "2o4VV95",
    "koK0vSP",
    "kogz+9k",
    "jsMNwE6oN3DdtF",
    "QHZTTF6NnJ",
    "ZihFNJj",
    "+BFBV8s",
    "wUNwv9c",
    "vBgPvtQaKP",
    "N/BCi+5",
    "vyh0QPj",
    "NshjVNs",
    "2hBEv9W",
    "ks/oAM1WnKD",
    "xxpPhP1ZOK20Ga",
    "+QKTib",
    "kcNo2+uTKJ",
    "iHKsQb",
    "Rxehrd1ZTT",
    "2qaaWFm",
    "wB2L96m",
    "ksZVib",
    "j0+wpK56efhVBKRb",
    "ZvhC9Nk",
    "vUZkASb+sP",
    "Tq/8QOm",
    "kQKTTOP",
    "uyYChOz",
    "Zx48hFP",
    "NoN2iCc",
    "V/pHsTC/",
    "wHZKv8Q2aZh5",
    "TBNVvTP",
    "+cpq+Cz",
    "+qNMQTi",
    "2Q/ZvFW",
    "kHZTVMbhK48MCF",
    "QUZThOm",
    "wx4xvFwOe4IElN",
    "TvgMiac",
    "wxgS289NOWa3JN",
    "koZwvOk",
    "uIFdvFj",
    "jqMWwE6o+eDd",
    "vQ+9uP0",
    "hoIo9am",
    "2shWRMHL9thCU8",
    "hQN52+X9X3YQ",
    "+xECNOJ",
    "wQZVAb",
    "Q/a/2aT",
    "WIpt96s",
    "Qiaav+J",
    "kUF8+Cq",
    "9I2g9mP",
    "iQ8rkFXQseN3Ga",
    "TvE0vJP",
    "sxN6hNXTKKh58N",
    "2o/EA6s",
    "hiaeiF6psXM",
    "wQ83kT5",
    "2o2RZSk",
    "2BasAPj",
    "wlpMVa5",
    "TUYqvTW",
    "kyIZZ6J",
    "Qq/oQCwAe3KX3N",
    "kUKNZtz",
    "QxgxNFXOnKI3CF",
    "Ny/N2OP",
    "iyNgTSf",
    "WB4GQTi",
    "usa3i9k",
    "hU2eiCP",
    "Zl/tV6j",
    "QHZTVMbhKJ",
    "2ihlV8P",
    "kxg+",
    "kcZK2a6XX4EC",
    "jsMkwEuoN3DStF",
    "WvZkWtP",
    "v/FB2ms",
    "9cNUVFP",
    "QyYGZTT",
    "2x8ZNO0",
    "iHg/hOuO",
    "2Q88+9n",
    "Wi41+aP",
    "Tv2P96k",
    "QxZaitUNodKUJF",
    "+hasZJ5",
    "Q/KSQPT",
    "TQgVWFm",
    "j0K99TuzxWA",
    "Vc2XvT1iOZBC48",
    "+QZq26s",
    "oIMpuFzXPGFhJN",
    "wx4xvJ1q",
    "WxF5vTP",
    "jkO+REQGxf4eLfa",
    "wvIS9TP",
    "hs/6vu",
    "9QgRQNT",
    "2shzQtz",
    "Vc2XvT1uKMYGG8",
    "kHZX2+wA",
    "NyhBN6j",
    "V/Ycu4CB6OOBt8",
    "jiMTwEQo+dDb",
    "VsYDu8wloXy0BN",
    "ZoFGT6c",
    "QvpBANP",
    "Qv4ZVFk",
    "VcajhtUOnKy",
    "9HgmZmc",
    "9vYM++5",
    "+xp/vtc",
    "kH8rhOn",
    "iH2BN+c",
    "vHEWQOUNnVA",
    "uo/Gh9m",
    "+QpZZJP",
    "wxgqQarNOWa3JN",
    "2oFlh6i",
    "pjOWj45RsXM",
    "WIhtNtU2n4/8G8",
    "iU86vb",
    "ZUg62Oi",
    "TqZav+XX",
    "hv29V+P",
    "VcN62a6ynKa33F",
    "9l2gTSc",
    "k/BRiO5",
    "kypB2Ok",
    "kcNG9Pi",
    "vUg+",
    "NBpl9u",
    "wqFM9Oc",
    "QxNphFT",
    "kxKTiMUZn4v",
    "uQ8KTMW",
    "vxgehF62nKd",
    "uBpR9O5",
    "hxgVAb",
    "WlBJ+Oc",
    "iHg/2O1vKJ",
    "QxgeAtGNnVA",
    "QxKTh4c",
    "Ajpip4QoN3DDtF",
    "QUgZ+tuWXm",
    "hQIWAFP",
    "wyKO98k",
    "9UFoV85",
    "QxZH/8f",
    "vHBSkNs",
    "ic/6hF6Np4gt38",
    "Vc2XvT1XK4gUf8",
    "kopPZan",
    "QxZH",
    "Zxpzhas",
    "9Hgq9CP",
    "wQI62OwZOEv",
    "vUKNitrZaE85",
    "iQp+uawWsX8FF8",
    "2xIOW+z",
    "WvgCVtf",
    "ic/2QJj",
    "kI2Y9mj",
    "ws/9vG",
    "ucBMiJW",
    "ZlpEN6m",
    "QH2SiPm",
    "wBhg96J",
    "wxgdA8Q2nZ+",
    "Vx/Du8rlWO4hd8",
    "ZBF0kmn",
    "WUZO+FSe",
    "+xY/QaP",
    "hxKV9arQodKUJF",
    "uvF0VPc",
    "NyBPA+s",
    "kohkvti",
    "ks/oAM1O63pt",
    "hQI/vFQD/5I/",
    "NiZbASf",
    "iH4o2Pk",
    "uyNbZOm",
    "NBp/2Ns",
    "kUK/vM1h",
    "NQF7QJn",
    "+h/pQO5",
    "+QK798W",
    "Nx/r+MJ",
    "VIDWpMiX+M2t88",
    "Ql8S+Oi",
    "NQ/+++J",
    "wxpV+m5",
    "vQKThOm",
    "j0AwpEna+ZA",
    "kHZTTF6NnJ",
    "Nyp8Ntm",
    "kHZ/vSQiKdl",
    "xIdjpd5j",
    "hlIb+6z",
    "TypVv9k",
    "TygW2Oj",
    "WqBGi+P",
    "W/pjVPW",
    "kvZ3+CW",
    "QU4Z2a65XEBBGF",
    "TcN8QFW",
    "hlpp9mm",
    "QxE5A6n",
    "ko2F+as",
    "uBBd9Fs",
    "uU//kTW",
    "wlIp+Jk",
    "QqZ/ha62nKd",
    "ZBNa+aP",
    "hlIVi8T",
    "+yF/TCz",
    "wUYl+tz",
    "jcMZ",
    "hcZt+T5",
    "9U8lZ+s",
    "kUZTAFQQVdawbN",
    "iyYZ+Oj",
    "kUZavFQXK3e",
    "TH8rvtUO/32L3F",
    "iqBFkJs",
    "klgKAmP",
    "+iFgk8c",
    "QU4sAMXX",
    "Wo/l2Mz",
    "9i/P2F5",
    "9iaWATT",
    "kBgVhaQ2Od2QGa",
    "kyN0i8k",
    "kUZWQMuWKJ",
    "vvKzZCf",
    "QiF6hX",
    "QQIT",
    "+xZ4VNi",
    "v/h0vTi",
    "hH4EvFs",
    "+q/FWmP",
    "iHKsQm9Ae4E83N",
    "kUZTAFQQVd2Y48",
    "WcFt9Js",
    "j0RwREkpaXZW1EoZ",
    "2QgrNOP",
    "QQIeQO6NsXM",
    "VIgakM6XX3ZtJa",
    "uv4bAPP",
    "vI2mQmP",
    "hQg/",
    "psMZwE6o+dDdm8",
    "Vc2XvT1AnK81",
    "TQ4qiCW",
    "kqpsWFc",
    "ilg+99n",
    "vc/BZ95",
    "hHhLhFP",
    "+H/pvtwO",
    "k/adi9J",
    "iUgPkG",
    "vxgehtCfaE85f8",
    "QQIeQO6N/GKR0N",
    "+IKE++j",
    "Z/BMh+s",
    "hHZw2X",
    "2i2t+Pk",
    "iiK6QtJ",
    "QvYVkCP",
    "rqM+wEuo+tR",
    "pj4yxKf",
    "NHFMAFm",
    "NHYOiSk",
    "WhF8APk",
    "QHZT",
    "kcNXhO7tOZ/GG8",
    "+vEw+8c",
    "Qq2lvtJ",
    "kH4OhOSv",
    "QxZKAtj",
    "hi4LTSq",
    "hiKmkCj",
    "+vEp+6W",
    "vhaa98n",
    "kQZ7ZCf",
    "NQ8FVTi",
    "TIaZ2+5",
    "uqNLVM0",
    "+iFPV9f",
    "ZoEqT86OObKtJ8",
    "+vBYA9i",
    "+BKUQFP",
    "Vc2XvT1Z9MZFGa",
    "vxKVAF6iOEZYCa",
    "kQpZNPn",
    "QI2CVMi",
    "iU8WiSm",
    "vc/r++XOeKL",
    "wx22TTm",
    "QxZeQO6N/GKR0N",
    "QUpBvNn",
    "QQErAb",
    "ulg9ZFm",
    "vQKW",
    "rsMVwEuo+dD5",
    "ZqKOh9c",
    "hUgrQu",
    "Qs/EhCq",
    "vBFS2Ps",
    "uIaWhas",
    "iq4TvCCNnZN84F",
    "jUp6pKj",
    "uH8bAMc",
    "uqaBNJs",
    "v/ZmV6m",
    "QxZKAtrTK3e",
    "iQIPQOfAuFp75F",
    "iU8ohZc",
    "vB4zvMs",
    "WI/YAPc",
    "9hBe2+f",
    "ZiKLiJm",
    "iHFX29wiKEheCF",
    "wi/U+tf",
    "jcMWwEXo+3D5tF",
    "2x20Qac",
    "uh4T+Tc",
    "QQI9QtXXe4KBG8",
    "vxZ/va6A",
    "WiFa+Jm",
    "usprQaj",
    "WvptT95",
    "iq4Whtq",
    "Zh2RNtc",
    "QINaiOf",
    "2vp/+a5",
    "QU8oQai",
    "+yh3vMq",
    "Wchr+Fm",
    "kHZ49MW",
    "9IhWv9W",
    "wUN52tq",
    "pjVZRZna634545y1",
    "Qx4N",
    "Ti/6vCz",
    "WQIuvPc",
    "kUZavFQqsP",
    "9qhlhac",
    "WcNZitUT",
    "QxZeQO6NsXM",
    "2Uh596k",
    "QH8ah6z",
    "wxpj",
    "jsMTwEQo+3Db",
    "Qq/6Van",
    "ko4zQMf",
    "+vh/+Jk",
    "+Upg99J",
    "hs/qh9s",
    "kcNXhOz",
    "Qq/6AC5",
    "vca6Q9uXKeO",
    "iqZ5hJP",
    "iQ8rhOSvKeKtGa",
    "wQYo9Ni",
    "TUpF9MW",
    "+lI8ACc",
    "uQ45WSn",
    "Tv/3+SXSpnYRYa",
    "kcasiFP",
    "ivF8NCq",
    "NcB32Os",
    "vo4V2T5",
    "vUKxvG",
    "voBtAMW",
    "iQ/evMX9",
    "j0AwpEna+ZAl",
    "v/ZGktc",
    "+q4w985",
    "kxKTib",
    "9yZm",
    "ws4WvJ1q",
    "WcNo2+uTKJ",
    "ZHIXAMb6KFpG3N",
    "QhNo+Ns",
    "hxgVAMUZn4v",
    "u/Fa+Ci",
    "wlhTA65",
    "+IpJitW",
    "NoKoWtCRjeaDCa",
    "NvFBQJn",
    "QvBMVNT",
    "WIB/+mn",
    "hBhkv+J",
    "piMup8JOPMaIma",
    "vIK12Mj",
    "iBpP2TT",
    "QQhOiMbwXKgl3a",
    "uhhMWmb1e4KGGF",
    "ZxIZ++m",
    "Nv8xWti",
    "9vI3ZOi",
    "iHKeiMXq",
    "w/ZPVmn",
    "+x4xiFP",
    "QxgeAtGNnV2O3F",
    "WiNdVtJ",
    "2U2Pi9c",
    "vyFgTPc",
    "TQY/QNj",
    "VcZ/AaQZOdptGF",
    "voZYvmj",
    "iQF3WS5",
    "Qi/ZQai",
    "vQZTiM1+",
    "koh+9Oq",
    "kcZK2a6X",
    "QBZMW9q",
    "NHZOiJj",
    "Tqp8h+n",
    "2h/qVmj",
    "2iZYN9W",
    "wo4eA+W",
    "TiZ3A9z",
    "9yhYTmm",
    "Qi/TkG",
    "VIg/itrAaEI3Ja",
    "hH8aAtn",
    "+/h+TFi",
    "+H2VQOc",
    "9qFYkJm",
    "QqB2h+m",
    "VHNwZObT",
    "wxZVAb",
    "wI20Z+f",
    "9/BWTSs",
    "2lBEQ+0",
    "WHBoiFs",
    "hxKVib",
    "kH8tkTs",
    "uy8lWNP",
    "9/aPk+s",
    "iQI22Oz",
    "uQ4/AESEOVK3F8",
    "QiauZ9j",
    "uHZdvtc",
  ],
  t = [];
  U = function () {
    return ts;
  };
  return U();
}
function i(S, n) {
  var K = U();
  return (
    (i = function (f, x) {
      f = f - 116;
      var Z = K[f];
      if (i["zOGjGa"] === undefined) {
        function M() {
          var d = Math["pow"](-274 + tk, 31) - (-275 + tk),
            B = 47995 + tk,
            c = -276 + tk;
          var R = t[t["length"] - (-275 + tk)] % d;
          function D() {
            return ((R = (B * R + c) % d), R);
          }
          return function () {
            return D() % 64;
          };
        }
        var E = function (d) {
          var B =
            "jrpRsx/onXKeP6aOkw2AiQhvWuZVT9N+01YLqUBlfG43JCFtz7gDcHIy5bEdmS8M=";
          var c = "",
            R = "",
            D = M();
          D();
          for (
            var V = -276 + tk, m, I, g = -276 + tk;
            (I = d["charAt"](g++));
            ~I && ((m = V % 4 ? m * 64 + I : I), V++ % (-272 + tk))
              ? (c += String["fromCharCode"](
                  255 & (m >> ((-(-274 + tk) * V) & 6)),
                ))
              : 0
          ) {
            I = B["indexOf"](I) ^ D();
          }
          for (var s = 0, p = c["length"]; s < p; s++) {
            R +=
              "%" +
              ("00" + c["charCodeAt"](s)["toString"](-260 + tk))["slice"](
                -(-274 + tk),
              );
          }
          return decodeURIComponent(R);
        };
        ((i["gYzYau"] = E), (S = arguments), (i["zOGjGa"] = !![]));
      }
      var b = K[0],
        j = f + b,
        W = S[j];
      return (!W ? ((Z = i["gYzYau"](Z)), (S[j] = Z)) : (Z = W), Z);
    }),
    i(S, n)
  );
}

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

function encryptStr(path, name) {
  if (
    types.isIdentifier(path.node.id, { name }) ||
    types.isIdentifier(path.node.init, { name })
  ) {
    const leftName = path.node.id.name;
    const binding = path.scope.getBinding(leftName);
    if (binding) {
      const { referencePaths } = binding;
      for (const p of referencePaths) {
        if (types.isCallExpression(p.parentPath)) {
          const expression = p.parentPath.toString();
          if (~expression.indexOf(leftName)) {
            const [param1] = [...expression.matchAll(/\(([^)]*)\)/g)].map(
              (m) => m[1],
            );
            const param1Val = vm.runInContext(param1, decryptCtx);
            const plainText = i(param1Val);
            p.parentPath.replaceWith(types.stringLiteral(plainText));
            // console.log(`字符串解密${name}:${leftName}('${param1}) -> ${plainText}'`);
          }
        } else {
          //   encryptStr(p.parentPath, leftName);
          if (p.parentPath.node.id?.name) {
            encryptStr(p.parentPath, p.parentPath.node.id.name);
          }
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

function findIdentifier(ast, name) {
  traverse(ast, {
    VariableDeclarator(astPath) {
      if (types.isObjectExpression(astPath.node.init)) {
        const code = `var ${astPath.toString()};\n`;
        fs.writeFileSync(tmpDecryptPath, code, {
          flag: "a",
        });
        // console.log(`抠出对象声明: ${name}`);
      }
    },
  });
}

async function main() {
  const encryptJsPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "./Lblfpo.js",
  );
  let jsCode = await readFile(encryptJsPath);
  jsCode = decryptHexStr(jsCode);
  const ast = getAstByJs(jsCode);
  traverse(ast, {
    BinaryExpression(path) {
      computedCommon(path);
    },
  });
  let maxNum = 1;
  for (let i = 0; i < maxNum && maxNum < 1000; i++) {
    // 进入程序时把已抠出的依赖加载进上下文一次
    if (fs.existsSync(tmpDecryptPath)) {
      vm.runInContext(fs.readFileSync(tmpDecryptPath, "utf-8"), decryptCtx);
    }
    // 字符串解密
    traverse(ast, {
      VariableDeclarator(path) {
        try {
          encryptStr(path, "i");
        } catch (error) {
          if (~error.message.indexOf("is not defined")) {
            const [name] = error.message.split(" ");
            findIdentifier(ast, name);
            maxNum++;
          }
          console.log(error);
        }
      },
    });
  }
  traverse(ast, {
    BinaryExpression(path) {
      computedCommon(path, "string");
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
  const outputJsPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "./Lblfpo_decrypt.js",
  );
  await writeFile(outputJsPath, newJsCode);
  console.log("还原结束");
}

main();
