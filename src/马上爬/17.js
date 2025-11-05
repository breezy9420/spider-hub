import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";

const COOKIE =
  "sessionid=4th2zknlbxxlr11az0vqmqvkraf75env; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1762266312,1762274666,1762352276; HMACCOUNT=EAC266F93ECB9023; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1762352280";

const FONT_DECRYPT_MAP = {
  ꙮ: "0",
  ઊ: "1",
  સ: "2",
  ત: "3",
  ধ: "4",
  ન: "5",
  પ: "6",
  ફ: "7",
  બ: "8",
  ભ: "9",
};

async function parseInfo(i) {
  const url = `https://www.mashangpa.com/api/problem-detail/17/data/`;
  const data = {
    page: i,
  };
  try {
    const res = await axios({
      url,
      method: "get",
      headers: {
        referer: "https://www.mashangpa.com/problem-detail/17/",
        cookie: COOKIE,
      },
      params: data,
    });
    return res.data.current_array.map(item=> {
      const arr =item.split("") 
      const ret = +arr.reduce((a, b) => a + FONT_DECRYPT_MAP[b], '')
      return ret
    });
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
