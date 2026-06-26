/**
 * 示例 04：trap 陷阱 —— 发现脚本依赖了哪些未定义的全局变量
 *
 * trap: true  把整个 ctx 包一层 Proxy
 * 访问任何不存在的属性都会打印 [TRAP] 日志，并返回可继续访问/调用的链式对象
 *
 * 典型工作流：
 *   1. 先用 trap 跑一遍，看 [TRAP] 日志缺少哪些全局变量
 *   2. 通过 extra 补上缺少的变量
 *   3. 去掉 trap，正式运行
 */

import vm from 'node:vm';
import { createContext } from '../index.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── 阶段 1：用 trap 探测缺少什么 ─────────────────────────────────────────────
{
  const ctx = createContext({ trap: true });

  // 脚本调用了 window.exports / window.define → 这是 UMD 检测
  // [TRAP] window.exports accessed (undefined)
  // [TRAP] window.define accessed (undefined)
  // → 需要注入 module / exports

  vm.runInContext(`
    if (typeof exports !== 'undefined') {
      // CommonJS 分支
    } else if (typeof MyLib !== 'undefined') {
      // 用到了自定义全局
    }
  `, ctx);
}

// ── 阶段 2：补全缺少的变量，正式运行 ─────────────────────────────────────────
{
  const _module = { exports: {} };
  const ctx = createContext({
    extra: {
      module:  _module,
      exports: _module.exports,
    },
  });

  vm.runInContext(`module.exports = { hello: () => 'world' };`, ctx);
  console.log(_module.exports.hello());  // world
}

// ── UMD 格式的完整流程 ────────────────────────────────────────────────────────
// 第一步：trap 探测
// const ctx1 = createContext({ trap: true });
// vm.runInContext(fs.readFileSync('./bundle.js', 'utf-8'), ctx1);
// 观察日志 → 发现需要 module/exports

// 第二步：正式运行
// const _module = { exports: {} };
// const ctx2 = createContext({ extra: { module: _module, exports: _module.exports } });
// vm.runInContext(fs.readFileSync('./bundle.js', 'utf-8'), ctx2);
// console.log(_module.exports);
