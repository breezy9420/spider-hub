// canvas 2d context 最小实现，满足指纹脚本基本调用
function makeCanvas2dContext() {
  const _imageData = new Uint8ClampedArray(4).fill(128);
  return {
    fillStyle: '#000', strokeStyle: '#000', font: '10px sans-serif',
    textBaseline: 'alphabetic', textAlign: 'left',
    globalAlpha: 1, globalCompositeOperation: 'source-over',
    shadowBlur: 0, shadowColor: 'rgba(0,0,0,0)', shadowOffsetX: 0, shadowOffsetY: 0,
    lineWidth: 1, lineCap: 'butt', lineJoin: 'miter', miterLimit: 10,
    fillRect() {}, strokeRect() {}, clearRect() {},
    fillText() {}, strokeText() {},
    beginPath() {}, closePath() {}, moveTo() {}, lineTo() {}, arc() {},
    rect() {}, fill() {}, stroke() {}, clip() {},
    save() {}, restore() {},
    translate() {}, rotate() {}, scale() {}, transform() {}, setTransform() {},
    drawImage() {},
    createLinearGradient: () => ({ addColorStop() {} }),
    createRadialGradient: () => ({ addColorStop() {} }),
    createPattern: () => ({}),
    measureText: (text) => ({ width: text.length * 6, actualBoundingBoxAscent: 8, actualBoundingBoxDescent: 2 }),
    getImageData: (x, y, w, h) => ({
      data: new Uint8ClampedArray(w * h * 4).fill(128),
      width: w, height: h,
    }),
    putImageData() {},
    toDataURL: () => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    canvas: null,
  };
}

function makeWebGLContext() {
  return {
    getParameter(param) {
      const map = {
        37445: 'Intel Inc.',           // VENDOR
        37446: 'Intel Iris OpenGL Engine', // RENDERER
        7936:  'WebGL 1.0',
        7937:  'WebGL GLSL ES 1.0',
      };
      return map[param] ?? null;
    },
    getExtension: () => null,
    createBuffer: () => ({}),
    bindBuffer() {}, bufferData() {},
    createProgram: () => ({}),
    createShader: () => ({}),
    shaderSource() {}, compileShader() {}, attachShader() {}, linkProgram() {},
    getProgramParameter: () => true,
    getShaderParameter: () => true,
    useProgram() {}, drawArrays() {}, viewport() {}, clearColor() {}, clear() {},
    enable() {}, disable() {}, blendFunc() {}, depthFunc() {},
    getUniformLocation: () => ({}),
    getAttribLocation: () => 0,
    uniform1f() {}, uniform2f() {}, uniform3f() {}, uniform4f() {},
    uniformMatrix4fv() {},
    canvas: null,
  };
}

function makeElement(tag) {
  const el = {
    tagName: tag.toUpperCase(),
    nodeName: tag.toUpperCase(),
    nodeType: 1,
    style: new Proxy({}, { get: (t, p) => t[p] ?? '', set: (t, p, v) => { t[p] = v; return true; } }),
    attributes: {},
    childNodes: [],
    children: [],
    classList: (() => {
      const set = new Set();
      return {
        add(...c)    { c.forEach(x => set.add(x)); },
        remove(...c) { c.forEach(x => set.delete(x)); },
        toggle(c)    { set.has(c) ? set.delete(c) : set.add(c); },
        contains(c)  { return set.has(c); },
        replace(o, n){ set.delete(o); set.add(n); },
        get value()  { return [...set].join(' '); },
        [Symbol.iterator]() { return set[Symbol.iterator](); },
      };
    })(),
    innerHTML: '', outerHTML: '', innerText: '', textContent: '',
    className: '', id: '', name: '', type: '', value: '',
    src: '', alt: '', title: '',
    width: 0, height: 0,
    offsetWidth: 0, offsetHeight: 0, offsetTop: 0, offsetLeft: 0,
    clientWidth: 0, clientHeight: 0, scrollTop: 0, scrollLeft: 0,
    tabIndex: -1, disabled: false, checked: false, selected: false,
    parentNode: null, parentElement: null, ownerDocument: null,

    setAttribute(k, v)  { this.attributes[k] = String(v); },
    getAttribute(k)     { return this.attributes[k] ?? null; },
    removeAttribute(k)  { delete this.attributes[k]; },
    hasAttribute(k)     { return k in this.attributes; },
    toggleAttribute(k, force) {
      if (force === undefined) force = !this.hasAttribute(k);
      force ? this.setAttribute(k, '') : this.removeAttribute(k);
      return force;
    },

    appendChild(child)  { this.childNodes.push(child); this.children.push(child); return child; },
    removeChild(child)  {
      const i = this.childNodes.indexOf(child);
      if (i > -1) { this.childNodes.splice(i, 1); this.children.splice(i, 1); }
      return child;
    },
    insertBefore(newNode, ref) { this.childNodes.unshift(newNode); return newNode; },
    replaceChild(newChild, old) { this.appendChild(newChild); return old; },
    cloneNode(deep) { return makeElement(tag); },

    addEventListener() {}, removeEventListener() {}, dispatchEvent() { return true; },
    focus() {}, blur() {}, click() {},
    getBoundingClientRect() { return { x:0, y:0, width:0, height:0, top:0, right:0, bottom:0, left:0, toJSON() { return this; } }; },
    getClientRects() { return { length:0, item:()=>null, [Symbol.iterator]:function*(){} }; },
    scrollIntoView() {},
    matches: () => false,
    closest:  () => null,
    querySelector:    () => null,
    querySelectorAll: () => ({ length:0, item:()=>null, forEach(){}, [Symbol.iterator]:function*(){} }),
    getElementsByClassName: () => [],
    getElementsByTagName:   () => [],

    // canvas 特有
    getContext(type) {
      if (type === '2d') {
        const ctx = makeCanvas2dContext();
        ctx.canvas = this;
        return ctx;
      }
      if (type === 'webgl' || type === 'experimental-webgl' || type === 'webgl2') {
        const ctx = makeWebGLContext();
        ctx.canvas = this;
        return ctx;
      }
      return null;
    },
    toDataURL: () => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    toBlob: (cb) => cb(null),

    // input / form 特有
    setSelectionRange() {},
    select() {},
    setRangeText() {},
    reportValidity: () => true,
    checkValidity:  () => true,
  };

  // <a> / <area>：设置 href 时自动解析 URL，模拟浏览器行为
  const t = tag.toLowerCase();
  if (t === 'a' || t === 'area') {
    let _href = '';
    const _baseURL = 'https://example.com/';
    const _parsed = () => { try { return new URL(_href, _baseURL); } catch { return null; } };
    Object.defineProperty(el, 'href', {
      get() { const u = _parsed(); return u ? u.href : _href; },
      set(v) {
        _href = String(v);
        const u = _parsed();
        if (u) {
          el.protocol = u.protocol;
          el.host     = u.host;
          el.hostname = u.hostname;
          el.port     = u.port;
          el.pathname = u.pathname;
          el.search   = u.search;
          el.hash     = u.hash;
          el.origin   = u.origin;
        }
      },
      enumerable: true, configurable: true,
    });
    // 初始化 URL 分量默认值
    el.protocol = 'https:'; el.host = 'example.com'; el.hostname = 'example.com';
    el.port = ''; el.pathname = '/'; el.search = ''; el.hash = ''; el.origin = 'https://example.com';
  } else {
    el.href = '';
  }

  return el;
}

let _cookie = '';

export function createDocumentEnv(overrides = {}) {
  const doc = {
    nodeType: 9,
    nodeName: '#document',
    nodeValue: null,

    URL: 'https://example.com/',
    documentURI: 'https://example.com/',
    baseURI: 'https://example.com/',
    domain: 'example.com',
    referrer: '',
    title: '',

    readyState: 'complete',
    contentType: 'text/html',
    charset: 'UTF-8',
    characterSet: 'UTF-8',
    inputEncoding: 'UTF-8',

    get cookie()  { return _cookie; },
    set cookie(v) { _cookie += (_cookie ? '; ' : '') + v; },

    hidden: false,
    visibilityState: 'visible',
    currentScript: null,
    documentMode: undefined,   // IE only，undefined 即可

    // document.location 与 window.location 同一对象；createContext 会在组装时覆盖为真实引用
    location: {
      href: 'https://example.com/', protocol: 'https:', host: 'example.com',
      hostname: 'example.com', port: '', pathname: '/', search: '', hash: '',
      origin: 'https://example.com',
      toString() { return this.href; },
      assign(url)  { this.href = url; },
      replace(url) { this.href = url; },
      reload() {},
    },

    implementation: {
      createHTMLDocument(title = '') { return createDocumentEnv({ title }); },
      hasFeature: () => true,
      createDocumentType: () => ({ nodeType: 10 }),
    },

    head: makeElement('head'),
    body: (() => {
      const b = makeElement('body');
      b.offsetWidth = 1920; b.offsetHeight = 1080;
      b.clientWidth = 1920; b.clientHeight = 1080;
      return b;
    })(),

    documentElement: (() => {
      const html = makeElement('html');
      html.clientWidth  = 1920;
      html.clientHeight = 1080;
      html.scrollTop    = 0;
      html.scrollLeft   = 0;
      html.lang         = 'zh-CN';
      return html;
    })(),

    createElement(tag)  { const el = makeElement(tag); el.ownerDocument = doc; return el; },
    createElementNS(_ns, tag) { return doc.createElement(tag); },
    createTextNode(text) { return { nodeType:3, nodeValue:text, textContent:text, nodeName:'#text' }; },
    createComment(text)  { return { nodeType:8, nodeValue:text, textContent:text, nodeName:'#comment' }; },
    createDocumentFragment() {
      return { nodeType:11, childNodes:[], children:[], appendChild(c){ this.childNodes.push(c); return c; } };
    },
    createEvent(type) {
      return { type:'', bubbles:false, cancelable:false, initEvent(t,b,c){ this.type=t; this.bubbles=b; this.cancelable=c; } };
    },

    getElementById:         () => null,
    getElementsByClassName: () => [],
    getElementsByName:      () => [],
    getElementsByTagName:   (tag) => ({ length:0, item:()=>null, [Symbol.iterator]:function*(){} }),
    querySelector:          () => null,
    querySelectorAll:       () => ({ length:0, item:()=>null, forEach(){}, [Symbol.iterator]:function*(){} }),
    contains:               () => false,

    addEventListener() {}, removeEventListener() {}, dispatchEvent() { return true; },
    write() {}, writeln() {},
    open() { return doc; }, close() {},
    hasFocus: () => true,
    execCommand: () => false,
    queryCommandSupported: () => false,
    queryCommandEnabled:   () => false,

    getSelection: () => ({
      toString: () => '',
      removeAllRanges() {}, addRange() {}, getRangeAt: () => null, rangeCount: 0,
    }),

    createRange() {
      return {
        setStart(){}, setEnd(){}, selectNode(){}, selectNodeContents(){},
        getBoundingClientRect(){ return { x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0 }; },
        getClientRects(){ return []; },
        collapse(){}, cloneRange(){ return this; },
      };
    },

    adoptNode: (node) => node,
    importNode: (node) => node,

    ...overrides,
  };

  doc.head.ownerDocument  = doc;
  doc.body.ownerDocument  = doc;
  doc.documentElement.ownerDocument = doc;

  return doc;
}
