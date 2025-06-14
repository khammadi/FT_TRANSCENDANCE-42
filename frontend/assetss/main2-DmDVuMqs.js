import Router from "../router.js";

const qu = "modulepreload",
  Ku = function (s) {
    return "/" + s;
  },
  oc = {},
  ci = function (e, t, n) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        o =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      i = Promise.allSettled(
        t.map((c) => {
          if (((c = Ku(c)), c in oc)) return;
          oc[c] = !0;
          const l = c.endsWith(".css"),
            u = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${u}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = l ? "stylesheet" : qu),
            l || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            o && h.setAttribute("nonce", o),
            document.head.appendChild(h),
            l)
          )
            return new Promise((d, p) => {
              h.addEventListener("load", d),
                h.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${c}`)),
                );
            });
        }),
      );
    }
    function r(a) {
      const o = new Event("vite:preloadError", { cancelable: !0 });
      if (((o.payload = a), window.dispatchEvent(o), !o.defaultPrevented))
        throw a;
    }
    return i.then((a) => {
      for (const o of a || []) o.status === "rejected" && r(o.reason);
      return e().catch(r);
    });
  };
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Mo = "166",
  fi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  pi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  ju = 0,
  cc = 1,
  Zu = 2,
  Wl = 1,
  $u = 2,
  xn = 3,
  En = 0,
  Nt = 1,
  an = 2,
  Vn = 0,
  ki = 1,
  lc = 2,
  uc = 3,
  hc = 4,
  Ju = 5,
  ii = 100,
  Qu = 101,
  eh = 102,
  th = 103,
  nh = 104,
  ih = 200,
  sh = 201,
  rh = 202,
  ah = 203,
  Ua = 204,
  Oa = 205,
  oh = 206,
  ch = 207,
  lh = 208,
  uh = 209,
  hh = 210,
  dh = 211,
  fh = 212,
  ph = 213,
  mh = 214,
  gh = 0,
  _h = 1,
  xh = 2,
  Cr = 3,
  vh = 4,
  Mh = 5,
  yh = 6,
  Sh = 7,
  Xl = 0,
  Eh = 1,
  Th = 2,
  Gn = 0,
  Ah = 1,
  bh = 2,
  wh = 3,
  Rh = 4,
  Ch = 5,
  Ph = 6,
  Lh = 7,
  dc = "attached",
  Ih = "detached",
  Yl = 300,
  Yi = 301,
  qi = 302,
  Fa = 303,
  Ba = 304,
  Br = 306,
  Ki = 1e3,
  kn = 1001,
  Pr = 1002,
  Lt = 1003,
  ql = 1004,
  Ms = 1005,
  kt = 1006,
  yr = 1007,
  yn = 1008,
  Tn = 1009,
  Kl = 1010,
  jl = 1011,
  bs = 1012,
  yo = 1013,
  ai = 1014,
  tn = 1015,
  Ls = 1016,
  So = 1017,
  Eo = 1018,
  ji = 1020,
  Zl = 35902,
  $l = 1021,
  Jl = 1022,
  Xt = 1023,
  Ql = 1024,
  eu = 1025,
  Hi = 1026,
  Zi = 1027,
  To = 1028,
  Ao = 1029,
  tu = 1030,
  bo = 1031,
  wo = 1033,
  Sr = 33776,
  Er = 33777,
  Tr = 33778,
  Ar = 33779,
  za = 35840,
  ka = 35841,
  Ha = 35842,
  Va = 35843,
  Ga = 36196,
  Wa = 37492,
  Xa = 37496,
  Ya = 37808,
  qa = 37809,
  Ka = 37810,
  ja = 37811,
  Za = 37812,
  $a = 37813,
  Ja = 37814,
  Qa = 37815,
  eo = 37816,
  to = 37817,
  no = 37818,
  io = 37819,
  so = 37820,
  ro = 37821,
  br = 36492,
  ao = 36494,
  oo = 36495,
  nu = 36283,
  co = 36284,
  lo = 36285,
  uo = 36286,
  ws = 2300,
  Rs = 2301,
  Kr = 2302,
  fc = 2400,
  pc = 2401,
  mc = 2402,
  Dh = 2500,
  Nh = 0,
  iu = 1,
  ho = 2,
  Uh = 3200,
  Oh = 3201,
  Ro = 0,
  Fh = 1,
  Fn = "",
  Pt = "srgb",
  Tt = "srgb-linear",
  Co = "display-p3",
  zr = "display-p3-linear",
  Lr = "linear",
  et = "srgb",
  Ir = "rec709",
  Dr = "p3",
  mi = 7680,
  gc = 519,
  Bh = 512,
  zh = 513,
  kh = 514,
  su = 515,
  Hh = 516,
  Vh = 517,
  Gh = 518,
  Wh = 519,
  fo = 35044,
  _c = "300 es",
  Sn = 2e3,
  Nr = 2001;
class li {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const At = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let xc = 1234567;
const Es = Math.PI / 180,
  $i = 180 / Math.PI;
function nn() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    At[s & 255] +
    At[(s >> 8) & 255] +
    At[(s >> 16) & 255] +
    At[(s >> 24) & 255] +
    "-" +
    At[e & 255] +
    At[(e >> 8) & 255] +
    "-" +
    At[((e >> 16) & 15) | 64] +
    At[(e >> 24) & 255] +
    "-" +
    At[(t & 63) | 128] +
    At[(t >> 8) & 255] +
    "-" +
    At[(t >> 16) & 255] +
    At[(t >> 24) & 255] +
    At[n & 255] +
    At[(n >> 8) & 255] +
    At[(n >> 16) & 255] +
    At[(n >> 24) & 255]
  ).toLowerCase();
}
function Et(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Po(s, e) {
  return ((s % e) + e) % e;
}
function Xh(s, e, t, n, i) {
  return n + ((s - e) * (i - n)) / (t - e);
}
function Yh(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function Ts(s, e, t) {
  return (1 - t) * s + t * e;
}
function qh(s, e, t, n) {
  return Ts(s, e, 1 - Math.exp(-t * n));
}
function Kh(s, e = 1) {
  return e - Math.abs(Po(s, e * 2) - e);
}
function jh(s, e, t) {
  return s <= e
    ? 0
    : s >= t
      ? 1
      : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function Zh(s, e, t) {
  return s <= e
    ? 0
    : s >= t
      ? 1
      : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function $h(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Jh(s, e) {
  return s + Math.random() * (e - s);
}
function Qh(s) {
  return s * (0.5 - Math.random());
}
function ed(s) {
  s !== void 0 && (xc = s);
  let e = (xc += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function td(s) {
  return s * Es;
}
function nd(s) {
  return s * $i;
}
function id(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function sd(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function rd(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function ad(s, e, t, n, i) {
  const r = Math.cos,
    a = Math.sin,
    o = r(t / 2),
    c = a(t / 2),
    l = r((e + n) / 2),
    u = a((e + n) / 2),
    h = r((e - n) / 2),
    d = a((e - n) / 2),
    p = r((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * u, c * h, c * d, o * l);
      break;
    case "YZY":
      s.set(c * d, o * u, c * h, o * l);
      break;
    case "ZXZ":
      s.set(c * h, c * d, o * u, o * l);
      break;
    case "XZX":
      s.set(o * u, c * g, c * p, o * l);
      break;
    case "YXY":
      s.set(c * p, o * u, c * g, o * l);
      break;
    case "ZYZ":
      s.set(c * g, c * p, o * u, o * l);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i,
      );
  }
}
function Qt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function je(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const ru = {
  DEG2RAD: Es,
  RAD2DEG: $i,
  generateUUID: nn,
  clamp: Et,
  euclideanModulo: Po,
  mapLinear: Xh,
  inverseLerp: Yh,
  lerp: Ts,
  damp: qh,
  pingpong: Kh,
  smoothstep: jh,
  smootherstep: Zh,
  randInt: $h,
  randFloat: Jh,
  randFloatSpread: Qh,
  seededRandom: ed,
  degToRad: td,
  radToDeg: nd,
  isPowerOfTwo: id,
  ceilPowerOfTwo: sd,
  floorPowerOfTwo: rd,
  setQuaternionFromProperEuler: ad,
  normalize: je,
  denormalize: Qt,
};
class ge {
  constructor(e = 0, t = 0) {
    (ge.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Et(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Oe {
  constructor(e, t, n, i, r, a, o, c, l) {
    (Oe.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, c, l);
  }
  set(e, t, n, i, r, a, o, c, l) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = o),
      (u[3] = t),
      (u[4] = r),
      (u[5] = c),
      (u[6] = n),
      (u[7] = a),
      (u[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      u = n[4],
      h = n[7],
      d = n[2],
      p = n[5],
      g = n[8],
      x = i[0],
      m = i[3],
      f = i[6],
      E = i[1],
      S = i[4],
      A = i[7],
      D = i[2],
      R = i[5],
      w = i[8];
    return (
      (r[0] = a * x + o * E + c * D),
      (r[3] = a * m + o * S + c * R),
      (r[6] = a * f + o * A + c * w),
      (r[1] = l * x + u * E + h * D),
      (r[4] = l * m + u * S + h * R),
      (r[7] = l * f + u * A + h * w),
      (r[2] = d * x + p * E + g * D),
      (r[5] = d * m + p * S + g * R),
      (r[8] = d * f + p * A + g * w),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8];
    return (
      t * a * u - t * o * l - n * r * u + n * o * c + i * r * l - i * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      h = u * a - o * l,
      d = o * c - u * r,
      p = l * r - a * c,
      g = t * h + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return (
      (e[0] = h * x),
      (e[1] = (i * l - u * n) * x),
      (e[2] = (o * n - i * a) * x),
      (e[3] = d * x),
      (e[4] = (u * t - i * c) * x),
      (e[5] = (i * r - o * t) * x),
      (e[6] = p * x),
      (e[7] = (n * c - l * t) * x),
      (e[8] = (a * t - n * r) * x),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -i * l,
        i * c,
        -i * (-l * a + c * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(jr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(jr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(jr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const jr = new Oe();
function au(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function Cs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function od() {
  const s = Cs("canvas");
  return (s.style.display = "block"), s;
}
const vc = {};
function Lo(s) {
  s in vc || ((vc[s] = !0), console.warn(s));
}
function cd(s, e, t) {
  return new Promise(function (n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
const Mc = new Oe().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199,
  ),
  yc = new Oe().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735,
  ),
  Bs = {
    [Tt]: {
      transfer: Lr,
      primaries: Ir,
      toReference: (s) => s,
      fromReference: (s) => s,
    },
    [Pt]: {
      transfer: et,
      primaries: Ir,
      toReference: (s) => s.convertSRGBToLinear(),
      fromReference: (s) => s.convertLinearToSRGB(),
    },
    [zr]: {
      transfer: Lr,
      primaries: Dr,
      toReference: (s) => s.applyMatrix3(yc),
      fromReference: (s) => s.applyMatrix3(Mc),
    },
    [Co]: {
      transfer: et,
      primaries: Dr,
      toReference: (s) => s.convertSRGBToLinear().applyMatrix3(yc),
      fromReference: (s) => s.applyMatrix3(Mc).convertLinearToSRGB(),
    },
  },
  ld = new Set([Tt, zr]),
  Xe = {
    enabled: !0,
    _workingColorSpace: Tt,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(s) {
      if (!ld.has(s))
        throw new Error(`Unsupported working color space, "${s}".`);
      this._workingColorSpace = s;
    },
    convert: function (s, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return s;
      const n = Bs[e].toReference,
        i = Bs[t].fromReference;
      return i(n(s));
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this._workingColorSpace);
    },
    getPrimaries: function (s) {
      return Bs[s].primaries;
    },
    getTransfer: function (s) {
      return s === Fn ? Lr : Bs[s].transfer;
    },
  };
function Vi(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Zr(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let gi;
class ud {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      gi === void 0 && (gi = Cs("canvas")),
        (gi.width = e.width),
        (gi.height = e.height);
      const n = gi.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = gi);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e,
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Cs("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = Vi(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Vi(t[n] / 255) * 255))
          : (t[n] = Vi(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let hd = 0;
class ou {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: hd++ }),
      (this.uuid = nn()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push($r(i[a].image)) : r.push($r(i[a]));
      } else r = $r(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function $r(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? ud.getDataURL(s)
    : s.data
      ? {
          data: Array.from(s.data),
          width: s.width,
          height: s.height,
          type: s.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let dd = 0;
class gt extends li {
  constructor(
    e = gt.DEFAULT_IMAGE,
    t = gt.DEFAULT_MAPPING,
    n = kn,
    i = kn,
    r = kt,
    a = yn,
    o = Xt,
    c = Tn,
    l = gt.DEFAULT_ANISOTROPY,
    u = Fn,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: dd++ }),
      (this.uuid = nn()),
      (this.name = ""),
      (this.source = new ou(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new ge(0, 0)),
      (this.repeat = new ge(1, 1)),
      (this.center = new ge(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Oe()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Yl) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ki:
          e.x = e.x - Math.floor(e.x);
          break;
        case kn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Pr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ki:
          e.y = e.y - Math.floor(e.y);
          break;
        case kn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Pr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = Yl;
gt.DEFAULT_ANISOTROPY = 1;
class $e {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ($e.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements,
      l = c[0],
      u = c[4],
      h = c[8],
      d = c[1],
      p = c[5],
      g = c[9],
      x = c[2],
      m = c[6],
      f = c[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(h - x) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(h + x) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(l + p + f - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (l + 1) / 2,
        A = (p + 1) / 2,
        D = (f + 1) / 2,
        R = (u + d) / 4,
        w = (h + x) / 4,
        U = (g + m) / 4;
      return (
        S > A && S > D
          ? S < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(S)), (i = R / n), (r = w / n))
          : A > D
            ? A < 0.01
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(A)), (n = R / i), (r = U / i))
            : D < 0.01
              ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
              : ((r = Math.sqrt(D)), (n = w / r), (i = U / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let E = Math.sqrt(
      (m - g) * (m - g) + (h - x) * (h - x) + (d - u) * (d - u),
    );
    return (
      Math.abs(E) < 0.001 && (E = 1),
      (this.x = (m - g) / E),
      (this.y = (h - x) / E),
      (this.z = (d - u) / E),
      (this.w = Math.acos((l + p + f - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class fd extends li {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new $e(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new $e(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: kt,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n,
    );
    const r = new gt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace,
    );
    (r.flipY = !1),
      (r.generateMipmaps = n.generateMipmaps),
      (r.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = r.clone()),
        (this.textures[o].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, r = this.textures.length; i < r; i++)
        (this.textures[i].image.width = e),
          (this.textures[i].image.height = t),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let n = 0, i = e.textures.length; n < i; n++)
      (this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new ou(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class oi extends fd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class cu extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Lt),
      (this.minFilter = Lt),
      (this.wrapR = kn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class pd extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Lt),
      (this.minFilter = Lt),
      (this.wrapR = kn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class sn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let c = n[i + 0],
      l = n[i + 1],
      u = n[i + 2],
      h = n[i + 3];
    const d = r[a + 0],
      p = r[a + 1],
      g = r[a + 2],
      x = r[a + 3];
    if (o === 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (o === 1) {
      (e[t + 0] = d), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = x);
      return;
    }
    if (h !== x || c !== d || l !== p || u !== g) {
      let m = 1 - o;
      const f = c * d + l * p + u * g + h * x,
        E = f >= 0 ? 1 : -1,
        S = 1 - f * f;
      if (S > Number.EPSILON) {
        const D = Math.sqrt(S),
          R = Math.atan2(D, f * E);
        (m = Math.sin(m * R) / D), (o = Math.sin(o * R) / D);
      }
      const A = o * E;
      if (
        ((c = c * m + d * A),
        (l = l * m + p * A),
        (u = u * m + g * A),
        (h = h * m + x * A),
        m === 1 - o)
      ) {
        const D = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        (c *= D), (l *= D), (u *= D), (h *= D);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i],
      c = n[i + 1],
      l = n[i + 2],
      u = n[i + 3],
      h = r[a],
      d = r[a + 1],
      p = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = o * g + u * h + c * p - l * d),
      (e[t + 1] = c * g + u * d + l * h - o * p),
      (e[t + 2] = l * g + u * p + o * d - c * h),
      (e[t + 3] = u * g - o * h - c * d - l * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      u = o(i / 2),
      h = o(r / 2),
      d = c(n / 2),
      p = c(i / 2),
      g = c(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = d * u * h + l * p * g),
          (this._y = l * p * h - d * u * g),
          (this._z = l * u * g + d * p * h),
          (this._w = l * u * h - d * p * g);
        break;
      case "YXZ":
        (this._x = d * u * h + l * p * g),
          (this._y = l * p * h - d * u * g),
          (this._z = l * u * g - d * p * h),
          (this._w = l * u * h + d * p * g);
        break;
      case "ZXY":
        (this._x = d * u * h - l * p * g),
          (this._y = l * p * h + d * u * g),
          (this._z = l * u * g + d * p * h),
          (this._w = l * u * h - d * p * g);
        break;
      case "ZYX":
        (this._x = d * u * h - l * p * g),
          (this._y = l * p * h + d * u * g),
          (this._z = l * u * g - d * p * h),
          (this._w = l * u * h + d * p * g);
        break;
      case "YZX":
        (this._x = d * u * h + l * p * g),
          (this._y = l * p * h + d * u * g),
          (this._z = l * u * g - d * p * h),
          (this._w = l * u * h - d * p * g);
        break;
      case "XZY":
        (this._x = d * u * h - l * p * g),
          (this._y = l * p * h - d * u * g),
          (this._z = l * u * g + d * p * h),
          (this._w = l * u * h + d * p * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            a,
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      u = t[6],
      h = t[10],
      d = n + o + h;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / p),
        (this._x = (u - c) * p),
        (this._y = (r - l) * p),
        (this._z = (a - i) * p);
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      (this._w = (u - c) / p),
        (this._x = 0.25 * p),
        (this._y = (i + a) / p),
        (this._z = (r + l) / p);
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      (this._w = (r - l) / p),
        (this._x = (i + a) / p),
        (this._y = 0.25 * p),
        (this._z = (c + u) / p);
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      (this._w = (a - i) / p),
        (this._x = (r + l) / p),
        (this._y = (c + u) / p),
        (this._z = 0.25 * p);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Et(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + i * l - r * c),
      (this._y = i * u + a * c + r * o - n * l),
      (this._z = r * u + a * l + n * c - i * o),
      (this._w = a * u - n * o - i * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * a + t * this._w),
        (this._x = p * n + t * this._x),
        (this._y = p * i + t * this._y),
        (this._z = p * r + t * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(c),
      u = Math.atan2(l, o),
      h = Math.sin((1 - t) * u) / l,
      d = Math.sin(t * u) / l;
    return (
      (this._w = a * h + this._w * d),
      (this._x = n * h + this._x * d),
      (this._y = i * h + this._y * d),
      (this._z = r * h + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(e = 0, t = 0, n = 0) {
    (P.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Sc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Sc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * i - o * n),
      u = 2 * (o * t - r * i),
      h = 2 * (r * n - a * t);
    return (
      (this.x = t + c * l + a * h - o * u),
      (this.y = n + c * u + o * l - r * h),
      (this.z = i + c * h + r * u - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = i * c - r * o),
      (this.y = r * a - n * c),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Jr.copy(this).projectOnVector(e), this.sub(Jr);
  }
  reflect(e) {
    return this.sub(Jr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Et(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Jr = new P(),
  Sc = new sn();
class An {
  constructor(
    e = new P(1 / 0, 1 / 0, 1 / 0),
    t = new P(-1 / 0, -1 / 0, -1 / 0),
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Kt)
            : Kt.fromBufferAttribute(r, a),
            Kt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Kt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            zs.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            zs.copy(n.boundingBox)),
          zs.applyMatrix4(e.matrixWorld),
          this.union(zs);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Kt),
      Kt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(cs),
      ks.subVectors(this.max, cs),
      _i.subVectors(e.a, cs),
      xi.subVectors(e.b, cs),
      vi.subVectors(e.c, cs),
      Rn.subVectors(xi, _i),
      Cn.subVectors(vi, xi),
      Yn.subVectors(_i, vi);
    let t = [
      0,
      -Rn.z,
      Rn.y,
      0,
      -Cn.z,
      Cn.y,
      0,
      -Yn.z,
      Yn.y,
      Rn.z,
      0,
      -Rn.x,
      Cn.z,
      0,
      -Cn.x,
      Yn.z,
      0,
      -Yn.x,
      -Rn.y,
      Rn.x,
      0,
      -Cn.y,
      Cn.x,
      0,
      -Yn.y,
      Yn.x,
      0,
    ];
    return !Qr(t, _i, xi, vi, ks) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Qr(t, _i, xi, vi, ks))
      ? !1
      : (Hs.crossVectors(Rn, Cn),
        (t = [Hs.x, Hs.y, Hs.z]),
        Qr(t, _i, xi, vi, ks));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Kt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (dn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        dn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        dn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        dn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        dn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        dn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        dn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        dn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(dn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const dn = [
    new P(),
    new P(),
    new P(),
    new P(),
    new P(),
    new P(),
    new P(),
    new P(),
  ],
  Kt = new P(),
  zs = new An(),
  _i = new P(),
  xi = new P(),
  vi = new P(),
  Rn = new P(),
  Cn = new P(),
  Yn = new P(),
  cs = new P(),
  ks = new P(),
  Hs = new P(),
  qn = new P();
function Qr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    qn.fromArray(s, r);
    const o =
        i.x * Math.abs(qn.x) + i.y * Math.abs(qn.y) + i.z * Math.abs(qn.z),
      c = e.dot(qn),
      l = t.dot(qn),
      u = n.dot(qn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
  }
  return !0;
}
const md = new An(),
  ls = new P(),
  ea = new P();
class cn {
  constructor(e = new P(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : md.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    ls.subVectors(e, this.center);
    const t = ls.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ls, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (ea.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(ls.copy(e.center).add(ea)),
              this.expandByPoint(ls.copy(e.center).sub(ea))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const fn = new P(),
  ta = new P(),
  Vs = new P(),
  Pn = new P(),
  na = new P(),
  Gs = new P(),
  ia = new P();
class Is {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, fn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = fn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (fn.copy(this.origin).addScaledVector(this.direction, t),
        fn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ta.copy(e).add(t).multiplyScalar(0.5),
      Vs.copy(t).sub(e).normalize(),
      Pn.copy(this.origin).sub(ta);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Vs),
      o = Pn.dot(this.direction),
      c = -Pn.dot(Vs),
      l = Pn.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, d, p, g;
    if (u > 0)
      if (((h = a * c - o), (d = a * o - c), (g = r * u), h >= 0))
        if (d >= -g)
          if (d <= g) {
            const x = 1 / u;
            (h *= x),
              (d *= x),
              (p = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * c) + l);
          } else
            (d = r),
              (h = Math.max(0, -(a * d + o))),
              (p = -h * h + d * (d + 2 * c) + l);
        else
          (d = -r),
            (h = Math.max(0, -(a * d + o))),
            (p = -h * h + d * (d + 2 * c) + l);
      else
        d <= -g
          ? ((h = Math.max(0, -(-a * r + o))),
            (d = h > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (p = -h * h + d * (d + 2 * c) + l))
          : d <= g
            ? ((h = 0),
              (d = Math.min(Math.max(-r, -c), r)),
              (p = d * (d + 2 * c) + l))
            : ((h = Math.max(0, -(a * r + o))),
              (d = h > 0 ? r : Math.min(Math.max(-r, -c), r)),
              (p = -h * h + d * (d + 2 * c) + l));
    else
      (d = a > 0 ? -r : r),
        (h = Math.max(0, -(a * d + o))),
        (p = -h * h + d * (d + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(ta).addScaledVector(Vs, d),
      p
    );
  }
  intersectSphere(e, t) {
    fn.subVectors(e.center, this.origin);
    const n = fn.dot(this.direction),
      i = fn.dot(fn) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, c;
    const l = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      d = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - d.x) * l), (i = (e.max.x - d.x) * l))
        : ((n = (e.max.x - d.x) * l), (i = (e.min.x - d.x) * l)),
      u >= 0
        ? ((r = (e.min.y - d.y) * u), (a = (e.max.y - d.y) * u))
        : ((r = (e.max.y - d.y) * u), (a = (e.min.y - d.y) * u)),
      n > a ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (a < i || isNaN(i)) && (i = a),
      h >= 0
        ? ((o = (e.min.z - d.z) * h), (c = (e.max.z - d.z) * h))
        : ((o = (e.max.z - d.z) * h), (c = (e.min.z - d.z) * h)),
      n > c || o > i) ||
      ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, fn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    na.subVectors(t, e), Gs.subVectors(n, e), ia.crossVectors(na, Gs);
    let a = this.direction.dot(ia),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Pn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Gs.crossVectors(Pn, Gs));
    if (c < 0) return null;
    const l = o * this.direction.dot(na.cross(Pn));
    if (l < 0 || c + l > a) return null;
    const u = -o * Pn.dot(ia);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ne {
  constructor(e, t, n, i, r, a, o, c, l, u, h, d, p, g, x, m) {
    (Ne.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, c, l, u, h, d, p, g, x, m);
  }
  set(e, t, n, i, r, a, o, c, l, u, h, d, p, g, x, m) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[4] = t),
      (f[8] = n),
      (f[12] = i),
      (f[1] = r),
      (f[5] = a),
      (f[9] = o),
      (f[13] = c),
      (f[2] = l),
      (f[6] = u),
      (f[10] = h),
      (f[14] = d),
      (f[3] = p),
      (f[7] = g),
      (f[11] = x),
      (f[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ne().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Mi.setFromMatrixColumn(e, 0).length(),
      r = 1 / Mi.setFromMatrixColumn(e, 1).length(),
      a = 1 / Mi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      u = Math.cos(r),
      h = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * u,
        p = a * h,
        g = o * u,
        x = o * h;
      (t[0] = c * u),
        (t[4] = -c * h),
        (t[8] = l),
        (t[1] = p + g * l),
        (t[5] = d - x * l),
        (t[9] = -o * c),
        (t[2] = x - d * l),
        (t[6] = g + p * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const d = c * u,
        p = c * h,
        g = l * u,
        x = l * h;
      (t[0] = d + x * o),
        (t[4] = g * o - p),
        (t[8] = a * l),
        (t[1] = a * h),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = p * o - g),
        (t[6] = x + d * o),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const d = c * u,
        p = c * h,
        g = l * u,
        x = l * h;
      (t[0] = d - x * o),
        (t[4] = -a * h),
        (t[8] = g + p * o),
        (t[1] = p + g * o),
        (t[5] = a * u),
        (t[9] = x - d * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const d = a * u,
        p = a * h,
        g = o * u,
        x = o * h;
      (t[0] = c * u),
        (t[4] = g * l - p),
        (t[8] = d * l + x),
        (t[1] = c * h),
        (t[5] = x * l + d),
        (t[9] = p * l - g),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const d = a * c,
        p = a * l,
        g = o * c,
        x = o * l;
      (t[0] = c * u),
        (t[4] = x - d * h),
        (t[8] = g * h + p),
        (t[1] = h),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -l * u),
        (t[6] = p * h + g),
        (t[10] = d - x * h);
    } else if (e.order === "XZY") {
      const d = a * c,
        p = a * l,
        g = o * c,
        x = o * l;
      (t[0] = c * u),
        (t[4] = -h),
        (t[8] = l * u),
        (t[1] = d * h + x),
        (t[5] = a * u),
        (t[9] = p * h - g),
        (t[2] = g * h - p),
        (t[6] = o * u),
        (t[10] = x * h + d);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(gd, e, _d);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Bt.subVectors(e, t),
      Bt.lengthSq() === 0 && (Bt.z = 1),
      Bt.normalize(),
      Ln.crossVectors(n, Bt),
      Ln.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Bt.x += 1e-4) : (Bt.z += 1e-4),
        Bt.normalize(),
        Ln.crossVectors(n, Bt)),
      Ln.normalize(),
      Ws.crossVectors(Bt, Ln),
      (i[0] = Ln.x),
      (i[4] = Ws.x),
      (i[8] = Bt.x),
      (i[1] = Ln.y),
      (i[5] = Ws.y),
      (i[9] = Bt.y),
      (i[2] = Ln.z),
      (i[6] = Ws.z),
      (i[10] = Bt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      u = n[1],
      h = n[5],
      d = n[9],
      p = n[13],
      g = n[2],
      x = n[6],
      m = n[10],
      f = n[14],
      E = n[3],
      S = n[7],
      A = n[11],
      D = n[15],
      R = i[0],
      w = i[4],
      U = i[8],
      T = i[12],
      y = i[1],
      L = i[5],
      W = i[9],
      H = i[13],
      K = i[2],
      q = i[6],
      X = i[10],
      j = i[14],
      G = i[3],
      ce = i[7],
      he = i[11],
      pe = i[15];
    return (
      (r[0] = a * R + o * y + c * K + l * G),
      (r[4] = a * w + o * L + c * q + l * ce),
      (r[8] = a * U + o * W + c * X + l * he),
      (r[12] = a * T + o * H + c * j + l * pe),
      (r[1] = u * R + h * y + d * K + p * G),
      (r[5] = u * w + h * L + d * q + p * ce),
      (r[9] = u * U + h * W + d * X + p * he),
      (r[13] = u * T + h * H + d * j + p * pe),
      (r[2] = g * R + x * y + m * K + f * G),
      (r[6] = g * w + x * L + m * q + f * ce),
      (r[10] = g * U + x * W + m * X + f * he),
      (r[14] = g * T + x * H + m * j + f * pe),
      (r[3] = E * R + S * y + A * K + D * G),
      (r[7] = E * w + S * L + A * q + D * ce),
      (r[11] = E * U + S * W + A * X + D * he),
      (r[15] = E * T + S * H + A * j + D * pe),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      u = e[2],
      h = e[6],
      d = e[10],
      p = e[14],
      g = e[3],
      x = e[7],
      m = e[11],
      f = e[15];
    return (
      g *
        (+r * c * h -
          i * l * h -
          r * o * d +
          n * l * d +
          i * o * p -
          n * c * p) +
      x *
        (+t * c * p -
          t * l * d +
          r * a * d -
          i * a * p +
          i * l * u -
          r * c * u) +
      m *
        (+t * l * h -
          t * o * p -
          r * a * h +
          n * a * p +
          r * o * u -
          n * l * u) +
      f *
        (-i * o * u - t * c * h + t * o * d + i * a * h - n * a * d + n * c * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      h = e[9],
      d = e[10],
      p = e[11],
      g = e[12],
      x = e[13],
      m = e[14],
      f = e[15],
      E = h * m * l - x * d * l + x * c * p - o * m * p - h * c * f + o * d * f,
      S = g * d * l - u * m * l - g * c * p + a * m * p + u * c * f - a * d * f,
      A = u * x * l - g * h * l + g * o * p - a * x * p - u * o * f + a * h * f,
      D = g * h * c - u * x * c - g * o * d + a * x * d + u * o * m - a * h * m,
      R = t * E + n * S + i * A + r * D;
    if (R === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / R;
    return (
      (e[0] = E * w),
      (e[1] =
        (x * d * r -
          h * m * r -
          x * i * p +
          n * m * p +
          h * i * f -
          n * d * f) *
        w),
      (e[2] =
        (o * m * r -
          x * c * r +
          x * i * l -
          n * m * l -
          o * i * f +
          n * c * f) *
        w),
      (e[3] =
        (h * c * r -
          o * d * r -
          h * i * l +
          n * d * l +
          o * i * p -
          n * c * p) *
        w),
      (e[4] = S * w),
      (e[5] =
        (u * m * r -
          g * d * r +
          g * i * p -
          t * m * p -
          u * i * f +
          t * d * f) *
        w),
      (e[6] =
        (g * c * r -
          a * m * r -
          g * i * l +
          t * m * l +
          a * i * f -
          t * c * f) *
        w),
      (e[7] =
        (a * d * r -
          u * c * r +
          u * i * l -
          t * d * l -
          a * i * p +
          t * c * p) *
        w),
      (e[8] = A * w),
      (e[9] =
        (g * h * r -
          u * x * r -
          g * n * p +
          t * x * p +
          u * n * f -
          t * h * f) *
        w),
      (e[10] =
        (a * x * r -
          g * o * r +
          g * n * l -
          t * x * l -
          a * n * f +
          t * o * f) *
        w),
      (e[11] =
        (u * o * r -
          a * h * r -
          u * n * l +
          t * h * l +
          a * n * p -
          t * o * p) *
        w),
      (e[12] = D * w),
      (e[13] =
        (u * x * i -
          g * h * i +
          g * n * d -
          t * x * d -
          u * n * m +
          t * h * m) *
        w),
      (e[14] =
        (g * o * i -
          a * x * i -
          g * n * c +
          t * x * c +
          a * n * m -
          t * o * m) *
        w),
      (e[15] =
        (a * h * i -
          u * o * i +
          u * n * c -
          t * h * c -
          a * n * d +
          t * o * d) *
        w),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = r * a,
      u = r * o;
    return (
      this.set(
        l * a + n,
        l * o - i * c,
        l * c + i * o,
        0,
        l * o + i * c,
        u * o + n,
        u * c - i * a,
        0,
        l * c - i * o,
        u * c + i * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = r + r,
      u = a + a,
      h = o + o,
      d = r * l,
      p = r * u,
      g = r * h,
      x = a * u,
      m = a * h,
      f = o * h,
      E = c * l,
      S = c * u,
      A = c * h,
      D = n.x,
      R = n.y,
      w = n.z;
    return (
      (i[0] = (1 - (x + f)) * D),
      (i[1] = (p + A) * D),
      (i[2] = (g - S) * D),
      (i[3] = 0),
      (i[4] = (p - A) * R),
      (i[5] = (1 - (d + f)) * R),
      (i[6] = (m + E) * R),
      (i[7] = 0),
      (i[8] = (g + S) * w),
      (i[9] = (m - E) * w),
      (i[10] = (1 - (d + x)) * w),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Mi.set(i[0], i[1], i[2]).length();
    const a = Mi.set(i[4], i[5], i[6]).length(),
      o = Mi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      jt.copy(this);
    const l = 1 / r,
      u = 1 / a,
      h = 1 / o;
    return (
      (jt.elements[0] *= l),
      (jt.elements[1] *= l),
      (jt.elements[2] *= l),
      (jt.elements[4] *= u),
      (jt.elements[5] *= u),
      (jt.elements[6] *= u),
      (jt.elements[8] *= h),
      (jt.elements[9] *= h),
      (jt.elements[10] *= h),
      t.setFromRotationMatrix(jt),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, r, a, o = Sn) {
    const c = this.elements,
      l = (2 * r) / (t - e),
      u = (2 * r) / (n - i),
      h = (t + e) / (t - e),
      d = (n + i) / (n - i);
    let p, g;
    if (o === Sn) (p = -(a + r) / (a - r)), (g = (-2 * a * r) / (a - r));
    else if (o === Nr) (p = -a / (a - r)), (g = (-a * r) / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = l),
      (c[4] = 0),
      (c[8] = h),
      (c[12] = 0),
      (c[1] = 0),
      (c[5] = u),
      (c[9] = d),
      (c[13] = 0),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = p),
      (c[14] = g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = -1),
      (c[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a, o = Sn) {
    const c = this.elements,
      l = 1 / (t - e),
      u = 1 / (n - i),
      h = 1 / (a - r),
      d = (t + e) * l,
      p = (n + i) * u;
    let g, x;
    if (o === Sn) (g = (a + r) * h), (x = -2 * h);
    else if (o === Nr) (g = r * h), (x = -1 * h);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = 2 * l),
      (c[4] = 0),
      (c[8] = 0),
      (c[12] = -d),
      (c[1] = 0),
      (c[5] = 2 * u),
      (c[9] = 0),
      (c[13] = -p),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = x),
      (c[14] = -g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = 0),
      (c[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Mi = new P(),
  jt = new Ne(),
  gd = new P(0, 0, 0),
  _d = new P(1, 1, 1),
  Ln = new P(),
  Ws = new P(),
  Bt = new P(),
  Ec = new Ne(),
  Tc = new sn();
class on {
  constructor(e = 0, t = 0, n = 0, i = on.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      o = i[8],
      c = i[1],
      l = i[5],
      u = i[9],
      h = i[2],
      d = i[6],
      p = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Et(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(d, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Et(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Et(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-h, p)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Et(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Et(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-Et(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ec.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ec, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Tc.setFromEuler(this), this.setFromQuaternion(Tc, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
on.DEFAULT_ORDER = "XYZ";
class lu {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let xd = 0;
const Ac = new P(),
  yi = new sn(),
  pn = new Ne(),
  Xs = new P(),
  us = new P(),
  vd = new P(),
  Md = new sn(),
  bc = new P(1, 0, 0),
  wc = new P(0, 1, 0),
  Rc = new P(0, 0, 1),
  Cc = { type: "added" },
  yd = { type: "removed" },
  Si = { type: "childadded", child: null },
  sa = { type: "childremoved", child: null };
class Je extends li {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: xd++ }),
      (this.uuid = nn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Je.DEFAULT_UP.clone());
    const e = new P(),
      t = new on(),
      n = new sn(),
      i = new P(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Ne() },
        normalMatrix: { value: new Oe() },
      }),
      (this.matrix = new Ne()),
      (this.matrixWorld = new Ne()),
      (this.matrixAutoUpdate = Je.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new lu()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return yi.setFromAxisAngle(e, t), this.quaternion.multiply(yi), this;
  }
  rotateOnWorldAxis(e, t) {
    return yi.setFromAxisAngle(e, t), this.quaternion.premultiply(yi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(bc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(wc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Rc, e);
  }
  translateOnAxis(e, t) {
    return (
      Ac.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ac.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(bc, e);
  }
  translateY(e) {
    return this.translateOnAxis(wc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Rc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(pn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Xs.copy(e) : Xs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      us.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? pn.lookAt(us, Xs, this.up)
        : pn.lookAt(Xs, us, this.up),
      this.quaternion.setFromRotationMatrix(pn),
      i &&
        (pn.extractRotation(i.matrixWorld),
        yi.setFromRotationMatrix(pn),
        this.quaternion.premultiply(yi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Cc),
            (Si.child = e),
            this.dispatchEvent(Si),
            (Si.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(yd),
        (sa.child = e),
        this.dispatchEvent(sa),
        (sa.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      pn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), pn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(pn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Cc),
      (Si.child = e),
      this.dispatchEvent(Si),
      (Si.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(us, e, vd), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(us, Md, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (i.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          }));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const h = c[l];
            r(e.shapes, h);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        i.material = o;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        u = a(e.images),
        h = a(e.shapes),
        d = a(e.skeletons),
        p = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        d.length > 0 && (n.skeletons = d),
        p.length > 0 && (n.animations = p),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Je.DEFAULT_UP = new P(0, 1, 0);
Je.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Zt = new P(),
  mn = new P(),
  ra = new P(),
  gn = new P(),
  Ei = new P(),
  Ti = new P(),
  Pc = new P(),
  aa = new P(),
  oa = new P(),
  ca = new P();
class en {
  constructor(e = new P(), t = new P(), n = new P()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Zt.subVectors(e, t), i.cross(Zt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Zt.subVectors(i, t), mn.subVectors(n, t), ra.subVectors(e, t);
    const a = Zt.dot(Zt),
      o = Zt.dot(mn),
      c = Zt.dot(ra),
      l = mn.dot(mn),
      u = mn.dot(ra),
      h = a * l - o * o;
    if (h === 0) return r.set(0, 0, 0), null;
    const d = 1 / h,
      p = (l * c - o * u) * d,
      g = (a * u - o * c) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, gn) === null
      ? !1
      : gn.x >= 0 && gn.y >= 0 && gn.x + gn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, c) {
    return this.getBarycoord(e, t, n, i, gn) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(r, gn.x),
        c.addScaledVector(a, gn.y),
        c.addScaledVector(o, gn.z),
        c);
  }
  static isFrontFacing(e, t, n, i) {
    return Zt.subVectors(n, t), mn.subVectors(e, t), Zt.cross(mn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Zt.subVectors(this.c, this.b),
      mn.subVectors(this.a, this.b),
      Zt.cross(mn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return en.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return en.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return en.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return en.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return en.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, o;
    Ei.subVectors(i, n), Ti.subVectors(r, n), aa.subVectors(e, n);
    const c = Ei.dot(aa),
      l = Ti.dot(aa);
    if (c <= 0 && l <= 0) return t.copy(n);
    oa.subVectors(e, i);
    const u = Ei.dot(oa),
      h = Ti.dot(oa);
    if (u >= 0 && h <= u) return t.copy(i);
    const d = c * h - u * l;
    if (d <= 0 && c >= 0 && u <= 0)
      return (a = c / (c - u)), t.copy(n).addScaledVector(Ei, a);
    ca.subVectors(e, r);
    const p = Ei.dot(ca),
      g = Ti.dot(ca);
    if (g >= 0 && p <= g) return t.copy(r);
    const x = p * l - c * g;
    if (x <= 0 && l >= 0 && g <= 0)
      return (o = l / (l - g)), t.copy(n).addScaledVector(Ti, o);
    const m = u * g - p * h;
    if (m <= 0 && h - u >= 0 && p - g >= 0)
      return (
        Pc.subVectors(r, i),
        (o = (h - u) / (h - u + (p - g))),
        t.copy(i).addScaledVector(Pc, o)
      );
    const f = 1 / (m + x + d);
    return (
      (a = x * f),
      (o = d * f),
      t.copy(n).addScaledVector(Ei, a).addScaledVector(Ti, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const uu = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  In = { h: 0, s: 0, l: 0 },
  Ys = { h: 0, s: 0, l: 0 };
function la(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? s + (e - s) * 6 * (2 / 3 - t)
          : s
  );
}
class Pe {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor
        ? this.copy(i)
        : typeof i == "number"
          ? this.setHex(i)
          : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Pt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Xe.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Xe.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Xe.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = Xe.workingColorSpace) {
    if (((e = Po(e, 1)), (t = Et(t, 0, 1)), (n = Et(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = la(a, r, e + 1 / 3)),
        (this.g = la(a, r, e)),
        (this.b = la(a, r, e - 1 / 3));
    }
    return Xe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Pt) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t,
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Pt) {
    const n = uu[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Vi(e.r)), (this.g = Vi(e.g)), (this.b = Vi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Zr(e.r)), (this.g = Zr(e.g)), (this.b = Zr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Pt) {
    return (
      Xe.fromWorkingColorSpace(bt.copy(this), e),
      Math.round(Et(bt.r * 255, 0, 255)) * 65536 +
        Math.round(Et(bt.g * 255, 0, 255)) * 256 +
        Math.round(Et(bt.b * 255, 0, 255))
    );
  }
  getHexString(e = Pt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(bt.copy(this), t);
    const n = bt.r,
      i = bt.g,
      r = bt.b,
      a = Math.max(n, i, r),
      o = Math.min(n, i, r);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) (c = 0), (l = 0);
    else {
      const h = a - o;
      switch (((l = u <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          c = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / h + 2;
          break;
        case r:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = u), e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return (
      Xe.fromWorkingColorSpace(bt.copy(this), t),
      (e.r = bt.r),
      (e.g = bt.g),
      (e.b = bt.b),
      e
    );
  }
  getStyle(e = Pt) {
    Xe.fromWorkingColorSpace(bt.copy(this), e);
    const t = bt.r,
      n = bt.g,
      i = bt.b;
    return e !== Pt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(In), this.setHSL(In.h + e, In.s + t, In.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(In), e.getHSL(Ys);
    const n = Ts(In.h, Ys.h, t),
      i = Ts(In.s, Ys.s, t),
      r = Ts(In.l, Ys.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const bt = new Pe();
Pe.NAMES = uu;
let Sd = 0;
class Yt extends li {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Sd++ }),
      (this.uuid = nn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = ki),
      (this.side = En),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Ua),
      (this.blendDst = Oa),
      (this.blendEquation = ii),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Pe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Cr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = gc),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = mi),
      (this.stencilZFail = mi),
      (this.stencilZPass = mi),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ki && (n.blending = this.blending),
      this.side !== En && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== Ua && (n.blendSrc = this.blendSrc),
      this.blendDst !== Oa && (n.blendDst = this.blendDst),
      this.blendEquation !== ii && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== Cr && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== gc && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== mi && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== mi && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== mi && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
}
class Dt extends Yt {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Pe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new on()),
      (this.combine = Xl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const ft = new P(),
  qs = new ge();
class It {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = fo),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = tn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      Lo(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.",
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        qs.fromBufferAttribute(this, t),
          qs.applyMatrix3(e),
          this.setXY(t, qs.x, qs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ft.fromBufferAttribute(this, t),
          ft.applyMatrix3(e),
          this.setXYZ(t, ft.x, ft.y, ft.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ft.fromBufferAttribute(this, t),
        ft.applyMatrix4(e),
        this.setXYZ(t, ft.x, ft.y, ft.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ft.fromBufferAttribute(this, t),
        ft.applyNormalMatrix(e),
        this.setXYZ(t, ft.x, ft.y, ft.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ft.fromBufferAttribute(this, t),
        ft.transformDirection(e),
        this.setXYZ(t, ft.x, ft.y, ft.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Qt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = je(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = je(t, this.array)), (n = je(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = je(t, this.array)),
        (n = je(n, this.array)),
        (i = je(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = je(t, this.array)),
        (n = je(n, this.array)),
        (i = je(i, this.array)),
        (r = je(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== fo && (e.usage = this.usage),
      e
    );
  }
}
class hu extends It {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class du extends It {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Mt extends It {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ed = 0;
const Vt = new Ne(),
  ua = new Je(),
  Ai = new P(),
  zt = new An(),
  hs = new An(),
  vt = new P();
class Ut extends li {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Ed++ }),
      (this.uuid = nn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (au(e) ? du : hu)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Oe().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Vt.makeRotationFromQuaternion(e), this.applyMatrix4(Vt), this;
  }
  rotateX(e) {
    return Vt.makeRotationX(e), this.applyMatrix4(Vt), this;
  }
  rotateY(e) {
    return Vt.makeRotationY(e), this.applyMatrix4(Vt), this;
  }
  rotateZ(e) {
    return Vt.makeRotationZ(e), this.applyMatrix4(Vt), this;
  }
  translate(e, t, n) {
    return Vt.makeTranslation(e, t, n), this.applyMatrix4(Vt), this;
  }
  scale(e, t, n) {
    return Vt.makeScale(e, t, n), this.applyMatrix4(Vt), this;
  }
  lookAt(e) {
    return ua.lookAt(e), ua.updateMatrix(), this.applyMatrix4(ua.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Ai).negate(),
      this.translate(Ai.x, Ai.y, Ai.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Mt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new An());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new P(-1 / 0, -1 / 0, -1 / 0),
          new P(1 / 0, 1 / 0, 1 / 0),
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          zt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (vt.addVectors(this.boundingBox.min, zt.min),
                this.boundingBox.expandByPoint(vt),
                vt.addVectors(this.boundingBox.max, zt.max),
                this.boundingBox.expandByPoint(vt))
              : (this.boundingBox.expandByPoint(zt.min),
                this.boundingBox.expandByPoint(zt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new cn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((zt.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          hs.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (vt.addVectors(zt.min, hs.min),
                zt.expandByPoint(vt),
                vt.addVectors(zt.max, hs.max),
                zt.expandByPoint(vt))
              : (zt.expandByPoint(hs.min), zt.expandByPoint(hs.max));
        }
      zt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        vt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(vt)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            vt.fromBufferAttribute(o, l),
              c && (Ai.fromBufferAttribute(e, l), vt.add(Ai)),
              (i = Math.max(i, n.distanceToSquared(vt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      i = t.normal,
      r = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new It(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      c = [];
    for (let U = 0; U < n.count; U++) (o[U] = new P()), (c[U] = new P());
    const l = new P(),
      u = new P(),
      h = new P(),
      d = new ge(),
      p = new ge(),
      g = new ge(),
      x = new P(),
      m = new P();
    function f(U, T, y) {
      l.fromBufferAttribute(n, U),
        u.fromBufferAttribute(n, T),
        h.fromBufferAttribute(n, y),
        d.fromBufferAttribute(r, U),
        p.fromBufferAttribute(r, T),
        g.fromBufferAttribute(r, y),
        u.sub(l),
        h.sub(l),
        p.sub(d),
        g.sub(d);
      const L = 1 / (p.x * g.y - g.x * p.y);
      isFinite(L) &&
        (x
          .copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(h, -p.y)
          .multiplyScalar(L),
        m
          .copy(h)
          .multiplyScalar(p.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(L),
        o[U].add(x),
        o[T].add(x),
        o[y].add(x),
        c[U].add(m),
        c[T].add(m),
        c[y].add(m));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: e.count }]);
    for (let U = 0, T = E.length; U < T; ++U) {
      const y = E[U],
        L = y.start,
        W = y.count;
      for (let H = L, K = L + W; H < K; H += 3)
        f(e.getX(H + 0), e.getX(H + 1), e.getX(H + 2));
    }
    const S = new P(),
      A = new P(),
      D = new P(),
      R = new P();
    function w(U) {
      D.fromBufferAttribute(i, U), R.copy(D);
      const T = o[U];
      S.copy(T),
        S.sub(D.multiplyScalar(D.dot(T))).normalize(),
        A.crossVectors(R, T);
      const L = A.dot(c[U]) < 0 ? -1 : 1;
      a.setXYZW(U, S.x, S.y, S.z, L);
    }
    for (let U = 0, T = E.length; U < T; ++U) {
      const y = E[U],
        L = y.start,
        W = y.count;
      for (let H = L, K = L + W; H < K; H += 3)
        w(e.getX(H + 0)), w(e.getX(H + 1)), w(e.getX(H + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new It(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new P(),
        r = new P(),
        a = new P(),
        o = new P(),
        c = new P(),
        l = new P(),
        u = new P(),
        h = new P();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0),
            x = e.getX(d + 1),
            m = e.getX(d + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, x),
            a.fromBufferAttribute(t, m),
            u.subVectors(a, r),
            h.subVectors(i, r),
            u.cross(h),
            o.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, x),
            l.fromBufferAttribute(n, m),
            o.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(x, c.x, c.y, c.z),
            n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0),
            r.fromBufferAttribute(t, d + 1),
            a.fromBufferAttribute(t, d + 2),
            u.subVectors(a, r),
            h.subVectors(i, r),
            u.cross(h),
            n.setXYZ(d + 0, u.x, u.y, u.z),
            n.setXYZ(d + 1, u.x, u.y, u.z),
            n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      vt.fromBufferAttribute(e, t),
        vt.normalize(),
        e.setXYZ(t, vt.x, vt.y, vt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        u = o.itemSize,
        h = o.normalized,
        d = new l.constructor(c.length * u);
      let p = 0,
        g = 0;
      for (let x = 0, m = c.length; x < m; x++) {
        o.isInterleavedBufferAttribute
          ? (p = c[x] * o.data.stride + o.offset)
          : (p = c[x] * u);
        for (let f = 0; f < u; f++) d[g++] = l[p++];
      }
      return new It(d, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new Ut(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const c = i[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [],
        l = r[o];
      for (let u = 0, h = l.length; u < h; u++) {
        const d = l[u],
          p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        u = [];
      for (let h = 0, d = l.length; h < d; h++) {
        const p = l[h];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && ((i[c] = u), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [],
        h = r[l];
      for (let d = 0, p = h.length; d < p; d++) u.push(h[d].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Lc = new Ne(),
  Kn = new Is(),
  Ks = new cn(),
  Ic = new P(),
  bi = new P(),
  wi = new P(),
  Ri = new P(),
  ha = new P(),
  js = new P(),
  Zs = new ge(),
  $s = new ge(),
  Js = new ge(),
  Dc = new P(),
  Nc = new P(),
  Uc = new P(),
  Qs = new P(),
  er = new P();
class ot extends Je {
  constructor(e = new Ut(), t = new Dt()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      js.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = o[c],
          h = r[c];
        u !== 0 &&
          (ha.fromBufferAttribute(h, e),
          a ? js.addScaledVector(ha, u) : js.addScaledVector(ha.sub(t), u));
      }
      t.add(js);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ks.copy(n.boundingSphere),
      Ks.applyMatrix4(r),
      Kn.copy(e.ray).recast(e.near),
      !(
        Ks.containsPoint(Kn.origin) === !1 &&
        (Kn.intersectSphere(Ks, Ic) === null ||
          Kn.origin.distanceToSquared(Ic) > (e.far - e.near) ** 2)
      ) &&
        (Lc.copy(r).invert(),
        Kn.copy(e.ray).applyMatrix4(Lc),
        !(n.boundingBox !== null && Kn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Kn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      c = r.attributes.position,
      l = r.attributes.uv,
      u = r.attributes.uv1,
      h = r.attributes.normal,
      d = r.groups,
      p = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, x = d.length; g < x; g++) {
          const m = d[g],
            f = a[m.materialIndex],
            E = Math.max(m.start, p.start),
            S = Math.min(
              o.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let A = E, D = S; A < D; A += 3) {
            const R = o.getX(A),
              w = o.getX(A + 1),
              U = o.getX(A + 2);
            (i = tr(this, f, e, n, l, u, h, R, w, U)),
              i &&
                ((i.faceIndex = Math.floor(A / 3)),
                (i.face.materialIndex = m.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start),
          x = Math.min(o.count, p.start + p.count);
        for (let m = g, f = x; m < f; m += 3) {
          const E = o.getX(m),
            S = o.getX(m + 1),
            A = o.getX(m + 2);
          (i = tr(this, a, e, n, l, u, h, E, S, A)),
            i && ((i.faceIndex = Math.floor(m / 3)), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, x = d.length; g < x; g++) {
          const m = d[g],
            f = a[m.materialIndex],
            E = Math.max(m.start, p.start),
            S = Math.min(
              c.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let A = E, D = S; A < D; A += 3) {
            const R = A,
              w = A + 1,
              U = A + 2;
            (i = tr(this, f, e, n, l, u, h, R, w, U)),
              i &&
                ((i.faceIndex = Math.floor(A / 3)),
                (i.face.materialIndex = m.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start),
          x = Math.min(c.count, p.start + p.count);
        for (let m = g, f = x; m < f; m += 3) {
          const E = m,
            S = m + 1,
            A = m + 2;
          (i = tr(this, a, e, n, l, u, h, E, S, A)),
            i && ((i.faceIndex = Math.floor(m / 3)), t.push(i));
        }
      }
  }
}
function Td(s, e, t, n, i, r, a, o) {
  let c;
  if (
    (e.side === Nt
      ? (c = n.intersectTriangle(a, r, i, !0, o))
      : (c = n.intersectTriangle(i, r, a, e.side === En, o)),
    c === null)
  )
    return null;
  er.copy(o), er.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(er);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: er.clone(), object: s };
}
function tr(s, e, t, n, i, r, a, o, c, l) {
  s.getVertexPosition(o, bi),
    s.getVertexPosition(c, wi),
    s.getVertexPosition(l, Ri);
  const u = Td(s, e, t, n, bi, wi, Ri, Qs);
  if (u) {
    i &&
      (Zs.fromBufferAttribute(i, o),
      $s.fromBufferAttribute(i, c),
      Js.fromBufferAttribute(i, l),
      (u.uv = en.getInterpolation(Qs, bi, wi, Ri, Zs, $s, Js, new ge()))),
      r &&
        (Zs.fromBufferAttribute(r, o),
        $s.fromBufferAttribute(r, c),
        Js.fromBufferAttribute(r, l),
        (u.uv1 = en.getInterpolation(Qs, bi, wi, Ri, Zs, $s, Js, new ge()))),
      a &&
        (Dc.fromBufferAttribute(a, o),
        Nc.fromBufferAttribute(a, c),
        Uc.fromBufferAttribute(a, l),
        (u.normal = en.getInterpolation(Qs, bi, wi, Ri, Dc, Nc, Uc, new P())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = { a: o, b: c, c: l, normal: new P(), materialIndex: 0 };
    en.getNormal(bi, wi, Ri, h.normal), (u.face = h);
  }
  return u;
}
class Ds extends Ut {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const c = [],
      l = [],
      u = [],
      h = [];
    let d = 0,
      p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new Mt(l, 3)),
      this.setAttribute("normal", new Mt(u, 3)),
      this.setAttribute("uv", new Mt(h, 2));
    function g(x, m, f, E, S, A, D, R, w, U, T) {
      const y = A / w,
        L = D / U,
        W = A / 2,
        H = D / 2,
        K = R / 2,
        q = w + 1,
        X = U + 1;
      let j = 0,
        G = 0;
      const ce = new P();
      for (let he = 0; he < X; he++) {
        const pe = he * L - H;
        for (let ze = 0; ze < q; ze++) {
          const Ge = ze * y - W;
          (ce[x] = Ge * E),
            (ce[m] = pe * S),
            (ce[f] = K),
            l.push(ce.x, ce.y, ce.z),
            (ce[x] = 0),
            (ce[m] = 0),
            (ce[f] = R > 0 ? 1 : -1),
            u.push(ce.x, ce.y, ce.z),
            h.push(ze / w),
            h.push(1 - he / U),
            (j += 1);
        }
      }
      for (let he = 0; he < U; he++)
        for (let pe = 0; pe < w; pe++) {
          const ze = d + pe + q * he,
            Ge = d + pe + q * (he + 1),
            Y = d + (pe + 1) + q * (he + 1),
            ee = d + (pe + 1) + q * he;
          c.push(ze, Ge, ee), c.push(Ge, Y, ee), (G += 6);
        }
      o.addGroup(p, G, T), (p += G), (d += j);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ds(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function Ji(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
          ? (e[t][n] = i.slice())
          : (e[t][n] = i);
    }
  }
  return e;
}
function Ct(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Ji(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Ad(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function fu(s) {
  const e = s.getRenderTarget();
  return e === null
    ? s.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : Xe.workingColorSpace;
}
const bd = { clone: Ji, merge: Ct };
var wd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Rd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wn extends Yt {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = wd),
      (this.fragmentShader = Rd),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ji(e.uniforms)),
      (this.uniformsGroups = Ad(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
          ? (t.uniforms[i] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
                    : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class pu extends Je {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ne()),
      (this.projectionMatrix = new Ne()),
      (this.projectionMatrixInverse = new Ne()),
      (this.coordinateSystem = Sn);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Dn = new P(),
  Oc = new ge(),
  Fc = new ge();
class wt extends pu {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = $i * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Es * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return $i * 2 * Math.atan(Math.tan(Es * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Dn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(Dn.x, Dn.y).multiplyScalar(-e / Dn.z),
      Dn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Dn.x, Dn.y).multiplyScalar(-e / Dn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Oc, Fc), t.subVectors(Fc, Oc);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Es * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (r += (a.offsetX * i) / c),
        (t -= (a.offsetY * n) / l),
        (i *= a.width / c),
        (n *= a.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Ci = -90,
  Pi = 1;
class Cd extends Je {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new wt(Ci, Pi, e, t);
    (i.layers = this.layers), this.add(i);
    const r = new wt(Ci, Pi, e, t);
    (r.layers = this.layers), this.add(r);
    const a = new wt(Ci, Pi, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new wt(Ci, Pi, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new wt(Ci, Pi, e, t);
    (c.layers = this.layers), this.add(c);
    const l = new wt(Ci, Pi, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === Sn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === Nr)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, c, l, u] = this.children,
      h = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      p = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, r),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, o),
      e.setRenderTarget(n, 3, i),
      e.render(t, c),
      e.setRenderTarget(n, 4, i),
      e.render(t, l),
      (n.texture.generateMipmaps = x),
      e.setRenderTarget(n, 5, i),
      e.render(t, u),
      e.setRenderTarget(h, d, p),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class mu extends gt {
  constructor(e, t, n, i, r, a, o, c, l, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Yi),
      super(e, t, n, i, r, a, o, c, l, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Pd extends oi {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new mu(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : kt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Ds(5, 5, 5),
      r = new Wn({
        name: "CubemapFromEquirect",
        uniforms: Ji(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Nt,
        blending: Vn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new ot(i, r),
      o = t.minFilter;
    return (
      t.minFilter === yn && (t.minFilter = kt),
      new Cd(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const da = new P(),
  Ld = new P(),
  Id = new Oe();
class On {
  constructor(e = new P(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = da.subVectors(n, t).cross(Ld.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(da),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Id.getNormalMatrix(e),
      i = this.coplanarPoint(da).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const jn = new cn(),
  nr = new P();
class Io {
  constructor(
    e = new On(),
    t = new On(),
    n = new On(),
    i = new On(),
    r = new On(),
    a = new On(),
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Sn) {
    const n = this.planes,
      i = e.elements,
      r = i[0],
      a = i[1],
      o = i[2],
      c = i[3],
      l = i[4],
      u = i[5],
      h = i[6],
      d = i[7],
      p = i[8],
      g = i[9],
      x = i[10],
      m = i[11],
      f = i[12],
      E = i[13],
      S = i[14],
      A = i[15];
    if (
      (n[0].setComponents(c - r, d - l, m - p, A - f).normalize(),
      n[1].setComponents(c + r, d + l, m + p, A + f).normalize(),
      n[2].setComponents(c + a, d + u, m + g, A + E).normalize(),
      n[3].setComponents(c - a, d - u, m - g, A - E).normalize(),
      n[4].setComponents(c - o, d - h, m - x, A - S).normalize(),
      t === Sn)
    )
      n[5].setComponents(c + o, d + h, m + x, A + S).normalize();
    else if (t === Nr) n[5].setComponents(o, h, x, S).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(jn);
  }
  intersectsSprite(e) {
    return (
      jn.center.set(0, 0, 0),
      (jn.radius = 0.7071067811865476),
      jn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(jn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((nr.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (nr.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (nr.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(nr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function gu() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    t(r, a), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function Dd(s) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      u = o.usage,
      h = l.byteLength,
      d = s.createBuffer();
    s.bindBuffer(c, d), s.bufferData(c, l, u), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array) p = s.FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (p = s.HALF_FLOAT) : (p = s.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) p = s.SHORT;
    else if (l instanceof Uint32Array) p = s.UNSIGNED_INT;
    else if (l instanceof Int32Array) p = s.INT;
    else if (l instanceof Int8Array) p = s.BYTE;
    else if (l instanceof Uint8Array) p = s.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) p = s.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l,
      );
    return {
      buffer: d,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: h,
    };
  }
  function n(o, c, l) {
    const u = c.array,
      h = c._updateRange,
      d = c.updateRanges;
    if (
      (s.bindBuffer(l, o),
      h.count === -1 && d.length === 0 && s.bufferSubData(l, 0, u),
      d.length !== 0)
    ) {
      for (let p = 0, g = d.length; p < g; p++) {
        const x = d[p];
        s.bufferSubData(l, x.start * u.BYTES_PER_ELEMENT, u, x.start, x.count);
      }
      c.clearUpdateRanges();
    }
    h.count !== -1 &&
      (s.bufferSubData(l, h.offset * u.BYTES_PER_ELEMENT, u, h.offset, h.count),
      (h.count = -1)),
      c.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (s.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      n(l.buffer, o, c), (l.version = o.version);
    }
  }
  return { get: i, remove: r, update: a };
}
class ui extends Ut {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(i),
      l = o + 1,
      u = c + 1,
      h = e / o,
      d = t / c,
      p = [],
      g = [],
      x = [],
      m = [];
    for (let f = 0; f < u; f++) {
      const E = f * d - a;
      for (let S = 0; S < l; S++) {
        const A = S * h - r;
        g.push(A, -E, 0), x.push(0, 0, 1), m.push(S / o), m.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let E = 0; E < o; E++) {
        const S = E + l * f,
          A = E + l * (f + 1),
          D = E + 1 + l * (f + 1),
          R = E + 1 + l * f;
        p.push(S, A, R), p.push(A, D, R);
      }
    this.setIndex(p),
      this.setAttribute("position", new Mt(g, 3)),
      this.setAttribute("normal", new Mt(x, 3)),
      this.setAttribute("uv", new Mt(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ui(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Nd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Ud = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Od = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Fd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Bd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  zd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  kd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Hd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Vd = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  Gd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Wd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Xd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Yd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  qd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Kd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  jd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Zd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  $d = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Jd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Qd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  ef = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  tf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  nf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  sf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  rf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  af = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  of = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  cf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  lf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  uf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  hf = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  df = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  ff = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  pf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  mf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  gf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  _f = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  xf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  vf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Mf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  yf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Sf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Ef = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Tf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Af = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  bf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  wf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Rf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Cf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Pf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Lf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  If = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Df = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Nf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Uf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Of = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Ff = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Bf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  zf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  kf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Hf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Vf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Gf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Wf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Xf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Yf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  qf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Kf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  jf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Zf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  $f = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Jf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Qf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  ep = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  tp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  np = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  ip = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  sp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  rp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  ap = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  op = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  cp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  lp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  up = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  hp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  fp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  pp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  mp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  gp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  _p = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  xp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  vp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Mp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  yp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Sp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ep = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Tp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Ap = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  bp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  wp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Rp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Cp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Pp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Lp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Ip = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Dp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Np = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Up = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Op = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Fp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Bp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  zp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  kp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Hp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Vp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Gp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Wp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Xp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Yp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  qp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Kp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  jp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Zp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  $p = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Jp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Qp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  em = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  tm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  nm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  im = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  sm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  rm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  am = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  om = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  cm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  lm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  um = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  dm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  fm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ue = {
    alphahash_fragment: Nd,
    alphahash_pars_fragment: Ud,
    alphamap_fragment: Od,
    alphamap_pars_fragment: Fd,
    alphatest_fragment: Bd,
    alphatest_pars_fragment: zd,
    aomap_fragment: kd,
    aomap_pars_fragment: Hd,
    batching_pars_vertex: Vd,
    batching_vertex: Gd,
    begin_vertex: Wd,
    beginnormal_vertex: Xd,
    bsdfs: Yd,
    iridescence_fragment: qd,
    bumpmap_pars_fragment: Kd,
    clipping_planes_fragment: jd,
    clipping_planes_pars_fragment: Zd,
    clipping_planes_pars_vertex: $d,
    clipping_planes_vertex: Jd,
    color_fragment: Qd,
    color_pars_fragment: ef,
    color_pars_vertex: tf,
    color_vertex: nf,
    common: sf,
    cube_uv_reflection_fragment: rf,
    defaultnormal_vertex: af,
    displacementmap_pars_vertex: of,
    displacementmap_vertex: cf,
    emissivemap_fragment: lf,
    emissivemap_pars_fragment: uf,
    colorspace_fragment: hf,
    colorspace_pars_fragment: df,
    envmap_fragment: ff,
    envmap_common_pars_fragment: pf,
    envmap_pars_fragment: mf,
    envmap_pars_vertex: gf,
    envmap_physical_pars_fragment: wf,
    envmap_vertex: _f,
    fog_vertex: xf,
    fog_pars_vertex: vf,
    fog_fragment: Mf,
    fog_pars_fragment: yf,
    gradientmap_pars_fragment: Sf,
    lightmap_pars_fragment: Ef,
    lights_lambert_fragment: Tf,
    lights_lambert_pars_fragment: Af,
    lights_pars_begin: bf,
    lights_toon_fragment: Rf,
    lights_toon_pars_fragment: Cf,
    lights_phong_fragment: Pf,
    lights_phong_pars_fragment: Lf,
    lights_physical_fragment: If,
    lights_physical_pars_fragment: Df,
    lights_fragment_begin: Nf,
    lights_fragment_maps: Uf,
    lights_fragment_end: Of,
    logdepthbuf_fragment: Ff,
    logdepthbuf_pars_fragment: Bf,
    logdepthbuf_pars_vertex: zf,
    logdepthbuf_vertex: kf,
    map_fragment: Hf,
    map_pars_fragment: Vf,
    map_particle_fragment: Gf,
    map_particle_pars_fragment: Wf,
    metalnessmap_fragment: Xf,
    metalnessmap_pars_fragment: Yf,
    morphinstance_vertex: qf,
    morphcolor_vertex: Kf,
    morphnormal_vertex: jf,
    morphtarget_pars_vertex: Zf,
    morphtarget_vertex: $f,
    normal_fragment_begin: Jf,
    normal_fragment_maps: Qf,
    normal_pars_fragment: ep,
    normal_pars_vertex: tp,
    normal_vertex: np,
    normalmap_pars_fragment: ip,
    clearcoat_normal_fragment_begin: sp,
    clearcoat_normal_fragment_maps: rp,
    clearcoat_pars_fragment: ap,
    iridescence_pars_fragment: op,
    opaque_fragment: cp,
    packing: lp,
    premultiplied_alpha_fragment: up,
    project_vertex: hp,
    dithering_fragment: dp,
    dithering_pars_fragment: fp,
    roughnessmap_fragment: pp,
    roughnessmap_pars_fragment: mp,
    shadowmap_pars_fragment: gp,
    shadowmap_pars_vertex: _p,
    shadowmap_vertex: xp,
    shadowmask_pars_fragment: vp,
    skinbase_vertex: Mp,
    skinning_pars_vertex: yp,
    skinning_vertex: Sp,
    skinnormal_vertex: Ep,
    specularmap_fragment: Tp,
    specularmap_pars_fragment: Ap,
    tonemapping_fragment: bp,
    tonemapping_pars_fragment: wp,
    transmission_fragment: Rp,
    transmission_pars_fragment: Cp,
    uv_pars_fragment: Pp,
    uv_pars_vertex: Lp,
    uv_vertex: Ip,
    worldpos_vertex: Dp,
    background_vert: Np,
    background_frag: Up,
    backgroundCube_vert: Op,
    backgroundCube_frag: Fp,
    cube_vert: Bp,
    cube_frag: zp,
    depth_vert: kp,
    depth_frag: Hp,
    distanceRGBA_vert: Vp,
    distanceRGBA_frag: Gp,
    equirect_vert: Wp,
    equirect_frag: Xp,
    linedashed_vert: Yp,
    linedashed_frag: qp,
    meshbasic_vert: Kp,
    meshbasic_frag: jp,
    meshlambert_vert: Zp,
    meshlambert_frag: $p,
    meshmatcap_vert: Jp,
    meshmatcap_frag: Qp,
    meshnormal_vert: em,
    meshnormal_frag: tm,
    meshphong_vert: nm,
    meshphong_frag: im,
    meshphysical_vert: sm,
    meshphysical_frag: rm,
    meshtoon_vert: am,
    meshtoon_frag: om,
    points_vert: cm,
    points_frag: lm,
    shadow_vert: um,
    shadow_frag: hm,
    sprite_vert: dm,
    sprite_frag: fm,
  },
  se = {
    common: {
      diffuse: { value: new Pe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Oe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Oe() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Oe() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Oe() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Oe() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Oe() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Oe() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Oe() },
      normalScale: { value: new ge(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Oe() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Oe() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Oe() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Oe() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Pe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Pe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Oe() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Oe() },
    },
    sprite: {
      diffuse: { value: new Pe(16777215) },
      opacity: { value: 1 },
      center: { value: new ge(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Oe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Oe() },
      alphaTest: { value: 0 },
    },
  },
  rn = {
    basic: {
      uniforms: Ct([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.fog,
      ]),
      vertexShader: Ue.meshbasic_vert,
      fragmentShader: Ue.meshbasic_frag,
    },
    lambert: {
      uniforms: Ct([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        { emissive: { value: new Pe(0) } },
      ]),
      vertexShader: Ue.meshlambert_vert,
      fragmentShader: Ue.meshlambert_frag,
    },
    phong: {
      uniforms: Ct([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new Pe(0) },
          specular: { value: new Pe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ue.meshphong_vert,
      fragmentShader: Ue.meshphong_frag,
    },
    standard: {
      uniforms: Ct([
        se.common,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.roughnessmap,
        se.metalnessmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new Pe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ue.meshphysical_vert,
      fragmentShader: Ue.meshphysical_frag,
    },
    toon: {
      uniforms: Ct([
        se.common,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.gradientmap,
        se.fog,
        se.lights,
        { emissive: { value: new Pe(0) } },
      ]),
      vertexShader: Ue.meshtoon_vert,
      fragmentShader: Ue.meshtoon_frag,
    },
    matcap: {
      uniforms: Ct([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ue.meshmatcap_vert,
      fragmentShader: Ue.meshmatcap_frag,
    },
    points: {
      uniforms: Ct([se.points, se.fog]),
      vertexShader: Ue.points_vert,
      fragmentShader: Ue.points_frag,
    },
    dashed: {
      uniforms: Ct([
        se.common,
        se.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ue.linedashed_vert,
      fragmentShader: Ue.linedashed_frag,
    },
    depth: {
      uniforms: Ct([se.common, se.displacementmap]),
      vertexShader: Ue.depth_vert,
      fragmentShader: Ue.depth_frag,
    },
    normal: {
      uniforms: Ct([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ue.meshnormal_vert,
      fragmentShader: Ue.meshnormal_frag,
    },
    sprite: {
      uniforms: Ct([se.sprite, se.fog]),
      vertexShader: Ue.sprite_vert,
      fragmentShader: Ue.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Oe() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ue.background_vert,
      fragmentShader: Ue.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Oe() },
      },
      vertexShader: Ue.backgroundCube_vert,
      fragmentShader: Ue.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ue.cube_vert,
      fragmentShader: Ue.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ue.equirect_vert,
      fragmentShader: Ue.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Ct([
        se.common,
        se.displacementmap,
        {
          referencePosition: { value: new P() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ue.distanceRGBA_vert,
      fragmentShader: Ue.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ct([
        se.lights,
        se.fog,
        { color: { value: new Pe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ue.shadow_vert,
      fragmentShader: Ue.shadow_frag,
    },
  };
rn.physical = {
  uniforms: Ct([
    rn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Oe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Oe() },
      clearcoatNormalScale: { value: new ge(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Oe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Oe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Oe() },
      sheen: { value: 0 },
      sheenColor: { value: new Pe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Oe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Oe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Oe() },
      transmissionSamplerSize: { value: new ge() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Oe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Pe(0) },
      specularColor: { value: new Pe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Oe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Oe() },
      anisotropyVector: { value: new ge() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Oe() },
    },
  ]),
  vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag,
};
const ir = { r: 0, b: 0, g: 0 },
  Zn = new on(),
  pm = new Ne();
function mm(s, e, t, n, i, r, a) {
  const o = new Pe(0);
  let c = r === !0 ? 0 : 1,
    l,
    u,
    h = null,
    d = 0,
    p = null;
  function g(E) {
    let S = E.isScene === !0 ? E.background : null;
    return (
      S && S.isTexture && (S = (E.backgroundBlurriness > 0 ? t : e).get(S)), S
    );
  }
  function x(E) {
    let S = !1;
    const A = g(E);
    A === null ? f(o, c) : A && A.isColor && (f(A, 1), (S = !0));
    const D = s.xr.getEnvironmentBlendMode();
    D === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : D === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (s.autoClear || S) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(E, S) {
    const A = g(S);
    A && (A.isCubeTexture || A.mapping === Br)
      ? (u === void 0 &&
          ((u = new ot(
            new Ds(1, 1, 1),
            new Wn({
              name: "BackgroundCubeMaterial",
              uniforms: Ji(rn.backgroundCube.uniforms),
              vertexShader: rn.backgroundCube.vertexShader,
              fragmentShader: rn.backgroundCube.fragmentShader,
              side: Nt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (D, R, w) {
            this.matrixWorld.copyPosition(w.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          i.update(u)),
        Zn.copy(S.backgroundRotation),
        (Zn.x *= -1),
        (Zn.y *= -1),
        (Zn.z *= -1),
        A.isCubeTexture &&
          A.isRenderTargetTexture === !1 &&
          ((Zn.y *= -1), (Zn.z *= -1)),
        (u.material.uniforms.envMap.value = A),
        (u.material.uniforms.flipEnvMap.value =
          A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          S.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = S.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          pm.makeRotationFromEuler(Zn),
        ),
        (u.material.toneMapped = Xe.getTransfer(A.colorSpace) !== et),
        (h !== A || d !== A.version || p !== s.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (h = A),
          (d = A.version),
          (p = s.toneMapping)),
        u.layers.enableAll(),
        E.unshift(u, u.geometry, u.material, 0, 0, null))
      : A &&
        A.isTexture &&
        (l === void 0 &&
          ((l = new ot(
            new ui(2, 2),
            new Wn({
              name: "BackgroundMaterial",
              uniforms: Ji(rn.background.uniforms),
              vertexShader: rn.background.vertexShader,
              fragmentShader: rn.background.fragmentShader,
              side: En,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          l.geometry.deleteAttribute("normal"),
          Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          i.update(l)),
        (l.material.uniforms.t2D.value = A),
        (l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity),
        (l.material.toneMapped = Xe.getTransfer(A.colorSpace) !== et),
        A.matrixAutoUpdate === !0 && A.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(A.matrix),
        (h !== A || d !== A.version || p !== s.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (h = A),
          (d = A.version),
          (p = s.toneMapping)),
        l.layers.enableAll(),
        E.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function f(E, S) {
    E.getRGB(ir, fu(s)), n.buffers.color.setClear(ir.r, ir.g, ir.b, S, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (E, S = 1) {
      o.set(E), (c = S), f(o, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (E) {
      (c = E), f(o, c);
    },
    render: x,
    addToRenderList: m,
  };
}
function gm(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    n = {},
    i = d(null);
  let r = i,
    a = !1;
  function o(y, L, W, H, K) {
    let q = !1;
    const X = h(H, W, L);
    r !== X && ((r = X), l(r.object)),
      (q = p(y, H, W, K)),
      q && g(y, H, W, K),
      K !== null && e.update(K, s.ELEMENT_ARRAY_BUFFER),
      (q || a) &&
        ((a = !1),
        A(y, L, W, H),
        K !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(K).buffer));
  }
  function c() {
    return s.createVertexArray();
  }
  function l(y) {
    return s.bindVertexArray(y);
  }
  function u(y) {
    return s.deleteVertexArray(y);
  }
  function h(y, L, W) {
    const H = W.wireframe === !0;
    let K = n[y.id];
    K === void 0 && ((K = {}), (n[y.id] = K));
    let q = K[L.id];
    q === void 0 && ((q = {}), (K[L.id] = q));
    let X = q[H];
    return X === void 0 && ((X = d(c())), (q[H] = X)), X;
  }
  function d(y) {
    const L = [],
      W = [],
      H = [];
    for (let K = 0; K < t; K++) (L[K] = 0), (W[K] = 0), (H[K] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: W,
      attributeDivisors: H,
      object: y,
      attributes: {},
      index: null,
    };
  }
  function p(y, L, W, H) {
    const K = r.attributes,
      q = L.attributes;
    let X = 0;
    const j = W.getAttributes();
    for (const G in j)
      if (j[G].location >= 0) {
        const he = K[G];
        let pe = q[G];
        if (
          (pe === void 0 &&
            (G === "instanceMatrix" &&
              y.instanceMatrix &&
              (pe = y.instanceMatrix),
            G === "instanceColor" && y.instanceColor && (pe = y.instanceColor)),
          he === void 0 || he.attribute !== pe || (pe && he.data !== pe.data))
        )
          return !0;
        X++;
      }
    return r.attributesNum !== X || r.index !== H;
  }
  function g(y, L, W, H) {
    const K = {},
      q = L.attributes;
    let X = 0;
    const j = W.getAttributes();
    for (const G in j)
      if (j[G].location >= 0) {
        let he = q[G];
        he === void 0 &&
          (G === "instanceMatrix" &&
            y.instanceMatrix &&
            (he = y.instanceMatrix),
          G === "instanceColor" && y.instanceColor && (he = y.instanceColor));
        const pe = {};
        (pe.attribute = he),
          he && he.data && (pe.data = he.data),
          (K[G] = pe),
          X++;
      }
    (r.attributes = K), (r.attributesNum = X), (r.index = H);
  }
  function x() {
    const y = r.newAttributes;
    for (let L = 0, W = y.length; L < W; L++) y[L] = 0;
  }
  function m(y) {
    f(y, 0);
  }
  function f(y, L) {
    const W = r.newAttributes,
      H = r.enabledAttributes,
      K = r.attributeDivisors;
    (W[y] = 1),
      H[y] === 0 && (s.enableVertexAttribArray(y), (H[y] = 1)),
      K[y] !== L && (s.vertexAttribDivisor(y, L), (K[y] = L));
  }
  function E() {
    const y = r.newAttributes,
      L = r.enabledAttributes;
    for (let W = 0, H = L.length; W < H; W++)
      L[W] !== y[W] && (s.disableVertexAttribArray(W), (L[W] = 0));
  }
  function S(y, L, W, H, K, q, X) {
    X === !0
      ? s.vertexAttribIPointer(y, L, W, K, q)
      : s.vertexAttribPointer(y, L, W, H, K, q);
  }
  function A(y, L, W, H) {
    x();
    const K = H.attributes,
      q = W.getAttributes(),
      X = L.defaultAttributeValues;
    for (const j in q) {
      const G = q[j];
      if (G.location >= 0) {
        let ce = K[j];
        if (
          (ce === void 0 &&
            (j === "instanceMatrix" &&
              y.instanceMatrix &&
              (ce = y.instanceMatrix),
            j === "instanceColor" && y.instanceColor && (ce = y.instanceColor)),
          ce !== void 0)
        ) {
          const he = ce.normalized,
            pe = ce.itemSize,
            ze = e.get(ce);
          if (ze === void 0) continue;
          const Ge = ze.buffer,
            Y = ze.type,
            ee = ze.bytesPerElement,
            de = Y === s.INT || Y === s.UNSIGNED_INT || ce.gpuType === yo;
          if (ce.isInterleavedBufferAttribute) {
            const le = ce.data,
              Le = le.stride,
              De = ce.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let Fe = 0; Fe < G.locationSize; Fe++)
                f(G.location + Fe, le.meshPerAttribute);
              y.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let Fe = 0; Fe < G.locationSize; Fe++) m(G.location + Fe);
            s.bindBuffer(s.ARRAY_BUFFER, Ge);
            for (let Fe = 0; Fe < G.locationSize; Fe++)
              S(
                G.location + Fe,
                pe / G.locationSize,
                Y,
                he,
                Le * ee,
                (De + (pe / G.locationSize) * Fe) * ee,
                de,
              );
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let le = 0; le < G.locationSize; le++)
                f(G.location + le, ce.meshPerAttribute);
              y.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else
              for (let le = 0; le < G.locationSize; le++) m(G.location + le);
            s.bindBuffer(s.ARRAY_BUFFER, Ge);
            for (let le = 0; le < G.locationSize; le++)
              S(
                G.location + le,
                pe / G.locationSize,
                Y,
                he,
                pe * ee,
                (pe / G.locationSize) * le * ee,
                de,
              );
          }
        } else if (X !== void 0) {
          const he = X[j];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                s.vertexAttrib2fv(G.location, he);
                break;
              case 3:
                s.vertexAttrib3fv(G.location, he);
                break;
              case 4:
                s.vertexAttrib4fv(G.location, he);
                break;
              default:
                s.vertexAttrib1fv(G.location, he);
            }
        }
      }
    }
    E();
  }
  function D() {
    U();
    for (const y in n) {
      const L = n[y];
      for (const W in L) {
        const H = L[W];
        for (const K in H) u(H[K].object), delete H[K];
        delete L[W];
      }
      delete n[y];
    }
  }
  function R(y) {
    if (n[y.id] === void 0) return;
    const L = n[y.id];
    for (const W in L) {
      const H = L[W];
      for (const K in H) u(H[K].object), delete H[K];
      delete L[W];
    }
    delete n[y.id];
  }
  function w(y) {
    for (const L in n) {
      const W = n[L];
      if (W[y.id] === void 0) continue;
      const H = W[y.id];
      for (const K in H) u(H[K].object), delete H[K];
      delete W[y.id];
    }
  }
  function U() {
    T(), (a = !0), r !== i && ((r = i), l(r.object));
  }
  function T() {
    (i.geometry = null), (i.program = null), (i.wireframe = !1);
  }
  return {
    setup: o,
    reset: U,
    resetDefaultState: T,
    dispose: D,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: w,
    initAttributes: x,
    enableAttribute: m,
    disableUnusedAttributes: E,
  };
}
function _m(s, e, t) {
  let n;
  function i(l) {
    n = l;
  }
  function r(l, u) {
    s.drawArrays(n, l, u), t.update(u, n, 1);
  }
  function a(l, u, h) {
    h !== 0 && (s.drawArraysInstanced(n, l, u, h), t.update(u, n, h));
  }
  function o(l, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, h);
    let p = 0;
    for (let g = 0; g < h; g++) p += u[g];
    t.update(p, n, 1);
  }
  function c(l, u, h, d) {
    if (h === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < l.length; g++) a(l[g], u[g], d[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, d, 0, h);
      let g = 0;
      for (let x = 0; x < h; x++) g += u[x];
      for (let x = 0; x < d.length; x++) t.update(g, n, d[x]);
    }
  }
  (this.setMode = i),
    (this.render = r),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = c);
}
function xm(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(R) {
    return !(
      R !== Xt &&
      n.convert(R) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(R) {
    const w =
      R === Ls &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      R !== Tn &&
      n.convert(R) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) &&
      R !== tn &&
      !w
    );
  }
  function c(R) {
    if (R === "highp") {
      if (
        s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision >
          0 &&
        s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision >
        0 &&
      s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l &&
    (console.warn(
      "THREE.WebGLRenderer:",
      l,
      "not supported, using",
      u,
      "instead.",
    ),
    (l = u));
  const h = t.logarithmicDepthBuffer === !0,
    d = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    p = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    g = s.getParameter(s.MAX_TEXTURE_SIZE),
    x = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    m = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    f = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    E = s.getParameter(s.MAX_VARYING_VECTORS),
    S = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    A = p > 0,
    D = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: p,
    maxTextureSize: g,
    maxCubemapSize: x,
    maxAttributes: m,
    maxVertexUniforms: f,
    maxVaryings: E,
    maxFragmentUniforms: S,
    vertexTextures: A,
    maxSamples: D,
  };
}
function vm(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new On(),
    o = new Oe(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, d) {
      const p = h.length !== 0 || d || n !== 0 || i;
      return (i = d), (n = h.length), p;
    }),
    (this.beginShadows = function () {
      (r = !0), u(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (h, d) {
      t = u(h, d, 0);
    }),
    (this.setState = function (h, d, p) {
      const g = h.clippingPlanes,
        x = h.clipIntersection,
        m = h.clipShadows,
        f = s.get(h);
      if (!i || g === null || g.length === 0 || (r && !m)) r ? u(null) : l();
      else {
        const E = r ? 0 : n,
          S = E * 4;
        let A = f.clippingState || null;
        (c.value = A), (A = u(g, d, S, p));
        for (let D = 0; D !== S; ++D) A[D] = t[D];
        (f.clippingState = A),
          (this.numIntersection = x ? this.numPlanes : 0),
          (this.numPlanes += E);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(h, d, p, g) {
    const x = h !== null ? h.length : 0;
    let m = null;
    if (x !== 0) {
      if (((m = c.value), g !== !0 || m === null)) {
        const f = p + x * 4,
          E = d.matrixWorldInverse;
        o.getNormalMatrix(E),
          (m === null || m.length < f) && (m = new Float32Array(f));
        for (let S = 0, A = p; S !== x; ++S, A += 4)
          a.copy(h[S]).applyMatrix4(E, o),
            a.normal.toArray(m, A),
            (m[A + 3] = a.constant);
      }
      (c.value = m), (c.needsUpdate = !0);
    }
    return (e.numPlanes = x), (e.numIntersection = 0), m;
  }
}
function Mm(s) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Fa ? (a.mapping = Yi) : o === Ba && (a.mapping = qi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Fa || o === Ba)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Pd(c.height);
            return (
              l.fromEquirectangularTexture(s, a),
              e.set(a, l),
              a.addEventListener("dispose", i),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Do extends pu {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += l * this.view.offsetX),
        (a = r + l * this.view.width),
        (o -= u * this.view.offsetY),
        (c = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const zi = 4,
  Bc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  si = 20,
  fa = new Do(),
  zc = new Pe();
let pa = null,
  ma = 0,
  ga = 0,
  _a = !1;
const ni = (1 + Math.sqrt(5)) / 2,
  Li = 1 / ni,
  kc = [
    new P(-ni, Li, 0),
    new P(ni, Li, 0),
    new P(-Li, 0, ni),
    new P(Li, 0, ni),
    new P(0, ni, -Li),
    new P(0, ni, Li),
    new P(-1, 1, -1),
    new P(1, 1, -1),
    new P(-1, 1, 1),
    new P(1, 1, 1),
  ];
class Hc {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (pa = this._renderer.getRenderTarget()),
      (ma = this._renderer.getActiveCubeFace()),
      (ga = this._renderer.getActiveMipmapLevel()),
      (_a = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Wc()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Gc()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(pa, ma, ga),
      (this._renderer.xr.enabled = _a),
      (e.scissorTest = !1),
      sr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Yi || e.mapping === qi
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (pa = this._renderer.getRenderTarget()),
      (ma = this._renderer.getActiveCubeFace()),
      (ga = this._renderer.getActiveMipmapLevel()),
      (_a = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: kt,
        minFilter: kt,
        generateMipmaps: !1,
        type: Ls,
        format: Xt,
        colorSpace: Tt,
        depthBuffer: !1,
      },
      i = Vc(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Vc(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = ym(r)),
        (this._blurMaterial = Sm(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ot(this._lodPlanes[0], e);
    this._renderer.compile(t, fa);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new wt(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      d = u.toneMapping;
    u.getClearColor(zc), (u.toneMapping = Gn), (u.autoClear = !1);
    const p = new Dt({
        name: "PMREM.Background",
        side: Nt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new ot(new Ds(), p);
    let x = !1;
    const m = e.background;
    m
      ? m.isColor && (p.color.copy(m), (e.background = null), (x = !0))
      : (p.color.copy(zc), (x = !0));
    for (let f = 0; f < 6; f++) {
      const E = f % 3;
      E === 0
        ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0))
        : E === 1
          ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0))
          : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
      const S = this._cubeSize;
      sr(i, E * S, f > 2 ? S : 0, S, S),
        u.setRenderTarget(i),
        x && u.render(g, o),
        u.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = d),
      (u.autoClear = h),
      (e.background = m);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Yi || e.mapping === qi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Wc()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Gc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new ot(this._lodPlanes[0], r),
      o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    sr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, fa);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1],
        ),
        o = kc[(i - r - 1) % kc.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const u = 3,
      h = new ot(this._lodPlanes[i], l),
      d = l.uniforms,
      p = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * si - 1),
      x = r / g,
      m = isFinite(r) ? 1 + Math.floor(u * x) : si;
    m > si &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`,
      );
    const f = [];
    let E = 0;
    for (let w = 0; w < si; ++w) {
      const U = w / x,
        T = Math.exp((-U * U) / 2);
      f.push(T), w === 0 ? (E += T) : w < m && (E += 2 * T);
    }
    for (let w = 0; w < f.length; w++) f[w] = f[w] / E;
    (d.envMap.value = e.texture),
      (d.samples.value = m),
      (d.weights.value = f),
      (d.latitudinal.value = a === "latitudinal"),
      o && (d.poleAxis.value = o);
    const { _lodMax: S } = this;
    (d.dTheta.value = g), (d.mipInt.value = S - n);
    const A = this._sizeLods[i],
      D = 3 * A * (i > S - zi ? i - S + zi : 0),
      R = 4 * (this._cubeSize - A);
    sr(t, D, R, 3 * A, 2 * A), c.setRenderTarget(t), c.render(h, fa);
  }
}
function ym(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - zi + 1 + Bc.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > s - zi ? (c = Bc[a - s + zi - 1]) : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2),
      u = -l,
      h = 1 + l,
      d = [u, u, h, u, h, h, u, u, h, h, u, h],
      p = 6,
      g = 6,
      x = 3,
      m = 2,
      f = 1,
      E = new Float32Array(x * g * p),
      S = new Float32Array(m * g * p),
      A = new Float32Array(f * g * p);
    for (let R = 0; R < p; R++) {
      const w = ((R % 3) * 2) / 3 - 1,
        U = R > 2 ? 0 : -1,
        T = [
          w,
          U,
          0,
          w + 2 / 3,
          U,
          0,
          w + 2 / 3,
          U + 1,
          0,
          w,
          U,
          0,
          w + 2 / 3,
          U + 1,
          0,
          w,
          U + 1,
          0,
        ];
      E.set(T, x * g * R), S.set(d, m * g * R);
      const y = [R, R, R, R, R, R];
      A.set(y, f * g * R);
    }
    const D = new Ut();
    D.setAttribute("position", new It(E, x)),
      D.setAttribute("uv", new It(S, m)),
      D.setAttribute("faceIndex", new It(A, f)),
      e.push(D),
      i > zi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Vc(s, e, t) {
  const n = new oi(s, e, t);
  return (
    (n.texture.mapping = Br),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function sr(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Sm(s, e, t) {
  const n = new Float32Array(si),
    i = new P(0, 1, 0);
  return new Wn({
    name: "SphericalGaussianBlur",
    defines: {
      n: si,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: No(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Vn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Gc() {
  return new Wn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: No(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Vn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Wc() {
  return new Wn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: No(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Vn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function No() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Em(s) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === Fa || c === Ba,
        u = c === Yi || c === qi;
      if (l || u) {
        let h = e.get(o);
        const d = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return (
            t === null && (t = new Hc(s)),
            (h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h)),
            (h.texture.pmremVersion = o.pmremVersion),
            e.set(o, h),
            h.texture
          );
        if (h !== void 0) return h.texture;
        {
          const p = o.image;
          return (l && p && p.height > 0) || (u && p && i(p))
            ? (t === null && (t = new Hc(s)),
              (h = l ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (h.texture.pmremVersion = o.pmremVersion),
              e.set(o, h),
              o.addEventListener("dispose", r),
              h.texture)
            : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function Tm(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          Lo("THREE.WebGLRenderer: " + n + " extension not supported."),
        i
      );
    },
  };
}
function Am(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const x = d.morphAttributes[g];
      for (let m = 0, f = x.length; m < f; m++) e.remove(x[m]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(h, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener("dispose", a),
        (i[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function c(h) {
    const d = h.attributes;
    for (const g in d) e.update(d[g], s.ARRAY_BUFFER);
    const p = h.morphAttributes;
    for (const g in p) {
      const x = p[g];
      for (let m = 0, f = x.length; m < f; m++) e.update(x[m], s.ARRAY_BUFFER);
    }
  }
  function l(h) {
    const d = [],
      p = h.index,
      g = h.attributes.position;
    let x = 0;
    if (p !== null) {
      const E = p.array;
      x = p.version;
      for (let S = 0, A = E.length; S < A; S += 3) {
        const D = E[S + 0],
          R = E[S + 1],
          w = E[S + 2];
        d.push(D, R, R, w, w, D);
      }
    } else if (g !== void 0) {
      const E = g.array;
      x = g.version;
      for (let S = 0, A = E.length / 3 - 1; S < A; S += 3) {
        const D = S + 0,
          R = S + 1,
          w = S + 2;
        d.push(D, R, R, w, w, D);
      }
    } else return;
    const m = new (au(d) ? du : hu)(d, 1);
    m.version = x;
    const f = r.get(h);
    f && e.remove(f), r.set(h, m);
  }
  function u(h) {
    const d = r.get(h);
    if (d) {
      const p = h.index;
      p !== null && d.version < p.version && l(h);
    } else l(h);
    return r.get(h);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function bm(s, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    (r = d.type), (a = d.bytesPerElement);
  }
  function c(d, p) {
    s.drawElements(n, p, r, d * a), t.update(p, n, 1);
  }
  function l(d, p, g) {
    g !== 0 && (s.drawElementsInstanced(n, p, r, d * a, g), t.update(p, n, g));
  }
  function u(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, g);
    let m = 0;
    for (let f = 0; f < g; f++) m += p[f];
    t.update(m, n, 1);
  }
  function h(d, p, g, x) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) l(d[f] / a, p[f], x[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, x, 0, g);
      let f = 0;
      for (let E = 0; E < g; E++) f += p[E];
      for (let E = 0; E < x.length; E++) t.update(f, n, x[E]);
    }
  }
  (this.setMode = i),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = h);
}
function wm(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Rm(s, e, t) {
  const n = new WeakMap(),
    i = new $e();
  function r(a, o, c) {
    const l = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      h = u !== void 0 ? u.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== h) {
      let y = function () {
        U.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      var p = y;
      d !== void 0 && d.texture.dispose();
      const g = o.morphAttributes.position !== void 0,
        x = o.morphAttributes.normal !== void 0,
        m = o.morphAttributes.color !== void 0,
        f = o.morphAttributes.position || [],
        E = o.morphAttributes.normal || [],
        S = o.morphAttributes.color || [];
      let A = 0;
      g === !0 && (A = 1), x === !0 && (A = 2), m === !0 && (A = 3);
      let D = o.attributes.position.count * A,
        R = 1;
      D > e.maxTextureSize &&
        ((R = Math.ceil(D / e.maxTextureSize)), (D = e.maxTextureSize));
      const w = new Float32Array(D * R * 4 * h),
        U = new cu(w, D, R, h);
      (U.type = tn), (U.needsUpdate = !0);
      const T = A * 4;
      for (let L = 0; L < h; L++) {
        const W = f[L],
          H = E[L],
          K = S[L],
          q = D * R * 4 * L;
        for (let X = 0; X < W.count; X++) {
          const j = X * T;
          g === !0 &&
            (i.fromBufferAttribute(W, X),
            (w[q + j + 0] = i.x),
            (w[q + j + 1] = i.y),
            (w[q + j + 2] = i.z),
            (w[q + j + 3] = 0)),
            x === !0 &&
              (i.fromBufferAttribute(H, X),
              (w[q + j + 4] = i.x),
              (w[q + j + 5] = i.y),
              (w[q + j + 6] = i.z),
              (w[q + j + 7] = 0)),
            m === !0 &&
              (i.fromBufferAttribute(K, X),
              (w[q + j + 8] = i.x),
              (w[q + j + 9] = i.y),
              (w[q + j + 10] = i.z),
              (w[q + j + 11] = K.itemSize === 4 ? i.w : 1));
        }
      }
      (d = { count: h, texture: U, size: new ge(D, R) }),
        n.set(o, d),
        o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let g = 0;
      for (let m = 0; m < l.length; m++) g += l[m];
      const x = o.morphTargetsRelative ? 1 : 1 - g;
      c.getUniforms().setValue(s, "morphTargetBaseInfluence", x),
        c.getUniforms().setValue(s, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t),
      c.getUniforms().setValue(s, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function Cm(s, e, t, n) {
  let i = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      u = c.geometry,
      h = e.get(c, u);
    if (
      (i.get(h) !== l && (e.update(h), i.set(h, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        i.get(c) !== l &&
          (t.update(c.instanceMatrix, s.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER),
          i.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return h;
  }
  function a() {
    i = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
class _u extends gt {
  constructor(e, t, n, i, r, a, o, c, l, u = Hi) {
    if (u !== Hi && u !== Zi)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    n === void 0 && u === Hi && (n = ai),
      n === void 0 && u === Zi && (n = ji),
      super(null, i, r, a, o, c, u, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : Lt),
      (this.minFilter = c !== void 0 ? c : Lt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const xu = new gt(),
  Xc = new _u(1, 1),
  vu = new cu(),
  Mu = new pd(),
  yu = new mu(),
  Yc = [],
  qc = [],
  Kc = new Float32Array(16),
  jc = new Float32Array(9),
  Zc = new Float32Array(4);
function ns(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Yc[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (Yc[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), s[a].toArray(r, o);
  }
  return r;
}
function _t(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function xt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function kr(s, e) {
  let t = qc[e];
  t === void 0 && ((t = new Int32Array(e)), (qc[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function Pm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function Lm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    s.uniform2fv(this.addr, e), xt(t, e);
  }
}
function Im(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (_t(t, e)) return;
    s.uniform3fv(this.addr, e), xt(t, e);
  }
}
function Dm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    s.uniform4fv(this.addr, e), xt(t, e);
  }
}
function Nm(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), xt(t, e);
  } else {
    if (_t(t, n)) return;
    Zc.set(n), s.uniformMatrix2fv(this.addr, !1, Zc), xt(t, n);
  }
}
function Um(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), xt(t, e);
  } else {
    if (_t(t, n)) return;
    jc.set(n), s.uniformMatrix3fv(this.addr, !1, jc), xt(t, n);
  }
}
function Om(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), xt(t, e);
  } else {
    if (_t(t, n)) return;
    Kc.set(n), s.uniformMatrix4fv(this.addr, !1, Kc), xt(t, n);
  }
}
function Fm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function Bm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    s.uniform2iv(this.addr, e), xt(t, e);
  }
}
function zm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (_t(t, e)) return;
    s.uniform3iv(this.addr, e), xt(t, e);
  }
}
function km(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    s.uniform4iv(this.addr, e), xt(t, e);
  }
}
function Hm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function Vm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (_t(t, e)) return;
    s.uniform2uiv(this.addr, e), xt(t, e);
  }
}
function Gm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (_t(t, e)) return;
    s.uniform3uiv(this.addr, e), xt(t, e);
  }
}
function Wm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (_t(t, e)) return;
    s.uniform4uiv(this.addr, e), xt(t, e);
  }
}
function Xm(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i));
  let r;
  this.type === s.SAMPLER_2D_SHADOW
    ? ((Xc.compareFunction = su), (r = Xc))
    : (r = xu),
    t.setTexture2D(e || r, i);
}
function Ym(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Mu, i);
}
function qm(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || yu, i);
}
function Km(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || vu, i);
}
function jm(s) {
  switch (s) {
    case 5126:
      return Pm;
    case 35664:
      return Lm;
    case 35665:
      return Im;
    case 35666:
      return Dm;
    case 35674:
      return Nm;
    case 35675:
      return Um;
    case 35676:
      return Om;
    case 5124:
    case 35670:
      return Fm;
    case 35667:
    case 35671:
      return Bm;
    case 35668:
    case 35672:
      return zm;
    case 35669:
    case 35673:
      return km;
    case 5125:
      return Hm;
    case 36294:
      return Vm;
    case 36295:
      return Gm;
    case 36296:
      return Wm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Xm;
    case 35679:
    case 36299:
    case 36307:
      return Ym;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return qm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Km;
  }
}
function Zm(s, e) {
  s.uniform1fv(this.addr, e);
}
function $m(s, e) {
  const t = ns(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Jm(s, e) {
  const t = ns(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Qm(s, e) {
  const t = ns(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function eg(s, e) {
  const t = ns(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function tg(s, e) {
  const t = ns(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function ng(s, e) {
  const t = ns(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function ig(s, e) {
  s.uniform1iv(this.addr, e);
}
function sg(s, e) {
  s.uniform2iv(this.addr, e);
}
function rg(s, e) {
  s.uniform3iv(this.addr, e);
}
function ag(s, e) {
  s.uniform4iv(this.addr, e);
}
function og(s, e) {
  s.uniform1uiv(this.addr, e);
}
function cg(s, e) {
  s.uniform2uiv(this.addr, e);
}
function lg(s, e) {
  s.uniform3uiv(this.addr, e);
}
function ug(s, e) {
  s.uniform4uiv(this.addr, e);
}
function hg(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = kr(t, i);
  _t(n, r) || (s.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || xu, r[a]);
}
function dg(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = kr(t, i);
  _t(n, r) || (s.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || Mu, r[a]);
}
function fg(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = kr(t, i);
  _t(n, r) || (s.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || yu, r[a]);
}
function pg(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = kr(t, i);
  _t(n, r) || (s.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || vu, r[a]);
}
function mg(s) {
  switch (s) {
    case 5126:
      return Zm;
    case 35664:
      return $m;
    case 35665:
      return Jm;
    case 35666:
      return Qm;
    case 35674:
      return eg;
    case 35675:
      return tg;
    case 35676:
      return ng;
    case 5124:
    case 35670:
      return ig;
    case 35667:
    case 35671:
      return sg;
    case 35668:
    case 35672:
      return rg;
    case 35669:
    case 35673:
      return ag;
    case 5125:
      return og;
    case 36294:
      return cg;
    case 36295:
      return lg;
    case 36296:
      return ug;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hg;
    case 35679:
    case 36299:
    case 36307:
      return dg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return pg;
  }
}
class gg {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = jm(t.type));
  }
}
class _g {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = mg(t.type));
  }
}
class xg {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const xa = /(\w+)(\])?(\[|\.)?/g;
function $c(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function vg(s, e, t) {
  const n = s.name,
    i = n.length;
  for (xa.lastIndex = 0; ; ) {
    const r = xa.exec(n),
      a = xa.lastIndex;
    let o = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === i))) {
      $c(t, l === void 0 ? new gg(o, s, e) : new _g(o, s, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && ((h = new xg(o)), $c(t, h)), (t = h);
    }
  }
}
class wr {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      vg(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Jc(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Mg = 37297;
let yg = 0;
function Sg(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Eg(s) {
  const e = Xe.getPrimaries(Xe.workingColorSpace),
    t = Xe.getPrimaries(s);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === Dr && t === Ir
        ? (n = "LinearDisplayP3ToLinearSRGB")
        : e === Ir && t === Dr && (n = "LinearSRGBToLinearDisplayP3"),
    s)
  ) {
    case Tt:
    case zr:
      return [n, "LinearTransferOETF"];
    case Pt:
    case Co:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", s),
        [n, "LinearTransferOETF"]
      );
  }
}
function Qc(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS),
    i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Sg(s.getShaderSource(e), a)
    );
  } else return i;
}
function Tg(s, e) {
  const t = Eg(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Ag(s, e) {
  let t;
  switch (e) {
    case Ah:
      t = "Linear";
      break;
    case bh:
      t = "Reinhard";
      break;
    case wh:
      t = "OptimizedCineon";
      break;
    case Rh:
      t = "ACESFilmic";
      break;
    case Ph:
      t = "AgX";
      break;
    case Lh:
      t = "Neutral";
      break;
    case Ch:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function bg(s) {
  return [
    s.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(ys).join(`
`);
}
function wg(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Rg(s, e) {
  const t = {},
    n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2),
      r.type === s.FLOAT_MAT3 && (o = 3),
      r.type === s.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: s.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function ys(s) {
  return s !== "";
}
function el(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function tl(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const Cg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function po(s) {
  return s.replace(Cg, Lg);
}
const Pg = new Map();
function Lg(s, e) {
  let t = Ue[e];
  if (t === void 0) {
    const n = Pg.get(e);
    if (n !== void 0)
      (t = Ue[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return po(t);
}
const Ig =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function nl(s) {
  return s.replace(Ig, Dg);
}
function Dg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function il(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : s.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function Ng(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === Wl
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === $u
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : s.shadowMapType === xn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Ug(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Yi:
      case qi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Br:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Og(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case qi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Fg(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Xl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Eh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Th:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Bg(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function zg(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Ng(t),
    l = Ug(t),
    u = Og(t),
    h = Fg(t),
    d = Bg(t),
    p = bg(t),
    g = wg(r),
    x = i.createProgram();
  let m,
    f,
    E = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(ys).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (f = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(ys).join(`
`)),
      f.length > 0 &&
        (f += `
`))
    : ((m = [
        il(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(ys).join(`
`)),
      (f = [
        il(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + h : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Gn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Gn ? Ue.tonemapping_pars_fragment : "",
        t.toneMapping !== Gn ? Ag("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ue.colorspace_pars_fragment,
        Tg("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(ys).join(`
`))),
    (a = po(a)),
    (a = el(a, t)),
    (a = tl(a, t)),
    (o = po(o)),
    (o = el(o, t)),
    (o = tl(o, t)),
    (a = nl(a)),
    (o = nl(o)),
    t.isRawShaderMaterial !== !0 &&
      ((E = `#version 300 es
`),
      (m =
        [
          p,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (f =
        [
          "#define varying in",
          t.glslVersion === _c
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === _c ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        f));
  const S = E + m + a,
    A = E + f + o,
    D = Jc(i, i.VERTEX_SHADER, S),
    R = Jc(i, i.FRAGMENT_SHADER, A);
  i.attachShader(x, D),
    i.attachShader(x, R),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(x, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(x, 0, "position"),
    i.linkProgram(x);
  function w(L) {
    if (s.debug.checkShaderErrors) {
      const W = i.getProgramInfoLog(x).trim(),
        H = i.getShaderInfoLog(D).trim(),
        K = i.getShaderInfoLog(R).trim();
      let q = !0,
        X = !0;
      if (i.getProgramParameter(x, i.LINK_STATUS) === !1)
        if (((q = !1), typeof s.debug.onShaderError == "function"))
          s.debug.onShaderError(i, x, D, R);
        else {
          const j = Qc(i, D, "vertex"),
            G = Qc(i, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(x, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              L.name +
              `
Material Type: ` +
              L.type +
              `

Program Info Log: ` +
              W +
              `
` +
              j +
              `
` +
              G,
          );
        }
      else
        W !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", W)
          : (H === "" || K === "") && (X = !1);
      X &&
        (L.diagnostics = {
          runnable: q,
          programLog: W,
          vertexShader: { log: H, prefix: m },
          fragmentShader: { log: K, prefix: f },
        });
    }
    i.deleteShader(D), i.deleteShader(R), (U = new wr(i, x)), (T = Rg(i, x));
  }
  let U;
  this.getUniforms = function () {
    return U === void 0 && w(this), U;
  };
  let T;
  this.getAttributes = function () {
    return T === void 0 && w(this), T;
  };
  let y = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return y === !1 && (y = i.getProgramParameter(x, Mg)), y;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(x),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = yg++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = x),
    (this.vertexShader = D),
    (this.fragmentShader = R),
    this
  );
}
let kg = 0;
class Hg {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Vg(e)), t.set(e, n)), n;
  }
}
class Vg {
  constructor(e) {
    (this.id = kg++), (this.code = e), (this.usedTimes = 0);
  }
}
function Gg(s, e, t, n, i, r, a) {
  const o = new lu(),
    c = new Hg(),
    l = new Set(),
    u = [],
    h = i.logarithmicDepthBuffer,
    d = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function x(T) {
    return l.add(T), T === 0 ? "uv" : `uv${T}`;
  }
  function m(T, y, L, W, H) {
    const K = W.fog,
      q = H.geometry,
      X = T.isMeshStandardMaterial ? W.environment : null,
      j = (T.isMeshStandardMaterial ? t : e).get(T.envMap || X),
      G = j && j.mapping === Br ? j.image.height : null,
      ce = g[T.type];
    T.precision !== null &&
      ((p = i.getMaxPrecision(T.precision)),
      p !== T.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          T.precision,
          "not supported, using",
          p,
          "instead.",
        ));
    const he =
        q.morphAttributes.position ||
        q.morphAttributes.normal ||
        q.morphAttributes.color,
      pe = he !== void 0 ? he.length : 0;
    let ze = 0;
    q.morphAttributes.position !== void 0 && (ze = 1),
      q.morphAttributes.normal !== void 0 && (ze = 2),
      q.morphAttributes.color !== void 0 && (ze = 3);
    let Ge, Y, ee, de;
    if (ce) {
      const He = rn[ce];
      (Ge = He.vertexShader), (Y = He.fragmentShader);
    } else
      (Ge = T.vertexShader),
        (Y = T.fragmentShader),
        c.update(T),
        (ee = c.getVertexShaderID(T)),
        (de = c.getFragmentShaderID(T));
    const le = s.getRenderTarget(),
      Le = H.isInstancedMesh === !0,
      De = H.isBatchedMesh === !0,
      Fe = !!T.map,
      Qe = !!T.matcap,
      C = !!j,
      it = !!T.aoMap,
      Ve = !!T.lightMap,
      We = !!T.bumpMap,
      _e = !!T.normalMap,
      st = !!T.displacementMap,
      we = !!T.emissiveMap,
      Ce = !!T.metalnessMap,
      b = !!T.roughnessMap,
      v = T.anisotropy > 0,
      k = T.clearcoat > 0,
      $ = T.dispersion > 0,
      Q = T.iridescence > 0,
      Z = T.sheen > 0,
      Me = T.transmission > 0,
      ie = v && !!T.anisotropyMap,
      ae = k && !!T.clearcoatMap,
      Ie = k && !!T.clearcoatNormalMap,
      te = k && !!T.clearcoatRoughnessMap,
      oe = Q && !!T.iridescenceMap,
      ke = Q && !!T.iridescenceThicknessMap,
      Se = Z && !!T.sheenColorMap,
      ue = Z && !!T.sheenRoughnessMap,
      Te = !!T.specularMap,
      Re = !!T.specularColorMap,
      nt = !!T.specularIntensityMap,
      _ = Me && !!T.transmissionMap,
      O = Me && !!T.thicknessMap,
      F = !!T.gradientMap,
      V = !!T.alphaMap,
      J = T.alphaTest > 0,
      xe = !!T.alphaHash,
      Ae = !!T.extensions;
    let ct = Gn;
    T.toneMapped &&
      (le === null || le.isXRRenderTarget === !0) &&
      (ct = s.toneMapping);
    const pt = {
      shaderID: ce,
      shaderType: T.type,
      shaderName: T.name,
      vertexShader: Ge,
      fragmentShader: Y,
      defines: T.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: de,
      isRawShaderMaterial: T.isRawShaderMaterial === !0,
      glslVersion: T.glslVersion,
      precision: p,
      batching: De,
      batchingColor: De && H._colorsTexture !== null,
      instancing: Le,
      instancingColor: Le && H.instanceColor !== null,
      instancingMorph: Le && H.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace:
        le === null
          ? s.outputColorSpace
          : le.isXRRenderTarget === !0
            ? le.texture.colorSpace
            : Tt,
      alphaToCoverage: !!T.alphaToCoverage,
      map: Fe,
      matcap: Qe,
      envMap: C,
      envMapMode: C && j.mapping,
      envMapCubeUVHeight: G,
      aoMap: it,
      lightMap: Ve,
      bumpMap: We,
      normalMap: _e,
      displacementMap: d && st,
      emissiveMap: we,
      normalMapObjectSpace: _e && T.normalMapType === Fh,
      normalMapTangentSpace: _e && T.normalMapType === Ro,
      metalnessMap: Ce,
      roughnessMap: b,
      anisotropy: v,
      anisotropyMap: ie,
      clearcoat: k,
      clearcoatMap: ae,
      clearcoatNormalMap: Ie,
      clearcoatRoughnessMap: te,
      dispersion: $,
      iridescence: Q,
      iridescenceMap: oe,
      iridescenceThicknessMap: ke,
      sheen: Z,
      sheenColorMap: Se,
      sheenRoughnessMap: ue,
      specularMap: Te,
      specularColorMap: Re,
      specularIntensityMap: nt,
      transmission: Me,
      transmissionMap: _,
      thicknessMap: O,
      gradientMap: F,
      opaque:
        T.transparent === !1 && T.blending === ki && T.alphaToCoverage === !1,
      alphaMap: V,
      alphaTest: J,
      alphaHash: xe,
      combine: T.combine,
      mapUv: Fe && x(T.map.channel),
      aoMapUv: it && x(T.aoMap.channel),
      lightMapUv: Ve && x(T.lightMap.channel),
      bumpMapUv: We && x(T.bumpMap.channel),
      normalMapUv: _e && x(T.normalMap.channel),
      displacementMapUv: st && x(T.displacementMap.channel),
      emissiveMapUv: we && x(T.emissiveMap.channel),
      metalnessMapUv: Ce && x(T.metalnessMap.channel),
      roughnessMapUv: b && x(T.roughnessMap.channel),
      anisotropyMapUv: ie && x(T.anisotropyMap.channel),
      clearcoatMapUv: ae && x(T.clearcoatMap.channel),
      clearcoatNormalMapUv: Ie && x(T.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: te && x(T.clearcoatRoughnessMap.channel),
      iridescenceMapUv: oe && x(T.iridescenceMap.channel),
      iridescenceThicknessMapUv: ke && x(T.iridescenceThicknessMap.channel),
      sheenColorMapUv: Se && x(T.sheenColorMap.channel),
      sheenRoughnessMapUv: ue && x(T.sheenRoughnessMap.channel),
      specularMapUv: Te && x(T.specularMap.channel),
      specularColorMapUv: Re && x(T.specularColorMap.channel),
      specularIntensityMapUv: nt && x(T.specularIntensityMap.channel),
      transmissionMapUv: _ && x(T.transmissionMap.channel),
      thicknessMapUv: O && x(T.thicknessMap.channel),
      alphaMapUv: V && x(T.alphaMap.channel),
      vertexTangents: !!q.attributes.tangent && (_e || v),
      vertexColors: T.vertexColors,
      vertexAlphas:
        T.vertexColors === !0 &&
        !!q.attributes.color &&
        q.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!q.attributes.uv && (Fe || V),
      fog: !!K,
      useFog: T.fog === !0,
      fogExp2: !!K && K.isFogExp2,
      flatShading: T.flatShading === !0,
      sizeAttenuation: T.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: pe,
      morphTextureStride: ze,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numSpotLightMaps: y.spotLightMap.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
      numLightProbes: y.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: T.dithering,
      shadowMapEnabled: s.shadowMap.enabled && L.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: ct,
      decodeVideoTexture:
        Fe &&
        T.map.isVideoTexture === !0 &&
        Xe.getTransfer(T.map.colorSpace) === et,
      premultipliedAlpha: T.premultipliedAlpha,
      doubleSided: T.side === an,
      flipSided: T.side === Nt,
      useDepthPacking: T.depthPacking >= 0,
      depthPacking: T.depthPacking || 0,
      index0AttributeName: T.index0AttributeName,
      extensionClipCullDistance:
        Ae &&
        T.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((Ae && T.extensions.multiDraw === !0) || De) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: T.customProgramCacheKey(),
    };
    return (
      (pt.vertexUv1s = l.has(1)),
      (pt.vertexUv2s = l.has(2)),
      (pt.vertexUv3s = l.has(3)),
      l.clear(),
      pt
    );
  }
  function f(T) {
    const y = [];
    if (
      (T.shaderID
        ? y.push(T.shaderID)
        : (y.push(T.customVertexShaderID), y.push(T.customFragmentShaderID)),
      T.defines !== void 0)
    )
      for (const L in T.defines) y.push(L), y.push(T.defines[L]);
    return (
      T.isRawShaderMaterial === !1 &&
        (E(y, T), S(y, T), y.push(s.outputColorSpace)),
      y.push(T.customProgramCacheKey),
      y.join()
    );
  }
  function E(T, y) {
    T.push(y.precision),
      T.push(y.outputColorSpace),
      T.push(y.envMapMode),
      T.push(y.envMapCubeUVHeight),
      T.push(y.mapUv),
      T.push(y.alphaMapUv),
      T.push(y.lightMapUv),
      T.push(y.aoMapUv),
      T.push(y.bumpMapUv),
      T.push(y.normalMapUv),
      T.push(y.displacementMapUv),
      T.push(y.emissiveMapUv),
      T.push(y.metalnessMapUv),
      T.push(y.roughnessMapUv),
      T.push(y.anisotropyMapUv),
      T.push(y.clearcoatMapUv),
      T.push(y.clearcoatNormalMapUv),
      T.push(y.clearcoatRoughnessMapUv),
      T.push(y.iridescenceMapUv),
      T.push(y.iridescenceThicknessMapUv),
      T.push(y.sheenColorMapUv),
      T.push(y.sheenRoughnessMapUv),
      T.push(y.specularMapUv),
      T.push(y.specularColorMapUv),
      T.push(y.specularIntensityMapUv),
      T.push(y.transmissionMapUv),
      T.push(y.thicknessMapUv),
      T.push(y.combine),
      T.push(y.fogExp2),
      T.push(y.sizeAttenuation),
      T.push(y.morphTargetsCount),
      T.push(y.morphAttributeCount),
      T.push(y.numDirLights),
      T.push(y.numPointLights),
      T.push(y.numSpotLights),
      T.push(y.numSpotLightMaps),
      T.push(y.numHemiLights),
      T.push(y.numRectAreaLights),
      T.push(y.numDirLightShadows),
      T.push(y.numPointLightShadows),
      T.push(y.numSpotLightShadows),
      T.push(y.numSpotLightShadowsWithMaps),
      T.push(y.numLightProbes),
      T.push(y.shadowMapType),
      T.push(y.toneMapping),
      T.push(y.numClippingPlanes),
      T.push(y.numClipIntersection),
      T.push(y.depthPacking);
  }
  function S(T, y) {
    o.disableAll(),
      y.supportsVertexTextures && o.enable(0),
      y.instancing && o.enable(1),
      y.instancingColor && o.enable(2),
      y.instancingMorph && o.enable(3),
      y.matcap && o.enable(4),
      y.envMap && o.enable(5),
      y.normalMapObjectSpace && o.enable(6),
      y.normalMapTangentSpace && o.enable(7),
      y.clearcoat && o.enable(8),
      y.iridescence && o.enable(9),
      y.alphaTest && o.enable(10),
      y.vertexColors && o.enable(11),
      y.vertexAlphas && o.enable(12),
      y.vertexUv1s && o.enable(13),
      y.vertexUv2s && o.enable(14),
      y.vertexUv3s && o.enable(15),
      y.vertexTangents && o.enable(16),
      y.anisotropy && o.enable(17),
      y.alphaHash && o.enable(18),
      y.batching && o.enable(19),
      y.dispersion && o.enable(20),
      y.batchingColor && o.enable(21),
      T.push(o.mask),
      o.disableAll(),
      y.fog && o.enable(0),
      y.useFog && o.enable(1),
      y.flatShading && o.enable(2),
      y.logarithmicDepthBuffer && o.enable(3),
      y.skinning && o.enable(4),
      y.morphTargets && o.enable(5),
      y.morphNormals && o.enable(6),
      y.morphColors && o.enable(7),
      y.premultipliedAlpha && o.enable(8),
      y.shadowMapEnabled && o.enable(9),
      y.doubleSided && o.enable(10),
      y.flipSided && o.enable(11),
      y.useDepthPacking && o.enable(12),
      y.dithering && o.enable(13),
      y.transmission && o.enable(14),
      y.sheen && o.enable(15),
      y.opaque && o.enable(16),
      y.pointsUvs && o.enable(17),
      y.decodeVideoTexture && o.enable(18),
      y.alphaToCoverage && o.enable(19),
      T.push(o.mask);
  }
  function A(T) {
    const y = g[T.type];
    let L;
    if (y) {
      const W = rn[y];
      L = bd.clone(W.uniforms);
    } else L = T.uniforms;
    return L;
  }
  function D(T, y) {
    let L;
    for (let W = 0, H = u.length; W < H; W++) {
      const K = u[W];
      if (K.cacheKey === y) {
        (L = K), ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && ((L = new zg(s, y, T, r)), u.push(L)), L;
  }
  function R(T) {
    if (--T.usedTimes === 0) {
      const y = u.indexOf(T);
      (u[y] = u[u.length - 1]), u.pop(), T.destroy();
    }
  }
  function w(T) {
    c.remove(T);
  }
  function U() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: A,
    acquireProgram: D,
    releaseProgram: R,
    releaseShaderCache: w,
    programs: u,
    dispose: U,
  };
}
function Wg() {
  let s = new WeakMap();
  function e(r) {
    let a = s.get(r);
    return a === void 0 && ((a = {}), s.set(r, a)), a;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, a, o) {
    s.get(r)[a] = o;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Xg(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
      ? s.renderOrder - e.renderOrder
      : s.material.id !== e.material.id
        ? s.material.id - e.material.id
        : s.z !== e.z
          ? s.z - e.z
          : s.id - e.id;
}
function sl(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
      ? s.renderOrder - e.renderOrder
      : s.z !== e.z
        ? e.z - s.z
        : s.id - e.id;
}
function rl() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(h, d, p, g, x, m) {
    let f = s[e];
    return (
      f === void 0
        ? ((f = {
            id: h.id,
            object: h,
            geometry: d,
            material: p,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: x,
            group: m,
          }),
          (s[e] = f))
        : ((f.id = h.id),
          (f.object = h),
          (f.geometry = d),
          (f.material = p),
          (f.groupOrder = g),
          (f.renderOrder = h.renderOrder),
          (f.z = x),
          (f.group = m)),
      e++,
      f
    );
  }
  function o(h, d, p, g, x, m) {
    const f = a(h, d, p, g, x, m);
    p.transmission > 0
      ? n.push(f)
      : p.transparent === !0
        ? i.push(f)
        : t.push(f);
  }
  function c(h, d, p, g, x, m) {
    const f = a(h, d, p, g, x, m);
    p.transmission > 0
      ? n.unshift(f)
      : p.transparent === !0
        ? i.unshift(f)
        : t.unshift(f);
  }
  function l(h, d) {
    t.length > 1 && t.sort(h || Xg),
      n.length > 1 && n.sort(d || sl),
      i.length > 1 && i.sort(d || sl);
  }
  function u() {
    for (let h = e, d = s.length; h < d; h++) {
      const p = s[h];
      if (p.id === null) break;
      (p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: c,
    finish: u,
    sort: l,
  };
}
function Yg() {
  let s = new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new rl()), s.set(n, [a]))
        : i >= r.length
          ? ((a = new rl()), r.push(a))
          : (a = r[i]),
      a
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function qg() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new P(), color: new Pe() };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new Pe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new P(), color: new Pe(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new P(), skyColor: new Pe(), groundColor: new Pe() };
          break;
        case "RectAreaLight":
          t = {
            color: new Pe(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function Kg() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ge(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ge(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ge(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let jg = 0;
function Zg(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function $g(s) {
  const e = new qg(),
    t = Kg(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new P());
  const i = new P(),
    r = new Ne(),
    a = new Ne();
  function o(l) {
    let u = 0,
      h = 0,
      d = 0;
    for (let T = 0; T < 9; T++) n.probe[T].set(0, 0, 0);
    let p = 0,
      g = 0,
      x = 0,
      m = 0,
      f = 0,
      E = 0,
      S = 0,
      A = 0,
      D = 0,
      R = 0,
      w = 0;
    l.sort(Zg);
    for (let T = 0, y = l.length; T < y; T++) {
      const L = l[T],
        W = L.color,
        H = L.intensity,
        K = L.distance,
        q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight) (u += W.r * H), (h += W.g * H), (d += W.b * H);
      else if (L.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(L.sh.coefficients[X], H);
        w++;
      } else if (L.isDirectionalLight) {
        const X = e.get(L);
        if ((X.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow)) {
          const j = L.shadow,
            G = t.get(L);
          (G.shadowIntensity = j.intensity),
            (G.shadowBias = j.bias),
            (G.shadowNormalBias = j.normalBias),
            (G.shadowRadius = j.radius),
            (G.shadowMapSize = j.mapSize),
            (n.directionalShadow[p] = G),
            (n.directionalShadowMap[p] = q),
            (n.directionalShadowMatrix[p] = L.shadow.matrix),
            E++;
        }
        (n.directional[p] = X), p++;
      } else if (L.isSpotLight) {
        const X = e.get(L);
        X.position.setFromMatrixPosition(L.matrixWorld),
          X.color.copy(W).multiplyScalar(H),
          (X.distance = K),
          (X.coneCos = Math.cos(L.angle)),
          (X.penumbraCos = Math.cos(L.angle * (1 - L.penumbra))),
          (X.decay = L.decay),
          (n.spot[x] = X);
        const j = L.shadow;
        if (
          (L.map &&
            ((n.spotLightMap[D] = L.map),
            D++,
            j.updateMatrices(L),
            L.castShadow && R++),
          (n.spotLightMatrix[x] = j.matrix),
          L.castShadow)
        ) {
          const G = t.get(L);
          (G.shadowIntensity = j.intensity),
            (G.shadowBias = j.bias),
            (G.shadowNormalBias = j.normalBias),
            (G.shadowRadius = j.radius),
            (G.shadowMapSize = j.mapSize),
            (n.spotShadow[x] = G),
            (n.spotShadowMap[x] = q),
            A++;
        }
        x++;
      } else if (L.isRectAreaLight) {
        const X = e.get(L);
        X.color.copy(W).multiplyScalar(H),
          X.halfWidth.set(L.width * 0.5, 0, 0),
          X.halfHeight.set(0, L.height * 0.5, 0),
          (n.rectArea[m] = X),
          m++;
      } else if (L.isPointLight) {
        const X = e.get(L);
        if (
          (X.color.copy(L.color).multiplyScalar(L.intensity),
          (X.distance = L.distance),
          (X.decay = L.decay),
          L.castShadow)
        ) {
          const j = L.shadow,
            G = t.get(L);
          (G.shadowIntensity = j.intensity),
            (G.shadowBias = j.bias),
            (G.shadowNormalBias = j.normalBias),
            (G.shadowRadius = j.radius),
            (G.shadowMapSize = j.mapSize),
            (G.shadowCameraNear = j.camera.near),
            (G.shadowCameraFar = j.camera.far),
            (n.pointShadow[g] = G),
            (n.pointShadowMap[g] = q),
            (n.pointShadowMatrix[g] = L.shadow.matrix),
            S++;
        }
        (n.point[g] = X), g++;
      } else if (L.isHemisphereLight) {
        const X = e.get(L);
        X.skyColor.copy(L.color).multiplyScalar(H),
          X.groundColor.copy(L.groundColor).multiplyScalar(H),
          (n.hemi[f] = X),
          f++;
      }
    }
    m > 0 &&
      (s.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = se.LTC_FLOAT_1), (n.rectAreaLTC2 = se.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = se.LTC_HALF_1), (n.rectAreaLTC2 = se.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = h),
      (n.ambient[2] = d);
    const U = n.hash;
    (U.directionalLength !== p ||
      U.pointLength !== g ||
      U.spotLength !== x ||
      U.rectAreaLength !== m ||
      U.hemiLength !== f ||
      U.numDirectionalShadows !== E ||
      U.numPointShadows !== S ||
      U.numSpotShadows !== A ||
      U.numSpotMaps !== D ||
      U.numLightProbes !== w) &&
      ((n.directional.length = p),
      (n.spot.length = x),
      (n.rectArea.length = m),
      (n.point.length = g),
      (n.hemi.length = f),
      (n.directionalShadow.length = E),
      (n.directionalShadowMap.length = E),
      (n.pointShadow.length = S),
      (n.pointShadowMap.length = S),
      (n.spotShadow.length = A),
      (n.spotShadowMap.length = A),
      (n.directionalShadowMatrix.length = E),
      (n.pointShadowMatrix.length = S),
      (n.spotLightMatrix.length = A + D - R),
      (n.spotLightMap.length = D),
      (n.numSpotLightShadowsWithMaps = R),
      (n.numLightProbes = w),
      (U.directionalLength = p),
      (U.pointLength = g),
      (U.spotLength = x),
      (U.rectAreaLength = m),
      (U.hemiLength = f),
      (U.numDirectionalShadows = E),
      (U.numPointShadows = S),
      (U.numSpotShadows = A),
      (U.numSpotMaps = D),
      (U.numLightProbes = w),
      (n.version = jg++));
  }
  function c(l, u) {
    let h = 0,
      d = 0,
      p = 0,
      g = 0,
      x = 0;
    const m = u.matrixWorldInverse;
    for (let f = 0, E = l.length; f < E; f++) {
      const S = l[f];
      if (S.isDirectionalLight) {
        const A = n.directional[h];
        A.direction.setFromMatrixPosition(S.matrixWorld),
          i.setFromMatrixPosition(S.target.matrixWorld),
          A.direction.sub(i),
          A.direction.transformDirection(m),
          h++;
      } else if (S.isSpotLight) {
        const A = n.spot[p];
        A.position.setFromMatrixPosition(S.matrixWorld),
          A.position.applyMatrix4(m),
          A.direction.setFromMatrixPosition(S.matrixWorld),
          i.setFromMatrixPosition(S.target.matrixWorld),
          A.direction.sub(i),
          A.direction.transformDirection(m),
          p++;
      } else if (S.isRectAreaLight) {
        const A = n.rectArea[g];
        A.position.setFromMatrixPosition(S.matrixWorld),
          A.position.applyMatrix4(m),
          a.identity(),
          r.copy(S.matrixWorld),
          r.premultiply(m),
          a.extractRotation(r),
          A.halfWidth.set(S.width * 0.5, 0, 0),
          A.halfHeight.set(0, S.height * 0.5, 0),
          A.halfWidth.applyMatrix4(a),
          A.halfHeight.applyMatrix4(a),
          g++;
      } else if (S.isPointLight) {
        const A = n.point[d];
        A.position.setFromMatrixPosition(S.matrixWorld),
          A.position.applyMatrix4(m),
          d++;
      } else if (S.isHemisphereLight) {
        const A = n.hemi[x];
        A.direction.setFromMatrixPosition(S.matrixWorld),
          A.direction.transformDirection(m),
          x++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function al(s) {
  const e = new $g(s),
    t = [],
    n = [];
  function i(u) {
    (l.camera = u), (t.length = 0), (n.length = 0);
  }
  function r(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function c(u) {
    e.setupView(t, u);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: i,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a,
  };
}
function Jg(s) {
  let e = new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return (
      a === void 0
        ? ((o = new al(s)), e.set(i, [o]))
        : r >= a.length
          ? ((o = new al(s)), a.push(o))
          : (o = a[r]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
class Qg extends Yt {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Uh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class e_ extends Yt {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const t_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  n_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function i_(s, e, t) {
  let n = new Io();
  const i = new ge(),
    r = new ge(),
    a = new $e(),
    o = new Qg({ depthPacking: Oh }),
    c = new e_(),
    l = {},
    u = t.maxTextureSize,
    h = { [En]: Nt, [Nt]: En, [an]: an },
    d = new Wn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new ge() },
        radius: { value: 4 },
      },
      vertexShader: t_,
      fragmentShader: n_,
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Ut();
  g.setAttribute(
    "position",
    new It(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const x = new ot(g, d),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Wl);
  let f = this.type;
  this.render = function (R, w, U) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      R.length === 0
    )
      return;
    const T = s.getRenderTarget(),
      y = s.getActiveCubeFace(),
      L = s.getActiveMipmapLevel(),
      W = s.state;
    W.setBlending(Vn),
      W.buffers.color.setClear(1, 1, 1, 1),
      W.buffers.depth.setTest(!0),
      W.setScissorTest(!1);
    const H = f !== xn && this.type === xn,
      K = f === xn && this.type !== xn;
    for (let q = 0, X = R.length; q < X; q++) {
      const j = R[q],
        G = j.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      i.copy(G.mapSize);
      const ce = G.getFrameExtents();
      if (
        (i.multiply(ce),
        r.copy(G.mapSize),
        (i.x > u || i.y > u) &&
          (i.x > u &&
            ((r.x = Math.floor(u / ce.x)),
            (i.x = r.x * ce.x),
            (G.mapSize.x = r.x)),
          i.y > u &&
            ((r.y = Math.floor(u / ce.y)),
            (i.y = r.y * ce.y),
            (G.mapSize.y = r.y))),
        G.map === null || H === !0 || K === !0)
      ) {
        const pe = this.type !== xn ? { minFilter: Lt, magFilter: Lt } : {};
        G.map !== null && G.map.dispose(),
          (G.map = new oi(i.x, i.y, pe)),
          (G.map.texture.name = j.name + ".shadowMap"),
          G.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(G.map), s.clear();
      const he = G.getViewportCount();
      for (let pe = 0; pe < he; pe++) {
        const ze = G.getViewport(pe);
        a.set(r.x * ze.x, r.y * ze.y, r.x * ze.z, r.y * ze.w),
          W.viewport(a),
          G.updateMatrices(j, pe),
          (n = G.getFrustum()),
          A(w, U, G.camera, j, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === xn && E(G, U),
        (G.needsUpdate = !1);
    }
    (f = this.type), (m.needsUpdate = !1), s.setRenderTarget(T, y, L);
  };
  function E(R, w) {
    const U = e.update(x);
    d.defines.VSM_SAMPLES !== R.blurSamples &&
      ((d.defines.VSM_SAMPLES = R.blurSamples),
      (p.defines.VSM_SAMPLES = R.blurSamples),
      (d.needsUpdate = !0),
      (p.needsUpdate = !0)),
      R.mapPass === null && (R.mapPass = new oi(i.x, i.y)),
      (d.uniforms.shadow_pass.value = R.map.texture),
      (d.uniforms.resolution.value = R.mapSize),
      (d.uniforms.radius.value = R.radius),
      s.setRenderTarget(R.mapPass),
      s.clear(),
      s.renderBufferDirect(w, null, U, d, x, null),
      (p.uniforms.shadow_pass.value = R.mapPass.texture),
      (p.uniforms.resolution.value = R.mapSize),
      (p.uniforms.radius.value = R.radius),
      s.setRenderTarget(R.map),
      s.clear(),
      s.renderBufferDirect(w, null, U, p, x, null);
  }
  function S(R, w, U, T) {
    let y = null;
    const L =
      U.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (L !== void 0) y = L;
    else if (
      ((y = U.isPointLight === !0 ? c : o),
      (s.localClippingEnabled &&
        w.clipShadows === !0 &&
        Array.isArray(w.clippingPlanes) &&
        w.clippingPlanes.length !== 0) ||
        (w.displacementMap && w.displacementScale !== 0) ||
        (w.alphaMap && w.alphaTest > 0) ||
        (w.map && w.alphaTest > 0))
    ) {
      const W = y.uuid,
        H = w.uuid;
      let K = l[W];
      K === void 0 && ((K = {}), (l[W] = K));
      let q = K[H];
      q === void 0 &&
        ((q = y.clone()), (K[H] = q), w.addEventListener("dispose", D)),
        (y = q);
    }
    if (
      ((y.visible = w.visible),
      (y.wireframe = w.wireframe),
      T === xn
        ? (y.side = w.shadowSide !== null ? w.shadowSide : w.side)
        : (y.side = w.shadowSide !== null ? w.shadowSide : h[w.side]),
      (y.alphaMap = w.alphaMap),
      (y.alphaTest = w.alphaTest),
      (y.map = w.map),
      (y.clipShadows = w.clipShadows),
      (y.clippingPlanes = w.clippingPlanes),
      (y.clipIntersection = w.clipIntersection),
      (y.displacementMap = w.displacementMap),
      (y.displacementScale = w.displacementScale),
      (y.displacementBias = w.displacementBias),
      (y.wireframeLinewidth = w.wireframeLinewidth),
      (y.linewidth = w.linewidth),
      U.isPointLight === !0 && y.isMeshDistanceMaterial === !0)
    ) {
      const W = s.properties.get(y);
      W.light = U;
    }
    return y;
  }
  function A(R, w, U, T, y) {
    if (R.visible === !1) return;
    if (
      R.layers.test(w.layers) &&
      (R.isMesh || R.isLine || R.isPoints) &&
      (R.castShadow || (R.receiveShadow && y === xn)) &&
      (!R.frustumCulled || n.intersectsObject(R))
    ) {
      R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, R.matrixWorld);
      const H = e.update(R),
        K = R.material;
      if (Array.isArray(K)) {
        const q = H.groups;
        for (let X = 0, j = q.length; X < j; X++) {
          const G = q[X],
            ce = K[G.materialIndex];
          if (ce && ce.visible) {
            const he = S(R, ce, T, y);
            R.onBeforeShadow(s, R, w, U, H, he, G),
              s.renderBufferDirect(U, null, H, he, R, G),
              R.onAfterShadow(s, R, w, U, H, he, G);
          }
        }
      } else if (K.visible) {
        const q = S(R, K, T, y);
        R.onBeforeShadow(s, R, w, U, H, q, null),
          s.renderBufferDirect(U, null, H, q, R, null),
          R.onAfterShadow(s, R, w, U, H, q, null);
      }
    }
    const W = R.children;
    for (let H = 0, K = W.length; H < K; H++) A(W[H], w, U, T, y);
  }
  function D(R) {
    R.target.removeEventListener("dispose", D);
    for (const U in l) {
      const T = l[U],
        y = R.target.uuid;
      y in T && (T[y].dispose(), delete T[y]);
    }
  }
}
function s_(s) {
  function e() {
    let _ = !1;
    const O = new $e();
    let F = null;
    const V = new $e(0, 0, 0, 0);
    return {
      setMask: function (J) {
        F !== J && !_ && (s.colorMask(J, J, J, J), (F = J));
      },
      setLocked: function (J) {
        _ = J;
      },
      setClear: function (J, xe, Ae, ct, pt) {
        pt === !0 && ((J *= ct), (xe *= ct), (Ae *= ct)),
          O.set(J, xe, Ae, ct),
          V.equals(O) === !1 && (s.clearColor(J, xe, Ae, ct), V.copy(O));
      },
      reset: function () {
        (_ = !1), (F = null), V.set(-1, 0, 0, 0);
      },
    };
  }
  function t() {
    let _ = !1,
      O = null,
      F = null,
      V = null;
    return {
      setTest: function (J) {
        J ? de(s.DEPTH_TEST) : le(s.DEPTH_TEST);
      },
      setMask: function (J) {
        O !== J && !_ && (s.depthMask(J), (O = J));
      },
      setFunc: function (J) {
        if (F !== J) {
          switch (J) {
            case gh:
              s.depthFunc(s.NEVER);
              break;
            case _h:
              s.depthFunc(s.ALWAYS);
              break;
            case xh:
              s.depthFunc(s.LESS);
              break;
            case Cr:
              s.depthFunc(s.LEQUAL);
              break;
            case vh:
              s.depthFunc(s.EQUAL);
              break;
            case Mh:
              s.depthFunc(s.GEQUAL);
              break;
            case yh:
              s.depthFunc(s.GREATER);
              break;
            case Sh:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          F = J;
        }
      },
      setLocked: function (J) {
        _ = J;
      },
      setClear: function (J) {
        V !== J && (s.clearDepth(J), (V = J));
      },
      reset: function () {
        (_ = !1), (O = null), (F = null), (V = null);
      },
    };
  }
  function n() {
    let _ = !1,
      O = null,
      F = null,
      V = null,
      J = null,
      xe = null,
      Ae = null,
      ct = null,
      pt = null;
    return {
      setTest: function (He) {
        _ || (He ? de(s.STENCIL_TEST) : le(s.STENCIL_TEST));
      },
      setMask: function (He) {
        O !== He && !_ && (s.stencilMask(He), (O = He));
      },
      setFunc: function (He, mt, ht) {
        (F !== He || V !== mt || J !== ht) &&
          (s.stencilFunc(He, mt, ht), (F = He), (V = mt), (J = ht));
      },
      setOp: function (He, mt, ht) {
        (xe !== He || Ae !== mt || ct !== ht) &&
          (s.stencilOp(He, mt, ht), (xe = He), (Ae = mt), (ct = ht));
      },
      setLocked: function (He) {
        _ = He;
      },
      setClear: function (He) {
        pt !== He && (s.clearStencil(He), (pt = He));
      },
      reset: function () {
        (_ = !1),
          (O = null),
          (F = null),
          (V = null),
          (J = null),
          (xe = null),
          (Ae = null),
          (ct = null),
          (pt = null);
      },
    };
  }
  const i = new e(),
    r = new t(),
    a = new n(),
    o = new WeakMap(),
    c = new WeakMap();
  let l = {},
    u = {},
    h = new WeakMap(),
    d = [],
    p = null,
    g = !1,
    x = null,
    m = null,
    f = null,
    E = null,
    S = null,
    A = null,
    D = null,
    R = new Pe(0, 0, 0),
    w = 0,
    U = !1,
    T = null,
    y = null,
    L = null,
    W = null,
    H = null;
  const K = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1,
    X = 0;
  const j = s.getParameter(s.VERSION);
  j.indexOf("WebGL") !== -1
    ? ((X = parseFloat(/^WebGL (\d)/.exec(j)[1])), (q = X >= 1))
    : j.indexOf("OpenGL ES") !== -1 &&
      ((X = parseFloat(/^OpenGL ES (\d)/.exec(j)[1])), (q = X >= 2));
  let G = null,
    ce = {};
  const he = s.getParameter(s.SCISSOR_BOX),
    pe = s.getParameter(s.VIEWPORT),
    ze = new $e().fromArray(he),
    Ge = new $e().fromArray(pe);
  function Y(_, O, F, V) {
    const J = new Uint8Array(4),
      xe = s.createTexture();
    s.bindTexture(_, xe),
      s.texParameteri(_, s.TEXTURE_MIN_FILTER, s.NEAREST),
      s.texParameteri(_, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Ae = 0; Ae < F; Ae++)
      _ === s.TEXTURE_3D || _ === s.TEXTURE_2D_ARRAY
        ? s.texImage3D(O, 0, s.RGBA, 1, 1, V, 0, s.RGBA, s.UNSIGNED_BYTE, J)
        : s.texImage2D(O + Ae, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, J);
    return xe;
  }
  const ee = {};
  (ee[s.TEXTURE_2D] = Y(s.TEXTURE_2D, s.TEXTURE_2D, 1)),
    (ee[s.TEXTURE_CUBE_MAP] = Y(
      s.TEXTURE_CUBE_MAP,
      s.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (ee[s.TEXTURE_2D_ARRAY] = Y(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1)),
    (ee[s.TEXTURE_3D] = Y(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)),
    i.setClear(0, 0, 0, 1),
    r.setClear(1),
    a.setClear(0),
    de(s.DEPTH_TEST),
    r.setFunc(Cr),
    We(!1),
    _e(cc),
    de(s.CULL_FACE),
    it(Vn);
  function de(_) {
    l[_] !== !0 && (s.enable(_), (l[_] = !0));
  }
  function le(_) {
    l[_] !== !1 && (s.disable(_), (l[_] = !1));
  }
  function Le(_, O) {
    return u[_] !== O
      ? (s.bindFramebuffer(_, O),
        (u[_] = O),
        _ === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = O),
        _ === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = O),
        !0)
      : !1;
  }
  function De(_, O) {
    let F = d,
      V = !1;
    if (_) {
      (F = h.get(O)), F === void 0 && ((F = []), h.set(O, F));
      const J = _.textures;
      if (F.length !== J.length || F[0] !== s.COLOR_ATTACHMENT0) {
        for (let xe = 0, Ae = J.length; xe < Ae; xe++)
          F[xe] = s.COLOR_ATTACHMENT0 + xe;
        (F.length = J.length), (V = !0);
      }
    } else F[0] !== s.BACK && ((F[0] = s.BACK), (V = !0));
    V && s.drawBuffers(F);
  }
  function Fe(_) {
    return p !== _ ? (s.useProgram(_), (p = _), !0) : !1;
  }
  const Qe = {
    [ii]: s.FUNC_ADD,
    [Qu]: s.FUNC_SUBTRACT,
    [eh]: s.FUNC_REVERSE_SUBTRACT,
  };
  (Qe[th] = s.MIN), (Qe[nh] = s.MAX);
  const C = {
    [ih]: s.ZERO,
    [sh]: s.ONE,
    [rh]: s.SRC_COLOR,
    [Ua]: s.SRC_ALPHA,
    [hh]: s.SRC_ALPHA_SATURATE,
    [lh]: s.DST_COLOR,
    [oh]: s.DST_ALPHA,
    [ah]: s.ONE_MINUS_SRC_COLOR,
    [Oa]: s.ONE_MINUS_SRC_ALPHA,
    [uh]: s.ONE_MINUS_DST_COLOR,
    [ch]: s.ONE_MINUS_DST_ALPHA,
    [dh]: s.CONSTANT_COLOR,
    [fh]: s.ONE_MINUS_CONSTANT_COLOR,
    [ph]: s.CONSTANT_ALPHA,
    [mh]: s.ONE_MINUS_CONSTANT_ALPHA,
  };
  function it(_, O, F, V, J, xe, Ae, ct, pt, He) {
    if (_ === Vn) {
      g === !0 && (le(s.BLEND), (g = !1));
      return;
    }
    if ((g === !1 && (de(s.BLEND), (g = !0)), _ !== Ju)) {
      if (_ !== x || He !== U) {
        if (
          ((m !== ii || S !== ii) &&
            (s.blendEquation(s.FUNC_ADD), (m = ii), (S = ii)),
          He)
        )
          switch (_) {
            case ki:
              s.blendFuncSeparate(
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case lc:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case uc:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case hc:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", _);
              break;
          }
        else
          switch (_) {
            case ki:
              s.blendFuncSeparate(
                s.SRC_ALPHA,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case lc:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case uc:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case hc:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", _);
              break;
          }
        (f = null),
          (E = null),
          (A = null),
          (D = null),
          R.set(0, 0, 0),
          (w = 0),
          (x = _),
          (U = He);
      }
      return;
    }
    (J = J || O),
      (xe = xe || F),
      (Ae = Ae || V),
      (O !== m || J !== S) &&
        (s.blendEquationSeparate(Qe[O], Qe[J]), (m = O), (S = J)),
      (F !== f || V !== E || xe !== A || Ae !== D) &&
        (s.blendFuncSeparate(C[F], C[V], C[xe], C[Ae]),
        (f = F),
        (E = V),
        (A = xe),
        (D = Ae)),
      (ct.equals(R) === !1 || pt !== w) &&
        (s.blendColor(ct.r, ct.g, ct.b, pt), R.copy(ct), (w = pt)),
      (x = _),
      (U = !1);
  }
  function Ve(_, O) {
    _.side === an ? le(s.CULL_FACE) : de(s.CULL_FACE);
    let F = _.side === Nt;
    O && (F = !F),
      We(F),
      _.blending === ki && _.transparent === !1
        ? it(Vn)
        : it(
            _.blending,
            _.blendEquation,
            _.blendSrc,
            _.blendDst,
            _.blendEquationAlpha,
            _.blendSrcAlpha,
            _.blendDstAlpha,
            _.blendColor,
            _.blendAlpha,
            _.premultipliedAlpha,
          ),
      r.setFunc(_.depthFunc),
      r.setTest(_.depthTest),
      r.setMask(_.depthWrite),
      i.setMask(_.colorWrite);
    const V = _.stencilWrite;
    a.setTest(V),
      V &&
        (a.setMask(_.stencilWriteMask),
        a.setFunc(_.stencilFunc, _.stencilRef, _.stencilFuncMask),
        a.setOp(_.stencilFail, _.stencilZFail, _.stencilZPass)),
      we(_.polygonOffset, _.polygonOffsetFactor, _.polygonOffsetUnits),
      _.alphaToCoverage === !0
        ? de(s.SAMPLE_ALPHA_TO_COVERAGE)
        : le(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function We(_) {
    T !== _ && (_ ? s.frontFace(s.CW) : s.frontFace(s.CCW), (T = _));
  }
  function _e(_) {
    _ !== ju
      ? (de(s.CULL_FACE),
        _ !== y &&
          (_ === cc
            ? s.cullFace(s.BACK)
            : _ === Zu
              ? s.cullFace(s.FRONT)
              : s.cullFace(s.FRONT_AND_BACK)))
      : le(s.CULL_FACE),
      (y = _);
  }
  function st(_) {
    _ !== L && (q && s.lineWidth(_), (L = _));
  }
  function we(_, O, F) {
    _
      ? (de(s.POLYGON_OFFSET_FILL),
        (W !== O || H !== F) && (s.polygonOffset(O, F), (W = O), (H = F)))
      : le(s.POLYGON_OFFSET_FILL);
  }
  function Ce(_) {
    _ ? de(s.SCISSOR_TEST) : le(s.SCISSOR_TEST);
  }
  function b(_) {
    _ === void 0 && (_ = s.TEXTURE0 + K - 1),
      G !== _ && (s.activeTexture(_), (G = _));
  }
  function v(_, O, F) {
    F === void 0 && (G === null ? (F = s.TEXTURE0 + K - 1) : (F = G));
    let V = ce[F];
    V === void 0 && ((V = { type: void 0, texture: void 0 }), (ce[F] = V)),
      (V.type !== _ || V.texture !== O) &&
        (G !== F && (s.activeTexture(F), (G = F)),
        s.bindTexture(_, O || ee[_]),
        (V.type = _),
        (V.texture = O));
  }
  function k() {
    const _ = ce[G];
    _ !== void 0 &&
      _.type !== void 0 &&
      (s.bindTexture(_.type, null), (_.type = void 0), (_.texture = void 0));
  }
  function $() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function Q() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function Z() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function Me() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function ie() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function ae() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function Ie() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function te() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function oe() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function ke() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (_) {
      console.error("THREE.WebGLState:", _);
    }
  }
  function Se(_) {
    ze.equals(_) === !1 && (s.scissor(_.x, _.y, _.z, _.w), ze.copy(_));
  }
  function ue(_) {
    Ge.equals(_) === !1 && (s.viewport(_.x, _.y, _.z, _.w), Ge.copy(_));
  }
  function Te(_, O) {
    let F = c.get(O);
    F === void 0 && ((F = new WeakMap()), c.set(O, F));
    let V = F.get(_);
    V === void 0 && ((V = s.getUniformBlockIndex(O, _.name)), F.set(_, V));
  }
  function Re(_, O) {
    const V = c.get(O).get(_);
    o.get(O) !== V &&
      (s.uniformBlockBinding(O, V, _.__bindingPointIndex), o.set(O, V));
  }
  function nt() {
    s.disable(s.BLEND),
      s.disable(s.CULL_FACE),
      s.disable(s.DEPTH_TEST),
      s.disable(s.POLYGON_OFFSET_FILL),
      s.disable(s.SCISSOR_TEST),
      s.disable(s.STENCIL_TEST),
      s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),
      s.blendEquation(s.FUNC_ADD),
      s.blendFunc(s.ONE, s.ZERO),
      s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO),
      s.blendColor(0, 0, 0, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(s.LESS),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(s.ALWAYS, 0, 4294967295),
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
      s.clearStencil(0),
      s.cullFace(s.BACK),
      s.frontFace(s.CCW),
      s.polygonOffset(0, 0),
      s.activeTexture(s.TEXTURE0),
      s.bindFramebuffer(s.FRAMEBUFFER, null),
      s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
      s.bindFramebuffer(s.READ_FRAMEBUFFER, null),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (l = {}),
      (G = null),
      (ce = {}),
      (u = {}),
      (h = new WeakMap()),
      (d = []),
      (p = null),
      (g = !1),
      (x = null),
      (m = null),
      (f = null),
      (E = null),
      (S = null),
      (A = null),
      (D = null),
      (R = new Pe(0, 0, 0)),
      (w = 0),
      (U = !1),
      (T = null),
      (y = null),
      (L = null),
      (W = null),
      (H = null),
      ze.set(0, 0, s.canvas.width, s.canvas.height),
      Ge.set(0, 0, s.canvas.width, s.canvas.height),
      i.reset(),
      r.reset(),
      a.reset();
  }
  return {
    buffers: { color: i, depth: r, stencil: a },
    enable: de,
    disable: le,
    bindFramebuffer: Le,
    drawBuffers: De,
    useProgram: Fe,
    setBlending: it,
    setMaterial: Ve,
    setFlipSided: We,
    setCullFace: _e,
    setLineWidth: st,
    setPolygonOffset: we,
    setScissorTest: Ce,
    activeTexture: b,
    bindTexture: v,
    unbindTexture: k,
    compressedTexImage2D: $,
    compressedTexImage3D: Q,
    texImage2D: oe,
    texImage3D: ke,
    updateUBOMapping: Te,
    uniformBlockBinding: Re,
    texStorage2D: Ie,
    texStorage3D: te,
    texSubImage2D: Z,
    texSubImage3D: Me,
    compressedTexSubImage2D: ie,
    compressedTexSubImage3D: ae,
    scissor: Se,
    viewport: ue,
    reset: nt,
  };
}
function ol(s, e, t, n) {
  const i = r_(n);
  switch (t) {
    case $l:
      return s * e;
    case Ql:
      return s * e;
    case eu:
      return s * e * 2;
    case To:
      return ((s * e) / i.components) * i.byteLength;
    case Ao:
      return ((s * e) / i.components) * i.byteLength;
    case tu:
      return ((s * e * 2) / i.components) * i.byteLength;
    case bo:
      return ((s * e * 2) / i.components) * i.byteLength;
    case Jl:
      return ((s * e * 3) / i.components) * i.byteLength;
    case Xt:
      return ((s * e * 4) / i.components) * i.byteLength;
    case wo:
      return ((s * e * 4) / i.components) * i.byteLength;
    case Sr:
    case Er:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Tr:
    case Ar:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ka:
    case Va:
      return (Math.max(s, 16) * Math.max(e, 8)) / 4;
    case za:
    case Ha:
      return (Math.max(s, 8) * Math.max(e, 8)) / 2;
    case Ga:
    case Wa:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Xa:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ya:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case qa:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ka:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case ja:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Za:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case $a:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ja:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Qa:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case eo:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case to:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case no:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case io:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case so:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ro:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case br:
    case ao:
    case oo:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case nu:
    case co:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case lo:
    case uo:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function r_(s) {
  switch (s) {
    case Tn:
    case Kl:
      return { byteLength: 1, components: 1 };
    case bs:
    case jl:
    case Ls:
      return { byteLength: 2, components: 1 };
    case So:
    case Eo:
      return { byteLength: 2, components: 4 };
    case ai:
    case yo:
    case tn:
      return { byteLength: 4, components: 1 };
    case Zl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
function a_(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new ge(),
    u = new WeakMap();
  let h;
  const d = new WeakMap();
  let p = !1;
  try {
    p =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(b, v) {
    return p ? new OffscreenCanvas(b, v) : Cs("canvas");
  }
  function x(b, v, k) {
    let $ = 1;
    const Q = Ce(b);
    if (
      ((Q.width > k || Q.height > k) && ($ = k / Math.max(Q.width, Q.height)),
      $ < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && b instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && b instanceof VideoFrame)
      ) {
        const Z = Math.floor($ * Q.width),
          Me = Math.floor($ * Q.height);
        h === void 0 && (h = g(Z, Me));
        const ie = v ? g(Z, Me) : h;
        return (
          (ie.width = Z),
          (ie.height = Me),
          ie.getContext("2d").drawImage(b, 0, 0, Z, Me),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              Q.width +
              "x" +
              Q.height +
              ") to (" +
              Z +
              "x" +
              Me +
              ").",
          ),
          ie
        );
      } else
        return (
          "data" in b &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                Q.width +
                "x" +
                Q.height +
                ").",
            ),
          b
        );
    return b;
  }
  function m(b) {
    return b.generateMipmaps && b.minFilter !== Lt && b.minFilter !== kt;
  }
  function f(b) {
    s.generateMipmap(b);
  }
  function E(b, v, k, $, Q = !1) {
    if (b !== null) {
      if (s[b] !== void 0) return s[b];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          b +
          "'",
      );
    }
    let Z = v;
    if (
      (v === s.RED &&
        (k === s.FLOAT && (Z = s.R32F),
        k === s.HALF_FLOAT && (Z = s.R16F),
        k === s.UNSIGNED_BYTE && (Z = s.R8)),
      v === s.RED_INTEGER &&
        (k === s.UNSIGNED_BYTE && (Z = s.R8UI),
        k === s.UNSIGNED_SHORT && (Z = s.R16UI),
        k === s.UNSIGNED_INT && (Z = s.R32UI),
        k === s.BYTE && (Z = s.R8I),
        k === s.SHORT && (Z = s.R16I),
        k === s.INT && (Z = s.R32I)),
      v === s.RG &&
        (k === s.FLOAT && (Z = s.RG32F),
        k === s.HALF_FLOAT && (Z = s.RG16F),
        k === s.UNSIGNED_BYTE && (Z = s.RG8)),
      v === s.RG_INTEGER &&
        (k === s.UNSIGNED_BYTE && (Z = s.RG8UI),
        k === s.UNSIGNED_SHORT && (Z = s.RG16UI),
        k === s.UNSIGNED_INT && (Z = s.RG32UI),
        k === s.BYTE && (Z = s.RG8I),
        k === s.SHORT && (Z = s.RG16I),
        k === s.INT && (Z = s.RG32I)),
      v === s.RGB && k === s.UNSIGNED_INT_5_9_9_9_REV && (Z = s.RGB9_E5),
      v === s.RGBA)
    ) {
      const Me = Q ? Lr : Xe.getTransfer($);
      k === s.FLOAT && (Z = s.RGBA32F),
        k === s.HALF_FLOAT && (Z = s.RGBA16F),
        k === s.UNSIGNED_BYTE && (Z = Me === et ? s.SRGB8_ALPHA8 : s.RGBA8),
        k === s.UNSIGNED_SHORT_4_4_4_4 && (Z = s.RGBA4),
        k === s.UNSIGNED_SHORT_5_5_5_1 && (Z = s.RGB5_A1);
    }
    return (
      (Z === s.R16F ||
        Z === s.R32F ||
        Z === s.RG16F ||
        Z === s.RG32F ||
        Z === s.RGBA16F ||
        Z === s.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      Z
    );
  }
  function S(b, v) {
    let k;
    return (
      b
        ? v === null || v === ai || v === ji
          ? (k = s.DEPTH24_STENCIL8)
          : v === tn
            ? (k = s.DEPTH32F_STENCIL8)
            : v === bs &&
              ((k = s.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : v === null || v === ai || v === ji
          ? (k = s.DEPTH_COMPONENT24)
          : v === tn
            ? (k = s.DEPTH_COMPONENT32F)
            : v === bs && (k = s.DEPTH_COMPONENT16),
      k
    );
  }
  function A(b, v) {
    return m(b) === !0 ||
      (b.isFramebufferTexture && b.minFilter !== Lt && b.minFilter !== kt)
      ? Math.log2(Math.max(v.width, v.height)) + 1
      : b.mipmaps !== void 0 && b.mipmaps.length > 0
        ? b.mipmaps.length
        : b.isCompressedTexture && Array.isArray(b.image)
          ? v.mipmaps.length
          : 1;
  }
  function D(b) {
    const v = b.target;
    v.removeEventListener("dispose", D), w(v), v.isVideoTexture && u.delete(v);
  }
  function R(b) {
    const v = b.target;
    v.removeEventListener("dispose", R), T(v);
  }
  function w(b) {
    const v = n.get(b);
    if (v.__webglInit === void 0) return;
    const k = b.source,
      $ = d.get(k);
    if ($) {
      const Q = $[v.__cacheKey];
      Q.usedTimes--,
        Q.usedTimes === 0 && U(b),
        Object.keys($).length === 0 && d.delete(k);
    }
    n.remove(b);
  }
  function U(b) {
    const v = n.get(b);
    s.deleteTexture(v.__webglTexture);
    const k = b.source,
      $ = d.get(k);
    delete $[v.__cacheKey], a.memory.textures--;
  }
  function T(b) {
    const v = n.get(b);
    if ((b.depthTexture && b.depthTexture.dispose(), b.isWebGLCubeRenderTarget))
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(v.__webglFramebuffer[$]))
          for (let Q = 0; Q < v.__webglFramebuffer[$].length; Q++)
            s.deleteFramebuffer(v.__webglFramebuffer[$][Q]);
        else s.deleteFramebuffer(v.__webglFramebuffer[$]);
        v.__webglDepthbuffer && s.deleteRenderbuffer(v.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let $ = 0; $ < v.__webglFramebuffer.length; $++)
          s.deleteFramebuffer(v.__webglFramebuffer[$]);
      else s.deleteFramebuffer(v.__webglFramebuffer);
      if (
        (v.__webglDepthbuffer && s.deleteRenderbuffer(v.__webglDepthbuffer),
        v.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(v.__webglMultisampledFramebuffer),
        v.__webglColorRenderbuffer)
      )
        for (let $ = 0; $ < v.__webglColorRenderbuffer.length; $++)
          v.__webglColorRenderbuffer[$] &&
            s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);
      v.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const k = b.textures;
    for (let $ = 0, Q = k.length; $ < Q; $++) {
      const Z = n.get(k[$]);
      Z.__webglTexture &&
        (s.deleteTexture(Z.__webglTexture), a.memory.textures--),
        n.remove(k[$]);
    }
    n.remove(b);
  }
  let y = 0;
  function L() {
    y = 0;
  }
  function W() {
    const b = y;
    return (
      b >= i.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            b +
            " texture units while this GPU supports only " +
            i.maxTextures,
        ),
      (y += 1),
      b
    );
  }
  function H(b) {
    const v = [];
    return (
      v.push(b.wrapS),
      v.push(b.wrapT),
      v.push(b.wrapR || 0),
      v.push(b.magFilter),
      v.push(b.minFilter),
      v.push(b.anisotropy),
      v.push(b.internalFormat),
      v.push(b.format),
      v.push(b.type),
      v.push(b.generateMipmaps),
      v.push(b.premultiplyAlpha),
      v.push(b.flipY),
      v.push(b.unpackAlignment),
      v.push(b.colorSpace),
      v.join()
    );
  }
  function K(b, v) {
    const k = n.get(b);
    if (
      (b.isVideoTexture && st(b),
      b.isRenderTargetTexture === !1 &&
        b.version > 0 &&
        k.__version !== b.version)
    ) {
      const $ = b.image;
      if ($ === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if ($.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        Ge(k, b, v);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, k.__webglTexture, s.TEXTURE0 + v);
  }
  function q(b, v) {
    const k = n.get(b);
    if (b.version > 0 && k.__version !== b.version) {
      Ge(k, b, v);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, k.__webglTexture, s.TEXTURE0 + v);
  }
  function X(b, v) {
    const k = n.get(b);
    if (b.version > 0 && k.__version !== b.version) {
      Ge(k, b, v);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, k.__webglTexture, s.TEXTURE0 + v);
  }
  function j(b, v) {
    const k = n.get(b);
    if (b.version > 0 && k.__version !== b.version) {
      Y(k, b, v);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, k.__webglTexture, s.TEXTURE0 + v);
  }
  const G = { [Ki]: s.REPEAT, [kn]: s.CLAMP_TO_EDGE, [Pr]: s.MIRRORED_REPEAT },
    ce = {
      [Lt]: s.NEAREST,
      [ql]: s.NEAREST_MIPMAP_NEAREST,
      [Ms]: s.NEAREST_MIPMAP_LINEAR,
      [kt]: s.LINEAR,
      [yr]: s.LINEAR_MIPMAP_NEAREST,
      [yn]: s.LINEAR_MIPMAP_LINEAR,
    },
    he = {
      [Bh]: s.NEVER,
      [Wh]: s.ALWAYS,
      [zh]: s.LESS,
      [su]: s.LEQUAL,
      [kh]: s.EQUAL,
      [Gh]: s.GEQUAL,
      [Hh]: s.GREATER,
      [Vh]: s.NOTEQUAL,
    };
  function pe(b, v) {
    if (
      (v.type === tn &&
        e.has("OES_texture_float_linear") === !1 &&
        (v.magFilter === kt ||
          v.magFilter === yr ||
          v.magFilter === Ms ||
          v.magFilter === yn ||
          v.minFilter === kt ||
          v.minFilter === yr ||
          v.minFilter === Ms ||
          v.minFilter === yn) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      s.texParameteri(b, s.TEXTURE_WRAP_S, G[v.wrapS]),
      s.texParameteri(b, s.TEXTURE_WRAP_T, G[v.wrapT]),
      (b === s.TEXTURE_3D || b === s.TEXTURE_2D_ARRAY) &&
        s.texParameteri(b, s.TEXTURE_WRAP_R, G[v.wrapR]),
      s.texParameteri(b, s.TEXTURE_MAG_FILTER, ce[v.magFilter]),
      s.texParameteri(b, s.TEXTURE_MIN_FILTER, ce[v.minFilter]),
      v.compareFunction &&
        (s.texParameteri(b, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE),
        s.texParameteri(b, s.TEXTURE_COMPARE_FUNC, he[v.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        v.magFilter === Lt ||
        (v.minFilter !== Ms && v.minFilter !== yn) ||
        (v.type === tn && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const k = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(
          b,
          k.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(v.anisotropy, i.getMaxAnisotropy()),
        ),
          (n.get(v).__currentAnisotropy = v.anisotropy);
      }
    }
  }
  function ze(b, v) {
    let k = !1;
    b.__webglInit === void 0 &&
      ((b.__webglInit = !0), v.addEventListener("dispose", D));
    const $ = v.source;
    let Q = d.get($);
    Q === void 0 && ((Q = {}), d.set($, Q));
    const Z = H(v);
    if (Z !== b.__cacheKey) {
      Q[Z] === void 0 &&
        ((Q[Z] = { texture: s.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (k = !0)),
        Q[Z].usedTimes++;
      const Me = Q[b.__cacheKey];
      Me !== void 0 &&
        (Q[b.__cacheKey].usedTimes--, Me.usedTimes === 0 && U(v)),
        (b.__cacheKey = Z),
        (b.__webglTexture = Q[Z].texture);
    }
    return k;
  }
  function Ge(b, v, k) {
    let $ = s.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) &&
      ($ = s.TEXTURE_2D_ARRAY),
      v.isData3DTexture && ($ = s.TEXTURE_3D);
    const Q = ze(b, v),
      Z = v.source;
    t.bindTexture($, b.__webglTexture, s.TEXTURE0 + k);
    const Me = n.get(Z);
    if (Z.version !== Me.__version || Q === !0) {
      t.activeTexture(s.TEXTURE0 + k);
      const ie = Xe.getPrimaries(Xe.workingColorSpace),
        ae = v.colorSpace === Fn ? null : Xe.getPrimaries(v.colorSpace),
        Ie =
          v.colorSpace === Fn || ie === ae ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ie);
      let te = x(v.image, !1, i.maxTextureSize);
      te = we(v, te);
      const oe = r.convert(v.format, v.colorSpace),
        ke = r.convert(v.type);
      let Se = E(v.internalFormat, oe, ke, v.colorSpace, v.isVideoTexture);
      pe($, v);
      let ue;
      const Te = v.mipmaps,
        Re = v.isVideoTexture !== !0,
        nt = Me.__version === void 0 || Q === !0,
        _ = Z.dataReady,
        O = A(v, te);
      if (v.isDepthTexture)
        (Se = S(v.format === Zi, v.type)),
          nt &&
            (Re
              ? t.texStorage2D(s.TEXTURE_2D, 1, Se, te.width, te.height)
              : t.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  Se,
                  te.width,
                  te.height,
                  0,
                  oe,
                  ke,
                  null,
                ));
      else if (v.isDataTexture)
        if (Te.length > 0) {
          Re &&
            nt &&
            t.texStorage2D(s.TEXTURE_2D, O, Se, Te[0].width, Te[0].height);
          for (let F = 0, V = Te.length; F < V; F++)
            (ue = Te[F]),
              Re
                ? _ &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    F,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    oe,
                    ke,
                    ue.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    F,
                    Se,
                    ue.width,
                    ue.height,
                    0,
                    oe,
                    ke,
                    ue.data,
                  );
          v.generateMipmaps = !1;
        } else
          Re
            ? (nt && t.texStorage2D(s.TEXTURE_2D, O, Se, te.width, te.height),
              _ &&
                t.texSubImage2D(
                  s.TEXTURE_2D,
                  0,
                  0,
                  0,
                  te.width,
                  te.height,
                  oe,
                  ke,
                  te.data,
                ))
            : t.texImage2D(
                s.TEXTURE_2D,
                0,
                Se,
                te.width,
                te.height,
                0,
                oe,
                ke,
                te.data,
              );
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Re &&
            nt &&
            t.texStorage3D(
              s.TEXTURE_2D_ARRAY,
              O,
              Se,
              Te[0].width,
              Te[0].height,
              te.depth,
            );
          for (let F = 0, V = Te.length; F < V; F++)
            if (((ue = Te[F]), v.format !== Xt))
              if (oe !== null)
                if (Re) {
                  if (_)
                    if (v.layerUpdates.size > 0) {
                      const J = ol(ue.width, ue.height, v.format, v.type);
                      for (const xe of v.layerUpdates) {
                        const Ae = ue.data.subarray(
                          (xe * J) / ue.data.BYTES_PER_ELEMENT,
                          ((xe + 1) * J) / ue.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          s.TEXTURE_2D_ARRAY,
                          F,
                          0,
                          0,
                          xe,
                          ue.width,
                          ue.height,
                          1,
                          oe,
                          Ae,
                          0,
                          0,
                        );
                      }
                      v.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        s.TEXTURE_2D_ARRAY,
                        F,
                        0,
                        0,
                        0,
                        ue.width,
                        ue.height,
                        te.depth,
                        oe,
                        ue.data,
                        0,
                        0,
                      );
                } else
                  t.compressedTexImage3D(
                    s.TEXTURE_2D_ARRAY,
                    F,
                    Se,
                    ue.width,
                    ue.height,
                    te.depth,
                    0,
                    ue.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              Re
                ? _ &&
                  t.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    F,
                    0,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    te.depth,
                    oe,
                    ke,
                    ue.data,
                  )
                : t.texImage3D(
                    s.TEXTURE_2D_ARRAY,
                    F,
                    Se,
                    ue.width,
                    ue.height,
                    te.depth,
                    0,
                    oe,
                    ke,
                    ue.data,
                  );
        } else {
          Re &&
            nt &&
            t.texStorage2D(s.TEXTURE_2D, O, Se, Te[0].width, Te[0].height);
          for (let F = 0, V = Te.length; F < V; F++)
            (ue = Te[F]),
              v.format !== Xt
                ? oe !== null
                  ? Re
                    ? _ &&
                      t.compressedTexSubImage2D(
                        s.TEXTURE_2D,
                        F,
                        0,
                        0,
                        ue.width,
                        ue.height,
                        oe,
                        ue.data,
                      )
                    : t.compressedTexImage2D(
                        s.TEXTURE_2D,
                        F,
                        Se,
                        ue.width,
                        ue.height,
                        0,
                        ue.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : Re
                  ? _ &&
                    t.texSubImage2D(
                      s.TEXTURE_2D,
                      F,
                      0,
                      0,
                      ue.width,
                      ue.height,
                      oe,
                      ke,
                      ue.data,
                    )
                  : t.texImage2D(
                      s.TEXTURE_2D,
                      F,
                      Se,
                      ue.width,
                      ue.height,
                      0,
                      oe,
                      ke,
                      ue.data,
                    );
        }
      else if (v.isDataArrayTexture)
        if (Re) {
          if (
            (nt &&
              t.texStorage3D(
                s.TEXTURE_2D_ARRAY,
                O,
                Se,
                te.width,
                te.height,
                te.depth,
              ),
            _)
          )
            if (v.layerUpdates.size > 0) {
              const F = ol(te.width, te.height, v.format, v.type);
              for (const V of v.layerUpdates) {
                const J = te.data.subarray(
                  (V * F) / te.data.BYTES_PER_ELEMENT,
                  ((V + 1) * F) / te.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  s.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  V,
                  te.width,
                  te.height,
                  1,
                  oe,
                  ke,
                  J,
                );
              }
              v.clearLayerUpdates();
            } else
              t.texSubImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                te.width,
                te.height,
                te.depth,
                oe,
                ke,
                te.data,
              );
        } else
          t.texImage3D(
            s.TEXTURE_2D_ARRAY,
            0,
            Se,
            te.width,
            te.height,
            te.depth,
            0,
            oe,
            ke,
            te.data,
          );
      else if (v.isData3DTexture)
        Re
          ? (nt &&
              t.texStorage3D(
                s.TEXTURE_3D,
                O,
                Se,
                te.width,
                te.height,
                te.depth,
              ),
            _ &&
              t.texSubImage3D(
                s.TEXTURE_3D,
                0,
                0,
                0,
                0,
                te.width,
                te.height,
                te.depth,
                oe,
                ke,
                te.data,
              ))
          : t.texImage3D(
              s.TEXTURE_3D,
              0,
              Se,
              te.width,
              te.height,
              te.depth,
              0,
              oe,
              ke,
              te.data,
            );
      else if (v.isFramebufferTexture) {
        if (nt)
          if (Re) t.texStorage2D(s.TEXTURE_2D, O, Se, te.width, te.height);
          else {
            let F = te.width,
              V = te.height;
            for (let J = 0; J < O; J++)
              t.texImage2D(s.TEXTURE_2D, J, Se, F, V, 0, oe, ke, null),
                (F >>= 1),
                (V >>= 1);
          }
      } else if (Te.length > 0) {
        if (Re && nt) {
          const F = Ce(Te[0]);
          t.texStorage2D(s.TEXTURE_2D, O, Se, F.width, F.height);
        }
        for (let F = 0, V = Te.length; F < V; F++)
          (ue = Te[F]),
            Re
              ? _ && t.texSubImage2D(s.TEXTURE_2D, F, 0, 0, oe, ke, ue)
              : t.texImage2D(s.TEXTURE_2D, F, Se, oe, ke, ue);
        v.generateMipmaps = !1;
      } else if (Re) {
        if (nt) {
          const F = Ce(te);
          t.texStorage2D(s.TEXTURE_2D, O, Se, F.width, F.height);
        }
        _ && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, oe, ke, te);
      } else t.texImage2D(s.TEXTURE_2D, 0, Se, oe, ke, te);
      m(v) && f($), (Me.__version = Z.version), v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function Y(b, v, k) {
    if (v.image.length !== 6) return;
    const $ = ze(b, v),
      Q = v.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, b.__webglTexture, s.TEXTURE0 + k);
    const Z = n.get(Q);
    if (Q.version !== Z.__version || $ === !0) {
      t.activeTexture(s.TEXTURE0 + k);
      const Me = Xe.getPrimaries(Xe.workingColorSpace),
        ie = v.colorSpace === Fn ? null : Xe.getPrimaries(v.colorSpace),
        ae =
          v.colorSpace === Fn || Me === ie ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ae);
      const Ie = v.isCompressedTexture || v.image[0].isCompressedTexture,
        te = v.image[0] && v.image[0].isDataTexture,
        oe = [];
      for (let V = 0; V < 6; V++)
        !Ie && !te
          ? (oe[V] = x(v.image[V], !0, i.maxCubemapSize))
          : (oe[V] = te ? v.image[V].image : v.image[V]),
          (oe[V] = we(v, oe[V]));
      const ke = oe[0],
        Se = r.convert(v.format, v.colorSpace),
        ue = r.convert(v.type),
        Te = E(v.internalFormat, Se, ue, v.colorSpace),
        Re = v.isVideoTexture !== !0,
        nt = Z.__version === void 0 || $ === !0,
        _ = Q.dataReady;
      let O = A(v, ke);
      pe(s.TEXTURE_CUBE_MAP, v);
      let F;
      if (Ie) {
        Re &&
          nt &&
          t.texStorage2D(s.TEXTURE_CUBE_MAP, O, Te, ke.width, ke.height);
        for (let V = 0; V < 6; V++) {
          F = oe[V].mipmaps;
          for (let J = 0; J < F.length; J++) {
            const xe = F[J];
            v.format !== Xt
              ? Se !== null
                ? Re
                  ? _ &&
                    t.compressedTexSubImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                      J,
                      0,
                      0,
                      xe.width,
                      xe.height,
                      Se,
                      xe.data,
                    )
                  : t.compressedTexImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                      J,
                      Te,
                      xe.width,
                      xe.height,
                      0,
                      xe.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : Re
                ? _ &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                    J,
                    0,
                    0,
                    xe.width,
                    xe.height,
                    Se,
                    ue,
                    xe.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                    J,
                    Te,
                    xe.width,
                    xe.height,
                    0,
                    Se,
                    ue,
                    xe.data,
                  );
          }
        }
      } else {
        if (((F = v.mipmaps), Re && nt)) {
          F.length > 0 && O++;
          const V = Ce(oe[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, O, Te, V.width, V.height);
        }
        for (let V = 0; V < 6; V++)
          if (te) {
            Re
              ? _ &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                  0,
                  0,
                  0,
                  oe[V].width,
                  oe[V].height,
                  Se,
                  ue,
                  oe[V].data,
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                  0,
                  Te,
                  oe[V].width,
                  oe[V].height,
                  0,
                  Se,
                  ue,
                  oe[V].data,
                );
            for (let J = 0; J < F.length; J++) {
              const Ae = F[J].image[V].image;
              Re
                ? _ &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                    J + 1,
                    0,
                    0,
                    Ae.width,
                    Ae.height,
                    Se,
                    ue,
                    Ae.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                    J + 1,
                    Te,
                    Ae.width,
                    Ae.height,
                    0,
                    Se,
                    ue,
                    Ae.data,
                  );
            }
          } else {
            Re
              ? _ &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                  0,
                  0,
                  0,
                  Se,
                  ue,
                  oe[V],
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                  0,
                  Te,
                  Se,
                  ue,
                  oe[V],
                );
            for (let J = 0; J < F.length; J++) {
              const xe = F[J];
              Re
                ? _ &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                    J + 1,
                    0,
                    0,
                    Se,
                    ue,
                    xe.image[V],
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + V,
                    J + 1,
                    Te,
                    Se,
                    ue,
                    xe.image[V],
                  );
            }
          }
      }
      m(v) && f(s.TEXTURE_CUBE_MAP),
        (Z.__version = Q.version),
        v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function ee(b, v, k, $, Q, Z) {
    const Me = r.convert(k.format, k.colorSpace),
      ie = r.convert(k.type),
      ae = E(k.internalFormat, Me, ie, k.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const te = Math.max(1, v.width >> Z),
        oe = Math.max(1, v.height >> Z);
      Q === s.TEXTURE_3D || Q === s.TEXTURE_2D_ARRAY
        ? t.texImage3D(Q, Z, ae, te, oe, v.depth, 0, Me, ie, null)
        : t.texImage2D(Q, Z, ae, te, oe, 0, Me, ie, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, b),
      _e(v)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            $,
            Q,
            n.get(k).__webglTexture,
            0,
            We(v),
          )
        : (Q === s.TEXTURE_2D ||
            (Q >= s.TEXTURE_CUBE_MAP_POSITIVE_X &&
              Q <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          s.framebufferTexture2D(
            s.FRAMEBUFFER,
            $,
            Q,
            n.get(k).__webglTexture,
            Z,
          ),
      t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function de(b, v, k) {
    if ((s.bindRenderbuffer(s.RENDERBUFFER, b), v.depthBuffer)) {
      const $ = v.depthTexture,
        Q = $ && $.isDepthTexture ? $.type : null,
        Z = S(v.stencilBuffer, Q),
        Me = v.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        ie = We(v);
      _e(v)
        ? o.renderbufferStorageMultisampleEXT(
            s.RENDERBUFFER,
            ie,
            Z,
            v.width,
            v.height,
          )
        : k
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              ie,
              Z,
              v.width,
              v.height,
            )
          : s.renderbufferStorage(s.RENDERBUFFER, Z, v.width, v.height),
        s.framebufferRenderbuffer(s.FRAMEBUFFER, Me, s.RENDERBUFFER, b);
    } else {
      const $ = v.textures;
      for (let Q = 0; Q < $.length; Q++) {
        const Z = $[Q],
          Me = r.convert(Z.format, Z.colorSpace),
          ie = r.convert(Z.type),
          ae = E(Z.internalFormat, Me, ie, Z.colorSpace),
          Ie = We(v);
        k && _e(v) === !1
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              Ie,
              ae,
              v.width,
              v.height,
            )
          : _e(v)
            ? o.renderbufferStorageMultisampleEXT(
                s.RENDERBUFFER,
                Ie,
                ae,
                v.width,
                v.height,
              )
            : s.renderbufferStorage(s.RENDERBUFFER, ae, v.width, v.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function le(b, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(s.FRAMEBUFFER, b),
      !(v.depthTexture && v.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    (!n.get(v.depthTexture).__webglTexture ||
      v.depthTexture.image.width !== v.width ||
      v.depthTexture.image.height !== v.height) &&
      ((v.depthTexture.image.width = v.width),
      (v.depthTexture.image.height = v.height),
      (v.depthTexture.needsUpdate = !0)),
      K(v.depthTexture, 0);
    const $ = n.get(v.depthTexture).__webglTexture,
      Q = We(v);
    if (v.depthTexture.format === Hi)
      _e(v)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            $,
            0,
            Q,
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            $,
            0,
          );
    else if (v.depthTexture.format === Zi)
      _e(v)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            $,
            0,
            Q,
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            $,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Le(b) {
    const v = n.get(b),
      k = b.isWebGLCubeRenderTarget === !0;
    if (b.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (k)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      le(v.__webglFramebuffer, b);
    } else if (k) {
      v.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer[$]),
          (v.__webglDepthbuffer[$] = s.createRenderbuffer()),
          de(v.__webglDepthbuffer[$], b, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer),
        (v.__webglDepthbuffer = s.createRenderbuffer()),
        de(v.__webglDepthbuffer, b, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function De(b, v, k) {
    const $ = n.get(b);
    v !== void 0 &&
      ee(
        $.__webglFramebuffer,
        b,
        b.texture,
        s.COLOR_ATTACHMENT0,
        s.TEXTURE_2D,
        0,
      ),
      k !== void 0 && Le(b);
  }
  function Fe(b) {
    const v = b.texture,
      k = n.get(b),
      $ = n.get(v);
    b.addEventListener("dispose", R);
    const Q = b.textures,
      Z = b.isWebGLCubeRenderTarget === !0,
      Me = Q.length > 1;
    if (
      (Me ||
        ($.__webglTexture === void 0 && ($.__webglTexture = s.createTexture()),
        ($.__version = v.version),
        a.memory.textures++),
      Z)
    ) {
      k.__webglFramebuffer = [];
      for (let ie = 0; ie < 6; ie++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          k.__webglFramebuffer[ie] = [];
          for (let ae = 0; ae < v.mipmaps.length; ae++)
            k.__webglFramebuffer[ie][ae] = s.createFramebuffer();
        } else k.__webglFramebuffer[ie] = s.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        k.__webglFramebuffer = [];
        for (let ie = 0; ie < v.mipmaps.length; ie++)
          k.__webglFramebuffer[ie] = s.createFramebuffer();
      } else k.__webglFramebuffer = s.createFramebuffer();
      if (Me)
        for (let ie = 0, ae = Q.length; ie < ae; ie++) {
          const Ie = n.get(Q[ie]);
          Ie.__webglTexture === void 0 &&
            ((Ie.__webglTexture = s.createTexture()), a.memory.textures++);
        }
      if (b.samples > 0 && _e(b) === !1) {
        (k.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (k.__webglColorRenderbuffer = []),
          t.bindFramebuffer(s.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
        for (let ie = 0; ie < Q.length; ie++) {
          const ae = Q[ie];
          (k.__webglColorRenderbuffer[ie] = s.createRenderbuffer()),
            s.bindRenderbuffer(s.RENDERBUFFER, k.__webglColorRenderbuffer[ie]);
          const Ie = r.convert(ae.format, ae.colorSpace),
            te = r.convert(ae.type),
            oe = E(
              ae.internalFormat,
              Ie,
              te,
              ae.colorSpace,
              b.isXRRenderTarget === !0,
            ),
            ke = We(b);
          s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            ke,
            oe,
            b.width,
            b.height,
          ),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ie,
              s.RENDERBUFFER,
              k.__webglColorRenderbuffer[ie],
            );
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null),
          b.depthBuffer &&
            ((k.__webglDepthRenderbuffer = s.createRenderbuffer()),
            de(k.__webglDepthRenderbuffer, b, !0)),
          t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, $.__webglTexture),
        pe(s.TEXTURE_CUBE_MAP, v);
      for (let ie = 0; ie < 6; ie++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let ae = 0; ae < v.mipmaps.length; ae++)
            ee(
              k.__webglFramebuffer[ie][ae],
              b,
              v,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_CUBE_MAP_POSITIVE_X + ie,
              ae,
            );
        else
          ee(
            k.__webglFramebuffer[ie],
            b,
            v,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_CUBE_MAP_POSITIVE_X + ie,
            0,
          );
      m(v) && f(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Me) {
      for (let ie = 0, ae = Q.length; ie < ae; ie++) {
        const Ie = Q[ie],
          te = n.get(Ie);
        t.bindTexture(s.TEXTURE_2D, te.__webglTexture),
          pe(s.TEXTURE_2D, Ie),
          ee(
            k.__webglFramebuffer,
            b,
            Ie,
            s.COLOR_ATTACHMENT0 + ie,
            s.TEXTURE_2D,
            0,
          ),
          m(Ie) && f(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ie = s.TEXTURE_2D;
      if (
        ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) &&
          (ie = b.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY),
        t.bindTexture(ie, $.__webglTexture),
        pe(ie, v),
        v.mipmaps && v.mipmaps.length > 0)
      )
        for (let ae = 0; ae < v.mipmaps.length; ae++)
          ee(k.__webglFramebuffer[ae], b, v, s.COLOR_ATTACHMENT0, ie, ae);
      else ee(k.__webglFramebuffer, b, v, s.COLOR_ATTACHMENT0, ie, 0);
      m(v) && f(ie), t.unbindTexture();
    }
    b.depthBuffer && Le(b);
  }
  function Qe(b) {
    const v = b.textures;
    for (let k = 0, $ = v.length; k < $; k++) {
      const Q = v[k];
      if (m(Q)) {
        const Z = b.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D,
          Me = n.get(Q).__webglTexture;
        t.bindTexture(Z, Me), f(Z), t.unbindTexture();
      }
    }
  }
  const C = [],
    it = [];
  function Ve(b) {
    if (b.samples > 0) {
      if (_e(b) === !1) {
        const v = b.textures,
          k = b.width,
          $ = b.height;
        let Q = s.COLOR_BUFFER_BIT;
        const Z = b.stencilBuffer
            ? s.DEPTH_STENCIL_ATTACHMENT
            : s.DEPTH_ATTACHMENT,
          Me = n.get(b),
          ie = v.length > 1;
        if (ie)
          for (let ae = 0; ae < v.length; ae++)
            t.bindFramebuffer(s.FRAMEBUFFER, Me.__webglMultisampledFramebuffer),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + ae,
                s.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(s.FRAMEBUFFER, Me.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + ae,
                s.TEXTURE_2D,
                null,
                0,
              );
        t.bindFramebuffer(
          s.READ_FRAMEBUFFER,
          Me.__webglMultisampledFramebuffer,
        ),
          t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
        for (let ae = 0; ae < v.length; ae++) {
          if (
            (b.resolveDepthBuffer &&
              (b.depthBuffer && (Q |= s.DEPTH_BUFFER_BIT),
              b.stencilBuffer &&
                b.resolveStencilBuffer &&
                (Q |= s.STENCIL_BUFFER_BIT)),
            ie)
          ) {
            s.framebufferRenderbuffer(
              s.READ_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.RENDERBUFFER,
              Me.__webglColorRenderbuffer[ae],
            );
            const Ie = n.get(v[ae]).__webglTexture;
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_2D,
              Ie,
              0,
            );
          }
          s.blitFramebuffer(0, 0, k, $, 0, 0, k, $, Q, s.NEAREST),
            c === !0 &&
              ((C.length = 0),
              (it.length = 0),
              C.push(s.COLOR_ATTACHMENT0 + ae),
              b.depthBuffer &&
                b.resolveDepthBuffer === !1 &&
                (C.push(Z),
                it.push(Z),
                s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, it)),
              s.invalidateFramebuffer(s.READ_FRAMEBUFFER, C));
        }
        if (
          (t.bindFramebuffer(s.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
          ie)
        )
          for (let ae = 0; ae < v.length; ae++) {
            t.bindFramebuffer(s.FRAMEBUFFER, Me.__webglMultisampledFramebuffer),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + ae,
                s.RENDERBUFFER,
                Me.__webglColorRenderbuffer[ae],
              );
            const Ie = n.get(v[ae]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, Me.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + ae,
                s.TEXTURE_2D,
                Ie,
                0,
              );
          }
        t.bindFramebuffer(
          s.DRAW_FRAMEBUFFER,
          Me.__webglMultisampledFramebuffer,
        );
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && c) {
        const v = b.stencilBuffer
          ? s.DEPTH_STENCIL_ATTACHMENT
          : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function We(b) {
    return Math.min(i.maxSamples, b.samples);
  }
  function _e(b) {
    const v = n.get(b);
    return (
      b.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function st(b) {
    const v = a.render.frame;
    u.get(b) !== v && (u.set(b, v), b.update());
  }
  function we(b, v) {
    const k = b.colorSpace,
      $ = b.format,
      Q = b.type;
    return (
      b.isCompressedTexture === !0 ||
        b.isVideoTexture === !0 ||
        (k !== Tt &&
          k !== Fn &&
          (Xe.getTransfer(k) === et
            ? ($ !== Xt || Q !== Tn) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                k,
              ))),
      v
    );
  }
  function Ce(b) {
    return (
      typeof HTMLImageElement < "u" && b instanceof HTMLImageElement
        ? ((l.width = b.naturalWidth || b.width),
          (l.height = b.naturalHeight || b.height))
        : typeof VideoFrame < "u" && b instanceof VideoFrame
          ? ((l.width = b.displayWidth), (l.height = b.displayHeight))
          : ((l.width = b.width), (l.height = b.height)),
      l
    );
  }
  (this.allocateTextureUnit = W),
    (this.resetTextureUnits = L),
    (this.setTexture2D = K),
    (this.setTexture2DArray = q),
    (this.setTexture3D = X),
    (this.setTextureCube = j),
    (this.rebindTextures = De),
    (this.setupRenderTarget = Fe),
    (this.updateRenderTargetMipmap = Qe),
    (this.updateMultisampleRenderTarget = Ve),
    (this.setupDepthRenderbuffer = Le),
    (this.setupFrameBufferTexture = ee),
    (this.useMultisampledRTT = _e);
}
function o_(s, e) {
  function t(n, i = Fn) {
    let r;
    const a = Xe.getTransfer(i);
    if (n === Tn) return s.UNSIGNED_BYTE;
    if (n === So) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === Eo) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === Zl) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Kl) return s.BYTE;
    if (n === jl) return s.SHORT;
    if (n === bs) return s.UNSIGNED_SHORT;
    if (n === yo) return s.INT;
    if (n === ai) return s.UNSIGNED_INT;
    if (n === tn) return s.FLOAT;
    if (n === Ls) return s.HALF_FLOAT;
    if (n === $l) return s.ALPHA;
    if (n === Jl) return s.RGB;
    if (n === Xt) return s.RGBA;
    if (n === Ql) return s.LUMINANCE;
    if (n === eu) return s.LUMINANCE_ALPHA;
    if (n === Hi) return s.DEPTH_COMPONENT;
    if (n === Zi) return s.DEPTH_STENCIL;
    if (n === To) return s.RED;
    if (n === Ao) return s.RED_INTEGER;
    if (n === tu) return s.RG;
    if (n === bo) return s.RG_INTEGER;
    if (n === wo) return s.RGBA_INTEGER;
    if (n === Sr || n === Er || n === Tr || n === Ar)
      if (a === et)
        if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (n === Sr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Er) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Tr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ar) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = e.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (n === Sr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Er) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Tr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Ar) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === za || n === ka || n === Ha || n === Va)
      if (((r = e.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (n === za) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ka) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ha) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Va) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Ga || n === Wa || n === Xa)
      if (((r = e.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (n === Ga || n === Wa)
          return a === et ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Xa)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === Ya ||
      n === qa ||
      n === Ka ||
      n === ja ||
      n === Za ||
      n === $a ||
      n === Ja ||
      n === Qa ||
      n === eo ||
      n === to ||
      n === no ||
      n === io ||
      n === so ||
      n === ro
    )
      if (((r = e.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (n === Ya)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === qa)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ka)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ja)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Za)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === $a)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ja)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Qa)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === eo)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === to)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === no)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === io)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === so)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ro)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === br || n === ao || n === oo)
      if (((r = e.get("EXT_texture_compression_bptc")), r !== null)) {
        if (n === br)
          return a === et
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ao) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === oo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === nu || n === co || n === lo || n === uo)
      if (((r = e.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (n === br) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === co) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === lo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === uo) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === ji ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
class c_ extends wt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class ri extends Je {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const l_ = { type: "move" };
class va {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ri()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ri()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new P()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new P())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ri()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new P()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new P())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const x of e.hand.values()) {
          const m = t.getJointPose(x, n),
            f = this._getHandJoint(l, x);
          m !== null &&
            (f.matrix.fromArray(m.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale),
            (f.matrixWorldNeedsUpdate = !0),
            (f.jointRadius = m.radius)),
            (f.visible = m !== null);
        }
        const u = l.joints["index-finger-tip"],
          h = l.joints["thumb-tip"],
          d = u.position.distanceTo(h.position),
          p = 0.02,
          g = 0.005;
        l.inputState.pinching && d > p + g
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            d <= p - g &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(l_)));
    }
    return (
      o !== null && (o.visible = i !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ri();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const u_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  h_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class d_ {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new gt(),
        r = e.properties.get(i);
      (r.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = i);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new Wn({
          vertexShader: u_,
          fragmentShader: h_,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new ot(new ui(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class f_ extends li {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      u = null,
      h = null,
      d = null,
      p = null,
      g = null;
    const x = new d_(),
      m = t.getContextAttributes();
    let f = null,
      E = null;
    const S = [],
      A = [],
      D = new ge();
    let R = null;
    const w = new wt();
    w.layers.enable(1), (w.viewport = new $e());
    const U = new wt();
    U.layers.enable(2), (U.viewport = new $e());
    const T = [w, U],
      y = new c_();
    y.layers.enable(1), y.layers.enable(2);
    let L = null,
      W = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (Y) {
        let ee = S[Y];
        return (
          ee === void 0 && ((ee = new va()), (S[Y] = ee)),
          ee.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (Y) {
        let ee = S[Y];
        return (
          ee === void 0 && ((ee = new va()), (S[Y] = ee)), ee.getGripSpace()
        );
      }),
      (this.getHand = function (Y) {
        let ee = S[Y];
        return (
          ee === void 0 && ((ee = new va()), (S[Y] = ee)), ee.getHandSpace()
        );
      });
    function H(Y) {
      const ee = A.indexOf(Y.inputSource);
      if (ee === -1) return;
      const de = S[ee];
      de !== void 0 &&
        (de.update(Y.inputSource, Y.frame, l || a),
        de.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function K() {
      i.removeEventListener("select", H),
        i.removeEventListener("selectstart", H),
        i.removeEventListener("selectend", H),
        i.removeEventListener("squeeze", H),
        i.removeEventListener("squeezestart", H),
        i.removeEventListener("squeezeend", H),
        i.removeEventListener("end", K),
        i.removeEventListener("inputsourceschange", q);
      for (let Y = 0; Y < S.length; Y++) {
        const ee = A[Y];
        ee !== null && ((A[Y] = null), S[Y].disconnect(ee));
      }
      (L = null),
        (W = null),
        x.reset(),
        e.setRenderTarget(f),
        (p = null),
        (d = null),
        (h = null),
        (i = null),
        (E = null),
        Ge.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(R),
        e.setSize(D.width, D.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (Y) {
      (r = Y),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          );
    }),
      (this.setReferenceSpaceType = function (Y) {
        (o = Y),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (Y) {
        l = Y;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : p;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (Y) {
        if (((i = Y), i !== null)) {
          if (
            ((f = e.getRenderTarget()),
            i.addEventListener("select", H),
            i.addEventListener("selectstart", H),
            i.addEventListener("selectend", H),
            i.addEventListener("squeeze", H),
            i.addEventListener("squeezestart", H),
            i.addEventListener("squeezeend", H),
            i.addEventListener("end", K),
            i.addEventListener("inputsourceschange", q),
            m.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (R = e.getPixelRatio()),
            e.getSize(D),
            i.renderState.layers === void 0)
          ) {
            const ee = {
              antialias: m.antialias,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: r,
            };
            (p = new XRWebGLLayer(i, t, ee)),
              i.updateRenderState({ baseLayer: p }),
              e.setPixelRatio(1),
              e.setSize(p.framebufferWidth, p.framebufferHeight, !1),
              (E = new oi(p.framebufferWidth, p.framebufferHeight, {
                format: Xt,
                type: Tn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: m.stencil,
              }));
          } else {
            let ee = null,
              de = null,
              le = null;
            m.depth &&
              ((le = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (ee = m.stencil ? Zi : Hi),
              (de = m.stencil ? ji : ai));
            const Le = {
              colorFormat: t.RGBA8,
              depthFormat: le,
              scaleFactor: r,
            };
            (h = new XRWebGLBinding(i, t)),
              (d = h.createProjectionLayer(Le)),
              i.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (E = new oi(d.textureWidth, d.textureHeight, {
                format: Xt,
                type: Tn,
                depthTexture: new _u(
                  d.textureWidth,
                  d.textureHeight,
                  de,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  ee,
                ),
                stencilBuffer: m.stencil,
                colorSpace: e.outputColorSpace,
                samples: m.antialias ? 4 : 0,
                resolveDepthBuffer: d.ignoreDepthValues === !1,
              }));
          }
          (E.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await i.requestReferenceSpace(o)),
            Ge.setContext(i),
            Ge.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return x.getDepthTexture();
      });
    function q(Y) {
      for (let ee = 0; ee < Y.removed.length; ee++) {
        const de = Y.removed[ee],
          le = A.indexOf(de);
        le >= 0 && ((A[le] = null), S[le].disconnect(de));
      }
      for (let ee = 0; ee < Y.added.length; ee++) {
        const de = Y.added[ee];
        let le = A.indexOf(de);
        if (le === -1) {
          for (let De = 0; De < S.length; De++)
            if (De >= A.length) {
              A.push(de), (le = De);
              break;
            } else if (A[De] === null) {
              (A[De] = de), (le = De);
              break;
            }
          if (le === -1) break;
        }
        const Le = S[le];
        Le && Le.connect(de);
      }
    }
    const X = new P(),
      j = new P();
    function G(Y, ee, de) {
      X.setFromMatrixPosition(ee.matrixWorld),
        j.setFromMatrixPosition(de.matrixWorld);
      const le = X.distanceTo(j),
        Le = ee.projectionMatrix.elements,
        De = de.projectionMatrix.elements,
        Fe = Le[14] / (Le[10] - 1),
        Qe = Le[14] / (Le[10] + 1),
        C = (Le[9] + 1) / Le[5],
        it = (Le[9] - 1) / Le[5],
        Ve = (Le[8] - 1) / Le[0],
        We = (De[8] + 1) / De[0],
        _e = Fe * Ve,
        st = Fe * We,
        we = le / (-Ve + We),
        Ce = we * -Ve;
      ee.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale),
        Y.translateX(Ce),
        Y.translateZ(we),
        Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
      const b = Fe + we,
        v = Qe + we,
        k = _e - Ce,
        $ = st + (le - Ce),
        Q = ((C * Qe) / v) * b,
        Z = ((it * Qe) / v) * b;
      Y.projectionMatrix.makePerspective(k, $, Q, Z, b, v),
        Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
    }
    function ce(Y, ee) {
      ee === null
        ? Y.matrixWorld.copy(Y.matrix)
        : Y.matrixWorld.multiplyMatrices(ee.matrixWorld, Y.matrix),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function (Y) {
      if (i === null) return;
      x.texture !== null && ((Y.near = x.depthNear), (Y.far = x.depthFar)),
        (y.near = U.near = w.near = Y.near),
        (y.far = U.far = w.far = Y.far),
        (L !== y.near || W !== y.far) &&
          (i.updateRenderState({ depthNear: y.near, depthFar: y.far }),
          (L = y.near),
          (W = y.far),
          (w.near = L),
          (w.far = W),
          (U.near = L),
          (U.far = W),
          w.updateProjectionMatrix(),
          U.updateProjectionMatrix(),
          Y.updateProjectionMatrix());
      const ee = Y.parent,
        de = y.cameras;
      ce(y, ee);
      for (let le = 0; le < de.length; le++) ce(de[le], ee);
      de.length === 2
        ? G(y, w, U)
        : y.projectionMatrix.copy(w.projectionMatrix),
        he(Y, y, ee);
    };
    function he(Y, ee, de) {
      de === null
        ? Y.matrix.copy(ee.matrixWorld)
        : (Y.matrix.copy(de.matrixWorld),
          Y.matrix.invert(),
          Y.matrix.multiply(ee.matrixWorld)),
        Y.matrix.decompose(Y.position, Y.quaternion, Y.scale),
        Y.updateMatrixWorld(!0),
        Y.projectionMatrix.copy(ee.projectionMatrix),
        Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),
        Y.isPerspectiveCamera &&
          ((Y.fov = $i * 2 * Math.atan(1 / Y.projectionMatrix.elements[5])),
          (Y.zoom = 1));
    }
    (this.getCamera = function () {
      return y;
    }),
      (this.getFoveation = function () {
        if (!(d === null && p === null)) return c;
      }),
      (this.setFoveation = function (Y) {
        (c = Y),
          d !== null && (d.fixedFoveation = Y),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
      }),
      (this.hasDepthSensing = function () {
        return x.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return x.getMesh(y);
      });
    let pe = null;
    function ze(Y, ee) {
      if (((u = ee.getViewerPose(l || a)), (g = ee), u !== null)) {
        const de = u.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(E, p.framebuffer),
          e.setRenderTarget(E));
        let le = !1;
        de.length !== y.cameras.length && ((y.cameras.length = 0), (le = !0));
        for (let De = 0; De < de.length; De++) {
          const Fe = de[De];
          let Qe = null;
          if (p !== null) Qe = p.getViewport(Fe);
          else {
            const it = h.getViewSubImage(d, Fe);
            (Qe = it.viewport),
              De === 0 &&
                (e.setRenderTargetTextures(
                  E,
                  it.colorTexture,
                  d.ignoreDepthValues ? void 0 : it.depthStencilTexture,
                ),
                e.setRenderTarget(E));
          }
          let C = T[De];
          C === void 0 &&
            ((C = new wt()),
            C.layers.enable(De),
            (C.viewport = new $e()),
            (T[De] = C)),
            C.matrix.fromArray(Fe.transform.matrix),
            C.matrix.decompose(C.position, C.quaternion, C.scale),
            C.projectionMatrix.fromArray(Fe.projectionMatrix),
            C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),
            C.viewport.set(Qe.x, Qe.y, Qe.width, Qe.height),
            De === 0 &&
              (y.matrix.copy(C.matrix),
              y.matrix.decompose(y.position, y.quaternion, y.scale)),
            le === !0 && y.cameras.push(C);
        }
        const Le = i.enabledFeatures;
        if (Le && Le.includes("depth-sensing")) {
          const De = h.getDepthInformation(de[0]);
          De && De.isValid && De.texture && x.init(e, De, i.renderState);
        }
      }
      for (let de = 0; de < S.length; de++) {
        const le = A[de],
          Le = S[de];
        le !== null && Le !== void 0 && Le.update(le, ee, l || a);
      }
      pe && pe(Y, ee),
        ee.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: ee }),
        (g = null);
    }
    const Ge = new gu();
    Ge.setAnimationLoop(ze),
      (this.setAnimationLoop = function (Y) {
        pe = Y;
      }),
      (this.dispose = function () {});
  }
}
const $n = new on(),
  p_ = new Ne();
function m_(s, e) {
  function t(m, f) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, fu(s)),
      f.isFog
        ? ((m.fogNear.value = f.near), (m.fogFar.value = f.far))
        : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, E, S, A) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? r(m, f)
      : f.isMeshToonMaterial
        ? (r(m, f), h(m, f))
        : f.isMeshPhongMaterial
          ? (r(m, f), u(m, f))
          : f.isMeshStandardMaterial
            ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, A))
            : f.isMeshMatcapMaterial
              ? (r(m, f), g(m, f))
              : f.isMeshDepthMaterial
                ? r(m, f)
                : f.isMeshDistanceMaterial
                  ? (r(m, f), x(m, f))
                  : f.isMeshNormalMaterial
                    ? r(m, f)
                    : f.isLineBasicMaterial
                      ? (a(m, f), f.isLineDashedMaterial && o(m, f))
                      : f.isPointsMaterial
                        ? c(m, f, E, S)
                        : f.isSpriteMaterial
                          ? l(m, f)
                          : f.isShadowMaterial
                            ? (m.color.value.copy(f.color),
                              (m.opacity.value = f.opacity))
                            : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function r(m, f) {
    (m.opacity.value = f.opacity),
      f.color && m.diffuse.value.copy(f.color),
      f.emissive &&
        m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && ((m.map.value = f.map), t(f.map, m.mapTransform)),
      f.alphaMap &&
        ((m.alphaMap.value = f.alphaMap), t(f.alphaMap, m.alphaMapTransform)),
      f.bumpMap &&
        ((m.bumpMap.value = f.bumpMap),
        t(f.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = f.bumpScale),
        f.side === Nt && (m.bumpScale.value *= -1)),
      f.normalMap &&
        ((m.normalMap.value = f.normalMap),
        t(f.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(f.normalScale),
        f.side === Nt && m.normalScale.value.negate()),
      f.displacementMap &&
        ((m.displacementMap.value = f.displacementMap),
        t(f.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = f.displacementScale),
        (m.displacementBias.value = f.displacementBias)),
      f.emissiveMap &&
        ((m.emissiveMap.value = f.emissiveMap),
        t(f.emissiveMap, m.emissiveMapTransform)),
      f.specularMap &&
        ((m.specularMap.value = f.specularMap),
        t(f.specularMap, m.specularMapTransform)),
      f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const E = e.get(f),
      S = E.envMap,
      A = E.envMapRotation;
    S &&
      ((m.envMap.value = S),
      $n.copy(A),
      ($n.x *= -1),
      ($n.y *= -1),
      ($n.z *= -1),
      S.isCubeTexture &&
        S.isRenderTargetTexture === !1 &&
        (($n.y *= -1), ($n.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler($n)),
      (m.flipEnvMap.value =
        S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = f.reflectivity),
      (m.ior.value = f.ior),
      (m.refractionRatio.value = f.refractionRatio)),
      f.lightMap &&
        ((m.lightMap.value = f.lightMap),
        (m.lightMapIntensity.value = f.lightMapIntensity),
        t(f.lightMap, m.lightMapTransform)),
      f.aoMap &&
        ((m.aoMap.value = f.aoMap),
        (m.aoMapIntensity.value = f.aoMapIntensity),
        t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color),
      (m.opacity.value = f.opacity),
      f.map && ((m.map.value = f.map), t(f.map, m.mapTransform));
  }
  function o(m, f) {
    (m.dashSize.value = f.dashSize),
      (m.totalSize.value = f.dashSize + f.gapSize),
      (m.scale.value = f.scale);
  }
  function c(m, f, E, S) {
    m.diffuse.value.copy(f.color),
      (m.opacity.value = f.opacity),
      (m.size.value = f.size * E),
      (m.scale.value = S * 0.5),
      f.map && ((m.map.value = f.map), t(f.map, m.uvTransform)),
      f.alphaMap &&
        ((m.alphaMap.value = f.alphaMap), t(f.alphaMap, m.alphaMapTransform)),
      f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function l(m, f) {
    m.diffuse.value.copy(f.color),
      (m.opacity.value = f.opacity),
      (m.rotation.value = f.rotation),
      f.map && ((m.map.value = f.map), t(f.map, m.mapTransform)),
      f.alphaMap &&
        ((m.alphaMap.value = f.alphaMap), t(f.alphaMap, m.alphaMapTransform)),
      f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function u(m, f) {
    m.specular.value.copy(f.specular),
      (m.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function h(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    (m.metalness.value = f.metalness),
      f.metalnessMap &&
        ((m.metalnessMap.value = f.metalnessMap),
        t(f.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = f.roughness),
      f.roughnessMap &&
        ((m.roughnessMap.value = f.roughnessMap),
        t(f.roughnessMap, m.roughnessMapTransform)),
      f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, E) {
    (m.ior.value = f.ior),
      f.sheen > 0 &&
        (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (m.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap &&
          ((m.sheenColorMap.value = f.sheenColorMap),
          t(f.sheenColorMap, m.sheenColorMapTransform)),
        f.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = f.sheenRoughnessMap),
          t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      f.clearcoat > 0 &&
        ((m.clearcoat.value = f.clearcoat),
        (m.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap &&
          ((m.clearcoatMap.value = f.clearcoatMap),
          t(f.clearcoatMap, m.clearcoatMapTransform)),
        f.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
          t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        f.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = f.clearcoatNormalMap),
          t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          f.side === Nt && m.clearcoatNormalScale.value.negate())),
      f.dispersion > 0 && (m.dispersion.value = f.dispersion),
      f.iridescence > 0 &&
        ((m.iridescence.value = f.iridescence),
        (m.iridescenceIOR.value = f.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap &&
          ((m.iridescenceMap.value = f.iridescenceMap),
          t(f.iridescenceMap, m.iridescenceMapTransform)),
        f.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = f.iridescenceThicknessMap),
          t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      f.transmission > 0 &&
        ((m.transmission.value = f.transmission),
        (m.transmissionSamplerMap.value = E.texture),
        m.transmissionSamplerSize.value.set(E.width, E.height),
        f.transmissionMap &&
          ((m.transmissionMap.value = f.transmissionMap),
          t(f.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = f.thickness),
        f.thicknessMap &&
          ((m.thicknessMap.value = f.thicknessMap),
          t(f.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = f.attenuationDistance),
        m.attenuationColor.value.copy(f.attenuationColor)),
      f.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          f.anisotropy * Math.cos(f.anisotropyRotation),
          f.anisotropy * Math.sin(f.anisotropyRotation),
        ),
        f.anisotropyMap &&
          ((m.anisotropyMap.value = f.anisotropyMap),
          t(f.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = f.specularIntensity),
      m.specularColor.value.copy(f.specularColor),
      f.specularColorMap &&
        ((m.specularColorMap.value = f.specularColorMap),
        t(f.specularColorMap, m.specularColorMapTransform)),
      f.specularIntensityMap &&
        ((m.specularIntensityMap.value = f.specularIntensityMap),
        t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function x(m, f) {
    const E = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),
      (m.nearDistance.value = E.shadow.camera.near),
      (m.farDistance.value = E.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function g_(s, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(E, S) {
    const A = S.program;
    n.uniformBlockBinding(E, A);
  }
  function l(E, S) {
    let A = i[E.id];
    A === void 0 &&
      (g(E), (A = u(E)), (i[E.id] = A), E.addEventListener("dispose", m));
    const D = S.program;
    n.updateUBOMapping(E, D);
    const R = e.render.frame;
    r[E.id] !== R && (d(E), (r[E.id] = R));
  }
  function u(E) {
    const S = h();
    E.__bindingPointIndex = S;
    const A = s.createBuffer(),
      D = E.__size,
      R = E.usage;
    return (
      s.bindBuffer(s.UNIFORM_BUFFER, A),
      s.bufferData(s.UNIFORM_BUFFER, D, R),
      s.bindBuffer(s.UNIFORM_BUFFER, null),
      s.bindBufferBase(s.UNIFORM_BUFFER, S, A),
      A
    );
  }
  function h() {
    for (let E = 0; E < o; E++) if (a.indexOf(E) === -1) return a.push(E), E;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function d(E) {
    const S = i[E.id],
      A = E.uniforms,
      D = E.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, S);
    for (let R = 0, w = A.length; R < w; R++) {
      const U = Array.isArray(A[R]) ? A[R] : [A[R]];
      for (let T = 0, y = U.length; T < y; T++) {
        const L = U[T];
        if (p(L, R, T, D) === !0) {
          const W = L.__offset,
            H = Array.isArray(L.value) ? L.value : [L.value];
          let K = 0;
          for (let q = 0; q < H.length; q++) {
            const X = H[q],
              j = x(X);
            typeof X == "number" || typeof X == "boolean"
              ? ((L.__data[0] = X),
                s.bufferSubData(s.UNIFORM_BUFFER, W + K, L.__data))
              : X.isMatrix3
                ? ((L.__data[0] = X.elements[0]),
                  (L.__data[1] = X.elements[1]),
                  (L.__data[2] = X.elements[2]),
                  (L.__data[3] = 0),
                  (L.__data[4] = X.elements[3]),
                  (L.__data[5] = X.elements[4]),
                  (L.__data[6] = X.elements[5]),
                  (L.__data[7] = 0),
                  (L.__data[8] = X.elements[6]),
                  (L.__data[9] = X.elements[7]),
                  (L.__data[10] = X.elements[8]),
                  (L.__data[11] = 0))
                : (X.toArray(L.__data, K),
                  (K += j.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          s.bufferSubData(s.UNIFORM_BUFFER, W, L.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function p(E, S, A, D) {
    const R = E.value,
      w = S + "_" + A;
    if (D[w] === void 0)
      return (
        typeof R == "number" || typeof R == "boolean"
          ? (D[w] = R)
          : (D[w] = R.clone()),
        !0
      );
    {
      const U = D[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (U !== R) return (D[w] = R), !0;
      } else if (U.equals(R) === !1) return U.copy(R), !0;
    }
    return !1;
  }
  function g(E) {
    const S = E.uniforms;
    let A = 0;
    const D = 16;
    for (let w = 0, U = S.length; w < U; w++) {
      const T = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let y = 0, L = T.length; y < L; y++) {
        const W = T[y],
          H = Array.isArray(W.value) ? W.value : [W.value];
        for (let K = 0, q = H.length; K < q; K++) {
          const X = H[K],
            j = x(X),
            G = A % D;
          G !== 0 && D - G < j.boundary && (A += D - G),
            (W.__data = new Float32Array(
              j.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (W.__offset = A),
            (A += j.storage);
        }
      }
    }
    const R = A % D;
    return R > 0 && (A += D - R), (E.__size = A), (E.__cache = {}), this;
  }
  function x(E) {
    const S = { boundary: 0, storage: 0 };
    return (
      typeof E == "number" || typeof E == "boolean"
        ? ((S.boundary = 4), (S.storage = 4))
        : E.isVector2
          ? ((S.boundary = 8), (S.storage = 8))
          : E.isVector3 || E.isColor
            ? ((S.boundary = 16), (S.storage = 12))
            : E.isVector4
              ? ((S.boundary = 16), (S.storage = 16))
              : E.isMatrix3
                ? ((S.boundary = 48), (S.storage = 48))
                : E.isMatrix4
                  ? ((S.boundary = 64), (S.storage = 64))
                  : E.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        E,
                      ),
      S
    );
  }
  function m(E) {
    const S = E.target;
    S.removeEventListener("dispose", m);
    const A = a.indexOf(S.__bindingPointIndex);
    a.splice(A, 1), s.deleteBuffer(i[S.id]), delete i[S.id], delete r[S.id];
  }
  function f() {
    for (const E in i) s.deleteBuffer(i[E]);
    (a = []), (i = {}), (r = {});
  }
  return { bind: c, update: l, dispose: f };
}
class Su {
  constructor(e = {}) {
    const {
      canvas: t = od(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      d = n.getContextAttributes().alpha;
    } else d = a;
    const p = new Uint32Array(4),
      g = new Int32Array(4);
    let x = null,
      m = null;
    const f = [],
      E = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Pt),
      (this.toneMapping = Gn),
      (this.toneMappingExposure = 1);
    const S = this;
    let A = !1,
      D = 0,
      R = 0,
      w = null,
      U = -1,
      T = null;
    const y = new $e(),
      L = new $e();
    let W = null;
    const H = new Pe(0);
    let K = 0,
      q = t.width,
      X = t.height,
      j = 1,
      G = null,
      ce = null;
    const he = new $e(0, 0, q, X),
      pe = new $e(0, 0, q, X);
    let ze = !1;
    const Ge = new Io();
    let Y = !1,
      ee = !1;
    const de = new Ne(),
      le = new P(),
      Le = new $e(),
      De = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Fe = !1;
    function Qe() {
      return w === null ? j : 1;
    }
    let C = n;
    function it(M, I) {
      return t.getContext(M, I);
    }
    try {
      const M = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Mo}`),
        t.addEventListener("webglcontextlost", F, !1),
        t.addEventListener("webglcontextrestored", V, !1),
        t.addEventListener("webglcontextcreationerror", J, !1),
        C === null)
      ) {
        const I = "webgl2";
        if (((C = it(I, M)), C === null))
          throw it(I)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw (console.error("THREE.WebGLRenderer: " + M.message), M);
    }
    let Ve,
      We,
      _e,
      st,
      we,
      Ce,
      b,
      v,
      k,
      $,
      Q,
      Z,
      Me,
      ie,
      ae,
      Ie,
      te,
      oe,
      ke,
      Se,
      ue,
      Te,
      Re,
      nt;
    function _() {
      (Ve = new Tm(C)),
        Ve.init(),
        (Te = new o_(C, Ve)),
        (We = new xm(C, Ve, e, Te)),
        (_e = new s_(C)),
        (st = new wm(C)),
        (we = new Wg()),
        (Ce = new a_(C, Ve, _e, we, We, Te, st)),
        (b = new Mm(S)),
        (v = new Em(S)),
        (k = new Dd(C)),
        (Re = new gm(C, k)),
        ($ = new Am(C, k, st, Re)),
        (Q = new Cm(C, $, k, st)),
        (ke = new Rm(C, We, Ce)),
        (Ie = new vm(we)),
        (Z = new Gg(S, b, v, Ve, We, Re, Ie)),
        (Me = new m_(S, we)),
        (ie = new Yg()),
        (ae = new Jg(Ve)),
        (oe = new mm(S, b, v, _e, Q, d, c)),
        (te = new i_(S, Q, We)),
        (nt = new g_(C, st, We, _e)),
        (Se = new _m(C, Ve, st)),
        (ue = new bm(C, Ve, st)),
        (st.programs = Z.programs),
        (S.capabilities = We),
        (S.extensions = Ve),
        (S.properties = we),
        (S.renderLists = ie),
        (S.shadowMap = te),
        (S.state = _e),
        (S.info = st);
    }
    _();
    const O = new f_(S, C);
    (this.xr = O),
      (this.getContext = function () {
        return C;
      }),
      (this.getContextAttributes = function () {
        return C.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const M = Ve.get("WEBGL_lose_context");
        M && M.loseContext();
      }),
      (this.forceContextRestore = function () {
        const M = Ve.get("WEBGL_lose_context");
        M && M.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return j;
      }),
      (this.setPixelRatio = function (M) {
        M !== void 0 && ((j = M), this.setSize(q, X, !1));
      }),
      (this.getSize = function (M) {
        return M.set(q, X);
      }),
      (this.setSize = function (M, I, B = !0) {
        if (O.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        (q = M),
          (X = I),
          (t.width = Math.floor(M * j)),
          (t.height = Math.floor(I * j)),
          B === !0 && ((t.style.width = M + "px"), (t.style.height = I + "px")),
          this.setViewport(0, 0, M, I);
      }),
      (this.getDrawingBufferSize = function (M) {
        return M.set(q * j, X * j).floor();
      }),
      (this.setDrawingBufferSize = function (M, I, B) {
        (q = M),
          (X = I),
          (j = B),
          (t.width = Math.floor(M * B)),
          (t.height = Math.floor(I * B)),
          this.setViewport(0, 0, M, I);
      }),
      (this.getCurrentViewport = function (M) {
        return M.copy(y);
      }),
      (this.getViewport = function (M) {
        return M.copy(he);
      }),
      (this.setViewport = function (M, I, B, z) {
        M.isVector4 ? he.set(M.x, M.y, M.z, M.w) : he.set(M, I, B, z),
          _e.viewport(y.copy(he).multiplyScalar(j).round());
      }),
      (this.getScissor = function (M) {
        return M.copy(pe);
      }),
      (this.setScissor = function (M, I, B, z) {
        M.isVector4 ? pe.set(M.x, M.y, M.z, M.w) : pe.set(M, I, B, z),
          _e.scissor(L.copy(pe).multiplyScalar(j).round());
      }),
      (this.getScissorTest = function () {
        return ze;
      }),
      (this.setScissorTest = function (M) {
        _e.setScissorTest((ze = M));
      }),
      (this.setOpaqueSort = function (M) {
        G = M;
      }),
      (this.setTransparentSort = function (M) {
        ce = M;
      }),
      (this.getClearColor = function (M) {
        return M.copy(oe.getClearColor());
      }),
      (this.setClearColor = function () {
        oe.setClearColor.apply(oe, arguments);
      }),
      (this.getClearAlpha = function () {
        return oe.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        oe.setClearAlpha.apply(oe, arguments);
      }),
      (this.clear = function (M = !0, I = !0, B = !0) {
        let z = 0;
        if (M) {
          let N = !1;
          if (w !== null) {
            const ne = w.texture.format;
            N = ne === wo || ne === bo || ne === Ao;
          }
          if (N) {
            const ne = w.texture.type,
              re =
                ne === Tn ||
                ne === ai ||
                ne === bs ||
                ne === ji ||
                ne === So ||
                ne === Eo,
              fe = oe.getClearColor(),
              me = oe.getClearAlpha(),
              Ee = fe.r,
              be = fe.g,
              ye = fe.b;
            re
              ? ((p[0] = Ee),
                (p[1] = be),
                (p[2] = ye),
                (p[3] = me),
                C.clearBufferuiv(C.COLOR, 0, p))
              : ((g[0] = Ee),
                (g[1] = be),
                (g[2] = ye),
                (g[3] = me),
                C.clearBufferiv(C.COLOR, 0, g));
          } else z |= C.COLOR_BUFFER_BIT;
        }
        I && (z |= C.DEPTH_BUFFER_BIT),
          B &&
            ((z |= C.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          C.clear(z);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", F, !1),
          t.removeEventListener("webglcontextrestored", V, !1),
          t.removeEventListener("webglcontextcreationerror", J, !1),
          ie.dispose(),
          ae.dispose(),
          we.dispose(),
          b.dispose(),
          v.dispose(),
          Q.dispose(),
          Re.dispose(),
          nt.dispose(),
          Z.dispose(),
          O.dispose(),
          O.removeEventListener("sessionstart", ht),
          O.removeEventListener("sessionend", bn),
          yt.stop();
      });
    function F(M) {
      M.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (A = !0);
    }
    function V() {
      console.log("THREE.WebGLRenderer: Context Restored."), (A = !1);
      const M = st.autoReset,
        I = te.enabled,
        B = te.autoUpdate,
        z = te.needsUpdate,
        N = te.type;
      _(),
        (st.autoReset = M),
        (te.enabled = I),
        (te.autoUpdate = B),
        (te.needsUpdate = z),
        (te.type = N);
    }
    function J(M) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        M.statusMessage,
      );
    }
    function xe(M) {
      const I = M.target;
      I.removeEventListener("dispose", xe), Ae(I);
    }
    function Ae(M) {
      ct(M), we.remove(M);
    }
    function ct(M) {
      const I = we.get(M).programs;
      I !== void 0 &&
        (I.forEach(function (B) {
          Z.releaseProgram(B);
        }),
        M.isShaderMaterial && Z.releaseShaderCache(M));
    }
    this.renderBufferDirect = function (M, I, B, z, N, ne) {
      I === null && (I = De);
      const re = N.isMesh && N.matrixWorld.determinant() < 0,
        fe = Gu(M, I, B, z, N);
      _e.setMaterial(z, re);
      let me = B.index,
        Ee = 1;
      if (z.wireframe === !0) {
        if (((me = $.getWireframeAttribute(B)), me === void 0)) return;
        Ee = 2;
      }
      const be = B.drawRange,
        ye = B.attributes.position;
      let Ye = be.start * Ee,
        rt = (be.start + be.count) * Ee;
      ne !== null &&
        ((Ye = Math.max(Ye, ne.start * Ee)),
        (rt = Math.min(rt, (ne.start + ne.count) * Ee))),
        me !== null
          ? ((Ye = Math.max(Ye, 0)), (rt = Math.min(rt, me.count)))
          : ye != null &&
            ((Ye = Math.max(Ye, 0)), (rt = Math.min(rt, ye.count)));
      const at = rt - Ye;
      if (at < 0 || at === 1 / 0) return;
      Re.setup(N, z, fe, B, me);
      let Ot,
        qe = Se;
      if (
        (me !== null && ((Ot = k.get(me)), (qe = ue), qe.setIndex(Ot)),
        N.isMesh)
      )
        z.wireframe === !0
          ? (_e.setLineWidth(z.wireframeLinewidth * Qe()), qe.setMode(C.LINES))
          : qe.setMode(C.TRIANGLES);
      else if (N.isLine) {
        let ve = z.linewidth;
        ve === void 0 && (ve = 1),
          _e.setLineWidth(ve * Qe()),
          N.isLineSegments
            ? qe.setMode(C.LINES)
            : N.isLineLoop
              ? qe.setMode(C.LINE_LOOP)
              : qe.setMode(C.LINE_STRIP);
      } else
        N.isPoints
          ? qe.setMode(C.POINTS)
          : N.isSprite && qe.setMode(C.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          qe.renderMultiDrawInstances(
            N._multiDrawStarts,
            N._multiDrawCounts,
            N._multiDrawCount,
            N._multiDrawInstances,
          );
        else if (Ve.get("WEBGL_multi_draw"))
          qe.renderMultiDraw(
            N._multiDrawStarts,
            N._multiDrawCounts,
            N._multiDrawCount,
          );
        else {
          const ve = N._multiDrawStarts,
            St = N._multiDrawCounts,
            Ke = N._multiDrawCount,
            qt = me ? k.get(me).bytesPerElement : 1,
            di = we.get(z).currentProgram.getUniforms();
          for (let Ft = 0; Ft < Ke; Ft++)
            di.setValue(C, "_gl_DrawID", Ft), qe.render(ve[Ft] / qt, St[Ft]);
        }
      else if (N.isInstancedMesh) qe.renderInstances(Ye, at, N.count);
      else if (B.isInstancedBufferGeometry) {
        const ve = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
          St = Math.min(B.instanceCount, ve);
        qe.renderInstances(Ye, at, St);
      } else qe.render(Ye, at);
    };
    function pt(M, I, B) {
      M.transparent === !0 && M.side === an && M.forceSinglePass === !1
        ? ((M.side = Nt),
          (M.needsUpdate = !0),
          Fs(M, I, B),
          (M.side = En),
          (M.needsUpdate = !0),
          Fs(M, I, B),
          (M.side = an))
        : Fs(M, I, B);
    }
    (this.compile = function (M, I, B = null) {
      B === null && (B = M),
        (m = ae.get(B)),
        m.init(I),
        E.push(m),
        B.traverseVisible(function (N) {
          N.isLight &&
            N.layers.test(I.layers) &&
            (m.pushLight(N), N.castShadow && m.pushShadow(N));
        }),
        M !== B &&
          M.traverseVisible(function (N) {
            N.isLight &&
              N.layers.test(I.layers) &&
              (m.pushLight(N), N.castShadow && m.pushShadow(N));
          }),
        m.setupLights();
      const z = new Set();
      return (
        M.traverse(function (N) {
          const ne = N.material;
          if (ne)
            if (Array.isArray(ne))
              for (let re = 0; re < ne.length; re++) {
                const fe = ne[re];
                pt(fe, B, N), z.add(fe);
              }
            else pt(ne, B, N), z.add(ne);
        }),
        E.pop(),
        (m = null),
        z
      );
    }),
      (this.compileAsync = function (M, I, B = null) {
        const z = this.compile(M, I, B);
        return new Promise((N) => {
          function ne() {
            if (
              (z.forEach(function (re) {
                we.get(re).currentProgram.isReady() && z.delete(re);
              }),
              z.size === 0)
            ) {
              N(M);
              return;
            }
            setTimeout(ne, 10);
          }
          Ve.get("KHR_parallel_shader_compile") !== null
            ? ne()
            : setTimeout(ne, 10);
        });
      });
    let He = null;
    function mt(M) {
      He && He(M);
    }
    function ht() {
      yt.stop();
    }
    function bn() {
      yt.start();
    }
    const yt = new gu();
    yt.setAnimationLoop(mt),
      typeof self < "u" && yt.setContext(self),
      (this.setAnimationLoop = function (M) {
        (He = M), O.setAnimationLoop(M), M === null ? yt.stop() : yt.start();
      }),
      O.addEventListener("sessionstart", ht),
      O.addEventListener("sessionend", bn),
      (this.render = function (M, I) {
        if (I !== void 0 && I.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (A === !0) return;
        if (
          (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(),
          I.parent === null &&
            I.matrixWorldAutoUpdate === !0 &&
            I.updateMatrixWorld(),
          O.enabled === !0 &&
            O.isPresenting === !0 &&
            (O.cameraAutoUpdate === !0 && O.updateCamera(I),
            (I = O.getCamera())),
          M.isScene === !0 && M.onBeforeRender(S, M, I, w),
          (m = ae.get(M, E.length)),
          m.init(I),
          E.push(m),
          de.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse),
          Ge.setFromProjectionMatrix(de),
          (ee = this.localClippingEnabled),
          (Y = Ie.init(this.clippingPlanes, ee)),
          (x = ie.get(M, f.length)),
          x.init(),
          f.push(x),
          O.enabled === !0 && O.isPresenting === !0)
        ) {
          const ne = S.xr.getDepthSensingMesh();
          ne !== null && hn(ne, I, -1 / 0, S.sortObjects);
        }
        hn(M, I, 0, S.sortObjects),
          x.finish(),
          S.sortObjects === !0 && x.sort(G, ce),
          (Fe =
            O.enabled === !1 ||
            O.isPresenting === !1 ||
            O.hasDepthSensing() === !1),
          Fe && oe.addToRenderList(x, M),
          this.info.render.frame++,
          Y === !0 && Ie.beginShadows();
        const B = m.state.shadowsArray;
        te.render(B, M, I),
          Y === !0 && Ie.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const z = x.opaque,
          N = x.transmissive;
        if ((m.setupLights(), I.isArrayCamera)) {
          const ne = I.cameras;
          if (N.length > 0)
            for (let re = 0, fe = ne.length; re < fe; re++) {
              const me = ne[re];
              os(z, N, M, me);
            }
          Fe && oe.render(M);
          for (let re = 0, fe = ne.length; re < fe; re++) {
            const me = ne[re];
            Xn(x, M, me, me.viewport);
          }
        } else N.length > 0 && os(z, N, M, I), Fe && oe.render(M), Xn(x, M, I);
        w !== null &&
          (Ce.updateMultisampleRenderTarget(w), Ce.updateRenderTargetMipmap(w)),
          M.isScene === !0 && M.onAfterRender(S, M, I),
          Re.resetDefaultState(),
          (U = -1),
          (T = null),
          E.pop(),
          E.length > 0
            ? ((m = E[E.length - 1]),
              Y === !0 && Ie.setGlobalState(S.clippingPlanes, m.state.camera))
            : (m = null),
          f.pop(),
          f.length > 0 ? (x = f[f.length - 1]) : (x = null);
      });
    function hn(M, I, B, z) {
      if (M.visible === !1) return;
      if (M.layers.test(I.layers)) {
        if (M.isGroup) B = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === !0 && M.update(I);
        else if (M.isLight) m.pushLight(M), M.castShadow && m.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Ge.intersectsSprite(M)) {
            z && Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);
            const re = Q.update(M),
              fe = M.material;
            fe.visible && x.push(M, re, fe, B, Le.z, null);
          }
        } else if (
          (M.isMesh || M.isLine || M.isPoints) &&
          (!M.frustumCulled || Ge.intersectsObject(M))
        ) {
          const re = Q.update(M),
            fe = M.material;
          if (
            (z &&
              (M.boundingSphere !== void 0
                ? (M.boundingSphere === null && M.computeBoundingSphere(),
                  Le.copy(M.boundingSphere.center))
                : (re.boundingSphere === null && re.computeBoundingSphere(),
                  Le.copy(re.boundingSphere.center)),
              Le.applyMatrix4(M.matrixWorld).applyMatrix4(de)),
            Array.isArray(fe))
          ) {
            const me = re.groups;
            for (let Ee = 0, be = me.length; Ee < be; Ee++) {
              const ye = me[Ee],
                Ye = fe[ye.materialIndex];
              Ye && Ye.visible && x.push(M, re, Ye, B, Le.z, ye);
            }
          } else fe.visible && x.push(M, re, fe, B, Le.z, null);
        }
      }
      const ne = M.children;
      for (let re = 0, fe = ne.length; re < fe; re++) hn(ne[re], I, B, z);
    }
    function Xn(M, I, B, z) {
      const N = M.opaque,
        ne = M.transmissive,
        re = M.transparent;
      m.setupLightsView(B),
        Y === !0 && Ie.setGlobalState(S.clippingPlanes, B),
        z && _e.viewport(y.copy(z)),
        N.length > 0 && Os(N, I, B),
        ne.length > 0 && Os(ne, I, B),
        re.length > 0 && Os(re, I, B),
        _e.buffers.depth.setTest(!0),
        _e.buffers.depth.setMask(!0),
        _e.buffers.color.setMask(!0),
        _e.setPolygonOffset(!1);
    }
    function os(M, I, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
      m.state.transmissionRenderTarget[z.id] === void 0 &&
        (m.state.transmissionRenderTarget[z.id] = new oi(1, 1, {
          generateMipmaps: !0,
          type:
            Ve.has("EXT_color_buffer_half_float") ||
            Ve.has("EXT_color_buffer_float")
              ? Ls
              : Tn,
          minFilter: yn,
          samples: 4,
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Xe.workingColorSpace,
        }));
      const ne = m.state.transmissionRenderTarget[z.id],
        re = z.viewport || y;
      ne.setSize(re.z, re.w);
      const fe = S.getRenderTarget();
      S.setRenderTarget(ne),
        S.getClearColor(H),
        (K = S.getClearAlpha()),
        K < 1 && S.setClearColor(16777215, 0.5),
        Fe ? oe.render(B) : S.clear();
      const me = S.toneMapping;
      S.toneMapping = Gn;
      const Ee = z.viewport;
      if (
        (z.viewport !== void 0 && (z.viewport = void 0),
        m.setupLightsView(z),
        Y === !0 && Ie.setGlobalState(S.clippingPlanes, z),
        Os(M, B, z),
        Ce.updateMultisampleRenderTarget(ne),
        Ce.updateRenderTargetMipmap(ne),
        Ve.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let be = !1;
        for (let ye = 0, Ye = I.length; ye < Ye; ye++) {
          const rt = I[ye],
            at = rt.object,
            Ot = rt.geometry,
            qe = rt.material,
            ve = rt.group;
          if (qe.side === an && at.layers.test(z.layers)) {
            const St = qe.side;
            (qe.side = Nt),
              (qe.needsUpdate = !0),
              ic(at, B, z, Ot, qe, ve),
              (qe.side = St),
              (qe.needsUpdate = !0),
              (be = !0);
          }
        }
        be === !0 &&
          (Ce.updateMultisampleRenderTarget(ne),
          Ce.updateRenderTargetMipmap(ne));
      }
      S.setRenderTarget(fe),
        S.setClearColor(H, K),
        Ee !== void 0 && (z.viewport = Ee),
        (S.toneMapping = me);
    }
    function Os(M, I, B) {
      const z = I.isScene === !0 ? I.overrideMaterial : null;
      for (let N = 0, ne = M.length; N < ne; N++) {
        const re = M[N],
          fe = re.object,
          me = re.geometry,
          Ee = z === null ? re.material : z,
          be = re.group;
        fe.layers.test(B.layers) && ic(fe, I, B, me, Ee, be);
      }
    }
    function ic(M, I, B, z, N, ne) {
      M.onBeforeRender(S, I, B, z, N, ne),
        M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, M.matrixWorld),
        M.normalMatrix.getNormalMatrix(M.modelViewMatrix),
        N.transparent === !0 && N.side === an && N.forceSinglePass === !1
          ? ((N.side = Nt),
            (N.needsUpdate = !0),
            S.renderBufferDirect(B, I, z, N, M, ne),
            (N.side = En),
            (N.needsUpdate = !0),
            S.renderBufferDirect(B, I, z, N, M, ne),
            (N.side = an))
          : S.renderBufferDirect(B, I, z, N, M, ne),
        M.onAfterRender(S, I, B, z, N, ne);
    }
    function Fs(M, I, B) {
      I.isScene !== !0 && (I = De);
      const z = we.get(M),
        N = m.state.lights,
        ne = m.state.shadowsArray,
        re = N.state.version,
        fe = Z.getParameters(M, N.state, ne, I, B),
        me = Z.getProgramCacheKey(fe);
      let Ee = z.programs;
      (z.environment = M.isMeshStandardMaterial ? I.environment : null),
        (z.fog = I.fog),
        (z.envMap = (M.isMeshStandardMaterial ? v : b).get(
          M.envMap || z.environment,
        )),
        (z.envMapRotation =
          z.environment !== null && M.envMap === null
            ? I.environmentRotation
            : M.envMapRotation),
        Ee === void 0 &&
          (M.addEventListener("dispose", xe),
          (Ee = new Map()),
          (z.programs = Ee));
      let be = Ee.get(me);
      if (be !== void 0) {
        if (z.currentProgram === be && z.lightsStateVersion === re)
          return rc(M, fe), be;
      } else
        (fe.uniforms = Z.getUniforms(M)),
          M.onBeforeCompile(fe, S),
          (be = Z.acquireProgram(fe, me)),
          Ee.set(me, be),
          (z.uniforms = fe.uniforms);
      const ye = z.uniforms;
      return (
        ((!M.isShaderMaterial && !M.isRawShaderMaterial) ||
          M.clipping === !0) &&
          (ye.clippingPlanes = Ie.uniform),
        rc(M, fe),
        (z.needsLights = Xu(M)),
        (z.lightsStateVersion = re),
        z.needsLights &&
          ((ye.ambientLightColor.value = N.state.ambient),
          (ye.lightProbe.value = N.state.probe),
          (ye.directionalLights.value = N.state.directional),
          (ye.directionalLightShadows.value = N.state.directionalShadow),
          (ye.spotLights.value = N.state.spot),
          (ye.spotLightShadows.value = N.state.spotShadow),
          (ye.rectAreaLights.value = N.state.rectArea),
          (ye.ltc_1.value = N.state.rectAreaLTC1),
          (ye.ltc_2.value = N.state.rectAreaLTC2),
          (ye.pointLights.value = N.state.point),
          (ye.pointLightShadows.value = N.state.pointShadow),
          (ye.hemisphereLights.value = N.state.hemi),
          (ye.directionalShadowMap.value = N.state.directionalShadowMap),
          (ye.directionalShadowMatrix.value = N.state.directionalShadowMatrix),
          (ye.spotShadowMap.value = N.state.spotShadowMap),
          (ye.spotLightMatrix.value = N.state.spotLightMatrix),
          (ye.spotLightMap.value = N.state.spotLightMap),
          (ye.pointShadowMap.value = N.state.pointShadowMap),
          (ye.pointShadowMatrix.value = N.state.pointShadowMatrix)),
        (z.currentProgram = be),
        (z.uniformsList = null),
        be
      );
    }
    function sc(M) {
      if (M.uniformsList === null) {
        const I = M.currentProgram.getUniforms();
        M.uniformsList = wr.seqWithValue(I.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function rc(M, I) {
      const B = we.get(M);
      (B.outputColorSpace = I.outputColorSpace),
        (B.batching = I.batching),
        (B.batchingColor = I.batchingColor),
        (B.instancing = I.instancing),
        (B.instancingColor = I.instancingColor),
        (B.instancingMorph = I.instancingMorph),
        (B.skinning = I.skinning),
        (B.morphTargets = I.morphTargets),
        (B.morphNormals = I.morphNormals),
        (B.morphColors = I.morphColors),
        (B.morphTargetsCount = I.morphTargetsCount),
        (B.numClippingPlanes = I.numClippingPlanes),
        (B.numIntersection = I.numClipIntersection),
        (B.vertexAlphas = I.vertexAlphas),
        (B.vertexTangents = I.vertexTangents),
        (B.toneMapping = I.toneMapping);
    }
    function Gu(M, I, B, z, N) {
      I.isScene !== !0 && (I = De), Ce.resetTextureUnits();
      const ne = I.fog,
        re = z.isMeshStandardMaterial ? I.environment : null,
        fe =
          w === null
            ? S.outputColorSpace
            : w.isXRRenderTarget === !0
              ? w.texture.colorSpace
              : Tt,
        me = (z.isMeshStandardMaterial ? v : b).get(z.envMap || re),
        Ee =
          z.vertexColors === !0 &&
          !!B.attributes.color &&
          B.attributes.color.itemSize === 4,
        be = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0),
        ye = !!B.morphAttributes.position,
        Ye = !!B.morphAttributes.normal,
        rt = !!B.morphAttributes.color;
      let at = Gn;
      z.toneMapped &&
        (w === null || w.isXRRenderTarget === !0) &&
        (at = S.toneMapping);
      const Ot =
          B.morphAttributes.position ||
          B.morphAttributes.normal ||
          B.morphAttributes.color,
        qe = Ot !== void 0 ? Ot.length : 0,
        ve = we.get(z),
        St = m.state.lights;
      if (Y === !0 && (ee === !0 || M !== T)) {
        const Ht = M === T && z.id === U;
        Ie.setState(z, M, Ht);
      }
      let Ke = !1;
      z.version === ve.__version
        ? ((ve.needsLights && ve.lightsStateVersion !== St.state.version) ||
            ve.outputColorSpace !== fe ||
            (N.isBatchedMesh && ve.batching === !1) ||
            (!N.isBatchedMesh && ve.batching === !0) ||
            (N.isBatchedMesh &&
              ve.batchingColor === !0 &&
              N.colorTexture === null) ||
            (N.isBatchedMesh &&
              ve.batchingColor === !1 &&
              N.colorTexture !== null) ||
            (N.isInstancedMesh && ve.instancing === !1) ||
            (!N.isInstancedMesh && ve.instancing === !0) ||
            (N.isSkinnedMesh && ve.skinning === !1) ||
            (!N.isSkinnedMesh && ve.skinning === !0) ||
            (N.isInstancedMesh &&
              ve.instancingColor === !0 &&
              N.instanceColor === null) ||
            (N.isInstancedMesh &&
              ve.instancingColor === !1 &&
              N.instanceColor !== null) ||
            (N.isInstancedMesh &&
              ve.instancingMorph === !0 &&
              N.morphTexture === null) ||
            (N.isInstancedMesh &&
              ve.instancingMorph === !1 &&
              N.morphTexture !== null) ||
            ve.envMap !== me ||
            (z.fog === !0 && ve.fog !== ne) ||
            (ve.numClippingPlanes !== void 0 &&
              (ve.numClippingPlanes !== Ie.numPlanes ||
                ve.numIntersection !== Ie.numIntersection)) ||
            ve.vertexAlphas !== Ee ||
            ve.vertexTangents !== be ||
            ve.morphTargets !== ye ||
            ve.morphNormals !== Ye ||
            ve.morphColors !== rt ||
            ve.toneMapping !== at ||
            ve.morphTargetsCount !== qe) &&
          (Ke = !0)
        : ((Ke = !0), (ve.__version = z.version));
      let qt = ve.currentProgram;
      Ke === !0 && (qt = Fs(z, I, N));
      let di = !1,
        Ft = !1,
        Xr = !1;
      const dt = qt.getUniforms(),
        wn = ve.uniforms;
      if (
        (_e.useProgram(qt.program) && ((di = !0), (Ft = !0), (Xr = !0)),
        z.id !== U && ((U = z.id), (Ft = !0)),
        di || T !== M)
      ) {
        dt.setValue(C, "projectionMatrix", M.projectionMatrix),
          dt.setValue(C, "viewMatrix", M.matrixWorldInverse);
        const Ht = dt.map.cameraPosition;
        Ht !== void 0 &&
          Ht.setValue(C, le.setFromMatrixPosition(M.matrixWorld)),
          We.logarithmicDepthBuffer &&
            dt.setValue(
              C,
              "logDepthBufFC",
              2 / (Math.log(M.far + 1) / Math.LN2),
            ),
          (z.isMeshPhongMaterial ||
            z.isMeshToonMaterial ||
            z.isMeshLambertMaterial ||
            z.isMeshBasicMaterial ||
            z.isMeshStandardMaterial ||
            z.isShaderMaterial) &&
            dt.setValue(C, "isOrthographic", M.isOrthographicCamera === !0),
          T !== M && ((T = M), (Ft = !0), (Xr = !0));
      }
      if (N.isSkinnedMesh) {
        dt.setOptional(C, N, "bindMatrix"),
          dt.setOptional(C, N, "bindMatrixInverse");
        const Ht = N.skeleton;
        Ht &&
          (Ht.boneTexture === null && Ht.computeBoneTexture(),
          dt.setValue(C, "boneTexture", Ht.boneTexture, Ce));
      }
      N.isBatchedMesh &&
        (dt.setOptional(C, N, "batchingTexture"),
        dt.setValue(C, "batchingTexture", N._matricesTexture, Ce),
        dt.setOptional(C, N, "batchingIdTexture"),
        dt.setValue(C, "batchingIdTexture", N._indirectTexture, Ce),
        dt.setOptional(C, N, "batchingColorTexture"),
        N._colorsTexture !== null &&
          dt.setValue(C, "batchingColorTexture", N._colorsTexture, Ce));
      const Yr = B.morphAttributes;
      if (
        ((Yr.position !== void 0 ||
          Yr.normal !== void 0 ||
          Yr.color !== void 0) &&
          ke.update(N, B, qt),
        (Ft || ve.receiveShadow !== N.receiveShadow) &&
          ((ve.receiveShadow = N.receiveShadow),
          dt.setValue(C, "receiveShadow", N.receiveShadow)),
        z.isMeshGouraudMaterial &&
          z.envMap !== null &&
          ((wn.envMap.value = me),
          (wn.flipEnvMap.value =
            me.isCubeTexture && me.isRenderTargetTexture === !1 ? -1 : 1)),
        z.isMeshStandardMaterial &&
          z.envMap === null &&
          I.environment !== null &&
          (wn.envMapIntensity.value = I.environmentIntensity),
        Ft &&
          (dt.setValue(C, "toneMappingExposure", S.toneMappingExposure),
          ve.needsLights && Wu(wn, Xr),
          ne && z.fog === !0 && Me.refreshFogUniforms(wn, ne),
          Me.refreshMaterialUniforms(
            wn,
            z,
            j,
            X,
            m.state.transmissionRenderTarget[M.id],
          ),
          wr.upload(C, sc(ve), wn, Ce)),
        z.isShaderMaterial &&
          z.uniformsNeedUpdate === !0 &&
          (wr.upload(C, sc(ve), wn, Ce), (z.uniformsNeedUpdate = !1)),
        z.isSpriteMaterial && dt.setValue(C, "center", N.center),
        dt.setValue(C, "modelViewMatrix", N.modelViewMatrix),
        dt.setValue(C, "normalMatrix", N.normalMatrix),
        dt.setValue(C, "modelMatrix", N.matrixWorld),
        z.isShaderMaterial || z.isRawShaderMaterial)
      ) {
        const Ht = z.uniformsGroups;
        for (let qr = 0, Yu = Ht.length; qr < Yu; qr++) {
          const ac = Ht[qr];
          nt.update(ac, qt), nt.bind(ac, qt);
        }
      }
      return qt;
    }
    function Wu(M, I) {
      (M.ambientLightColor.needsUpdate = I),
        (M.lightProbe.needsUpdate = I),
        (M.directionalLights.needsUpdate = I),
        (M.directionalLightShadows.needsUpdate = I),
        (M.pointLights.needsUpdate = I),
        (M.pointLightShadows.needsUpdate = I),
        (M.spotLights.needsUpdate = I),
        (M.spotLightShadows.needsUpdate = I),
        (M.rectAreaLights.needsUpdate = I),
        (M.hemisphereLights.needsUpdate = I);
    }
    function Xu(M) {
      return (
        M.isMeshLambertMaterial ||
        M.isMeshToonMaterial ||
        M.isMeshPhongMaterial ||
        M.isMeshStandardMaterial ||
        M.isShadowMaterial ||
        (M.isShaderMaterial && M.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return D;
    }),
      (this.getActiveMipmapLevel = function () {
        return R;
      }),
      (this.getRenderTarget = function () {
        return w;
      }),
      (this.setRenderTargetTextures = function (M, I, B) {
        (we.get(M.texture).__webglTexture = I),
          (we.get(M.depthTexture).__webglTexture = B);
        const z = we.get(M);
        (z.__hasExternalTextures = !0),
          (z.__autoAllocateDepthBuffer = B === void 0),
          z.__autoAllocateDepthBuffer ||
            (Ve.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
              ),
              (z.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (M, I) {
        const B = we.get(M);
        (B.__webglFramebuffer = I), (B.__useDefaultFramebuffer = I === void 0);
      }),
      (this.setRenderTarget = function (M, I = 0, B = 0) {
        (w = M), (D = I), (R = B);
        let z = !0,
          N = null,
          ne = !1,
          re = !1;
        if (M) {
          const me = we.get(M);
          me.__useDefaultFramebuffer !== void 0
            ? (_e.bindFramebuffer(C.FRAMEBUFFER, null), (z = !1))
            : me.__webglFramebuffer === void 0
              ? Ce.setupRenderTarget(M)
              : me.__hasExternalTextures &&
                Ce.rebindTextures(
                  M,
                  we.get(M.texture).__webglTexture,
                  we.get(M.depthTexture).__webglTexture,
                );
          const Ee = M.texture;
          (Ee.isData3DTexture ||
            Ee.isDataArrayTexture ||
            Ee.isCompressedArrayTexture) &&
            (re = !0);
          const be = we.get(M).__webglFramebuffer;
          M.isWebGLCubeRenderTarget
            ? (Array.isArray(be[I]) ? (N = be[I][B]) : (N = be[I]), (ne = !0))
            : M.samples > 0 && Ce.useMultisampledRTT(M) === !1
              ? (N = we.get(M).__webglMultisampledFramebuffer)
              : Array.isArray(be)
                ? (N = be[B])
                : (N = be),
            y.copy(M.viewport),
            L.copy(M.scissor),
            (W = M.scissorTest);
        } else
          y.copy(he).multiplyScalar(j).floor(),
            L.copy(pe).multiplyScalar(j).floor(),
            (W = ze);
        if (
          (_e.bindFramebuffer(C.FRAMEBUFFER, N) && z && _e.drawBuffers(M, N),
          _e.viewport(y),
          _e.scissor(L),
          _e.setScissorTest(W),
          ne)
        ) {
          const me = we.get(M.texture);
          C.framebufferTexture2D(
            C.FRAMEBUFFER,
            C.COLOR_ATTACHMENT0,
            C.TEXTURE_CUBE_MAP_POSITIVE_X + I,
            me.__webglTexture,
            B,
          );
        } else if (re) {
          const me = we.get(M.texture),
            Ee = I || 0;
          C.framebufferTextureLayer(
            C.FRAMEBUFFER,
            C.COLOR_ATTACHMENT0,
            me.__webglTexture,
            B || 0,
            Ee,
          );
        }
        U = -1;
      }),
      (this.readRenderTargetPixels = function (M, I, B, z, N, ne, re) {
        if (!(M && M.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let fe = we.get(M).__webglFramebuffer;
        if ((M.isWebGLCubeRenderTarget && re !== void 0 && (fe = fe[re]), fe)) {
          _e.bindFramebuffer(C.FRAMEBUFFER, fe);
          try {
            const me = M.texture,
              Ee = me.format,
              be = me.type;
            if (!We.textureFormatReadable(Ee)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!We.textureTypeReadable(be)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            I >= 0 &&
              I <= M.width - z &&
              B >= 0 &&
              B <= M.height - N &&
              C.readPixels(I, B, z, N, Te.convert(Ee), Te.convert(be), ne);
          } finally {
            const me = w !== null ? we.get(w).__webglFramebuffer : null;
            _e.bindFramebuffer(C.FRAMEBUFFER, me);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        M,
        I,
        B,
        z,
        N,
        ne,
        re,
      ) {
        if (!(M && M.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let fe = we.get(M).__webglFramebuffer;
        if ((M.isWebGLCubeRenderTarget && re !== void 0 && (fe = fe[re]), fe)) {
          _e.bindFramebuffer(C.FRAMEBUFFER, fe);
          try {
            const me = M.texture,
              Ee = me.format,
              be = me.type;
            if (!We.textureFormatReadable(Ee))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!We.textureTypeReadable(be))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            if (I >= 0 && I <= M.width - z && B >= 0 && B <= M.height - N) {
              const ye = C.createBuffer();
              C.bindBuffer(C.PIXEL_PACK_BUFFER, ye),
                C.bufferData(C.PIXEL_PACK_BUFFER, ne.byteLength, C.STREAM_READ),
                C.readPixels(I, B, z, N, Te.convert(Ee), Te.convert(be), 0),
                C.flush();
              const Ye = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await cd(C, Ye, 4);
              try {
                C.bindBuffer(C.PIXEL_PACK_BUFFER, ye),
                  C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, ne);
              } finally {
                C.deleteBuffer(ye), C.deleteSync(Ye);
              }
              return ne;
            }
          } finally {
            const me = w !== null ? we.get(w).__webglFramebuffer : null;
            _e.bindFramebuffer(C.FRAMEBUFFER, me);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (M, I = null, B = 0) {
        M.isTexture !== !0 &&
          (console.warn(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed.",
          ),
          (I = arguments[0] || null),
          (M = arguments[1]));
        const z = Math.pow(2, -B),
          N = Math.floor(M.image.width * z),
          ne = Math.floor(M.image.height * z),
          re = I !== null ? I.x : 0,
          fe = I !== null ? I.y : 0;
        Ce.setTexture2D(M, 0),
          C.copyTexSubImage2D(C.TEXTURE_2D, B, 0, 0, re, fe, N, ne),
          _e.unbindTexture();
      }),
      (this.copyTextureToTexture = function (M, I, B = null, z = null, N = 0) {
        M.isTexture !== !0 &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture function signature has changed.",
          ),
          (z = arguments[0] || null),
          (M = arguments[1]),
          (I = arguments[2]),
          (N = arguments[3] || 0),
          (B = null));
        let ne, re, fe, me, Ee, be;
        B !== null
          ? ((ne = B.max.x - B.min.x),
            (re = B.max.y - B.min.y),
            (fe = B.min.x),
            (me = B.min.y))
          : ((ne = M.image.width), (re = M.image.height), (fe = 0), (me = 0)),
          z !== null ? ((Ee = z.x), (be = z.y)) : ((Ee = 0), (be = 0));
        const ye = Te.convert(I.format),
          Ye = Te.convert(I.type);
        Ce.setTexture2D(I, 0),
          C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY),
          C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
          C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
        const rt = C.getParameter(C.UNPACK_ROW_LENGTH),
          at = C.getParameter(C.UNPACK_IMAGE_HEIGHT),
          Ot = C.getParameter(C.UNPACK_SKIP_PIXELS),
          qe = C.getParameter(C.UNPACK_SKIP_ROWS),
          ve = C.getParameter(C.UNPACK_SKIP_IMAGES),
          St = M.isCompressedTexture ? M.mipmaps[N] : M.image;
        C.pixelStorei(C.UNPACK_ROW_LENGTH, St.width),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, St.height),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, fe),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, me),
          M.isDataTexture
            ? C.texSubImage2D(C.TEXTURE_2D, N, Ee, be, ne, re, ye, Ye, St.data)
            : M.isCompressedTexture
              ? C.compressedTexSubImage2D(
                  C.TEXTURE_2D,
                  N,
                  Ee,
                  be,
                  St.width,
                  St.height,
                  ye,
                  St.data,
                )
              : C.texSubImage2D(C.TEXTURE_2D, N, Ee, be, ne, re, ye, Ye, St),
          C.pixelStorei(C.UNPACK_ROW_LENGTH, rt),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, at),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ot),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, qe),
          C.pixelStorei(C.UNPACK_SKIP_IMAGES, ve),
          N === 0 && I.generateMipmaps && C.generateMipmap(C.TEXTURE_2D),
          _e.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        M,
        I,
        B = null,
        z = null,
        N = 0,
      ) {
        M.isTexture !== !0 &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture3D function signature has changed.",
          ),
          (B = arguments[0] || null),
          (z = arguments[1] || null),
          (M = arguments[2]),
          (I = arguments[3]),
          (N = arguments[4] || 0));
        let ne, re, fe, me, Ee, be, ye, Ye, rt;
        const at = M.isCompressedTexture ? M.mipmaps[N] : M.image;
        B !== null
          ? ((ne = B.max.x - B.min.x),
            (re = B.max.y - B.min.y),
            (fe = B.max.z - B.min.z),
            (me = B.min.x),
            (Ee = B.min.y),
            (be = B.min.z))
          : ((ne = at.width),
            (re = at.height),
            (fe = at.depth),
            (me = 0),
            (Ee = 0),
            (be = 0)),
          z !== null
            ? ((ye = z.x), (Ye = z.y), (rt = z.z))
            : ((ye = 0), (Ye = 0), (rt = 0));
        const Ot = Te.convert(I.format),
          qe = Te.convert(I.type);
        let ve;
        if (I.isData3DTexture) Ce.setTexture3D(I, 0), (ve = C.TEXTURE_3D);
        else if (I.isDataArrayTexture || I.isCompressedArrayTexture)
          Ce.setTexture2DArray(I, 0), (ve = C.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.",
          );
          return;
        }
        C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY),
          C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
          C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
        const St = C.getParameter(C.UNPACK_ROW_LENGTH),
          Ke = C.getParameter(C.UNPACK_IMAGE_HEIGHT),
          qt = C.getParameter(C.UNPACK_SKIP_PIXELS),
          di = C.getParameter(C.UNPACK_SKIP_ROWS),
          Ft = C.getParameter(C.UNPACK_SKIP_IMAGES);
        C.pixelStorei(C.UNPACK_ROW_LENGTH, at.width),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, at.height),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, me),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, Ee),
          C.pixelStorei(C.UNPACK_SKIP_IMAGES, be),
          M.isDataTexture || M.isData3DTexture
            ? C.texSubImage3D(ve, N, ye, Ye, rt, ne, re, fe, Ot, qe, at.data)
            : I.isCompressedArrayTexture
              ? C.compressedTexSubImage3D(
                  ve,
                  N,
                  ye,
                  Ye,
                  rt,
                  ne,
                  re,
                  fe,
                  Ot,
                  at.data,
                )
              : C.texSubImage3D(ve, N, ye, Ye, rt, ne, re, fe, Ot, qe, at),
          C.pixelStorei(C.UNPACK_ROW_LENGTH, St),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Ke),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, qt),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, di),
          C.pixelStorei(C.UNPACK_SKIP_IMAGES, Ft),
          N === 0 && I.generateMipmaps && C.generateMipmap(ve),
          _e.unbindTexture();
      }),
      (this.initRenderTarget = function (M) {
        we.get(M).__webglFramebuffer === void 0 && Ce.setupRenderTarget(M);
      }),
      (this.initTexture = function (M) {
        M.isCubeTexture
          ? Ce.setTextureCube(M, 0)
          : M.isData3DTexture
            ? Ce.setTexture3D(M, 0)
            : M.isDataArrayTexture || M.isCompressedArrayTexture
              ? Ce.setTexture2DArray(M, 0)
              : Ce.setTexture2D(M, 0),
          _e.unbindTexture();
      }),
      (this.resetState = function () {
        (D = 0), (R = 0), (w = null), _e.reset(), Re.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        );
  }
  get coordinateSystem() {
    return Sn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === Co ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        Xe.workingColorSpace === zr ? "display-p3" : "srgb");
  }
}
class __ extends Je {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new on()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new on()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class Eu {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = fo),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = nn());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      Lo(
        "THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.",
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = nn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid],
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = nn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer),
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Rt = new P();
class Ps {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Rt.fromBufferAttribute(this, t),
        Rt.applyMatrix4(e),
        this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t),
        Rt.applyNormalMatrix(e),
        this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t),
        Rt.transformDirection(e),
        this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Qt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = je(n, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = n),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = je(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = je(t, this.array)), (n = je(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = je(t, this.array)),
        (n = je(n, this.array)),
        (i = je(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = je(t, this.array)),
        (n = je(n, this.array)),
        (i = je(i, this.array)),
        (r = je(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.",
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new It(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized,
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Ps(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.",
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
class Tu extends Yt {
  constructor(e) {
    super(),
      (this.isSpriteMaterial = !0),
      (this.type = "SpriteMaterial"),
      (this.color = new Pe(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
let Ii;
const ds = new P(),
  Di = new P(),
  Ni = new P(),
  Ui = new ge(),
  fs = new ge(),
  Au = new Ne(),
  rr = new P(),
  ps = new P(),
  ar = new P(),
  cl = new ge(),
  Ma = new ge(),
  ll = new ge();
class x_ extends Je {
  constructor(e = new Tu()) {
    if (
      (super(), (this.isSprite = !0), (this.type = "Sprite"), Ii === void 0)
    ) {
      Ii = new Ut();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new Eu(t, 5);
      Ii.setIndex([0, 1, 2, 0, 2, 3]),
        Ii.setAttribute("position", new Ps(n, 3, 0, !1)),
        Ii.setAttribute("uv", new Ps(n, 2, 3, !1));
    }
    (this.geometry = Ii), (this.material = e), (this.center = new ge(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.',
      ),
      Di.setFromMatrixScale(this.matrixWorld),
      Au.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld,
      ),
      Ni.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        Di.multiplyScalar(-Ni.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && ((r = Math.cos(n)), (i = Math.sin(n)));
    const a = this.center;
    or(rr.set(-0.5, -0.5, 0), Ni, a, Di, i, r),
      or(ps.set(0.5, -0.5, 0), Ni, a, Di, i, r),
      or(ar.set(0.5, 0.5, 0), Ni, a, Di, i, r),
      cl.set(0, 0),
      Ma.set(1, 0),
      ll.set(1, 1);
    let o = e.ray.intersectTriangle(rr, ps, ar, !1, ds);
    if (
      o === null &&
      (or(ps.set(-0.5, 0.5, 0), Ni, a, Di, i, r),
      Ma.set(0, 1),
      (o = e.ray.intersectTriangle(rr, ar, ps, !1, ds)),
      o === null)
    )
      return;
    const c = e.ray.origin.distanceTo(ds);
    c < e.near ||
      c > e.far ||
      t.push({
        distance: c,
        point: ds.clone(),
        uv: en.getInterpolation(ds, rr, ps, ar, cl, Ma, ll, new ge()),
        face: null,
        object: this,
      });
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.center !== void 0 && this.center.copy(e.center),
      (this.material = e.material),
      this
    );
  }
}
function or(s, e, t, n, i, r) {
  Ui.subVectors(s, t).addScalar(0.5).multiply(n),
    i !== void 0
      ? ((fs.x = r * Ui.x - i * Ui.y), (fs.y = i * Ui.x + r * Ui.y))
      : fs.copy(Ui),
    s.copy(e),
    (s.x += fs.x),
    (s.y += fs.y),
    s.applyMatrix4(Au);
}
const ul = new P(),
  hl = new $e(),
  dl = new $e(),
  v_ = new P(),
  fl = new Ne(),
  cr = new P(),
  ya = new cn(),
  pl = new Ne(),
  Sa = new Is();
class M_ extends ot {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = dc),
      (this.bindMatrix = new Ne()),
      (this.bindMatrixInverse = new Ne()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new An()),
      this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, cr), this.boundingBox.expandByPoint(cr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new cn()),
      this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, cr), this.boundingSphere.expandByPoint(cr);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      i = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      ya.copy(this.boundingSphere),
      ya.applyMatrix4(i),
      e.ray.intersectsSphere(ya) !== !1 &&
        (pl.copy(i).invert(),
        Sa.copy(e.ray).applyMatrix4(pl),
        !(
          this.boundingBox !== null && Sa.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, Sa)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new $e(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === dc
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === Ih
          ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
          : console.warn(
              "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode,
            );
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    hl.fromBufferAttribute(i.attributes.skinIndex, e),
      dl.fromBufferAttribute(i.attributes.skinWeight, e),
      ul.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = dl.getComponent(r);
      if (a !== 0) {
        const o = hl.getComponent(r);
        fl.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(v_.copy(ul).applyMatrix4(fl), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class bu extends Je {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class wu extends gt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, c, l = Lt, u = Lt, h, d) {
    super(null, a, o, c, l, u, i, r, h, d),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const ml = new Ne(),
  y_ = new Ne();
class Uo {
  constructor(e = [], t = []) {
    (this.uuid = nn()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.",
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ne());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ne();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : y_;
      ml.multiplyMatrices(o, t[r]), ml.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Uo(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new wu(t, e, e, Xt, tn);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", r),
        (a = new bu())),
        this.bones.push(a),
        this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class mo extends It {
  constructor(e, t, n, i = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const Oi = new Ne(),
  gl = new Ne(),
  lr = [],
  _l = new An(),
  S_ = new Ne(),
  ms = new ot(),
  gs = new cn();
class E_ extends ot {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new mo(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let i = 0; i < n; i++) this.setMatrixAt(i, S_);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    this.boundingBox === null && (this.boundingBox = new An()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Oi),
        _l.copy(e.boundingBox).applyMatrix4(Oi),
        this.boundingBox.union(_l);
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new cn()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Oi),
        gs.copy(e.boundingSphere).applyMatrix4(Oi),
        this.boundingSphere.union(gs);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      r = n.length + 1,
      a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((ms.geometry = this.geometry),
      (ms.material = this.material),
      ms.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        gs.copy(this.boundingSphere),
        gs.applyMatrix4(n),
        e.ray.intersectsSphere(gs) !== !1))
    )
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Oi),
          gl.multiplyMatrices(n, Oi),
          (ms.matrixWorld = gl),
          ms.raycast(e, lr);
        for (let a = 0, o = lr.length; a < o; a++) {
          const c = lr[a];
          (c.instanceId = r), (c.object = this), t.push(c);
        }
        lr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new mo(
        new Float32Array(this.instanceMatrix.count * 3),
        3,
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new wu(
        new Float32Array(i * this.count),
        i,
        this.count,
        To,
        tn,
      ));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++) a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      c = i * e;
    (r[c] = o), r.set(n, c + 1);
  }
  updateMorphTargets() {}
  dispose() {
    return (
      this.dispatchEvent({ type: "dispose" }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null)),
      this
    );
  }
}
class Ru extends Yt {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Pe(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ur = new P(),
  Or = new P(),
  xl = new Ne(),
  _s = new Is(),
  ur = new cn(),
  Ea = new P(),
  vl = new P();
class Oo extends Je {
  constructor(e = new Ut(), t = new Ru()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Ur.fromBufferAttribute(t, i - 1),
          Or.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Ur.distanceTo(Or));
      e.setAttribute("lineDistance", new Mt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ur.copy(n.boundingSphere),
      ur.applyMatrix4(i),
      (ur.radius += r),
      e.ray.intersectsSphere(ur) === !1)
    )
      return;
    xl.copy(i).invert(), _s.copy(e.ray).applyMatrix4(xl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = this.isLineSegments ? 2 : 1,
      u = n.index,
      d = n.attributes.position;
    if (u !== null) {
      const p = Math.max(0, a.start),
        g = Math.min(u.count, a.start + a.count);
      for (let x = p, m = g - 1; x < m; x += l) {
        const f = u.getX(x),
          E = u.getX(x + 1),
          S = hr(this, e, _s, c, f, E);
        S && t.push(S);
      }
      if (this.isLineLoop) {
        const x = u.getX(g - 1),
          m = u.getX(p),
          f = hr(this, e, _s, c, x, m);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start),
        g = Math.min(d.count, a.start + a.count);
      for (let x = p, m = g - 1; x < m; x += l) {
        const f = hr(this, e, _s, c, x, x + 1);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const x = hr(this, e, _s, c, g - 1, p);
        x && t.push(x);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function hr(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (
    (Ur.fromBufferAttribute(a, i),
    Or.fromBufferAttribute(a, r),
    t.distanceSqToSegment(Ur, Or, Ea, vl) > n)
  )
    return;
  Ea.applyMatrix4(s.matrixWorld);
  const c = e.ray.origin.distanceTo(Ea);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      point: vl.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      object: s,
    };
}
const Ml = new P(),
  yl = new P();
class T_ extends Oo {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Ml.fromBufferAttribute(t, i),
          yl.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Ml.distanceTo(yl));
      e.setAttribute("lineDistance", new Mt(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
}
class A_ extends Oo {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class Cu extends Yt {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Pe(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Sl = new Ne(),
  go = new Is(),
  dr = new cn(),
  fr = new P();
class b_ extends Je {
  constructor(e = new Ut(), t = new Cu()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      dr.copy(n.boundingSphere),
      dr.applyMatrix4(i),
      (dr.radius += r),
      e.ray.intersectsSphere(dr) === !1)
    )
      return;
    Sl.copy(i).invert(), go.copy(e.ray).applyMatrix4(Sl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = n.index,
      h = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start),
        p = Math.min(l.count, a.start + a.count);
      for (let g = d, x = p; g < x; g++) {
        const m = l.getX(g);
        fr.fromBufferAttribute(h, m), El(fr, m, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start),
        p = Math.min(h.count, a.start + a.count);
      for (let g = d, x = p; g < x; g++)
        fr.fromBufferAttribute(h, g), El(fr, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function El(s, e, t, n, i, r, a) {
  const o = go.distanceSqToPoint(s);
  if (o < t) {
    const c = new P();
    go.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a,
    });
  }
}
class Fo extends gt {
  constructor(e, t, n, i, r, a, o, c, l) {
    super(e, t, n, i, r, a, o, c, l),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class Bo extends Ut {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: i,
      }),
      (t = Math.max(3, t));
    const r = [],
      a = [],
      o = [],
      c = [],
      l = new P(),
      u = new ge();
    a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5);
    for (let h = 0, d = 3; h <= t; h++, d += 3) {
      const p = n + (h / t) * i;
      (l.x = e * Math.cos(p)),
        (l.y = e * Math.sin(p)),
        a.push(l.x, l.y, l.z),
        o.push(0, 0, 1),
        (u.x = (a[d] / e + 1) / 2),
        (u.y = (a[d + 1] / e + 1) / 2),
        c.push(u.x, u.y);
    }
    for (let h = 1; h <= t; h++) r.push(h, h + 1, 0);
    this.setIndex(r),
      this.setAttribute("position", new Mt(a, 3)),
      this.setAttribute("normal", new Mt(o, 3)),
      this.setAttribute("uv", new Mt(c, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Bo(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class zo extends Ut {
  constructor(e = 0.5, t = 1, n = 32, i = 1, r = 0, a = Math.PI * 2) {
    super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: a,
      }),
      (n = Math.max(3, n)),
      (i = Math.max(1, i));
    const o = [],
      c = [],
      l = [],
      u = [];
    let h = e;
    const d = (t - e) / i,
      p = new P(),
      g = new ge();
    for (let x = 0; x <= i; x++) {
      for (let m = 0; m <= n; m++) {
        const f = r + (m / n) * a;
        (p.x = h * Math.cos(f)),
          (p.y = h * Math.sin(f)),
          c.push(p.x, p.y, p.z),
          l.push(0, 0, 1),
          (g.x = (p.x / t + 1) / 2),
          (g.y = (p.y / t + 1) / 2),
          u.push(g.x, g.y);
      }
      h += d;
    }
    for (let x = 0; x < i; x++) {
      const m = x * (n + 1);
      for (let f = 0; f < n; f++) {
        const E = f + m,
          S = E,
          A = E + n + 1,
          D = E + n + 2,
          R = E + 1;
        o.push(S, A, R), o.push(A, D, R);
      }
    }
    this.setIndex(o),
      this.setAttribute("position", new Mt(c, 3)),
      this.setAttribute("normal", new Mt(l, 3)),
      this.setAttribute("uv", new Mt(u, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new zo(
      e.innerRadius,
      e.outerRadius,
      e.thetaSegments,
      e.phiSegments,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Ns extends Ut {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    r = Math.PI * 2,
    a = 0,
    o = Math.PI,
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const u = [],
      h = new P(),
      d = new P(),
      p = [],
      g = [],
      x = [],
      m = [];
    for (let f = 0; f <= n; f++) {
      const E = [],
        S = f / n;
      let A = 0;
      f === 0 && a === 0
        ? (A = 0.5 / t)
        : f === n && c === Math.PI && (A = -0.5 / t);
      for (let D = 0; D <= t; D++) {
        const R = D / t;
        (h.x = -e * Math.cos(i + R * r) * Math.sin(a + S * o)),
          (h.y = e * Math.cos(a + S * o)),
          (h.z = e * Math.sin(i + R * r) * Math.sin(a + S * o)),
          g.push(h.x, h.y, h.z),
          d.copy(h).normalize(),
          x.push(d.x, d.y, d.z),
          m.push(R + A, 1 - S),
          E.push(l++);
      }
      u.push(E);
    }
    for (let f = 0; f < n; f++)
      for (let E = 0; E < t; E++) {
        const S = u[f][E + 1],
          A = u[f][E],
          D = u[f + 1][E],
          R = u[f + 1][E + 1];
        (f !== 0 || a > 0) && p.push(S, A, R),
          (f !== n - 1 || c < Math.PI) && p.push(A, D, R);
      }
    this.setIndex(p),
      this.setAttribute("position", new Mt(g, 3)),
      this.setAttribute("normal", new Mt(x, 3)),
      this.setAttribute("uv", new Mt(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ns(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class ko extends Yt {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Pe(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Pe(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ro),
      (this.normalScale = new ge(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new on()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class ln extends ko {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new ge(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return Et((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Pe(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Pe(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Pe(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class w_ extends Yt {
  constructor(e) {
    super(),
      (this.isMeshNormalMaterial = !0),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ro),
      (this.normalScale = new ge(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
function pr(s, e, t) {
  return !s || (!t && s.constructor === e)
    ? s
    : typeof e.BYTES_PER_ELEMENT == "number"
      ? new e(s)
      : Array.prototype.slice.call(s);
}
function R_(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function C_(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Tl(s, e, t) {
  const n = s.length,
    i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let c = 0; c !== e; ++c) i[a++] = s[o + c];
  }
  return i;
}
function Pu(s, e, t, n) {
  let i = 1,
    r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), t.push.apply(t, a)),
          (r = s[i++]);
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), a.toArray(t, t.length)),
          (r = s[i++]);
      while (r !== void 0);
    else
      do (a = r[n]), a !== void 0 && (e.push(r.time), t.push(a)), (r = s[i++]);
      while (r !== void 0);
}
class Us {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((r = i), (i = t[++n]), e < i)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && ((n = 2), (r = o));
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === c) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break e;
            }
            (a = n), (n = 0);
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), r === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class P_ extends Us {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: fc, endingEnd: fc });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      o = i[r],
      c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case pc:
          (r = e), (o = 2 * t - n);
          break;
        case mc:
          (r = i.length - 2), (o = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (o = n);
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case pc:
          (a = e), (c = 2 * n - t);
          break;
        case mc:
          (a = 1), (c = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (c = t);
      }
    const l = (n - t) * 0.5,
      u = this.valueSize;
    (this._weightPrev = l / (t - o)),
      (this._weightNext = l / (c - n)),
      (this._offsetPrev = r * u),
      (this._offsetNext = a * u);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = this._offsetPrev,
      h = this._offsetNext,
      d = this._weightPrev,
      p = this._weightNext,
      g = (n - t) / (i - t),
      x = g * g,
      m = x * g,
      f = -d * m + 2 * d * x - d * g,
      E = (1 + d) * m + (-1.5 - 2 * d) * x + (-0.5 + d) * g + 1,
      S = (-1 - p) * m + (1.5 + p) * x + 0.5 * g,
      A = p * m - p * x;
    for (let D = 0; D !== o; ++D)
      r[D] = f * a[u + D] + E * a[l + D] + S * a[c + D] + A * a[h + D];
    return r;
  }
}
class L_ extends Us {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = (n - t) / (i - t),
      h = 1 - u;
    for (let d = 0; d !== o; ++d) r[d] = a[l + d] * h + a[c + d] * u;
    return r;
  }
}
class I_ extends Us {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class un {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = pr(t, this.TimeBufferType)),
      (this.values = pr(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: pr(e.times, Array),
        values: pr(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new I_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new L_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new P_(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case ws:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Rs:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Kr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ws;
      case this.InterpolantFactoryMethodLinear:
        return Rs;
      case this.InterpolantFactoryMethodSmooth:
        return Kr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, r !== 0 || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const o = this.getValueSize();
      (this.times = n.slice(r, a)),
        (this.values = this.values.slice(r * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== r; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          c,
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a),
          (e = !1);
        break;
      }
      a = c;
    }
    if (i !== void 0 && R_(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            l,
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === Kr,
      r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let c = !1;
      const l = e[o],
        u = e[o + 1];
      if (l !== u && (o !== 1 || l !== e[0]))
        if (i) c = !0;
        else {
          const h = o * n,
            d = h - n,
            p = h + n;
          for (let g = 0; g !== n; ++g) {
            const x = t[h + g];
            if (x !== t[d + g] || x !== t[p + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n,
            d = a * n;
          for (let p = 0; p !== n; ++p) t[d + p] = t[h + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, c = a * n, l = 0; l !== n; ++l) t[c + l] = t[o + l];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
un.prototype.TimeBufferType = Float32Array;
un.prototype.ValueBufferType = Float32Array;
un.prototype.DefaultInterpolation = Rs;
class is extends un {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
is.prototype.ValueTypeName = "bool";
is.prototype.ValueBufferType = Array;
is.prototype.DefaultInterpolation = ws;
is.prototype.InterpolantFactoryMethodLinear = void 0;
is.prototype.InterpolantFactoryMethodSmooth = void 0;
class Lu extends un {}
Lu.prototype.ValueTypeName = "color";
class Qi extends un {}
Qi.prototype.ValueTypeName = "number";
class D_ extends Us {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = (n - t) / (i - t);
    let l = e * o;
    for (let u = l + o; l !== u; l += 4) sn.slerpFlat(r, 0, a, l - o, a, l, c);
    return r;
  }
}
class es extends un {
  InterpolantFactoryMethodLinear(e) {
    return new D_(this.times, this.values, this.getValueSize(), e);
  }
}
es.prototype.ValueTypeName = "quaternion";
es.prototype.InterpolantFactoryMethodSmooth = void 0;
class ss extends un {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ss.prototype.ValueTypeName = "string";
ss.prototype.ValueBufferType = Array;
ss.prototype.DefaultInterpolation = ws;
ss.prototype.InterpolantFactoryMethodLinear = void 0;
ss.prototype.InterpolantFactoryMethodSmooth = void 0;
class ts extends un {}
ts.prototype.ValueTypeName = "vector";
class N_ {
  constructor(e = "", t = -1, n = [], i = Dh) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = nn()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(O_(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), r;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(un.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length,
      a = [];
    for (let o = 0; o < r; o++) {
      let c = [],
        l = [];
      c.push((o + r - 1) % r, o, (o + 1) % r), l.push(0, 1, 0);
      const u = C_(c);
      (c = Tl(c, 1, u)),
        (l = Tl(l, 1, u)),
        !i && c[0] === 0 && (c.push(r), l.push(l[0])),
        a.push(
          new Qi(".morphTargetInfluences[" + t[o].name + "]", c, l).scale(
            1 / n,
          ),
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        u = l.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (h, d, p, g, x) {
        if (p.length !== 0) {
          const m = [],
            f = [];
          Pu(p, m, f, g), m.length !== 0 && x.push(new h(d, m, f));
        }
      },
      i = [],
      r = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let h = 0; h < l.length; h++) {
      const d = l[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let x = 0; x < d[g].morphTargets.length; x++)
                p[d[g].morphTargets[x]] = -1;
          for (const x in p) {
            const m = [],
              f = [];
            for (let E = 0; E !== d[g].morphTargets.length; ++E) {
              const S = d[g];
              m.push(S.time), f.push(S.morphTarget === x ? 1 : 0);
            }
            i.push(new Qi(".morphTargetInfluence[" + x + "]", m, f));
          }
          c = p.length * a;
        } else {
          const p = ".bones[" + t[h].name + "]";
          n(ts, p + ".position", d, "pos", i),
            n(es, p + ".quaternion", d, "rot", i),
            n(ts, p + ".scale", d, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(r, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function U_(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Qi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ts;
    case "color":
      return Lu;
    case "quaternion":
      return es;
    case "bool":
    case "boolean":
      return is;
    case "string":
      return ss;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function O_(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = U_(s.type);
  if (s.times === void 0) {
    const t = [],
      n = [];
    Pu(s.keys, t, n, "value"), (s.times = t), (s.values = n);
  }
  return e.parse !== void 0
    ? e.parse(s)
    : new e(s.name, s.times, s.values, s.interpolation);
}
const Hn = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class F_ {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      o = 0,
      c;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        o++, r === !1 && i.onStart !== void 0 && i.onStart(u, a, o), (r = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          i.onProgress !== void 0 && i.onProgress(u, a, o),
          a === o && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return c ? c(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (c = u), this;
      }),
      (this.addHandler = function (u, h) {
        return l.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = l.indexOf(u);
        return h !== -1 && l.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, d = l.length; h < d; h += 2) {
          const p = l[h],
            g = l[h + 1];
          if ((p.global && (p.lastIndex = 0), p.test(u))) return g;
        }
        return null;
      });
  }
}
const B_ = new F_();
class hi {
  constructor(e) {
    (this.manager = e !== void 0 ? e : B_),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
hi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const _n = {};
class z_ extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class Ho extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = Hn.get(e);
    if (r !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (_n[e] !== void 0) {
      _n[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    (_n[e] = []), _n[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      c = this.responseType;
    fetch(a)
      .then((l) => {
        if (l.status === 200 || l.status === 0) {
          if (
            (l.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              l.body === void 0 ||
              l.body.getReader === void 0)
          )
            return l;
          const u = _n[e],
            h = l.body.getReader(),
            d = l.headers.get("X-File-Size") || l.headers.get("Content-Length"),
            p = d ? parseInt(d) : 0,
            g = p !== 0;
          let x = 0;
          const m = new ReadableStream({
            start(f) {
              E();
              function E() {
                h.read().then(
                  ({ done: S, value: A }) => {
                    if (S) f.close();
                    else {
                      x += A.byteLength;
                      const D = new ProgressEvent("progress", {
                        lengthComputable: g,
                        loaded: x,
                        total: p,
                      });
                      for (let R = 0, w = u.length; R < w; R++) {
                        const U = u[R];
                        U.onProgress && U.onProgress(D);
                      }
                      f.enqueue(A), E();
                    }
                  },
                  (S) => {
                    f.error(S);
                  },
                );
              }
            },
          });
          return new Response(m);
        } else
          throw new z_(
            `fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,
            l,
          );
      })
      .then((l) => {
        switch (c) {
          case "arraybuffer":
            return l.arrayBuffer();
          case "blob":
            return l.blob();
          case "document":
            return l.text().then((u) => new DOMParser().parseFromString(u, o));
          case "json":
            return l.json();
          default:
            if (o === void 0) return l.text();
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(o),
                d = h && h[1] ? h[1].toLowerCase() : void 0,
                p = new TextDecoder(d);
              return l.arrayBuffer().then((g) => p.decode(g));
            }
        }
      })
      .then((l) => {
        Hn.add(e, l);
        const u = _n[e];
        delete _n[e];
        for (let h = 0, d = u.length; h < d; h++) {
          const p = u[h];
          p.onLoad && p.onLoad(l);
        }
      })
      .catch((l) => {
        const u = _n[e];
        if (u === void 0) throw (this.manager.itemError(e), l);
        delete _n[e];
        for (let h = 0, d = u.length; h < d; h++) {
          const p = u[h];
          p.onError && p.onError(l);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class k_ extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Hn.get(e);
    if (a !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = Cs("img");
    function c() {
      u(), Hn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(h) {
      u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", c, !1),
        o.removeEventListener("error", l, !1);
    }
    return (
      o.addEventListener("load", c, !1),
      o.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Hr extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new gt(),
      a = new k_(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (r.image = o), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i,
      ),
      r
    );
  }
}
class Vr extends Je {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Pe(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
const Ta = new Ne(),
  Al = new P(),
  bl = new P();
class Vo {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new ge(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ne()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Io()),
      (this._frameExtents = new ge(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new $e(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Al.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Al),
      bl.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(bl),
      t.updateMatrixWorld(),
      Ta.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Ta),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Ta);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class H_ extends Vo {
  constructor() {
    super(new wt(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = $i * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class V_ extends Vr {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(Je.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Je()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new H_());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const wl = new Ne(),
  xs = new P(),
  Aa = new P();
class G_ extends Vo {
  constructor() {
    super(new wt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new ge(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new $e(2, 1, 1, 1),
        new $e(0, 1, 1, 1),
        new $e(3, 1, 1, 1),
        new $e(1, 1, 1, 1),
        new $e(3, 0, 1, 1),
        new $e(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new P(1, 0, 0),
        new P(-1, 0, 0),
        new P(0, 0, 1),
        new P(0, 0, -1),
        new P(0, 1, 0),
        new P(0, -1, 0),
      ]),
      (this._cubeUps = [
        new P(0, 1, 0),
        new P(0, 1, 0),
        new P(0, 1, 0),
        new P(0, 1, 0),
        new P(0, 0, 1),
        new P(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      xs.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(xs),
      Aa.copy(n.position),
      Aa.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(Aa),
      n.updateMatrixWorld(),
      i.makeTranslation(-xs.x, -xs.y, -xs.z),
      wl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(wl);
  }
}
class W_ extends Vr {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new G_());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class X_ extends Vo {
  constructor() {
    super(new Do(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Y_ extends Vr {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(Je.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Je()),
      (this.shadow = new X_());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class q_ extends Vr {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class As {
  static decodeText(e) {
    if (
      (console.warn(
        "THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.",
      ),
      typeof TextDecoder < "u")
    )
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class K_ extends hi {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported.",
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Hn.get(e);
    if (a !== void 0) {
      if ((r.manager.itemStart(e), a.then)) {
        a.then((l) => {
          t && t(l), r.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return (
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    }
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader);
    const c = fetch(e, o)
      .then(function (l) {
        return l.blob();
      })
      .then(function (l) {
        return createImageBitmap(
          l,
          Object.assign(r.options, { colorSpaceConversion: "none" }),
        );
      })
      .then(function (l) {
        return Hn.add(e, l), t && t(l), r.manager.itemEnd(e), l;
      })
      .catch(function (l) {
        i && i(l), Hn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
      });
    Hn.add(e, c), r.manager.itemStart(e);
  }
}
let mr;
class Iu {
  static getContext() {
    return (
      mr === void 0 &&
        (mr = new (window.AudioContext || window.webkitAudioContext)()),
      mr
    );
  }
  static setContext(e) {
    mr = e;
  }
}
class j_ extends hi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this,
      a = new Ho(this.manager);
    a.setResponseType("arraybuffer"),
      a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        e,
        function (c) {
          try {
            const l = c.slice(0);
            Iu.getContext()
              .decodeAudioData(l, function (h) {
                t(h);
              })
              .catch(o);
          } catch (l) {
            o(l);
          }
        },
        n,
        i,
      );
    function o(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e);
    }
  }
}
class Z_ {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Rl()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Rl();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Rl() {
  return (typeof performance > "u" ? Date : performance).now();
}
const Jn = new P(),
  Cl = new sn(),
  $_ = new P(),
  Qn = new P();
class J_ extends Je {
  constructor() {
    super(),
      (this.type = "AudioListener"),
      (this.context = Iu.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new Z_());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      this.filter !== null &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return (
      this.filter !== null
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = e),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener,
      n = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(Jn, Cl, $_),
      Qn.set(0, 0, -1).applyQuaternion(Cl),
      t.positionX)
    ) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Jn.x, i),
        t.positionY.linearRampToValueAtTime(Jn.y, i),
        t.positionZ.linearRampToValueAtTime(Jn.z, i),
        t.forwardX.linearRampToValueAtTime(Qn.x, i),
        t.forwardY.linearRampToValueAtTime(Qn.y, i),
        t.forwardZ.linearRampToValueAtTime(Qn.z, i),
        t.upX.linearRampToValueAtTime(n.x, i),
        t.upY.linearRampToValueAtTime(n.y, i),
        t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(Jn.x, Jn.y, Jn.z),
        t.setOrientation(Qn.x, Qn.y, Qn.z, n.x, n.y, n.z);
  }
}
class Q_ extends Je {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source !== null &&
        (this.source.stop(), (this.source.onended = null)),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return (this._connected = !1), this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    return (
      (this.detune = e),
      this.isPlaying === !0 &&
        this.source.detune !== void 0 &&
        this.source.detune.setTargetAtTime(
          this.detune,
          this.context.currentTime,
          0.01,
        ),
      this
    );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = e),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01,
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = e),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
}
const Go = "\\[\\]\\.:\\/",
  ex = new RegExp("[" + Go + "]", "g"),
  Wo = "[^" + Go + "]",
  tx = "[^" + Go.replace("\\.", "") + "]",
  nx = /((?:WC+[\/:])*)/.source.replace("WC", Wo),
  ix = /(WCOD+)?/.source.replace("WCOD", tx),
  sx = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Wo),
  rx = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Wo),
  ax = new RegExp("^" + nx + ix + sx + rx + "$"),
  ox = ["material", "materials", "bones", "map"];
class cx {
  constructor(e, t, n) {
    const i = n || Ze.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Ze {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || Ze.parseTrackName(t)),
      (this.node = Ze.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new Ze.Composite(e, t, n)
      : new Ze(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ex, "");
  }
  static parseTrackName(e) {
    const t = ax.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      ox.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e,
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (r) {
          for (let a = 0; a < r.length; a++) {
            const o = r[a];
            if (o.name === t || o.uuid === t) return o;
            const c = n(o.children);
            if (c) return c;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e || ((e = Ze.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          ".",
      );
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this,
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this,
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this,
            );
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === l) {
              l = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this,
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this,
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this,
            );
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e,
          );
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          l +
          "." +
          i +
          " but it wasn't found.",
        e,
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (o = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this,
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this,
          );
          return;
        }
        e.morphTargetDictionary[r] !== void 0 &&
          (r = e.morphTargetDictionary[r]);
      }
      (c = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
          ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = a))
          : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[c]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[c][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
Ze.Composite = cx;
Ze.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Ze.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Ze.prototype.GetterByBindingType = [
  Ze.prototype._getValue_direct,
  Ze.prototype._getValue_array,
  Ze.prototype._getValue_arrayElement,
  Ze.prototype._getValue_toArray,
];
Ze.prototype.SetterByBindingTypeAndVersioning = [
  [
    Ze.prototype._setValue_direct,
    Ze.prototype._setValue_direct_setNeedsUpdate,
    Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Ze.prototype._setValue_array,
    Ze.prototype._setValue_array_setNeedsUpdate,
    Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Ze.prototype._setValue_arrayElement,
    Ze.prototype._setValue_arrayElement_setNeedsUpdate,
    Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Ze.prototype._setValue_fromArray,
    Ze.prototype._setValue_fromArray_setNeedsUpdate,
    Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class Pl {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Et(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Mo } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Mo));
const Ll = { type: "change" },
  ba = { type: "start" },
  Il = { type: "end" },
  gr = new Is(),
  Dl = new On(),
  lx = Math.cos(70 * ru.DEG2RAD);
class Du extends li {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new P()),
      (this.cursor = new P()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: fi.ROTATE,
        MIDDLE: fi.DOLLY,
        RIGHT: fi.PAN,
      }),
      (this.touches = { ONE: pi.ROTATE, TWO: pi.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (_) {
        _.addEventListener("keydown", ae), (this._domElementKeyEvents = _);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", ae),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Ll),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const _ = new P(),
          O = new sn().setFromUnitVectors(e.up, new P(0, 1, 0)),
          F = O.clone().invert(),
          V = new P(),
          J = new sn(),
          xe = new P(),
          Ae = 2 * Math.PI;
        return function (pt = null) {
          const He = n.object.position;
          _.copy(He).sub(n.target),
            _.applyQuaternion(O),
            o.setFromVector3(_),
            n.autoRotate && r === i.NONE && W(y(pt)),
            n.enableDamping
              ? ((o.theta += c.theta * n.dampingFactor),
                (o.phi += c.phi * n.dampingFactor))
              : ((o.theta += c.theta), (o.phi += c.phi));
          let mt = n.minAzimuthAngle,
            ht = n.maxAzimuthAngle;
          isFinite(mt) &&
            isFinite(ht) &&
            (mt < -Math.PI ? (mt += Ae) : mt > Math.PI && (mt -= Ae),
            ht < -Math.PI ? (ht += Ae) : ht > Math.PI && (ht -= Ae),
            mt <= ht
              ? (o.theta = Math.max(mt, Math.min(ht, o.theta)))
              : (o.theta =
                  o.theta > (mt + ht) / 2
                    ? Math.max(mt, o.theta)
                    : Math.min(ht, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi),
            )),
            o.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            n.target.sub(n.cursor),
            n.target.clampLength(n.minTargetRadius, n.maxTargetRadius),
            n.target.add(n.cursor);
          let bn = !1;
          if ((n.zoomToCursor && R) || n.object.isOrthographicCamera)
            o.radius = he(o.radius);
          else {
            const yt = o.radius;
            (o.radius = he(o.radius * l)), (bn = yt != o.radius);
          }
          if (
            (_.setFromSpherical(o),
            _.applyQuaternion(F),
            He.copy(n.target).add(_),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((c.theta *= 1 - n.dampingFactor),
                (c.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (c.set(0, 0, 0), u.set(0, 0, 0)),
            n.zoomToCursor && R)
          ) {
            let yt = null;
            if (n.object.isPerspectiveCamera) {
              const hn = _.length();
              yt = he(hn * l);
              const Xn = hn - yt;
              n.object.position.addScaledVector(A, Xn),
                n.object.updateMatrixWorld(),
                (bn = !!Xn);
            } else if (n.object.isOrthographicCamera) {
              const hn = new P(D.x, D.y, 0);
              hn.unproject(n.object);
              const Xn = n.object.zoom;
              (n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / l),
              )),
                n.object.updateProjectionMatrix(),
                (bn = Xn !== n.object.zoom);
              const os = new P(D.x, D.y, 0);
              os.unproject(n.object),
                n.object.position.sub(os).add(hn),
                n.object.updateMatrixWorld(),
                (yt = _.length());
            } else
              console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.",
              ),
                (n.zoomToCursor = !1);
            yt !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(yt)
                    .add(n.object.position)
                : (gr.origin.copy(n.object.position),
                  gr.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(gr.direction)) < lx
                    ? e.lookAt(n.target)
                    : (Dl.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      gr.intersectPlane(Dl, n.target))));
          } else if (n.object.isOrthographicCamera) {
            const yt = n.object.zoom;
            (n.object.zoom = Math.max(
              n.minZoom,
              Math.min(n.maxZoom, n.object.zoom / l),
            )),
              yt !== n.object.zoom &&
                (n.object.updateProjectionMatrix(), (bn = !0));
          }
          return (
            (l = 1),
            (R = !1),
            bn ||
            V.distanceToSquared(n.object.position) > a ||
            8 * (1 - J.dot(n.object.quaternion)) > a ||
            xe.distanceToSquared(n.target) > a
              ? (n.dispatchEvent(Ll),
                V.copy(n.object.position),
                J.copy(n.object.quaternion),
                xe.copy(n.target),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", oe),
          n.domElement.removeEventListener("pointerdown", Ce),
          n.domElement.removeEventListener("pointercancel", v),
          n.domElement.removeEventListener("wheel", Q),
          n.domElement.removeEventListener("pointermove", b),
          n.domElement.removeEventListener("pointerup", v),
          n.domElement
            .getRootNode()
            .removeEventListener("keydown", Me, { capture: !0 }),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", ae),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const a = 1e-6,
      o = new Pl(),
      c = new Pl();
    let l = 1;
    const u = new P(),
      h = new ge(),
      d = new ge(),
      p = new ge(),
      g = new ge(),
      x = new ge(),
      m = new ge(),
      f = new ge(),
      E = new ge(),
      S = new ge(),
      A = new P(),
      D = new ge();
    let R = !1;
    const w = [],
      U = {};
    let T = !1;
    function y(_) {
      return _ !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * _
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function L(_) {
      const O = Math.abs(_ * 0.01);
      return Math.pow(0.95, n.zoomSpeed * O);
    }
    function W(_) {
      c.theta -= _;
    }
    function H(_) {
      c.phi -= _;
    }
    const K = (function () {
        const _ = new P();
        return function (F, V) {
          _.setFromMatrixColumn(V, 0), _.multiplyScalar(-F), u.add(_);
        };
      })(),
      q = (function () {
        const _ = new P();
        return function (F, V) {
          n.screenSpacePanning === !0
            ? _.setFromMatrixColumn(V, 1)
            : (_.setFromMatrixColumn(V, 0), _.crossVectors(n.object.up, _)),
            _.multiplyScalar(F),
            u.add(_);
        };
      })(),
      X = (function () {
        const _ = new P();
        return function (F, V) {
          const J = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const xe = n.object.position;
            _.copy(xe).sub(n.target);
            let Ae = _.length();
            (Ae *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              K((2 * F * Ae) / J.clientHeight, n.object.matrix),
              q((2 * V * Ae) / J.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (K(
                  (F * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    J.clientWidth,
                  n.object.matrix,
                ),
                q(
                  (V * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    J.clientHeight,
                  n.object.matrix,
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.",
                ),
                (n.enablePan = !1));
        };
      })();
    function j(_) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (l /= _)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
          ),
          (n.enableZoom = !1));
    }
    function G(_) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (l *= _)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
          ),
          (n.enableZoom = !1));
    }
    function ce(_, O) {
      if (!n.zoomToCursor) return;
      R = !0;
      const F = n.domElement.getBoundingClientRect(),
        V = _ - F.left,
        J = O - F.top,
        xe = F.width,
        Ae = F.height;
      (D.x = (V / xe) * 2 - 1),
        (D.y = -(J / Ae) * 2 + 1),
        A.set(D.x, D.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize();
    }
    function he(_) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, _));
    }
    function pe(_) {
      h.set(_.clientX, _.clientY);
    }
    function ze(_) {
      ce(_.clientX, _.clientX), f.set(_.clientX, _.clientY);
    }
    function Ge(_) {
      g.set(_.clientX, _.clientY);
    }
    function Y(_) {
      d.set(_.clientX, _.clientY),
        p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const O = n.domElement;
      W((2 * Math.PI * p.x) / O.clientHeight),
        H((2 * Math.PI * p.y) / O.clientHeight),
        h.copy(d),
        n.update();
    }
    function ee(_) {
      E.set(_.clientX, _.clientY),
        S.subVectors(E, f),
        S.y > 0 ? j(L(S.y)) : S.y < 0 && G(L(S.y)),
        f.copy(E),
        n.update();
    }
    function de(_) {
      x.set(_.clientX, _.clientY),
        m.subVectors(x, g).multiplyScalar(n.panSpeed),
        X(m.x, m.y),
        g.copy(x),
        n.update();
    }
    function le(_) {
      ce(_.clientX, _.clientY),
        _.deltaY < 0 ? G(L(_.deltaY)) : _.deltaY > 0 && j(L(_.deltaY)),
        n.update();
    }
    function Le(_) {
      let O = !1;
      switch (_.code) {
        case n.keys.UP:
          _.ctrlKey || _.metaKey || _.shiftKey
            ? H((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : X(0, n.keyPanSpeed),
            (O = !0);
          break;
        case n.keys.BOTTOM:
          _.ctrlKey || _.metaKey || _.shiftKey
            ? H((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : X(0, -n.keyPanSpeed),
            (O = !0);
          break;
        case n.keys.LEFT:
          _.ctrlKey || _.metaKey || _.shiftKey
            ? W((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : X(n.keyPanSpeed, 0),
            (O = !0);
          break;
        case n.keys.RIGHT:
          _.ctrlKey || _.metaKey || _.shiftKey
            ? W((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : X(-n.keyPanSpeed, 0),
            (O = !0);
          break;
      }
      O && (_.preventDefault(), n.update());
    }
    function De(_) {
      if (w.length === 1) h.set(_.pageX, _.pageY);
      else {
        const O = Re(_),
          F = 0.5 * (_.pageX + O.x),
          V = 0.5 * (_.pageY + O.y);
        h.set(F, V);
      }
    }
    function Fe(_) {
      if (w.length === 1) g.set(_.pageX, _.pageY);
      else {
        const O = Re(_),
          F = 0.5 * (_.pageX + O.x),
          V = 0.5 * (_.pageY + O.y);
        g.set(F, V);
      }
    }
    function Qe(_) {
      const O = Re(_),
        F = _.pageX - O.x,
        V = _.pageY - O.y,
        J = Math.sqrt(F * F + V * V);
      f.set(0, J);
    }
    function C(_) {
      n.enableZoom && Qe(_), n.enablePan && Fe(_);
    }
    function it(_) {
      n.enableZoom && Qe(_), n.enableRotate && De(_);
    }
    function Ve(_) {
      if (w.length == 1) d.set(_.pageX, _.pageY);
      else {
        const F = Re(_),
          V = 0.5 * (_.pageX + F.x),
          J = 0.5 * (_.pageY + F.y);
        d.set(V, J);
      }
      p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const O = n.domElement;
      W((2 * Math.PI * p.x) / O.clientHeight),
        H((2 * Math.PI * p.y) / O.clientHeight),
        h.copy(d);
    }
    function We(_) {
      if (w.length === 1) x.set(_.pageX, _.pageY);
      else {
        const O = Re(_),
          F = 0.5 * (_.pageX + O.x),
          V = 0.5 * (_.pageY + O.y);
        x.set(F, V);
      }
      m.subVectors(x, g).multiplyScalar(n.panSpeed), X(m.x, m.y), g.copy(x);
    }
    function _e(_) {
      const O = Re(_),
        F = _.pageX - O.x,
        V = _.pageY - O.y,
        J = Math.sqrt(F * F + V * V);
      E.set(0, J),
        S.set(0, Math.pow(E.y / f.y, n.zoomSpeed)),
        j(S.y),
        f.copy(E);
      const xe = (_.pageX + O.x) * 0.5,
        Ae = (_.pageY + O.y) * 0.5;
      ce(xe, Ae);
    }
    function st(_) {
      n.enableZoom && _e(_), n.enablePan && We(_);
    }
    function we(_) {
      n.enableZoom && _e(_), n.enableRotate && Ve(_);
    }
    function Ce(_) {
      n.enabled !== !1 &&
        (w.length === 0 &&
          (n.domElement.setPointerCapture(_.pointerId),
          n.domElement.addEventListener("pointermove", b),
          n.domElement.addEventListener("pointerup", v)),
        !ue(_) && (ke(_), _.pointerType === "touch" ? Ie(_) : k(_)));
    }
    function b(_) {
      n.enabled !== !1 && (_.pointerType === "touch" ? te(_) : $(_));
    }
    function v(_) {
      switch ((Se(_), w.length)) {
        case 0:
          n.domElement.releasePointerCapture(_.pointerId),
            n.domElement.removeEventListener("pointermove", b),
            n.domElement.removeEventListener("pointerup", v),
            n.dispatchEvent(Il),
            (r = i.NONE);
          break;
        case 1:
          const O = w[0],
            F = U[O];
          Ie({ pointerId: O, pageX: F.x, pageY: F.y });
          break;
      }
    }
    function k(_) {
      let O;
      switch (_.button) {
        case 0:
          O = n.mouseButtons.LEFT;
          break;
        case 1:
          O = n.mouseButtons.MIDDLE;
          break;
        case 2:
          O = n.mouseButtons.RIGHT;
          break;
        default:
          O = -1;
      }
      switch (O) {
        case fi.DOLLY:
          if (n.enableZoom === !1) return;
          ze(_), (r = i.DOLLY);
          break;
        case fi.ROTATE:
          if (_.ctrlKey || _.metaKey || _.shiftKey) {
            if (n.enablePan === !1) return;
            Ge(_), (r = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            pe(_), (r = i.ROTATE);
          }
          break;
        case fi.PAN:
          if (_.ctrlKey || _.metaKey || _.shiftKey) {
            if (n.enableRotate === !1) return;
            pe(_), (r = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            Ge(_), (r = i.PAN);
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(ba);
    }
    function $(_) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          Y(_);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          ee(_);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          de(_);
          break;
      }
    }
    function Q(_) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        r !== i.NONE ||
        (_.preventDefault(),
        n.dispatchEvent(ba),
        le(Z(_)),
        n.dispatchEvent(Il));
    }
    function Z(_) {
      const O = _.deltaMode,
        F = { clientX: _.clientX, clientY: _.clientY, deltaY: _.deltaY };
      switch (O) {
        case 1:
          F.deltaY *= 16;
          break;
        case 2:
          F.deltaY *= 100;
          break;
      }
      return _.ctrlKey && !T && (F.deltaY *= 10), F;
    }
    function Me(_) {
      _.key === "Control" &&
        ((T = !0),
        n.domElement
          .getRootNode()
          .addEventListener("keyup", ie, { passive: !0, capture: !0 }));
    }
    function ie(_) {
      _.key === "Control" &&
        ((T = !1),
        n.domElement
          .getRootNode()
          .removeEventListener("keyup", ie, { passive: !0, capture: !0 }));
    }
    function ae(_) {
      n.enabled === !1 || n.enablePan === !1 || Le(_);
    }
    function Ie(_) {
      switch ((Te(_), w.length)) {
        case 1:
          switch (n.touches.ONE) {
            case pi.ROTATE:
              if (n.enableRotate === !1) return;
              De(_), (r = i.TOUCH_ROTATE);
              break;
            case pi.PAN:
              if (n.enablePan === !1) return;
              Fe(_), (r = i.TOUCH_PAN);
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case pi.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              C(_), (r = i.TOUCH_DOLLY_PAN);
              break;
            case pi.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              it(_), (r = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(ba);
    }
    function te(_) {
      switch ((Te(_), r)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Ve(_), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          We(_), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          st(_), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          we(_), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function oe(_) {
      n.enabled !== !1 && _.preventDefault();
    }
    function ke(_) {
      w.push(_.pointerId);
    }
    function Se(_) {
      delete U[_.pointerId];
      for (let O = 0; O < w.length; O++)
        if (w[O] == _.pointerId) {
          w.splice(O, 1);
          return;
        }
    }
    function ue(_) {
      for (let O = 0; O < w.length; O++) if (w[O] == _.pointerId) return !0;
      return !1;
    }
    function Te(_) {
      let O = U[_.pointerId];
      O === void 0 && ((O = new ge()), (U[_.pointerId] = O)),
        O.set(_.pageX, _.pageY);
    }
    function Re(_) {
      const O = _.pointerId === w[0] ? w[1] : w[0];
      return U[O];
    }
    n.domElement.addEventListener("contextmenu", oe),
      n.domElement.addEventListener("pointerdown", Ce),
      n.domElement.addEventListener("pointercancel", v),
      n.domElement.addEventListener("wheel", Q, { passive: !1 }),
      n.domElement
        .getRootNode()
        .addEventListener("keydown", Me, { passive: !0, capture: !0 }),
      this.update();
  }
}
function Nl(s, e) {
  if (e === Nh)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.",
      ),
      s
    );
  if (e === ho || e === iu) {
    let t = s.getIndex();
    if (t === null) {
      const a = [],
        o = s.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++) a.push(c);
        s.setIndex(a), (t = s.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.",
          ),
          s
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === ho)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.",
      );
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e,
      ),
      s
    );
}
class rs extends hi {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new px(t);
      }),
      this.register(function (t) {
        return new mx(t);
      }),
      this.register(function (t) {
        return new Tx(t);
      }),
      this.register(function (t) {
        return new Ax(t);
      }),
      this.register(function (t) {
        return new bx(t);
      }),
      this.register(function (t) {
        return new _x(t);
      }),
      this.register(function (t) {
        return new xx(t);
      }),
      this.register(function (t) {
        return new vx(t);
      }),
      this.register(function (t) {
        return new Mx(t);
      }),
      this.register(function (t) {
        return new fx(t);
      }),
      this.register(function (t) {
        return new yx(t);
      }),
      this.register(function (t) {
        return new gx(t);
      }),
      this.register(function (t) {
        return new Ex(t);
      }),
      this.register(function (t) {
        return new Sx(t);
      }),
      this.register(function (t) {
        return new hx(t);
      }),
      this.register(function (t) {
        return new wx(t);
      }),
      this.register(function (t) {
        return new Rx(t);
      });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const l = As.extractUrlBase(e);
      a = As.resolveURL(l, this.path);
    } else a = As.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function (l) {
        i ? i(l) : console.error(l),
          r.manager.itemError(e),
          r.manager.itemEnd(e);
      },
      c = new Ho(this.manager);
    c.setPath(this.path),
      c.setResponseType("arraybuffer"),
      c.setRequestHeader(this.requestHeader),
      c.setWithCredentials(this.withCredentials),
      c.load(
        e,
        function (l) {
          try {
            r.parse(
              l,
              a,
              function (u) {
                t(u), r.manager.itemEnd(e);
              },
              o,
            );
          } catch (u) {
            o(u);
          }
        },
        n,
        o,
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".',
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let r;
    const a = {},
      o = {},
      c = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === Nu) {
        try {
          a[Be.KHR_BINARY_GLTF] = new Cx(e);
        } catch (h) {
          i && i(h);
          return;
        }
        r = JSON.parse(a[Be.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(c.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.",
          ),
        );
      return;
    }
    const l = new Vx(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](l);
      h.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[h.name] = h),
        (a[h.name] = !0);
    }
    if (r.extensionsUsed)
      for (let u = 0; u < r.extensionsUsed.length; ++u) {
        const h = r.extensionsUsed[u],
          d = r.extensionsRequired || [];
        switch (h) {
          case Be.KHR_MATERIALS_UNLIT:
            a[h] = new dx();
            break;
          case Be.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new Px(r, this.dracoLoader);
            break;
          case Be.KHR_TEXTURE_TRANSFORM:
            a[h] = new Lx();
            break;
          case Be.KHR_MESH_QUANTIZATION:
            a[h] = new Ix();
            break;
          default:
            d.indexOf(h) >= 0 &&
              o[h] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function ux() {
  let s = {};
  return {
    get: function (e) {
      return s[e];
    },
    add: function (e, t) {
      s[e] = t;
    },
    remove: function (e) {
      delete s[e];
    },
    removeAll: function () {
      s = {};
    },
  };
}
const Be = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class hx {
  constructor(e) {
    (this.parser = e),
      (this.name = Be.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions &&
        r.extensions[this.name] &&
        r.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json,
      c = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
    let l;
    const u = new Pe(16777215);
    c.color !== void 0 && u.setRGB(c.color[0], c.color[1], c.color[2], Tt);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        (l = new Y_(u)), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        (l = new W_(u)), (l.distance = h);
        break;
      case "spot":
        (l = new V_(u)),
          (l.distance = h),
          (c.spot = c.spot || {}),
          (c.spot.innerConeAngle =
            c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0),
          (c.spot.outerConeAngle =
            c.spot.outerConeAngle !== void 0
              ? c.spot.outerConeAngle
              : Math.PI / 4),
          (l.angle = c.spot.outerConeAngle),
          (l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle),
          l.target.position.set(0, 0, -1),
          l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return (
      l.position.set(0, 0, 0),
      (l.decay = 2),
      vn(l, c),
      c.intensity !== void 0 && (l.intensity = c.intensity),
      (l.name = t.createUniqueName(c.name || "light_" + e)),
      (i = Promise.resolve(l)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      r = n.json.nodes[e],
      o = ((r.extensions && r.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (c) {
          return n._getNodeRef(t.cache, o, c);
        });
  }
}
class dx {
  constructor() {
    this.name = Be.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Dt;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new Pe(1, 1, 1)), (e.opacity = 1);
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Tt), (e.opacity = a[3]);
      }
      r.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", r.baseColorTexture, Pt));
    }
    return Promise.all(i);
  }
}
class fx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class px {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture,
          ),
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (r.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture),
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ge(o, o);
    }
    return Promise.all(r);
  }
}
class mx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_DISPERSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (
      (t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0),
      Promise.resolve()
    );
  }
}
class gx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture,
          ),
        ),
      Promise.all(r)
    );
  }
}
class _x {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    (t.sheenColor = new Pe(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Tt);
    }
    return (
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, Pt)),
      a.sheenRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture),
        ),
      Promise.all(r)
    );
  }
}
class xx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class vx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    const o = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new Pe().setRGB(o[0], o[1], o[2], Tt)),
      Promise.all(r)
    );
  }
}
class Mx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (t.ior = r.ior !== void 0 ? r.ior : 1.5), Promise.resolve();
  }
}
class yx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new Pe().setRGB(o[0], o[1], o[2], Tt)),
      a.specularColorTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, Pt),
        ),
      Promise.all(r)
    );
  }
}
class Sx {
  constructor(e) {
    (this.parser = e), (this.name = Be.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      (t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1),
      a.bumpTexture !== void 0 &&
        r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
      Promise.all(r)
    );
  }
}
class Ex {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
      a.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = a.anisotropyRotation),
      a.anisotropyTexture !== void 0 &&
        r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(r)
    );
  }
}
class Tx {
  constructor(e) {
    (this.parser = e), (this.name = Be.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures",
        );
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class Ax {
  constructor(e) {
    (this.parser = e),
      (this.name = Be.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported.",
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class bx {
  constructor(e) {
    (this.parser = e),
      (this.name = Be.EXT_TEXTURE_AVIF),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported.",
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class wx {
  constructor(e) {
    (this.name = Be.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        r = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files",
          );
        return null;
      }
      return r.then(function (o) {
        const c = i.byteOffset || 0,
          l = i.byteLength || 0,
          u = i.count,
          h = i.byteStride,
          d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(u, h, d, i.mode, i.filter)
              .then(function (p) {
                return p.buffer;
              })
          : a.ready.then(function () {
              const p = new ArrayBuffer(u * h);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(p),
                  u,
                  h,
                  d,
                  i.mode,
                  i.filter,
                ),
                p
              );
            });
      });
    } else return null;
  }
}
class Rx {
  constructor(e) {
    (this.name = Be.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (
        l.mode !== Gt.TRIANGLES &&
        l.mode !== Gt.TRIANGLE_STRIP &&
        l.mode !== Gt.TRIANGLE_FAN &&
        l.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      c = {};
    for (const l in a)
      o.push(
        this.parser
          .getDependency("accessor", a[l])
          .then((u) => ((c[l] = u), c[l])),
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((l) => {
          const u = l.pop(),
            h = u.isGroup ? u.children : [u],
            d = l[0].count,
            p = [];
          for (const g of h) {
            const x = new Ne(),
              m = new P(),
              f = new sn(),
              E = new P(1, 1, 1),
              S = new E_(g.geometry, g.material, d);
            for (let A = 0; A < d; A++)
              c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, A),
                c.ROTATION && f.fromBufferAttribute(c.ROTATION, A),
                c.SCALE && E.fromBufferAttribute(c.SCALE, A),
                S.setMatrixAt(A, x.compose(m, f, E));
            for (const A in c)
              if (A === "_COLOR_0") {
                const D = c[A];
                S.instanceColor = new mo(D.array, D.itemSize, D.normalized);
              } else
                A !== "TRANSLATION" &&
                  A !== "ROTATION" &&
                  A !== "SCALE" &&
                  g.geometry.setAttribute(A, c[A]);
            Je.prototype.copy.call(S, g),
              this.parser.assignFinalMaterial(S),
              p.push(S);
          }
          return u.isGroup ? (u.clear(), u.add(...p), u) : p[0];
        }));
  }
}
const Nu = "glTF",
  vs = 12,
  Ul = { JSON: 1313821514, BIN: 5130562 };
class Cx {
  constructor(e) {
    (this.name = Be.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, vs),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== Nu)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - vs,
      r = new DataView(e, vs);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const c = r.getUint32(a, !0);
      if (((a += 4), c === Ul.JSON)) {
        const l = new Uint8Array(e, vs + a, o);
        this.content = n.decode(l);
      } else if (c === Ul.BIN) {
        const l = vs + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Px {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = Be.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      c = {},
      l = {};
    for (const u in a) {
      const h = _o[u] || u.toLowerCase();
      o[h] = a[u];
    }
    for (const u in e.attributes) {
      const h = _o[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const d = n.accessors[e.attributes[u]],
          p = Gi[d.componentType];
        (l[h] = p.name), (c[h] = d.normalized === !0);
      }
    }
    return t.getDependency("bufferView", r).then(function (u) {
      return new Promise(function (h, d) {
        i.decodeDracoFile(
          u,
          function (p) {
            for (const g in p.attributes) {
              const x = p.attributes[g],
                m = c[g];
              m !== void 0 && (x.normalized = m);
            }
            h(p);
          },
          o,
          l,
          Tt,
          d,
        );
      });
    });
  }
}
class Lx {
  constructor() {
    this.name = Be.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class Ix {
  constructor() {
    this.name = Be.KHR_MESH_QUANTIZATION;
  }
}
class Uu extends Us {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = o * 2,
      l = o * 3,
      u = i - t,
      h = (n - t) / u,
      d = h * h,
      p = d * h,
      g = e * l,
      x = g - l,
      m = -2 * p + 3 * d,
      f = p - d,
      E = 1 - m,
      S = f - d + h;
    for (let A = 0; A !== o; A++) {
      const D = a[x + A + o],
        R = a[x + A + c] * u,
        w = a[g + A + o],
        U = a[g + A] * u;
      r[A] = E * D + S * R + m * w + f * U;
    }
    return r;
  }
}
const Dx = new sn();
class Nx extends Uu {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return Dx.fromArray(r).normalize().toArray(r), r;
  }
}
const Gt = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Gi = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Ol = { 9728: Lt, 9729: kt, 9984: ql, 9985: yr, 9986: Ms, 9987: yn },
  Fl = { 33071: kn, 33648: Pr, 10497: Ki },
  wa = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  _o = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  Nn = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  Ux = { CUBICSPLINE: void 0, LINEAR: Rs, STEP: ws },
  Ra = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function Ox(s) {
  return (
    s.DefaultMaterial === void 0 &&
      (s.DefaultMaterial = new ko({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: En,
      })),
    s.DefaultMaterial
  );
}
function ei(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function vn(s, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(s.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras,
        ));
}
function Fx(s, e, t) {
  let n = !1,
    i = !1,
    r = !1;
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (
      (h.POSITION !== void 0 && (n = !0),
      h.NORMAL !== void 0 && (i = !0),
      h.COLOR_0 !== void 0 && (r = !0),
      n && i && r)
    )
      break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [],
    o = [],
    c = [];
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (n) {
      const d =
        h.POSITION !== void 0
          ? t.getDependency("accessor", h.POSITION)
          : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d =
        h.NORMAL !== void 0
          ? t.getDependency("accessor", h.NORMAL)
          : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d =
        h.COLOR_0 !== void 0
          ? t.getDependency("accessor", h.COLOR_0)
          : s.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c)]).then(
    function (l) {
      const u = l[0],
        h = l[1],
        d = l[2];
      return (
        n && (s.morphAttributes.position = u),
        i && (s.morphAttributes.normal = h),
        r && (s.morphAttributes.color = d),
        (s.morphTargetsRelative = !0),
        s
      );
    },
  );
}
function Bx(s, e) {
  if ((s.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.",
      );
  }
}
function zx(s) {
  let e;
  const t = s.extensions && s.extensions[Be.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ca(t.attributes))
      : (e = s.indices + ":" + Ca(s.attributes) + ":" + s.mode),
    s.targets !== void 0)
  )
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + Ca(s.targets[n]);
  return e;
}
function Ca(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function xo(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type.",
      );
  }
}
function kx(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0
      ? "image/webp"
      : "image/png";
}
const Hx = new Ne();
class Vx {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new ux()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      i = -1,
      r = !1,
      a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const c = o.match(/Version\/(\d+)/);
      (i = n && c ? parseInt(c[1], 10) : -1),
        (r = o.indexOf("Firefox") > -1),
        (a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1);
    }
    typeof createImageBitmap > "u" || (n && i < 17) || (r && a < 98)
      ? (this.textureLoader = new Hr(this.options.manager))
      : (this.textureLoader = new K_(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Ho(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      r = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        }),
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          return (
            ei(r, o, i),
            vn(o, i),
            Promise.all(
              n._invokeAll(function (c) {
                return c.afterRoot && c.afterRoot(o);
              }),
            ).then(function () {
              for (const c of o.scenes) c.updateMatrixWorld();
              e(o);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      r = (a, o) => {
        const c = this.associations.get(a);
        c != null && this.associations.set(o, c);
        for (const [l, u] of a.children.entries()) r(u, o.children[l]);
      };
    return r(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (r, a) {
          return n.getDependency(e, a);
        }),
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported.",
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (r, a) {
      n.load(As.resolveURL(t.uri, i.path), r, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'),
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = wa[i.type],
        o = Gi[i.componentType],
        c = i.normalized === !0,
        l = new o(i.count * a);
      return Promise.resolve(new It(l, a, c));
    }
    const r = [];
    return (
      i.bufferView !== void 0
        ? r.push(this.getDependency("bufferView", i.bufferView))
        : r.push(null),
      i.sparse !== void 0 &&
        (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(r).then(function (a) {
        const o = a[0],
          c = wa[i.type],
          l = Gi[i.componentType],
          u = l.BYTES_PER_ELEMENT,
          h = u * c,
          d = i.byteOffset || 0,
          p =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          g = i.normalized === !0;
        let x, m;
        if (p && p !== h) {
          const f = Math.floor(d / p),
            E =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              f +
              ":" +
              i.count;
          let S = t.cache.get(E);
          S ||
            ((x = new l(o, f * p, (i.count * p) / u)),
            (S = new Eu(x, p / u)),
            t.cache.add(E, S)),
            (m = new Ps(S, c, (d % p) / u, g));
        } else
          o === null
            ? (x = new l(i.count * c))
            : (x = new l(o, d, i.count * c)),
            (m = new It(x, c, g));
        if (i.sparse !== void 0) {
          const f = wa.SCALAR,
            E = Gi[i.sparse.indices.componentType],
            S = i.sparse.indices.byteOffset || 0,
            A = i.sparse.values.byteOffset || 0,
            D = new E(a[1], S, i.sparse.count * f),
            R = new l(a[2], A, i.sparse.count * c);
          o !== null && (m = new It(m.array.slice(), m.itemSize, m.normalized));
          for (let w = 0, U = D.length; w < U; w++) {
            const T = D[w];
            if (
              (m.setX(T, R[w * c]),
              c >= 2 && m.setY(T, R[w * c + 1]),
              c >= 3 && m.setZ(T, R[w * c + 2]),
              c >= 4 && m.setW(T, R[w * c + 3]),
              c >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.",
              );
          }
        }
        return m;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      r = t.textures[e].source,
      a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      r = this.json,
      a = r.textures[e],
      o = r.images[t],
      c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const l = this.loadImageSource(t, n)
      .then(function (u) {
        (u.flipY = !1),
          (u.name = a.name || o.name || ""),
          u.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (u.name = o.uri);
        const d = (r.samplers || {})[a.sampler] || {};
        return (
          (u.magFilter = Ol[d.magFilter] || kt),
          (u.minFilter = Ol[d.minFilter] || yn),
          (u.wrapS = Fl[d.wrapS] || Ki),
          (u.wrapT = Fl[d.wrapT] || Ki),
          i.associations.set(u, { textures: e }),
          u
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[c] = l), l;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let c = a.uri || "",
      l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function (h) {
        l = !0;
        const d = new Blob([h], { type: a.mimeType });
        return (c = o.createObjectURL(d)), c;
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView",
      );
    const u = Promise.resolve(c)
      .then(function (h) {
        return new Promise(function (d, p) {
          let g = d;
          t.isImageBitmapLoader === !0 &&
            (g = function (x) {
              const m = new gt(x);
              (m.needsUpdate = !0), d(m);
            }),
            t.load(As.resolveURL(h, r.path), g, void 0, p);
        });
      })
      .then(function (h) {
        return (
          l === !0 && o.revokeObjectURL(c),
          vn(h, a),
          (h.userData.mimeType = a.mimeType || kx(a.uri)),
          h
        );
      })
      .catch(function (h) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", c), h);
      });
    return (this.sourceCache[e] = u), u;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((a = a.clone()), (a.channel = n.texCoord)),
        r.extensions[Be.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[Be.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const c = r.associations.get(a);
          (a = r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            r.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      r = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new Cu()),
        Yt.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        (c.sizeAttenuation = !1),
        this.cache.add(o, c)),
        (n = c);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new Ru()),
        Yt.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        this.cache.add(o, c)),
        (n = c);
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"),
        r && (o += "vertex-colors:"),
        a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c ||
        ((c = n.clone()),
        r && (c.vertexColors = !0),
        a && (c.flatShading = !0),
        i &&
          (c.normalScale && (c.normalScale.y *= -1),
          c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, c),
        this.associations.set(c, this.associations.get(n))),
        (n = c);
    }
    e.material = n;
  }
  getMaterialType() {
    return ko;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.materials[e];
    let a;
    const o = {},
      c = r.extensions || {},
      l = [];
    if (c[Be.KHR_MATERIALS_UNLIT]) {
      const h = i[Be.KHR_MATERIALS_UNLIT];
      (a = h.getMaterialType()), l.push(h.extendParams(o, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (
        ((o.color = new Pe(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(h.baseColorFactor))
      ) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Tt), (o.opacity = d[3]);
      }
      h.baseColorTexture !== void 0 &&
        l.push(t.assignTexture(o, "map", h.baseColorTexture, Pt)),
        (o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1),
        (o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1),
        h.metallicRoughnessTexture !== void 0 &&
          (l.push(
            t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture),
          ),
          l.push(
            t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture),
          )),
        (a = this._invokeOne(function (d) {
          return d.getMaterialType && d.getMaterialType(e);
        })),
        l.push(
          Promise.all(
            this._invokeAll(function (d) {
              return d.extendMaterialParams && d.extendMaterialParams(e, o);
            }),
          ),
        );
    }
    r.doubleSided === !0 && (o.side = an);
    const u = r.alphaMode || Ra.OPAQUE;
    if (
      (u === Ra.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          u === Ra.MASK &&
            (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)),
      r.normalTexture !== void 0 &&
        a !== Dt &&
        (l.push(t.assignTexture(o, "normalMap", r.normalTexture)),
        (o.normalScale = new ge(1, 1)),
        r.normalTexture.scale !== void 0))
    ) {
      const h = r.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (
      (r.occlusionTexture !== void 0 &&
        a !== Dt &&
        (l.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
        r.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = r.occlusionTexture.strength)),
      r.emissiveFactor !== void 0 && a !== Dt)
    ) {
      const h = r.emissiveFactor;
      o.emissive = new Pe().setRGB(h[0], h[1], h[2], Tt);
    }
    return (
      r.emissiveTexture !== void 0 &&
        a !== Dt &&
        l.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, Pt)),
      Promise.all(l).then(function () {
        const h = new a(o);
        return (
          r.name && (h.name = r.name),
          vn(h, r),
          t.associations.set(h, { materials: e }),
          r.extensions && ei(i, h, r),
          h
        );
      })
    );
  }
  createUniqueName(e) {
    const t = Ze.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function r(o) {
      return n[Be.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (c) {
          return Bl(c, o, t);
        });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        u = zx(l),
        h = i[u];
      if (h) a.push(h.promise);
      else {
        let d;
        l.extensions && l.extensions[Be.KHR_DRACO_MESH_COMPRESSION]
          ? (d = r(l))
          : (d = Bl(new Ut(), l, t)),
          (i[u] = { primitive: l, promise: d }),
          a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.meshes[e],
      a = r.primitives,
      o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const u =
        a[c].material === void 0
          ? Ox(this.cache)
          : this.getDependency("material", a[c].material);
      o.push(u);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (c) {
        const l = c.slice(0, c.length - 1),
          u = c[c.length - 1],
          h = [];
        for (let p = 0, g = u.length; p < g; p++) {
          const x = u[p],
            m = a[p];
          let f;
          const E = l[p];
          if (
            m.mode === Gt.TRIANGLES ||
            m.mode === Gt.TRIANGLE_STRIP ||
            m.mode === Gt.TRIANGLE_FAN ||
            m.mode === void 0
          )
            (f = r.isSkinnedMesh === !0 ? new M_(x, E) : new ot(x, E)),
              f.isSkinnedMesh === !0 && f.normalizeSkinWeights(),
              m.mode === Gt.TRIANGLE_STRIP
                ? (f.geometry = Nl(f.geometry, iu))
                : m.mode === Gt.TRIANGLE_FAN &&
                  (f.geometry = Nl(f.geometry, ho));
          else if (m.mode === Gt.LINES) f = new T_(x, E);
          else if (m.mode === Gt.LINE_STRIP) f = new Oo(x, E);
          else if (m.mode === Gt.LINE_LOOP) f = new A_(x, E);
          else if (m.mode === Gt.POINTS) f = new b_(x, E);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + m.mode,
            );
          Object.keys(f.geometry.morphAttributes).length > 0 && Bx(f, r),
            (f.name = t.createUniqueName(r.name || "mesh_" + e)),
            vn(f, r),
            m.extensions && ei(i, f, m),
            t.assignFinalMaterial(f),
            h.push(f);
        }
        for (let p = 0, g = h.length; p < g; p++)
          t.associations.set(h[p], { meshes: e, primitives: p });
        if (h.length === 1) return r.extensions && ei(i, h[0], r), h[0];
        const d = new ri();
        r.extensions && ei(i, d, r), t.associations.set(d, { meshes: e });
        for (let p = 0, g = h.length; p < g; p++) d.add(h[p]);
        return d;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new wt(
            ru.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6,
          ))
        : n.type === "orthographic" &&
          (t = new Do(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      vn(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const r = i.pop(),
          a = i,
          o = [],
          c = [];
        for (let l = 0, u = a.length; l < u; l++) {
          const h = a[l];
          if (h) {
            o.push(h);
            const d = new Ne();
            r !== null && d.fromArray(r.array, l * 16), c.push(d);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[l],
            );
        }
        return new Uo(o, c);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      i = t.animations[e],
      r = i.name ? i.name : "animation_" + e,
      a = [],
      o = [],
      c = [],
      l = [],
      u = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const p = i.channels[h],
        g = i.samplers[p.sampler],
        x = p.target,
        m = x.node,
        f = i.parameters !== void 0 ? i.parameters[g.input] : g.input,
        E = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      x.node !== void 0 &&
        (a.push(this.getDependency("node", m)),
        o.push(this.getDependency("accessor", f)),
        c.push(this.getDependency("accessor", E)),
        l.push(g),
        u.push(x));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(u),
    ]).then(function (h) {
      const d = h[0],
        p = h[1],
        g = h[2],
        x = h[3],
        m = h[4],
        f = [];
      for (let E = 0, S = d.length; E < S; E++) {
        const A = d[E],
          D = p[E],
          R = g[E],
          w = x[E],
          U = m[E];
        if (A === void 0) continue;
        A.updateMatrix && A.updateMatrix();
        const T = n._createAnimationTracks(A, D, R, w, U);
        if (T) for (let y = 0; y < T.length; y++) f.push(T[y]);
      }
      return new N_(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (r) {
          const a = n._getNodeRef(n.meshCache, i.mesh, r);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let c = 0, l = i.weights.length; c < l; c++)
                    o.morphTargetInfluences[c] = i.weights[c];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e],
      r = n._loadNodeShallow(e),
      a = [],
      o = i.children || [];
    for (let l = 0, u = o.length; l < u; l++)
      a.push(n.getDependency("node", o[l]));
    const c =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), c]).then(function (l) {
      const u = l[0],
        h = l[1],
        d = l[2];
      d !== null &&
        u.traverse(function (p) {
          p.isSkinnedMesh && p.bind(d, Hx);
        });
      for (let p = 0, g = h.length; p < g; p++) u.add(h[p]);
      return u;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e],
      a = r.name ? i.createUniqueName(r.name) : "",
      o = [],
      c = i._invokeOne(function (l) {
        return l.createNodeMesh && l.createNodeMesh(e);
      });
    return (
      c && o.push(c),
      r.camera !== void 0 &&
        o.push(
          i.getDependency("camera", r.camera).then(function (l) {
            return i._getNodeRef(i.cameraCache, r.camera, l);
          }),
        ),
      i
        ._invokeAll(function (l) {
          return l.createNodeAttachment && l.createNodeAttachment(e);
        })
        .forEach(function (l) {
          o.push(l);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (l) {
        let u;
        if (
          (r.isBone === !0
            ? (u = new bu())
            : l.length > 1
              ? (u = new ri())
              : l.length === 1
                ? (u = l[0])
                : (u = new Je()),
          u !== l[0])
        )
          for (let h = 0, d = l.length; h < d; h++) u.add(l[h]);
        if (
          (r.name && ((u.userData.name = r.name), (u.name = a)),
          vn(u, r),
          r.extensions && ei(n, u, r),
          r.matrix !== void 0)
        ) {
          const h = new Ne();
          h.fromArray(r.matrix), u.applyMatrix4(h);
        } else
          r.translation !== void 0 && u.position.fromArray(r.translation),
            r.rotation !== void 0 && u.quaternion.fromArray(r.rotation),
            r.scale !== void 0 && u.scale.fromArray(r.scale);
        return (
          i.associations.has(u) || i.associations.set(u, {}),
          (i.associations.get(u).nodes = e),
          u
        );
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      r = new ri();
    n.name && (r.name = i.createUniqueName(n.name)),
      vn(r, n),
      n.extensions && ei(t, r, n);
    const a = n.nodes || [],
      o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function (c) {
      for (let u = 0, h = c.length; u < h; u++) r.add(c[u]);
      const l = (u) => {
        const h = new Map();
        for (const [d, p] of i.associations)
          (d instanceof Yt || d instanceof gt) && h.set(d, p);
        return (
          u.traverse((d) => {
            const p = i.associations.get(d);
            p != null && h.set(d, p);
          }),
          h
        );
      };
      return (i.associations = l(r)), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [],
      o = e.name ? e.name : e.uuid,
      c = [];
    Nn[r.path] === Nn.weights
      ? e.traverse(function (d) {
          d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
        })
      : c.push(o);
    let l;
    switch (Nn[r.path]) {
      case Nn.weights:
        l = Qi;
        break;
      case Nn.rotation:
        l = es;
        break;
      case Nn.position:
      case Nn.scale:
        l = ts;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Qi;
            break;
          case 2:
          case 3:
          default:
            l = ts;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? Ux[i.interpolation] : Rs,
      h = this._getArrayFromAccessor(n);
    for (let d = 0, p = c.length; d < p; d++) {
      const g = new l(c[d] + "." + Nn[r.path], t.array, h, u);
      i.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(g),
        a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = xo(t.constructor),
        i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const i = this instanceof es ? Nx : Uu;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function Gx(s, e, t) {
  const n = e.attributes,
    i = new An();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      c = o.min,
      l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (
        (i.set(new P(c[0], c[1], c[2]), new P(l[0], l[1], l[2])), o.normalized)
      ) {
        const u = xo(Gi[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION.",
      );
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new P(),
      c = new P();
    for (let l = 0, u = r.length; l < u; l++) {
      const h = r[l];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION],
          p = d.min,
          g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (
            (c.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))),
            c.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))),
            c.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))),
            d.normalized)
          ) {
            const x = xo(Gi[d.componentType]);
            c.multiplyScalar(x);
          }
          o.max(c);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION.",
          );
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new cn();
  i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (s.boundingSphere = a);
}
function Bl(s, e, t) {
  const n = e.attributes,
    i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function (c) {
      s.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = _o[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return (
    Xe.workingColorSpace !== Tt &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`,
      ),
    vn(s, e),
    Gx(s, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? Fx(s, e.targets, t) : s;
    })
  );
}
const vo = new zo(4.5, 5, 100),
  zl = new Dt();
vo.rotateX(-Math.PI * 0.5);
class Wx {
  constructor(e, t) {
    (this.scene = e),
      (this.Geometry = vo),
      (this.Material = zl),
      (this.mesh = new ot(vo, zl)),
      this.mesh.position.copy(t),
      this.scene.add(this.mesh);
  }
}
const Xx = "/assets/fire-BMUbX1BE.png",
  Yx = "/assets/bluefire-j_4E_iGb.png",
  qx = 60;
window.innerHeight = window.innerHeight / 2;
const Ou = window.innerWidth / window.innerHeight,
  Kx = 1,
  jx = 1e3;
let tt = new __(),
  Mn = new wt(qx, Ou, Kx, jx),
  Bn = new wt(80, Ou, 0.1, 1e3),
  Wt = new Su(),
  as = new Su();
Wt.setSize(window.innerWidth, window.innerHeight);
as.setSize(window.innerWidth, window.innerHeight);
const Fu = new URLSearchParams(window.location.search),
  Zx = Fu.get("player1") || "Player 1",
  Pa = Fu.get("player2") || "Player 2";
Wt.setAnimationLoop(Vu);
as.setAnimationLoop(Vu);
document.body.appendChild(Wt.domElement);
document.body.appendChild(as.domElement);
const Gr = document.createElement("canvas");
Gr.width = 512;
Gr.height = 128;
const Wr = Gr.getContext("2d");
Wr.font = "Bold 48px Arial";
Wr.fillStyle = "white";
Wr.textAlign = "center";
Wr.textBaseline = "middle";
const $x = new Fo(Gr),
  Jx = new Tu({ map: $x }),
  Xo = new x_(Jx);
Xo.scale.set(10, 4, 10);
Xo.rotateZ(Math.PI * 0.5);
tt.add(Xo);
let Yo = !1,
  qo = !1;
const Rr = new Du(Mn, Wt.domElement),
  Qx = new Du(Bn, as.domElement),
  e0 = new q_(4210752, 150);
tt.add(e0);
let La;
const t0 = new rs();
ci(() => import("./scene-5qQbBAXE.js"), [])
  .then((s) => {
    t0.load(s.default, function (e) {
      (La = e.scene), La.position.set(0, 0, 0), tt.add(La);
    });
  })
  .catch((s) => {});
let Ss;
const n0 = new rs();
ci(() => import("./scene-C3NEbVzK.js"), [])
  .then((s) => {
    n0.load(s.default, function (e) {
      Ss = e.scene;
    });
  })
  .catch((s) => {});
let lt;
const i0 = new rs();
ci(() => import("./scene-BgAl4zau.js"), [])
  .then((s) => {
    i0.load(s.default, function (e) {
      (lt = e.scene), lt.position.set(0, 0, -275), tt.add(lt);
    });
  })
  .catch((s) => {});
let Wi;
const s0 = new rs();
ci(() => import("./scene-DkE7jUlJ.js"), [])
  .then((s) => {
    s0.load(s.default, function (e) {
      (Wi = e.scene), Wi.position.set(0, 200, -275), tt.add(Wi);
    });
  })
  .catch((s) => {
    console.error("Error loading first meteor model:", s);
  });
let Xi;
const r0 = new rs();
ci(() => import("./scene-DkE7jUlJ.js"), [])
  .then((s) => {
    r0.load(s.default, function (e) {
      (Xi = e.scene), Xi.position.set(0, 200, -270), tt.add(Xi);
    });
  })
  .catch((s) => {
    console.error("Error loading second meteor model:", s);
  });
let ut;
const a0 = new rs();
ci(() => import("./scene-BSNa7i3C.js"), [])
  .then((s) => {
    a0.load(s.default, function (e) {
      (ut = e.scene),
        ut.position.set(0, 0, 275),
        ut.scale.set(50, 50, 50),
        tt.add(ut);
    });
  })
  .catch((s) => {});
const Bu = new Hr();
ci(
  () =>
    import(
      "./cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTM2NjcxMC1pbWFnZS1rd3Z4eGVxcC5qcGc-9u95zFtA.js"
    ),
  [],
)
  .then((s) => {
    Bu.load(s.default, function (e) {
      const t = new Ns(500, 60, 40),
        n = new Dt({ map: e });
      new ot(t, n);
    });
  })
  .catch((s) => {});
new Hr();
const o0 = new Ns(10, 10, 10),
  c0 = new Dt({ map: Bu.load(Xx) }),
  $t = new ot(o0, c0);
$t.position.set(0, 10, 260);
$t.scale.set(0.1, 0.1, 0.1);
const l0 = new Hr(),
  zu = new Ns(10, 10, 10),
  ku = new Dt({ map: l0.load(Yx) }),
  Jt = new ot(zu, ku),
  zn = new ot(zu, ku);
Jt.position.set(2, 10, 260);
zn.position.set(-2, 10, 270);
Jt.scale.set(0.1, 0.1, 0.1);
zn.scale.set(0.1, 0.1, 0.1);
new Wx(tt, new P(0, 0, -40));
let Ko = !1,
  jo = !1,
  Zo = !1,
  $o = !1,
  Jo = !1,
  Qo = !1,
  Fr = !1,
  ec = !1;
document.addEventListener("keydown", (s) => {
  s.code === "ArrowLeft" && (jo = !0),
    s.code === "ArrowRight" && (Ko = !0),
    s.key === "p" && (Fr = !0),
    s.key === "w" && (Zo = !0),
    s.key === "s" && ($o = !0),
    s.key === "a" && (Qo = !0),
    s.key === "d" && (Jo = !0),
    s.key === "r" && (ec = !0),
    s.code === "ArrowUp" && (Yo = !0),
    s.code === "ArrowDown" && (qo = !0);
});
document.addEventListener("keyup", (s) => {
  s.code === "ArrowLeft" && (jo = !1),
    s.code === "ArrowRight" && (Ko = !1),
    s.key === "p" && ((Fr = !1), ($t.position.z = -275)),
    s.key === "w" && (Zo = !1),
    s.key === "s" && ($o = !1),
    s.key === "a" && (Qo = !1),
    s.key === "d" && (Jo = !1),
    s.key === "r" && ((ec = !1), (Jt.position.z = 275), (zn.position.z = 275)),
    s.code === "ArrowUp" && (Yo = !1),
    s.code === "ArrowDown" && (qo = !1);
});
function kl(s) {
  const e = document.createElement("canvas"),
    t = document.createElement("canvas");
  (e.width = t.width = 512), (e.height = t.height = 128);
  const n = e.getContext("2d"),
    i = t.getContext("2d");
  (n.font = i.font = "30px Verdana"),
    (n.fillStyle = i.fillStyle = "blue"),
    (n.textAlign = i.textAlign = "center"),
    i.fillText(`${s} `, t.width / 2, t.height / 2);
  const r = new Fo(t),
    a = new Dt({ map: r, transparent: !0 }),
    o = new ui(500, 50),
    c = new ot(o, a);
  c.position.set(0, -100, 200), tt.add(c);
}
const _r = new ge(5, 43),
  tc = new ui(_r.x * 2, _r.y * 2, _r.x * 8, _r.y * 8);
tc.rotateX(-Math.PI * 0.5);
tc.rotateY(Math.PI * 0.5);
const u0 = new w_({ wireframe: !0 }),
  h0 = new ot(tc, u0);
h0.position.set(-43, 0, -40);
const d0 = new Bo(5, 32),
  f0 = new Dt({ color: 5000268 }),
  nc = new ot(d0, f0);
nc.rotateX(-Math.PI * 0.5);
nc.position.set(0, 0, -40);
tt.add(nc);
const Hu = new J_();
Mn.add(Hu);
new Q_(Hu);
new j_();
Bn.position.set(0, 10, 340);
Mn.position.set(0, 10, -294);
let Fi = -294,
  Bi = 340,
  ti = 0,
  Un = 2,
  xr = -2,
  Hl = -275,
  Ia = 275,
  vr = 200,
  Mr = 250,
  Da = 80,
  Na = 80;
function Vl(s) {
  const e = document.createElement("canvas");
  (e.width = 512), (e.height = 128);
  const t = e.getContext("2d");
  (t.font = "30px Verdana"),
    (t.fillStyle = "blue"),
    (t.textAlign = "center"),
    t.fillText(`Game over, The winner is ${s} 🌌`, e.width / 2, e.height / 2);
  const n = new Fo(e),
    i = new Dt({ map: n, transparent: !0 }),
    r = new ui(1e3, 200),
    a = new ot(r, i);
  a.position.set(0, 10, 100),
    tt.add(a),
    setTimeout(() => {
      m0(s);
    }, 1e4);
}
function Vu() {
  Wi &&
    ((vr -= 0.23),
    (Da -= 0.1),
    Wi.position.set(Da, vr, -275),
    Wi.rotateX(0.1),
    vr <= -100 && ((vr = 200), (Da = 80))),
    Xi &&
      ((Mr -= 0.23),
      (Na -= 0.1),
      Xi.rotateX(0.1),
      Xi.position.set(Na, Mr, -270),
      Mr <= -100 && ((Mr = 250), (Na = 80))),
    Fr &&
      (tt.add($t),
      (Hl += 5),
      $t.position.set(ti, 0, Hl),
      $t.position.x >= ut.position.x - 2 &&
        $t.position.x <= ut.position.x + 2 &&
        Fr &&
        (Ss.position.set(ut.position.x, ut.position.y, ut.position.z),
        tt.add(Ss),
        tt.remove(ut),
        Vl(Zx))),
    $t.position.z <= 394 &&
      (($t.position.z += 10), $t.position.set(ti, 0, $t.position.z)),
    ec &&
      (tt.add(Jt),
      tt.add(zn),
      (Ia -= 5),
      Jt.position.set(Un, 0, Ia),
      zn.position.set(xr, 0, Ia),
      Jt.position.x >= lt.position.x - 2 &&
        Jt.position.x <= lt.position.x + 2 &&
        (lt.rotateX(0.5),
        tt.add(Ss),
        tt.remove(lt),
        Ss.position.set(lt.position.x, lt.position.y, lt.position.z),
        kl(Pa),
        Vl(Pa))),
    Jt.position.z >= -394 &&
      ((Jt.position.z -= 10),
      (zn.position.z -= 10),
      Jt.position.set(Un, 0, Jt.position.z),
      zn.position.set(xr, 0, zn.position.z)),
    Yo &&
      lt &&
      ((lt.position.z += 0.1),
      (Fi += 0.1),
      lt.position.z == 0 && lt.rotateY(-10),
      Mn.position.set(ti, 10, Fi)),
    qo &&
      lt &&
      lt.position.z <= 275 &&
      ((Fi -= 0.1), (lt.position.z -= 0.1), Mn.position.set(0, 10, Fi)),
    Ko &&
      lt &&
      ((lt.position.x -= 0.1), (ti -= 0.1), Mn.position.set(ti, 10, Fi)),
    jo &&
      lt &&
      ((lt.position.x += 0.1), (ti += 0.1), Mn.position.set(ti, 10, Fi)),
    Zo &&
      ut &&
      (ut.position.z <= 0 && ut.rotateY(10),
      (ut.position.z -= 0.1),
      (Bi -= 0.1),
      Bn.position.set(Un, 10, Bi)),
    $o &&
      ut &&
      ut.position.z <= 275 &&
      ((ut.position.z += 0.1), (Bi += 0.1), Bn.position.set(Un, 10, Bi)),
    Jo &&
      ut &&
      ((ut.position.x += 0.1),
      (Un += 0.1),
      (xr += 0.1),
      Bn.position.set(Un, 10, Bi)),
    Qo &&
      ut &&
      ((ut.position.x -= 0.1),
      (Un -= 0.1),
      (xr -= 0.1),
      Bn.position.set(Un, 10, Bi)),
    Rr.update(),
    Qx.update(),
    Wt.render(tt, Mn),
    as.render(tt, Bn),
    kl(Pa);
}
function p0() {
  for (
    Wt.setAnimationLoop(null),
      Rr && typeof Rr.dispose == "function" && Rr.dispose(),
      tt.traverse((s) => {
        s.isMesh &&
          (s.geometry && s.geometry.dispose(),
          s.material &&
            (Array.isArray(s.material)
              ? s.material.forEach((e) => {
                  Gl(e);
                })
              : Gl(s.material)));
      }),
      Wt.dispose(),
      Wt.domElement &&
        Wt.domElement.parentNode &&
        Wt.domElement.parentNode.removeChild(Wt.domElement);
    tt.children.length > 0;

  )
    tt.remove(tt.children[0]);
  (tt = null), (Mn = null), (Bn = null), (Wt = null), (as = null);
}
function Gl(s) {
  for (const e in s)
    if (s.hasOwnProperty(e)) {
      const t = s[e];
      t && typeof t == "object" && t.isTexture && t.dispose();
    }
  s.dispose();
}
function sendMatchData(opponentName, userScore, opponentScore) {
  const matchData = {
    opponent_name: opponentName, // Ensure this is a valid username
    user_score: userScore,
    opponent_score: opponentScore,
  };
  fetch("http://localhost:8000/api/games/match-history/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Include cookies for authentication
    body: JSON.stringify(matchData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to save match history');
    }
    return response.json();
  })
  .then(data => {
    console.log('Match history saved:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

let matchDataSent = false;

function m0(winner) {
  console.log("Winner received in m0():", winner); // Debugging log
  if (matchDataSent) return;
  matchDataSent = true;
  const urlParams = new URLSearchParams(window.location.search);
  const player1 = urlParams.get("player1");
  const player2 = urlParams.get("player2");
  console.log(`Player 1: ${player1}, Player 2: ${player2}`); // Debugging log
  let player1Score = 0;
  let player2Score = 0;
  if (winner.trim() === player1.trim()) {
    player1Score = 1;
    player2Score = 0;
  } else if (winner.trim() === player2.trim()) {
    player1Score = 0;
    player2Score = 1;
  } else {
    console.error("Winner does not match Player 1 or Player 2:", winner);
  }
  console.log(`Sending Match Data: Player1 (${player1Score}), Player2 (${player2Score})`); // Debugging log
  p0(); // Cleanup game
  sendMatchData(player2, player1Score, player2Score); // Send match data
  setTimeout(() => {
    Router.go("/home");
  }, 10);
}

