/**
 * https://www.spiderdemo.cn/sec1/wasm_challenge/?challenge_type=wasm_challenge
 */

import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { getRandomUA } from "../../util/index.js";
import { COOKIE } from "./config.js";
import { getSignature } from "./5help.js";

async function parseInfo(i) {
  const url = `https://www.spiderdemo.cn/authentication/api/ob1_challenge/page/${i}/`;
  try {
    const signature = getSignature();
    const res = await axios({
      url,
      method: "get",
      headers: {
        cookie: COOKIE,
        "User-Agent": getRandomUA(),
      },
      params: {
        signature,
        challenge_type: "ob1_challenge",
      },
    });
    return res.data.page_data.map((item) => item);
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
