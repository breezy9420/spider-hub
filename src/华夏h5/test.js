import FixEnv from "./fixEnv.js";
import axios from "axios";
import dayjs from "dayjs";
import path from "path";
import fs from "fs";

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
    request_time: dayjs(Date.now()).format("YYYYMMDDHHmmss").toString(),
  };
  reqData.head_mac = FixEnv.signHmacMd5(reqData);
  reqData = FixEnv.aesEncrypt(reqData);
  const { data } = await axios({
    url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  });
  base64ToJpg(data.bgImage, data.codeId);
}

// fetchUserverify();

async function main() {
  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      fetchUserverify();
    }, i * 100);
  }
}

main();
