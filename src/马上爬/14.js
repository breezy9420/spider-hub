import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";
import { x } from "./xhrBy14.js";

const COOKIE =
  "sessionid=o8smb92309swx48wuo7p15diaf8p21xm; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1761939419,1762171093; HMACCOUNT=15A4D224E171B74F; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1762173571";

async function parseInfo(i) {
  const ts = Date.now();
  const url = `https://www.mashangpa.com${x(`/api/problem-detail/14/data/`,ts)}`;
  const data = {
    page: i,
  };
  try {
    const res = await axios({
      url,
      method: "post",
      headers: {
        referer: "https://www.mashangpa.com/problem-detail/14/",
        cookie: COOKIE,
      },
      data,
    });
    return res.data.current_array;
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  global.console = logger;
  const max = 20;
  const arr = [];
  for (let i = 1; i <= max; i++) {
    arr.push(...(await parseInfo(i)));
    console.log(`已爬取第 ${i} 页`);
    await sleep(1000);
  }
  console.log(arr.reduce((a, b) => a + b, 0));
}

main();
