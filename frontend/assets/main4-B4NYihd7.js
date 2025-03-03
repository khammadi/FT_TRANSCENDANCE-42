import Router from "../router.js";
import {
  S as se,
  P as ne,
  W as ie,
  O as ae,
  T as C,
  f as X,
  M as y,
  d as f,
  C as Y,
  a as le,
  b as re,
  c as J,
  s as ce,
  e as me,
  B as de,
  g as Z,
  V as p,
  h as j,
  i as q,
  j as pe,
  R as he,
  k as K,
  l as we,
  A as fe,
  n as xe,
  o as ue,
  m as ye,
} from "./angel-DIHBfhtE.js";
import { e as ge } from "./apllw-CkkzElFC.js";
const Le = "/assets/pacman1-B4JnEj4p.png";
let s = new se(),
  i = new ne(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  l = new ie();
l.setSize(window.innerWidth, window.innerHeight);
i.position.z = 5;
l.setAnimationLoop(De);
document.body.appendChild(l.domElement);
let x = 0,
  h = 0;
const a = document.createElement("canvas");
a.width = 512;
a.height = 128;
const m = a.getContext("2d");
m.font = "Bold 48px Arial";
m.fillStyle = "white";
m.textAlign = "center";
m.textBaseline = "middle";
const B = new URLSearchParams(window.location.search),
  G = B.get("player1") || "Player 1",
  U = B.get("player2") || "Player 2",
  W = B.get("player3") || "Player 3",
  v = new ae(i, l.domElement),
  Ae = new C(),
  Me = new X(300, 60, 40),
  Te = new y({ map: Ae.load(Le) }),
  d = new f(Me, Te);
d.position.y = 0.1;
d.position.x = 0;
d.scale.set(0.003, 0.003, 0.003);
d.rotateX(-Math.PI * 0.5);
s.add(d);
navigator.mediaDevices
  .getUserMedia({ video: !0 })
  .then((e) => {
    const t = document.createElement("video");
    (t.srcObject = e),
      t.play(),
      (t.style.position = "absolute"),
      (t.style.top = "10px"),
      (t.style.left = "10px"),
      (t.style.width = "300px"),
      (t.style.zIndex = "1000"),
      document.body.appendChild(t);
  })
  .catch((e) => {
    console.error("Error accessing the camera: ", e);
  });
function ke(e, t, n) {
  const L = (e.x - 0.5) * t,
    b = (0.5 - e.y) * n;
  return { x: L, y: b };
}
const I = new Hands({
  locateFile: (e) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`,
});
I.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});
I.onResults((e) => {
  if (e.multiHandLandmarks && e.multiHandLandmarks.length > 0) {
    const t = e.multiHandLandmarks[0][8],
      { x: n, y: L } = ke(t, 24, 24);
    d.position.x = n;
  }
});
const A = document.createElement("video");
navigator.mediaDevices.getUserMedia({ video: !0 }).then((e) => {
  (A.srcObject = e),
    A.play(),
    new Camera(A, {
      onFrame: async () => {
        await I.send({ image: A });
      },
      width: 640,
      height: 480,
    }).start();
});
function Ee(e, t, n) {
  m.clearRect(0, 0, a.width, a.height),
    m.fillText(`${G}: ${e}`, a.width / 4, a.height / 2),
    m.fillText(`${U}: ${t}`, (3 * a.width) / 4, a.height / 2),
    m.fillText(`${W}: ${n}`, (2 * a.width) / 4, a.height / 6),
    (Q.needsUpdate = !0);
}
const Q = new Y(a),
  Pe = new le({ map: Q }),
  g = new re(Pe);
g.scale.set(10, 4, 10);
g.position.set(0, 20, 0);
g.lookAt(i.position);
g.rotateZ(Math.PI * 0.5);
s.add(g);
const ve = new C(),
  ze = new J(-500, 60, 40),
  Ce = new y({ map: ve.load(ce) }),
  Se = new f(ze, Ce);
s.add(Se);
const be = new C(),
  Re = new J(500, 60, 40),
  He = new y({ map: be.load(ge) }),
  _ = new f(Re, He);
s.add(_);
const $e = new C(),
  Ge = new X(400, 60, 400, 50),
  Ue = new y({ map: $e.load(me) }),
  S = new f(Ge, Ue);
S.position.y = 0;
S.position.x = 300;
S.rotateY(-Math.PI * 0.5);
s.add(S);
const o = new de(s, 16711680),
  r = new Z(s, new p(0, 0, 18)),
  c = new Z(s, new p(0, 0, -18)),
  We = new j(s, new p(0, 0, -20)),
  Be = new j(s, new p(0, 0, 20)),
  u = new q(s, new p(15, 0, 0)),
  Ie = new q(s, new p(-15, 0, 0));
new pe(s, new p(0, 0, 0));
new he(s, new p(0, 0.2, 0));
let z = !1,
  N = !1,
  O = !1,
  D = !1;
document.addEventListener("keydown", (e) => {
  e.code === "ArrowLeft" && (N = !0),
    e.code === "ArrowRight" && (z = !0),
    e.key === "a" && (O = !0),
    e.key === "d" && (D = !0),
    r.mesh.position.x == 0.1 && (z = !1);
});
document.addEventListener("keyup", (e) => {
  e.code === "ArrowLeft" && (N = !1),
    e.code === "ArrowRight" && (z = !1),
    e.key === "a" && (O = !1),
    e.key === "d" && (D = !1),
    e.code === "ArrowUp" &&
      (i.position.set(1e3, 30, 30), i.position.set(180, 30, 30)),
    e.code === "ArrowDown" && i.position.set(1e3, 30, 30);
});
i.position.set(1e3, 30, 30);
i.position.set(0, 30, 30);
i.lookAt(0, 0, 0);
const M = new ye(15, 20),
  ee = new K(M.x * 2, M.y * 2, M.x * 8, M.y * 8);
ee.rotateX(-Math.PI * 0.5);
const Ne = new we({ wireframe: !0 }),
  Oe = new f(ee, Ne);
s.add(Oe);
let T = !1,
  k = !1;
const te = new fe();
i.add(te);
function R(e) {
  const t = document.createElement("canvas"),
    n = t.getContext("2d");
  (t.width = 512),
    (t.height = 128),
    (n.font = "30px Verdana"),
    (n.fillStyle = "blue"),
    (n.textAlign = "center"),
    n.fillText(`Congrats ${e} you won 🏓`, t.width / 2, t.height / 2);
  const L = new Y(t),
    b = new y({ map: L, transparent: !0 }),
    oe = new K(100, 20),
    V = new f(oe, b);
  V.position.set(0, 10, 800),
    s.add(V),
    setTimeout(() => {
      Fe();
    }, 1e4);
}
new xe(te);
new ue();
let w = "NULL",
  E = "NULL",
  P = !1,
  H = 0,
  $ = 0;
function De() {
  Math.abs(d.position.x - o.mesh.position.x) < 0.05 &&
    (console.log("YES"),
    ($ += 1),
    console.log(Math.abs(d.position.x - o.mesh.position.x))),
    $ == 2 && ((H += 1), ($ = 0)),
    H >= 6 &&
      (console.log("The winner is : ", W, " score : ", h),
      R(W),
      i.position.set(0, 10, 900),
      o.mesh.position.set(1e3, 1e3, 1e3)),
    o.mesh.position.z <= Be.mesh.position.z &&
      k == !1 &&
      P == !1 &&
      ((o.mesh.position.z += 0.4),
      o.mesh.position.z >= 17.3 &&
        o.mesh.position.x >= r.mesh.position.x - 3 &&
        o.mesh.position.x <= r.mesh.position.x + 3 &&
        (k = !0),
      o.mesh.position.z >= 19 &&
        (h >= 6
          ? (o.mesh.position.set(0, 0, 0),
            r.mesh.position.set(0, 0, 18),
            c.mesh.position.set(0, 0, -18),
            (w = U),
            (E = G),
            (P = !0),
            i.position.set(0, 10, 900),
            console.log("The winner is : ", w, " score : ", h),
            console.log("The loser is : ", E, " score : ", x),
            R(w),
            o.mesh.position.set(1e3, 1e3, 1e3))
          : ((o.mesh.position.z = 0), (h += 1)))),
    o.mesh.position.z >= We.mesh.position.z &&
      k == !0 &&
      P == !1 &&
      ((o.mesh.position.z -= 0.4),
      o.mesh.position.z <= -17.3 &&
        o.mesh.position.x >= c.mesh.position.x - 3 &&
        o.mesh.position.x <= c.mesh.position.x + 3 &&
        (k = !1),
      o.mesh.position.z <= -19 &&
        (x >= 6
          ? (o.mesh.position.set(0, 0, 0),
            r.mesh.position.set(0, 0, 18),
            c.mesh.position.set(0, 0, -18),
            (w = G),
            (E = U),
            (P = !0),
            i.position.set(0, 10, 900),
            console.log("The winner is : ", w, " score : ", x),
            console.log("The loser is : ", E, " score : ", h),
            R(w),
            o.mesh.position.set(1e3, 1e3, 1e3))
          : ((o.mesh.position.z = 0), (x += 1)))),
    o.mesh.position.x <= u.mesh.position.x - 1 &&
      T == !1 &&
      ((o.mesh.position.x += 0.1), o.mesh.position.x >= 14 && (T = !0)),
    o.mesh.position.x >= Ie.mesh.position.x + 1 &&
      T == !0 &&
      ((o.mesh.position.x -= 0.1), o.mesh.position.x <= -14 && (T = !1)),
    z &&
      r.mesh.position.x < u.mesh.position.x - 3.5 &&
      (r.mesh.position.x += 0.2),
    N &&
      r.mesh.position.x > -u.mesh.position.x + 3.5 &&
      (r.mesh.position.x -= 0.2),
    O &&
      c.mesh.position.x < u.mesh.position.x - 3.5 &&
      (c.mesh.position.x += 0.2),
    D &&
      c.mesh.position.x > -u.mesh.position.x + 3.5 &&
      (c.mesh.position.x -= 0.2),
    Ee(x, h, H),
    (_.rotation.y += -0.01),
    v.update(),
    l.render(s, i);
}
function Ve() {
  for (
    l.setAnimationLoop(null),
      v && typeof v.dispose == "function" && v.dispose(),
      s.traverse((e) => {
        e.isMesh &&
          (e.geometry && e.geometry.dispose(),
          e.material &&
            (Array.isArray(e.material)
              ? e.material.forEach((t) => {
                  F(t);
                })
              : F(e.material)));
      }),
      l.dispose(),
      l.domElement &&
        l.domElement.parentNode &&
        l.domElement.parentNode.removeChild(l.domElement);
    s.children.length > 0;

  )
    s.remove(s.children[0]);
  (s = null), (i = null), (l = null);
}
function F(e) {
  for (const t in e)
    if (e.hasOwnProperty(t)) {
      const n = e[t];
      n && typeof n == "object" && n.isTexture && n.dispose();
    }
  e.dispose();
}
function Fe() {
    const matchData = {
      mode: "3P",
      user_score: x, 
      opponents: [
        { name: U, score: h },
        { name: W, score: H }
      ]
    };
      fetch("http://localhost:8000/api/games/stats/update/multiplayer/", {
      method: "POST",
      credentials : "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(matchData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Match saved:", data);
      Ve(); 
      setTimeout(() => {
        Router.go("/home");
    }, 10);
    })
    .catch(error => {
      console.error("Error saving match:", error);
      Ve();
      setTimeout(() => {
        Router.go("/home");
    }, 10);
    });
  }
  