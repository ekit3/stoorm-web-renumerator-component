var pt = Object.defineProperty;
var Dt = (e, t, n) => t in e ? pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (Dt(e, typeof t != "symbol" ? t + "" : t, n), n);
function y() {
}
function gt(e) {
  return e();
}
function rt() {
  return /* @__PURE__ */ Object.create(null);
}
function O(e) {
  e.forEach(gt);
}
function dt(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function mt(e) {
  return Object.keys(e).length === 0;
}
function l(e, t) {
  e.appendChild(t);
}
function W(e, t, n) {
  const s = yt(e);
  if (!s.getElementById(t)) {
    const o = N("style");
    o.id = t, o.textContent = n, zt(s, o);
  }
}
function yt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function zt(e, t) {
  return l(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function C(e, t, n) {
  e.insertBefore(t, n || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function N(e) {
  return document.createElement(e);
}
function b(e) {
  return document.createTextNode(e);
}
function m() {
  return b(" ");
}
function ot(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function d(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ht(e) {
  return Array.from(e.childNodes);
}
function ut(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function xt(e, t, n, s) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, s ? "important" : "");
}
function At(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let F;
function k(e) {
  F = e;
}
const A = [], Q = [];
let $ = [];
const G = [], $t = /* @__PURE__ */ Promise.resolve();
let R = !1;
function vt() {
  R || (R = !0, $t.then(v));
}
function B(e) {
  $.push(e);
}
function at(e) {
  G.push(e);
}
const P = /* @__PURE__ */ new Set();
let x = 0;
function v() {
  if (x !== 0)
    return;
  const e = F;
  do {
    try {
      for (; x < A.length; ) {
        const t = A[x];
        x++, k(t), Lt(t.$$);
      }
    } catch (t) {
      throw A.length = 0, x = 0, t;
    }
    for (k(null), A.length = 0, x = 0; Q.length; )
      Q.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const n = $[t];
      P.has(n) || (P.add(n), n());
    }
    $.length = 0;
  } while (A.length);
  for (; G.length; )
    G.pop()();
  R = !1, P.clear(), k(e);
}
function Lt(e) {
  if (e.fragment !== null) {
    e.update(), O(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(B);
  }
}
function Tt(e) {
  const t = [], n = [];
  $.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), $ = t;
}
const _ = /* @__PURE__ */ new Set();
let bt;
function Z(e, t) {
  e && e.i && (_.delete(e), e.i(t));
}
function ct(e, t, n, s) {
  if (e && e.o) {
    if (_.has(e))
      return;
    _.add(e), bt.c.push(() => {
      _.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else
    s && s();
}
function lt(e, t, n) {
  const s = e.$$.props[t];
  s !== void 0 && (e.$$.bound[s] = n, n(e.$$.ctx[s]));
}
function Mt(e) {
  e && e.c();
}
function J(e, t, n) {
  const { fragment: s, after_update: o } = e.$$;
  s && s.m(t, n), B(() => {
    const a = e.$$.on_mount.map(gt).filter(dt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...a) : O(a), e.$$.on_mount = [];
  }), o.forEach(B);
}
function H(e, t) {
  const n = e.$$;
  n.fragment !== null && (Tt(n.after_update), O(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function kt(e, t) {
  e.$$.dirty[0] === -1 && (A.push(e), vt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function X(e, t, n, s, o, a, i = null, u = [-1]) {
  const c = F;
  k(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: y,
    not_equal: o,
    bound: rt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: rt(),
    dirty: u,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  i && i(r.root);
  let I = !1;
  if (r.ctx = n ? n(e, t.props || {}, (g, p, ...M) => {
    const j = M.length ? M[0] : p;
    return r.ctx && o(r.ctx[g], r.ctx[g] = j) && (!r.skip_bound && r.bound[g] && r.bound[g](j), I && kt(e, g)), p;
  }) : [], r.update(), I = !0, O(r.before_update), r.fragment = s ? s(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = ht(t.target);
      r.fragment && r.fragment.l(g), g.forEach(S);
    } else
      r.fragment && r.fragment.c();
    t.intro && Z(e.$$.fragment), J(e, t.target, t.anchor), v();
  }
  k(c);
}
let Nt;
typeof HTMLElement == "function" && (Nt = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(i) {
        return () => {
          let u;
          return {
            c: function() {
              u = N("slot"), i !== "default" && d(u, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(I, g) {
              C(I, u, g);
            },
            d: function(I) {
              I && S(u);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, o = At(this);
      for (const i of this.$$s)
        i in o && (s[i] = [n(i)]);
      for (const i of this.attributes) {
        const u = this.$$g_p(i.name);
        u in this.$$d || (this.$$d[u] = E(u, i.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const a = () => {
        this.$$r = !0;
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const u = E(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(a), a();
      for (const i in this.$$l)
        for (const u of this.$$l[i]) {
          const c = this.$$c.$on(i, u);
          this.$$l_u.set(u, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = E(t, s, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function E(e, t, n, s) {
  var a;
  const o = (a = n[e]) == null ? void 0 : a.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function K(e, t, n, s, o, a) {
  let i = class extends Nt {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((u) => {
    Object.defineProperty(i.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(c) {
        var r;
        c = E(u, c, t), this.$$d[u] = c, (r = this.$$c) == null || r.$set({ [u]: c });
      }
    });
  }), s.forEach((u) => {
    Object.defineProperty(i.prototype, u, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[u];
      }
    });
  }), a && (i = a(i)), e.element = /** @type {any} */
  i, i;
}
class q {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    H(this, 1), this.$destroy = y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!dt(n))
      return y;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const o = s.indexOf(n);
      o !== -1 && s.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !mt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
class St {
  constructor(t) {
    f(this, "config");
    this.config = t;
  }
  getRate(t) {
    return this.config.jobs.find((n) => n.name === t);
  }
  getRateList() {
    return this.config.jobs.sort((t, n) => t.name > n.name ? 1 : t.name < n.name ? -1 : 0);
  }
  getMinExperienceValue() {
    return this.config.min_experience;
  }
  getMinTJMValue() {
    return this.config.tjm_base;
  }
  getSalary(t) {
    const n = this.config.fixed_salary * 12 + (t - this.config.tjm_base) / 2 * (216 - this.config.group_days) * 1.1153846153846154;
    return Math.round(n);
  }
  getJoinUsLink() {
    return this.config.join_link;
  }
}
const wt = 3400, _t = 0, Et = 15, Qt = 450, Ct = "https://stoorm.fr/#contact", Ut = {
  fixed_salary: wt,
  min_salary: _t,
  group_days: Et,
  tjm_base: Qt,
  join_link: Ct
};
class Yt extends St {
  constructor() {
    super(Ut);
  }
}
class Pt {
  static create(t) {
    return new Yt();
  }
}
function Gt(e) {
  W(e, "svelte-198d4ud", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-198d4ud.svelte-198d4ud{display:flex;padding:77px 40px;width:calc(100% - 80px);flex-shrink:0;border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);box-shadow:0 24px 44px 0 rgba(0, 0, 0, 0.25);backdrop-filter:blur(22px);flex-direction:column}.renumerator.svelte-198d4ud .block.svelte-198d4ud{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;justify-content:center}.renumerator.svelte-198d4ud .block span.title.svelte-198d4ud{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block;flex:1}.renumerator.svelte-198d4ud .flex.svelte-198d4ud{text-align:justify;margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-198d4ud .flex p.svelte-198d4ud{margin:0 0 30px}.renumerator.svelte-198d4ud .title.svelte-198d4ud{margin-bottom:16px;text-align:left}.renumerator.svelte-198d4ud .container.svelte-198d4ud{display:flex;align-self:center;width:100%;margin-top:120px}@media screen and (max-width: 1023px){.renumerator.svelte-198d4ud .container.svelte-198d4ud{margin-top:5px}.renumerator.svelte-198d4ud .block span.title.svelte-198d4ud{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-198d4ud .block.svelte-198d4ud{display:flex;flex-direction:column;width:100%;box-sizing:border-box;justify-content:center}.renumerator.svelte-198d4ud .container.svelte-198d4ud{display:flex;align-self:center;width:100%;margin-top:0}.renumerator.svelte-198d4ud .flex.svelte-198d4ud{text-align:justify;margin:5px 20px 0;font-size:1em}.renumerator.svelte-198d4ud .flex p.svelte-198d4ud{margin:0 0 20px}.renumerator.svelte-198d4ud .block span.title.svelte-198d4ud{font-size:1.25em}}');
}
function Rt(e) {
  let t;
  return {
    c() {
      t = N("div"), t.innerHTML = '<div class="container svelte-198d4ud"><div class="block svelte-198d4ud"><span class="title svelte-198d4ud">Découvrez votre futur salaire !</span> <div class="flex svelte-198d4ud"><p class="svelte-198d4ud">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-198d4ud">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', d(t, "class", "renumerator svelte-198d4ud");
    },
    m(n, s) {
      C(n, t, s);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && S(t);
    }
  };
}
function Bt(e) {
  return [];
}
let ft = class extends q {
  constructor(t) {
    super(), X(this, t, Bt, Rt, V, {}, Gt);
  }
};
K(ft, {}, [], [], !0);
const Zt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Jt = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", Ht = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function Vt(e) {
  W(e, "svelte-vkg0rp", ".pay.svelte-vkg0rp.svelte-vkg0rp{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center}.pay.svelte-vkg0rp span.title.svelte-vkg0rp{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-vkg0rp span.line.svelte-vkg0rp{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-vkg0rp span.amount.svelte-vkg0rp{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-vkg0rp a.svelte-vkg0rp{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-vkg0rp .block.svelte-vkg0rp{display:flex;flex-direction:column;width:100%;box-sizing:border-box}.pay.svelte-vkg0rp .block span.title.svelte-vkg0rp{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-vkg0rp .flex.svelte-vkg0rp{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-vkg0rp .flex button.svelte-vkg0rp{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-vkg0rp .flex span.svelte-vkg0rp{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-vkg0rp .title.svelte-vkg0rp{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-vkg0rp span.title.svelte-vkg0rp{font-size:0.75em}}.img-btn.svelte-vkg0rp.svelte-vkg0rp{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-vkg0rp.svelte-vkg0rp{width:1.5em}.pay.svelte-vkg0rp .flex span.svelte-vkg0rp{font-size:1.5em}.pay.svelte-vkg0rp .block.svelte-vkg0rp{width:100%}}");
}
function Wt(e) {
  let t, n, s, o, a, i, u, c, r, I, g, p, M, j, D, tt, L, U, et, nt, h, st, w, Y, it;
  return {
    c() {
      t = N("div"), n = N("div"), s = N("span"), s.textContent = "Votre TJM", o = m(), a = N("div"), i = N("button"), i.innerHTML = `<img src="${Zt}" alt="Minus Svg icon" class="img-btn svelte-vkg0rp"/>`, u = m(), c = N("span"), r = b(
        /*tjm*/
        e[0]
      ), I = m(), g = N("button"), g.innerHTML = `<img src="${Jt}" alt="Plus Svg icon" class="img-btn svelte-vkg0rp"/>`, p = m(), M = N("span"), j = m(), D = N("span"), D.textContent = "Votre salaire annuel brut", tt = m(), L = N("span"), U = b(
        /*amount*/
        e[2]
      ), et = b(" €"), nt = m(), h = N("a"), st = b("Envie de nous rejoindre ?"), d(s, "class", "title svelte-vkg0rp"), d(i, "class", "svelte-vkg0rp"), d(c, "class", "svelte-vkg0rp"), d(g, "class", "svelte-vkg0rp"), d(a, "class", "flex svelte-vkg0rp"), d(n, "class", "block svelte-vkg0rp"), d(M, "class", "line svelte-vkg0rp"), d(D, "class", "title svelte-vkg0rp"), d(L, "class", "amount svelte-vkg0rp"), d(h, "href", w = /*rateManager*/
      e[1].getJoinUsLink()), d(h, "class", "svelte-vkg0rp"), d(t, "class", "pay svelte-vkg0rp"), xt(t, "background", "url(" + Ht + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(z, T) {
      C(z, t, T), l(t, n), l(n, s), l(n, o), l(n, a), l(a, i), l(a, u), l(a, c), l(c, r), l(a, I), l(a, g), l(t, p), l(t, M), l(t, j), l(t, D), l(t, tt), l(t, L), l(L, U), l(L, et), l(t, nt), l(t, h), l(h, st), Y || (it = [
        ot(
          i,
          "click",
          /*click_handler*/
          e[4]
        ),
        ot(
          g,
          "click",
          /*click_handler_1*/
          e[5]
        )
      ], Y = !0);
    },
    p(z, [T]) {
      T & /*tjm*/
      1 && ut(
        r,
        /*tjm*/
        z[0]
      ), T & /*amount*/
      4 && ut(
        U,
        /*amount*/
        z[2]
      ), T & /*rateManager*/
      2 && w !== (w = /*rateManager*/
      z[1].getJoinUsLink()) && d(h, "href", w);
    },
    i: y,
    o: y,
    d(z) {
      z && S(t), Y = !1, O(it);
    }
  };
}
let Ft = 2e3;
function Xt(e, t, n) {
  let { rateManager: s } = t, { tjm: o = 600 } = t, a = s.getMinTJMValue(), { amount: i = 450 } = t;
  const u = () => n(0, o = Math.max(a, o - 10)), c = () => n(0, o = Math.min(Ft, o + 10));
  return e.$$set = (r) => {
    "rateManager" in r && n(1, s = r.rateManager), "tjm" in r && n(0, o = r.tjm), "amount" in r && n(2, i = r.amount);
  }, [o, s, i, a, u, c];
}
class It extends q {
  constructor(t) {
    super(), X(this, t, Xt, Wt, V, { rateManager: 1, tjm: 0, amount: 2 }, Vt);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), v();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(t) {
    this.$$set({ tjm: t }), v();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(t) {
    this.$$set({ amount: t }), v();
  }
}
K(It, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function Kt(e) {
  W(e, "svelte-18e5n52", `.component.svelte-18e5n52{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-18e5n52{min-width:280px;width:50%;position:relative;z-index:1;margin:0 22px 0}.block.svelte-18e5n52:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-18e5n52{width:100%;margin-bottom:1.5em}.component.svelte-18e5n52{flex-direction:column}}`);
}
function qt(e) {
  let t, n, s, o, a, i, u, c, r;
  s = new ft({});
  function I(M) {
    e[4](M);
  }
  function g(M) {
    e[5](M);
  }
  let p = { rateManager: (
    /*rateManager*/
    e[2]
  ) };
  return (
    /*tjm*/
    e[0] !== void 0 && (p.tjm = /*tjm*/
    e[0]), /*amount*/
    e[1] !== void 0 && (p.amount = /*amount*/
    e[1]), i = new It({ props: p }), Q.push(() => lt(i, "tjm", I)), Q.push(() => lt(i, "amount", g)), {
      c() {
        t = N("div"), n = N("div"), Mt(s.$$.fragment), o = m(), a = N("div"), Mt(i.$$.fragment), d(n, "class", "block svelte-18e5n52"), d(a, "class", "block svelte-18e5n52"), d(t, "class", "component svelte-18e5n52");
      },
      m(M, j) {
        C(M, t, j), l(t, n), J(s, n, null), l(t, o), l(t, a), J(i, a, null), r = !0;
      },
      p(M, [j]) {
        const D = {};
        !u && j & /*tjm*/
        1 && (u = !0, D.tjm = /*tjm*/
        M[0], at(() => u = !1)), !c && j & /*amount*/
        2 && (c = !0, D.amount = /*amount*/
        M[1], at(() => c = !1)), i.$set(D);
      },
      i(M) {
        r || (Z(s.$$.fragment, M), Z(i.$$.fragment, M), r = !0);
      },
      o(M) {
        ct(s.$$.fragment, M), ct(i.$$.fragment, M), r = !1;
      },
      d(M) {
        M && S(t), H(s), H(i);
      }
    }
  );
}
function te(e, t, n) {
  let { company: s } = t, o = Pt.create(s), a, i;
  function u(r) {
    a = r, n(0, a);
  }
  function c(r) {
    i = r, n(1, i), n(2, o), n(0, a);
  }
  return e.$$set = (r) => {
    "company" in r && n(3, s = r.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, i = o.getSalary(a) || 0);
  }, [a, i, o, s, u, c];
}
class jt extends q {
  constructor(t) {
    super(), X(this, t, te, qt, V, { company: 3 }, Kt);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), v();
  }
}
customElements.define("renumerator-component", K(jt, { company: {} }, [], [], !0));
class ee extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new jt({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", ee);
