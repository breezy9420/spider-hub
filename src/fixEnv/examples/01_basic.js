/**
 * 示例 01：基础用法
 *
 * createContext  → 创建沙箱上下文，再用 vm.runInContext 执行代码
 * runInSandbox   → 一步到位的快捷函数
 */

import vm from 'node:vm';
import { createContext, runInSandbox } from '../index.js';

// ── 方式 1：分步 ─────────────────────────────────────────────────────────────
const ctx = createContext();

vm.runInContext(`var x = Date.now(); var arr = [1,2,3].map(n => n * 2);`, ctx);

console.log(ctx.x);    // 时间戳
console.log(ctx.arr);  // [2, 4, 6]

// 多次 runInContext 共享同一个 ctx（变量跨调用保留）
vm.runInContext(`var y = arr.reduce((s, n) => s + n, 0);`, ctx);
console.log(ctx.y);    // 12

// ── 方式 2：runInSandbox 一步到位 ────────────────────────────────────────────
const result = runInSandbox(`
  btoa('hello world')
`);
console.log(result);  // aGVsbG8gd29ybGQ=

// 访问沙箱内置的浏览器全局变量
const ua = runInSandbox(`navigator.userAgent`);
console.log(ua);

const origin = runInSandbox(`location.origin`);
console.log(origin);  // https://example.com
