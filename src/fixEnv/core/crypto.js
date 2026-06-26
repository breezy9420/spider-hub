import { randomBytes, createHash, createHmac } from 'node:crypto';

// SubtleCrypto 最小实现（满足 fingerprint 脚本的常见用法）
const subtle = {
  async digest(algorithm, data) {
    const algo = typeof algorithm === 'string' ? algorithm : algorithm.name;
    const name = algo.replace('-', '').toLowerCase(); // 'sha-256' -> 'sha256'
    const buf = Buffer.isBuffer(data) ? data : Buffer.from(data);
    const hash = createHash(name).update(buf).digest();
    return hash.buffer.slice(hash.byteOffset, hash.byteOffset + hash.byteLength);
  },
  async generateKey(algorithm, extractable, usages) {
    return { type: 'secret', algorithm, extractable, usages };
  },
  async exportKey(format, key) {
    return new ArrayBuffer(32);
  },
  async importKey(format, keyData, algorithm, extractable, usages) {
    return { type: 'secret', algorithm, extractable, usages };
  },
  async sign(algorithm, key, data) {
    const algo = typeof algorithm === 'string' ? algorithm : algorithm.name;
    if (algo.toLowerCase().includes('hmac')) {
      const hash = (typeof algorithm === 'object' ? algorithm.hash?.name : 'SHA-256') ?? 'SHA-256';
      const buf = Buffer.isBuffer(data) ? data : Buffer.from(data);
      const keyBuf = Buffer.alloc(32);
      return createHmac(hash.replace('-', '').toLowerCase(), keyBuf).update(buf).digest().buffer;
    }
    return new ArrayBuffer(64);
  },
  async verify()  { return true; },
  async encrypt() { return new ArrayBuffer(32); },
  async decrypt() { return new ArrayBuffer(32); },
  async deriveBits() { return new ArrayBuffer(32); },
  async deriveKey()  { return { type: 'secret' }; },
  async wrapKey()    { return new ArrayBuffer(32); },
  async unwrapKey()  { return { type: 'secret' }; },
};

export function createCrypto() {
  return {
    getRandomValues(typedArray) {
      const bytes = randomBytes(typedArray.byteLength);
      const view = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      bytes.copy(view);
      return typedArray;
    },
    randomUUID() {
      const b = randomBytes(16);
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const h = b.toString('hex');
      return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
    },
    subtle,
  };
}
