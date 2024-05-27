var lt = Object.defineProperty;
var ct = (e, t, n) => t in e ? lt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => (ct(e, typeof t != "symbol" ? t + "" : t, n), n);
function x() {
}
function et(e) {
  return e();
}
function W() {
  return /* @__PURE__ */ Object.create(null);
}
function S(e) {
  e.forEach(et);
}
function nt(e) {
  return typeof e == "function";
}
function J(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ut(e) {
  return Object.keys(e).length === 0;
}
function d(e, t) {
  e.appendChild(t);
}
function T(e, t, n) {
  const s = dt(e);
  if (!s.getElementById(t)) {
    const i = g("style");
    i.id = t, i.textContent = n, ft(s, i);
  }
}
function dt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function ft(e, t) {
  return d(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function N(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function g(e) {
  return document.createElement(e);
}
function k(e) {
  return document.createTextNode(e);
}
function w() {
  return k(" ");
}
function F(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function mt(e) {
  return Array.from(e.childNodes);
}
function st(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ht(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let U;
function q(e) {
  U = e;
}
const I = [], E = [];
let M = [];
const P = [], gt = /* @__PURE__ */ Promise.resolve();
let z = !1;
function pt() {
  z || (z = !0, gt.then(y));
}
function B(e) {
  M.push(e);
}
function X(e) {
  P.push(e);
}
const D = /* @__PURE__ */ new Set();
let j = 0;
function y() {
  if (j !== 0)
    return;
  const e = U;
  do {
    try {
      for (; j < I.length; ) {
        const t = I[j];
        j++, q(t), $t(t.$$);
      }
    } catch (t) {
      throw I.length = 0, j = 0, t;
    }
    for (q(null), I.length = 0, j = 0; E.length; )
      E.pop()();
    for (let t = 0; t < M.length; t += 1) {
      const n = M[t];
      D.has(n) || (D.add(n), n());
    }
    M.length = 0;
  } while (I.length);
  for (; P.length; )
    P.pop()();
  z = !1, D.clear(), q(e);
}
function $t(e) {
  if (e.fragment !== null) {
    e.update(), S(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(B);
  }
}
function _t(e) {
  const t = [], n = [];
  M.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), M = t;
}
const A = /* @__PURE__ */ new Set();
let bt;
function R(e, t) {
  e && e.i && (A.delete(e), e.i(t));
}
function K(e, t, n, s) {
  if (e && e.o) {
    if (A.has(e))
      return;
    A.add(e), bt.c.push(() => {
      A.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else
    s && s();
}
function Q(e, t, n) {
  const s = e.$$.props[t];
  s !== void 0 && (e.$$.bound[s] = n, n(e.$$.ctx[s]));
}
function tt(e) {
  e && e.c();
}
function G(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), B(() => {
    const l = e.$$.on_mount.map(et).filter(nt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : S(l), e.$$.on_mount = [];
  }), i.forEach(B);
}
function O(e, t) {
  const n = e.$$;
  n.fragment !== null && (_t(n.after_update), S(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function xt(e, t) {
  e.$$.dirty[0] === -1 && (I.push(e), pt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Z(e, t, n, s, i, l, r = null, o = [-1]) {
  const c = U;
  q(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: x,
    not_equal: i,
    bound: W(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: W(),
    dirty: o,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  r && r(a.root);
  let h = !1;
  if (a.ctx = n ? n(e, t.props || {}, (u, p, ...b) => {
    const f = b.length ? b[0] : p;
    return a.ctx && i(a.ctx[u], a.ctx[u] = f) && (!a.skip_bound && a.bound[u] && a.bound[u](f), h && xt(e, u)), p;
  }) : [], a.update(), h = !0, S(a.before_update), a.fragment = s ? s(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = mt(t.target);
      a.fragment && a.fragment.l(u), u.forEach(N);
    } else
      a.fragment && a.fragment.c();
    t.intro && R(e.$$.fragment), G(e, t.target, t.anchor), y();
  }
  q(c);
}
let rt;
typeof HTMLElement == "function" && (rt = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(r) {
        return () => {
          let o;
          return {
            c: function() {
              o = g("slot"), r !== "default" && m(o, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(h, u) {
              L(h, o, u);
            },
            d: function(h) {
              h && N(o);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, i = ht(this);
      for (const r of this.$$s)
        r in i && (s[r] = [n(r)]);
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = C(o, r.value, this.$$p_d, "toProp"));
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
      const l = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const o = C(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const c = this.$$c.$on(r, o);
          this.$$l_u.set(o, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = C(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function C(e, t, n, s) {
  var l;
  const i = (l = n[e]) == null ? void 0 : l.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function H(e, t, n, s, i, l) {
  let r = class extends rt {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((o) => {
    Object.defineProperty(r.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(c) {
        var a;
        c = C(o, c, t), this.$$d[o] = c, (a = this.$$c) == null || a.$set({ [o]: c });
      }
    });
  }), s.forEach((o) => {
    Object.defineProperty(r.prototype, o, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[o];
      }
    });
  }), l && (r = l(r)), e.element = /** @type {any} */
  r, r;
}
class Y {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    O(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!nt(n))
      return x;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ut(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const yt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(yt);
class vt {
  constructor(t) {
    $(this, "config");
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
const jt = 3400, It = 0, wt = 15, Mt = 450, kt = "https://stoorm.fr/#contact", qt = {
  fixed_salary: jt,
  min_salary: It,
  group_days: wt,
  tjm_base: Mt,
  join_link: kt
};
class St extends vt {
  constructor() {
    super(qt);
  }
}
class Nt {
  static create(t) {
    return new St();
  }
}
const At = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Ct = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
function Et(e) {
  T(e, "svelte-1naq16l", `@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-1naq16l.svelte-1naq16l{display:flex;padding:77px 40px;width:calc(100% - 80px);flex-shrink:0;border-radius:32px;background:linear-gradient(180deg, #201a21 0%, #250e2e 100%);box-shadow:0 24px 44px 0 rgba(0, 0, 0, 0.25);backdrop-filter:blur(22px);flex-direction:column}.renumerator.svelte-1naq16l .block.svelte-1naq16l{display:flex;flex-direction:column;width:100%;box-sizing:border-box}.renumerator.svelte-1naq16l .block span.title.svelte-1naq16l{margin-bottom:40px;text-align:center;display:block;flex:1}.renumerator.svelte-1naq16l .flex.svelte-1naq16l{justify-content:space-around;display:flex;flex:1}.renumerator.svelte-1naq16l .flex button.svelte-1naq16l{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.renumerator.svelte-1naq16l .flex span.svelte-1naq16l{font-size:2em;font-weight:900;margin:5px 2px}.renumerator.svelte-1naq16l .title.svelte-1naq16l{margin-bottom:16px;text-align:left}.renumerator.svelte-1naq16l .container.svelte-1naq16l{display:flex;align-self:center;width:100%;margin-top:40px}.svelte-1naq16l .mdc-select__dropdown-icon-graphic{fill:white !important}.svelte-1naq16l .mdc-select__selected-text{color:white !important}.svelte-1naq16l .mdc-select__selected-text{font-size:16px;font-weight:500;font-family:Montserrat, serif}.svelte-1naq16l .mdc-deprecated-list-item--selected{background-color:#0E130B;color:white !important}.mdc-select__menu{background:#413946;color:white}.mdc-select__menu li{color:white}:root{--mdc-theme-primary:rgba(255, 255, 255, 0.6)}.smui-select__line-ripple{border-color:yellow}.smui-select__dropdown-icon{color:grey}.smui-select--focused .smui-select__line-ripple{border-color:blue}.svelte-1naq16l .mdc-select{background:rgba(255, 255, 255, 0.10)}.svelte-1naq16l .mdc-select__anchor{height:100px}.svelte-1naq16l .shaped-outlined,.svelte-1naq16l .shaped-outlined .mdc-select__anchor{border-radius:24px}.svelte-1naq16l .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-1naq16l .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading{border-radius:24px 0 0 24px;border-color:rgba(255, 255, 255, 0.6);width:28px}.svelte-1naq16l .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing{border-color:rgba(255, 255, 255, 0.6);border-radius:0 24px 24px 0}.svelte-1naq16l .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{border-color:rgba(255, 255, 255, 0.6)}.img-btn.svelte-1naq16l.svelte-1naq16l{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1naq16l.svelte-1naq16l{width:1.5em}.renumerator.svelte-1naq16l .flex span.svelte-1naq16l{font-size:1.5em}.renumerator.svelte-1naq16l .container.svelte-1naq16l{flex-direction:column}.renumerator.svelte-1naq16l .block.svelte-1naq16l{width:100%}}`);
}
function Lt(e) {
  let t, n, s, i, l, r, o, c, a, h, u, p, b, f;
  return {
    c() {
      t = g("div"), n = g("div"), s = g("div"), i = g("span"), i.textContent = "TJM", l = w(), r = g("div"), o = g("button"), o.innerHTML = `<img src="${At}" alt="Minus Svg icon" class="img-btn svelte-1naq16l"/>`, c = w(), a = g("span"), h = k(
        /*tjm*/
        e[0]
      ), u = w(), p = g("button"), p.innerHTML = `<img src="${Ct}" alt="Plus Svg icon" class="img-btn svelte-1naq16l"/>`, m(i, "class", "title svelte-1naq16l"), m(o, "class", "svelte-1naq16l"), m(a, "class", "svelte-1naq16l"), m(p, "class", "svelte-1naq16l"), m(r, "class", "flex svelte-1naq16l"), m(s, "class", "block svelte-1naq16l"), m(n, "class", "container svelte-1naq16l"), m(t, "class", "renumerator svelte-1naq16l");
    },
    m(_, v) {
      L(_, t, v), d(t, n), d(n, s), d(s, i), d(s, l), d(s, r), d(r, o), d(r, c), d(r, a), d(a, h), d(r, u), d(r, p), b || (f = [
        F(
          o,
          "click",
          /*click_handler*/
          e[3]
        ),
        F(
          p,
          "click",
          /*click_handler_1*/
          e[4]
        )
      ], b = !0);
    },
    p(_, [v]) {
      v & /*tjm*/
      1 && st(
        h,
        /*tjm*/
        _[0]
      );
    },
    i: x,
    o: x,
    d(_) {
      _ && N(t), b = !1, S(f);
    }
  };
}
function Dt(e, t, n) {
  let { rateManager: s } = t, { tjm: i = 600 } = t, l = s.getMinTJMValue();
  const r = () => n(0, i = Math.max(l, i - 10)), o = () => n(0, i += 10);
  return e.$$set = (c) => {
    "rateManager" in c && n(2, s = c.rateManager), "tjm" in c && n(0, i = c.tjm);
  }, [i, l, s, r, o];
}
let it = class extends Y {
  constructor(t) {
    super(), Z(this, t, Dt, Lt, J, { rateManager: 2, tjm: 0 }, Et);
  }
  get rateManager() {
    return this.$$.ctx[2];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), y();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(t) {
    this.$$set({ tjm: t }), y();
  }
};
H(it, { rateManager: {}, tjm: {} }, [], [], !0);
function Pt(e) {
  T(e, "svelte-bfrk9h", ".pay.svelte-bfrk9h.svelte-bfrk9h{height:447px;width:100%;background:#f42092;border-radius:32px;font-size:24px;display:flex;flex-direction:column;justify-content:center;align-items:center}.pay.svelte-bfrk9h span.title.svelte-bfrk9h{margin-top:60px;color:#0E130B;margin-bottom:20px}.pay.svelte-bfrk9h span.amount.svelte-bfrk9h{color:#0E130B;font-weight:900;font-size:60px;margin-bottom:54px}.pay.svelte-bfrk9h a.svelte-bfrk9h{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700}@media screen and (max-width: 380px){.pay.svelte-bfrk9h span.title.svelte-bfrk9h{font-size:0.75em}}");
}
function zt(e) {
  let t, n, s, i, l, r, o, c, a, h;
  return {
    c() {
      t = g("div"), n = g("span"), n.textContent = "Votre salaire annuel brut", s = w(), i = g("span"), l = k(
        /*amount*/
        e[0]
      ), r = k(" €"), o = w(), c = g("a"), a = k("Envie de nous rejoindre ?"), m(n, "class", "title svelte-bfrk9h"), m(i, "class", "amount svelte-bfrk9h"), m(c, "href", h = /*rateManager*/
      e[1].getJoinUsLink()), m(c, "class", "svelte-bfrk9h"), m(t, "class", "pay svelte-bfrk9h");
    },
    m(u, p) {
      L(u, t, p), d(t, n), d(t, s), d(t, i), d(i, l), d(i, r), d(t, o), d(t, c), d(c, a);
    },
    p(u, [p]) {
      p & /*amount*/
      1 && st(
        l,
        /*amount*/
        u[0]
      ), p & /*rateManager*/
      2 && h !== (h = /*rateManager*/
      u[1].getJoinUsLink()) && m(c, "href", h);
    },
    i: x,
    o: x,
    d(u) {
      u && N(t);
    }
  };
}
function Bt(e, t, n) {
  let { amount: s = 450 } = t, { rateManager: i } = t;
  return e.$$set = (l) => {
    "amount" in l && n(0, s = l.amount), "rateManager" in l && n(1, i = l.rateManager);
  }, [s, i];
}
class ot extends Y {
  constructor(t) {
    super(), Z(this, t, Bt, zt, J, { amount: 0, rateManager: 1 }, Pt);
  }
  get amount() {
    return this.$$.ctx[0];
  }
  set amount(t) {
    this.$$set({ amount: t }), y();
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), y();
  }
}
H(ot, { amount: {}, rateManager: {} }, [], [], !0);
function Rt(e) {
  T(e, "svelte-1sqfk6p", `.component.svelte-1sqfk6p{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-1sqfk6p{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-1sqfk6p:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1sqfk6p{width:100%;margin-bottom:1.5em}.component.svelte-1sqfk6p{flex-direction:column}}`);
}
function Gt(e) {
  let t, n, s, i, l, r, o, c, a;
  function h(f) {
    e[4](f);
  }
  let u = { rateManager: (
    /*rateManager*/
    e[2]
  ) };
  /*tjm*/
  e[0] !== void 0 && (u.tjm = /*tjm*/
  e[0]), s = new it({ props: u }), E.push(() => Q(s, "tjm", h));
  function p(f) {
    e[5](f);
  }
  let b = { rateManager: (
    /*rateManager*/
    e[2]
  ) };
  return (
    /*amount*/
    e[1] !== void 0 && (b.amount = /*amount*/
    e[1]), o = new ot({ props: b }), E.push(() => Q(o, "amount", p)), {
      c() {
        t = g("div"), n = g("div"), tt(s.$$.fragment), l = w(), r = g("div"), tt(o.$$.fragment), m(n, "class", "block svelte-1sqfk6p"), m(r, "class", "block svelte-1sqfk6p"), m(t, "class", "component svelte-1sqfk6p");
      },
      m(f, _) {
        L(f, t, _), d(t, n), G(s, n, null), d(t, l), d(t, r), G(o, r, null), a = !0;
      },
      p(f, [_]) {
        const v = {};
        !i && _ & /*tjm*/
        1 && (i = !0, v.tjm = /*tjm*/
        f[0], X(() => i = !1)), s.$set(v);
        const V = {};
        !c && _ & /*amount*/
        2 && (c = !0, V.amount = /*amount*/
        f[1], X(() => c = !1)), o.$set(V);
      },
      i(f) {
        a || (R(s.$$.fragment, f), R(o.$$.fragment, f), a = !0);
      },
      o(f) {
        K(s.$$.fragment, f), K(o.$$.fragment, f), a = !1;
      },
      d(f) {
        f && N(t), O(s), O(o);
      }
    }
  );
}
function Ot(e, t, n) {
  let { company: s } = t, i = Nt.create(s), l, r;
  function o(a) {
    l = a, n(0, l);
  }
  function c(a) {
    r = a, n(1, r), n(2, i), n(0, l);
  }
  return e.$$set = (a) => {
    "company" in a && n(3, s = a.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, r = i.getSalary(l) || 0);
  }, [l, r, i, s, o, c];
}
class at extends Y {
  constructor(t) {
    super(), Z(this, t, Ot, Gt, J, { company: 3 }, Rt);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), y();
  }
}
customElements.define("renumerator-component", H(at, { company: {} }, [], [], !0));
class Jt extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new at({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", Jt);
