import CryptoJs from "crypto-js";

const getMd5 = (plainText) => {
    return CryptoJs.MD5(CryptoJs.enc.Latin1.parse(plainText)).toString()
};

console.log(getMd5("17624462795591£¬¡£fdjf,jkgfkl"));
// console.log(getMd5("a"));
