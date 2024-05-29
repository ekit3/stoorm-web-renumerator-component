var Dt = Object.defineProperty;
var mt = (e, t, n) => t in e ? Dt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var d = (e, t, n) => (mt(e, typeof t != "symbol" ? t + "" : t, n), n);
function m() {
}
function Nt(e) {
  return e();
}
function at() {
  return /* @__PURE__ */ Object.create(null);
}
function O(e) {
  e.forEach(Nt);
}
function dt(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ht(e) {
  return Object.keys(e).length === 0;
}
function u(e, t) {
  e.appendChild(t);
}
function W(e, t, n) {
  const i = pt(e);
  if (!i.getElementById(t)) {
    const r = N("style");
    r.id = t, r.textContent = n, xt(i, r);
  }
}
function pt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function xt(e, t) {
  return u(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function U(e, t, n) {
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
function j() {
  return b(" ");
}
function ot(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function wt(e) {
  return Array.from(e.childNodes);
}
function ct(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function At(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function $t(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let X;
function v(e) {
  X = e;
}
const w = [], C = [];
let A = [];
const R = [], Lt = /* @__PURE__ */ Promise.resolve();
let B = !1;
function Tt() {
  B || (B = !0, Lt.then($));
}
function Z(e) {
  A.push(e);
}
function ut(e) {
  R.push(e);
}
const G = /* @__PURE__ */ new Set();
let x = 0;
function $() {
  if (x !== 0)
    return;
  const e = X;
  do {
    try {
      for (; x < w.length; ) {
        const t = w[x];
        x++, v(t), bt(t.$$);
      }
    } catch (t) {
      throw w.length = 0, x = 0, t;
    }
    for (v(null), w.length = 0, x = 0; C.length; )
      C.pop()();
    for (let t = 0; t < A.length; t += 1) {
      const n = A[t];
      G.has(n) || (G.add(n), n());
    }
    A.length = 0;
  } while (w.length);
  for (; R.length; )
    R.pop()();
  B = !1, G.clear(), v(e);
}
function bt(e) {
  if (e.fragment !== null) {
    e.update(), O(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Z);
  }
}
function vt(e) {
  const t = [], n = [];
  A.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), A = t;
}
const E = /* @__PURE__ */ new Set();
let Ot;
function J(e, t) {
  e && e.i && (E.delete(e), e.i(t));
}
function Mt(e, t, n, i) {
  if (e && e.o) {
    if (E.has(e))
      return;
    E.add(e), Ot.c.push(() => {
      E.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function gt(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function yt(e) {
  e && e.c();
}
function F(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), Z(() => {
    const o = e.$$.on_mount.map(Nt).filter(dt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : O(o), e.$$.on_mount = [];
  }), r.forEach(Z);
}
function H(e, t) {
  const n = e.$$;
  n.fragment !== null && (vt(n.after_update), O(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function St(e, t) {
  e.$$.dirty[0] === -1 && (w.push(e), Tt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function K(e, t, n, i, r, o, s = null, a = [-1]) {
  const c = X;
  v(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: m,
    not_equal: r,
    bound: at(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: at(),
    dirty: a,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  s && s(l.root);
  let f = !1;
  if (l.ctx = n ? n(e, t.props || {}, (y, I, ...M) => {
    const z = M.length ? M[0] : I;
    return l.ctx && r(l.ctx[y], l.ctx[y] = z) && (!l.skip_bound && l.bound[y] && l.bound[y](z), f && St(e, y)), I;
  }) : [], l.update(), f = !0, O(l.before_update), l.fragment = i ? i(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = wt(t.target);
      l.fragment && l.fragment.l(y), y.forEach(S);
    } else
      l.fragment && l.fragment.c();
    t.intro && J(e.$$.fragment), F(e, t.target, t.anchor), $();
  }
  v(c);
}
let ft;
typeof HTMLElement == "function" && (ft = class extends HTMLElement {
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
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return () => {
          let a;
          return {
            c: function() {
              a = N("slot"), s !== "default" && g(a, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, y) {
              U(f, a, y);
            },
            d: function(f) {
              f && S(a);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const i = {}, r = $t(this);
      for (const s of this.$$s)
        s in r && (i[s] = [n(s)]);
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = Q(a, s.value, this.$$p_d, "toProp"));
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
            const a = Q(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const c = this.$$c.$on(s, a);
          this.$$l_u.set(a, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, i) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Q(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
function Q(e, t, n, i) {
  var o;
  const r = (o = n[e]) == null ? void 0 : o.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function q(e, t, n, i, r, o) {
  let s = class extends ft {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(c) {
        var l;
        c = Q(a, c, t), this.$$d[a] = c, (l = this.$$c) == null || l.$set({ [a]: c });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[a];
      }
    });
  }), o && (s = o(s)), e.element = /** @type {any} */
  s, s;
}
class tt {
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
    H(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!dt(n))
      return m;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ht(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const _t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(_t);
class kt {
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
}
const Et = 3400, Qt = 0, Ct = 15, Ut = 450, Yt = "https://stoorm.fr/#contact", Pt = {
  fixed_salary: Et,
  min_salary: Qt,
  group_days: Ct,
  tjm_base: Ut,
  join_link: Yt
};
class Gt extends kt {
  constructor() {
    super(Pt);
  }
}
class Rt {
  static create(t) {
    return new Gt();
  }
}
function Bt(e) {
  W(e, "svelte-1aiywh7", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-1aiywh7.svelte-1aiywh7{display:flex;padding:77px 40px;width:calc(100% - 80px);border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1}.renumerator.svelte-1aiywh7 .block.svelte-1aiywh7{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;flex:1}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-1aiywh7 .flex.svelte-1aiywh7{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-1aiywh7 .flex p.svelte-1aiywh7{margin:0 0 30px}.renumerator.svelte-1aiywh7 .title.svelte-1aiywh7{margin-bottom:16px;text-align:left}.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{margin-top:5px}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-1aiywh7 .block.svelte-1aiywh7{display:flex;flex-direction:column;width:100%;box-sizing:border-box;justify-content:center}.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{display:flex;align-self:center;width:100%;margin-top:0}.renumerator.svelte-1aiywh7 .flex.svelte-1aiywh7{margin:5px 20px 0;font-size:1em}.renumerator.svelte-1aiywh7 .flex p.svelte-1aiywh7{margin:0 0 20px}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:1.25em}}');
}
function Zt(e) {
  let t;
  return {
    c() {
      t = N("div"), t.innerHTML = '<div class="container svelte-1aiywh7"><div class="block svelte-1aiywh7"><span class="title svelte-1aiywh7">Découvrez votre futur salaire !</span> <div class="flex svelte-1aiywh7"><p class="svelte-1aiywh7">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-1aiywh7">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', g(t, "class", "renumerator svelte-1aiywh7");
    },
    m(n, i) {
      U(n, t, i);
    },
    p: m,
    i: m,
    o: m,
    d(n) {
      n && S(t);
    }
  };
}
function Jt(e) {
  return [];
}
let zt = class extends tt {
  constructor(t) {
    super(), K(this, t, Jt, Zt, V, {}, Bt);
  }
};
q(zt, {}, [], [], !0);
const Ft = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Ht = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", Vt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function Wt(e) {
  W(e, "svelte-zlyw4l", ".pay.svelte-zlyw4l.svelte-zlyw4l{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-zlyw4l span.title.svelte-zlyw4l{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-zlyw4l span.line.svelte-zlyw4l{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-zlyw4l span.amount.svelte-zlyw4l{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-zlyw4l a.svelte-zlyw4l{color:#FFFFFF;margin-bottom:10px}.pay.svelte-zlyw4l .joinLink.svelte-zlyw4l{display:inline-flex;padding:16px 24px;margin-top:20px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-zlyw4l .block.svelte-zlyw4l{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-zlyw4l .block span.title.svelte-zlyw4l{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-zlyw4l .flex.svelte-zlyw4l{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-zlyw4l .flex button.svelte-zlyw4l{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-zlyw4l .flex span.svelte-zlyw4l{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-zlyw4l .title.svelte-zlyw4l{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-zlyw4l span.title.svelte-zlyw4l{font-size:0.75em}}.img-btn.svelte-zlyw4l.svelte-zlyw4l{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-zlyw4l.svelte-zlyw4l{width:1.5em}.pay.svelte-zlyw4l .flex span.svelte-zlyw4l{font-size:1.5em}.pay.svelte-zlyw4l .block.svelte-zlyw4l{width:100%}}");
}
function Xt(e) {
  let t, n, i, r, o, s, a, c, l, f, y, I, M, z, D, et, L, Y, nt, it, _, st, p, lt, k, P, rt;
  return {
    c() {
      t = N("div"), n = N("div"), i = N("span"), i.textContent = "Votre TJM", r = j(), o = N("div"), s = N("button"), s.innerHTML = `<img src="${Ft}" alt="Minus Svg icon" class="img-btn svelte-zlyw4l"/>`, a = j(), c = N("span"), l = b(
        /*tjm*/
        e[0]
      ), f = j(), y = N("button"), y.innerHTML = `<img src="${Ht}" alt="Plus Svg icon" class="img-btn svelte-zlyw4l"/>`, I = j(), M = N("span"), z = j(), D = N("span"), D.textContent = "Votre salaire annuel brut", et = j(), L = N("span"), Y = b(
        /*amount*/
        e[2]
      ), nt = b(" €"), it = j(), _ = N("span"), _.innerHTML = 'et + de 9000€ d&#39;<a href="#avantages" class="svelte-zlyw4l">avantages sociaux</a>', st = j(), p = N("a"), lt = b("Envie de nous rejoindre ?"), g(i, "class", "title svelte-zlyw4l"), g(s, "class", "svelte-zlyw4l"), g(c, "class", "svelte-zlyw4l"), g(y, "class", "svelte-zlyw4l"), g(o, "class", "flex svelte-zlyw4l"), g(n, "class", "block svelte-zlyw4l"), g(M, "class", "line svelte-zlyw4l"), g(D, "class", "title svelte-zlyw4l"), g(L, "class", "amount svelte-zlyw4l"), g(_, "class", "advantage svelte-zlyw4l"), g(p, "class", "joinLink svelte-zlyw4l"), g(p, "href", k = /*rateManager*/
      e[1].getJoinUsLink()), g(t, "class", "pay svelte-zlyw4l"), At(t, "background", "url(" + Vt + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(h, T) {
      U(h, t, T), u(t, n), u(n, i), u(n, r), u(n, o), u(o, s), u(o, a), u(o, c), u(c, l), u(o, f), u(o, y), u(t, I), u(t, M), u(t, z), u(t, D), u(t, et), u(t, L), u(L, Y), u(L, nt), u(t, it), u(t, _), u(t, st), u(t, p), u(p, lt), P || (rt = [
        ot(
          s,
          "click",
          /*click_handler*/
          e[4]
        ),
        ot(
          y,
          "click",
          /*click_handler_1*/
          e[5]
        )
      ], P = !0);
    },
    p(h, [T]) {
      T & /*tjm*/
      1 && ct(
        l,
        /*tjm*/
        h[0]
      ), T & /*amount*/
      4 && ct(
        Y,
        /*amount*/
        h[2]
      ), T & /*rateManager*/
      2 && k !== (k = /*rateManager*/
      h[1].getJoinUsLink()) && g(p, "href", k);
    },
    i: m,
    o: m,
    d(h) {
      h && S(t), P = !1, O(rt);
    }
  };
}
let Kt = 2e3;
function qt(e, t, n) {
  let { rateManager: i } = t, { tjm: r = 600 } = t, o = i.getMinTJMValue(), { amount: s = 450 } = t;
  const a = () => n(0, r = Math.max(o, r - 10)), c = () => n(0, r = Math.min(Kt, r + 10));
  return e.$$set = (l) => {
    "rateManager" in l && n(1, i = l.rateManager), "tjm" in l && n(0, r = l.tjm), "amount" in l && n(2, s = l.amount);
  }, [r, i, s, o, a, c];
}
class It extends tt {
  constructor(t) {
    super(), K(this, t, qt, Xt, V, { rateManager: 1, tjm: 0, amount: 2 }, Wt);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), $();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(t) {
    this.$$set({ tjm: t }), $();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(t) {
    this.$$set({ amount: t }), $();
  }
}
q(It, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function te(e) {
  W(e, "svelte-1rz6yzf", `.component.svelte-1rz6yzf{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500;align-items:stretch}.block.svelte-1rz6yzf{min-width:280px;width:50%;position:relative;z-index:1;margin:0 22px 0;display:flex;flex-direction:column;flex:1;justify-content:stretch}.block.svelte-1rz6yzf:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1rz6yzf{width:100%;margin-bottom:1.5em}.component.svelte-1rz6yzf{flex-direction:column}}`);
}
function ee(e) {
  let t, n, i, r, o, s, a, c, l;
  i = new zt({});
  function f(M) {
    e[4](M);
  }
  function y(M) {
    e[5](M);
  }
  let I = { rateManager: (
    /*rateManager*/
    e[2]
  ) };
  return (
    /*tjm*/
    e[0] !== void 0 && (I.tjm = /*tjm*/
    e[0]), /*amount*/
    e[1] !== void 0 && (I.amount = /*amount*/
    e[1]), s = new It({ props: I }), C.push(() => gt(s, "tjm", f)), C.push(() => gt(s, "amount", y)), {
      c() {
        t = N("div"), n = N("div"), yt(i.$$.fragment), r = j(), o = N("div"), yt(s.$$.fragment), g(n, "class", "block svelte-1rz6yzf"), g(o, "class", "block svelte-1rz6yzf"), g(t, "class", "component svelte-1rz6yzf");
      },
      m(M, z) {
        U(M, t, z), u(t, n), F(i, n, null), u(t, r), u(t, o), F(s, o, null), l = !0;
      },
      p(M, [z]) {
        const D = {};
        !a && z & /*tjm*/
        1 && (a = !0, D.tjm = /*tjm*/
        M[0], ut(() => a = !1)), !c && z & /*amount*/
        2 && (c = !0, D.amount = /*amount*/
        M[1], ut(() => c = !1)), s.$set(D);
      },
      i(M) {
        l || (J(i.$$.fragment, M), J(s.$$.fragment, M), l = !0);
      },
      o(M) {
        Mt(i.$$.fragment, M), Mt(s.$$.fragment, M), l = !1;
      },
      d(M) {
        M && S(t), H(i), H(s);
      }
    }
  );
}
function ne(e, t, n) {
  let { company: i } = t, r = Rt.create(i), o, s;
  function a(l) {
    o = l, n(0, o);
  }
  function c(l) {
    s = l, n(1, s), n(2, r), n(0, o);
  }
  return e.$$set = (l) => {
    "company" in l && n(3, i = l.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, s = r.getSalary(o) || 0);
  }, [o, s, r, i, a, c];
}
class jt extends tt {
  constructor(t) {
    super(), K(this, t, ne, ee, V, { company: 3 }, te);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), $();
  }
}
customElements.define("renumerator-component", q(jt, { company: {} }, [], [], !0));
class ie extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new jt({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", ie);
