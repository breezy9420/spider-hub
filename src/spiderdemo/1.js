import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep, getRandomUA } from "../../util/index.js";
import { COOKIE } from "./config.js"

async function parseInfo(i) {
    const url = `https://www.spiderdemo.cn/sec1/api/challenge/page/${i}/?challenge_type=header_check`;
    try {
        const res = await axios({
            url,
            method: "get",
            headers: {
                // referer: "https://www.mashangpa.com/problem-detail/19/",
                cookie: COOKIE,
                'User-Agent': getRandomUA(),
            },
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
