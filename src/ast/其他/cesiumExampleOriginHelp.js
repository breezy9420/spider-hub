import { readFile, writeFile, getJsByAst, getAstByJs } from "../../../util/ast.js";
import types from "@babel/types";
import traverseModule from "@babel/traverse";
import * as path from "path";
import { fileURLToPath } from "url";

const traverse = traverseModule.default || traverseModule;

var window = {};

const __0x118420 = [
  "wrEKSA==",
  "54u75p+/77++6LWp5ayv6b2f44OS5rip56Ozwqs4Vh/DlnM=",
  "Cj3ChW8=",
  "dU/DlcK7",
  "S8OAw6bCsw==",
  "R1DCnQ==",
  "FMKfwrjDpgwg",
  "w4JSwqLCkQ==",
  "NsOdwrrDmcKO",
  "wqXDilDCv8K+",
  "KjjDl8KqwqA=",
  "w6DCtytZw5o=",
  "w5pjwoQDw4pEFsOoQsOcG8K6W8K1",
  "c8KjdlTCl8KXT2EIPMKFU8OAw5w=",
  "e3rCgnE0",
  "c8KSTsK2wr4=",
  "CTwXYWxUw7PDt8OIdWrDkFM=",
  "acKkWR4a",
  "MMK5ecK/aMK9XCB0",
  "w4PDk8KXPsOAwq/Cv8OX",
  "woQxU8K3wpE=",
  "wqc8wr0lwpg=",
  "woQPSMOqwofCug==",
  "w5nClsKZXkfDvw==",
  "w4oqNk3DlQ==",
  "V1bCmw==",
  "w4pQwrQcw5I=",
  "wr3Dox/ClMKM",
  "V8OGw6/Cvkg=",
  "woonb8Kpwq0=",
  "w45ywokqw4M=",
  "Ax0+QgDCoCzCpw==",
  "ZTdPw7c=",
  "BFdFdcKW",
  "N8KlYXI=",
  "woYWAzHDtw==",
  "VcOAw6HCuEh1w4bCh8KnCsKQw6LDgg==",
  "wqorfcKh",
  "wpx5wqnDjQbCrjAPfxPCnw==",
  "JMOHw5l8wp9twpvCgD8kw7HCoz4=",
  "wofCscOqwoDCgw==",
  "eMKIwrgUwpk=",
  "Z8Kye33Cng==",
  "wqLDn8KjBMKPcMKPWA==",
  "QC54e8Kv",
  "wpIBHijDkQ==",
  "GwoYeXc=",
  "eDRC",
  "w77CocOQOQ==",
  "K0PDgcOWwr0=",
  "wrnDucObwoTCrMKkQsKa",
  "wpgdJgXDkA==",
  "GToLbH0=",
  "bsKRaXbCgg==",
  "w6/Cl8KpeAA=",
  "OmBRw6o=",
  "NcOdwrrDiMKp",
  "wq7Du8OEOA==",
  "wovCgsKJCGltw6rCncKrbjU=",
  "bsOnwrc=",
  "ecK/CCwI",
  "ecO4wpY=",
  "woLDlcODBxbCosOrw6wRBsOTOw7DqA==",
  "w7FLwog=",
  "w4bDksKAMsOSwq/CvsOcwpY=",
  "w6DDksKIBMOm",
  "wpZ3Qg==",
  "w7wNw7DDnsOhwprDjH/ChXbClsOqw4fCmQ==",
  "wq3Ds8OYwp/CicKo",
  "wrDDg8OuADo=",
  "B2IEw4hcwrPCjlbDqw==",
  "Nk14XsKC",
  "wqNBdMKMwo0=",
  "wrzDnMO/FBU=",
  "TsKnWw==",
  "wp7Cn8KsFHQ=",
  "w73DpHjCocKO",
  "wo/DuSLCv8KY",
];

var _0x5a05 = function (_0x1f6d14, _0x2b0eea) {
  _0x1f6d14 = _0x1f6d14 - 0x0;
  var _0x19e984 = __0x118420[_0x1f6d14];
  if (_0x5a05["initialized"] === undefined) {
    (function () {
      var _0x2dcf24 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var _0x234f2d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x2dcf24["atob"] ||
        (_0x2dcf24["atob"] = function (_0x12a38f) {
          var _0x3d0c49 = String(_0x12a38f)["replace"](/=+$/, "");
          for (var _0x2a2abf = 0x0, _0x3f4904, _0x5ebea5, _0x4fd9d0 = 0x0, _0x2239d3 = ""; (_0x5ebea5 = _0x3d0c49["charAt"](_0x4fd9d0++)); ~_0x5ebea5 && ((_0x3f4904 = _0x2a2abf % 0x4 ? _0x3f4904 * 0x40 + _0x5ebea5 : _0x5ebea5), _0x2a2abf++ % 0x4) ? (_0x2239d3 += String["fromCharCode"](0xff & (_0x3f4904 >> ((-0x2 * _0x2a2abf) & 0x6)))) : 0x0) {
            _0x5ebea5 = _0x234f2d["indexOf"](_0x5ebea5);
          }
          return _0x2239d3;
        });
    })();
    var _0x20a150 = function (_0x2f0b78, _0x1d02fc) {
      var _0x38b58b = [],
        _0x5096bf = 0x0,
        _0x39c1ef,
        _0x4f6717 = "",
        _0x46c788 = "";
      _0x2f0b78 = atob(_0x2f0b78);
      for (var _0x597c7c = 0x0, _0x101e10 = _0x2f0b78["length"]; _0x597c7c < _0x101e10; _0x597c7c++) {
        _0x46c788 += "%" + ("00" + _0x2f0b78["charCodeAt"](_0x597c7c)["toString"](0x10))["slice"](-0x2);
      }
      _0x2f0b78 = decodeURIComponent(_0x46c788);
      for (var _0x53ca76 = 0x0; _0x53ca76 < 0x100; _0x53ca76++) {
        _0x38b58b[_0x53ca76] = _0x53ca76;
      }
      for (_0x53ca76 = 0x0; _0x53ca76 < 0x100; _0x53ca76++) {
        _0x5096bf = (_0x5096bf + _0x38b58b[_0x53ca76] + _0x1d02fc["charCodeAt"](_0x53ca76 % _0x1d02fc["length"])) % 0x100;
        _0x39c1ef = _0x38b58b[_0x53ca76];
        _0x38b58b[_0x53ca76] = _0x38b58b[_0x5096bf];
        _0x38b58b[_0x5096bf] = _0x39c1ef;
      }
      _0x53ca76 = 0x0;
      _0x5096bf = 0x0;
      for (var _0x52d802 = 0x0; _0x52d802 < _0x2f0b78["length"]; _0x52d802++) {
        _0x53ca76 = (_0x53ca76 + 0x1) % 0x100;
        _0x5096bf = (_0x5096bf + _0x38b58b[_0x53ca76]) % 0x100;
        _0x39c1ef = _0x38b58b[_0x53ca76];
        _0x38b58b[_0x53ca76] = _0x38b58b[_0x5096bf];
        _0x38b58b[_0x5096bf] = _0x39c1ef;
        _0x4f6717 += String["fromCharCode"](_0x2f0b78["charCodeAt"](_0x52d802) ^ _0x38b58b[(_0x38b58b[_0x53ca76] + _0x38b58b[_0x5096bf]) % 0x100]);
      }
      return _0x4f6717;
    };
    _0x5a05["rc4"] = _0x20a150;
    _0x5a05["data"] = {};
    _0x5a05["initialized"] = !![];
  }
  var _0x55e6dc = _0x5a05["data"][_0x1f6d14];
  if (_0x55e6dc === undefined) {
    if (_0x5a05["once"] === undefined) {
      _0x5a05["once"] = !![];
    }
    _0x19e984 = _0x5a05["rc4"](_0x19e984, _0x2b0eea);
    _0x5a05["data"][_0x1f6d14] = _0x19e984;
  } else {
    _0x19e984 = _0x55e6dc;
  }
  return _0x19e984;
};

const _0x1f67 = [
  "fX3DosOkeE5jw6zDnm8yfANrwpc7bgltI8KgfcORwos=",
  "w4jClMONDsOrw7V6w6zCnMKhMw==",
  "dhhcwqjDn8KWdXnDiMKlSzhUESEdW8OFw6J0e8Kew7VCwqAAw4RBw6HDvGktwqxOcCxEYMOAFW4owpsXwqJHwoPCsW4CD34wXA==",
  "woHCtcKcOMOW",
  "w5nCuWHDi8O7JVRxw5vCtcOLwpxpw68ZLMKlR3bDlMKO",
  "woHCgALCuSM=",
  "WjLDtMKLwqfCr8K4",
  "w5/Dmlkhw7g=",
  "w4Qpw43ClsOt",
  "w7omw5DCn8Os",
  "w4XCicOWDMOw",
  "EsOtw58Twps=",
  "w7kwwq8=",
  "w4LCl3TDn8Oa",
  "NsOLwrNxw4s=",
  "ayYNwrTDgA==",
  "wphJwrEf",
  "YsKTwqdpEw==",
  "5LyK5rKi57yn5Lqz77+h6IOO5b6V772C576i56qL5Yq95L626IK977+e6LeE5a6Z6b6H772YIsK0GcOsw5fCr8OowqHCheS6pua2vue9su++msOmQ8OmfF7Cu2cfwo/vvIjmur3lnaflnYzvvZHDl8KgKQEuV8OhOsOWNMOYwpTDl2hvQ1kzBQtqQsO4wqDDj8KHwqfDqFhPLcOoTXVCw6zCo8Oud2DCtj4VwrDDiQ==",
  "worDrMOWLkA=",
  "wobDtMO2ADM=",
  "w44LwpTCow==",
  "YMKnwp93",
  "wo8Vw53Djh8=",
  "w7nCmXo8wpM=",
  "w6sywrwqLg==",
  "wqxFbiMQ",
  "WjLDt8KIwrrCscKowpt2wo5F",
  "w4HDhRDCoMK/",
  "ecKYwqpICg==",
  "WhDDjMK8wos=",
  "E8O+wqLDkMKO",
  "wpfDgsOPUWQ=",
  "QwTDksKqwoo=",
  "eXnCusKLQMOTCQ==",
  "acOsw6HChHM=",
  "ZsOBw5kxSg==",
  "wqVFw5vDtMKNwqRO",
  "w7AQwqEUJQ==",
  "woTDo8OQCXc=",
  "woDDj8O3IxRqRxzCn3HDqA==",
  "c8OTwrBAWsKEwrwKMmlBwp0Mw4fDq1B8PcKVBkV9w6HCnQ==",
  "SsOmw4U6eA==",
  "w4XCisOAHsOw",
  "w5XDncOAbcK+",
  "wozDn8OWJn0=",
  "cQJNwqrDnsODKA==",
  "w4Vfw7jCn8OUG8Oi",
  "ccOPw6MUUA==",
];

const _0x297e = function (_0x5382fd, _0x1f6775) {
  _0x5382fd = _0x5382fd - 0x0;
  let _0x297e41 = _0x1f67[_0x5382fd];
  if (_0x297e["bTFfYL"] === undefined) {
    (function () {
      const _0x1f8ca6 = function () {
        let _0x388118;
        try {
          _0x388118 = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
        } catch (_0x11dc42) {
          _0x388118 = window;
        }
        return _0x388118;
      };
      const _0x357072 = _0x1f8ca6();
      const _0x18b66c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x357072["atob"] ||
        (_0x357072["atob"] = function (_0x3869fa) {
          const _0x46c547 = String(_0x3869fa)["replace"](/=+$/, "");
          let _0x512aca = "";
          for (let _0xfd143c = 0x0, _0x2eaa9c, _0x2ff2cc, _0x46d468 = 0x0; (_0x2ff2cc = _0x46c547["charAt"](_0x46d468++)); ~_0x2ff2cc && ((_0x2eaa9c = _0xfd143c % 0x4 ? _0x2eaa9c * 0x40 + _0x2ff2cc : _0x2ff2cc), _0xfd143c++ % 0x4) ? (_0x512aca += String["fromCharCode"](0xff & (_0x2eaa9c >> ((-0x2 * _0xfd143c) & 0x6)))) : 0x0) {
            _0x2ff2cc = _0x18b66c["indexOf"](_0x2ff2cc);
          }
          return _0x512aca;
        });
    })();
    const _0x482db9 = function (_0x467cfd, _0x585ffc) {
      let _0x1468c3 = [],
        _0xb931a1 = 0x0,
        _0x43d580,
        _0x5a5f4a = "",
        _0x1d0258 = "";
      _0x467cfd = atob(_0x467cfd);
      for (let _0x3c1ff7 = 0x0, _0x49a67a = _0x467cfd["length"]; _0x3c1ff7 < _0x49a67a; _0x3c1ff7++) {
        _0x1d0258 += "%" + ("00" + _0x467cfd["charCodeAt"](_0x3c1ff7)["toString"](0x10))["slice"](-0x2);
      }
      _0x467cfd = decodeURIComponent(_0x1d0258);
      let _0x1702c5;
      for (_0x1702c5 = 0x0; _0x1702c5 < 0x100; _0x1702c5++) {
        _0x1468c3[_0x1702c5] = _0x1702c5;
      }
      for (_0x1702c5 = 0x0; _0x1702c5 < 0x100; _0x1702c5++) {
        _0xb931a1 = (_0xb931a1 + _0x1468c3[_0x1702c5] + _0x585ffc["charCodeAt"](_0x1702c5 % _0x585ffc["length"])) % 0x100;
        _0x43d580 = _0x1468c3[_0x1702c5];
        _0x1468c3[_0x1702c5] = _0x1468c3[_0xb931a1];
        _0x1468c3[_0xb931a1] = _0x43d580;
      }
      _0x1702c5 = 0x0;
      _0xb931a1 = 0x0;
      for (let _0xd7ed26 = 0x0; _0xd7ed26 < _0x467cfd["length"]; _0xd7ed26++) {
        _0x1702c5 = (_0x1702c5 + 0x1) % 0x100;
        _0xb931a1 = (_0xb931a1 + _0x1468c3[_0x1702c5]) % 0x100;
        _0x43d580 = _0x1468c3[_0x1702c5];
        _0x1468c3[_0x1702c5] = _0x1468c3[_0xb931a1];
        _0x1468c3[_0xb931a1] = _0x43d580;
        _0x5a5f4a += String["fromCharCode"](_0x467cfd["charCodeAt"](_0xd7ed26) ^ _0x1468c3[(_0x1468c3[_0x1702c5] + _0x1468c3[_0xb931a1]) % 0x100]);
      }
      return _0x5a5f4a;
    };
    _0x297e["ZXTzwA"] = _0x482db9;
    _0x297e["uZXczG"] = {};
    _0x297e["bTFfYL"] = !![];
  }
  const _0xb922c0 = _0x297e["uZXczG"][_0x5382fd];
  if (_0xb922c0 === undefined) {
    if (_0x297e["bxbUKT"] === undefined) {
      const _0x4507cb = function (_0x29ac79) {
        this["BYPoFX"] = _0x29ac79;
        this["hbklOU"] = [0x1, 0x0, 0x0];
        this["Mxjrvg"] = function () {
          return "newState";
        };
        this["iXTnGH"] = "\\w+ *\\(\\) *{\\w+ *";
        this["kiLkCY"] = "['|\"].+['|\"];? *}";
      };
      _0x4507cb["prototype"]["wPXSoe"] = function () {
        const _0x100438 = new RegExp(this["iXTnGH"] + this["kiLkCY"]);
        // 这里好像是native检测
        // const _0x4cdc09 = _0x100438['test'](this['Mxjrvg']['toString']()) ? --this['hbklOU'][0x1] : --this['hbklOU'][0x0];
        const _0x4cdc09 = true ? --this["hbklOU"][0x1] : --this["hbklOU"][0x0];
        return this["bLyqKA"](_0x4cdc09);
      };
      _0x4507cb["prototype"]["bLyqKA"] = function (_0x3103ce) {
        if (!Boolean(~_0x3103ce)) {
          return _0x3103ce;
        }
        return this["EZnbNG"](this["BYPoFX"]);
      };
      _0x4507cb["prototype"]["EZnbNG"] = function (_0xc8959e) {
        for (let _0xbd7a63 = 0x0, _0x4e4cb8 = this["hbklOU"]["length"]; _0xbd7a63 < _0x4e4cb8; _0xbd7a63++) {
          this["hbklOU"]["push"](Math["round"](Math["random"]()));
          _0x4e4cb8 = this["hbklOU"]["length"];
        }
        return _0xc8959e(this["hbklOU"][0x0]);
      };
      new _0x4507cb(_0x297e)["wPXSoe"]();
      _0x297e["bxbUKT"] = !![];
    }
    _0x297e41 = _0x297e["ZXTzwA"](_0x297e41, _0x1f6775);
    _0x297e["uZXczG"][_0x5382fd] = _0x297e41;
  } else {
    _0x297e41 = _0xb922c0;
  }
  return _0x297e41;
};

const _0x3217 = [
  "5Y+L5L+q6IKP77+o6LWf5a2Z6by944Kp",
  "VcKmw7PCnDBS",
  "w6PDrCnDmXs=",
  "DsOmw7fCnQ==",
  "ADvCqnVew5FVY8KPTQ==",
  "woXCo8O6UsOT",
  "w6oVw7Qvw4TCmQvCn0bDpA==",
  "wpbDisOTAcOV",
  "w6vCmEg3V8KHw6bDicOHYw==",
  "V8KLVlITJcKaJ8OKwqQ=",
  "wq/DgRwAXsOEcThnfQ==",
  "wrHDisKO",
  "TcKaVlcSccKVJ8KPw60=",
  "wokvEjbDsg==",
  "w7fDrGVfYQ==",
  "D2vDhsO5YEY=",
  "wrXDjcKOw75ZJ1vDrjg8",
  "wovCvMO4RMOUG3rDjBzCog==",
  "PAbCicObw6A9BcKewpnDsA==",
  "w607w5AGw5s=",
  "Dn/DisOue1k=",
  "XcKgSMKCwpLCk8OZasKFwqU=",
  "NsO9XsKeacOxRQDCscOV",
  "wp7DisOTAMOAPkPDuMO2w4I=",
  "w78/w4UEw4ds",
  "D2rDhcO+YUc=",
  "w4jCgcOtZxfDscOh",
  "ZcKKw489Jn4=",
  "w7PDrCLDlX3ClxI=",
  "woFeB8Ot",
  "woB6w63DqhDCpA==",
  "FsK3w6XDmCxQLBICLg==",
  "YEXCqMKEw5HDgg==",
  "UsKFw5ZvOsKMwqfDugfChw==",
  "GMK4UMOCLw==",
  "E8OawoU=",
  "wqNRwr7DkU/Drmg=",
  "worCmcKTw5XDlg==",
  "eGk7ZSPCvg==",
  "w7PCrC0=",
  "wovDj8OtCcKoK1vDo8KzwqM=",
  "P37CoSjCrMO/",
  "A8Ozw6HCjG7DjcO1J8OhEQ==",
  "w65cRmFMw6tcw49QYQ==",
  "wqQUVzfDqyR3wojCjnk=",
  "bnPDhsKawqXCoGTChQrCng==",
  "M8KFHg8AViM=",
  "RVILfjw=",
  "776fw7Ejw51ywosdwpfCq++8rA==",
  "TC7ClMK6JA==",
  "wpppw6bDqA==",
  "w4HDusKqwp4R",
  "GGHDnDHDnm3DnWhAwqA=",
  "BjHCrEFAw5M=",
  "w4sbwr7CpWE9w6vCh3/CmQ==",
  "wqPCtSNDccK1bi0zGg==",
  "wqITRiXDoDxPwo/CjSI=",
  "w6lQVnE=",
  "wrJdw7UswojClgHDnknDvQ==",
  "EMOkw7PCiCjCm8KCf8KkTw==",
  "wpteGQ==",
  "BlpAw7c=",
  "w5TDo8K5wp4NasKiwobDq8OS",
  "wqrDmMKzRsK0ahk=",
  "I1HDvynDhQ==",
  "wrjDiMO4wp7DuMKBw79f",
  "wpvCosKTw4zDqw==",
  "BWvDtRLDpg==",
  "wpN5w7A=",
  "w6oSw5I5wpjCkwrClQ==",
  "IcOXw7PCmUg=",
  "wq/DisKVw7YLIWPkuK7mtI3nv7A=",
  "woNuw6bDvAbCmsOfwrDClQM=",
  "woPDksOFAsOC",
  "Bx9gPyvDpmh3wpjCkA==",
  "XnbDhMOgwoo=",
  "YGPDn8O/wo/CrXfCmw==",
  "w6RdcUxm",
  "w7xEEWfCtn4sw5E=",
  "wqVDwpdFwofCpg==",
  "ecKBR8KOw4w=",
  "wpteG8OJBcOY",
  "wpHCusORUcOi",
  "PsOvTMOSaMOoXg==",
  "PsOsWcKaacO5aQbCv8KW",
  "wqnDjsONw55TEV/DuiAx",
  "w6jDisOlw5g=",
  "wo1eDcOx",
  "wqIbDRDDtyEx",
  "w4TDo8KpwoIEJ8O7",
  "w4rCnsOwchDDucOHwqrDgh8=",
  "woTDg8OPGg==",
  "ZsKSwpXDg8OiwpFDwpbDuhM=",
  "Zn0h",
  "N8OEw6/CkxXCp8Ohw4fDjsOH",
  "w5IR5Zas5LqO5pya5rmZ776gwrTChBQ=",
  "IMOTw7LChiLCrcOKw5/DjsOE",
  "w67DqgHDhX0=",
  "asKtTsKJw4nCncKbQsOSwq4=",
  "w5kmVsONwpIAwq3CkyfDjQ==",
  "wqtdwqPDhlfDpw==",
  "PMOzR8KLZsO0RB0=",
  "w4nCgsOvdBU=",
  "RsKuW8KTw5nChMO+YsODwqg=",
  "wp19w6XDvRrCvcOywrnCmQc=",
  "w6wcw68pwoXClw==",
  "wrLCsMOmbsON",
  "5a6h5Lq8772Z6K6Y5Yqu5Zaf55Sv77yAGeW9qg==",
  "w4zCi8O0WhfDs8OxwrbDjgA=",
  "QsOEwpFSSi3CrlYtZw==",
  "wrVZwqPDhUzDog==",
  "wqEaQzfDsSF3wog=",
  "w4YmwqzCrXY=",
  "w4zDpcKtwpcMZsKyw57CosKL",
  "w71YEW7Cv3gow4bDgRs=",
  "EMOiw7/CjW/DhA==",
  "w7XDsDFy",
  "MCDDtAbCnFnCmikUw7I=",
  "wr55w7DCnMKzfcKbw6Ejw6Q=",
  "wq/DjsOsD8K9ZQ==",
  "JD3DmsOvwr55A8Oyw4rDig==",
  "FGzDgcOs",
  "wpzDr8OTMMKS",
  "RcKow7nCgQ==",
  "w5rCm8OlZQfDjsOhwq7DjhA=",
  "GcOHw5LClic=",
  "PHXCr2pcZsKSYMO1wqQ=",
  "5YuM5L2+6IO877y76LeW5a2Q6b6UaQDDqg==",
  "C8Obw5/Ci0g=",
  "w5DDp8OfDcOCYnPCvcOkw4c=",
  "wqkWwrHDjgw=",
  "woLDtk80F8KENng4Xw==",
  "wpd1AsKF",
  "wrvDhsKUw59KCQ==",
  "w5kfwrfCrGo=",
  "wpY+EDfDrjU=",
  "PcOYw6TClxPCisOBw4LDjMOC",
  "PsOJacOuw5DDkxEI",
  "IVLCrSHCug==",
  "5Zaf55aA6K6Y5b+H5L+d6IO557Om772LZ3Y=",
  "PsOxWcKVcMOx",
  "w6XDocK0wrk8",
  "w78NwrnDuQ0/YAjDuHo=",
  "FsOmw6LCnQ==",
  "wp1gRMOWwp4Hw5rDkWPCmw==",
  "ASrCp2xJ",
  "DQbCicObw681",
  "wqvDk8Or",
  "woBnTMOBwpQe",
  "w6onw48Fw5A=",
  "772+aea5quWeguWfle+9ikDCr8KVw6E=",
  "RFhPw7cOGRnDhjZR",
  "bCbDrQ==",
  "OMOZw73ClwXDosKUwpLCkcKa",
  "wrvChgwGUcKCdzhycw==",
  "K1hfIw==",
  "LFfDnsOkZA==",
  "w7PDrCLDlX3CkhvCicKzXA==",
  "w6zDqzXDmWfCtBE=",
  "cF/Cp8KHw4zDnMOw",
  "Y2PCh8KXwo7CuXM=",
  "QsOIwo4=",
  "w4pxU1FX",
  "wqwjwq/DqAspPEHDtHE=",
  "J8KMwqXDnQbCq8OQw4PDnsOI",
  "wpteOsO8G8OdwqN0",
  "wpTCssO2w4Bdc8Kuw5fCtsKI",
  "YXU4YTbCosOBBU7DnQ==",
  "NcOUw7k=",
  "C8O3wrPDinY=",
  "VsKDwp/DhsOy",
  "wqJ0PcOHAQ==",
  "wpLCv8Ouw5xadMK0w4nCqcKK",
  "WsKJw44kbsKI",
  "77yXccKmblthwpRiw7fCow==",
  "w6Q/w5Qaw5Ekw53DiFvChw==",
  "wp/DgMOaHcOCZVfDtMOhw58=",
  "byvDuiI=",
  "NsOyR8KadcOKQwrCosKS",
  "AXjDjjvDlXDDiA==",
  "wpUqwqvDtCw=",
  "PcO5T8KQdcO4",
  "b8KsGcOPNw==",
  "HGnDgTzDk2k=",
  "LcOJbsOS",
  "TsKpw7PCnS1oKR8SZg==",
  "XsKYw5QzacOaw6HDuUDCng==",
  "IXrCoSvCt8O6",
  "ecOnw4DChQ==",
  "wq4aTiLDpCF2wpU=",
  "Z3M6dyPCpcOCBA==",
  "wqRXwqPDklfDvWQ3eMK/",
  "w6nCiF0ZRMKNJSFrJA==",
  "Zm/DhsOGwqk=",
  "KcO1WsKWZcOxTw==",
  "w4TCiMOmZBvDqcOMwqfDghQ=",
  "LMOoUMKTYg==",
  "an4q",
  "wrjDhANJDMKDLiIzYQ==",
  "wpYrAAvCrmEzw4/Dgg0=",
  "fyXDsD8COg==",
  "B8KrUsKNwpPCmsOfZsOdwq4=",
  "wr3DicOmCsK/",
  "w4jCgcOuYx/DtMOqwrE=",
  "5qC55raF5YuM5Zep5Lqa6KG85LmW776N",
  "wrgpwq7Dngk1",
  "U8Kvw6jCmnFcLxZJZA==",
  "worCvMOyTg==",
  "MsO1Rw==",
  "b3k/fznCqcO9GE/Dig==",
  "Y8KDw4Q3",
  "wrJQwo1Y",
  "HW7DlMOmbQ==",
  "MsOsRcKadA==",
  "Y2gtZm3Do8KCXhPClA==",
  "dHLDksObwoU=",
  "TcKhTsKQw5DCkcOP",
  "wr7DjsKlScO1bAbCp8Oow6w=",
  "wqRWwoBNwo0=",
  "wrPDjcONw51ZGRs=",
  "M09Jw5QM",
  "w6TDqyxnYQ==",
];

const _0x4fc6 = function (_0x346e56, _0x32179c) {
  _0x346e56 = _0x346e56 - 0x0;
  let _0x4fc6a7 = _0x3217[_0x346e56];
  if (_0x4fc6["rmvTcH"] === undefined) {
    (function () {
      let _0x4b4368;
      try {
        const _0x3f61d9 = Function("return (function() " + '{}.constructor("return this")( )' + ");");
        _0x4b4368 = _0x3f61d9();
      } catch (_0x3e368d) {
        _0x4b4368 = window;
      }
      const _0x57f6e0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x4b4368["atob"] ||
        (_0x4b4368["atob"] = function (_0x507292) {
          const _0x2c44ed = String(_0x507292)["replace"](/=+$/, "");
          let _0x5c9abf = "";
          for (let _0x352b67 = 0x0, _0x484147, _0x4d2924, _0x4388a5 = 0x0; (_0x4d2924 = _0x2c44ed["charAt"](_0x4388a5++)); ~_0x4d2924 && ((_0x484147 = _0x352b67 % 0x4 ? _0x484147 * 0x40 + _0x4d2924 : _0x4d2924), _0x352b67++ % 0x4) ? (_0x5c9abf += String["fromCharCode"](0xff & (_0x484147 >> ((-0x2 * _0x352b67) & 0x6)))) : 0x0) {
            _0x4d2924 = _0x57f6e0["indexOf"](_0x4d2924);
          }
          return _0x5c9abf;
        });
    })();
    const _0x47a453 = function (_0x207251, _0x13fe70) {
      let _0x377bb1 = [],
        _0x46f3ab = 0x0,
        _0x18d422,
        _0x33b11f = "",
        _0x4a9d50 = "";
      _0x207251 = atob(_0x207251);
      for (let _0x1895e9 = 0x0, _0x2edcfc = _0x207251["length"]; _0x1895e9 < _0x2edcfc; _0x1895e9++) {
        _0x4a9d50 += "%" + ("00" + _0x207251["charCodeAt"](_0x1895e9)["toString"](0x10))["slice"](-0x2);
      }
      _0x207251 = decodeURIComponent(_0x4a9d50);
      let _0x43cd00;
      for (_0x43cd00 = 0x0; _0x43cd00 < 0x100; _0x43cd00++) {
        _0x377bb1[_0x43cd00] = _0x43cd00;
      }
      for (_0x43cd00 = 0x0; _0x43cd00 < 0x100; _0x43cd00++) {
        _0x46f3ab = (_0x46f3ab + _0x377bb1[_0x43cd00] + _0x13fe70["charCodeAt"](_0x43cd00 % _0x13fe70["length"])) % 0x100;
        _0x18d422 = _0x377bb1[_0x43cd00];
        _0x377bb1[_0x43cd00] = _0x377bb1[_0x46f3ab];
        _0x377bb1[_0x46f3ab] = _0x18d422;
      }
      _0x43cd00 = 0x0;
      _0x46f3ab = 0x0;
      for (let _0x139197 = 0x0; _0x139197 < _0x207251["length"]; _0x139197++) {
        _0x43cd00 = (_0x43cd00 + 0x1) % 0x100;
        _0x46f3ab = (_0x46f3ab + _0x377bb1[_0x43cd00]) % 0x100;
        _0x18d422 = _0x377bb1[_0x43cd00];
        _0x377bb1[_0x43cd00] = _0x377bb1[_0x46f3ab];
        _0x377bb1[_0x46f3ab] = _0x18d422;
        _0x33b11f += String["fromCharCode"](_0x207251["charCodeAt"](_0x139197) ^ _0x377bb1[(_0x377bb1[_0x43cd00] + _0x377bb1[_0x46f3ab]) % 0x100]);
      }
      return _0x33b11f;
    };
    _0x4fc6["ngSQgL"] = _0x47a453;
    _0x4fc6["IdxhYL"] = {};
    _0x4fc6["rmvTcH"] = !![];
  }
  const _0x3985eb = _0x4fc6["IdxhYL"][_0x346e56];
  if (_0x3985eb === undefined) {
    if (_0x4fc6["EQNbmb"] === undefined) {
      const _0x271654 = function (_0x412d3c) {
        this["YWtJzb"] = _0x412d3c;
        this["jiLzOh"] = [0x1, 0x0, 0x0];
        this["LVtJeH"] = function () {
          return "newState";
        };
        this["odyYfx"] = "\\w+ *\\(\\) *{\\w+ *";
        this["BhCGGn"] = "['|\"].+['|\"];? *}";
      };
      _0x271654["prototype"]["AnlpoK"] = function () {
        const _0x9bcc55 = new RegExp(this["odyYfx"] + this["BhCGGn"]);
        // const _0x1da710 = _0x9bcc55["test"](this["LVtJeH"]["toString"]())
        //   ? --this["jiLzOh"][0x1]
        //   : --this["jiLzOh"][0x0];
        const _0x1da710 = true ? --this["jiLzOh"][0x1] : --this["jiLzOh"][0x0];
        return this["IuoVlP"](_0x1da710);
      };
      _0x271654["prototype"]["IuoVlP"] = function (_0x1819ad) {
        if (!Boolean(~_0x1819ad)) {
          return _0x1819ad;
        }
        return this["hatORN"](this["YWtJzb"]);
      };
      _0x271654["prototype"]["hatORN"] = function (_0x36178b) {
        for (let _0x464df1 = 0x0, _0x5d3afd = this["jiLzOh"]["length"]; _0x464df1 < _0x5d3afd; _0x464df1++) {
          this["jiLzOh"]["push"](Math["round"](Math["random"]()));
          _0x5d3afd = this["jiLzOh"]["length"];
        }
        return _0x36178b(this["jiLzOh"][0x0]);
      };
      new _0x271654(_0x4fc6)["AnlpoK"]();
      _0x4fc6["EQNbmb"] = !![];
    }
    _0x4fc6a7 = _0x4fc6["ngSQgL"](_0x4fc6a7, _0x32179c);
    _0x4fc6["IdxhYL"][_0x346e56] = _0x4fc6a7;
  } else {
    _0x4fc6a7 = _0x3985eb;
  }
  return _0x4fc6a7;
};

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
  if (types.isIdentifier(path.node.id, { name })) {
    const leftName = path.node.id.name;
    const binding = path.scope.getBinding(leftName);
    if (binding) {
      const { referencePaths } = binding;
      for (const p of referencePaths) {
        if (types.isCallExpression(p.parentPath)) {
          const [param1, param2] = p.parentPath.node.arguments;
          const fnMap = {
            _0x297e,
            _0x5a05,
            _0x4fc6,
          };
          const plainText = fnMap[name](param1.value, param2.value);
          p.parentPath.replaceWith(types.stringLiteral(plainText));
          console.log(`字符串解密${name}:${leftName}('${param1.value}','${param2.value}') => ${plainText}`);
        } else {
          encryptStr(p.parentPath, leftName);
        }
      }
    }
  }
}

function hexStringToStr(hexString) {
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

async function main() {
  const encryptJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./cesium-example-origin.js");
  let jsCode = await readFile(encryptJsPath);
  jsCode = decryptHexStr(jsCode);
  const ast = getAstByJs(jsCode);
  // 字符串解密
  traverse(ast, {
    VariableDeclarator(path) {
      encryptStr(path, "_0x5a05");
      encryptStr(path, "_0x297e");
      encryptStr(path, "_0x4fc6");
    },
  });
  let newAst = getAstByJs(getJsByAst(ast));
  traverse(newAst, {
    Identifier(path) {
      removeUnusedCode(path);
    },
  });
  let newJsCode = getJsByAst(ast);
  newJsCode = decryptHexStr(newJsCode);
  const outputJsPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./cesium-example-origin_decrypt.js");
  await writeFile(outputJsPath, newJsCode);
  console.log("还原结束");
}

main();
