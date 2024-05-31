var xe = Object.defineProperty;
var Ae = (t, e, n) => e in t ? xe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var d = (t, e, n) => (Ae(t, typeof e != "symbol" ? e + "" : e, n), n);
function z() {
}
function De(t) {
  return t();
}
function Me() {
  return /* @__PURE__ */ Object.create(null);
}
function w(t) {
  t.forEach(De);
}
function me(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function $e(t) {
  return Object.keys(t).length === 0;
}
function a(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  const i = be(t);
  if (!i.getElementById(e)) {
    const l = f("style");
    l.id = e, l.textContent = n, ve(i, l);
  }
}
function be(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function ve(t, e) {
  return a(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function q(t, e, n) {
  t.insertBefore(e, n || null);
}
function k(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function f(t) {
  return document.createElement(t);
}
function h(t) {
  return document.createTextNode(t);
}
function m() {
  return h(" ");
}
function ge(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function g(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Le(t) {
  return Array.from(t.childNodes);
}
function fe(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Te(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Oe(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let K;
function _(t) {
  K = t;
}
const v = [], Y = [];
let L = [];
const B = [], Se = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function _e() {
  Z || (Z = !0, Se.then(T));
}
function J(t) {
  L.push(t);
}
function Ne(t) {
  B.push(t);
}
const R = /* @__PURE__ */ new Set();
let b = 0;
function T() {
  if (b !== 0)
    return;
  const t = K;
  do {
    try {
      for (; b < v.length; ) {
        const e = v[b];
        b++, _(e), we(e.$$);
      }
    } catch (e) {
      throw v.length = 0, b = 0, e;
    }
    for (_(null), v.length = 0, b = 0; Y.length; )
      Y.pop()();
    for (let e = 0; e < L.length; e += 1) {
      const n = L[e];
      R.has(n) || (R.add(n), n());
    }
    L.length = 0;
  } while (v.length);
  for (; B.length; )
    B.pop()();
  Z = !1, R.clear(), _(t);
}
function we(t) {
  if (t.fragment !== null) {
    t.update(), w(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(J);
  }
}
function ke(t) {
  const e = [], n = [];
  L.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), L = e;
}
const C = /* @__PURE__ */ new Set();
let Ee;
function F(t, e) {
  t && t.i && (C.delete(t), t.i(e));
}
function de(t, e, n, i) {
  if (t && t.o) {
    if (C.has(t))
      return;
    C.add(t), Ee.c.push(() => {
      C.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function je(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function Ie(t) {
  t && t.c();
}
function H(t, e, n) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), J(() => {
    const u = t.$$.on_mount.map(De).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : w(u), t.$$.on_mount = [];
  }), l.forEach(J);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (ke(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Qe(t, e) {
  t.$$.dirty[0] === -1 && (v.push(t), _e(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(t, e, n, i, l, u, s = null, o = [-1]) {
  const c = K;
  _(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: z,
    not_equal: l,
    bound: Me(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Me(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(r.root);
  let j = !1;
  if (r.ctx = n ? n(t, e.props || {}, (N, D, ...M) => {
    const I = M.length ? M[0] : D;
    return r.ctx && l(r.ctx[N], r.ctx[N] = I) && (!r.skip_bound && r.bound[N] && r.bound[N](I), j && Qe(t, N)), D;
  }) : [], r.update(), j = !0, w(r.before_update), r.fragment = i ? i(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const N = Le(e.target);
      r.fragment && r.fragment.l(N), N.forEach(k);
    } else
      r.fragment && r.fragment.c();
    e.intro && F(t.$$.fragment), H(t, e.target, e.anchor), T();
  }
  _(c);
}
let ye;
typeof HTMLElement == "function" && (ye = class extends HTMLElement {
  constructor(e, n, i) {
    super();
    /** The Svelte component constructor */
    d(this, "$$ctor");
    /** Slots */
    d(this, "$$s");
    /** The Svelte component instance */
    d(this, "$$c");
    /** Whether or not the custom element is connected */
    d(this, "$$cn", !1);
    /** Component props data */
    d(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    d(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    d(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    d(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    d(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, i);
  }
  removeEventListener(e, n, i) {
    if (super.removeEventListener(e, n, i), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = f("slot"), s !== "default" && g(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(j, N) {
              q(j, o, N);
            },
            d: function(j) {
              j && k(o);
            }
          };
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const i = {}, l = Oe(this);
      for (const s of this.$$s)
        s in l && (i[s] = [n(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = U(o, s.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$scope: {
            ctx: []
          }
        }
      });
      const u = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = U(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(u), u();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const c = this.$$c.$on(s, o);
          this.$$l_u.set(o, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = U(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function U(t, e, n, i) {
  var u;
  const l = (u = n[t]) == null ? void 0 : u.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !n[t])
    return e;
  if (i === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function te(t, e, n, i, l, u) {
  let s = class extends ye {
    constructor() {
      super(t, n, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((o) => {
    Object.defineProperty(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(c) {
        var r;
        c = U(o, c, e), this.$$d[o] = c, (r = this.$$c) == null || r.$set({ [o]: c });
      }
    });
  }), i.forEach((o) => {
    Object.defineProperty(s.prototype, o, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[o];
      }
    });
  }), u && (s = u(s)), t.element = /** @type {any} */
  s, s;
}
class ne {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    d(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    d(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    V(this, 1), this.$destroy = z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!me(n))
      return z;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !$e(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ce = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ce);
class Ue {
  constructor(e) {
    d(this, "config");
    this.config = e;
  }
  getRate(e) {
    return this.config.jobs.find((n) => n.name === e);
  }
  getRateList() {
    return this.config.jobs.sort((e, n) => e.name > n.name ? 1 : e.name < n.name ? -1 : 0);
  }
  getMinExperienceValue() {
    return this.config.min_experience;
  }
  getMinTJMValue() {
    return this.config.tjm_base;
  }
  getSalary(e) {
    const n = this.config.fixed_salary * 12 + (e - this.config.tjm_base) / 2 * (216 - this.config.group_days) * 1.1153846153846154;
    return Math.round(n);
  }
  getJoinUsLink() {
    return this.config.join_link;
  }
  getAvantagesLink() {
    return this.config.avantages_link;
  }
}
const Ye = 3400, qe = 0, Pe = 15, Ge = 450, Re = "https://stoorm.fr/#contact", Be = "https://stoorm.fr/?page_id=627&preview=true#avantages", Ze = {
  fixed_salary: Ye,
  min_salary: qe,
  group_days: Pe,
  tjm_base: Ge,
  join_link: Re,
  avantages_link: Be
};
class Je extends Ue {
  constructor() {
    super(Ze);
  }
}
class Fe {
  static create(e) {
    return new Je();
  }
}
function He(t) {
  X(t, "svelte-uveif4", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-uveif4.svelte-uveif4{display:flex;padding:77px 40px;width:calc(100% - 80px);border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1;flex-direction:column}.renumerator.svelte-uveif4 .rem-block.svelte-uveif4{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;flex:1}.renumerator.svelte-uveif4 .rem-block span.title.svelte-uveif4{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-uveif4 .flex.svelte-uveif4{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-uveif4 .flex p.svelte-uveif4{margin:0 0 30px}.renumerator.svelte-uveif4 .title.svelte-uveif4{margin-bottom:16px;text-align:left}.renumerator.svelte-uveif4 .container.svelte-uveif4{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-uveif4 .container.svelte-uveif4{margin-top:5px}.renumerator.svelte-uveif4 .rem-block span.title.svelte-uveif4{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-uveif4 .rem-block.svelte-uveif4{display:flex;flex-direction:column;width:100%;box-sizing:border-box;justify-content:center}.renumerator.svelte-uveif4 .container.svelte-uveif4{display:flex;flex-direction:column;align-self:center;width:100%;margin-top:0}.renumerator.svelte-uveif4 .flex.svelte-uveif4{margin:5px 20px 0;font-size:1em}.renumerator.svelte-uveif4 .flex p.svelte-uveif4{margin:0 0 20px}.renumerator.svelte-uveif4 .rem-block span.title.svelte-uveif4{font-size:1.25em}}');
}
function Ve(t) {
  let e;
  return {
    c() {
      e = f("div"), e.innerHTML = '<div class="container svelte-uveif4"><div class="rem-block svelte-uveif4"><span class="title svelte-uveif4">Découvrez votre futur salaire !</span> <div class="flex svelte-uveif4"><p class="svelte-uveif4">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-uveif4">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', g(e, "class", "renumerator svelte-uveif4");
    },
    m(n, i) {
      q(n, e, i);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && k(e);
    }
  };
}
function We(t) {
  return [];
}
let pe = class extends ne {
  constructor(e) {
    super(), ee(this, e, We, Ve, W, {}, He);
  }
};
te(pe, {}, [], [], !0);
const Xe = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Ke = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", et = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function tt(t) {
  X(t, "svelte-1qglebt", ".pay.svelte-1qglebt.svelte-1qglebt{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-1qglebt span.title.svelte-1qglebt{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-1qglebt span.line.svelte-1qglebt{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-1qglebt span.amount.svelte-1qglebt{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-1qglebt a.svelte-1qglebt{color:#FFFFFF;margin-bottom:10px}.pay.svelte-1qglebt .joinLink.svelte-1qglebt{display:inline-flex;padding:16px 24px;margin-top:20px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-1qglebt .block.svelte-1qglebt{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-1qglebt .block span.title.svelte-1qglebt{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-1qglebt .flex.svelte-1qglebt{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-1qglebt .flex button.svelte-1qglebt{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-1qglebt .title.svelte-1qglebt{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-1qglebt span.title.svelte-1qglebt{font-size:0.75em}}.img-btn.svelte-1qglebt.svelte-1qglebt{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1qglebt.svelte-1qglebt{width:1.5em}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:1.5em}.pay.svelte-1qglebt .block.svelte-1qglebt{width:100%}.advantage.svelte-1qglebt.svelte-1qglebt{font-size:14px}}");
}
function nt(t) {
  let e, n, i, l, u, s, o, c, r, j, N, D, M, I, y, ie, O, P, se, re, S, le, x, oe, E, ue, A, ae, Q, G, ce;
  return {
    c() {
      e = f("div"), n = f("div"), i = f("span"), i.textContent = "Votre TJM", l = m(), u = f("div"), s = f("button"), s.innerHTML = `<img src="${Xe}" alt="Minus Svg icon" class="img-btn svelte-1qglebt"/>`, o = m(), c = f("span"), r = h(
        /*tjm*/
        t[0]
      ), j = m(), N = f("button"), N.innerHTML = `<img src="${Ke}" alt="Plus Svg icon" class="img-btn svelte-1qglebt"/>`, D = m(), M = f("span"), I = m(), y = f("span"), y.textContent = "Votre salaire annuel brut", ie = m(), O = f("span"), P = h(
        /*amount*/
        t[2]
      ), se = h(" €"), re = m(), S = f("span"), le = h("et + de 9000€ d'"), x = f("a"), oe = h("avantages sociaux"), ue = m(), A = f("a"), ae = h("Envie de nous rejoindre ?"), g(i, "class", "title svelte-1qglebt"), g(s, "class", "svelte-1qglebt"), g(c, "class", "svelte-1qglebt"), g(N, "class", "svelte-1qglebt"), g(u, "class", "flex svelte-1qglebt"), g(n, "class", "block svelte-1qglebt"), g(M, "class", "line svelte-1qglebt"), g(y, "class", "title svelte-1qglebt"), g(O, "class", "amount svelte-1qglebt"), g(x, "href", E = /*rateManager*/
      t[1].getAvantagesLink()), g(x, "class", "svelte-1qglebt"), g(S, "class", "advantage svelte-1qglebt"), g(A, "class", "joinLink svelte-1qglebt"), g(A, "href", Q = /*rateManager*/
      t[1].getJoinUsLink()), g(e, "class", "pay svelte-1qglebt"), Te(e, "background", "url(" + et + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(p, $) {
      q(p, e, $), a(e, n), a(n, i), a(n, l), a(n, u), a(u, s), a(u, o), a(u, c), a(c, r), a(u, j), a(u, N), a(e, D), a(e, M), a(e, I), a(e, y), a(e, ie), a(e, O), a(O, P), a(O, se), a(e, re), a(e, S), a(S, le), a(S, x), a(x, oe), a(e, ue), a(e, A), a(A, ae), G || (ce = [
        ge(
          s,
          "click",
          /*click_handler*/
          t[4]
        ),
        ge(
          N,
          "click",
          /*click_handler_1*/
          t[5]
        )
      ], G = !0);
    },
    p(p, [$]) {
      $ & /*tjm*/
      1 && fe(
        r,
        /*tjm*/
        p[0]
      ), $ & /*amount*/
      4 && fe(
        P,
        /*amount*/
        p[2]
      ), $ & /*rateManager*/
      2 && E !== (E = /*rateManager*/
      p[1].getAvantagesLink()) && g(x, "href", E), $ & /*rateManager*/
      2 && Q !== (Q = /*rateManager*/
      p[1].getJoinUsLink()) && g(A, "href", Q);
    },
    i: z,
    o: z,
    d(p) {
      p && k(e), G = !1, w(ce);
    }
  };
}
let it = 2e3;
function st(t, e, n) {
  let { rateManager: i } = e, { tjm: l = 600 } = e, u = i.getMinTJMValue(), { amount: s = 450 } = e;
  const o = () => n(0, l = Math.max(u, l - 10)), c = () => n(0, l = Math.min(it, l + 10));
  return t.$$set = (r) => {
    "rateManager" in r && n(1, i = r.rateManager), "tjm" in r && n(0, l = r.tjm), "amount" in r && n(2, s = r.amount);
  }, [l, i, s, u, o, c];
}
class ze extends ne {
  constructor(e) {
    super(), ee(this, e, st, nt, W, { rateManager: 1, tjm: 0, amount: 2 }, tt);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(e) {
    this.$$set({ rateManager: e }), T();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(e) {
    this.$$set({ tjm: e }), T();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(e) {
    this.$$set({ amount: e }), T();
  }
}
te(ze, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function rt(t) {
  X(t, "svelte-14ojux7", `.component.svelte-14ojux7{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-14ojux7{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-14ojux7:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-14ojux7{width:100%;margin-bottom:1.5em}.component.svelte-14ojux7{flex-direction:column}}`);
}
function lt(t) {
  let e, n, i, l, u, s, o, c, r;
  i = new pe({});
  function j(M) {
    t[4](M);
  }
  function N(M) {
    t[5](M);
  }
  let D = { rateManager: (
    /*rateManager*/
    t[2]
  ) };
  return (
    /*tjm*/
    t[0] !== void 0 && (D.tjm = /*tjm*/
    t[0]), /*amount*/
    t[1] !== void 0 && (D.amount = /*amount*/
    t[1]), s = new ze({ props: D }), Y.push(() => je(s, "tjm", j)), Y.push(() => je(s, "amount", N)), {
      c() {
        e = f("div"), n = f("div"), Ie(i.$$.fragment), l = m(), u = f("div"), Ie(s.$$.fragment), g(n, "class", "block svelte-14ojux7"), g(u, "class", "block svelte-14ojux7"), g(e, "class", "component svelte-14ojux7");
      },
      m(M, I) {
        q(M, e, I), a(e, n), H(i, n, null), a(e, l), a(e, u), H(s, u, null), r = !0;
      },
      p(M, [I]) {
        const y = {};
        !o && I & /*tjm*/
        1 && (o = !0, y.tjm = /*tjm*/
        M[0], Ne(() => o = !1)), !c && I & /*amount*/
        2 && (c = !0, y.amount = /*amount*/
        M[1], Ne(() => c = !1)), s.$set(y);
      },
      i(M) {
        r || (F(i.$$.fragment, M), F(s.$$.fragment, M), r = !0);
      },
      o(M) {
        de(i.$$.fragment, M), de(s.$$.fragment, M), r = !1;
      },
      d(M) {
        M && k(e), V(i), V(s);
      }
    }
  );
}
function ot(t, e, n) {
  let { company: i } = e, l = Fe.create(i), u, s;
  function o(r) {
    u = r, n(0, u);
  }
  function c(r) {
    s = r, n(1, s), n(2, l), n(0, u);
  }
  return t.$$set = (r) => {
    "company" in r && n(3, i = r.company);
  }, t.$$.update = () => {
    t.$$.dirty & /*tjm*/
    1 && n(1, s = l.getSalary(u) || 0);
  }, [u, s, l, i, o, c];
}
class he extends ne {
  constructor(e) {
    super(), ee(this, e, ot, lt, W, { company: 3 }, rt);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(e) {
    this.$$set({ company: e }), T();
  }
}
customElements.define("renumerator-component", te(he, { company: {} }, [], [], !0));
class ut extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("company"), n = e ?? "";
    new he({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", ut);
