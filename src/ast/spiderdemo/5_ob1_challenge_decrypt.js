let currentPage = 1;
let totalPages = 100;
let numbersPerPage = 10;
let pageData = {};
let visitedPages = new Set();
let challengeType = "ob1_challenge";
"use strict";
var encode_arr = ["MTRweCBBcmlhbA==", "YWxwaGFiZXRpYw==", "ZmlsbFN0eWxl", "I2Y2MA==", "ZmlsbFJlY3Q=", "IzA2OQ==", "ZmlsbFRleHQ=", "QnJvd3NlciBmaW5nZXJwcmludA==", "cmdiYSgxMDIsIDIwNCwgMCwgMC43KQ==", "Z2V0VGltZQ==", "X0FVVE9NQVRJT05fREVURUNURURf", "X0xBTkdVQUdFX0RFVEVDVEVEXw==", "eHl6NTE3Y2RhOTZlZmdo", "Zmxvb3I=", "cmFuZG9t", "eHl6NTE3Y2RhOTZlZmho", "", "L2F1dGhlbnRpY2F0aW9uL2FwaS9vYjFfY2hhbGxlbmdlL3BhZ2U=", "Z2V0", "YXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8q", "ZG93bg==", "NTAwMA==", "aXBob25l", "b25l", "cGFpZA==", "ZW5jb2RlVVJJQ29tcG9uZW50", "cmVwbGFjZQ==", "MHg=", "YnRvYQ==", "QnVmZmVy", "ZnJvbQ==", "dG9TdHJpbmc=", "YmFzZTY0", "cGx1Z2lucw==", "bGVuZ3Ro", "bG9jYXRpb24=", "aHJlZg==", "YWJvdXQ6Ymxhbms=", "Y2xvc2U=", "bGFuZ3VhZ2Vz", "ZW4tVVM=", "NjY=", "NzI=", "NmY=", "NmQ=", "NDM=", "Njg=", "NjE=", "NjQ=", "NjU=", "Zm9yRWFjaA==", "dW5lc2NhcGU=", "JXUwMA==", "U3RyaW5n", "c3BsaXQ=", "Y2hhckNvZGVBdA==", "am9pbg==", "b2IxX2NoZWNrPUExc2RSVUlRQ2h0eGVuOHBJMGRBTmk4emNYNXpIQmwrWW5FaEx5WklQeHc4V2tWUlZSbGlZR0JGVlZkZVNGa3VYQmM=", "YUFFRUFCQWhWVkZOUVFWQmFjVjVBVlZwRUIzeFVWMGNlQ3laUGFnY1NRRXB2QVdkVlNrY3NTejFMQkI0UUhCdFRYRjBHRFVWU1drbFdCUnNDSEFrY0JCb1k7IA==", "IFVTRVJJTkZPPUdqVlkwSXRPN0dDY01RcUpRZGlKY0hucXdtclQlMkZNeU5sM0lPJTJGJTJGTzExS1JSdGl0bk1kWTJFV21lUld6RkhIb0tOU0pm", "M2s2VXJkMEt4M3VrQ2JsZWdmNE1OWEJXbWxoRDBnOElBVEtNS00lMkZwa1hoJTJCQWM4JTJGdDFTQWppVjJmb2pTYiUyRkNBenZYR2lkNHZSTHBNZg==", "YnclMkZnQSUzRCUzRDsgQVVUSEtFWT1ZJTJCZ1JZZFJSc3lORGhBMGRydSUyQlF6RVphbllVT1lLb05KR2FQajdWaTN5bVdPZ1hkdDJCQSUyQkolMg==", "RkdlNzhaMm9QZlpqYWpHak03MjV5VUpkTU1zdHJqeXpWVWhZZldPaWNmRmdiSFFIRSUyQkJwZ0Nzb1A0Z0l4VTh3JTNEJTNEOw==", "IGFkYTM1NTc3MTgyNjUwZjFfZ3JfbGFzdF9zZW50X2NzMT1vYjEyMjQxNDA4NTk2NDsgYXNvX3VjZW50ZXI9NWJhYnlrV0g2QW5LcmJ6YzlkMHVnR1NPaG1PUQ==", "ME41bSUyRmtTQlhyYTlxbW10RzZBdVR2R2R6Zm16c2Y4ZXclMkJLJTJCdiUyRk07IGFkYTM1NTc3MTgyNjUwZjFfZ3Jfc2Vzc2lvbl9pZD0=", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2xhc3Rfc2VudF9zaWRfd2l0aF9jczE9", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX3Nlc3Npb25faWRfc2VudF92c3Q9", "MzQ5ODM1ZTktNWU3My00Y2NhLTgyM2MtZDVmMzc3MDk2YzFmOyBhZGEzNTU3NzE4MjY1MGYxX2dyX2NzMT1vYjEyMjQxNDA4NTk2NDsg", "c3luY3Q9", "bm93", "LjIyMzsgc3luY2Q9LTE1MzA=", "UmVnRXhw", "KF58ICk=", "PShbXjtdKikoO3wkKQ==", "bWF0Y2g=", "c3luY2Q=", "RGF0ZQ==", "QCM=", "T2JqZWN0", "a2V5cw==", "cGFyYW1z", "YW5hbHlzaXM=", "aGFzT3duUHJvcGVydHk=", "cHVzaA==", "c29ydA==", "dXJs", "YmFzZVVSTA==", "Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y", "ZG9jdW1lbnQ=", "aW5kZXhPZg==", "bmF0aXZlIGNvZGU=", "Y3JlYXRlRWxlbWVudA==", "Y2FudmFz", "Z2V0Q29udGV4dA==", "MmQ=", "dGV4dEJhc2VsaW5l", "dG9w", "Zm9udA=="];
function OoO0ooo0(index) {
  const _fnStr_check = OoO0ooo0["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  for (var OooOooOO = 2; OooOooOO !== 0;) {
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
(function (myarr, num) {
  var OoOO00oo = function (nums) {
    while (--nums) {
      myarr.push(myarr.shift());
    }
  };
  OoOO00oo(++num);
})(encode_arr, 16);
function O0o0O0O0() {
  const _fnStr_check = O0o0O0O0["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  for (var oOO0OOOO = 16; oOO0OOOO !== 0;) {
    switch (oOO0OOOO) {
      case 145:
        var O0o0OO0O = -O0oooO00(O0ooooO0.VVxVvvvvvv);
        oOO0OOOO += 21;
        break;
      case 197:
        var oOOO0oo0 = [];
        oOO0OOOO += 5;
        break;
      case 63:
        function O00oO0oo(t) {
          const _fnStr_check = O00oO0oo["toString"]();
          const _first50_check = _fnStr_check["substring"](0, 50);
          if (!_first50_check["includes"]("deb")) {}
          for (var OO0o0oOO = 1; OO0o0oOO !== 0;) {
            switch (OO0o0oOO) {
              case 1:
                var oOO0oo00 = o00oOo0O;
                OO0o0oOO += 1;
                break;
              case 10:
                try {
                  return oo0O00oO[oooO0oOo.xvxVVVvVxx](t);
                } catch (n) {
                  return oo0O00oO[oooO0oOo.VvVvvvvxxv][oooO0oOo.vVvvvvVVvV](t)[oooO0oOo.VVvVxVxxVV](oooO0oOo.VvvVxVVxxv);
                }
                OO0o0oOO = 0;
                break;
              case 9:
                t = oo0O00oO[oooO0oOo.vxvVvVxxvx](t)[oooO0oOo.VVVxxxvvvV](/%([0-9A-F]{2})/g, function (n, t) {
                  return ooOoO0oo(oooO0oOo.vvxVxVvxvx + t);
                });
                OO0o0oOO += 1;
                break;
              case 2:
                var oOooOOOo = {
                  v0: 9,
                  v1: 10,
                  v2: 11,
                  v3: 12,
                  v4: 13,
                  v5: 14,
                  v6: 15,
                  v7: 16
                };
                OO0o0oOO += 3;
                break;
              case 5:
                var oooO0oOo = {
                  vxvVvVxxvx: oOO0oo00(oOooOOOo.v0),
                  VVVxxxvvvV: oOO0oo00(oOooOOOo.v1),
                  vvxVxVvxvx: oOO0oo00(oOooOOOo.v2),
                  xvxVVVvVxx: oOO0oo00(oOooOOOo.v3),
                  VvVvvvvxxv: oOO0oo00(oOooOOOo.v4),
                  vVvvvvVVvV: oOO0oo00(oOooOOOo.v5),
                  VVvVxVxxVV: oOO0oo00(oOooOOOo.v6),
                  VvvVxVVxxv: oOO0oo00(oOooOOOo.v7)
                };
                OO0o0oOO += 4;
                break;
            }
          }
        }
        oOO0OOOO += 24;
        break;
      case 115:
        var OoOOooOo = o0OoOOOO();
        oOO0OOOO += 12;
        break;
      case 202:
        oo0O00oO[O0ooooO0.VvvxvvVvvv][O0ooooO0.VvVxxVvxVx](oo00o00O[O0ooooO0.VxxvVVVvxV])[O0ooooO0.vVxvVvvvVv](function (n) {
          if (n == O0ooooO0.VVvxvvxvxv) return false;
          oo00o00O[O0ooooO0.VxxvVVVvxV][O0ooooO0.xVvxvVvxxv](n) && oOOO0oo0[O0ooooO0.VVVvVVvxxV](oo00o00O[O0ooooO0.VxxvVVVvxV][n]);
        });
        oOO0OOOO += 9;
        break;
      case 62:
        var oo0O00oO = window,
          oOO00OoO = 0,
          OOoO0oo0 = O0ooooO0.vvVxVxVxVV,
          oo00o00O = {
            "url": O0ooooO0.vxxxxVxVxv,
            "method": O0ooooO0.vxxvvxVVVV,
            "headers": {
              "common": {
                "Accept": O0ooooO0.xVxxVxvvxV
              }
            },
            "params": {
              "float": O0ooooO0.vVvxxxVxVx,
              "genre": O0ooooO0.xvvvxVvVxv,
              "device": O0ooooO0.xxvVvxvxxx,
              "type": O0ooooO0.xxxvvxVxVV,
              "brand": O0ooooO0.VxvxvxvvVv
            },
            "baseURL": O0ooooO0.vvVxVxVxVV,
            "timeout": 30000
          };
        oOO0OOOO += 1;
        break;
      case 211:
        oOOO0oo0 = oOOO0oo0[O0ooooO0.xVvvxvvvxx]()[O0ooooO0.vVxvvVVvxv](OOoO0oo0);
        oOO0OOOO += 13;
        break;
      case 252:
        try {
          if ((Object[O0ooooO0.VVvvVVxVVV](window, O0ooooO0.xVxVxVvxvx)[O0ooooO0.vxxvvxVVVV] + O0ooooO0.vvVxVxVxVV)[O0ooooO0.VVxVvxvvxx](O0ooooO0.vxxvxVVxxx) === -1) {
            return false;
          }
          var Oo0OoO0O = document[O0ooooO0.vVvxVVvvVV](O0ooooO0.vvVVVxvxxV);
          var OO00Oo00 = Oo0OoO0O[O0ooooO0.VvVxxvxVxv](O0ooooO0.vVxxvVxVVv);
          OO00Oo00[O0ooooO0.xxxxxVvxVx] = O0ooooO0.vvvvVvvxxx;
          OO00Oo00[O0ooooO0.xxxvxxVVxv] = O0ooooO0.Vxxvvvvxvv;
          OO00Oo00[O0ooooO0.xxxxxVvxVx] = O0ooooO0.vxxvvxxVvV;
          OO00Oo00[O0ooooO0.vxVxxVxxxx] = O0ooooO0.VvxvvVxvxx;
          OO00Oo00[O0ooooO0.xxxVvVxvvV](125, o0oooOO0.v1, o0oooOO0.v13, 20);
          OO00Oo00[O0ooooO0.vxVxxVxxxx] = O0ooooO0.VvVxVVvxxv;
          OO00Oo00[O0ooooO0.vvVVvVVVvx](O0ooooO0.xVxVvVvvxV, o0oooOO0.v2, 15);
          OO00Oo00[O0ooooO0.vxVxxVxxxx] = O0ooooO0.xVvVvVxVVx;
          OO00Oo00[O0ooooO0.vvVVvVVVvx](O0ooooO0.xVxVvVvvxV, o0oooOO0.v4, o0oooOO0.v54);
          var Oo0ooOOO = O0ooooO0.xvVvvvVxvV + Math[O0ooooO0.xxVxVxVvVx](Math[O0ooooO0.VvVVVvVvvx]() * 10);
        } catch (e) {
          var Oo0ooOOO = O0ooooO0.VvVVvvVxxv + Math[O0ooooO0.xxVxVxVvVx](Math[O0ooooO0.VvVVVvVvvx]() * 9);
        }
        oOO0OOOO += 10;
        break;
      case 319:
        return ooO000OO;
        oOO0OOOO = 0;
        break;
      case 224:
        oOOO0oo0 = O00oO0oo(oOOO0oo0);
        oOO0OOOO += 17;
        break;
      case 286:
        var OOo0oOo0 = new Date()[O0ooooO0.VxxVvVVvvv]();
        oOO0OOOO += 8;
        break;
      case 27:
        var o0oooOO0 = {
          v0: 0,
          v1: 1,
          v2: 2,
          v3: 3,
          v4: 4,
          v5: 5,
          v6: 6,
          v7: 7,
          v8: 8,
          v9: 0,
          v10: 59,
          v11: 60,
          v12: 61,
          v13: 62,
          v14: 63,
          v15: 64,
          v16: 34,
          v17: 65,
          v18: 64,
          v19: 66,
          v20: 67,
          v21: 64,
          v22: 68,
          v23: 40,
          v24: 69,
          v25: 10,
          v26: 70,
          v27: 71,
          v28: 72,
          v29: 2,
          v30: 0,
          v31: 73,
          v32: 74,
          v33: 75,
          v34: 76,
          v35: 77,
          v36: 78,
          v37: 79,
          v38: 80,
          v39: 81,
          v40: 82,
          v41: 79,
          v42: 83,
          v43: 84,
          v44: 85,
          v45: 86,
          v46: 84,
          v47: 87,
          v48: 88,
          v49: 89,
          v50: 84,
          v51: 90,
          v52: 88,
          v53: 89,
          v54: 17,
          v55: 18,
          v56: 91,
          v57: 92,
          v58: 23,
          v59: 23,
          v60: 18,
          v61: 23,
          v62: 24,
          v63: 91,
          v64: 93,
          v65: 94,
          v66: 95,
          v67: 96,
          v68: 97,
          v69: 95,
          v70: 96,
          v71: 91
        };
        oOO0OOOO += 24;
        break;
      case 262:
        var o0Oo0OOo = O00oO0oo(oO0oOO0O(oOOO0oo0, Oo0ooOOO));
        oOO0OOOO += 24;
        break;
      case 295:
        var ooO000OO = btoa(OOO0oOOo);
        oOO0OOOO += 24;
        break;
      case 87:
        function ooOoO0oo(n) {
          const _fnStr_check = ooOoO0oo["toString"]();
          const _first50_check = _fnStr_check["substring"](0, 50);
          if (!_first50_check["includes"]("deb")) {}
          for (var o0o00OOO = 7; o0o00OOO !== 0;) {
            switch (o0o00OOO) {
              case 31:
                var O0O0O00O = OooOOOO0;
                o0o00OOO += 7;
                break;
              case 18:
                navigator[OOoOO0oo.xxxxVxVvvV][OOoOO0oo.VvvvvvvxVv] === 0 && (window[OOoOO0oo.VVvVvvVvvv][OOoOO0oo.VVxxxVVxxv] = OOoOO0oo.VvxxVVVvvV, window[OOoOO0oo.VVxvxxxxvx]());
                o0o00OOO += 5;
                break;
              case 8:
                var OO00OOo0 = {
                  v0: 17,
                  v1: 18,
                  v2: 19,
                  v3: 20,
                  v4: 21,
                  v5: 22,
                  v6: 23,
                  v7: 23,
                  v8: 18,
                  v9: 23,
                  v10: 24,
                  v11: 19,
                  v12: 20,
                  v13: 21,
                  v14: 22,
                  v15: 25,
                  v16: 26,
                  v17: 27,
                  v18: 28,
                  v19: 29,
                  v20: 30,
                  v21: 31,
                  v22: 26,
                  v23: 29,
                  v24: 27,
                  v25: 32,
                  v26: 33,
                  v27: 34,
                  v28: 35,
                  v29: 36,
                  v30: 37
                };
                o0o00OOO += 1;
                break;
              case 24:
                var OooOOOO0 = OOoO0oo0;
                o0o00OOO += 1;
                break;
              case 38:
                return oo0O00oO[OOoOO0oo.xxVvVxxxVV][O0O0O00O](n);
                o0o00OOO = 0;
                break;
              case 25:
                [OOoOO0oo.VxvVvxVxVv, OOoOO0oo.VvVVvxVxvV, OOoOO0oo.xvxxxxxxxV, OOoOO0oo.vVvxVxvxVv, OOoOO0oo.xvVVvxvVVx, OOoOO0oo.xxVxxVvVvx, OOoOO0oo.VVvVVvvxvx, OOoOO0oo.VvVVvxVxvV, OOoOO0oo.xvVVvxvVVx, OOoOO0oo.xvxxxxxxxV, OOoOO0oo.vVvxvxxVvv, OOoOO0oo.xVvvxVvxxx][OOoOO0oo.xVxvxvxxxv](function (n) {
                  OooOOOO0 += oo0O00oO[OOoOO0oo.VVvvvxVxvV](OOoOO0oo.vxVVvVvxvx + n);
                });
                o0o00OOO += 6;
                break;
              case 9:
                var OOoOO0oo = {
                  xxxxVxVvvV: Oo000oOo(OO00OOo0.v0),
                  xVxVxVvxVx: Oo000oOo(OO00OOo0.v1),
                  vxxxxVxvVv: Oo000oOo(OO00OOo0.v2),
                  xVxxvVVvvx: Oo000oOo(OO00OOo0.v3),
                  xVvxvxVxxv: Oo000oOo(OO00OOo0.v4),
                  VvxxxvVVVV: Oo000oOo(OO00OOo0.v5),
                  VxxvxVvxxx: Oo000oOo(OO00OOo0.v6),
                  xVVVxVvvVV: Oo000oOo(OO00OOo0.v6),
                  VvvvvvvxVv: Oo000oOo(OO00OOo0.v1),
                  vVVxxxVVvV: Oo000oOo(OO00OOo0.v6),
                  xVvVVVxvxV: Oo000oOo(OO00OOo0.v10),
                  VVvVvvVvvv: Oo000oOo(OO00OOo0.v2),
                  VVxxxVVxxv: Oo000oOo(OO00OOo0.v3),
                  VvxxVVVvvV: Oo000oOo(OO00OOo0.v4),
                  VVxvxxxxvx: Oo000oOo(OO00OOo0.v5),
                  VxvVvxVxVv: Oo000oOo(OO00OOo0.v15),
                  vvvxxvvxvV: Oo000oOo(OO00OOo0.v16),
                  xxVVxxVxVV: Oo000oOo(OO00OOo0.v17),
                  vVvxVxvxVv: Oo000oOo(OO00OOo0.v18),
                  vxxvVxVvVv: Oo000oOo(OO00OOo0.v19),
                  xxVxxVvVvx: Oo000oOo(OO00OOo0.v20),
                  VVvVVvvxvx: Oo000oOo(OO00OOo0.v21),
                  VvVVvxVxvV: Oo000oOo(OO00OOo0.v16),
                  xvVVvxvVVx: Oo000oOo(OO00OOo0.v19),
                  xvxxxxxxxV: Oo000oOo(OO00OOo0.v17),
                  vVvxvxxVvv: Oo000oOo(OO00OOo0.v25),
                  xVvvxVvxxx: Oo000oOo(OO00OOo0.v26),
                  xVxvxvxxxv: Oo000oOo(OO00OOo0.v27),
                  VVvvvxVxvV: Oo000oOo(OO00OOo0.v28),
                  vxVVvVvxvx: Oo000oOo(OO00OOo0.v29),
                  xxVvVxxxVV: Oo000oOo(OO00OOo0.v30)
                };
                o0o00OOO += 9;
                break;
              case 7:
                var Oo000oOo = o00oOo0O;
                o0o00OOO += 1;
                break;
              case 23:
                navigator[OOoOO0oo.vVVxxxVVvV] && navigator[OOoOO0oo.vVVxxxVVvV][OOoOO0oo.VvvvvvvxVv] === 1 && navigator[OOoOO0oo.vVVxxxVVvV][0] === OOoOO0oo.xVvVVVxvxV && (window[OOoOO0oo.VVvVvvVvvv][OOoOO0oo.VVxxxVVxxv] = OOoOO0oo.VvxxVVVvvV, window[OOoOO0oo.VVxvxxxxvx]());
                o0o00OOO += 1;
                break;
            }
          }
        }
        oOO0OOOO += 17;
        break;
      case 294:
        var OOO0oOOo = o0Oo0OOo + OOo0oOo0;
        oOO0OOOO += 1;
        break;
      case 51:
        var O0ooooO0 = {
          vVVVvxxvxv: o00oOo0O(o0oooOO0.v0),
          VxVVVxVxxV: o00oOo0O(o0oooOO0.v1),
          VxVxvVvxxV: o00oOo0O(o0oooOO0.v2),
          xVxxVxvvxV: o00oOo0O(o0oooOO0.v3),
          vVvvVVvVvV: o00oOo0O(o0oooOO0.v4),
          xvvvxVvVxv: o00oOo0O(o0oooOO0.v5),
          xxvVvxvxxx: o00oOo0O(o0oooOO0.v6),
          xxxvvxVxVV: o00oOo0O(o0oooOO0.v7),
          VxvxvxvvVv: o00oOo0O(o0oooOO0.v8),
          VxvVvVvvvv: o00oOo0O(o0oooOO0.v0),
          VVxVvvvvvv: o00oOo0O(o0oooOO0.v10),
          vxVvvvVxxv: o00oOo0O(o0oooOO0.v11),
          vvVVxxvxvx: o00oOo0O(o0oooOO0.v12),
          VVVvxvVvVV: o00oOo0O(o0oooOO0.v13),
          VvVxxVvxVx: o00oOo0O(o0oooOO0.v14),
          vVxVxvvvxx: o00oOo0O(o0oooOO0.v15),
          vVxvVvvvVv: o00oOo0O(o0oooOO0.v16),
          VVvxvvxvxv: o00oOo0O(o0oooOO0.v17),
          vxVVvxvxVx: o00oOo0O(o0oooOO0.v15),
          xVvxvVvxxv: o00oOo0O(o0oooOO0.v19),
          VVVvVVvxxV: o00oOo0O(o0oooOO0.v20),
          VxxvVVVvxV: o00oOo0O(o0oooOO0.v15),
          xVvvxvvvxx: o00oOo0O(o0oooOO0.v22),
          vVxvvVVvxv: o00oOo0O(o0oooOO0.v23),
          vVxvvVxVxx: o00oOo0O(o0oooOO0.v24),
          vxvxxxxvvx: o00oOo0O(o0oooOO0.v25),
          VxxxVxvxVx: o00oOo0O(o0oooOO0.v26),
          VVvvVVxVVV: o00oOo0O(o0oooOO0.v27),
          xVxVxVvxvx: o00oOo0O(o0oooOO0.v28),
          xxxvvxxVvx: o00oOo0O(o0oooOO0.v2),
          vvVxVxVxVV: o00oOo0O(o0oooOO0.v0),
          VVxVvxvvxx: o00oOo0O(o0oooOO0.v31),
          vxxvxVVxxx: o00oOo0O(o0oooOO0.v32),
          vVvxVVvvVV: o00oOo0O(o0oooOO0.v33),
          vvVVVxvxxV: o00oOo0O(o0oooOO0.v34),
          VvVxxvxVxv: o00oOo0O(o0oooOO0.v35),
          vVxxvVxVVv: o00oOo0O(o0oooOO0.v36),
          vxVVvvxVxx: o00oOo0O(o0oooOO0.v37),
          vvvvVvvxxx: o00oOo0O(o0oooOO0.v38),
          xxxvxxVVxv: o00oOo0O(o0oooOO0.v39),
          Vxxvvvvxvv: o00oOo0O(o0oooOO0.v40),
          xxxxxVvxVx: o00oOo0O(o0oooOO0.v37),
          vxxvvxxVvV: o00oOo0O(o0oooOO0.v42),
          VVvvvxxVVv: o00oOo0O(o0oooOO0.v43),
          VvxvvVxvxx: o00oOo0O(o0oooOO0.v44),
          xxxVvVxvvV: o00oOo0O(o0oooOO0.v45),
          vxxxxVxVxv: o00oOo0O(o0oooOO0.v1),
          VvvxvvVvvv: o00oOo0O(o0oooOO0.v13),
          VvxVVxVxvx: o00oOo0O(o0oooOO0.v43),
          VvVxVVvxxv: o00oOo0O(o0oooOO0.v47),
          VxxxxxvvVx: o00oOo0O(o0oooOO0.v48),
          xxxxvVVVVx: o00oOo0O(o0oooOO0.v49),
          vxxvvxVVVV: o00oOo0O(o0oooOO0.v2),
          vxVxxVxxxx: o00oOo0O(o0oooOO0.v43),
          xVvVvVxVVx: o00oOo0O(o0oooOO0.v51),
          vvVVvVVVvx: o00oOo0O(o0oooOO0.v48),
          xVxVvVvvxV: o00oOo0O(o0oooOO0.v49),
          vVvxxxVxVx: o00oOo0O(o0oooOO0.v4),
          xvVVvxVxVv: o00oOo0O(o0oooOO0.v54),
          xvvxxxVvxv: o00oOo0O(o0oooOO0.v54),
          vVvVvVVvvV: o00oOo0O(o0oooOO0.v55),
          vxxvxxvvxV: o00oOo0O(o0oooOO0.v56),
          vxVxVVVxVv: o00oOo0O(o0oooOO0.v57),
          VvvVVxVvvv: o00oOo0O(o0oooOO0.v58),
          VVVxxxvvvV: o00oOo0O(o0oooOO0.v58),
          xVxvxvVvVv: o00oOo0O(o0oooOO0.v55),
          xxxVxvxVvx: o00oOo0O(o0oooOO0.v58),
          vvxVVvxvVv: o00oOo0O(o0oooOO0.v62),
          VVvxvvvVVv: o00oOo0O(o0oooOO0.v56),
          xxVvxVxvvV: o00oOo0O(o0oooOO0.v64),
          xvVvvvVxvV: o00oOo0O(o0oooOO0.v65),
          vVvVxxvxvv: o00oOo0O(o0oooOO0.v66),
          vvxxvVVvvx: o00oOo0O(o0oooOO0.v67),
          VvVVvvVxxv: o00oOo0O(o0oooOO0.v68),
          xxVxVxVvVx: o00oOo0O(o0oooOO0.v66),
          VvVVVvVvvx: o00oOo0O(o0oooOO0.v67),
          VxxVvVVvvv: o00oOo0O(o0oooOO0.v56)
        };
        oOO0OOOO += 11;
        break;
      case 188:
        var OOO00oO0 = O0ooooO0.vvVVxxvxvx;
        oOO0OOOO += 9;
        break;
      case 166:
        var oOoO0o00 = +new oo0O00oO[O0ooooO0.vxVvvvVxxv]() - (O0o0OO0O || oOO00OoO) - 1661224081041;
        oOO0OOOO += 22;
        break;
      case 241:
        oOOO0oo0 = (oOOO0oo0 += OOO00oO0 + oo00o00O[O0ooooO0.vVxvvVxVxx][O0ooooO0.vxvxxxxvvx](oo00o00O[O0ooooO0.VxxxVxvxVx], OOoO0oo0)) + (OOO00oO0 + oOoO0o00) + (OOO00oO0 + 3);
        oOO0OOOO += 11;
        break;
      case 107:
        function o0OoOOOO() {
          const _fnStr_check = o0OoOOOO["toString"]();
          const _first50_check = _fnStr_check["substring"](0, 50);
          if (!_first50_check["includes"]("deb")) {}
          for (var ooooo0o0 = 1; ooooo0o0 !== 0;) {
            switch (ooooo0o0) {
              case 9:
                var OO000oOO = OoooOOo0.vVVvxVVVvx,
                  o00o0ooo = OoooOOo0.vvxxVvxvvv,
                  O000oooO = OoooOOo0.vVxxVVxxvx,
                  o0o00OOo = OoooOOo0.vVVVxvVVVv,
                  o0000000 = OoooOOo0.xxvVVVxxxv,
                  o0oO00o0 = OoooOOo0.vvvxxVvxvv,
                  o0ooo0oO = OoooOOo0.vVxvvxvVVV,
                  ooo0Oo0O = OoooOOo0.xVvvvxxxVv,
                  oo0oOoOO = OoooOOo0.VvvvvvvVvv,
                  oooo000o = OoooOOo0.xVvxxvVxvv,
                  oooo0000 = OoooOOo0.vVVxvxvvxv,
                  Oo0ooOO0 = OoooOOo0.xVVvxvVVvx + Date[OoooOOo0.vvvxvVVvxV]() + OoooOOo0.vxvVVxxvVv;
                ooooo0o0 += 1;
                break;
              case 11:
                return OO000oOO + o00o0ooo + O000oooO + o0o00OOo + o0000000 + o0oO00o0 + o0ooo0oO + ooo0Oo0O + oo0oOoOO + oooo000o + oooo0000 + Oo0ooOO0;
                ooooo0o0 = 0;
                break;
              case 7:
                var OoooOOo0 = {
                  vVVvxVVVvx: oOO00OO0(Oo000o0O.v0),
                  vvxxVvxvvv: oOO00OO0(Oo000o0O.v1),
                  vVxxVVxxvx: oOO00OO0(Oo000o0O.v2),
                  vVVVxvVVVv: oOO00OO0(Oo000o0O.v3),
                  xxvVVVxxxv: oOO00OO0(Oo000o0O.v4),
                  vvvxxVvxvv: oOO00OO0(Oo000o0O.v5),
                  vVxvvxvVVV: oOO00OO0(Oo000o0O.v6),
                  xVvvvxxxVv: oOO00OO0(Oo000o0O.v7),
                  VvvvvvvVvv: oOO00OO0(Oo000o0O.v8),
                  xVvxxvVxvv: oOO00OO0(Oo000o0O.v9),
                  vVVxvxvvxv: oOO00OO0(Oo000o0O.v10),
                  xVVvxvVVvx: oOO00OO0(Oo000o0O.v11),
                  vvvxvVVvxV: oOO00OO0(Oo000o0O.v12),
                  vxvVVxxvVv: oOO00OO0(Oo000o0O.v13)
                };
                ooooo0o0 += 2;
                break;
              case 1:
                var oOO00OO0 = o00oOo0O;
                ooooo0o0 += 5;
                break;
              case 6:
                var Oo000o0O = {
                  v0: 41,
                  v1: 42,
                  v2: 43,
                  v3: 44,
                  v4: 45,
                  v5: 46,
                  v6: 47,
                  v7: 48,
                  v8: 49,
                  v9: 50,
                  v10: 51,
                  v11: 52,
                  v12: 53,
                  v13: 54
                };
                ooooo0o0 += 1;
                break;
              case 10:
                oo0oOoOO;
                ooooo0o0 += 1;
                break;
            }
          }
        }
        oOO0OOOO += 8;
        break;
      case 104:
        function oO0oOO0O(n, t) {
          const _fnStr_check = oO0oOO0O["toString"]();
          const _first50_check = _fnStr_check["substring"](0, 50);
          if (!_first50_check["includes"]("deb")) {}
          for (var OO0oO0o0 = 5; OO0oO0o0 !== 0;) {
            switch (OO0oO0o0) {
              case 6:
                var ooOoOOo0 = {
                  v0: 38,
                  v1: 18,
                  v2: 18,
                  v3: 39,
                  v4: 39,
                  v5: 39,
                  v6: 40
                };
                OO0oO0o0 += 2;
                break;
              case 14:
                t = t || o0OoOOOO();
                OO0oO0o0 += 3;
                break;
              case 5:
                var oooooO0o = o00oOo0O;
                OO0oO0o0 += 1;
                break;
              case 22:
                return n[oOOO0O00.vVvvxvxVvV](OOoO0oo0);
                OO0oO0o0 = 0;
                break;
              case 8:
                var oOOO0O00 = {
                  xxxVxVxvxx: oooooO0o(ooOoOOo0.v0),
                  VxVvVvvxvV: oooooO0o(ooOoOOo0.v1),
                  VvvxVvvvvV: oooooO0o(ooOoOOo0.v1),
                  VxvxxVxVxV: oooooO0o(ooOoOOo0.v3),
                  xvxVvVxxxV: oooooO0o(ooOoOOo0.v3),
                  VVvvvVvvVv: oooooO0o(ooOoOOo0.v3),
                  vVvvxvxVvV: oooooO0o(ooOoOOo0.v6)
                };
                OO0oO0o0 += 6;
                break;
              case 17:
                for (var o0O0O0O0 = (n = n[oOOO0O00.xxxVxVxvxx](OOoO0oo0))[oOOO0O00.VvvxVvvvvV], oo0oO0O0 = t[oOOO0O00.VvvxVvvvvV], oo0OoOOO = oOO00OoO; oo0OoOOO < o0O0O0O0; oo0OoOOO++) {
                  n[oo0OoOOO] = ooOoO0oo(n[oo0OoOOO][oOOO0O00.VVvvvVvvVv](oOO00OoO) ^ t[(oo0OoOOO + 10) % oo0oO0O0][oOOO0O00.VVvvvVvvVv](oOO00OoO));
                }
                OO0oO0o0 += 5;
                break;
            }
          }
        }
        oOO0OOOO += 3;
        break;
      case 127:
        function O0oooO00(O0OOOO0o) {
          const _fnStr_check = O0oooO00["toString"]();
          const _first50_check = _fnStr_check["substring"](0, 50);
          if (!_first50_check["includes"]("deb")) {}
          for (var O000ooO0 = 2; O000ooO0 !== 0;) {
            switch (O000ooO0) {
              case 4:
                var oOOOOoOO = {
                  v0: 55,
                  v1: 56,
                  v2: 57,
                  v3: 58,
                  v4: 35,
                  v5: 0
                };
                O000ooO0 += 2;
                break;
              case 9:
                return (O0OOOO0o = OoOOooOo[oOoo000O.VVxVxxvxxv](O0OOOO0o)) ? oo0O00oO[oOoo000O.xvVvVxxVxv](O0OOOO0o[2]) : oOoo000O.vvVvxVxVxv;
                O000ooO0 = 0;
                break;
              case 7:
                var O0OOOO0o = new oo0O00oO[oOoo000O.VVxvxvvxvv](oOoo000O.vxVvVVvvvx + O0OOOO0o + oOoo000O.xvvxxvvxVx);
                O000ooO0 += 2;
                break;
              case 2:
                var o0O0oooO = o00oOo0O;
                O000ooO0 += 2;
                break;
              case 6:
                var oOoo000O = {
                  VVxvxvvxvv: o0O0oooO(oOOOOoOO.v0),
                  vxVvVVvvvx: o0O0oooO(oOOOOoOO.v1),
                  xvvxxvvxVx: o0O0oooO(oOOOOoOO.v2),
                  VVxVxxvxxv: o0O0oooO(oOOOOoOO.v3),
                  xvVvVxxVxv: o0O0oooO(oOOOOoOO.v4),
                  vvVvxVxVxv: o0O0oooO(oOOOOoOO.v5)
                };
                O000ooO0 += 1;
                break;
            }
          }
        }
        oOO0OOOO += 18;
        break;
      case 16:
        var o00oOo0O = OoO0ooo0;
        oOO0OOOO += 11;
        break;
    }
  }
}
async function apiInitChallenge(type = challengeType) {
  const url = `/authentication/api/ob1_challenge/init/?challenge_type=${encodeURIComponent(type)}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {}
  return data;
}
async function apiSubmitAnswer(answer, type = challengeType) {
  const response = await fetch("/authentication/api/ob1_challenge/submit/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      challenge_type: type,
      answer: answer
    })
  });
  const data = await response.json();
  if (!response.ok) {}
  return data;
}
function getChallengeTypeFromUrl() {
  const _fnStr_check = getChallengeTypeFromUrl["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("challenge_type") || urlParams.get("type") || "header_check";
}
function getChallengeDisplayName(type) {
  const _fnStr_check = getChallengeDisplayName["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  const names = {
    "header_check": "请求头检测挑战",
    "number_challenge": "动态数字求和挑战",
    "js_challenge": "JS混淆解析挑战",
    "slide_puzzle_challenge": "滑动拼图",
    "slide_scratch_challenge": "滑动刮刮乐"
  };
  return names[type] || type;
}
function updatePageTitle() {
  const _fnStr_check = updatePageTitle["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  const titleElement = document.querySelector(".challenge-title");
  if (titleElement) {
    const displayName = getChallengeDisplayName(challengeType);
    titleElement.innerHTML = `🎯 任务: 采集这100页的全部数字，计算加和并提交结果<br/><small>(${displayName})</small>`;
  }
  const pageTitle = document.querySelector(".page-title");
  if (pageTitle) {
    pageTitle.innerHTML = `🔢 ${getChallengeDisplayName(challengeType)}`;
  }
}
async function generateNumbers(page) {
  const _fnStr_check = generateNumbers["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  try {
    if (page === 1 && visitedPages.size === 0) {
      const initData = await apiInitChallenge(challengeType);
      if (initData.success) {
        console.log("挑战初始化成功:", challengeType);
        console.log("初始化信息:", initData.message);
        if (initData.has_passed_before) {
          showResult("提示: " + initData.message, "info");
        }
        return initData.page_data;
      } else {}
    } else {
      const pageData = await apiGetPageData(page, challengeType);
      if (pageData.success) {
        return pageData.page_data;
      } else {}
    }
  } catch (error) {
    console.error("获取数据失败:", error);
    if (error.message.includes("请先登录")) {
      showLoginAlert();
    } else if (error.message.includes("need_init")) {
      showResult("挑战未初始化，正在重新初始化...", "info");
      visitedPages.clear();
      return await generateNumbers(1);
    } else {
      showResult("获取数据失败: " + error.message, "error");
    }
    return [];
  }
}
function renderNumbers(numbers) {
  const _fnStr_check = renderNumbers["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  const grid = document.getElementById("numbersGrid");
  grid.innerHTML = numbers.map((num, index) => `<div class="number-box" style="animation-delay: ${index * 0.1}s">${num}</div>`).join("");
}
async function loadPageData(page) {
  const _fnStr_check = loadPageData["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  showLoading();
  try {
    const numbers = await generateNumbers(page);
    if (numbers.length > 0) {
      pageData[page] = numbers;
      visitedPages.add(page);
      renderNumbers(numbers);
      updateStats();
      updatePagination();
      recordBehavior("page_view", {
        page,
        numbers: numbers.length,
        challengeType
      });
    }
  } catch (error) {
    console.error("加载页面数据失败:", error);
    showResult("加载页面数据失败", "error");
  }
  hideLoading();
}
function changePage(page) {
  const _fnStr_check = changePage["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  if (page === "prev") {
    page = Math.max(1, currentPage - 1);
  } else if (page === "next") {
    page = Math.min(totalPages, currentPage + 1);
  }
  if (page !== currentPage && page >= 1 && page <= totalPages) {
    if (!validatePageNavigation(challengeType, page)) {
      return;
    }
    currentPage = page;
    loadPageData(page);
  }
}
function updateStats() {
  const _fnStr_check = updateStats["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  document.getElementById("currentPageNum").textContent = currentPage;
  document.getElementById("totalPages").textContent = totalPages;
  document.getElementById("collectedPages").textContent = visitedPages.size;
}
function updatePagination() {
  const _fnStr_check = updatePagination["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  document.getElementById("paginationInfo").textContent = `第 ${currentPage} 页，共 ${totalPages} 页 | 当前页面包含 ${numbersPerPage} 个数字`;
  const paginationControls = document.getElementById("paginationControls");
  let paginationHTML = `
        <button class="page-btn" onclick="changePage('prev')" ${currentPage <= 1 ? "disabled" : ""}>← 上一页</button>
    `;
  if (false) {
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
    }
  } else {
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
      }
      paginationHTML += `<span class="page-dots">...</span>`;
      paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    } else if (currentPage >= 97) {
      paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
      paginationHTML += `<span class="page-dots">...</span>`;
      for (let i = 96; i <= totalPages; i++) {
        paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
      }
    } else {
      paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
      paginationHTML += `<span class="page-dots">...</span>`;
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        paginationHTML += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
      }
      paginationHTML += `<span class="page-dots">...</span>`;
      paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
  }
  paginationHTML += `
        <button class="page-btn" onclick="changePage('next')" ${currentPage >= totalPages ? "disabled" : ""}>下一页 →</button>
    `;
  paginationControls.innerHTML = paginationHTML;
}
async function submitAnswer() {
  const _fnStr_check = submitAnswer["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  const answer = document.getElementById("answerInput").value.trim();
  if (!answer) {
    showResult("请输入答案！", "error");
    return;
  }
  if (!/^\d+$/.test(answer)) {
    showResult("答案格式错误，请输入纯数字！", "error");
    return;
  }
  try {
    const result = await apiSubmitAnswer(parseInt(answer), challengeType);
    if (result.success) {
      const statusIcon = result.is_correct ? "🎉" : "❌";
      const statusText = result.is_correct ? "正确" : "错误";
      let message = `
                <strong>${statusIcon} 答案${statusText}！</strong><br/>
                提交答案: ${result.submitted_answer}<br/>
                已访问页面: ${visitedPages.size}/${totalPages}<br/>
                挑战类型: ${getChallengeDisplayName(result.challenge_type)}<br/>
                提交时间: ${new Date(result.submitted_at).toLocaleString()}<br/>
            `;
      if (result.is_repeat_success) {
        message += "<br/>💡 " + result.message;
      } else if (result.is_correct) {
        message += "<br/>🎊 " + result.message;
      } else {
        message += `<br/>📝 建议: 仔细检查计算过程，可以重新提交答案！`;
      }
      showResult(message, result.is_correct ? "success" : "error");
      document.getElementById("answerInput").value = "";
      document.getElementById("answerInput").focus();
      recordBehavior("submit_answer", {
        challengeType,
        answer: result.submitted_answer,
        visitedPages: Array.from(visitedPages),
        isCorrect: result.is_correct,
        isRepeatSuccess: result.is_repeat_success
      });
    } else {
      showResult(result.message || result.error, "error");
    }
  } catch (error) {
    console.error("提交答案失败:", error);
    if (error.message.includes("请先登录")) {
      showLoginAlert();
    } else {
      showResult("提交答案失败: " + error.message, "error");
    }
  }
}
function showResult(message, type) {
  const _fnStr_check = showResult["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  const resultDiv = document.getElementById("resultMessage");
  resultDiv.innerHTML = message;
  resultDiv.style.display = "block";
  const colors = {
    "success": "#d4edda",
    "error": "#f8d7da",
    "info": "#d1ecf1"
  };
  const borderColors = {
    "success": "#c3e6cb",
    "error": "#f5c6cb",
    "info": "#bee5eb"
  };
  resultDiv.style.backgroundColor = colors[type] || colors.info;
  resultDiv.style.border = `1px solid ${borderColors[type] || borderColors.info}`;
  resultDiv.style.color = type === "error" ? "#721c24" : type === "success" ? "#155724" : "#0c5460";
}
function recordBehavior(action, data) {
  const _fnStr_check = recordBehavior["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  console.log("行为记录:", {
    action,
    data,
    timestamp: Date.now()
  });
}
function showLoading() {
  const _fnStr_check = showLoading["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  document.getElementById("loadingOverlay").style.display = "flex";
}
function hideLoading() {
  const _fnStr_check = hideLoading["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  document.getElementById("loadingOverlay").style.display = "none";
}
function initEventListeners() {
  const _fnStr_check = initEventListeners["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && e.target.id === "answerInput") {
      submitAnswer();
    }
  });
}
function initializePage() {
  const _fnStr_check = initializePage["toString"]();
  const _first50_check = _fnStr_check["substring"](0, 50);
  if (!_first50_check["includes"]("deb")) {}
  challengeType = getChallengeTypeFromUrl();
  console.log("当前挑战类型:", challengeType);
  updatePageTitle();
  loadPageData(1);
  initEventListeners();
}
async function apiGetPageData(page, type = challengeType) {
  try {
    const signature = O0o0O0O0();
    const url = `/authentication/api/ob1_challenge/page/${page}/?challenge_type=${encodeURIComponent(type)}&signature=${encodeURIComponent(signature)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    const data = await response.json();
    if (!response.ok) {}
    return data;
  } catch (error) {
    console.error("获取页面数据失败:", error);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  initializePage();
});