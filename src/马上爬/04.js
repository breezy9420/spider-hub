import axios from "axios";
import {logger} from "../../util/logUtil.js";
import {sleep} from "../../util/index.js";
import CryptoJs from "crypto-js";

function getSignAndTs(i) {
    const ts = Date.now();
    const plainText = `tuling${ts}${i}`;
    return {
        sign: CryptoJs.MD5(plainText).toString(),
        ts
    };
}

async function parseInfo(i) {
    const url = `https://www.mashangpa.com/api/problem-detail/4/data/`;
    const {sign, ts} = getSignAndTs(i);
    const res = await axios.get(url, {
        params: {
            page: i,
            sign,
            _ts: ts
        },
        headers: {
            referer: "https://www.mashangpa.com/problem-detail/4/",
            cookie:
                "_nano_fp=XpmjX5XyXq9qlpEYXT_fwJwscA~y9eEZGaNicsdi; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1775563086; HMACCOUNT=EAC266F93ECB9023; sessionid=yvopxawudzg0s0ee2fjrnwol8ymb7bem; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1775563302",
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        },
    });
    return res.data.current_array;
}

async function main() {
    global.console = logger;
    const max = 20;
    const arr = [];
    for (let i = 1; i <= max; i++) {
        arr.push(...await parseInfo(i));
        await sleep(100);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

main();
