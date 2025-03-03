import Router from "../router.js";
import {
  S as _,
  P as j,
  W as ee,
  O as oe,
  C as N,
  a as te,
  b as se,
  T as ne,
  s as ie,
  c as $,
  M as A,
  d as u,
  e as ae,
  f as re,
  B as le,
  g as I,
  V as h,
  h as V,
  i as b,
  j as me,
  R as he,
  k as O,
  l as pe,
  m as ce,
} from "./angel-DIHBfhtE.js";
import { e as de } from "./apllw-CkkzElFC.js";
let t = new _(),
  r = new j(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
const D = new URLSearchParams(window.location.search),
  L = D.get("player1") || "Player 1",
  P = D.get("player2") || (mode === "ai" ? "AI" : "Player 2");
let n = new ee();
n.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(n.domElement);
r.position.set(0, 30, 30);
r.lookAt(0, 0, 0);
const k = new oe(r, n.domElement);
let w = 0,
  f = 0,
  x = "NULL",
  z = "NULL",
  c = !1,
  E = !1,
  S = !1,
  T = !1,
  C = !1,
  y = !1,
  g = !1;
const i = document.createElement("canvas");
i.width = 512;
i.height = 128;
const p = i.getContext("2d");
p.font = "Bold 48px Arial";
p.fillStyle = "white";
p.textAlign = "center";
p.textBaseline = "middle";
const H = new N(i),
  we = new te({ map: H }),
  G = new se(we);
G.scale.set(10, 4, 10);
G.position.set(0, 20, 0);
t.add(G);
function fe(e, s) {
  p.clearRect(0, 0, i.width, i.height),
    p.fillText(`${L}: ${e}`, i.width / 4, i.height / 2),
    p.fillText(`${P}: ${s}`, (3 * i.width) / 4, i.height / 2),
    (H.needsUpdate = !0);
}
function U(e) {
  const s = document.createElement("canvas");
  (s.width = 512), (s.height = 128);
  const a = s.getContext("2d");
  (a.font = "30px Verdana"),
    (a.fillStyle = "blue"),
    (a.textAlign = "center"),
    a.fillText(`Congrats ${e} you won 🏓`, s.width / 2, s.height / 2);
  const J = new N(s),
    Q = new A({ map: J, transparent: !0 }),
    Z = new O(100, 20),
    W = new u(Z, Q);
  W.position.set(0, 10, 800),
    t.add(W),
    console.log(x),
    console.log(z),
    console.log(w),
    console.log(f),
    setTimeout(() => {
      Re();
    }, 1e4);
}
const v = new ne(),
  xe = v.load(ie),
  ue = new $(-500, 60, 40),
  ye = new A({ map: xe }),
  ge = new u(ue, ye);
t.add(ge);
const Me = v.load(de),
  ke = new $(500, 60, 40),
  Ae = new A({ map: Me }),
  K = new u(ke, Ae);
t.add(K);
const Le = v.load(ae),
  Pe = new re(400, 60, 400, 50),
  ze = new A({ map: Le }),
  R = new u(Pe, ze);
R.position.set(300, 0, 0);
R.rotateY(-Math.PI * 0.5);
t.add(R);
const o = new le(t, 16711680),
  l = new I(t, new h(0, 0, 18)),
  m = new I(t, new h(0, 0, -18)),
  Ee = new V(t, new h(0, 0, -20)),
  Se = new V(t, new h(0, 0, 20)),
  d = new b(t, new h(15, 0, 0)),
  Te = new b(t, new h(-15, 0, 0));
new me(t, new h(0, 0, 0));
new he(t, new h(0, 0.2, 0));
const M = new ce(15, 20),
  X = new O(M.x * 2, M.y * 2, M.x * 8, M.y * 8);
X.rotateX(-Math.PI * 0.5);
const Ce = new pe({ wireframe: !0 }),
  Ge = new u(X, Ce);
t.add(Ge);
function Y(e) {
  e.code === "ArrowLeft" && (E = !0),
    e.code === "ArrowRight" && (S = !0),
    e.key === "a" && (T = !0),
    e.key === "d" && (C = !0);
}
function q(e) {
  e.code === "ArrowLeft" && (E = !1),
    e.code === "ArrowRight" && (S = !1),
    e.key === "a" && (T = !1),
    e.key === "d" && (C = !1),
    e.code === "ArrowUp" && r.position.set(180, 30, 30),
    e.code === "ArrowDown" && r.position.set(1e3, 30, 30);
}
document.addEventListener("keydown", Y);
document.addEventListener("keyup", q);
function F() {
  o.mesh.position.z <= Se.mesh.position.z &&
    !g &&
    !c &&
    ((o.mesh.position.z += 0.4),
    o.mesh.position.z >= 17.3 &&
      o.mesh.position.x >= l.mesh.position.x - 3 &&
      o.mesh.position.x <= l.mesh.position.x + 3 &&
      (g = !0),
    o.mesh.position.z >= 19 &&
      (f >= 10
        ? ((f += 1),
          o.mesh.position.set(0, 0, 0),
          l.mesh.position.set(0, 0, 18),
          m.mesh.position.set(0, 0, -18),
          (x = P),
          (z = L),
          (c = !0),
          r.position.set(0, 10, 900),
          U(x))
        : ((o.mesh.position.z = 0), (f += 1)))),
    o.mesh.position.z >= Ee.mesh.position.z &&
      g &&
      !c &&
      ((o.mesh.position.z -= 0.4),
      o.mesh.position.z <= -17.3 &&
        o.mesh.position.x >= m.mesh.position.x - 3 &&
        o.mesh.position.x <= m.mesh.position.x + 3 &&
        (g = !1),
      o.mesh.position.z <= -19 &&
        (w >= 10
          ? ((w += 1),
            o.mesh.position.set(0, 0, 0),
            l.mesh.position.set(0, 0, 18),
            m.mesh.position.set(0, 0, -18),
            (x = L),
            (z = P),
            (c = !0),
            r.position.set(0, 10, 900),
            U(x))
          : ((o.mesh.position.z = 0), (w += 1)))),
    o.mesh.position.x <= d.mesh.position.x - 1 &&
      !y &&
      ((o.mesh.position.x += 0.1), o.mesh.position.x >= 14 && (y = !0)),
    o.mesh.position.x >= Te.mesh.position.x + 1 &&
      y &&
      ((o.mesh.position.x -= 0.1), o.mesh.position.x <= -14 && (y = !1)),
    S &&
      l.mesh.position.x < d.mesh.position.x - 3.5 &&
      (l.mesh.position.x += 0.2),
    E &&
      l.mesh.position.x > -d.mesh.position.x + 3.5 &&
      (l.mesh.position.x -= 0.2),
    T &&
      m.mesh.position.x < d.mesh.position.x - 3.5 &&
      (m.mesh.position.x += 0.2),
    C &&
      m.mesh.position.x > -d.mesh.position.x + 3.5 &&
      (m.mesh.position.x -= 0.2),
    fe(w, f),
    (K.rotation.y += -0.01),
    k.update(),
    n.render(t, r),
    c || n.setAnimationLoop(F);
}
n.setAnimationLoop(F);
function ve() {
  for (
    n.setAnimationLoop(null),
      document.removeEventListener("keydown", Y),
      document.removeEventListener("keyup", q),
      k && typeof k.dispose == "function" && k.dispose(),
      t.traverse((e) => {
        e.isMesh &&
          (e.geometry && e.geometry.dispose(),
          e.material &&
            (Array.isArray(e.material)
              ? e.material.forEach((s) => {
                  B(s);
                })
              : B(e.material)));
      }),
      n.dispose(),
      n.domElement &&
        n.domElement.parentNode &&
        n.domElement.parentNode.removeChild(n.domElement);
    t.children.length > 0;

  )
    t.remove(t.children[0]);
  (t = null), (r = null), (n = null);
}
function B(e) {
  for (const s in e)
    if (e.hasOwnProperty(s)) {
      const a = e[s];
      a && typeof a == "object" && a.isTexture && a.dispose();
    }
  e.dispose();
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
function Re() {
  const urlParams = new URLSearchParams(window.location.search);
  const opponentName = urlParams.get('player2');
  const userScore = w;
  const opponent_score = f;
  sendMatchData(opponentName,userScore,opponent_score);
  ve(),
    setTimeout(() => {
      Router.go("/home");
    }, 10);
}
