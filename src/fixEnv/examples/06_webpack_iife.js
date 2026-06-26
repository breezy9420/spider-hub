/**
 * 示例 06：Webpack IIFE 格式逆向
 *
 * IIFE 格式是最常见的 webpack 输出，整个 bundle 是一个自执行函数：
 *
 *   (function(modules) {
 *     var installedModules = {};
 *     function __webpack_require__(moduleId) { ... }
 *     __webpack_require__.m = modules;
 *     return __webpack_require__(__webpack_require__.s = 0); // 入口
 *   })([
 *     function(module, exports, __webpack_require__) { ... }, // 模块 0
 *     function(module, exports, __webpack_require__) { ... }, // 模块 1
 *     ...
 *   ]);
 *
 * 策略：bundle 执行后，__webpack_require__ 会暴露在 ctx 上
 *       直接调用它就能取出任意模块
 */

import vm from 'node:vm';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createContext } from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const bundleCode = fs.readFileSync(path.join(__dirname, '../../your_bundle.js'), 'utf-8');

// ── 基础：执行后直接取模块 ────────────────────────────────────────────────────
const ctx = createContext();
vm.runInContext(bundleCode, ctx);

// bundle 执行完毕后，__webpack_require__ 挂在 ctx 上
const req = ctx.__webpack_require__;

// 遍历所有模块，打印每个模块导出的 key，找目标加密模块
for (let i = 0; i < 300; i++) {
  try {
    const mod = req(i);
    if (mod && typeof mod === 'object' && Object.keys(mod).length > 0) {
      console.log(`模块 ${i}:`, Object.keys(mod));
    }
  } catch (e) {
    // 模块 ID 不存在，跳过
  }
}

// 确定 ID 后直接取目标模块
// const cryptoMod = req(5);
// console.log(cryptoMod.encrypt('hello'));

// ── 进阶：执行前 hook __webpack_require__，监控模块加载顺序 ─────────────────
{
  const ctx2 = createContext();
  vm.runInContext(bundleCode, ctx2);

  // 在 bundle 执行完后注入补丁，再重新触发入口
  vm.runInContext(`
    var _origReq = __webpack_require__;
    __webpack_require__ = function(id) {
      var result = _origReq(id);
      console.log('[LOAD] 模块', id, '->', typeof result === 'object' ? Object.keys(result) : typeof result);
      return result;
    };
    // 清空缓存，重新加载入口模块（模块 ID 通常是 0 或 1）
    // __webpack_require__.c = {};
    // __webpack_require__(0);
  `, ctx2);
}

// ── Webpack 5（模块 ID 是路径字符串而非数字）────────────────────────────────
// Webpack 5 的 __webpack_require__ 对象上有 __webpack_modules__ 存放所有模块
// const allModules = ctx.__webpack_modules__;
// if (allModules) {
//   for (const [id, fn] of Object.entries(allModules)) {
//     console.log('模块路径:', id);
//   }
// }

// ── JSONP 分包（chunk）格式 ──────────────────────────────────────────────────
// 主 bundle 会暴露 webpackJsonp，子包通过 push 注册模块
//
// const chunks = [];
// const ctx3 = createContext({
//   extra: {
//     webpackJsonp: {
//       push([chunkIds, modules, entries]) {
//         // 将子包的模块合并进主 bundle 的 modules 对象
//         Object.assign(ctx3.__webpack_require__.m, modules);
//         chunks.push(chunkIds);
//       }
//     }
//   }
// });
// vm.runInContext(mainBundleCode, ctx3);
// vm.runInContext(chunkCode, ctx3);   // 加载子包
// const mod = ctx3.__webpack_require__(targetId);
