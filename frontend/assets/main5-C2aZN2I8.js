import Router from "../router.js";  
import {
  S as Ae,
  P as ze,
  W as $e,
  C as W,
  a as Pe,
  b as Me,
  O as Se,
  T as se,
  c as ie,
  M as P,
  s as ke,
  d as f,
  f as Ee,
  e as Ce,
  B as ve,
  g as ge,
  V as $,
  h as xe,
  i as ue,
  j as Ne,
  R as Re,
  k as ne,
  l as Ue,
  A as We,
  m as De,
} from "./angel-DIHBfhtE.js";
const Ge = "/assets/saturn-qcj37Nsw.png";
let o = new Ae(),
  h = new ze(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  g = new $e();
g.setSize(window.innerWidth, window.innerHeight);
h.position.z = 5;
g.setAnimationLoop(it);
document.body.appendChild(g.domElement);
let n = 0,
  a = 0;
const s = document.createElement("canvas");
s.width = 512;
s.height = 128;
const c = s.getContext("2d");
c.font = "Bold 48px Arial";
c.fillStyle = "white";
c.textAlign = "center";
c.textBaseline = "middle";
const D = new URLSearchParams(window.location.search);
D.get("mode");
const j = D.get("player1") || "Player 1",
  ee = D.get("player2") || "Player 2",
  te = D.get("player3") || "Player 3",
  oe = D.get("player4") || "Player 4",
  Be = Date.now(),
  ae = Date.now();
let me = (Date.now() - ae) / 1e3,
  pe = (Date.now() - ae) / 1e3,
  de = (Date.now() - ae) / 1e3;
function Ie(e, l) {
  c.clearRect(0, 0, s.width, s.height),
    c.fillText(`${j}: ${e}`, s.width / 4, s.height / 2),
    c.fillText(`${ee}: ${l}`, (3 * s.width) / 4, s.height / 2),
    i === 0.5 &&
      ((me += 5e-4),
      t.mesh.position.set(0, 0, 0),
      h.position.set(0, 10, 900),
      me > 0.1 && (i = 1)),
    i === 1 &&
      (h.position.set(0, 30, 30),
      c.clearRect(0, 0, s.width, s.height),
      c.fillText(`${te}: ${e}`, s.width / 4, s.height / 2),
      c.fillText(`${oe}: ${l}`, (3 * s.width) / 4, s.height / 2)),
    i === 1.5 &&
      ((pe += 5e-4),
      t.mesh.position.set(0, 0, 0),
      h.position.set(0, 10, 900),
      pe > 0.1 && (i = 3)),
    i === 3.5 &&
      ((de += 5e-4),
      t.mesh.position.set(0, 0, 0),
      h.position.set(0, 10, 900),
      de > 0.1 && (i = 2)),
    i === 3 &&
      (h.position.set(0, 30, 30),
      c.clearRect(0, 0, s.width, s.height),
      c.fillText(`${L}: ${e}`, s.width / 4, s.height / 2),
      c.fillText(`${A}: ${l}`, (3 * s.width) / 4, s.height / 2)),
    i === 2 &&
      (h.position.set(0, 30, 30),
      c.clearRect(0, 0, s.width, s.height),
      c.fillText(`${y}: ${e}`, s.width / 4, s.height / 2),
      c.fillText(`${T}: ${l}`, (3 * s.width) / 4, s.height / 2)),
    i === 2.5 && (t.mesh.position.set(0, 0, 0), h.position.set(0, 10, 1900)),
    (ye.needsUpdate = !0);
}
function k(e, l) {
  const r = document.createElement("canvas"),
    x = r.getContext("2d");
  (r.width = 512),
    (r.height = 128),
    (x.font = "30px Arial"),
    (x.fillStyle = "brown"),
    (x.textAlign = "center"),
    x.fillText(`The first winner is ${e}`, r.width / 2, r.height / 2),
    console.log("the winner of the first game :", e, "  score : ");
  const J = new W(r),
    K = new P({ map: J, transparent: !0 }),
    S = new ne(100, 20),
    B = new f(S, K);
  if ((B.position.set(-100, 70, 800), o.add(B), l === 0.5)) {
    o.remove(B);
    const w = document.createElement("canvas"),
      u = w.getContext("2d");
    (w.width = 512),
      (w.height = 128),
      (u.font = "30px Arial"),
      (u.fillStyle = "brown"),
      (u.textAlign = "center"),
      u.fillText(`The second winner is ${e}`, w.width / 2, w.height / 2);
    const Q = new W(w),
      _ = new P({ map: Q, transparent: !0 }),
      C = new f(S, _);
    C.position.set(-100, 60, 800), o.add(C);
  }
  if (l === 3.5) {
    o.remove(B);
    const w = document.createElement("canvas"),
      u = w.getContext("2d");
    (w.width = 512),
      (w.height = 128),
      (u.font = "30px Arial"),
      (u.fillStyle = "green"),
      (u.textAlign = "center"),
      u.fillText(`Third place goes to ${e}`, w.width / 2, w.height / 2);
    const Q = new W(w),
      _ = new P({ map: Q, transparent: !0 }),
      C = new f(S, _);
    C.position.set(100, 70, 800), o.add(C);
  }
}
function fe(e) {
  const l = document.createElement("canvas"),
    r = l.getContext("2d");
  (l.width = 512),
    (l.height = 128),
    (r.font = "30px Arial"),
    (r.fillStyle = "brown"),
    (r.textAlign = "center"),
    r.fillText(
      `Congrats ${e} for taking the 1st place`,
      l.width / 2,
      l.height / 2,
    );
  const x = new W(l),
    J = new P({ map: x, transparent: !0 }),
    K = new ne(100, 20),
    S = new f(K, J);
  S.position.set(0, 10, 1700),
    o.add(S),
    (z = e),
    setTimeout(() => {
      at();
    }, 1e4);
}
const ye = new W(s),
  be = new Pe({ map: ye }),
  G = new Me(be);
G.scale.set(10, 4, 10);
G.position.set(0, 20, 0);
G.lookAt(h.position);
G.rotateZ(Math.PI * 0.5);
o.add(G);
const V = new Se(h, g.domElement),
  Oe = new se(),
  Ve = new ie(-500, 60, 40),
  He = new P({ map: Oe.load(ke) }),
  Ye = new f(Ve, He);
o.add(Ye);
const qe = new se(),
  Xe = new ie(500, 60, 40),
  E = new ie(5, 10, 10),
  M = new P({ map: qe.load(Ge) }),
  Te = new f(Xe, M),
  p = new f(E, M),
  H = new f(E, M),
  Y = new f(E, M),
  q = new f(E, M),
  X = new f(E, M),
  Z = new f(E, M);
H.position.set(0, 0, 600);
p.position.set(0, 70, 610);
Y.position.set(0, -20, 620);
q.position.set(0, 30, 700);
X.position.set(0, 60, 700);
Z.position.set(0, -50, 700);
o.add(Te);
o.add(p);
o.add(H);
o.add(Y);
o.add(q);
o.add(X);
o.add(Z);
const Ze = new se(),
  Fe = new Ee(400, 60, 400, 50),
  Je = new P({ map: Ze.load(Ce) }),
  le = new f(Fe, Je);
le.position.y = 0;
le.position.x = 300;
le.rotateY(-Math.PI * 0.5);
const t = new ve(o, 16711680),
  m = new ge(o, new $(0, 0, 18)),
  d = new ge(o, new $(0, 0, -18)),
  Ke = new xe(o, new $(0, 0, -20)),
  Qe = new xe(o, new $(0, 0, 20)),
  v = new ue(o, new $(15, 0, 0)),
  _e = new ue(o, new $(-15, 0, 0));
new Ne(o, new $(0, 0, 0));
new Re(o, new $(0, 0.2, 0));
let F = !1,
  re = !1,
  he = !1,
  ce = !1;
document.addEventListener("keydown", (e) => {
  e.code === "ArrowLeft" && (re = !0),
    e.code === "ArrowRight" && (F = !0),
    e.key === "a" && (he = !0),
    e.key === "d" && (ce = !0),
    m.mesh.position.x == 0.1 && (F = !1);
});
document.addEventListener("keyup", (e) => {
  e.code === "ArrowLeft" && (re = !1),
    e.code === "ArrowRight" && (F = !1),
    e.key === "a" && (he = !1),
    e.key === "d" && (ce = !1),
    e.code === "ArrowUp" &&
      (h.position.set(1e3, 30, 30), h.position.set(180, 30, 30)),
    e.code === "ArrowDown" && h.position.set(1e3, 30, 30);
});
h.position.set(1e3, 30, 30);
h.position.set(0, 30, 30);
h.lookAt(0, 0, 0);
const I = new De(15, 20),
  Le = new ne(I.x * 2, I.y * 2, I.x * 8, I.y * 8);
Le.rotateX(-Math.PI * 0.5);
const je = new Ue({ wireframe: !0 }),
  et = new f(Le, je);
o.add(et);
let b = !1,
  O = !1;
const tt = new We();
h.add(tt);
let y = "NULL",
  T = "NULL",
  L = "NULL",
  A = "NULL",
  i = 0;
const ot = 1,
  st = 0.016708;
let z = "NULL",
  N = "NULL",
  R = "NULL",
  U = "NULL";

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
function it() {
  console.log("1 : ", z),
    console.log("2 : ", N),
    console.log("3 : ", R),
    console.log("4 : ", U);
  const e = Date.now();
  let l = 0;
  l = (e - Be) / 100;
  const r = l * ((2 * Math.PI) / 30),
    x = ot * 600;
  (p.position.x = x * Math.cos(r)),
    (p.position.z = x * Math.sin(r) * (1 - st) + 10),
    p.rotateY(0.06),
    (H.position.x = p.position.x + 1),
    (H.position.z = p.position.z + 10),
    (Y.position.x = p.position.x + 1),
    (Y.position.z = p.position.z + 20),
    (q.position.x = p.position.x + 1),
    (q.position.z = p.position.z + 30),
    (X.position.x = p.position.x + 1),
    (X.position.z = p.position.z + 40),
    (Z.position.x = p.position.x + 1),
    (Z.position.z = p.position.z + 50),
    t.mesh.position.z <= Qe.mesh.position.z &&
      O == !1 &&
      ((t.mesh.position.z += 0.4),
      t.mesh.position.z >= 17.3 &&
        t.mesh.position.x >= m.mesh.position.x - 3 &&
        t.mesh.position.x <= m.mesh.position.x + 3 &&
        (O = !0),
      t.mesh.position.z >= 19 &&
        ((t.mesh.position.z = 0),
        a < 6
          ? (a += 1)
          : a >= 5 && i === 0
            ? ((y = ee),
              (L = j),
              (i = 0.5),
              console.log(
                "The winner is of the first game : ",
                y,
                " score ",
                a,
              ),
              console.log("The loser is of the first game : ", L, " score ", n),
              sendMatchData(y,n,a),
              k(y, 1),
              (a = 0),
              (n = 0),
              t.mesh.position.set(0, 0, 0),
              m.mesh.position.set(0, 0, 18),
              d.mesh.position.set(0, 0, -18))
            : a >= 5 && i === 1
              ? ((T = oe),
                (A = te),
                (i = 1.5),
                console.log(
                  "The winner of the second game : ",
                  T,
                  " score ",
                  a,
                ),
                console.log("The loser of the second game : ", A, " score ", n),
                k(T, 0.5),
                (a = 0),
                (n = 0),
                t.mesh.position.set(0, 0, 0),
                m.mesh.position.set(0, 0, 18),
                d.mesh.position.set(0, 0, -18))
              : a >= 5 && i === 3
                ? ((i = 3.5),
                  k(A, 3.5),
                  (R = A),
                  (U = L),
                  console.log(
                    "The winner of the third game : ",
                    R,
                    " score ",
                    a,
                  ),
                  console.log(
                    "The loser of the third game : ",
                    U,
                    " score ",
                    n,
                  ),
                  (a = 0),
                  (n = 0),
                  t.mesh.position.set(0, 0, 0),
                  m.mesh.position.set(0, 0, 18),
                  d.mesh.position.set(0, 0, -18))
                : a >= 5 &&
                  i === 2 &&
                  ((z = T),
                  (i = 2.5),
                  (N = y),
                  console.log("The winner of the 4th game : ", z, " score ", a),
                  console.log("The loser of the 4th game : ", N, " score ", n),
                  fe(z),
                  (a = 0),
                  (n = 0),
                  t.mesh.position.set(0, 0, 0),
                  m.mesh.position.set(0, 0, 18),
                  d.mesh.position.set(0, 0, -18)))),
    t.mesh.position.z >= Ke.mesh.position.z &&
      O == !0 &&
      ((t.mesh.position.z -= 0.4),
      t.mesh.position.z <= -17.3 &&
        t.mesh.position.x >= d.mesh.position.x - 3 &&
        t.mesh.position.x <= d.mesh.position.x + 3 &&
        (O = !1),
      t.mesh.position.z <= -19 &&
        ((t.mesh.position.z = 0),
        n < 6
          ? (n += 1)
          : n >= 5 && i === 0
            ? ((y = j),
              (L = ee),
              (i = 0.5),
              console.log("The winner of the first game : ", y, " score ", n),
              console.log("The loser of the first game : ", L, " score ", a),
              sendMatchData(L,n,a),
              k(y, 1),
              (a = 0),
              (n = 0),
              t.mesh.position.set(0, 0, 0),
              m.mesh.position.set(0, 0, 18),
              d.mesh.position.set(0, 0, -18))
            : n >= 5 && i === 1
              ? ((T = te),
                (A = oe),
                (i = 1.5),
                console.log(
                  "The winner of the second game : ",
                  T,
                  " score ",
                  n,
                ),
                console.log("The loser of the second game : ", A, " score ", a),
                k(T, 0.5),
                (n = 0),
                (a = 0),
                t.mesh.position.set(0, 0, 0),
                m.mesh.position.set(0, 0, 18),
                d.mesh.position.set(0, 0, -18))
              : n >= 5 && i === 3
                ? ((i = 3.5),
                  (R = L),
                  (U = A),
                  console.log(
                    "The winner of the third game : ",
                    R,
                    " score ",
                    n,
                  ),
                  console.log(
                    "The loser of the third game : ",
                    U,
                    " score ",
                    a,
                  ),
                  k(L, 3.5),
                  (n = 0),
                  (a = 0),
                  t.mesh.position.set(0, 0, 0),
                  m.mesh.position.set(0, 0, 18),
                  d.mesh.position.set(0, 0, -18))
                : n >= 5 &&
                  i === 2 &&
                  ((z = y),
                  (i = 2.5),
                  (N = T),
                  console.log("The winner of the 4th game : ", z, " score ", n),
                  console.log("The loser of the 4th game : ", N, " score ", a),
                  sendMatchData(N,a,n),
                  fe(z),
                  (n = 0),
                  (a = 0),
                  t.mesh.position.set(0, 0, 0),
                  m.mesh.position.set(0, 0, 18),
                  d.mesh.position.set(0, 0, -18)))),
    t.mesh.position.x <= v.mesh.position.x - 1 &&
      b == !1 &&
      ((t.mesh.position.x += 0.1), t.mesh.position.x >= 14 && (b = !0)),
    t.mesh.position.x >= _e.mesh.position.x + 1 &&
      b == !0 &&
      ((t.mesh.position.x -= 0.1), t.mesh.position.x <= -14 && (b = !1)),
    F &&
      m.mesh.position.x < v.mesh.position.x - 3.5 &&
      (m.mesh.position.x += 0.2),
    re &&
      m.mesh.position.x > -v.mesh.position.x + 3.5 &&
      (m.mesh.position.x -= 0.2),
    he &&
      d.mesh.position.x < v.mesh.position.x - 3.5 &&
      (d.mesh.position.x += 0.2),
    ce &&
      d.mesh.position.x > -v.mesh.position.x + 3.5 &&
      (d.mesh.position.x -= 0.2),
    Ie(n, a),
    (Te.rotation.y += -0.01),
    V.update(),
    g.render(o, h);
}
function nt() {
  for (
    g.setAnimationLoop(null),
      V && typeof V.dispose == "function" && V.dispose(),
      o.traverse((e) => {
        e.isMesh &&
          (e.geometry && e.geometry.dispose(),
          e.material &&
            (Array.isArray(e.material)
              ? e.material.forEach((l) => {
                  we(l);
                })
              : we(e.material)));
      }),
      g.dispose(),
      g.domElement &&
        g.domElement.parentNode &&
        g.domElement.parentNode.removeChild(g.domElement);
    o.children.length > 0;

  )
    o.remove(o.children[0]);
  (o = null), (h = null), (g = null);
}
function we(e) {
  for (const l in e)
    if (e.hasOwnProperty(l)) {
      const r = e[l];
      r && typeof r == "object" && r.isTexture && r.dispose();
    }
  e.dispose();
}
function at() {
  nt(),
    setTimeout(() => {
      Router.go("/home");
    }, 10);
}
