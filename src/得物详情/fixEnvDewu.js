import CryptoJS from "crypto-js";
import axios from "axios";

const obj = (function (e) {
  var tBreezy = {};
  function n(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (null == n) return;
        var r,
          i,
          o = [],
          a = !0,
          c = !1;
        try {
          for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
        } catch (t) {
          (c = !0), (i = t);
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      })(t, e) ||
      (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e);
      })(t, e) ||
      (function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function r(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function i(t) {
    return (i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
  }
  var o,
    a,
    c = 4118548399,
    u = 4129170786,
    s = 76029189,
    f = 93,
    l = 59,
    p = 73,
    d = 3225465664,
    h = 32,
    v = 606105819,
    g = 61,
    _ = 40,
    y = 56320,
    m = 2272392833,
    b = 4,
    w = 69,
    S = 4107603335,
    x = 3250441966,
    O = 60,
    k = 52,
    E = 2147483648,
    T = 1024,
    A = function (t, e) {
      return t <= e;
    },
    P = 62,
    I = function (t, e) {
      return t - e;
    },
    j = 77,
    C = 65536,
    R = 1126891415,
    D = 2368359562,
    L = 46,
    B = 16,
    N = 4294925233,
    U = 1200080426,
    $ = 530742520,
    M = 4243563512,
    F = function (t, e) {
      return t >= e;
    },
    q = 44,
    H = 3593408605,
    V = 29,
    z = 21,
    W = 74,
    G = 1839030562,
    K = 4264355552,
    X = 17,
    J = 92,
    Y = 240,
    Z = 1073741824,
    Q = 89,
    et = 8,
    nt = 1873313359,
    rt = 95,
    it = 2734768916,
    ot = 255,
    at = 256,
    ct = 30,
    ut = 67,
    st = 3221225472,
    ft = 1073741823,
    lt = 4237533241,
    pt = 43,
    dt = 45,
    ht = 63,
    vt = 103,
    gt = 38016083,
    _t = 2240044497,
    yt = 2792965006,
    mt = 3873151461,
    bt = 90,
    wt = function (t, e) {
      return t / e;
    },
    St = 2304563134,
    xt = 11,
    Ot = 50,
    kt = 2,
    Et = 33,
    Tt = 15,
    At = 35,
    Pt = 271733878,
    It = 48,
    jt = 0,
    Ct = 3951481745,
    Rt = function (t, e) {
      return t === e;
    },
    Dt = 2562383102,
    Lt = function (t, e) {
      return t * e;
    },
    Bt = 3614090360,
    Nt = 37,
    Ut = 4254626195,
    $t = 3654602809,
    Mt = 42,
    Ft = 19,
    qt = 3572445317,
    Ht = 111,
    Vt = 1770035416,
    zt = 14,
    Wt = 36,
    Gt = 47,
    Kt = 4139469664,
    Xt = 4149444226,
    Jt = 3905402710,
    Yt = 87,
    Zt = 58,
    Qt = 100,
    te = 10,
    ee = 120,
    ne = function (t, e) {
      return t > e;
    },
    re = 681279174,
    ie = 56,
    oe = 1309151649,
    ae = 55296,
    ce = 3299628645,
    ue = 128,
    se = 224,
    fe = 88,
    le = 1732584193,
    pe = 2763975236,
    de = 13,
    he = 2399980690,
    ve = 1735328473,
    ge = 64,
    _e = 26,
    ye = 54,
    me = 23,
    be = 1236535329,
    we = 76,
    Se = 97,
    xe = 2878612391,
    Oe = 114,
    ke = function (t, e) {
      return t < e;
    },
    Ee = [6, 11, 21, 27, 34, 42],
    Te = 4023233417,
    Ae = 78,
    Pe = 20,
    Ie = function (t, e) {
      return t + e;
    },
    je = 12,
    Ce = 1163531501,
    Re = 7,
    De = 41,
    Le = 2047,
    Be = 568446438,
    Ne = 192,
    Ue = 1804603682,
    $e = 4096336452,
    Me = 22,
    Fe = 5,
    qe = 9,
    He = 4293915773,
    Ve = 82,
    ze = 3921069994,
    We = 1114111,
    Ge = 80,
    Ke = 3174756917,
    Xe = 3889429448,
    Je = 65535,
    Ye = 3634488961,
    Ze = 643717713,
    Qe = 27,
    tn = 34,
    en = 2048,
    nn = 18,
    rn = 94,
    on = 49,
    an = function (t, e) {
      return t % e;
    },
    cn = 38,
    un = 24,
    sn = 4249261313,
    fn = 16383,
    ln = 56319,
    pn = 55,
    dn = 2336552879,
    hn = 1e3,
    vn = 4259657740,
    gn = 39,
    _n = 3275163606,
    yn = 718787259,
    mn = 3200236656,
    bn = 4294588738,
    wn = 31,
    Sn = 70,
    xn = 2821735955,
    On = 6,
    kn = 86,
    En = 3936430074,
    Tn = 53,
    An = 2850285829,
    Pn = 1,
    In = 3,
    jn = 1700485571,
    Cn = 1272893353,
    Rn = "",
    Dn = "1",
    Ln = Pn,
    Bn = "xdw4",
    Nn = "1.1.0.250429",
    Un = "R4igFkz2RTA4CPto",
    $n = "KPvMF5CNUz3ybnsW",
    Mn = [],
    Fn = jt,
    qn = jt,
    Hn = function (t, e) {
      for (var n, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [], o = jt, a = w; ; ) {
        switch (Ee[o++] ^ a) {
          case fe:
            return (a = In), i.join("");
          case [(a = ye), ut][Pn]:
            e = e || r.length;
            continue;
          case g:
            if (((a = j), t)) for (n = jt; n < t; n++) i[n] = r[jt | (Math.random() * e)];
            else {
              var c = void 0;
              for (i[et] = i[de] = i[nn] = i[me] = "-", i[zt] = "4", n = jt; ke(n, Wt); n++) i[n] || ((c = jt | Lt(Math.random(), B)), (i[n] = r[Rt(n, Ft) ? (c & In) | et : c]));
            }
            continue;
        }
        break;
      }
    },
    Vn = "AUIYDFT3768447U29DSGUITHDJF";
  function zn(t) {
    function e(t, e) {
      return (t << e) | (t >>> (h - e));
    }
    function n(t, e) {
      var n, r, i, o, a;
      return (i = t & E), (o = e & E), (n = t & Z), (r = e & Z), (a = Ie(t & ft, e & ft)), n & r ? a ^ E ^ i ^ o : n | r ? (a & Z ? a ^ st ^ i ^ o : a ^ Z ^ i ^ o) : a ^ i ^ o;
    }
    function r(t, r, i, o, a, c, u) {
      return (
        (t = n(
          t,
          n(
            n(
              (function (t, e, n) {
                return (t & e) | (~t & n);
              })(r, i, o),
              a
            ),
            u
          )
        )),
        n(e(t, c), r)
      );
    }
    function i(t, r, i, o, a, c, u) {
      return (
        (t = n(
          t,
          n(
            n(
              (function (t, e, n) {
                return (t & n) | (e & ~n);
              })(r, i, o),
              a
            ),
            u
          )
        )),
        n(e(t, c), r)
      );
    }
    function o(t, r, i, o, a, c, u) {
      return (
        (t = n(
          t,
          n(
            n(
              (function (t, e, n) {
                return t ^ e ^ n;
              })(r, i, o),
              a
            ),
            u
          )
        )),
        n(e(t, c), r)
      );
    }
    function a(t, r, i, o, a, c, u) {
      return (
        (t = n(
          t,
          n(
            n(
              (function (t, e, n) {
                return e ^ (t | ~n);
              })(r, i, o),
              a
            ),
            u
          )
        )),
        n(e(t, c), r)
      );
    }
    function f(t) {
      var e,
        n = "",
        r = "";
      for (e = jt; A(e, In); e++) (r = Ie("0", ((t >>> (e * et)) & ot).toString(B))), (n = Ie(n, r.substr(r.length - kt, kt)));
      return n;
    }
    var l,
      p,
      g,
      _,
      w,
      O,
      k,
      P,
      j,
      L = Array(),
      q = Re,
      W = je,
      J = X,
      Q = Me,
      tt = Fe,
      rt = qe,
      at = zt,
      ct = Pe,
      ut = b,
      pt = xt,
      dt = B,
      vt = me,
      bt = On,
      Ot = te,
      Et = Tt,
      At = z;
    for (
      L = (function (t) {
        for (var e, n = t.length, r = Ie(n, et), i = wt(I(r, an(r, ge)), ge), o = Ie(i, Pn) * B, a = Array(I(o, Pn)), c = jt, u = jt; ke(u, n); ) (e = I(u, u % b) / b), (c = Lt(an(u, b), et)), (a[e] = a[e] | (t.charCodeAt(u) << c)), u++;
        return (e = wt(u - an(u, b), b)), (c = Lt(an(u, b), et)), (a[e] = a[e] | (ue << c)), (a[I(o, kt)] = n << In), (a[I(o, Pn)] = n >>> V), a;
      })(
        (t = (function (t) {
          t = t.replace(/\r\n/g, "\n");
          for (var e = "", n = jt; n < t.length; n++) {
            var r = t.charCodeAt(n);
            if (F(r, ae) && A(r, ln)) {
              var i = r,
                o = t.charCodeAt(++n);
              r = Ie(Ie(Lt(i - ae, T), I(o, y)), C);
            }
            ke(r, ue) ? (e += String.fromCharCode(r)) : r < en ? ((e += String.fromCharCode((r >> On) | Ne)), (e += String.fromCharCode((r & ht) | ue))) : ke(r, C) ? ((e += String.fromCharCode((r >> je) | se)), (e += String.fromCharCode(((r >> On) & ht) | ue)), (e += String.fromCharCode((r & ht) | ue))) : ((e += String.fromCharCode((r >> nn) | Y)), (e += String.fromCharCode(((r >> je) & ht) | ue)), (e += String.fromCharCode(((r >> On) & ht) | ue)), (e += String.fromCharCode((r & ht) | ue)));
          }
          return e;
        })(t))
      ),
        O = le,
        k = Te,
        P = Dt,
        j = Pt,
        l = jt;
      ke(l, L.length);
      l += B
    )
      (p = O),
        (g = k),
        (_ = P),
        (w = j),
        (O = r(O, k, P, j, L[l + jt], q, Bt)),
        (j = r(j, O, k, P, L[Ie(l, Pn)], W, Jt)),
        (P = r(P, j, O, k, L[l + kt], J, v)),
        (k = r(k, P, j, O, L[Ie(l, In)], Q, x)),
        (O = r(O, k, P, j, L[l + b], q, c)),
        (j = r(j, O, k, P, L[Ie(l, Fe)], W, U)),
        (P = r(P, j, O, k, L[l + On], J, xn)),
        (k = r(k, P, j, O, L[Ie(l, Re)], Q, sn)),
        (O = r(O, k, P, j, L[l + et], q, Vt)),
        (j = r(j, O, k, P, L[l + qe], W, dn)),
        (P = r(P, j, O, k, L[Ie(l, te)], J, N)),
        (k = r(k, P, j, O, L[l + xt], Q, St)),
        (O = r(O, k, P, j, L[l + je], q, Ue)),
        (j = r(j, O, k, P, L[Ie(l, de)], W, Ut)),
        (P = r(P, j, O, k, L[Ie(l, zt)], J, yt)),
        (O = i(O, (k = r(k, P, j, O, L[Ie(l, Tt)], Q, be)), P, j, L[Ie(l, Pn)], tt, u)),
        (j = i(j, O, k, P, L[Ie(l, On)], rt, d)),
        (P = i(P, j, O, k, L[Ie(l, xt)], at, Ze)),
        (k = i(k, P, j, O, L[l + jt], ct, ze)),
        (O = i(O, k, P, j, L[Ie(l, Fe)], tt, H)),
        (j = i(j, O, k, P, L[Ie(l, te)], rt, gt)),
        (P = i(P, j, O, k, L[l + Tt], at, Ye)),
        (k = i(k, P, j, O, L[l + b], ct, Xe)),
        (O = i(O, k, P, j, L[l + qe], tt, Be)),
        (j = i(j, O, k, P, L[Ie(l, zt)], rt, _n)),
        (P = i(P, j, O, k, L[Ie(l, In)], at, S)),
        (k = i(k, P, j, O, L[Ie(l, et)], ct, Ce)),
        (O = i(O, k, P, j, L[Ie(l, de)], tt, An)),
        (j = i(j, O, k, P, L[l + kt], rt, M)),
        (P = i(P, j, O, k, L[l + Re], at, ve)),
        (O = o(O, (k = i(k, P, j, O, L[Ie(l, je)], ct, D)), P, j, L[Ie(l, Fe)], ut, bn)),
        (j = o(j, O, k, P, L[Ie(l, et)], pt, m)),
        (P = o(P, j, O, k, L[Ie(l, xt)], dt, G)),
        (k = o(k, P, j, O, L[Ie(l, zt)], vt, vn)),
        (O = o(O, k, P, j, L[Ie(l, Pn)], ut, pe)),
        (j = o(j, O, k, P, L[Ie(l, b)], pt, Cn)),
        (P = o(P, j, O, k, L[Ie(l, Re)], dt, Kt)),
        (k = o(k, P, j, O, L[Ie(l, te)], vt, mn)),
        (O = o(O, k, P, j, L[l + de], ut, re)),
        (j = o(j, O, k, P, L[Ie(l, jt)], pt, En)),
        (P = o(P, j, O, k, L[l + In], dt, qt)),
        (k = o(k, P, j, O, L[Ie(l, On)], vt, s)),
        (O = o(O, k, P, j, L[Ie(l, qe)], ut, $t)),
        (j = o(j, O, k, P, L[Ie(l, je)], pt, mt)),
        (P = o(P, j, O, k, L[Ie(l, Tt)], dt, $)),
        (O = a(O, (k = o(k, P, j, O, L[Ie(l, kt)], vt, ce)), P, j, L[Ie(l, jt)], bt, $e)),
        (j = a(j, O, k, P, L[Ie(l, Re)], Ot, R)),
        (P = a(P, j, O, k, L[Ie(l, zt)], Et, xe)),
        (k = a(k, P, j, O, L[Ie(l, Fe)], At, lt)),
        (O = a(O, k, P, j, L[Ie(l, je)], bt, jn)),
        (j = a(j, O, k, P, L[Ie(l, In)], Ot, he)),
        (P = a(P, j, O, k, L[Ie(l, te)], Et, He)),
        (k = a(k, P, j, O, L[l + Pn], At, _t)),
        (O = a(O, k, P, j, L[Ie(l, et)], bt, nt)),
        (j = a(j, O, k, P, L[Ie(l, Tt)], Ot, K)),
        (P = a(P, j, O, k, L[Ie(l, On)], Et, it)),
        (k = a(k, P, j, O, L[Ie(l, de)], At, oe)),
        (O = a(O, k, P, j, L[l + b], bt, Xt)),
        (j = a(j, O, k, P, L[Ie(l, xt)], Ot, Ke)),
        (P = a(P, j, O, k, L[l + kt], Et, yn)),
        (k = a(k, P, j, O, L[Ie(l, qe)], At, Ct)),
        (O = n(O, p)),
        (k = n(k, g)),
        (P = n(P, _)),
        (j = n(j, w));
    return Ie(Ie(Ie(f(O), f(k)), f(P)), f(j)).toLowerCase();
  }
  for (
    var Wn = [],
      Gn = [],
      Kn = (function (t, e) {
        return t !== e;
      })("undefined" == typeof Uint8Array ? "undefined" : i(Uint8Array), "undefined")
        ? Uint8Array
        : Array,
      Xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Jn = jt,
      Yn = Xn.length;
    Jn < Yn;
    ++Jn
  )
    (Wn[Jn] = Xn[Jn]), (Gn[Xn.charCodeAt(Jn)] = Jn);
  function Zn(t, e, n) {
    for (var r, i = [], o = e; ke(o, n); o += In) (r = Ie((t[o] << B) + (t[o + Pn] << et), t[Ie(o, kt)])), i.push(Qn(r));
    return i.join("");
  }
  function Qn(t) {
    return Ie(Ie(Wn[(t >> nn) & ht], Wn[(t >> je) & ht]) + Wn[(t >> On) & ht], Wn[t & ht]);
  }
  function tr(t) {
    var e,
      n,
      r,
      i,
      o,
      a = t.length;
    (i = (function (t) {
      var e = t.length;
      if (ne(e % b, jt)) throw new Error("Invalid string. Length must be a multiple of 4");
      return Rt(t[I(e, kt)], "=") ? kt : Rt(t[e - Pn], "=") ? Pn : jt;
    })(t)),
      (o = new Kn(I(wt(Lt(a, In), b), i))),
      (n = ne(i, jt) ? I(a, b) : a);
    var c = jt;
    for (e = jt; e < n; e += b) (r = (Gn[t.charCodeAt(e)] << nn) | (Gn[t.charCodeAt(Ie(e, Pn))] << je) | (Gn[t.charCodeAt(Ie(e, kt))] << On) | Gn[t.charCodeAt(e + In)]), (o[c++] = (r >> B) & ot), (o[c++] = (r >> et) & ot), (o[c++] = r & ot);
    return Rt(i, kt) ? ((r = (Gn[t.charCodeAt(e)] << kt) | (Gn[t.charCodeAt(Ie(e, Pn))] >> b)), (o[c++] = r & ot)) : i === Pn && ((r = (Gn[t.charCodeAt(e)] << te) | (Gn[t.charCodeAt(e + Pn)] << b) | (Gn[t.charCodeAt(Ie(e, kt))] >> kt)), (o[c++] = (r >> et) & ot), (o[c++] = r & ot)), o;
  }
  function er(t) {
    for (var e, n, r = [], i = jt, o = ye; ; ) {
      switch (Ee[i++] ^ o) {
        case Qe:
          o = rt;
          for (var a = jt; ke(a, e); a++) (n = t.charCodeAt(a)) >= C && A(n, We) ? (r.push(((n >> nn) & Re) | Y), r.push(((n >> je) & ht) | ue), r.push(((n >> On) & ht) | ue), r.push((n & ht) | ue)) : F(n, en) && A(n, Je) ? (r.push(((n >> je) & Tt) | se), r.push(((n >> On) & ht) | ue), r.push((n & ht) | ue)) : n >= ue && A(n, Le) ? (r.push(((n >> On) & wn) | Ne), r.push((n & ht) | ue)) : r.push(n & ot);
          continue;
        case [(o = B), It][Pn]:
          e = t.length;
          continue;
        case W:
          return (o = On), r;
      }
      break;
    }
  }
  function nr(t) {
    for (var e, n = t.length, r = n % In, i = "", o = [], a = fn, c = jt, u = Se; ; ) {
      switch (Ee[c++] ^ u) {
        case [(u = b), Sn][Pn]:
          return o.join("");
        case Tn:
          (u = f), o.push(i);
          continue;
        case Re:
          (u = h), Rt(r, Pn) ? ((e = t[I(n, Pn)]), (i += Wn[e >> kt]), (i += Wn[(e << b) & ht]), (i += "==")) : Rt(r, kt) && ((e = Ie(t[I(n, kt)] << et, t[I(n, Pn)])), (i += Wn[e >> te]), (i += Wn[(e >> b) & ht]), (i += Wn[(e << kt) & ht]), (i += "="));
          continue;
        case [(u = je), vt][Pn]:
          for (var s = jt, l = I(n, r); ke(s, l); s += a) o.push(Zn(t, s, ne(Ie(s, a), l) ? l : Ie(s, a)));
          continue;
      }
      break;
    }
  }
  function rr(t, e) {
    for (var n = "", r = jt, i = fe; ; ) {
      switch (Ee[r++] ^ i) {
        case Q:
          return (i = b), n;
        case [(i = Ve), rn][Pn]:
          for (var o = jt; ke(o, t.length); o++) {
            var a = t.charCodeAt(o) ^ e.charCodeAt(an(o, et));
            n += String.fromCharCode(a);
          }
          continue;
      }
      break;
    }
  }
  function ir(t) {
    for (var e = "", n = jt, r = on; ; ) {
      switch (Ee[n++] ^ r) {
        case ht:
          return (r = Re), e;
        case [(r = k), pn][Pn]:
          for (var i = jt; i < t.length; i++) e += String.fromCharCode(t[i]);
          continue;
      }
      break;
    }
  }
  function or(t, e, n, r, i) {
    t = i
      ? tr(t)
      : unescape(encodeURIComponent(t))
          .split("")
          .map(function (t) {
            return t.charCodeAt();
          });
    for (var o = e, a = [], c = [], u = [], s = o.length, f = t.length, l = n ? an(n, In) : jt, p = r ? an(r, ge) : jt, d = jt; ke(d, at); d++) (c[d] = o[an(d, s)].charCodeAt()), (u[d] = d);
    for (var h = jt, v = (h = jt); ke(h, at); h++) {
      v = Ie(Ie(Ie(v, u[h]), c[h]), Rt(l, jt) ? p : jt) % at;
      var g = u[h];
      (u[h] = u[v]), (u[v] = g);
    }
    for (var _ = jt, y = jt, m = kn; ; ) {
      switch (Ee[y++] ^ m) {
        case Ht:
          m = Ot;
          for (var b = (_ = h = jt); ke(h, f); h++) {
            (b = an(Ie(b, Pn) + (Rt(l, Pn) ? p : jt), at)), (_ = an(Ie(_, u[b]), at));
            var w = u[b];
            (u[b] = u[_]), (u[_] = w);
            var S = u[an(Ie(u[b] + u[_], Rt(l, kt) ? p : jt), at)];
            a.push(t[h] ^ S);
          }
          continue;
        case [(m = Qt), Ge][Pn]:
          h = jt;
          continue;
        case gn:
          return (m = kt), i ? decodeURIComponent(escape(ir(a))) : nr(a);
      }
      break;
    }
  }
  function ar(t, e, n) {
    var r,
      i = wx.getStorageSync("sk");
    if (e) {
      var o = /\(([^)]+)\)/.exec(e);
      o && (r = o[Pn]);
    }
    var a = nr(er(rr("cSwYtmnBrCzOeX14", zn(i ? "".concat(i).concat($n) : r || $n).toString()))),
      c = jt;
    zn(Bn)
      .toString()
      .split("")
      .map(function (t) {
        c += t.charCodeAt();
      });
    for (var u = jt, s = jt, f = h; ; ) {
      switch (Ee[s++] ^ f) {
        case _e:
          return (f = qe), "".concat(zn(t).toString()).concat(or(t, a, c, u));
        case [(f = X), cn][Pn]:
          zn(a)
            .toString()
            .split("")
            .map(function (t) {
              u += t.charCodeAt();
            });
          continue;
      }
      break;
    }
  }
  function cr(t) {
    var e = nr(er(rr("cSwYtmnBrCzOeX14", $n))),
      n = jt;
    zn(Bn)
      .toString()
      .split("")
      .map(function (t) {
        n += t.charCodeAt();
      });
    var r = jt;
    return (
      zn(e)
        .toString()
        .split("")
        .map(function (t) {
          r += t.charCodeAt();
        }),
      or(t, e, n, r, Pn)
    );
  }
  function ur(t) {
    var e;
    if (t.dua) {
      var n = /\(([^)]+)\)/.exec(t.dua);
      n && (e = n[Pn]);
    }
    var r = zn(t.sk ? "".concat(t.sk).concat($n) : e || $n).toString(),
      i = nr(er(rr(Un, r))),
      o = jt;
    zn(Nn)
      .toString()
      .split("")
      .map(function (t) {
        o += t.charCodeAt();
      });
    var a = jt;
    zn(i)
      .toString()
      .split("")
      .map(function (t) {
        a += t.charCodeAt();
      });
    var c = or(JSON.stringify(t), Un);
    return or(c, i, o, a);
  }
  function sr(t, e) {
    var n = nr(er(rr(Un, e($n).toString()))),
      r = jt;
    e(Nn)
      .toString()
      .split("")
      .map(function (t) {
        r += t.charCodeAt();
      });
    var i = jt;
    return (
      e(n)
        .toString()
        .split("")
        .map(function (t) {
          i += t.charCodeAt();
        }),
      or(or(t, Un, null, null, Pn), n, r, i, Pn)
    );
  }
  function fr(t, e, n, r) {
    for (var i = jt, c = Sn; ; ) {
      switch (Ee[i++] ^ c) {
        case ut:
          if (((c = Nt), a)) return;
          continue;
        case [(c = Ge), P][Pn]:
          a = !0;
          continue;
        case Oe:
          (c = kt), o.cp(t, n, pr, zn, r);
          break;
        case g:
          (c = kn), e && (o = e);
          continue;
        case [(c = ye), ge][Pn]:
          Fn = new Date().valueOf();
          continue;
      }
      break;
    }
  }
  function lr(t) {
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "", r = jt, i = jt, o = X; ; ) {
      switch (Ee[i++] ^ o) {
        case Ae:
          for (o = Mt; ke(r, t.length); ) {
            var a = e.indexOf(t.charAt(r++)),
              c = e.indexOf(t.charAt(r++)),
              u = e.indexOf(t.charAt(r++)),
              s = e.indexOf(t.charAt(r++)),
              f = (a << kt) | (c >> b),
              l = ((c & Tt) << b) | (u >> kt),
              p = ((u & In) << On) | s;
            (n += String.fromCharCode(f)), u !== ge && (n += String.fromCharCode(l)), s !== ge && (n += String.fromCharCode(p));
          }
          continue;
        case [(o = w), me][Pn]:
          t = t.replace(/[^A-Za-z0-9+/=]/g, "");
          continue;
        case ht:
          return (o = In), n;
      }
      break;
    }
  }
  function pr(t, e, n, r) {
    for (var i = "", o = jt, c = Et; ; ) {
      switch (Ee[o++] ^ c) {
        case [(c = Ae), gn][Pn]:
          e.dua &&
            ("z" === n
              ? t.setStorageSync({
                  key: "ua",
                  data: e.dua,
                })
              : t.setStorageSync("ua", e.dua));
          continue;
        case W:
          c = In;
          try {
            e && (i = ur(e));
          } catch (t) {
            console.log(t), (i = "11000");
          }
          break;
        case w:
          (c = rt), (Rn = e.iud);
          continue;
      }
      break;
    }
    for (
      var u,
        s = {
          data: i,
        },
        f =
          {
            t1: "https://t1-dav.shizhuang-inc.net",
            pre: "https://t1-dav.shizhuang-inc.net",
            pro: "https://dav.dewu.com",
          }[t.getStorageSync("fan_pa_env")] || "https://dav.dewu.com",
        l = jt,
        p = _;
      ;

    ) {
      switch (Ee[l++] ^ p) {
        case [(p = Et), L][Pn]:
          if (e.dua) {
            var d = /\(([^)]+)\)/.exec(e.dua);
            d && (u = d[Pn]);
          }
          continue;
        case Mt:
          (p = Fe),
            Rt(n, "z")
              ? t
                  .request({
                    url: "".concat(f, "/webSk"),
                    method: "POST",
                    headers: {
                      dsn: "p="
                        .concat(n, "&d=xr&bcn=")
                        .concat("dewu", "&bcv=")
                        .concat(Nn, "&sk=")
                        .concat(e.sk || "", "&ag=")
                        .concat(u ? zn(u).toString() : ""),
                    },
                    data: s,
                  })
                  .catch(function (e) {
                    a = !1;
                    try {
                      var i = sr(e.data, zn),
                        o = lr(JSON.parse(i).k);
                      Rt(n, "z")
                        ? t.getStorageSync({
                            key: "sk",
                          }).data || ""
                        : t.getStorageSync("sk") || "";
                      var c = o;
                      Rt(n, "z")
                        ? t.setStorageSync({
                            key: "sk",
                            data: c,
                          })
                        : t.setStorageSync("sk", c),
                        r && r(o);
                    } catch (t) {
                      (a = !1), r && r("");
                    }
                  })
              : wx.request({
                  url: "".concat(f, "/webSk"),
                  method: "POST",
                  header: {
                    dsn: "p="
                      .concat(n, "&d=xr&bcn=")
                      .concat("dewu", "&bcv=")
                      .concat(Nn, "&sk=")
                      .concat(e.sk || "", "&ag=")
                      .concat(u ? zn(u).toString() : ""),
                  },
                  data: s,
                  success: function (e) {
                    a = !1;
                    try {
                      var i = sr(e.data, zn),
                        o = lr(JSON.parse(i).k);
                      "z" === n
                        ? t.getStorageSync({
                            key: "sk",
                          }).data || ""
                        : t.getStorageSync("sk") || "";
                      var c;
                      if (((c = o), Rt(n, "z")))
                        t.setStorageSync({
                          key: "sk",
                          data: c,
                        });
                      else t.setStorageSync("sk", c), (qn = new Date().valueOf()), dr(I(qn, Fn), c, f);
                      r && r(o);
                    } catch (t) {
                      r && r("");
                    }
                  },
                  error: function () {
                    (a = !1), r && r("");
                  },
                });
      }
      break;
    }
  }
  function dr(t, e, n) {
    console.log("进入reportCost", t, e, n);
    try {
      if (wx.getRendererUserAgent)
        try {
          wx.getRendererUserAgent.then(function (n) {
            console.log("ua1"), r(t, e, n);
          });
        } catch (n) {
          console.log("ua2"), r(t, e, "", n);
        }
      else console.log("ua3"), r(t, e);
    } catch (t) {
      console.log("err", t);
    }
    function r(t, e, r, i) {
      console.log("reportData", t, e, r, i);
      var o = "",
        a = "";
      try {
        a = JSON.stringify({
          bty: "jbwxct",
          cost: t,
          ua: r,
          bcv: Nn,
          bcn: "dewu",
          brand: wx.getSystemInfoSync().brand,
          model: wx.getSystemInfoSync().model,
          version: wx.getSystemInfoSync().version,
          system: wx.getSystemInfoSync().system,
          platform: wx.getSystemInfoSync().platform,
          benchmarkLevel: wx.getSystemInfoSync().benchmarkLevel,
          enableDebug: wx.getSystemInfoSync().enableDebug,
          sk: e,
          error: i,
        });
      } catch (t) {
        console.log("转json出错", t);
      }
      console.log("转json后", a);
      try {
        (o = hr(a, "AUIDFTY4473768U92SGDUHDITJF")), console.log("成功加密后", o);
      } catch (t) {
        console.log("加密埋点出错", t);
      }
      console.log("埋点密文", o);
      try {
        wx.request({
          url: "".concat(n, "/pr"),
          method: "POST",
          data: o,
          success: function () {
            console.log("reportCost成功回调");
          },
          error: function () {
            console.log("reportCost失败回调");
          },
        });
      } catch (t) {
        console.log("网络请求出错", t);
      }
    }
  }
  function hr(t, e) {
    t = t || "";
    for (var n = e, r = "", i = [], o = [], a = n.length, c = t.length, u = jt; ke(u, at); u++) (i[u] = n[an(u, a)].charCodeAt()), (o[u] = u);
    for (var s = jt, f = (s = jt); ke(s, at); s++) {
      f = an(Ie(Ie(f, o[s]), i[s]), at);
      var l = o[s];
      (o[s] = o[f]), (o[f] = l);
    }
    for (var p = jt, d = jt, h = O; ; ) {
      switch (Ee[d++] ^ h) {
        case De:
          h = qe;
          for (var v = (p = s = jt); s < c; s++) {
            (v = an(Ie(v, Pn), at)), (p = an(Ie(p, o[v]), at));
            var g = o[v];
            (o[v] = o[p]), (o[p] = g);
            var _ = o[an(o[v] + o[p], at)];
            r += String.fromCharCode(t[s].charCodeAt() ^ _);
          }
          break;
        case [(h = tn), Zt][Pn]:
          s = jt;
          continue;
      }
      break;
    }
    return (function (t) {
      for (var e = "", n = t.length, r = jt; ke(r, n); r++) e += String.fromCharCode(t[r]);
      return (function (t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          n = "",
          r = jt;
        for (; ke(r, t.length); ) {
          var i = t.charCodeAt(r++),
            o = t.charCodeAt(r++),
            a = t.charCodeAt(r++),
            c = (i << B) | (o << et) | a,
            u = c & ht;
          n += Ie(Ie(e[(c >> nn) & ht] + e[(c >> je) & ht], e[(c >> On) & ht]), e[u]);
        }
        var s = t.length % In,
          f = jt,
          l = Zt;
        for (;;) {
          switch (Ee[f++] ^ l) {
            case [(l = O), O][Pn]:
              Rt(s, Pn) ? (n = Ie(n.slice(jt, -kt), "==")) : Rt(s, kt) && (n = Ie(n.slice(jt, -Pn), "="));
              continue;
            case pn:
              return (l = Fe), n;
          }
          break;
        }
      })(e);
    })(er(r));
  }
  (Gn["-".charCodeAt(jt)] = P),
    (Gn["_".charCodeAt(jt)] = ht),
    (tBreezy.exports = {
      Fun110: function (t, eMethod, n) {
        var r, i;
        Rt(n, "wx") ? (r = wx) : "qq" === n ? (r = qq) : Rt(n, "dy") ? (r = tt) : Rt(n, "bd") ? (r = swan) : "zfb" === n && (r = my);
        for (var o = jt, a = dt; ; ) {
          switch (Ee[o++] ^ a) {
            case [(a = Zt), pt][Pn]:
              i = Rt(n, "zfb")
                ? r.getStorageSync({
                    key: "ua",
                  }).data
                : wx.getStorageSync("ua");
              continue;
            case on:
              (a = qe), (Dn = wx.getStorageSync("enT") || "1");
          }
          break;
        }
        for (var c = "", u = "0", s = t, f = eMethod || "post", l = jt, p = ct; ; ) {
          switch (Ee[l++] ^ p) {
            case [(p = Q), un][Pn]:
              if (Rt(f.toLocaleLowerCase(), "get"))
                try {
                  !(function () {
                    var e = [],
                      n = JSON.parse(t);
                    Object.keys(n).map(function (t) {
                      return e.push("".concat(t, "=").concat(encodeURIComponent(n[t]))), t;
                    }),
                      (s = e.join("&"));
                  })();
                } catch (t) {}
              continue;
            case Ve:
              if (((p = V), "0" === String(Dn)))
                return {
                  a: Hn(It, B),
                  b: Hn(It, B),
                  c: "".concat(Dn, ",").concat(Bn),
                  d: t,
                  e: Hn(It, B),
                };
              continue;
            case et:
              p = At;
              try {
                s && ((c = ar(s, i)), (u = "1"));
              } catch (t) {
                (c = s), (u = kt);
              }
              continue;
            case [(p = et), ie][Pn]:
              return {
                c: "".concat(u, ",").concat(Bn),
                d: Rt(u, kt)
                  ? c
                  : JSON.stringify({
                      data: "".concat(c),
                    }),
              };
          }
          break;
        }
      },
      Fun99: function (t, e, r, o, a) {
        var c;
        c = Rt(i(t), "object") ? JSON.stringify(t) : t;
        for (var u, s = n(r ? r.split(",") : ["1", "1"], 2), f = s[0], p = s[1], d = jt, h = ie; ; ) {
          switch (Ee[d++] ^ h) {
            case [(h = un), P][Pn]:
              Rt(o, "wx") ? (u = wx) : Rt(o, "qq") ? (u = qq) : Rt(o, "dy") ? (u = tt) : "bd" === o ? (u = swan) : "zfb" === o && (u = my);
              continue;
            case L:
              if (((h = w), Rt(f, "1"))) {
                var v = void 0;
                try {
                  v = cr(c);
                } catch (t) {
                  console.log("解密失败-----------", t), (v = c);
                }
                return Rt(i(v), "object") ? JSON.stringify(v) : v;
              }
              continue;
            case Ft:
              (h = l),
                a ||
                  ((Dn = p),
                  Rt(o, "zfb")
                    ? u.setStorageSync({
                        key: "enT",
                        data: p,
                      })
                    : u.setStorageSync("enT", p));
              continue;
            case [(h = kt), rn][Pn]:
              return "object" === i(t) ? JSON.stringify(t) : t;
          }
          break;
        }
      },
      init: fr,
      getSk: function (t) {
        for (var e, n = jt, r = rt; ; ) {
          switch (Ee[n++] ^ r) {
            case Gt:
              return (r = qe), e;
            case [(r = Wt), Q][Pn]:
              Rt(t, "wx")
                ? (e = wx.getStorageSync("sk") ? wx.getStorageSync("sk").split("​")[jt] : "")
                : Rt(t, "qq")
                ? (e = qq.getStorageSync("sk") ? qq.getStorageSync("sk").split("​")[jt] : "")
                : Rt(t, "dy")
                ? (e = tt.getStorageSync("sk") ? tt.getStorageSync("sk").split("​")[jt] : "")
                : Rt(t, "bd")
                ? (e = swan.getStorageSync("sk") ? swan.getStorageSync("sk").split("​")[jt] : "")
                : "zfb" === t &&
                  (e = my.getStorageSync({
                    key: "sk",
                  })
                    ? my
                        .getStorageSync({
                          key: "sk",
                        })
                        .split("​")[jt]
                    : "");
              continue;
          }
          break;
        }
      },
      bindUser: function (t, e) {
        fr(t, null, null, e);
      },
      getLtk: function (t) {
        for (var e, n, r = jt, i = q; ; ) {
          switch (Ee[r++] ^ i) {
            case ht:
              return (i = qe), e;
            case [(i = It), Mt][Pn]:
              Rt(t, "wx") ? (n = wx) : Rt(t, "qq") ? (n = qq) : "dy" === t ? (n = tt) : Rt(t, "bd") ? (n = swan) : Rt(t, "zfb") && (n = my);
              continue;
            case l:
              (i = Mt),
                n.getSystemInfo({
                  success: function (t) {
                    var n = Hn(h),
                      r = Math.floor(new Date().valueOf() / hn);
                    e = hr("".concat(Rn.substr(B, B)).concat(r).concat(n.substr(B, B)).concat(t.windowHeight), Vn);
                  },
                });
              continue;
          }
          break;
        }
      },
      getRtk: function (t, e) {
        for (var r, i = jt, o = je; ; ) {
          switch (Ee[i++] ^ o) {
            case [(o = O), te][Pn]:
              Mn.map(function (i, o) {
                var a = n(i.split[":"], 2),
                  c = a[0],
                  u = a[1];
                Rt(c, "".concat(t, ",").concat(e || "")) && ((r = u), o);
              });
              continue;
            case pn:
              if (((o = kt), r)) return r;
          }
          break;
        }
        for (var a, c = Math.floor(new Date().valueOf() / hn), u = jt, s = nn; ; ) {
          switch (Ee[u++] ^ s) {
            case kn:
              (s = p), Ln++;
              continue;
            case [(s = bt), we][Pn]:
              Rt(Mn.length, Pe) && Mn.shift();
              continue;
            case Nt:
              return (s = kt), r;
            case ee:
              (s = Tt),
                Mn.push(
                  ""
                    .concat(t, ",")
                    .concat(e || "", ":")
                    .concat(r)
                );
              continue;
            case [(s = f), Pe][Pn]:
              a = ke(Ln, te) ? "00".concat(Ln) : ke(Ln, Qt) ? "0".concat(Ln) : Ln < hn ? Ln : "max";
              continue;
            case J:
              (s = Yt),
                (r = or(
                  ""
                    .concat(Rn.substr(B, B))
                    .concat(c)
                    .concat(a)
                    .concat("1", "w")
                    .concat(t)
                    .concat(e || ""),
                  Vn
                ));
              continue;
          }
          break;
        }
      },
    });
  return tBreezy;
})();

export function getSign(t, e, n = false) {
  void 0 === e && (e = "048a9c4943398714b356a696503d2d36"), void 0 === n && (n = !1), n && console.log("转化前params=", t);
  var r = function (t, e) {
      return null === e ? void 0 : e;
    },
    i = Object.keys(t)
      .sort()
      .reduce(function (e, n) {
        return void 0 === t[n]
          ? e
          : e +
              n +
              (function (t) {
                if ([void 0, null, ""].includes(t)) return "";
                if ("[object Object]" === Object.prototype.toString.call(t)) return JSON.stringify(t, r);
                if (Array.isArray(t)) {
                  var e = "";
                  return (
                    t.forEach(function (n, i) {
                      "[object Object]" === Object.prototype.toString.call(n) ? (e += JSON.stringify(n, r)) : [void 0, null].includes(n) ? (e += null) : (e += n.toString()), i < t.length - 1 && (e += ",");
                    }),
                    e
                  );
                }
                return t.toString();
              })(t[n]);
      }, "");
  return (
    n && (console.log("转化后paramsToken=", i), console.log("salt=", e)),
    /[\u00A0\u3000]/g.test(i) && console.warn("验签警告：请先去除非法字符\\u00A0，\\u3000"),
    // P就是MD5输出hex字符串
    CryptoJS.MD5(i + e).toString()
  );
}

function y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? _(Object(n), !0).forEach(function (e) {
          m(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : _(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
  }
  return t;
}

function _(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}

function m(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}

var ua = " Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.64(0x18004034) NetType/WIFI Language/zh_CN miniProgram/wx3c12cdd0ae8b1a7b";
// var ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555"
var wx = {
  getStorageSync: function (key) {
    switch (key) {
      case "sk":
        // 这是是会动态变化的
        return "9RcOSMgZACTrPICrVwru1MZY743ZFEhKPtg0lz4lfvCFWqEzbyIoFEe1lvxWcSZeChBOmu8JulvxsFSkzeCCPHZVTH1z";
      // return "9RcOKhzT17ouO0rrvj11rbvQV4SRXr9PbYBidv0ENXb5bsgHkIFC9djL7OPKyj8XZwNXR6DZc90oTOLnSWyTUTBa3q1u";
      case "ua":
        return ua;
      case "enT":
        return "1";
      default:
        console.log("未定义的key", key);
        break;
    }
  },
  // setStorageSync: function (key, value) {
  //     console.log("setStorageSync", key, value);
  // },
};

const reqData = {
  extDatas: [{ name: "source", value: "wxmini" }],
  abTests: [
    { name: "572_consolegame", value: "1" },
    { name: "536_Labelgeneration", value: "3" },
    { name: "540_GoodsStory", value: "1" },
    { name: "540_FirstContent", value: "5" },
    { name: "2024_detail_20", value: "11" },
    { name: "536_Labelgeneration", value: "11" },
  ],
  dressUpReqMap: { source: 0, limit: 12, productId: 14562684, cSpuPropertyValueId: 0, firstSpuId: 0, firstPropertyValueId: 0, ab539CdjxBodyinfo: "0", ab540Deletesidebar: "0", switchoverMinPic: "", ab525JingXuanMerge: "2", ab534DpVideo: "0" },
  appraiseReqMap: { spuId: 14562684, propertyValueId: 0, abFields: { v535LV6wd: "0", abDetailpageSize: "0", v544NewDpModel: "0" } },
  buyLayerReq: {
    bizDetailReq: { openId: "ouhDM4mnlPZd6d3poaSRhVrSR2kw", appId: "wxapp", extraMap: { app_type: "wxapp" } },
    extMap: { appId: "wxapp" },
    anchorId: 0,
    extBodys: [
      { name: "gmfcpmd492", value: "0" },
      { name: "550_shixiao", value: "1" },
      { name: "detail2023promo", value: "0" },
      { name: "5.30_fenqiWenan", value: "0" },
      { name: "543_price", value: "0" },
      { name: "543_lmsd", value: "0" },
      { name: "544youhui", value: "0" },
      { name: "545dingzi", value: "0" },
      { name: "544xdk", value: "0" },
      { name: "scene", value: "commodityDetail" },
      { name: "businessDetailVersion", value: "V2" },
    ],
    mainSpuId: 0,
    sourceFrom: "",
    spuId: 14562684,
  },
  propertyValueId: 484817381,
  spuId: 14562684,
  openId: "ouhDM4mnlPZd6d3poaSRhVrSR2kw",
  isFirst: true,
};

// const sign = getSign(reqData);
// const sign = getSign(reqData, "19bc545a393a25177083d4a748807cc0", false);
const sign = getSign(reqData);
console.log("sign", sign);
const transParams = y({ sign }, reqData);
console.log(obj.exports.Fun110(JSON.stringify(transParams)));
