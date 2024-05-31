var xt = Object.defineProperty;
var At = (e, t, n) => t in e ? xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (At(e, typeof t != "symbol" ? t + "" : t, n), n);
function p() {
}
function Dt(e) {
  return e();
}
function Mt() {
  return /* @__PURE__ */ Object.create(null);
}
function w(e) {
  e.forEach(Dt);
}
function mt(e) {
  return typeof e == "function";
}
function W(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function $t(e) {
  return Object.keys(e).length === 0;
}
function u(e, t) {
  e.appendChild(t);
}
function X(e, t, n) {
  const i = bt(e);
  if (!i.getElementById(t)) {
    const l = N("style");
    l.id = t, l.textContent = n, Lt(i, l);
  }
}
function bt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Lt(e, t) {
  return u(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function q(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function N(e) {
  return document.createElement(e);
}
function h(e) {
  return document.createTextNode(e);
}
function m() {
  return h(" ");
}
function gt(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function vt(e) {
  return Array.from(e.childNodes);
}
function Nt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Tt(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function Ot(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let K;
function _(e) {
  K = e;
}
const L = [], Y = [];
let v = [];
const B = [], St = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function _t() {
  Z || (Z = !0, St.then(T));
}
function J(e) {
  v.push(e);
}
function dt(e) {
  B.push(e);
}
const R = /* @__PURE__ */ new Set();
let b = 0;
function T() {
  if (b !== 0)
    return;
  const e = K;
  do {
    try {
      for (; b < L.length; ) {
        const t = L[b];
        b++, _(t), wt(t.$$);
      }
    } catch (t) {
      throw L.length = 0, b = 0, t;
    }
    for (_(null), L.length = 0, b = 0; Y.length; )
      Y.pop()();
    for (let t = 0; t < v.length; t += 1) {
      const n = v[t];
      R.has(n) || (R.add(n), n());
    }
    v.length = 0;
  } while (L.length);
  for (; B.length; )
    B.pop()();
  Z = !1, R.clear(), _(e);
}
function wt(e) {
  if (e.fragment !== null) {
    e.update(), w(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(J);
  }
}
function kt(e) {
  const t = [], n = [];
  v.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), v = t;
}
const C = /* @__PURE__ */ new Set();
let Et;
function F(e, t) {
  e && e.i && (C.delete(e), e.i(t));
}
function ft(e, t, n, i) {
  if (e && e.o) {
    if (C.has(e))
      return;
    C.add(e), Et.c.push(() => {
      C.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function jt(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function It(e) {
  e && e.c();
}
function H(e, t, n) {
  const { fragment: i, after_update: l } = e.$$;
  i && i.m(t, n), J(() => {
    const a = e.$$.on_mount.map(Dt).filter(mt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...a) : w(a), e.$$.on_mount = [];
  }), l.forEach(J);
}
function V(e, t) {
  const n = e.$$;
  n.fragment !== null && (kt(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Qt(e, t) {
  e.$$.dirty[0] === -1 && (L.push(e), _t(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function tt(e, t, n, i, l, a, s = null, o = [-1]) {
  const c = K;
  _(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: p,
    not_equal: l,
    bound: Mt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Mt(),
    dirty: o,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  s && s(r.root);
  let j = !1;
  if (r.ctx = n ? n(e, t.props || {}, (d, D, ...M) => {
    const I = M.length ? M[0] : D;
    return r.ctx && l(r.ctx[d], r.ctx[d] = I) && (!r.skip_bound && r.bound[d] && r.bound[d](I), j && Qt(e, d)), D;
  }) : [], r.update(), j = !0, w(r.before_update), r.fragment = i ? i(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = vt(t.target);
      r.fragment && r.fragment.l(d), d.forEach(k);
    } else
      r.fragment && r.fragment.c();
    t.intro && F(e.$$.fragment), H(e, t.target, t.anchor), T();
  }
  _(c);
}
let zt;
typeof HTMLElement == "function" && (zt = class extends HTMLElement {
  constructor(t, n, i) {
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
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const l = this.$$c.$on(t, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
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
              o = N("slot"), s !== "default" && g(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(j, d) {
              q(j, o, d);
            },
            d: function(j) {
              j && k(o);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const i = {}, l = Ot(this);
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
      const a = () => {
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
      this.$$c.$$.after_update.push(a), a();
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
  attributeChangedCallback(t, n, i) {
    var l;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = U(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
function U(e, t, n, i) {
  var a;
  const l = (a = n[e]) == null ? void 0 : a.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (l) {
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
    switch (l) {
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
function et(e, t, n, i, l, a) {
  let s = class extends zt {
    constructor() {
      super(e, n, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((o) => {
    Object.defineProperty(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(c) {
        var r;
        c = U(o, c, t), this.$$d[o] = c, (r = this.$$c) == null || r.$set({ [o]: c });
      }
    });
  }), i.forEach((o) => {
    Object.defineProperty(s.prototype, o, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[o];
      }
    });
  }), a && (s = a(s)), e.element = /** @type {any} */
  s, s;
}
class nt {
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
    V(this, 1), this.$destroy = p;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!mt(n))
      return p;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !$t(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ct);
class Ut {
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
  getAvantagesLink() {
    return this.config.avantages_link;
  }
}
const Yt = 3400, qt = 0, Pt = 15, Gt = 450, Rt = "https://stoorm.fr/#contact", Bt = "https://stoorm.fr/?page_id=627&preview=true#avantages", Zt = {
  fixed_salary: Yt,
  min_salary: qt,
  group_days: Pt,
  tjm_base: Gt,
  join_link: Rt,
  avantages_link: Bt
};
class Jt extends Ut {
  constructor() {
    super(Zt);
  }
}
class Ft {
  static create(t) {
    return new Jt();
  }
}
function Ht(e) {
  X(e, "svelte-1i5zt75", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-1i5zt75.svelte-1i5zt75{display:flex;border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1;flex-direction:column}.renumerator.svelte-1i5zt75 .rem-block.svelte-1i5zt75{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;flex:1}.renumerator.svelte-1i5zt75 .rem-block span.title.svelte-1i5zt75{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-1i5zt75 .flex.svelte-1i5zt75{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-1i5zt75 .flex p.svelte-1i5zt75{margin:0 0 30px}.renumerator.svelte-1i5zt75 .title.svelte-1i5zt75{margin-bottom:16px;text-align:left}.renumerator.svelte-1i5zt75 .container.svelte-1i5zt75{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-1i5zt75 .container.svelte-1i5zt75{margin-top:5px}.renumerator.svelte-1i5zt75 .rem-block span.title.svelte-1i5zt75{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-1i5zt75 .rem-block.svelte-1i5zt75{display:flex;flex-direction:column;width:100%;box-sizing:border-box;justify-content:center;margin:20px 0 0}.renumerator.svelte-1i5zt75 .container.svelte-1i5zt75{display:flex;flex-direction:column;align-self:center;width:100%;margin-top:0}.renumerator.svelte-1i5zt75 .flex.svelte-1i5zt75{margin:5px 20px 0;font-size:0.75em}.renumerator.svelte-1i5zt75 .flex p.svelte-1i5zt75{margin:0 0 20px}.renumerator.svelte-1i5zt75 .rem-block span.title.svelte-1i5zt75{font-size:1em}}');
}
function Vt(e) {
  let t;
  return {
    c() {
      t = N("div"), t.innerHTML = '<div class="container svelte-1i5zt75"><div class="rem-block svelte-1i5zt75"><span class="title svelte-1i5zt75">Découvrez votre futur salaire !</span> <div class="flex svelte-1i5zt75"><p class="svelte-1i5zt75">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-1i5zt75">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', g(t, "class", "renumerator svelte-1i5zt75");
    },
    m(n, i) {
      q(n, t, i);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && k(t);
    }
  };
}
function Wt(e) {
  return [];
}
let yt = class extends nt {
  constructor(t) {
    super(), tt(this, t, Wt, Vt, W, {}, Ht);
  }
};
et(yt, {}, [], [], !0);
const Xt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Kt = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", te = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function ee(e) {
  X(e, "svelte-1qglebt", ".pay.svelte-1qglebt.svelte-1qglebt{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-1qglebt span.title.svelte-1qglebt{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-1qglebt span.line.svelte-1qglebt{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-1qglebt span.amount.svelte-1qglebt{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-1qglebt a.svelte-1qglebt{color:#FFFFFF;margin-bottom:10px}.pay.svelte-1qglebt .joinLink.svelte-1qglebt{display:inline-flex;padding:16px 24px;margin-top:20px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-1qglebt .block.svelte-1qglebt{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-1qglebt .block span.title.svelte-1qglebt{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-1qglebt .flex.svelte-1qglebt{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-1qglebt .flex button.svelte-1qglebt{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-1qglebt .title.svelte-1qglebt{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-1qglebt span.title.svelte-1qglebt{font-size:0.75em}}.img-btn.svelte-1qglebt.svelte-1qglebt{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1qglebt.svelte-1qglebt{width:1.5em}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:1.5em}.pay.svelte-1qglebt .block.svelte-1qglebt{width:100%}.advantage.svelte-1qglebt.svelte-1qglebt{font-size:14px}}");
}
function ne(e) {
  let t, n, i, l, a, s, o, c, r, j, d, D, M, I, z, it, O, P, st, rt, S, lt, x, ot, E, at, A, ut, Q, G, ct;
  return {
    c() {
      t = N("div"), n = N("div"), i = N("span"), i.textContent = "Votre TJM", l = m(), a = N("div"), s = N("button"), s.innerHTML = `<img src="${Xt}" alt="Minus Svg icon" class="img-btn svelte-1qglebt"/>`, o = m(), c = N("span"), r = h(
        /*tjm*/
        e[0]
      ), j = m(), d = N("button"), d.innerHTML = `<img src="${Kt}" alt="Plus Svg icon" class="img-btn svelte-1qglebt"/>`, D = m(), M = N("span"), I = m(), z = N("span"), z.textContent = "Votre salaire annuel brut", it = m(), O = N("span"), P = h(
        /*amount*/
        e[2]
      ), st = h(" €"), rt = m(), S = N("span"), lt = h("et + de 9000€ d'"), x = N("a"), ot = h("avantages sociaux"), at = m(), A = N("a"), ut = h("Envie de nous rejoindre ?"), g(i, "class", "title svelte-1qglebt"), g(s, "class", "svelte-1qglebt"), g(c, "class", "svelte-1qglebt"), g(d, "class", "svelte-1qglebt"), g(a, "class", "flex svelte-1qglebt"), g(n, "class", "block svelte-1qglebt"), g(M, "class", "line svelte-1qglebt"), g(z, "class", "title svelte-1qglebt"), g(O, "class", "amount svelte-1qglebt"), g(x, "href", E = /*rateManager*/
      e[1].getAvantagesLink()), g(x, "class", "svelte-1qglebt"), g(S, "class", "advantage svelte-1qglebt"), g(A, "class", "joinLink svelte-1qglebt"), g(A, "href", Q = /*rateManager*/
      e[1].getJoinUsLink()), g(t, "class", "pay svelte-1qglebt"), Tt(t, "background", "url(" + te + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(y, $) {
      q(y, t, $), u(t, n), u(n, i), u(n, l), u(n, a), u(a, s), u(a, o), u(a, c), u(c, r), u(a, j), u(a, d), u(t, D), u(t, M), u(t, I), u(t, z), u(t, it), u(t, O), u(O, P), u(O, st), u(t, rt), u(t, S), u(S, lt), u(S, x), u(x, ot), u(t, at), u(t, A), u(A, ut), G || (ct = [
        gt(
          s,
          "click",
          /*click_handler*/
          e[4]
        ),
        gt(
          d,
          "click",
          /*click_handler_1*/
          e[5]
        )
      ], G = !0);
    },
    p(y, [$]) {
      $ & /*tjm*/
      1 && Nt(
        r,
        /*tjm*/
        y[0]
      ), $ & /*amount*/
      4 && Nt(
        P,
        /*amount*/
        y[2]
      ), $ & /*rateManager*/
      2 && E !== (E = /*rateManager*/
      y[1].getAvantagesLink()) && g(x, "href", E), $ & /*rateManager*/
      2 && Q !== (Q = /*rateManager*/
      y[1].getJoinUsLink()) && g(A, "href", Q);
    },
    i: p,
    o: p,
    d(y) {
      y && k(t), G = !1, w(ct);
    }
  };
}
let ie = 2e3;
function se(e, t, n) {
  let { rateManager: i } = t, { tjm: l = 600 } = t, a = i.getMinTJMValue(), { amount: s = 450 } = t;
  const o = () => n(0, l = Math.max(a, l - 10)), c = () => n(0, l = Math.min(ie, l + 10));
  return e.$$set = (r) => {
    "rateManager" in r && n(1, i = r.rateManager), "tjm" in r && n(0, l = r.tjm), "amount" in r && n(2, s = r.amount);
  }, [l, i, s, a, o, c];
}
class pt extends nt {
  constructor(t) {
    super(), tt(this, t, se, ne, W, { rateManager: 1, tjm: 0, amount: 2 }, ee);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), T();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(t) {
    this.$$set({ tjm: t }), T();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(t) {
    this.$$set({ amount: t }), T();
  }
}
et(pt, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function re(e) {
  X(e, "svelte-14ojux7", `.component.svelte-14ojux7{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-14ojux7{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-14ojux7:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-14ojux7{width:100%;margin-bottom:1.5em}.component.svelte-14ojux7{flex-direction:column}}`);
}
function le(e) {
  let t, n, i, l, a, s, o, c, r;
  i = new yt({});
  function j(M) {
    e[4](M);
  }
  function d(M) {
    e[5](M);
  }
  let D = { rateManager: (
    /*rateManager*/
    e[2]
  ) };
  return (
    /*tjm*/
    e[0] !== void 0 && (D.tjm = /*tjm*/
    e[0]), /*amount*/
    e[1] !== void 0 && (D.amount = /*amount*/
    e[1]), s = new pt({ props: D }), Y.push(() => jt(s, "tjm", j)), Y.push(() => jt(s, "amount", d)), {
      c() {
        t = N("div"), n = N("div"), It(i.$$.fragment), l = m(), a = N("div"), It(s.$$.fragment), g(n, "class", "block svelte-14ojux7"), g(a, "class", "block svelte-14ojux7"), g(t, "class", "component svelte-14ojux7");
      },
      m(M, I) {
        q(M, t, I), u(t, n), H(i, n, null), u(t, l), u(t, a), H(s, a, null), r = !0;
      },
      p(M, [I]) {
        const z = {};
        !o && I & /*tjm*/
        1 && (o = !0, z.tjm = /*tjm*/
        M[0], dt(() => o = !1)), !c && I & /*amount*/
        2 && (c = !0, z.amount = /*amount*/
        M[1], dt(() => c = !1)), s.$set(z);
      },
      i(M) {
        r || (F(i.$$.fragment, M), F(s.$$.fragment, M), r = !0);
      },
      o(M) {
        ft(i.$$.fragment, M), ft(s.$$.fragment, M), r = !1;
      },
      d(M) {
        M && k(t), V(i), V(s);
      }
    }
  );
}
function oe(e, t, n) {
  let { company: i } = t, l = Ft.create(i), a, s;
  function o(r) {
    a = r, n(0, a);
  }
  function c(r) {
    s = r, n(1, s), n(2, l), n(0, a);
  }
  return e.$$set = (r) => {
    "company" in r && n(3, i = r.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, s = l.getSalary(a) || 0);
  }, [a, s, l, i, o, c];
}
class ht extends nt {
  constructor(t) {
    super(), tt(this, t, oe, le, W, { company: 3 }, re);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), T();
  }
}
customElements.define("renumerator-component", et(ht, { company: {} }, [], [], !0));
class ae extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new ht({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", ae);
