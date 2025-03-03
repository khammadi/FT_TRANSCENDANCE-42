import Router from "../router.js";
import {
  S as ie,
  P as ne,
  W as ae,
  C as H,
  a as le,
  b as re,
  O as me,
  T as v,
  c as I,
  M as g,
  s as he,
  d as x,
  f as ce,
  e as pe,
  B as de,
  g as Y,
  V as m,
  h as Z,
  i as q,
  j as we,
  R as fe,
  k as J,
  l as xe,
  A as ue,
  n as ye,
  o as ge,
  m as Me,
} from "./angel-DIHBfhtE.js";
import { e as ze } from "./apllw-CkkzElFC.js";
const Ae = "/assets/moon-igGvhBtG.png";
let t = new ie(),
  i = new ne(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  a = new ae();
a.setSize(window.innerWidth, window.innerHeight);
i.position.z = 5;
a.setAnimationLoop(Oe);
document.body.appendChild(a.domElement);
let d = 0,
  w = 0;
const l = document.createElement("canvas");
l.width = 512;
l.height = 128;
const p = l.getContext("2d");
p.font = "Bold 48px Arial";
p.fillStyle = "white";
p.textAlign = "center";
p.textBaseline = "middle";
const N = new URLSearchParams(window.location.search),
  K = N.get("mode"),
  G = N.get("player1") || "Player 1",
  R = N.get("player2") || (K === "ai" ? "AI" : "Player 2");
console.log("Game Mode:", K);
console.log("Player 1:", G);
console.log("Player 2:", R);
function Pe(o, s) {
  p.clearRect(0, 0, l.width, l.height),
    p.fillText(`${G}: ${o}`, l.width / 4, l.height / 2),
    p.fillText(`${R}: ${s}`, (3 * l.width) / 4, l.height / 2),
    (Q.needsUpdate = !0);
}
const Q = new H(l),
  Le = new le({ map: Q }),
  M = new re(Le);
M.scale.set(10, 4, 10);
M.position.set(0, 20, 0);
M.lookAt(i.position);
M.rotateZ(Math.PI * 0.5);
t.add(M);
function O(o) {
  const s = document.createElement("canvas"),
    n = s.getContext("2d");
  (s.width = 512),
    (s.height = 128),
    (n.font = "30px Verdana"),
    (n.fillStyle = "blue"),
    (n.textAlign = "center"),
    n.fillText(`Congrats ${o} you won 🏓`, s.width / 2, s.height / 2);
  const z = new H(s),
    A = new g({ map: z, transparent: !0 }),
    P = new J(100, 20),
    W = new x(P, A);
  W.position.set(0, 10, 800),
    t.add(W),
    setTimeout(() => {
      Xe();
    }, 1e4);
}
const C = new me(i, a.domElement),
  ke = new v(),
  Te = new I(-500, 60, 40),
  Se = new g({ map: ke.load(he) }),
  Ee = new x(Te, Se);
t.add(Ee);
const _ = new v(),
  Ce = new I(500, 60, 40),
  Ge = new g({ map: _.load(ze) }),
  j = new x(Ce, Ge);
t.add(j);
const Re = new v(),
  be = new ce(400, 60, 400, 50),
  Be = new g({ map: Re.load(pe) }),
  B = new x(be, Be);
B.position.y = 0;
B.position.x = 300;
B.rotateY(-Math.PI * 0.5);
t.add(B);
const e = new de(t, 16711680),
  r = new Y(t, new m(0, 0, 18)),
  h = new Y(t, new m(0, 0, -18)),
  U = new Z(t, new m(0, 0, -20)),
  V = new Z(t, new m(0, 0, 20)),
  c = new q(t, new m(15, 0, 0)),
  $ = new q(t, new m(-15, 0, 0)),
  We = new we(t, new m(0, 0, 0));
new fe(t, new m(0, 0.2, 0));
let b = !1,
  D = !1;
document.addEventListener("keydown", (o) => {
  o.code === "ArrowLeft" && (D = !0),
    o.code === "ArrowRight" && (b = !0),
    o.key,
    o.key,
    r.mesh.position.x == 0.1 && (b = !1);
});
document.addEventListener("keyup", (o) => {
  o.code === "ArrowLeft" && (D = !1),
    o.code === "ArrowRight" && (b = !1),
    o.key,
    o.key,
    o.code === "ArrowUp" &&
      (i.position.set(1e3, 30, 30), i.position.set(180, 30, 30)),
    o.code === "ArrowDown" && i.position.set(1e3, 30, 30);
});
i.position.set(1e3, 30, 30);
i.position.set(0, 30, 30);
i.lookAt(0, 0, 0);
const L = new Me(15, 20),
  ee = new J(L.x * 2, L.y * 2, L.x * 8, L.y * 8);
ee.rotateX(-Math.PI * 0.5);
const ve = new xe({ wireframe: !0 }),
  Ie = new x(ee, ve);
t.add(Ie);
let k = !1,
  T = !1;
c.mesh.position.x;
c.mesh.position.z;
$.mesh.position.x;
$.mesh.position.x;
U.mesh.position.x;
U.mesh.position.z;
V.mesh.position.z;
V.mesh.position.x;
e.mesh.position.x;
e.mesh.position.z;
We.mesh.position.x;
const oe = new ue();
i.add(oe);
new ye(oe);
new ge();
e.mesh.position.clone();
let F = 0,
  f = "NULL",
  S = "NULL",
  E = !1;
const Ne = new I(10, 10, 10),
  Ue = new g({ map: _.load(Ae) }),
  y = new x(Ne, Ue);
y.position.set(0, 70, 610);
t.add(y);
const Ve = 1.2,
  $e = 0.0549,
  De = Date.now();
function Oe() {
  const o = Date.now();
  let s = 0;
  s = (o - De) / 100;
  const n = s * ((2 * Math.PI) / 120),
    z = Ve * 600;
  (y.position.x = z * Math.cos(n)),
    (y.position.z = z * Math.sin(n) * (1 - $e) + 10),
    y.rotateY(0.06),
    e.mesh.position.z <= V.mesh.position.z &&
      T == !1 &&
      E == !1 &&
      ((e.mesh.position.z += 0.3),
      e.mesh.position.z >= 17.3 &&
        e.mesh.position.x >= r.mesh.position.x - 3 &&
        e.mesh.position.x <= r.mesh.position.x + 3 &&
        (T = !0),
      e.mesh.position.z >= 19 &&
        (w >= 10
          ? (e.mesh.position.set(0, 0, 0),
            r.mesh.position.set(0, 0, 18),
            h.mesh.position.set(0, 0, -18),
            (f = R),
            (S = G),
            (E = !0),
            console.log("The winner is : ", f, " score : ", w),
            console.log("The loser is : ", S, " score : ", d),
            i.position.set(0, 10, 900),
            O(f))
          : ((e.mesh.position.z = 0), (w += 1)))),
    e.mesh.position.z >= U.mesh.position.z &&
      T == !0 &&
      E == !1 &&
      ((e.mesh.position.z -= 0.3),
      e.mesh.position.z <= -17.3 &&
        e.mesh.position.x >= h.mesh.position.x - 3 &&
        e.mesh.position.x <= h.mesh.position.x + 3 &&
        (T = !1),
      e.mesh.position.z <= -19 &&
        (d >= 10
          ? (e.mesh.position.set(0, 0, 0),
            r.mesh.position.set(0, 0, 18),
            h.mesh.position.set(0, 0, -18),
            (f = G),
            (S = R),
            (E = !0),
            console.log("The winner is : ", f, " score : ", d),
            console.log("The loser is : ", S, " score : ", w),
            i.position.set(0, 10, 900),
            O(f))
          : ((e.mesh.position.z = 0), (d += 1)))),
    e.mesh.position.x <= c.mesh.position.x - 1 &&
      k == !1 &&
      ((e.mesh.position.x += 0.1), e.mesh.position.x >= 14 && (k = !0)),
    e.mesh.position.x >= $.mesh.position.x + 1 &&
      k == !0 &&
      ((e.mesh.position.x -= 0.1), e.mesh.position.x <= -14 && (k = !1)),
    b &&
      r.mesh.position.x < c.mesh.position.x - 3.5 &&
      (r.mesh.position.x += 0.2),
    D &&
      r.mesh.position.x > -c.mesh.position.x + 3.5 &&
      (r.mesh.position.x -= 0.2);
  let A = new m(),
    P = e.mesh.position.clone();
  A.subVectors(e.mesh.position, P).normalize(), P.copy(e.mesh.position);
  let u = d > w ? 0.04 : 0.03;
  const te = Math.random() * 2 - 1,
    se = e.mesh.position.x + A.x * 5 + te;
  e.mesh.position.z <= 0 && (h.mesh.position.x += (se - h.mesh.position.x) * u),
    (h.mesh.position.x = Math.min(
      Math.max(h.mesh.position.x, -c.mesh.position.x + 3.2),
      c.mesh.position.x - 3.2,
    )),
    console.log(u),
    e.mesh.position.z <= -18 &&
      (F++, F > 10 && ((u = Math.max(u, 0.05, 0.005)), console.log(u))),
    Pe(d, w),
    (j.rotation.y += -0.01),
    C.update(),
    a.render(t, i);
}
function Fe() {
  for (
    a.setAnimationLoop(null),
      C && typeof C.dispose == "function" && C.dispose(),
      t.traverse((o) => {
        o.isMesh &&
          (o.geometry && o.geometry.dispose(),
          o.material &&
            (Array.isArray(o.material)
              ? o.material.forEach((s) => {
                  X(s);
                })
              : X(o.material)));
      }),
      a.dispose(),
      a.domElement &&
        a.domElement.parentNode &&
        a.domElement.parentNode.removeChild(a.domElement);
    t.children.length > 0;

  )
    t.remove(t.children[0]);
  (t = null), (i = null), (a = null);
}
function X(o) {
  for (const s in o)
    if (o.hasOwnProperty(s)) {
      const n = o[s];
      n && typeof n == "object" && n.isTexture && n.dispose();
    }
  o.dispose();
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
function Xe() {
    const playerOneScore = d; // Score of player one
const opponentScore = w;  // Score of opponent
sendMatchData(R, playerOneScore, opponentScore);
  Fe(),
    setTimeout(() => {
        Router.go("/home");
    }, 10);
}
