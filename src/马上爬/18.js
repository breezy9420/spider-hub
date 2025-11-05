import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";
import { getTs, getM, getCrawler } from "./fixEnvBy18.js";

const COOKIE =
  "sessionid=4th2zknlbxxlr11az0vqmqvkraf75env; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1762266312,1762274666,1762352276; HMACCOUNT=EAC266F93ECB9023;";

async function parseInfo(i) {
  const url = `https://www.mashangpa.com/api/problem-detail/18/data/`;
  const data = {
    page: i,
  };
  const params = {
    crawler: "",
    headers: {},
    ts: 0,
  };
  params.ts = getTs(params);
  params.crawler = getCrawler(params);
  const m = getM(params.crawler, params.ts);
  try {
    const res = await axios({
      url,
      method: "get",
      headers: {
        referer: "https://www.mashangpa.com/problem-detail/18/",
        cookie: COOKIE,
        M: m,
      },
      params: data,
    });
    return res.data.current_array
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
