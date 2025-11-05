import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";
import CryptoJS from "crypto-js";
import dayjs from "dayjs";

const COOKIE =
  "sessionid=4th2zknlbxxlr11az0vqmqvkraf75env; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1762266312,1762274666,1762352276; HMACCOUNT=EAC266F93ECB9023;";

const getDate = () => {
  return dayjs().format("YYYYMMDD");
};
const decrypt = (k, r) => {
  return CryptoJS.enc.Utf8.stringify(
    CryptoJS.TripleDES.decrypt(r, CryptoJS.enc.Utf8.parse(k), {
      iv: CryptoJS.enc.Utf8.parse(getDate()),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
  ).toString();
};

async function parseInfo(i) {
  const url = `https://www.mashangpa.com/api/problem-detail/19/data/`;
  const data = {
    page: i,
  };
  try {
    const res = await axios({
      url,
      method: "get",
      headers: {
        referer: "https://www.mashangpa.com/problem-detail/19/",
        cookie: COOKIE,
      },
      params: data,
    });
    const plaintText = JSON.parse(decrypt(res.data.k, res.data.r));
    return plaintText.current_array;
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
