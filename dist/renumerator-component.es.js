var xt = Object.defineProperty;
var At = (e, t, n) => t in e ? xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var d = (e, t, n) => (At(e, typeof t != "symbol" ? t + "" : t, n), n);
function z() {
}
function jt(e) {
  return e();
}
function Mt() {
  return /* @__PURE__ */ Object.create(null);
}
function _(e) {
  e.forEach(jt);
}
function Dt(e) {
  return typeof e == "function";
}
function W(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function $t(e) {
  return Object.keys(e).length === 0;
}
function c(e, t) {
  e.appendChild(t);
}
function X(e, t, n) {
  const i = bt(e);
  if (!i.getElementById(t)) {
    const a = N("style");
    a.id = t, a.textContent = n, wt(i, a);
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
function wt(e, t) {
  return c(
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
function p(e) {
  return document.createTextNode(e);
}
function D() {
  return p(" ");
}
function gt(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Lt(e) {
  return Array.from(e.childNodes);
}
function Nt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function vt(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function Tt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let K;
function S(e) {
  K = e;
}
const w = [], Y = [];
let L = [];
const B = [], Ot = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function St() {
  Z || (Z = !0, Ot.then(v));
}
function J(e) {
  L.push(e);
}
function ft(e) {
  B.push(e);
}
const R = /* @__PURE__ */ new Set();
let b = 0;
function v() {
  if (b !== 0)
    return;
  const e = K;
  do {
    try {
      for (; b < w.length; ) {
        const t = w[b];
        b++, S(t), _t(t.$$);
      }
    } catch (t) {
      throw w.length = 0, b = 0, t;
    }
    for (S(null), w.length = 0, b = 0; Y.length; )
      Y.pop()();
    for (let t = 0; t < L.length; t += 1) {
      const n = L[t];
      R.has(n) || (R.add(n), n());
    }
    L.length = 0;
  } while (w.length);
  for (; B.length; )
    B.pop()();
  Z = !1, R.clear(), S(e);
}
function _t(e) {
  if (e.fragment !== null) {
    e.update(), _(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(J);
  }
}
function kt(e) {
  const t = [], n = [];
  L.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), L = t;
}
const C = /* @__PURE__ */ new Set();
let Et;
function F(e, t) {
  e && e.i && (C.delete(e), e.i(t));
}
function dt(e, t, n, i) {
  if (e && e.o) {
    if (C.has(e))
      return;
    C.add(e), Et.c.push(() => {
      C.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function yt(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function It(e) {
  e && e.c();
}
function H(e, t, n) {
  const { fragment: i, after_update: a } = e.$$;
  i && i.m(t, n), J(() => {
    const o = e.$$.on_mount.map(jt).filter(Dt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : _(o), e.$$.on_mount = [];
  }), a.forEach(J);
}
function V(e, t) {
  const n = e.$$;
  n.fragment !== null && (kt(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Qt(e, t) {
  e.$$.dirty[0] === -1 && (w.push(e), St(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function tt(e, t, n, i, a, o, s = null, l = [-1]) {
  const u = K;
  S(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: z,
    not_equal: a,
    bound: Mt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Mt(),
    dirty: l,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  s && s(r.root);
  let y = !1;
  if (r.ctx = n ? n(e, t.props || {}, (f, j, ...M) => {
    const I = M.length ? M[0] : j;
    return r.ctx && a(r.ctx[f], r.ctx[f] = I) && (!r.skip_bound && r.bound[f] && r.bound[f](I), y && Qt(e, f)), j;
  }) : [], r.update(), y = !0, _(r.before_update), r.fragment = i ? i(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Lt(t.target);
      r.fragment && r.fragment.l(f), f.forEach(k);
    } else
      r.fragment && r.fragment.c();
    t.intro && F(e.$$.fragment), H(e, t.target, t.anchor), v();
  }
  S(u);
}
let mt;
typeof HTMLElement == "function" && (mt = class extends HTMLElement {
  constructor(t, n, i) {
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
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const a = this.$$c.$on(t, n);
      this.$$l_u.set(n, a);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const a = this.$$l_u.get(n);
      a && (a(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return () => {
          let l;
          return {
            c: function() {
              l = N("slot"), s !== "default" && g(l, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(y, f) {
              q(y, l, f);
            },
            d: function(y) {
              y && k(l);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const i = {}, a = Tt(this);
      for (const s of this.$$s)
        s in a && (i[s] = [n(s)]);
      for (const s of this.attributes) {
        const l = this.$$g_p(s.name);
        l in this.$$d || (this.$$d[l] = U(l, s.value, this.$$p_d, "toProp"));
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
      const o = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const l = U(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const l of this.$$l[s]) {
          const u = this.$$c.$on(s, l);
          this.$$l_u.set(l, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, i) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = U(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
  var o;
  const a = (o = n[e]) == null ? void 0 : o.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function et(e, t, n, i, a, o) {
  let s = class extends mt {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var r;
        u = U(l, u, t), this.$$d[l] = u, (r = this.$$c) == null || r.$set({ [l]: u });
      }
    });
  }), i.forEach((l) => {
    Object.defineProperty(s.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), o && (s = o(s)), e.element = /** @type {any} */
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
  $on(t, n) {
    if (!Dt(n))
      return z;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const a = i.indexOf(n);
      a !== -1 && i.splice(a, 1);
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
    d(this, "config");
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
  X(e, "svelte-1aiywh7", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-1aiywh7.svelte-1aiywh7{display:flex;padding:77px 40px;width:calc(100% - 80px);border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1}.renumerator.svelte-1aiywh7 .block.svelte-1aiywh7{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;flex:1}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-1aiywh7 .flex.svelte-1aiywh7{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-1aiywh7 .flex p.svelte-1aiywh7{margin:0 0 30px}.renumerator.svelte-1aiywh7 .title.svelte-1aiywh7{margin-bottom:16px;text-align:left}.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{margin-top:5px}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-1aiywh7 .block.svelte-1aiywh7{display:flex;flex-direction:column;width:100%;box-sizing:border-box;justify-content:center}.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{display:flex;align-self:center;width:100%;margin-top:0}.renumerator.svelte-1aiywh7 .flex.svelte-1aiywh7{margin:5px 20px 0;font-size:1em}.renumerator.svelte-1aiywh7 .flex p.svelte-1aiywh7{margin:0 0 20px}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:1.25em}}');
}
function Vt(e) {
  let t;
  return {
    c() {
      t = N("div"), t.innerHTML = '<div class="container svelte-1aiywh7"><div class="block svelte-1aiywh7"><span class="title svelte-1aiywh7">Découvrez votre futur salaire !</span> <div class="flex svelte-1aiywh7"><p class="svelte-1aiywh7">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-1aiywh7">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', g(t, "class", "renumerator svelte-1aiywh7");
    },
    m(n, i) {
      q(n, t, i);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && k(t);
    }
  };
}
function Wt(e) {
  return [];
}
let ht = class extends nt {
  constructor(t) {
    super(), tt(this, t, Wt, Vt, W, {}, Ht);
  }
};
et(ht, {}, [], [], !0);
const Xt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Kt = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", te = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function ee(e) {
  X(e, "svelte-1qglebt", ".pay.svelte-1qglebt.svelte-1qglebt{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-1qglebt span.title.svelte-1qglebt{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-1qglebt span.line.svelte-1qglebt{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-1qglebt span.amount.svelte-1qglebt{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-1qglebt a.svelte-1qglebt{color:#FFFFFF;margin-bottom:10px}.pay.svelte-1qglebt .joinLink.svelte-1qglebt{display:inline-flex;padding:16px 24px;margin-top:20px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-1qglebt .block.svelte-1qglebt{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-1qglebt .block span.title.svelte-1qglebt{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-1qglebt .flex.svelte-1qglebt{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-1qglebt .flex button.svelte-1qglebt{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-1qglebt .title.svelte-1qglebt{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-1qglebt span.title.svelte-1qglebt{font-size:0.75em}}.img-btn.svelte-1qglebt.svelte-1qglebt{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1qglebt.svelte-1qglebt{width:1.5em}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:1.5em}.pay.svelte-1qglebt .block.svelte-1qglebt{width:100%}.advantage.svelte-1qglebt.svelte-1qglebt{font-size:14px}}");
}
function ne(e) {
  let t, n, i, a, o, s, l, u, r, y, f, j, M, I, m, it, T, P, st, rt, O, at, x, lt, E, ot, A, ct, Q, G, ut;
  return {
    c() {
      t = N("div"), n = N("div"), i = N("span"), i.textContent = "Votre TJM", a = D(), o = N("div"), s = N("button"), s.innerHTML = `<img src="${Xt}" alt="Minus Svg icon" class="img-btn svelte-1qglebt"/>`, l = D(), u = N("span"), r = p(
        /*tjm*/
        e[0]
      ), y = D(), f = N("button"), f.innerHTML = `<img src="${Kt}" alt="Plus Svg icon" class="img-btn svelte-1qglebt"/>`, j = D(), M = N("span"), I = D(), m = N("span"), m.textContent = "Votre salaire annuel brut", it = D(), T = N("span"), P = p(
        /*amount*/
        e[2]
      ), st = p(" €"), rt = D(), O = N("span"), at = p("et + de 9000€ d'"), x = N("a"), lt = p("avantages sociaux"), ot = D(), A = N("a"), ct = p("Envie de nous rejoindre ?"), g(i, "class", "title svelte-1qglebt"), g(s, "class", "svelte-1qglebt"), g(u, "class", "svelte-1qglebt"), g(f, "class", "svelte-1qglebt"), g(o, "class", "flex svelte-1qglebt"), g(n, "class", "block svelte-1qglebt"), g(M, "class", "line svelte-1qglebt"), g(m, "class", "title svelte-1qglebt"), g(T, "class", "amount svelte-1qglebt"), g(x, "href", E = /*rateManager*/
      e[1].getAvantagesLink()), g(x, "class", "svelte-1qglebt"), g(O, "class", "advantage svelte-1qglebt"), g(A, "class", "joinLink svelte-1qglebt"), g(A, "href", Q = /*rateManager*/
      e[1].getJoinUsLink()), g(t, "class", "pay svelte-1qglebt"), vt(t, "background", "url(" + te + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(h, $) {
      q(h, t, $), c(t, n), c(n, i), c(n, a), c(n, o), c(o, s), c(o, l), c(o, u), c(u, r), c(o, y), c(o, f), c(t, j), c(t, M), c(t, I), c(t, m), c(t, it), c(t, T), c(T, P), c(T, st), c(t, rt), c(t, O), c(O, at), c(O, x), c(x, lt), c(t, ot), c(t, A), c(A, ct), G || (ut = [
        gt(
          s,
          "click",
          /*click_handler*/
          e[4]
        ),
        gt(
          f,
          "click",
          /*click_handler_1*/
          e[5]
        )
      ], G = !0);
    },
    p(h, [$]) {
      $ & /*tjm*/
      1 && Nt(
        r,
        /*tjm*/
        h[0]
      ), $ & /*amount*/
      4 && Nt(
        P,
        /*amount*/
        h[2]
      ), $ & /*rateManager*/
      2 && E !== (E = /*rateManager*/
      h[1].getAvantagesLink()) && g(x, "href", E), $ & /*rateManager*/
      2 && Q !== (Q = /*rateManager*/
      h[1].getJoinUsLink()) && g(A, "href", Q);
    },
    i: z,
    o: z,
    d(h) {
      h && k(t), G = !1, _(ut);
    }
  };
}
let ie = 2e3;
function se(e, t, n) {
  let { rateManager: i } = t, { tjm: a = 600 } = t, o = i.getMinTJMValue(), { amount: s = 450 } = t;
  const l = () => n(0, a = Math.max(o, a - 10)), u = () => n(0, a = Math.min(ie, a + 10));
  return e.$$set = (r) => {
    "rateManager" in r && n(1, i = r.rateManager), "tjm" in r && n(0, a = r.tjm), "amount" in r && n(2, s = r.amount);
  }, [a, i, s, o, l, u];
}
class zt extends nt {
  constructor(t) {
    super(), tt(this, t, se, ne, W, { rateManager: 1, tjm: 0, amount: 2 }, ee);
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
et(zt, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function re(e) {
  X(e, "svelte-1rz6yzf", `.component.svelte-1rz6yzf{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500;align-items:stretch}.block.svelte-1rz6yzf{min-width:280px;width:50%;position:relative;z-index:1;margin:0 22px 0;display:flex;flex-direction:column;flex:1;justify-content:stretch}.block.svelte-1rz6yzf:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1rz6yzf{width:100%;margin-bottom:1.5em}.component.svelte-1rz6yzf{flex-direction:column}}`);
}
function ae(e) {
  let t, n, i, a, o, s, l, u, r;
  i = new ht({});
  function y(M) {
    e[4](M);
  }
  function f(M) {
    e[5](M);
  }
  let j = { rateManager: (
    /*rateManager*/
    e[2]
  ) };
  return (
    /*tjm*/
    e[0] !== void 0 && (j.tjm = /*tjm*/
    e[0]), /*amount*/
    e[1] !== void 0 && (j.amount = /*amount*/
    e[1]), s = new zt({ props: j }), Y.push(() => yt(s, "tjm", y)), Y.push(() => yt(s, "amount", f)), {
      c() {
        t = N("div"), n = N("div"), It(i.$$.fragment), a = D(), o = N("div"), It(s.$$.fragment), g(n, "class", "block svelte-1rz6yzf"), g(o, "class", "block svelte-1rz6yzf"), g(t, "class", "component svelte-1rz6yzf");
      },
      m(M, I) {
        q(M, t, I), c(t, n), H(i, n, null), c(t, a), c(t, o), H(s, o, null), r = !0;
      },
      p(M, [I]) {
        const m = {};
        !l && I & /*tjm*/
        1 && (l = !0, m.tjm = /*tjm*/
        M[0], ft(() => l = !1)), !u && I & /*amount*/
        2 && (u = !0, m.amount = /*amount*/
        M[1], ft(() => u = !1)), s.$set(m);
      },
      i(M) {
        r || (F(i.$$.fragment, M), F(s.$$.fragment, M), r = !0);
      },
      o(M) {
        dt(i.$$.fragment, M), dt(s.$$.fragment, M), r = !1;
      },
      d(M) {
        M && k(t), V(i), V(s);
      }
    }
  );
}
function le(e, t, n) {
  let { company: i } = t, a = Ft.create(i), o, s;
  function l(r) {
    o = r, n(0, o);
  }
  function u(r) {
    s = r, n(1, s), n(2, a), n(0, o);
  }
  return e.$$set = (r) => {
    "company" in r && n(3, i = r.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, s = a.getSalary(o) || 0);
  }, [o, s, a, i, l, u];
}
class pt extends nt {
  constructor(t) {
    super(), tt(this, t, le, ae, W, { company: 3 }, re);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), v();
  }
}
customElements.define("renumerator-component", et(pt, { company: {} }, [], [], !0));
class oe extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new pt({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", oe);
