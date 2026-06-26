/**
 * 示例 02：覆盖浏览器环境属性
 *
 * 逆向时经常需要伪造 userAgent、cookie、location 等，
 * 让目标脚本以为自己跑在特定的浏览器/页面环境中。
 */

import { runInSandbox, createContext } from '../index.js';
import vm from 'node:vm';

// ── 覆盖 location ────────────────────────────────────────────────────────────
const href = runInSandbox(`location.href`, {
  window: {
    location: {
      href:     'https://target.com/page?id=123&token=abc',
      hostname: 'target.com',
      pathname: '/page',
      search:   '?id=123&token=abc',
    }
  }
});
console.log(href);  // https://target.com/page?id=123&token=abc

// ── 覆盖 navigator.userAgent ─────────────────────────────────────────────────
const ua = runInSandbox(`navigator.userAgent`, {
  navigator: {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    platform:  'iPhone',
    language:  'zh-CN',
  }
});
console.log(ua);

// ── 覆盖 document.cookie / referrer ─────────────────────────────────────────
const cookie = runInSandbox(`document.cookie`, {
  document: {
    cookie:   'session=xyz; uid=12345',
    referrer: 'https://google.com',
    title:    '凤凰云智影院',
  }
});
console.log(cookie);

// ── 组合覆盖 + extra 注入自定义全局变量 ──────────────────────────────────────
const ctx = createContext({
  window: {
    location: { href: 'https://target.com/' },
  },
  navigator: {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0',
  },
  document: {
    cookie: 'token=secret',
  },
  extra: {
    // 注入目标网站可能用到的全局配置对象
    __SITE_CONFIG__: { version: '2.1.0', env: 'prod' },
  },
});

vm.runInContext(`var info = navigator.userAgent + ' | ' + __SITE_CONFIG__.env;`, ctx);
console.log(ctx.info);
