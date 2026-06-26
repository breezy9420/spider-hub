import { createCrypto } from './crypto.js';

export function createWindowEnv({ document, navigator, localStorage, sessionStorage } = {}) {
  const win = {
    // ── 自引用 ──────────────────────────────────────────────────────────────
    get window()  { return win; },
    get self()    { return win; },
    get top()     { return win; },
    get parent()  { return win; },
    get frames()  { return win; },
    get globalThis() { return win; },

    // ── 挂载子对象 ──────────────────────────────────────────────────────────
    document,
    navigator,
    localStorage,
    sessionStorage,

    // ── 页面尺寸 ────────────────────────────────────────────────────────────
    innerWidth:  1920,  innerHeight:  1080,
    outerWidth:  1920,  outerHeight:  1080,
    screenX: 0, screenY: 0,
    pageXOffset: 0, pageYOffset: 0,
    scrollX: 0, scrollY: 0,
    devicePixelRatio: 1,

    screen: {
      width: 1920, height: 1080,
      availWidth: 1920, availHeight: 1040,
      colorDepth: 24, pixelDepth: 24,
      orientation: { type: 'landscape-primary', angle: 0, addEventListener(){}, removeEventListener(){} },
    },

    // ── Location ────────────────────────────────────────────────────────────
    location: (() => {
      const loc = {
        href:     'https://example.com/',
        protocol: 'https:',
        host:     'example.com',
        hostname: 'example.com',
        port:     '',
        pathname: '/',
        search:   '',
        hash:     '',
        origin:   'https://example.com',
        toString() { return this.href; },
        assign(url)  { this.href = url; },
        replace(url) { this.href = url; },
        reload()     {},
      };
      return loc;
    })(),

    history: {
      length: 1, state: null, scrollRestoration: 'auto',
      pushState(state, title, url)    { if (url) win.location.href = url; },
      replaceState(state, title, url) { if (url) win.location.href = url; },
      go() {}, back() {}, forward() {},
    },

    // ── 计时器（直接透传 Node 的） ───────────────────────────────────────────
    setTimeout,  clearTimeout,
    setInterval, clearInterval,
    queueMicrotask,
    requestAnimationFrame:       (cb) => setTimeout(() => cb(Date.now()), 16),
    cancelAnimationFrame:        (id) => clearTimeout(id),
    requestIdleCallback:         (cb) => setTimeout(() => cb({ didTimeout:false, timeRemaining:()=>50 }), 1),
    cancelIdleCallback:          (id) => clearTimeout(id),

    // ── 编解码 ───────────────────────────────────────────────────────────────
    atob: (s) => Buffer.from(s, 'base64').toString('binary'),
    btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
    encodeURIComponent,
    decodeURIComponent,
    encodeURI,
    decodeURI,
    escape,
    unescape,

    // ── Crypto ───────────────────────────────────────────────────────────────
    crypto: createCrypto(),

    // ── 网络 ─────────────────────────────────────────────────────────────────
    fetch: () => Promise.reject(new Error('[fixEnv] fetch is not implemented')),
    XMLHttpRequest: class XMLHttpRequest {
      open() {}  send() {}  abort() {}  setRequestHeader() {}  getResponseHeader() { return null; }
      getAllResponseHeaders() { return ''; }
      addEventListener() {}  removeEventListener() {}
      readyState = 0; status = 0; statusText = ''; response = null; responseText = '';
    },
    WebSocket: class WebSocket {
      constructor(url) { this.url = url; this.readyState = 3; }
      send() {}  close() {}
      addEventListener() {}  removeEventListener() {}
    },

    // ── 事件 ─────────────────────────────────────────────────────────────────
    addEventListener()    {},
    removeEventListener() {},
    dispatchEvent()       { return true; },

    Event: class Event {
      constructor(type, init = {}) {
        this.type = type; this.bubbles = !!init.bubbles; this.cancelable = !!init.cancelable;
        this.timeStamp = Date.now();
      }
      preventDefault()  {} stopPropagation() {} stopImmediatePropagation() {}
    },

    CustomEvent: class CustomEvent {
      constructor(type, init = {}) {
        this.type = type; this.detail = init.detail ?? null;
        this.bubbles = !!init.bubbles; this.cancelable = !!init.cancelable;
      }
      preventDefault()  {} stopPropagation() {} stopImmediatePropagation() {}
    },

    EventTarget: class EventTarget {
      #listeners = {};
      addEventListener(type, fn)    { (this.#listeners[type] ??= []).push(fn); }
      removeEventListener(type, fn) { this.#listeners[type] = (this.#listeners[type] ?? []).filter(f => f !== fn); }
      dispatchEvent(e)              { (this.#listeners[e.type] ?? []).forEach(fn => fn(e)); return true; }
    },

    // ── 存储相关事件 ──────────────────────────────────────────────────────────
    StorageEvent: class StorageEvent {
      constructor(type, init = {}) { Object.assign(this, { type, ...init }); }
    },

    // ── Performance ──────────────────────────────────────────────────────────
    performance: {
      now:      () => Date.now() - _start,
      timeOrigin: Date.now(),
      mark()    {}, measure() {}, clearMarks() {}, clearMeasures() {},
      getEntriesByType: () => [], getEntriesByName: () => [], getEntries: () => [],
      navigation: { type: 0, redirectCount: 0 },
      timing: {
        navigationStart: Date.now(), unloadEventStart: 0, unloadEventEnd: 0,
        redirectStart: 0, redirectEnd: 0, fetchStart: Date.now(),
        domainLookupStart: Date.now(), domainLookupEnd: Date.now(),
        connectStart: Date.now(), connectEnd: Date.now(),
        secureConnectionStart: Date.now(), requestStart: Date.now(),
        responseStart: Date.now(), responseEnd: Date.now(),
        domLoading: Date.now(), domInteractive: Date.now(),
        domContentLoadedEventStart: Date.now(), domContentLoadedEventEnd: Date.now(),
        domComplete: Date.now(), loadEventStart: Date.now(), loadEventEnd: Date.now(),
      },
    },

    // ── MutationObserver / IntersectionObserver 等 ───────────────────────────
    MutationObserver: class MutationObserver {
      constructor(cb) { this._cb = cb; }
      observe() {} disconnect() {} takeRecords() { return []; }
    },
    IntersectionObserver: class IntersectionObserver {
      constructor(cb) { this._cb = cb; }
      observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
    },
    ResizeObserver: class ResizeObserver {
      constructor(cb) { this._cb = cb; }
      observe() {} unobserve() {} disconnect() {}
    },

    // ── 弹窗（静默） ─────────────────────────────────────────────────────────
    alert:   (msg) => { console.log('[alert]', msg); },
    confirm: ()    => true,
    prompt:  ()    => '',

    // ── URL / URLSearchParams ────────────────────────────────────────────────
    URL,
    URLSearchParams,

    // ── 常用全局对象透传 ──────────────────────────────────────────────────────
    console,
    Buffer,
    TextEncoder,
    TextDecoder,
    AbortController,
    AbortSignal,
    Promise,
    Proxy,
    Reflect,
    Symbol,
    Map, Set, WeakMap, WeakSet,
    Int8Array, Uint8Array, Uint8ClampedArray,
    Int16Array, Uint16Array,
    Int32Array, Uint32Array,
    Float32Array, Float64Array,
    BigInt64Array, BigUint64Array,
    ArrayBuffer, DataView, SharedArrayBuffer,
    JSON, Math, Date, Error, RegExp, Array, Object, Number, String, Boolean, Function, BigInt,
    parseInt, parseFloat, isNaN, isFinite,
    undefined,
    NaN,
    Infinity,
  };

  return win;
}

const _start = Date.now();
