var window = {
  [Symbol.toStringTag]: "Window",
};
window.window = window.self = window;
globalThis.window = globalThis.self = window;

// copy(location)
location = {
  ancestorOrigins: {},
  href: "",
  origin: "",
  protocol: "",
  host: "",
  hostname: "",
  port: "",
  pathname: "",
  search: "",
  hash: "",
};

window.location = location;

localStorage = {};

localStorage.getItem = function (key) {
  console.log("localStorage getItem", key);
  return localStorage[key];
};

localStorage.setItem = function (key, val) {
  console.log("localStorage setItem", key, val);
  localStorage[key] = val;
};

localStorage.removeItem = function (key) {
  console.log("localStorage removeItem", key);
  delete localStorage[key];
};

window.localStorage = localStorage;

document = {
  getElementById(id) {
    console.log("document getElementById 获取的id为:", id);
    return doms[id] ?? {};
  },
  createElement(tag_name) {
    console.log("document createElement 创建的标签为:", tag_name);
    return {
      tagName: tag_name,
      style: {},
      setAttribute(attr, val) {
        console.log("createElement setAttribute 设置的属性为:", attr, val);
      },
      getAttribute(attr) {
        console.log("createElement getAttribute 获取的属性为:", attr);
      },
      appendChild(node) {
        console.log("createElement appendChild 添加的节点为:", node);
      },
    };
  },
  removeChild(node) {
    console.log("document removeChild 删除的节点为:", node);
  },
  getElementsByTagName(tag_name) {
    console.log("document getElementsByTagName 获取的标签为:", tag_name);
    if (tag_name === "script") {
      return [];
    }

    if (tag_name === "meta") {
      return domMetas;
    }

    if (tag_name === "textarea") {
      return domTextareas;
    }

    return [
      {
        tagName: tag_name,
        appendChild(node) {
          console.log("getElementsByTagName appendChild 添加的节点为:", node);
        },
        insertBefore(newNode, refNode) {
          console.log(
            "getElementsByTagName insertBefore 插入的节点为:",
            newNode,
          );
        },
        removeChild(node) {
          console.log("getElementsByTagName removeChild 删除的节点为:", node);
        },
      },
    ];
  },
  addEventListener(type, listener, options) {
    console.log("document addEventListener 监听的事件为:", type);
  },
  removeEventListener(type, listener, options) {
    console.log("document removeEventListener 移除的事件为:", type);
  },
  readyState: "complete",
  currentScript: null,
  cookie: "",
  hidden: false,
  visibilityState: "visible",
  referrer: "https://www.pzds.com/",
  title: "",
  domain: "www.pzds.com",
  characterSet: "UTF-8",
  compatMode: "CSS1Compat",
  querySelector(sel) {
    console.log("document querySelector:", sel);
    return null;
  },
  querySelectorAll(sel) {
    console.log("document querySelectorAll:", sel);
    return [];
  },
  getElementsByClassName(cls) {
    console.log("document getElementsByClassName:", cls);
    return [];
  },
  getElementsByName(name) {
    console.log("document getElementsByName:", name);
    return [];
  },
  createComment(data) {
    return { data: data, nodeType: 8 };
  },
  createTextNode(data) {
    return { data: data, nodeType: 3 };
  },
  createEvent(type) {
    return {
      initEvent() {},
      initCustomEvent() {},
    };
  },
  dispatchEvent() {
    return true;
  },
  write() {},
  writeln() {},
  open() {},
  close() {},
};

document.documentElement = {
  tagName: "HTML",
  nodeName: "HTML",
  lang: "zh-CN",
  clientWidth: 1920,
  clientHeight: 969,
  scrollWidth: 1920,
  scrollHeight: 969,
  offsetWidth: 1920,
  offsetHeight: 969,
  style: {},
  getAttribute(attr) {
    console.log("documentElement getAttribute 获取的属性为:", attr);
    return null;
  },
  setAttribute(attr, val) {
    console.log("documentElement setAttribute 设置的属性为:", attr, val);
  },
  appendChild(node) {
    console.log("documentElement appendChild 添加的节点为:", node);
  },
  insertBefore(newNode, refNode) {
    console.log("documentElement insertBefore 插入的节点为:", newNode);
  },
};
document.head = {
  appendChild(node) {
    console.log("document.head appendChild 添加的节点为:", node);
  },
  insertBefore(newNode, refNode) {
    console.log("document.head insertBefore 插入的节点为:", newNode);
  },
  removeChild(node) {
    console.log("document.head removeChild 删除的节点为:", node);
  },
};
document.body = document.head;
document.location = location;
window.document = document;

var navigator = {
  appVersion:
    "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  languages: ["en-GB", "zh-CN", "zh"],
  userAgent:
    "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  connection: {
    downlink: 2.4,
    effectiveType: "4g",
    onchange: null,
    rtt: 50,
    saveData: false,
  },
  platform: "Win32",
  product: "Gecko",
  productSub: "20030107",
  vendor: "Google Inc.",
  vendorSub: "",
  hardwareConcurrency: 8,
  deviceMemory: 8,
  maxTouchPoints: 0,
  language: "zh-CN",
  cookieEnabled: true,
  doNotTrack: null,
  onLine: true,
  getBattery: function () {
    return {};
  },
  javaEnabled: function () {
    return false;
  },
  webdriver: false,
  plugins: {
    length: 0,
    refresh: function () {},
    item: function () {
      return null;
    },
    namedItem: function () {
      return null;
    },
  },
  mimeTypes: {
    length: 0,
    refresh: function () {},
    item: function () {
      return null;
    },
    namedItem: function () {
      return null;
    },
  },
  permissions: {
    query: function () {
      return Promise.resolve({ state: "prompt" });
    },
  },
  mediaDevices: {
    enumerateDevices: function () {
      return Promise.resolve([]);
    },
  },
  sendBeacon: function () {
    return true;
  },
  clearAppBadge: function () {
    return Promise.resolve();
  },
};

window.navigator = navigator;
// 覆盖 Node 内置的只读 globalThis.navigator，使裸词 navigator 指向我们的补丁对象
try {
  Object.defineProperty(globalThis, "navigator", {
    value: navigator,
    writable: true,
    configurable: true,
    enumerable: true,
  });
} catch (e) {
  console.error("覆盖 globalThis.navigator 失败:", e.message);
}

screen = {
  width: 1920,
  height: 1080,
  availWidth: 1920,
  availHeight: 1040,
  colorDepth: 24,
  pixelDepth: 24,
};
window.screen = screen;

window.console = console;

// 定时器
setInterval = function () {
    console.log("setInterval is run");
};
setTimeout = function () {
    console.log("setInterval is run");
};
clearInterval = function () {
    console.log("setInterval is run");
};
clearTimeout = function () {
    console.log("setInterval is run");
};
window.setInterval = setInterval;
window.setTimeout = setTimeout;
window.clearInterval = clearInterval;
window.clearTimeout = clearTimeout;
