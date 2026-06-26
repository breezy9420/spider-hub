// ── Proxy 探针工具 ──────────────────────────────────────────────────────────
// 用于 JS 逆向时观察目标脚本访问了哪些属性、调用了哪些函数
// ──────────────────────────────────────────────────────────────────────────

const DEFAULT_LOGGER = (...args) => console.log(...args);

/**
 * 为任意对象创建 Proxy 探针
 *
 * @param {object|Function} target  被探测的对象或函数
 * @param {string}          name    日志中显示的名称，默认 'target'
 * @param {object}          opts    选项
 * @param {Function}        opts.log       自定义日志函数，默认 console.log
 * @param {boolean}         opts.deep      是否对返回值递归套探针，默认 false
 * @param {string[]}        opts.skip      不打印日志的属性名列表（如 ['Symbol(nodejs.util.inspect.custom)']）
 * @param {'all'|'get'|'set'|'call'} opts.watch  只监听某类操作，默认 'all'
 * @param {boolean}         opts.stackTrace 是否打印调用栈，默认 false
 * @returns Proxy
 */
export function createProbe(target, name = 'target', opts = {}) {
  const {
    log        = DEFAULT_LOGGER,
    deep       = false,
    skip       = [],
    watch      = 'all',
    stackTrace = false,
  } = opts;

  const skipSet = new Set(skip);

  function shouldSkip(prop) {
    return skipSet.has(String(prop)) || typeof prop === 'symbol';
  }

  function trace(label) {
    if (!stackTrace) return '';
    const err = new Error();
    const lines = err.stack.split('\n').slice(3, 6).join(' | ');
    return `\n  ↳ ${lines}`;
  }

  function maybeDeep(value, propName) {
    if (!deep) return value;
    if (value !== null && typeof value === 'object') {
      return createProbe(value, `${name}.${String(propName)}`, opts);
    }
    if (typeof value === 'function') {
      return createProbe(value, `${name}.${String(propName)}`, opts);
    }
    return value;
  }

  return new Proxy(target, {
    get(obj, prop, receiver) {
      const value = Reflect.get(obj, prop, receiver);
      if (!shouldSkip(prop) && (watch === 'all' || watch === 'get')) {
        const display = typeof value === 'function' ? '[Function]'
          : typeof value === 'object' && value !== null ? '[Object]'
          : JSON.stringify(value);
        log(`[GET]  ${name}.${String(prop)} => ${display}${trace()}`);
      }
      return maybeDeep(value, prop);
    },

    set(obj, prop, value) {
      if (!shouldSkip(prop) && (watch === 'all' || watch === 'set')) {
        const display = typeof value === 'function' ? '[Function]'
          : typeof value === 'object' && value !== null ? '[Object]'
          : JSON.stringify(value);
        log(`[SET]  ${name}.${String(prop)} = ${display}${trace()}`);
      }
      return Reflect.set(obj, prop, value);
    },

    has(obj, prop) {
      const result = Reflect.has(obj, prop);
      if (!shouldSkip(prop) && watch === 'all') {
        log(`[HAS]  "${String(prop)}" in ${name} => ${result}${trace()}`);
      }
      return result;
    },

    deleteProperty(obj, prop) {
      if (!shouldSkip(prop) && watch === 'all') {
        log(`[DEL]  delete ${name}.${String(prop)}${trace()}`);
      }
      return Reflect.deleteProperty(obj, prop);
    },

    apply(obj, thisArg, args) {
      if (watch === 'all' || watch === 'call') {
        const display = args.map(a =>
          typeof a === 'object' && a !== null ? '[Object]' : JSON.stringify(a)
        ).join(', ');
        log(`[CALL] ${name}(${display})${trace()}`);
      }
      const result = Reflect.apply(obj, thisArg, args);
      if (watch === 'all' || watch === 'call') {
        const display = typeof result === 'object' && result !== null ? '[Object]' : JSON.stringify(result);
        log(`[RET]  ${name}() => ${display}${trace()}`);
      }
      return maybeDeep(result, '()');
    },

    construct(obj, args, newTarget) {
      if (watch === 'all' || watch === 'call') {
        const display = args.map(a =>
          typeof a === 'object' && a !== null ? '[Object]' : JSON.stringify(a)
        ).join(', ');
        log(`[NEW]  new ${name}(${display})${trace()}`);
      }
      return Reflect.construct(obj, args, newTarget);
    },
  });
}

/**
 * 批量为一个对象的所有方法套探针（不递归子对象）
 *
 * @param {object} obj    目标对象
 * @param {string} label  日志前缀
 * @param {object} opts   同 createProbe 的 opts
 */
export function probeAllMethods(obj, label = 'obj', opts = {}) {
  const { log = DEFAULT_LOGGER } = opts;
  const probed = { ...obj };
  for (const key of Object.getOwnPropertyNames(obj)) {
    const val = obj[key];
    if (typeof val === 'function') {
      probed[key] = new Proxy(val, {
        apply(fn, thisArg, args) {
          const display = args.map(a =>
            typeof a === 'object' && a !== null ? '[Object]' : JSON.stringify(a)
          ).join(', ');
          log(`[CALL] ${label}.${key}(${display})`);
          const ret = Reflect.apply(fn, thisArg, args);
          log(`[RET]  ${label}.${key}() =>`, ret);
          return ret;
        },
      });
    }
  }
  return probed;
}

/**
 * 创建一个 "陷阱对象"：访问任何未定义属性都打印日志并返回占位值
 * 用于快速发现目标脚本依赖了哪些环境 API
 *
 * @param {string} name      对象名称，如 'window'
 * @param {object} base      已有的真实属性，默认 {}
 * @param {*}      fallback  缺失属性的返回值，默认返回新的陷阱对象（链式）
 * @param {object} opts
 */
export function createTrap(name = 'trap', base = {}, fallback, opts = {}) {
  const { log = DEFAULT_LOGGER } = opts;

  return new Proxy(base, {
    get(obj, prop) {
      if (prop in obj) return obj[prop];
      if (typeof prop === 'symbol') return obj[prop];
      log(`[TRAP] ${name}.${String(prop)} accessed (undefined)`);
      if (fallback !== undefined) return fallback;
      // 返回一个可以继续调用/访问的链式 Trap
      const child = createTrap(`${name}.${String(prop)}`, {}, undefined, opts);
      // 让它也可以被当作函数调用
      return new Proxy(function(){}, {
        get(_, p) { return child[p]; },
        apply(_fn, _this, args) {
          log(`[TRAP] ${name}.${String(prop)}(${args.map(a => JSON.stringify(a)).join(', ')}) called`);
          return createTrap(`${name}.${String(prop)}()`, {}, undefined, opts);
        },
        construct(_fn, args) {
          log(`[TRAP] new ${name}.${String(prop)}(${args.map(a => JSON.stringify(a)).join(', ')}) called`);
          return createTrap(`new ${name}.${String(prop)}`, {}, undefined, opts);
        },
      });
    },
    set(obj, prop, value) {
      log(`[TRAP] ${name}.${String(prop)} = ${JSON.stringify(value)}`);
      obj[prop] = value;
      return true;
    },
  });
}
