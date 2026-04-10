import CryptoJs from "crypto-js";

function ooOoO0oo(n) {
  return String.fromCodePoint(n);
}

function case64_O00oO0oo(plainText) {
  const wordArray = CryptoJs.enc.Utf8.parse(plainText);
  const baseStr = CryptoJs.enc.Base64.stringify(wordArray);
  return baseStr;
}

function case104(n, t) {
  var OOoO0oo0 = "";
  var oOO00OoO = 0;
  var oOOO0O00 = {
    xxxVxVxvxx: "split",
    VxVvVvvxvV: "length",
    VvvxVvvvvV: "length",
    VxvxxVxVxV: "charCodeAt",
    xvxVvVxxxV: "charCodeAt",
    VVvvvVvvVv: "charCodeAt",
    vVvvxvxVvV: "join",
  };
  for (var o0O0O0O0 = (n = n[oOOO0O00.xxxVxVxvxx](OOoO0oo0))[oOOO0O00.VvvxVvvvvV], oo0oO0O0 = t[oOOO0O00.VvvxVvvvvV], oo0OoOOO = oOO00OoO; oo0OoOOO < o0O0O0O0; oo0OoOOO++) {
    n[oo0OoOOO] = ooOoO0oo(n[oo0OoOOO][oOOO0O00.VVvvvVvvVv](oOO00OoO) ^ t[(oo0OoOOO + 10) % oo0oO0O0][oOOO0O00.VVvvvVvvVv](oOO00OoO));
  }
  //   return n;
  return n[oOOO0O00.vVvvxvxVvV](OOoO0oo0);
}

// var n = "NTAwMGRvd25pcGhvbmVvbmVwYWlk@#/authentication/api/ob1_challenge/page@#114604769182@#3";
// var t = "xyz517cda96efgh3";
// console.log(case104(n, t));
// console.log(case64_O00oO0oo(case104(n, t)));

export function getSignature() {
    const ts = Date.now() - (1530 || 0) - 1661224081041;
//   const ts = 114604333050;
  const n = `NTAwMGRvd25pcGhvbmVvbmVwYWlk@#/authentication/api/ob1_challenge/page@#${ts}@#3`;
    const t = `xyz517cda96efgh${Math.floor(Math.random() * 10)}`;
//   const t = `xyz517cda96efgh7`;
  let str = case104(n, t);
//   console.log(str);
  str = case64_O00oO0oo(str);
//   console.log(str);
  return case64_O00oO0oo(`${str}${Date.now()}`);
}

// console.log(getSignature());
