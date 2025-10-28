import axios from "axios";
import {logger} from "../../util/logUtil.js";
import {sleep} from "../../util/index.js";
import CryptoJs from "crypto-js";

var window = global;

function OOOoOo(_0x240504, _0x8eefdc) {
    var _0x619515 = {
        "paEId": function (_0x37545a, _0x25869b) {
            return _0x37545a > _0x25869b;
        },
        "lkAPA": function (_0x25ec81, _0x5702be) {
            return _0x25ec81 === _0x5702be;
        },
        "FvpyY": function (_0x179537, _0x179f84) {
            return _0x179537 < _0x179f84;
        },
        "BWspp": "QAuZb",
        "dmoss": "DQfMj",
        "nfVoe": function (_0xc53cb4, _0x21ea66) {
            return _0xc53cb4 + _0x21ea66;
        },
        "SwKNS": function (_0x549ae8, _0xbd73e1) {
            return _0x549ae8 !== _0xbd73e1;
        },
        "DZPBw": "TLzPb",
        "WHIyT": function (_0x59706e, _0x2e4ac6) {
            return _0x59706e % _0x2e4ac6;
        },
        "qIWdR": function (_0x289d4b, _0x4ba67a) {
            return _0x289d4b + _0x4ba67a;
        }
    };
    const _0x3a3671 = _0x240504["split"](""),
        _0x1959d4 = _0x8eefdc["split"](""),
        _0x582226 = 0x4;
    let _0x5ad857 = [];
    for (let _0x2d33d3 = 0x0; _0x619515["FvpyY"](_0x2d33d3, _0x3a3671["length"]); _0x2d33d3 += _0x582226) {
        if (_0x619515["BWspp"] !== _0x619515["dmoss"]) {
            let _0x38ae5f = _0x3a3671["slice"](_0x2d33d3, _0x619515["nfVoe"](_0x2d33d3, _0x582226));
            for (let _0x31873b = 0x0; _0x619515["FvpyY"](_0x31873b, _0x38ae5f["length"]); _0x31873b++) {
                if (_0x619515["SwKNS"]("TLzPb", _0x619515["DZPBw"])) {
                    var _0x4cd646, _0x395909;
                    return _0x4cd646 = this["b"], _0x5d7fe6 ? this["C"] ? (_0x395909 = new _0x4fb763(_0x4cd646), _0x395909["set"](this["a"]["subarray"](0x0, _0x4cd646))) : _0x395909 = this["a"]["subarray"](0x0, _0x4cd646) : (_0x619515["paEId"](this["a"]["length"], _0x4cd646) && (this["a"]["length"] = _0x4cd646), _0x395909 = this["a"]), this["buffer"] = _0x395909;
                } else {
                    const _0x11057a = _0x38ae5f[_0x31873b]["charCodeAt"](0x0),
                        _0x1a6269 = _0x1959d4[_0x619515["WHIyT"](_0x31873b, _0x1959d4["length"])]["charCodeAt"](0x0),
                        _0x25c979 = _0x619515["WHIyT"](_0x619515["qIWdR"](_0x11057a, _0x1a6269), 0x100);
                    _0x38ae5f[_0x31873b] = String["fromCharCode"](_0x25c979);
                }
            }
            _0x5ad857 = _0x5ad857["concat"](_0x38ae5f);
        } else {
            if (_0x619515["lkAPA"](_0x42ea3d, _0x582a9b)) return function (..._0x2e6eb7) {
                return _0x575f19[_0x3ed141](..._0x2e6eb7);
            };
        }
    }
    const _0x28d8b9 = _0x5ad857["join"](""),
        _0x36bdd2 = Array["from"](_0x28d8b9)["map"](_0x3c7e7a => _0x3c7e7a["charCodeAt"](0x0)["toString"](0x10)["padStart"](0x2, "0"))["join"]("");
    return _0x36bdd2;
}

function btoa(str) {
    return CryptoJs.enc.Base64.stringify(CryptoJs.enc.Utf8.parse(str));
}

async function parseInfo(i) {
    const url = `https://www.mashangpa.com/api/problem-detail/8/data/`;
    const _0x56df28 = {
        "GQZeD": function (_0x53e7cf, _0x45bf9d) {
            return _0x53e7cf + _0x45bf9d;
        },
        "IlCGy": function (_0x4510fa, _0x3d3320) {
            return _0x4510fa + _0x3d3320;
        },
        "VQUpZ": function (_0xf217d6, _0xe4bde6) {
            return _0xf217d6(_0xe4bde6);
        },
        "KTRZl": function (_0x597690, _0x39367f, _0x332fa6) {
            return _0x597690(_0x39367f, _0x332fa6);
        },
        "hboZD": function (_0x12c1c6, _0x5c00a6) {
            return _0x12c1c6 + _0x5c00a6;
        },
        "GzfAX": function (_0x621f20, _0x30867e) {
            return _0x621f20 + _0x30867e;
        }
    };
    var _0x416a83 = {
        data: {
            page: i
        },
        headers: {}
    };
    const _0x1575b7 = "oooooo";
    var _0x1167c7 = new Date()["getTime"]();
    _0x416a83["headers"]["m"] = _0x56df28["KTRZl"](OOOoOo, _0x56df28["hboZD"](_0x56df28["GzfAX"](_0x1575b7, _0x1167c7), _0x416a83["data"]["page"]), _0x1575b7);
    _0x416a83["headers"]["t"] = _0x56df28["VQUpZ"](btoa, _0x1167c7);

    const res = await axios({
        url, method: "post", data: _0x416a83.data, headers: {
            ..._0x416a83.headers,
            referer: url,
            cookie: "sessionid=800maoqstt96gvfp25opcs7tnatftlqc; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1752402379,1752678309,1752923778,1753008131; HMACCOUNT=15A4D224E171B74F; s=51b351b351b351b370b0f0305010b010f0503071f0; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1753027268",
        },
    });
    return res.data.current_array
}

async function main() {
    global.console = logger;
    const max = 20;
    const arr = [];
    for (let i = 1; i <= max; i++) {
        arr.push(...await parseInfo(i));
        console.log(`已爬取第 ${i} 页`);
        await sleep(1000);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

main();
