/**
 * 示例 05：Webpack UMD 格式逆向
 *
 * UMD 格式的 bundle 外壳：
 *
 *   (function(root, factory) {
 *     if (typeof exports !== 'undefined') {       // CommonJS
 *       module.exports = factory();
 *     } else if (typeof define !== 'undefined' && define.amd) {  // AMD
 *       define([], factory);
 *     } else {
 *       root.MyLib = factory();                   // 浏览器全局
 *     }
 *   })(window, function() {
 *     // webpack runtime + 所有模块
 *     return __webpack_require__(0);
 *   });
 *
 * 策略：注入 module/exports，让 UMD 走 CommonJS 分支，factory 被正常执行
 */

import vm from 'node:vm';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createContext } from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── 基础：执行 UMD bundle，拿到导出 ──────────────────────────────────────────
const _module = { exports: {} };
const ctx = createContext({
  extra: {
    module:  _module,
    exports: _module.exports,
  },
});

vm.runInContext(
  fs.readFileSync(path.join(__dirname, '../../your_bundle.js'), 'utf-8'),
  ctx
);

const lib = _module.exports;
console.log('导出的 key:', Object.keys(lib));

// ── 调用导出的加密函数 ────────────────────────────────────────────────────────
// console.log(lib.encrypt('hello'));
// console.log(lib.sign({ ts: Date.now() }));

// ── 同时开启 probe，观察模块内部访问了哪些浏览器 API ─────────────────────────
const _module2 = { exports: {} };
const ctx2 = createContext({
  probe: true,
  extra: {
    module:  _module2,
    exports: _module2.exports,
  },
});

// vm.runInContext(bundleCode, ctx2);
// 会打印出模块内部访问了哪些 document/navigator/localStorage 属性

// ── 伪造运行环境（让 bundle 认为跑在目标站点）────────────────────────────────
const _module3 = { exports: {} };
const ctx3 = createContext({
  window: {
    location: { href: 'https://target.com/', hostname: 'target.com' },
  },
  navigator: {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0 Safari/537.36',
  },
  document: {
    cookie: 'sessionid=abc123; csrftoken=xyz',
  },
  extra: {
    module:  _module3,
    exports: _module3.exports,
  },
});

// vm.runInContext(bundleCode, ctx3);
