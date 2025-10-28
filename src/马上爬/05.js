import axios from "axios";
import {logger} from "../../util/logUtil.js";
import {sleep} from "../../util/index.js";
import CryptoJs from "crypto-js";

function getSignAndTs(plainText) {
    const key = CryptoJs.enc.Utf8.parse("jo8j9wGw%6HbxfFn");
    const iv = CryptoJs.enc.Utf8.parse("0123456789ABCDEF");
    const ts = Date.now();
    const cfg = {
        iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
    };

    const cipher = CryptoJs.AES.encrypt(plainText, key, cfg);
    return cipher.ciphertext.toString();

}

async function parseInfo(i) {
    const url = `https://www.mashangpa.com/api/problem-detail/5/data/`;
    const params = {
        page: i,
        _ts: Date.now()
    };
    const encryptText = getSignAndTs(JSON.stringify(params));
    const res = await axios({
        url,
        method: "POST",
        data: {
            xl: encryptText
        },
        headers: {
            referer: "https://www.mashangpa.com/problem-detail/5/",
            cookie:
                "Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1748525410; HMACCOUNT=E89D26E56A5B5708; sessionid=au4wtawlqdov9imyo6xf1fpql1pi2x5g; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1748527564",
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
