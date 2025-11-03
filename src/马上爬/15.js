import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";
import { getV } from "./fixEnvBy15.js";

const COOKIE =
  "Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1761939419,1762171093; sessionid=c0solywci1zhfln32w7gin9hvi1kowqk; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1762189216;";

async function parseInfo(i) {
  const url = `https://www.mashangpa.com/api/problem-detail/15/data/`;
  const ts = Date.now();
  const v = getV(ts);
  const data = {
    page: i,
  };
  try {
    const res = await axios({
      url,
      method: "post",
      headers: {
        referer: "https://www.mashangpa.com/problem-detail/15/",
        cookie: `${COOKIE}v=${v}`,
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
