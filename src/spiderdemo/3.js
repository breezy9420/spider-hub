import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { getRandomUA } from "../../util/index.js";
import { COOKIE } from "./config.js";
import { getMd5, decodeResponse, encodeRequest } from "./3help.js";

async function parseInfo(i) {
  const url = `https://www.spiderdemo.cn/authentication/api/protobuf_challenge/page/${i}/`;
  const ts = Date.now();
  const params = {
    page: i,
    challengetype: "surwrexibfkdoohqjh",
    timestamp: ts.toString(),
    signature: getMd5(ts.toString()),
  };
  const encodeBuffer = encodeRequest(params);
  try {
    const res = await axios({
      url,
      method: "post",
      headers: {
        cookie: COOKIE,
        "User-Agent": getRandomUA(),
        "Content-Type": "application/x-protobuf",
      },
      data: encodeBuffer,
      responseType: "arraybuffer",
    });
    const obj = decodeResponse(res.data);
    return obj.numbers.map((item) => item.value);
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
