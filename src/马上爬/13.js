import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";
import { mmm, _0x1e5c29 } from "./jqueryxhrBy13.js";

const COOKIE =
  "v=QTktR1JqMnp4QlZhaU05dlJfd0x0N2l5Ympoc1JEUG1UWmczMm5Fc2V3N1ZBUEVtZVJURE5sMW94eWlDMTc1OTg0ODA5NjMzNw==; sessionid=toaa8tva750jj2py4113b7o7b0a9ruck; Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1761468070,1761480324,1761498303,1761583217; HMACCOUNT=63A4B7F5B61E4A19; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1761666291";

/**
 *  2-3-1-7-4-6-0-5-8
 *  2: var _0x2059bf = Date.now() => 1761583593000
 *  3: var _0x350b3a = _0x1e5c29() => 29f188affd13ff406af9c7bf29333897
 *  1：page=1 => json字符串 => // '{"page":"1"}' _0x3f9dab
 *  7: var _0x3104de = mmm(_0x3f9dab + _0x350b3a + _0x2059bf) => b0e19b7f52785621aeedcde2b0fd2fd5
 *  4: _0x3565b7.data = '{"page":"1"}'
 *  6: _0x3565b7['setRequestHeader']('t', _0x2059bf)
 *  0: _0x3565b7['setRequestHeader']('r', _0x350b3a)
 *  5: _0x3565b7['setRequestHeader']('s', _0x3104de)
 *  核心方法：_0x1e5c29、mmm
 */
async function parseInfo(i) {
  const url = `https://www.mashangpa.com/api/problem-detail/13/data/`;
  const data = {
    page: i,
  };
  const T = Date.now();
  const R = _0x1e5c29();
  const S = mmm(`${JSON.stringify(data)}${R}${T}`);
  const headers = {
    T,
    R,
    S
  };
  try {
    const res = await axios({
      url,
      method: "post",
      headers: {
        referer: "https://www.mashangpa.com/problem-detail/13/",
        cookie: COOKIE,
        ...headers,
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
    await sleep(2000);
  }
  console.log(arr.reduce((a, b) => a + b, 0));
}

main();
