import vm from 'node:vm';
import { createWindowEnv }               from './core/window.js';
import { createDocumentEnv }             from './core/document.js';
import { createNavigatorEnv }            from './core/navigator.js';
import { createLocalStorage, createSessionStorage } from './core/storage.js';
import { createProbe, createTrap } from './probe.js';

export { createProbe, probeAllMethods, createTrap } from './probe.js';

/**
 * 构造完整的浏览器模拟上下文
 *
 * @param {object} options
 * @param {object}  options.window      window 属性覆盖（location.href 等）
 * @param {object}  options.navigator   navigator 属性覆盖（userAgent 等）
 * @param {object}  options.document    document 属性覆盖
 * @param {boolean} options.probe       是否为 window/document/navigator/storage 套探针
 * @param {object}  options.probeOpts   探针选项，透传给 createProbe
 * @param {boolean} options.trap        是否在 window 上启用 createTrap（发现未定义属性）
 * @param {object}  options.extra       额外注入到 context 的变量
 * @returns {vm.Context}  可直接传给 vm.runInContext 的沙箱上下文
 */
export function createContext(options = {}) {
  const {
    window:   windowOverrides   = {},
    navigator: navOverrides     = {},
    document:  docOverrides     = {},
    probe      = false,
    probeOpts  = {},
    trap       = false,
    extra      = {},
  } = options;

  const localStorage   = createLocalStorage();
  const sessionStorage = createSessionStorage();
  const navigator      = createNavigatorEnv(navOverrides);
  const document       = createDocumentEnv(docOverrides);
  const window         = createWindowEnv({ document, navigator, localStorage, sessionStorage });

  // 应用 window 级别的覆盖（支持深层路径如 location.href）
  for (const [k, v] of Object.entries(windowOverrides)) {
    if (typeof v === 'object' && v !== null && typeof window[k] === 'object') {
      Object.assign(window[k], v);
    } else {
      window[k] = v;
    }
  }

  // document.location 与 window.location 保持同一引用
  document.location = window.location;

  let _doc  = document;
  let _nav  = navigator;
  let _ls   = localStorage;
  let _ss   = sessionStorage;

  if (probe) {
    _doc = createProbe(document,       'document',       probeOpts);
    _nav = createProbe(navigator,      'navigator',      probeOpts);
    _ls  = createProbe(localStorage,   'localStorage',   probeOpts);
    _ss  = createProbe(sessionStorage, 'sessionStorage', probeOpts);
  }

  // 重新挂载（探针版）
  window.document       = _doc;
  window.navigator      = _nav;
  window.localStorage   = _ls;
  window.sessionStorage = _ss;

  // 将 window 的所有属性平铺到 context 顶层，模拟浏览器全局作用域
  const ctx = { ...window };

  // 覆盖顶层引用为（可能是探针版的）子对象
  ctx.document       = _doc;
  ctx.navigator      = _nav;
  ctx.localStorage   = _ls;
  ctx.sessionStorage = _ss;

  Object.assign(ctx, extra);

  // trap 模式：未定义属性访问时给出日志提示
  if (trap) {
    const trapCtx = createTrap('window', ctx, undefined, probeOpts);
    return vm.createContext(trapCtx);
  }

  return vm.createContext(ctx);
}

/**
 * 快捷运行：创建沙箱并执行代码
 *
 * @param {string} code     要执行的 JS 字符串
 * @param {object} options  同 createContext 的 options
 * @returns 执行结果
 */
export function runInSandbox(code, options = {}) {
  const ctx = createContext(options);
  return vm.runInContext(code, ctx);
}
