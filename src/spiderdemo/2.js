import axios from "axios";
import {logger} from "../../util/logUtil.js";
import {getRandomUA} from "../../util/index.js";
import CryptoJs from "crypto-js";

const COOKIE = "sessionid=rneo4mdcwheellramf2151xr3l34p0n6";

const getMd5 = (plainText) => {
    return CryptoJs.MD5(CryptoJs.enc.Latin1.parse(plainText)).toString();
};

async function parseInfo(i) {
    const url = `https://www.spiderdemo.cn/ob/api/ob_challenge1/page/${i}/`;
    const ts = Date.now();
    const params = {
        challenge_type: "ob_challenge1",
        sign: getMd5(`${ts}${i}£¬¡£fdjf,jkgfkl`),
        timestamp: ts
    };
    try {
        const res = await axios({
            url,
            method: "get",
            headers: {
                cookie: COOKIE,
                "User-Agent": getRandomUA(),
            },
            params
        });
        return res.data.page_data;
    } catch (e) {
        console.log(e);
    }
}

async function main() {
    global.console = logger;
    const max = 100;
    const arr = [];
    for (let i = 1; i <= max; i++) {
        arr.push(...(await parseInfo(i)));
        console.log(`已爬取第 ${i} 页`);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

main();
