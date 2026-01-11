import CryptoJS from "crypto-js";

const publicIv = CryptoJS.enc.Utf8.parse("0000000000000000");
const workKey = {
  hmd5Key: "057E68C3E69B30668D851FFC1AEA1975B7DA3C4E648472C7D1BB35E77A44C959",
  aesKey: "5D249023747AD177D6C5D2FB5E9A98745D771ED4906A292FDCEE6E57F1EC9D5A",
};
const cipherWorkKey = {
  hmd5Key: "",
  aesKey: "",
};
const mainKey = "47CB94B87D984551";
const signWords = ["head_jsessionid", "act_id", "is_prize", "request_time"];
const encodeWords = ["head_jsessionid", "act_id", "user_mobile", "phone", "is_prize", "login_name", "id_code", "card_no", "request_time", "user_name"];

function _aesDecrypt(e, t) {
  const n = CryptoJS.enc.Utf8.parse(t);
  const s = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(e));
  const u = CryptoJS.AES.decrypt(s, n, {
    iv: publicIv,
  });
  return CryptoJS.enc.Utf8.stringify(u);
}

function _aesEncrypt(e, t) {
  const n = CryptoJS.enc.Utf8.parse(t);
  const s = CryptoJS.enc.Utf8.parse(e);
  const u = CryptoJS.AES.encrypt(s, n, {
    iv: publicIv,
  });
  return u.ciphertext.toString().toUpperCase();
}

function aesDecrypt(e, t, n) {
  return "string" == typeof e
    ? _aesDecrypt(e, t)
    : (n.forEach(function (n) {
        e[n] && (e[n] = _aesDecrypt(e[n], t));
      }),
      e);
}

function aesEncrypt(e, t = cipherWorkKey.aesKey, n = encodeWords) {
  return "string" == typeof e
    ? _aesEncrypt(e, t)
    : (n.forEach(function (n) {
        e[n] && (e[n] = _aesEncrypt(e[n], t));
      }),
      e);
}

function signHmacMd5(e, t = cipherWorkKey.hmd5Key) {
  let r = "",
    o = [];
  signWords.forEach(function (t) {
    e[t] && o.push(e[t]);
  });
  r = o.join(" ");
  return CryptoJS.HmacMD5(r, t).toString().toUpperCase();
}

cipherWorkKey.hmd5Key = aesDecrypt(workKey.hmd5Key, mainKey);
cipherWorkKey.aesKey = aesDecrypt(workKey.aesKey, mainKey);
// console.log(`cipherWorkKey.hmd5Key: ${cipherWorkKey.hmd5Key}`);
// console.log(`cipherWorkKey.aesKey: ${cipherWorkKey.aesKey}`);

// let obj = {
//   head_osnumber: "123",
//   head_iv: "0000000000000000",
//   head_trans_code: "100104",
//   head_jsessionid: "",
//   h5_channel_id: "003",
//   publish_channel_id: "003",
//   head_area_code: "110000",
//   system_id: "hxmark",
//   request_time: "20260111203856",
// };
// obj.head_mac = signHmacMd5(obj, cipherWorkKey.hmd5Key);
// obj = aesEncrypt(obj, cipherWorkKey.aesKey);
// console.log(obj);

export default {
  signHmacMd5,
  aesEncrypt,
};
