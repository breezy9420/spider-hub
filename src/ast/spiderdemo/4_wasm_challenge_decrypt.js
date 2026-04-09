var _0x2ba6ea49 = Object["create"](null);
var _0x2ba6ea50;
function _0x2ba6ea52(_0x2ba6ea59, _0x2ba6ea60, _0x2ba6ea61, fnLengths = {}) {
  var _0x2ba6ea62;
  var _0x2ba6ea63 = {
    _0x2ba6ea9: function () {},
    _0x2ba6ea10: function () {
      var [_0x2ba6ea64, _0x2ba6ea65] = _0x2ba6ea50;
      try {
        var xorEncrypted;
        xorEncrypted = decodeURIComponent(escape(atob(_0x2ba6ea64)));
        var result = "";
        for (var i = 0; i < xorEncrypted.length; i++) {
          result += String.fromCharCode(xorEncrypted.charCodeAt(i) ^ _0x2ba6ea65.charCodeAt(i % _0x2ba6ea65.length));
        }
        return result;
      } catch (e) {
        return String["fromCharCode"](0x0);
      }
    },
    _0x2ba6ea11: function () {
      var [_0x2ba6ea66, _0x2ba6ea67] = _0x2ba6ea50;
      try {
        if (window["validatePageNavigation"] && window["validatePageNavigation"] !== _0x2ba6ea52("_0x2ba6ea11", "_0x2ba6ea6")) {
          return window["validatePageNavigation"](_0x2ba6ea66, _0x2ba6ea67);
        }
        _0x2ba6ea50 = ["page_navigation", {
          ["challengeType"]: _0x2ba6ea66,
          ["pageNum"]: _0x2ba6ea67,
          ["timestamp"]: window["function Date() { [native code] }"]["now"]()
        }], _0x2ba6ea52("_0x2ba6ea19");
        return true;
      } catch (error) {
        console["error"]("[PageNavigation] 翻页验证失败:", error);
        return false;
      }
    },
    _0x2ba6ea12: function () {
      var [_0x2ba6ea68] = _0x2ba6ea50;
      return _0x2ba6ea68 = new URLSearchParams(window["location"]["search"]), _0x2ba6ea68["get"]("challenge_type") || _0x2ba6ea68["get"]("type") || "header_check";
    },
    _0x2ba6ea13: function () {
      var [_0x2ba6ea69, _0x2ba6ea70] = _0x2ba6ea50;
      return _0x2ba6ea70 = {
        header_check: "请求头检测挑战",
        number_challenge: "动态数字求和挑战",
        js_challenge: "JS混淆解析挑战",
        wasm_challenge: "WASM挑战"
      }, _0x2ba6ea70[_0x2ba6ea69] || _0x2ba6ea69;
    },
    _0x2ba6ea14: function () {
      var [_0x2ba6ea71, _0x2ba6ea72, _0x2ba6ea73] = _0x2ba6ea50;
      _0x2ba6ea71 = document["querySelector"](".challenge-title"), function () {
        if (_0x2ba6ea71) {
          function _wrapper3(_0x2ba6ea74, _0x2ba6ea75) {
            return _0x2ba6ea74(_0x2ba6ea75);
          }
          _0x2ba6ea73 = _wrapper3(new _0x2ba6ea52("_0x2ba6ea13", "_0x2ba6ea6", "_0x2ba6ea7")["_0x2ba6ea8"], _0x2ba6ea58);
          _0x2ba6ea71["innerHTML"] = "🎯 任务: 采集这100页的全部数字，计算加和并提交结果<br/><small>(" + _0x2ba6ea73 + ")</small>";
        }
      }.call(this), _0x2ba6ea72 = document["querySelector"](".page-title"), function () {
        if (!!true && _0x2ba6ea72) {
          function _wrapper4(_0x2ba6ea76, _0x2ba6ea77) {
            return _0x2ba6ea76(_0x2ba6ea77);
          }
          _0x2ba6ea72["innerHTML"] = "ﾎﾎ " + _wrapper4(_0x2ba6ea52("_0x2ba6ea13", "_0x2ba6ea6"), _0x2ba6ea58);
        }
      }.call(this);
    },
    _0x2ba6ea15: function () {
      var [_0x2ba6ea78, _0x2ba6ea79] = _0x2ba6ea50;
      _0x2ba6ea79 = document["getElementById"]("numbersGrid"), _0x2ba6ea79["innerHTML"] = _0x2ba6ea78["map"]((_0x2ba6ea80, _0x2ba6ea81) => {
        return "<div class=\"number-box\" style=\"animation-delay: " + _0x2ba6ea81 * 0.1 + "s\">" + _0x2ba6ea80 + "</div>";
      })["join"]((_0x2ba6ea50 = ["", "spiderdemo"], new _0x2ba6ea52("_0x2ba6ea10", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"]));
    },
    _0x2ba6ea16: function () {
      document["getElementById"]("currentPageNum")["textContent"] = _0x2ba6ea53, document["getEle" + (_0x2ba6ea50 = [_0x2ba6ea51["15036"], "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"])]("totalPages")["textContent"] = _0x2ba6ea54, document["getElementById"]("collectedPages")["textContent"] = _0x2ba6ea57["size"];
    },
    _0x2ba6ea17: function () {
      var [_0x2ba6ea82, _0x2ba6ea83, _0x2ba6ea84] = _0x2ba6ea50;
      document["getElementById"]("paginationInfo")["textContent"] = "第 " + _0x2ba6ea53 + " 页，共 " + _0x2ba6ea54 + " 页 | 当前页面包含 " + _0x2ba6ea55 + " 个数字", _0x2ba6ea82 = document["getElementById"]("paginationControls"), _0x2ba6ea83 = "\n        <button class=\"page-btn\" onclick=\"changePage('prev')\" " + (_0x2ba6ea53 <= 1 ? "disabled" : (_0x2ba6ea50 = ["", "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10"))) + ">← 上一页</button>\\n    ", function () {
        if (!false && _0x2ba6ea54 <= "7") {
          for (_0x2ba6ea84 = 1; _0x2ba6ea84 <= _0x2ba6ea54; _0x2ba6ea84++) {
            _0x2ba6ea83 += "<button class=\"page-btn " + (!false && _0x2ba6ea84 === _0x2ba6ea53 ? "active" : (_0x2ba6ea50 = ["", "spiderdemo"], new _0x2ba6ea52("_0x2ba6ea10", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"])) + " onclick=changePage(" + _0x2ba6ea84 + ")\">" + _0x2ba6ea84 + "</button>";
          }
        } else {
          if (!isNaN("18") && _0x2ba6ea53 <= "4") {
            for (_0x2ba6ea84 = 1; _0x2ba6ea84 <= "5"; _0x2ba6ea84++) {
              _0x2ba6ea83 += "<button class=\"page-btn " + (_0x2ba6ea84 === _0x2ba6ea53 ? "active" : (_0x2ba6ea50 = ["", "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10"))) + "\" onclick=\"changePage(" + _0x2ba6ea84 + ")\">" + _0x2ba6ea84 + "</button>";
            }
            _0x2ba6ea83 += "<span class=\"page-dots\">...</span>";
            _0x2ba6ea83 += "<button class=\"page-btn\" onclick=\"changePage(" + _0x2ba6ea54 + ")\">" + _0x2ba6ea54 + "</button>";
          } else if (_0x2ba6ea53 >= _0x2ba6ea54 - "3") {
            _0x2ba6ea83 += "<button class=\"page-btn\" onclick=\"changePage(1)\">1</button>";
            _0x2ba6ea83 += "<span class=\"page-dots\">...</span>";
            for (_0x2ba6ea84 = _0x2ba6ea54 - "4"; _0x2ba6ea84 <= _0x2ba6ea54; _0x2ba6ea84++) {
              _0x2ba6ea83 += "<button class=\"page-btn " + (_0x2ba6ea84 === _0x2ba6ea53 ? "active" : (_0x2ba6ea50 = ["", "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10"))) + "\" onclick=\"changePage(" + _0x2ba6ea84 + ")\">" + _0x2ba6ea84 + "</button>";
            }
          } else {
            _0x2ba6ea83 += "<button class=\"page-btn\" onclick=\"changePage(1)\">1</button>";
            _0x2ba6ea83 += "<span class=\"page-dots\">...</span>";
            for (_0x2ba6ea84 = _0x2ba6ea53 - 1; _0x2ba6ea84 <= _0x2ba6ea53 + 1; _0x2ba6ea84++) {
              _0x2ba6ea83 += "<button class=\"page-btn " + (_0x2ba6ea84 === _0x2ba6ea53 ? "active" : (_0x2ba6ea50 = ["", "spiderdemo"], new _0x2ba6ea52("_0x2ba6ea10", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"])) + "\" onclick=\"changePage(" + _0x2ba6ea84 + ")\">" + _0x2ba6ea84 + "</button>";
            }
            _0x2ba6ea83 += "<span class=\"page-dots\">...</span>";
            _0x2ba6ea83 += "<button class=\"page-btn\" onclick=\"changePage(" + _0x2ba6ea54 + ")\">" + _0x2ba6ea54 + "</button>";
          }
        }
      }.call(this), _0x2ba6ea83 += "\n        <button class=\"page-btn\" onclick=\"changePage('next')\" " + ("false" && _0x2ba6ea53 >= _0x2ba6ea54 ? "disabled" : (_0x2ba6ea50 = ["", "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10"))) + ">下一页 →</button>\\n    ", _0x2ba6ea82["innerHTML"] = _0x2ba6ea83;
    },
    _0x2ba6ea18: function () {
      var [_0x2ba6ea85, _0x2ba6ea86, _0x2ba6ea87, _0x2ba6ea88, _0x2ba6ea89] = _0x2ba6ea50;
      _0x2ba6ea87 = document["getElementById"]("resultMessage"), _0x2ba6ea87["innerHTML"] = _0x2ba6ea85, _0x2ba6ea87["style"]["display"] = "block", _0x2ba6ea88 = {
        success: "#d4edda",
        error: "#f8d7da",
        info: "#d1ecf1"
      }, _0x2ba6ea89 = {
        success: "#c3e6cb",
        error: "#f5c6cb",
        info: "#bee5eb"
      }, _0x2ba6ea87["style"]["backgroundColor"] = _0x2ba6ea88[_0x2ba6ea86] || _0x2ba6ea88["info"], _0x2ba6ea87["style"]["border"] = "1px solid " + (_0x2ba6ea89[_0x2ba6ea86] || _0x2ba6ea89["info"]), _0x2ba6ea87["style"]["color"] = _0x2ba6ea86 === "error" ? "#721c24" : _0x2ba6ea86 === "success" ? "#155724" : "#0c5460";
    },
    _0x2ba6ea19: function () {
      var [_0x2ba6ea90, _0x2ba6ea91] = _0x2ba6ea50;
      console["log"]("行为记录:", {
        ["action"]: _0x2ba6ea90,
        ["data"]: _0x2ba6ea91,
        ["timestamp"]: window["function Date() { [native code] }"]["now"]()
      });
    },
    _0x2ba6ea20: function () {
      document["getElementById"]("loadingOverlay")["style"]["display"] = "flex";
    },
    _0x2ba6ea21: function () {
      document["getElementById"]("loadingOverlay")["style"]["display"] = "none";
    },
    _0x2ba6ea22: function () {
      document["addEventListener"]("keypress", function (_0x2ba6ea92) {
        if ("true" && _0x2ba6ea92["key"] === "Enter" && _0x2ba6ea92["target"]["id"] === "answerInput") {
          submitAnswer();
        }
      });
    },
    _0x2ba6ea23: function () {
      _0x2ba6ea58 = _0x2ba6ea52("_0x2ba6ea12", "_0x2ba6ea5"), console["log"]("当前挑战类型:", _0x2ba6ea58), new _0x2ba6ea52("_0x2ba6ea14", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"], loadPageData(1), _0x2ba6ea52("_0x2ba6ea22", "_0x2ba6ea5"), initAntiDebugger();
    },
    _0x2ba6ea24: function () {
      debugger
      try {
        if ("true" && console["table"]["function toString() { [native code] }"]() !== "function table() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          if (Array.isArray([])) {
            return true;
          } else {
            return "tXmMvb";
          }
        }
        if ("true" && console["table"]["function toString() { [native code] }"]() !== window["function Function() { [native code] }"]["prototype"]["function toString() { [native code] }"]["call"](console["table"])) {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          if (!isNaN("22")) {
            if (!false) {
              return true;
            } else {
              return "cGOdNL";
            }
          } else {
            if (String("x").charCodeAt(0) === "120") {
              return "xvSFld";
            } else {
              return "sihDaP";
            }
          }
        }
        if (!isNaN("75") && console["clear"]["function toString() { [native code] }"]() !== "function clear() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if (console["log"]["function toString() { [native code] }"]() !== "function log() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if (setInterval["function toString() { [native code] }"]() !== "function setInterval() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if (setTimeout["function toString() { [native code] }"]() !== "function setTimeout() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if (setInterval["function toString() { [native code] }"]() !== window["function Function() { [native code] }"]["prototype"]["function toString() { [native code] }"]["call"](setInterval)) {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if ("true" && setTimeout["function toString() { [native code] }"]() !== window["function Function() { [native code] }"]["prototype"]["function toString() { [native code] }"]["call"](setTimeout)) {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if (window["function Date() { [native code] }"]["now"]["function toString() { [native code] }"]() !== "function now() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if (performance["now"]["function toString() { [native code] }"]() !== "function now() { [native code] }") {
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
          return true;
        }
        if ("true") {
          return false;
        } else {
          return "fRgYlg";
        }
      } catch (error) {
        // location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
        // document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
        return true;
      }
    },
    _0x2ba6ea25: function () {
      debugger
      var [_0x2ba6ea93, _0x2ba6ea94, _0x2ba6ea95, _0x2ba6ea96] = _0x2ba6ea50;
      _0x2ba6ea93 = performance["now"](), _0x2ba6ea52("_0x2ba6ea24", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"], _0x2ba6ea94 = window["function Array() { [native code] }"]("1000")["fill"]()["map"](function (_0x2ba6ea97, _0x2ba6ea98) {
        if ("true") {
          return {
            ["id"]: _0x2ba6ea98,
            ["name"]: "test" + _0x2ba6ea98,
            ["value"]: window["[object Math]"]["random"]()
          };
        } else {
          return "tbELyV";
        }
      }), console["table"](_0x2ba6ea94), console["clear"](), _0x2ba6ea95 = performance["now"](), _0x2ba6ea96 = _0x2ba6ea95 - _0x2ba6ea93, console["log"](_0x2ba6ea96), function () {
        if (_0x2ba6ea96 > "10") {
          _0x2ba6ea50 = ["debugger_detected", {
            ["executionTime"]: _0x2ba6ea96,
            ["timestamp"]: window["function Date() { [native code] }"]["now"]()
          }], new _0x2ba6ea52("_0x2ba6ea19", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"];
          location["href"] = "https://spiderbox.cn/?utm_source=spiderdemo";
          document["body"]["innerHTML"] = "检测到调试环境，页面已被保护。";
        }
      }.call(this);
    }
  };
  if (_0x2ba6ea60 === "_0x2ba6ea5") {
    _0x2ba6ea50 = [];
  }
  if (_0x2ba6ea60 === "_0x2ba6ea6") {
    function createFunction() {
      var _0x2ba6ea99 = function (..._0x2ba6ea101) {
        _0x2ba6ea50 = _0x2ba6ea101;
        return _0x2ba6ea63[_0x2ba6ea59].apply(this);
      };
      var _0x2ba6ea100 = fnLengths[_0x2ba6ea59];
      if (_0x2ba6ea100) {
        _0x2ba6ea0(_0x2ba6ea99, _0x2ba6ea100);
      }
      return _0x2ba6ea99;
    }
    _0x2ba6ea62 = _0x2ba6ea49[_0x2ba6ea59] || (_0x2ba6ea49[_0x2ba6ea59] = createFunction());
  } else {
    _0x2ba6ea62 = _0x2ba6ea63[_0x2ba6ea59]();
  }
  if (_0x2ba6ea61 === "_0x2ba6ea7") {
    return {
      _0x2ba6ea8: _0x2ba6ea62
    };
  } else {
    return _0x2ba6ea62;
  }
}
var _0x2ba6ea51 = ["EQUOAwAAOwEIGxYTHQEB", "SV9GFxUbAAAfDRwIRwcLXVsQGQIsAwY=", "HR4MFi0=", "6LGw", "6K6m54+f5aOq772o6aCQ6ZyQ5baW6KOO5L6w5ouL44Gx", "Fh4dKAwBEAADCgE=", "Nz8kJw==", "HB4dAQsG", "Px8IAAAW", "Hw==", "HA==", "FA==", "6K6W5LqT56Go55WVFg==", "AxkNARcWAQgC6L60", "6KC/6ZmC5ouN", "BBEa", "Hi8KDAQeCAADCA==", "Fg==", "Bg==", "HRQMAgw=", "HRUN", "BCoR", "IwY=", "KiI=", "PSY=", "Hhs=", "XAM=", "FhNYSwQCDUoOBxIcBQELFQFKBAEaBEZbBhoFCQEKHQ==", "FBU2EBwCAVg=", "Fh4KCwEXMTck", "MB8=", "HgAGCgAcEA==", "GQM=", "HQ==", "GA==", "FgIb", "AQ==", "OyQ9", "Iw==", "Uw==", "AAQIEA==", "AA==", "SQ==", "BgM9AR0=", "Bw==", "XAMMB1RdBRUEQBAYCAgJFw==", "HRcMSxUTAwBCUBAYCA==", "HxwMCgIXOxEUHxZN", "HRMGAAAnNiwuAB4ABgoA", "HQQ=", "VQAIAw==", "Tg==", "GQ==", "HB4=", "FgI=", "HAI=", "OyQ=", "JyA=", "BxEd", "BgM=", "AAQI", "BwUa", "JxUREA==", "XAMMB1RdBRUEQBAYCAgJFwoCCEAABQs=", "Hhkd", "XA==", "PA==", "ICQ=", "Eg==", "AwAFDQYT", "BxkGCkoYFwoD", "BwI=", "Gh4ODQML", "AB8=", "AQI=", "Ow==", "JyQ5", "AAQ=", "EgQ=", "BxEdERYmAR0=", "BREF", "GhQIEAAiBQIIIRIGAA==", "FBEdDQoc", "BRE=", "HxkNBREXNAQ=", "FBUnBRMbAwQZBhwe", "BREFDQETEAA9DhQVJwUTGw==", "FBEdDQo=", "AxEO", "LB4IEgwVBREEAB0=", "Nw==", "BxU=", "BA==", "AR8b", "KCA=", "EhcMKgQEDQIMGxofBzlF576J6aCR6aup6K6s5aWe", "6LWWSg==", "HBMIEA==", "Gh8H", "ABU=", "EgIK", "Gw==", "EBgICA==", "HxUHAw==", "Fi8dHRUX", "CgA=", "GxUIAAAAOwYF", "FhM=", "6K6E5rCy", "5aWH5qKw5rSi5o21", "5omr", "5Yub5oGx", "5pSD5ayn", "5rCx5ZO85o245om8", "OSPmtp7mtqI=", "6KaQ5p+g5o24", "JA==", "MiMk", "5o2i5omo", "AgUMFhw=", "IBU=", "HxUKEAoA", "XRMB", "HxwMCgIXSREEGx8V", "Gh4=", "HRUbLA==", "Jz0l", "8KO/n0nkup/li4RIROmGoumaq+i+tkI=", "Q0DpoJznm6DlhI3pgprmlJTlrLLvvaHor47nr6Tli5Dlk6XluJLmjrXku5bnurfmn7lR", "EQJGWlkBCQQBA01Y", "Wkw=", "AB0ICAlM", "AgUMFhwhAQ==", "FhMdCxc=", "XQA=", "EhcM", "XgQAEAkX", "Gg==", "HR4MFi0mKQ==", "Pw==", "77+9", "ABk=", "CQ==", "AAU=", "EBMMFw==", "5o2i", "5omr5Ymt", "5aa45Y2m5om55Yu7Xw==", "5Ymu", "5aa45Y2m", "5L6S5oCfUw==", "Hg==", "AAMIAwA=", "GxEaOxUTFxYI", "Fy8L", "FhYGFgA=", "5o6j", "56WJ", "SVA=", "HhU=", "AAM=", "HRY=", "Aw==", "LBQIEAQ=", "5aWC6LWV", "EBM=", "FgMa", "AxEOAQ==", "LBQIEA==", "AQIG", "6I+E5Y6m5pSZ", "5oyd5aWB", "6LWW", "6I+E", "5Y6l5pSA5oyH", "5aWC6LWVUw==", "FgMaBQ==", "FBU=", "HRMFEQE=", "FgM=", "6K6E", "5YS755iL", "5bym", "HhUaFwQ=", "EBwcAAA=", "HRU=", "Fy8ACgwG", "5o2i5omo5p2D5Ym55aau", "5Y2l7728", "5qyQ5Z2Y6Yak5peU5Ym45aa55Y2yS0NB", "EBw=", "EgI=", "6I+E5Y6m", "5pSD5oye5aWY6LWBXw==", "BzUFAQ==", "HhUHECcLLQE=", "HQU=", "HhI=", "FgIaIxcbAA==", "Gh4H", "FgIh", "TxQAEkURCAQeHE5SBxEIEAEXQA0cCEtEFgYdCQ==", "Fk1LBQsbCQQZBhweRAAAHgUc", "UQ==", "TQ==", "T18N", "BU4=", "", "KQ==", "Fw==", "HxU=", "HRc=", "Bxg=", "AxEOATo=", "BQ==", "GhUe", "HRcd", "5YuT6LyN6aCc6ZyG5pSV5oyc5aWV", "5YuT6LyN", "6aCG6ZyS", "5pSD5oye5aWY6LWB", "AR8=", "Jw==", "FgY=", "Pg==", "Cw==", "Bh4NAQ==", "FRk=", "Fgg=", "FgQsCAAf", "Fh4dJhw7AA==", "EAU=", "AQIMChE=", "IxEOASsHCQ==", "BxURECYdChEI", "FgQsCAA=", "Bx8dBQk=", "IxE=", "FBUa", "BxURECYd", "Fh4d", "EB8FCA==", "FhMd", "FhQ5BQIXFw==", "BxUREA==", "MB8H", "BxUHEA==", "CRU=", "BzUFAQgXChEvFjo=", "AxEODQsTEA==", "Gh8HLQsU", "BxUR", "BzMGChE=", "562f", "6aCG77285YSY", "U+mghQ==", "UwxJ5by35Yio6aCH6ZyG5Y2g", "5ZGYUA==", "U+S5mg==", "5pSD", "5ayk", "FBUdIQkXCQAD", "BzI=", "CjkN", "MB8HEBcdCBY=", "eVBJREVSRA==", "U1BVBhAGEAoDTxAcCA==", "AANURhUTAwBADQceS0QKHAcJBAwYTUsHDRMKAgg/EhcMTEICFgAbSFpSSQ==", "GgMIBgkX", "TeKHoEnkua7kuaXpoIdYSg8=", "BgQdCwtMbg==", "U1BJRA==", "TxIcEBEdCkUOAxI=", "AANURhU=", "EhcMSQcGCkU=", "EAQA", "BRU=", "UVA=", "HB4KCAwRD1hP", "EBgICgIXNAQKCls=", "Wg==", "T18L", "BgQd", "HB5X", "TxIcEBEdCkUOAxIDGllHAgU=", "FBVEBhEc", "EA==", "BxkfAQ==", "HB4KCAwRD1hPDBsRBwMAIgUC", "Flg=", "Tw==", "XBIcEBE=", "TwMZBQtSBwkMHABNSxQEFQFICQ==", "HAQaRltcSks=", "T18aFAQcWg==", "TxIcEBEdCkUO", "HxEaF1g=", "UQAIAwBfBhEDTVMfBwcJGwcOUE0QGAgKAhc0BAoKWw==", "T18LERE=", "Bx8=", "HU4=", "TxIcEBEdCkUOAxIDGllHAgUC", "Fl0LEAtQRAoDDB8ZCg9YUAcNDAEUFQ==", "IxEOAU1DTUdTXk9fCxERBgsLUw==", "TwMZ", "Eh5JBwkTFw==", "AE1LFAQVAUgJAAcDS1pLXEpZQhwDEQda", "TxIcEBEdCkUOAxIDGllHAgUCCEIR", "HVA=", "EAQ=", "GgYM", "Ux8HBwkbBw5QTRAY", "Eh4OATUTAwBF", "T18LEQ==", "BwQGCg==", "TxIcEBEdCkUOAxIDGllHAgUCCEI=", "EQQHRkUdCgYBBhAbVEYGGgULCgojEQ4BTUNNR1NeT18LEQ==", "BwQGCls=", "TwMZBQtSBwkMHABNSxQ=", "EhcMSQEdEBZPUV1eR1hKAQ==", "AxEHWg==", "EQQH", "EhMd", "UVAGCgYeDQYGUlE=", "EBgICgIXNAQKCg==", "Ww==", "T18=", "EQUd", "Bx8HWg==", "TwMZBQtSBwkMHABNSxQEFQFICQAHA0ta", "XV4=", "XUxGFxUTCls=", "AANURhUTAwBADQceS0Q=", "HB4KCAwRD1hPDBsRBwMAIgUCCEc=", "EQUdEAo=", "eVBJREVSREVNUxEFHRAKHEQGAQ4AA1RGFRMDAEANBx5LRAocBwkEDBhNSwcNEwoCCD8SFwxMQhw=", "FggdQw==", "WlJJ", "Qg==", "Qw==", "FxkaBQ==", "ERwM", "TeS5u+S5qQ==", "6aCGUOKHu1hK", "EQUdEAocWm9NT1NQ", "HRUbLDE=", "Pjw=", "FBUdIQkX", "HQQrHSwW", "HQMeARc7ChU=", "BgQ=", "Ehwc", "ARk=", "EgIa", "FjkHEA==", "EBUaFw==", "GgM=", "LBM=", "HAIbAQYG", "4py/", "GgM2", "EB8bFg==", "5qyQ", "56Cd", "6ZWq", "6K6c", "eVBJREVSREVNT1NQSURFUkQ=", "TwMdFgoc", "FE4=", "56yn", "5qC7", "772yTEYXEQALCwpRTxIbS1t4REVN", "U1BJREVSREU=", "U1BJREXmjqLku4DnrLHmoKVVUw==", "BhIEDREGAQEy", "Eh4aEwAA", "TxIb", "XE5jREVSREVNT1NQSURFUkRF", "U+W2guivlumWiumgkOmckF5F", "TxIbS1t4REVNT1NQSURF", "U1BJREVSROaNtOaJtQ==", "57CI5Z+7U0Q=", "EBgICAkXCg==", "FBU2EBw=", "AxU=", "TxIbS1t4REVNT1NQSURFUkRF", "U1BJROaOtQ==", "5LuX5paG6ZadXkU=", "AAUL", "HhkdEAAWOw==", "Bx8lCwYTCAA=", "IAQbDQs=", "TxIbS1t4REU=", "U1A=", "LAIMFAATEDoeGhAT", "TxIbSw==", "Te+/vQ==", "77+9UA==", "GgM2Bwo=", "XE4=", "8KO/ukk=", "HhUaFw==", "TxIbS1vwo7K5ReW6l+ivgUlQ5Lq957qi5qKl5p6X6K+F", "56+k6L6356mi772o5Y6K5LqX6Yap5peV5o695LuL56yn5qC4", "772y", "LBMGFhcXBxE=", "AAUK", "FgQsCAAfAQsZ", "MQkgAA==", "Eh4=", "AAcMFiw=", "HQAcEA==", "HwU=", "FBUdIQk=", "Fh0M", "Eh4aEw==", "ATkHFBAG", "FQ==", "HBMc", "HhkdOwQc", "AAcMFg==", "AAULCQwG", "BxUNOwQ=", "HQMeARc=", "MgI=", "Egk=", "HB0=", "LBMGFhc=", "GgM2FgACAQQ=", "By8aEQYR", "ABEOAQ==", "5o6j5LuU", "5qC75aWB6LWMXg==", "BhQMFw==", "5o6j5LuU56y95qCs", "6K6E6L+j5YSM56yw", "IRU=", "FDU=", "CwA=", "LQ==", "LxQ=", "WFQ=", "56yn5qC45qGV5b2r6ZW86K6d772o6K6S6L++", "5YSW57uf5pSZ", "5ayk772x", "HhUHEA==", "FgMcCBE/ARYeDhQ=", "Gh4HARc=", "OyQk", "ChwM", "Fxk=", "AAAF", "EQ==", "Hx8K", "UBRd", "FhQN", "UBY=", "SxReAA==", "UA==", "F0EMBwM=", "UBM=", "QBVf", "EBI=", "RhNfBwc=", "UBIMAQ==", "Rg==", "FhI=", "Cg==", "EhMCAxcdEQsJ", "MB8FCxc=", "Bwk=", "ER8b", "Awg=", "UwMGCAwWRA==", "Chw=", "EB8F", "UEdb", "QhNb", "Rw==", "UEFcUVI=", "QQ==", "QxNcUA==", "RUA=", "6KC/5LmK6K+Z", "NxE=", "FgQsCA==", "Fh0MChEwHSwJ", "Hx8IAAwc", "FD8fARceBQ==", "AAQQ", "AAAFBQ==", "Hx8IAAwcAyob", "FgIFBQ==", "Fxka", "AxwI", "EhQNIQ==", "BRUHECkbFxE=", "Fh4MFg==", "GBUQFA==", "ARU=", "Ng==", "HQQM", "BxE=", "FBUd", "Eh4a", "BBUbLQs=", "AwUd", "5byg", "5Yi+5o2h", "5omr57CL5Z+iXg==", "Bh4NAQMb", "Bx86EBc=", "FQUHBxE=", "Gh8HRBETBgkIR1pQEkQ+HAURBBkWUAoLARc5", "Uw0=", "FhY=", "GwQd", "AwNTS0oBFAwJCgESBhxLEQpKUhoHHTYXCgcWBghSAAAAAAAA", "FxUECw==", "HBQ=", "5qKz5rS75YmZ6LGn6K6w", "54+c", "5aOw77286aCc6ZyG5baX6KOZ5L655ouB44Gv", "Kx0=", "PgYL", "ERw=", "Bx86", "BwIACg==", "NQUHBxEb", "AR8dCxELFA==", "EBE=", "GwQdFBZIS0oeHw==", "GhQMFgcdHEsOAVxPHBAILRcKGB0QFVQXFRsA", "FgINAQgd", "ER8=", "54+c5aOz772l6aCR6ZyH5baA", "6KOY5L6t5ouN44Gm", "ND8=", "Fz4l", "CwY6Ig==", "GzQI", "FhE=", "HCMdFg==", "Gh4O", "FQUHBxEbCwtNDB8=", "FhEbTExSH0U2ARIEABI=", "FlAKCwEXOUUQ", "GwQdFBY=", "SV9GFxUbAAAfDRwIRwcLXVsQGQIsAwYRFxEBWB4=", "AxkNARcWAQgC", "5qKz5rS75YmZ6LGn6K6w54+d", "5aOw77286aCc6ZyG5baX", "Bx86EBcb", "Bh4KEAwdCkUBABRYQEQeUj8LDBsaBgxEBh0AADA=", "GwI=", "GwQdFBZIS0oeHxoUDBYHHRxL", "EB5GWw==", "BgQEOxYdERcOCk4DGQ0BFxYBCAIc", "FgIhMA==", "5qKz", "5rS45YmA6LGq6K6x54+K5aOx772o", "6aCG6ZyS5bab6KOP5L645ouW44Gm", "ARkHAw==", "FQUHBxEbCwtNHBYEIAoRFxYT", "EhxBTUUJRD4DDgcZHwFFEQ==", "HBQMOUUP", "GwQdFBZIS0oeHxoUDBYHHRxLDgFcTxwQCA==", "LAMGERcRAVgeHxoUDBYB", "Fh0G", "ATg9KSk=", "5qKz5rS75YmZ6LGn", "6K6m54+f5aOq772o", "BwIA", "FQUHBxEbCwtNHBYEPQ0=", "HhUGERFaTUUW", "UysHBREbEgBNDBwUDDlFDw==", "GwQdFBZIS0oeHxoUDBYHHRxLDgFc", "TAUdCToBCxAf", "EBVUFxUbAAAfCxYdBg==", "HRUbLDE/", "5qKz5rS7", "5YmD6LGz6K6854+L", "HCM=", "BwIACgI=", "NQ==", "Bh4KEAwd", "Bx8dHRUX", "Hxw=", "BwQZF19dSxYdBhcVGwYKCkoGA0A=", "TAUdCToBCxAfDBZNGhQMFgEXCQoeHw==", "OyQkKA==", "5YmD6LGz6K6854+L5aOm772+6aCR6ZyH5baf6KOE5L6u5ouU", "44Gx", "NQU=", "HRMd", "AwI=", "HAQGEBwC", "GwQdFBZIS0oeHxo=", "FxUbBgoKSgYDQEwFHQk6AQsQHwwWTRoUDBYB", "ARQMCQo=", "Gh4HAQ==", "ATg9", "5qKz5rS75YmZ6LGn6K6w54+d5aOn772p6aCY6ZyN5baB", "6KOY5L6t5ouN", "FQUHBxEbCw==", "HVAHCxJaTUUWTygeCBAMBAFF", "EB8NAThSGQ==", "GwQdFBZIS0oeHxoUDBYH", "HAhHBwtdWxAZAiwDBhEXEQE=", "TgMZDQEXFgEIAhw=", "Fwk=", "HRUb", "5qKz5rS75YmZ6LGn6K6w54+d5aOn", "772/", "FQUHBxEbCwtNARwHQU0=", "Uws=", "FxUbBgoKSgYDQEw=", "5aOw77286aCc6ZyG5baX6KOZ", "5L6u5ouU44Gr", "Bh4NAQM=", "FSI=", "FCkF", "GwQdFBZI", "XF8aFAwWARcPAAteCgpKTRERADAAHw==", "BgIKAVgBFAwJCgEUDAkK", "5qKz5rS75YmZ", "6LGw6K6l54+G5aOn772p", "Mg==", "AQII", "HBIDAQ==", "PhE=", "Fx8E", "BxIs", "CiY=", "EhI="];
!function (_0x2ba6ea102, _0x2ba6ea103) {
  while (--_0x2ba6ea103) {
    _0x2ba6ea102.push(_0x2ba6ea102.shift());
  }
}(_0x2ba6ea51, "10");
console["log"]("该代码由spiderdemo进行防护");
let _0x2ba6ea53 = 1;
let _0x2ba6ea54 = "100";
let _0x2ba6ea55 = "10";
let _0x2ba6ea56 = {};
let _0x2ba6ea57 = new Set();
let _0x2ba6ea58 = "wasm_challenge";
async function apiInitChallenge(_0x2ba6ea108 = _0x2ba6ea58, _0x2ba6ea104, _0x2ba6ea105, _0x2ba6ea106, _0x2ba6ea107) {
  return _wrapper = function _0x2ba6ea109(_0x2ba6ea110, _0x2ba6ea111) {
    if ("true") {
      if (Math.random() < 1.851420789124614) {
        return _0x2ba6ea110(_0x2ba6ea111);
      } else {
        return "ewZxPv";
      }
    } else {
      return "YRNVmk";
    }
  }, _0x2ba6ea104 = "/sec1/api/challenge/init/?challenge_type=" + window["function encodeURIComponent() { [native code] }"](_0x2ba6ea108), _0x2ba6ea105 = await _wrapper(fetch, _0x2ba6ea104), _0x2ba6ea106 = await _0x2ba6ea105["json"](), await async function () {
    if (!_0x2ba6ea105["ok"]) {
      _0x2ba6ea107 = _0x2ba6ea106["error"] || "HTTP " + _0x2ba6ea105["status"] + ": " + _0x2ba6ea105["statusText"];
      throw new Error(_0x2ba6ea107);
    }
  }.call(this), _0x2ba6ea106;
}
async function apiGetPageData(_0x2ba6ea112, _0x2ba6ea117 = _0x2ba6ea58, _0x2ba6ea113, _0x2ba6ea114, _0x2ba6ea115, _0x2ba6ea116) {
  return _wrapper2 = function _0x2ba6ea118(_0x2ba6ea119, _0x2ba6ea120) {
    return _0x2ba6ea119(_0x2ba6ea120);
  }, _0x2ba6ea113 = "/sec1/api/challenge/page/?challenge_type=" + window["function encodeURIComponent() { [native code] }"](_0x2ba6ea117) + "&page=" + _0x2ba6ea112, _0x2ba6ea114 = await _wrapper2(fetch, _0x2ba6ea113), _0x2ba6ea115 = await _0x2ba6ea114["json"](), await async function () {
    if ("true" && !_0x2ba6ea114["ok"]) {
      _0x2ba6ea116 = _0x2ba6ea115["error"] || "HTTP " + _0x2ba6ea114["status"] + ": " + _0x2ba6ea114["statusText"];
      throw new Error(_0x2ba6ea116);
    }
  }.call(this), _0x2ba6ea115;
}
async function apiSubmitAnswer(_0x2ba6ea121, _0x2ba6ea125 = _0x2ba6ea58, _0x2ba6ea122, _0x2ba6ea123, _0x2ba6ea124) {
  return _0x2ba6ea122 = await fetch("/sec1/api/challenge/submit/", {
    ["method"]: "POST",
    ["headers"]: {
      "Content-Type": "application/json"
    },
    ["body"]: JSON["stringify"]({
      ["challenge_type"]: _0x2ba6ea125,
      ["answer"]: _0x2ba6ea121
    })
  }), _0x2ba6ea123 = await _0x2ba6ea122["json"](), await async function () {
    if (!_0x2ba6ea122["ok"]) {
      _0x2ba6ea124 = _0x2ba6ea123["error"] || "HTTP " + _0x2ba6ea122["status"] + ": " + _0x2ba6ea122["statusText"];
      throw new Error(_0x2ba6ea124);
    }
  }.call(this), _0x2ba6ea123;
}
async function generateNumbers(_0x2ba6ea126) {
  try {
    if (_0x2ba6ea126 === 1 && _0x2ba6ea57["size"] === 0) {
      function _wrapper5(_0x2ba6ea127, _0x2ba6ea128) {
        return _0x2ba6ea127(_0x2ba6ea128);
      }
      const initData = await _wrapper5(apiInitChallenge, _0x2ba6ea58);
      if (!isNaN("52") && initData["success"]) {
        console["log"]("挑战初始化成功:", _0x2ba6ea58);
        console["log"]("初始化信息:", initData["message"]);
        if (initData["has_passed_before"]) {
          _0x2ba6ea50 = ["提示: " + initData["message"], "info"], _0x2ba6ea52("_0x2ba6ea18", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"];
        }
        return initData["page_data"];
      } else {
        throw new Error(initData["error"] || "初始化失败");
      }
    } else {
      const pageData = await apiGetPageData(_0x2ba6ea126, _0x2ba6ea58);
      if ("true" && pageData["success"]) {
        return pageData["page_data"];
      } else {
        throw new Error(pageData["error"] || "获取数据失败");
      }
    }
  } catch (error) {
    console["error"]("获取数据失败:", error);
    if (error["message"]["includes"]("请先登录")) {
      showLoginAlert();
    } else if (error["message"]["includes"]("need_init")) {
      _0x2ba6ea50 = ["挑战未初始化，正在重新初始化...", "info"], _0x2ba6ea52("_0x2ba6ea18", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"];
      _0x2ba6ea57["clear"]();
      return await generateNumbers(1);
    } else {
      _0x2ba6ea50 = ["获取数据失败: " + error["message"], "error"], _0x2ba6ea52("_0x2ba6ea18");
    }
    return [];
  }
}
async function loadPageData(_0x2ba6ea129, _0x2ba6ea130) {
  _0x2ba6ea52("_0x2ba6ea20", "_0x2ba6ea5"), await async function () {
    try {
      function _wrapper6(_0x2ba6ea131, _0x2ba6ea132) {
        return _0x2ba6ea131(_0x2ba6ea132);
      }
      _0x2ba6ea130 = await _wrapper6(generateNumbers, _0x2ba6ea129);
      if ("WZd".length === "3" && _0x2ba6ea130["length"] > 0) {
        function _wrapper7(_0x2ba6ea133, _0x2ba6ea134) {
          return _0x2ba6ea133(_0x2ba6ea134);
        }
        _0x2ba6ea56[_0x2ba6ea129] = _0x2ba6ea130;
        _0x2ba6ea57["add"](_0x2ba6ea129);
        _wrapper7(_0x2ba6ea52("_0x2ba6ea15", "_0x2ba6ea6"), _0x2ba6ea130);
        new _0x2ba6ea52("_0x2ba6ea16", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"];
        _0x2ba6ea52("_0x2ba6ea17", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"];
        _0x2ba6ea50 = ["page_view", {
          ["page"]: _0x2ba6ea129,
          ["numbers"]: _0x2ba6ea130["length"],
          ["challengeType"]: _0x2ba6ea58
        }], _0x2ba6ea52("_0x2ba6ea19", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"];
      }
    } catch (error) {
      console["error"]("加载页面数据失败:", error);
      _0x2ba6ea50 = ["加载页面数据失败", "error"], _0x2ba6ea52("_0x2ba6ea18");
    }
  }.call(this), new _0x2ba6ea52("_0x2ba6ea21", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"];
}
function changePage(_0x2ba6ea135) {
  (function () {
    if ("gTt".length === "3" && _0x2ba6ea135 === "prev") {
      _0x2ba6ea135 = window["[object Math]"]["max"](1, _0x2ba6ea53 - 1);
    } else if ("true" && _0x2ba6ea135 === "next") {
      _0x2ba6ea135 = window["[object Math]"]["min"](_0x2ba6ea54, _0x2ba6ea53 + 1);
    }
  }).call(this);
  if (!isNaN("6") && _0x2ba6ea135 !== _0x2ba6ea53 && _0x2ba6ea135 >= 1 && _0x2ba6ea135 <= _0x2ba6ea54) {
    function _wrapper8(_0x2ba6ea136, _0x2ba6ea137) {
      return _0x2ba6ea136(_0x2ba6ea137);
    }
    if ("true" && !(_0x2ba6ea50 = [_0x2ba6ea58, _0x2ba6ea135], _0x2ba6ea52("_0x2ba6ea11"))) {
      return;
    }
    _0x2ba6ea53 = _0x2ba6ea135;
    _wrapper8(loadPageData, _0x2ba6ea135);
  }
}
async function submitAnswer(_0x2ba6ea138, _0x2ba6ea139, _0x2ba6ea140, _0x2ba6ea141, _0x2ba6ea142) {
  _0x2ba6ea138 = document["getElementById"]("answerInput")["value"]["trim"](), await async function () {
    try {
      _0x2ba6ea139 = await apiSubmitAnswer(window["function parseInt() { [native code] }"](_0x2ba6ea138), _0x2ba6ea58);
      if (isNaN(NaN) && _0x2ba6ea139["success"]) {
        _0x2ba6ea140 = _0x2ba6ea139["is_correct"] ? "ﾎﾎ" : "❌";
        _0x2ba6ea141 = new Date().getTime() > 0 && _0x2ba6ea139["is_correct"] ? "正确" : "错误";
        _0x2ba6ea142 = "\n                <strong>" + _0x2ba6ea140 + " 答案" + _0x2ba6ea141 + "！</strong><br/>\\n                提交答案: " + _0x2ba6ea139["submitted_answer"] + "<br/>\\n                已访问页面: " + _0x2ba6ea57["size"] + "/" + _0x2ba6ea54 + "<br/>\\n                挑战类型: " + (_0x2ba6ea50 = [_0x2ba6ea139["challenge_type"]], _0x2ba6ea52("_0x2ba6ea13", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"]) + "<br/>\\n                提交时间: " + new window["function Date() { [native code] }"](_0x2ba6ea139["submitted_at"])["function toLocaleString() { [native code] }"]() + "<br/>\n            ";
        if (_0x2ba6ea139["is_repeat_success"]) {
          _0x2ba6ea142 += "<br/>ﾍﾎ " + _0x2ba6ea139["message"];
        } else if (_0x2ba6ea139["is_correct"]) {
          _0x2ba6ea142 += "<br/>🎊 " + _0x2ba6ea139["message"];
        } else {
          _0x2ba6ea142 += "<br/>📝 建议: 仔细检查计算过程，可以重新提交答案！";
        }
        _0x2ba6ea50 = [_0x2ba6ea142, _0x2ba6ea139["is_correct"] ? "success" : "error"], _0x2ba6ea52("_0x2ba6ea18");
        document["getElementById"]("answerInput")["value"] = (_0x2ba6ea50 = ["", "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10"));
        document["getElementById"]("answerInput")["focus"]();
        _0x2ba6ea50 = ["submit_answer", {
          ["challengeType"]: _0x2ba6ea58,
          ["answer"]: _0x2ba6ea139["submitted_answer"],
          ["visitedPages"]: window["function Array() { [native code] }"]["from"](_0x2ba6ea57),
          ["isCorrect"]: _0x2ba6ea139["is_correct"],
          ["isRepeatSuccess"]: _0x2ba6ea139["is_repeat_success"]
        }], _0x2ba6ea52("_0x2ba6ea19");
      } else {
        _0x2ba6ea50 = [_0x2ba6ea139["message"] || _0x2ba6ea139["error"], "error"], _0x2ba6ea52("_0x2ba6ea18", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"];
      }
    } catch (error) {
      console["error"]("提交答案失败:", error);
      if ("true" && error["message"]["in" + (_0x2ba6ea50 = [_0x2ba6ea51["16813"], "spiderdemo"], new _0x2ba6ea52("_0x2ba6ea10", "_0x2ba6ea4", "_0x2ba6ea7")["_0x2ba6ea8"]) + "udes"]("请先登录")) {
        showLoginAlert();
      } else {
        _0x2ba6ea50 = ["提交答案失败: " + error["message"], "error"], _0x2ba6ea52("_0x2ba6ea18");
      }
    }
  }.call(this);
  if (!_0x2ba6ea138) {
    _0x2ba6ea50 = ["请输入答案！", "error"], _0x2ba6ea52("_0x2ba6ea18");
    return;
  }
  if (Math.random() < 1.0825646331664105 && !new window["function RegExp() { [native code] }"]("^\\d+$", (_0x2ba6ea50 = ["", "spiderdemo"], _0x2ba6ea52("_0x2ba6ea10")))["test"](_0x2ba6ea138)) {
    _0x2ba6ea50 = ["答案格式错误，请输入纯数字！", "error"], _0x2ba6ea52("_0x2ba6ea18");
    return;
  }
}
_0x2ba6ea52("_0x2ba6ea24", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"];
debuggerCheckInterval = setInterval(_0x2ba6ea52("_0x2ba6ea25", "_0x2ba6ea6", "_0x2ba6ea7")["_0x2ba6ea8"], "1000");
document["addEventListener"]("DOMContentLoaded", function () {
  _0x2ba6ea52("_0x2ba6ea23", "_0x2ba6ea5", "_0x2ba6ea7")["_0x2ba6ea8"];
});