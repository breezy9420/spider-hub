import UserAgent from "user-agents";
import path from "path";
import { fileURLToPath } from "url";

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.resolve(path.dirname(__filename), "../");

/*
 * @params type: "desktop" | "mobile" | "tablet"
 * */
export function getRandomUA(type = "desktop") {
  return new UserAgent({ deviceCategory: type }).toString();
}
export function stringToArrayBuffer(str) {
  const u8 = new TextEncoder().encode(str);
  return u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength);
}

export function arrayBufferToString(buffer) {
  const u8 = new Uint8Array(buffer); // 明确成视图，带上正确的 length
  return new TextDecoder("utf-8").decode(u8);
}

export function stringToUint8Array(str) {
  return new TextEncoder().encode(str); // Uint8Array
}

export function uint8ArrayToString(u8) {
  return new TextDecoder("utf-8").decode(u8);
}

export function hexStringToStr(hexString) {
  const reg = /\\(?:x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})|u\{([0-9a-fA-F]{1,6})\})/gi;

  return hexString.replaceAll(reg, (match, hex, unicode, unicodeBraced) => {
    const codePoint = parseInt(hex || unicode || unicodeBraced, 16);

    // 处理大于 0xFFFF 的字符
    if (codePoint > 0xffff) {
      return String.fromCodePoint(codePoint);
    }
    return String.fromCharCode(codePoint);
  });
}

export function decryptHexStr(originCode) {
  const reg = /(['"`])((?:(?!\1)[^\\]|\\.)*?)\1/g;

  return originCode.replaceAll(reg, (match, quote, content) => {
    if (!/\\x|\\u/i.test(content)) return match;

    const plainText = hexStringToStr(content);
    console.log(`${match} => ${plainText}`);

    // 关键：根据原始引号类型，转义相应的特殊字符
    let escaped = plainText
      .replace(/\\/g, "\\\\") // 先转义反斜杠
      .replace(/\n/g, "\\n") // 换行字符转义为 \\n
      .replace(/\r/g, "\\r") // 回车字符转义为 \\r
      .replace(/\t/g, "\\t"); // 制表符转义为 \\t

    // 然后转义引号
    if (quote === "'") {
      escaped = escaped.replace(/'/g, "\\'");
    } else if (quote === '"') {
      escaped = escaped.replace(/"/g, '\\"');
    } else {
      escaped = escaped.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
    }

    return quote + escaped + quote;
  });
}
