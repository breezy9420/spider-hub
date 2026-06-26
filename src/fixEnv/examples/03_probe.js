/**
 * 示例 03：probe 探针 —— 观察脚本访问了哪些属性
 *
 * probe: true  为 document / navigator / localStorage / sessionStorage 套 Proxy
 * 适合已知目标用这 4 个对象、想知道具体访问了哪些属性/方法的场景
 */

import vm from 'node:vm';
import { createContext, createProbe } from '../index.js';

// ── 基础用法：监听所有操作 ────────────────────────────────────────────────────
{
  const ctx = createContext({ probe: true });
  vm.runInContext(`
    navigator.userAgent;
    navigator.language;
    document.cookie;
    localStorage.setItem('k', 'v');
    localStorage.getItem('k');
  `, ctx);
}

// ── 只看 GET 操作，忽略 SET ──────────────────────────────────────────────────
{
  const ctx = createContext({
    probe:     true,
    probeOpts: { watch: 'get' },
  });
  vm.runInContext(`navigator.userAgent; navigator.plugins;`, ctx);
}

// ── 打印调用栈，定位是哪行代码触发的 ────────────────────────────────────────
{
  const ctx = createContext({
    probe:     true,
    probeOpts: { stackTrace: true },
  });
  vm.runInContext(`document.cookie;`, ctx);
}

// ── 对任意对象手动套探针（不通过 createContext）────────────────────────────
{
  const raw = {
    sign(data) { return 'sig_' + data; },
    version:   '1.0',
  };
  const probed = createProbe(raw, 'cryptoLib', { watch: 'all' });

  probed.version;          // [GET]  cryptoLib.version => "1.0"
  probed.sign('hello');    // [CALL] cryptoLib.sign("hello")
}

// ── deep 模式：对返回值也递归套探针 ─────────────────────────────────────────
{
  const obj = {
    utils: {
      encode(s) { return btoa(s); }
    }
  };
  const probed = createProbe(obj, 'lib', { deep: true });
  probed.utils.encode('test');
  // [GET]  lib.utils => [Object]
  // [CALL] lib.utils.encode("test")
}
