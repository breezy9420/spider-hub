const pluginList = [
  { name: 'PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
  { name: 'Chrome PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
  { name: 'Chromium PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
  { name: 'Microsoft Edge PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
  { name: 'WebKit built-in PDF', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
];

function makePlugins(list) {
  const plugins = { length: list.length };
  list.forEach((p, i) => { plugins[i] = p; });
  plugins.item = (i) => plugins[i] ?? null;
  plugins.namedItem = (name) => list.find(p => p.name === name) ?? null;
  plugins.refresh = () => {};
  plugins[Symbol.iterator] = function* () { for (let i = 0; i < this.length; i++) yield this[i]; };
  return plugins;
}

export function createNavigatorEnv(overrides = {}) {
  return {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    appName: 'Netscape',
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    platform: 'Win32',
    product: 'Gecko',
    productSub: '20030107',
    vendor: 'Google Inc.',
    vendorSub: '',
    language: 'zh-CN',
    languages: Object.freeze(['zh-CN', 'zh', 'en-US', 'en']),
    onLine: true,
    cookieEnabled: true,
    doNotTrack: null,
    hardwareConcurrency: 8,
    deviceMemory: 8,
    maxTouchPoints: 0,
    pdfViewerEnabled: true,
    webdriver: false,

    plugins: makePlugins(pluginList),
    mimeTypes: {
      length: 0,
      item: () => null,
      namedItem: () => null,
      [Symbol.iterator]: function* () {},
    },

    connection: {
      effectiveType: '4g',
      rtt: 50,
      downlink: 10,
      saveData: false,
      addEventListener() {},
      removeEventListener() {},
    },

    permissions: {
      query: (desc) => Promise.resolve({ state: 'granted', onchange: null }),
    },

    geolocation: {
      getCurrentPosition(success, error) {
        error?.({ code: 1, message: 'User denied Geolocation' });
      },
      watchPosition: () => 0,
      clearWatch: () => {},
    },

    mediaDevices: {
      getUserMedia: () => Promise.reject(new DOMException('NotAllowedError')),
      enumerateDevices: () => Promise.resolve([]),
    },

    clipboard: {
      readText: () => Promise.resolve(''),
      writeText: () => Promise.resolve(),
    },

    getBattery: () => Promise.resolve({
      charging: true,
      chargingTime: 0,
      dischargingTime: Infinity,
      level: 1,
      addEventListener() {},
    }),

    sendBeacon: () => true,
    javaEnabled: () => false,
    vibrate: () => true,

    ...overrides,
  };
}
