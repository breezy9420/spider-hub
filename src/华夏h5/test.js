import FixEnv from "./fixEnv.js";
import axios from "axios";
import dayjs from "dayjs";
import path from "path";
import fs from "fs";
import readline from "readline";

const rootPath = "D:\\source\\验证码\\华夏";

function base64ToJpg(base64String, fileName) {
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const outputPath = path.join(rootPath, `${fileName}.jpg`);
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, buffer);

  console.log(`图片已保存到: ${outputPath}`);
}

function getRequestTime() {
  return dayjs(Date.now()).format("YYYYMMDDHHmmss").toString();
}

async function fetchUserverify() {
  const url = "https://mcm.hxb.com.cn/market-gateway-api/market-api/app/userverify100104.json";
  let reqData = {
    head_osnumber: "123",
    head_iv: "0000000000000000",
    head_trans_code: "100104",
    head_jsessionid: "",
    h5_channel_id: "003",
    publish_channel_id: "003",
    head_area_code: "110000",
    system_id: "hxmark",
    request_time: getRequestTime(),
  };
  console.log(reqData);
  reqData.head_mac = FixEnv.signHmacMd5(reqData.request_time);
  reqData = FixEnv.aesEncrypt(reqData);
  const { data } = await axios({
    url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  });
  //   base64ToJpg(data.bgImage, data.codeId);
  return data;
}

async function addOrder(left, codeId) {
  const url = "https://mcm.hxb.com.cn/market-gateway-api/market-api/app/actcoin111002.json";
  let reqData = {
    head_osnumber: "123",
    head_iv: "0000000000000000",
    head_trans_code: "111002",
    head_jsessionid: "",
    h5_channel_id: "003",
    publish_channel_id: "003",
    head_area_code: "110000",
    system_id: "hxmark",
    request_time: getRequestTime(),
    user_name: "王翠萍",
    id_type: "51",
    id_code: "110101193902124549",
    org_code: "2350",
    order_num: "20",
    phone: "19292583249",
    draw_date: "20260120",
    draw_time: "0",
    batch_no: "公告[2025]32号",
    coin_type: "1",
    coin_id: 2026010701,
    coin_no: "201944",
    // codeId: "8c886479-2510-4a4f-bbe1-84d626323c0d",
    codeId,
    startTime: (Date.now() - 2).toString(),
    endTime: (Date.now() + 2).toString(),
    // left: "141",
    left,
    trail: [0, 0, 0, 0, 0, -2, -4, -8, -11, -14, -16, -18, -20, -21, -22, -22, -24, -25, -26, -27, -28, -30, -31, -31, -31, -31, -31, -31, -31, -31, -31, -32, -32, -32, -32, -32, -32, -32, -32, -32, -32, -32, -33, -33, -34, -34, -34, -34, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35, -35],
    unit_type: "1",
  };
  reqData.head_mac = FixEnv.signHmacMd5(reqData.request_time);
  reqData = FixEnv.aesEncrypt(reqData);
  //   console.log(reqData);
  const { data } = await axios({
    url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  });
  console.log(data);
}

async function main() {
  //   for (let i = 0; i < 1000; i++) {
  //     setTimeout(() => {
  //       fetchUserverify();
  //     }, i * 100);
  //   }
  const verifyRspData = await fetchUserverify();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log(verifyRspData.bgImage);

  // 获取单行输入
  rl.question("请输入内容：", async (answer) => {
    console.log(`您输入的是：${answer}`);
    await addOrder(answer, verifyRspData.codeId);
    rl.close();
  });
}

main();
