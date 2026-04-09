/**
 * https://www.spiderdemo.cn/sec1/wasm_challenge/?challenge_type=wasm_challenge
 */

import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { getRandomUA } from "../../util/index.js";
import { COOKIE } from "./config.js";
import { encrypt_simple, get_timestamp, __wbg_init } from "./4help.js";

async function parseInfo(i) {
  const url = `https://www.spiderdemo.cn/sec1/api/wasm_challenge/page/${i}/`;
  const timestamp = Math.floor(get_timestamp() / 1000).toString();
  //   const timestamp = "1775747066";
  const verifyString = `wasm_challenge_page_${i}`;
  const wasmAuth = encrypt_simple(verifyString, timestamp);
  try {
    const res = await axios({
      url,
      method: "get",
      headers: {
        cookie: COOKIE,
        "User-Agent": getRandomUA(),
        "X-WASM-Timestamp": timestamp,
        "X-WASM-Page": i.toString(),
      },
      params: {
        wasm_auth: wasmAuth,
        challenge_type: "wasm_challenge",
      },
    });
    return res.data.page_data.map((item) => item);
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  global.console = logger;
  await __wbg_init();
  const max = 100;
  const arr = [];
  for (let i = 1; i <= max; i++) {
    arr.push(...(await parseInfo(i)));
    console.log(`已爬取第 ${i} 页`);
  }
  console.log(arr.reduce((a, b) => a + b, 0));
}

main();
