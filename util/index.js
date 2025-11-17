import UserAgent from "user-agents";

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

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
