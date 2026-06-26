class StorageMock {
  #store = {};

  get length() {
    return Object.keys(this.#store).length;
  }

  key(index) {
    return Object.keys(this.#store)[index] ?? null;
  }

  getItem(key) {
    const k = String(key);
    return Object.prototype.hasOwnProperty.call(this.#store, k) ? this.#store[k] : null;
  }

  setItem(key, value) {
    this.#store[String(key)] = String(value);
  }

  removeItem(key) {
    delete this.#store[String(key)];
  }

  clear() {
    this.#store = {};
  }

  // 导出当前数据（调试用）
  _dump() {
    return { ...this.#store };
  }
}

// 支持 storage['key'] 和 storage.key 的方括号/点语法访问
function wrapStorage(storage) {
  const METHODS = new Set(['getItem', 'setItem', 'removeItem', 'clear', 'key', '_dump']);
  const PRIVATE = new Set(['length']);

  return new Proxy(storage, {
    get(target, prop) {
      if (METHODS.has(prop)) return target[prop].bind(target);
      if (PRIVATE.has(prop)) return target[prop];
      if (typeof prop === 'symbol') return target[prop];
      return target.getItem(prop);
    },
    set(target, prop, value) {
      if (typeof prop === 'symbol') { target[prop] = value; return true; }
      target.setItem(prop, value);
      return true;
    },
    deleteProperty(target, prop) {
      target.removeItem(prop);
      return true;
    },
    has(target, prop) {
      if (typeof prop === 'symbol') return prop in target;
      return target.getItem(prop) !== null;
    },
  });
}

export function createLocalStorage()   { return wrapStorage(new StorageMock()); }
export function createSessionStorage() { return wrapStorage(new StorageMock()); }
