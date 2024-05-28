var It = Object.defineProperty;
var jt = (e, t, n) => t in e ? It(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (jt(e, typeof t != "symbol" ? t + "" : t, n), n);
function x() {
}
function gt(e) {
  return e();
}
function rt() {
  return /* @__PURE__ */ Object.create(null);
}
function v(e) {
  e.forEach(gt);
}
function dt(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Dt(e) {
  return Object.keys(e).length === 0;
}
function l(e, t) {
  e.appendChild(t);
}
function W(e, t, n) {
  const i = xt(e);
  if (!i.getElementById(t)) {
    const u = m("style");
    u.id = t, u.textContent = n, ht(i, u);
  }
}
function xt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function ht(e, t) {
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
function m(e) {
  return document.createElement(e);
}
function b(e) {
  return document.createTextNode(e);
}
function D() {
  return b(" ");
}
function ut(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function d(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function zt(e) {
  return Array.from(e.childNodes);
}
function at(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function pt(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
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
function O(e) {
  F = e;
}
const A = [], Q = [];
let $ = [];
const G = [], $t = /* @__PURE__ */ Promise.resolve();
let R = !1;
function wt() {
  R || (R = !0, $t.then(w));
}
function B(e) {
  $.push(e);
}
function ot(e) {
  G.push(e);
}
const P = /* @__PURE__ */ new Set();
let p = 0;
function w() {
  if (p !== 0)
    return;
  const e = F;
  do {
    try {
      for (; p < A.length; ) {
        const t = A[p];
        p++, O(t), Lt(t.$$);
      }
    } catch (t) {
      throw A.length = 0, p = 0, t;
    }
    for (O(null), A.length = 0, p = 0; Q.length; )
      Q.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const n = $[t];
      P.has(n) || (P.add(n), n());
    }
    $.length = 0;
  } while (A.length);
  for (; G.length; )
    G.pop()();
  R = !1, P.clear(), O(e);
}
function Lt(e) {
  if (e.fragment !== null) {
    e.update(), v(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(B);
  }
}
function Tt(e) {
  const t = [], n = [];
  $.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), $ = t;
}
const E = /* @__PURE__ */ new Set();
let bt;
function Z(e, t) {
  e && e.i && (E.delete(e), e.i(t));
}
function ct(e, t, n, i) {
  if (e && e.o) {
    if (E.has(e))
      return;
    E.add(e), bt.c.push(() => {
      E.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function lt(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function Mt(e) {
  e && e.c();
}
function J(e, t, n) {
  const { fragment: i, after_update: u } = e.$$;
  i && i.m(t, n), B(() => {
    const o = e.$$.on_mount.map(gt).filter(dt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : v(o), e.$$.on_mount = [];
  }), u.forEach(B);
}
function H(e, t) {
  const n = e.$$;
  n.fragment !== null && (Tt(n.after_update), v(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ot(e, t) {
  e.$$.dirty[0] === -1 && (A.push(e), wt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function X(e, t, n, i, u, o, s = null, a = [-1]) {
  const c = F;
  O(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: x,
    not_equal: u,
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
    dirty: a,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  s && s(r.root);
  let f = !1;
  if (r.ctx = n ? n(e, t.props || {}, (g, I, ...M) => {
    const y = M.length ? M[0] : I;
    return r.ctx && u(r.ctx[g], r.ctx[g] = y) && (!r.skip_bound && r.bound[g] && r.bound[g](y), f && Ot(e, g)), I;
  }) : [], r.update(), f = !0, v(r.before_update), r.fragment = i ? i(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = zt(t.target);
      r.fragment && r.fragment.l(g), g.forEach(S);
    } else
      r.fragment && r.fragment.c();
    t.intro && Z(e.$$.fragment), J(e, t.target, t.anchor), w();
  }
  O(c);
}
let mt;
typeof HTMLElement == "function" && (mt = class extends HTMLElement {
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    N(this, "$$ctor");
    /** Slots */
    N(this, "$$s");
    /** The Svelte component instance */
    N(this, "$$c");
    /** Whether or not the custom element is connected */
    N(this, "$$cn", !1);
    /** Component props data */
    N(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    N(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    N(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    N(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    N(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const u = this.$$c.$on(t, n);
      this.$$l_u.set(n, u);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const u = this.$$l_u.get(n);
      u && (u(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return () => {
          let a;
          return {
            c: function() {
              a = m("slot"), s !== "default" && d(a, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, g) {
              C(f, a, g);
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
      const i = {}, u = At(this);
      for (const s of this.$$s)
        s in u && (i[s] = [n(s)]);
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = k(a, s.value, this.$$p_d, "toProp"));
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
            const a = k(
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
    var u;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = k(t, i, this.$$p_d, "toProp"), (u = this.$$c) == null || u.$set({ [t]: this.$$d[t] }));
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
function k(e, t, n, i) {
  var o;
  const u = (o = n[e]) == null ? void 0 : o.type;
  if (t = u === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (u) {
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
    switch (u) {
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
function K(e, t, n, i, u, o) {
  let s = class extends mt {
    constructor() {
      super(e, n, u), this.$$p_d = t;
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
        var r;
        c = k(a, c, t), this.$$d[a] = c, (r = this.$$c) == null || r.$set({ [a]: c });
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
class q {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    N(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    N(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    H(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!dt(n))
      return x;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const u = i.indexOf(n);
      u !== -1 && i.splice(u, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Dt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const vt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(vt);
class St {
  constructor(t) {
    N(this, "config");
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
const _t = 3400, Et = 0, kt = 15, Qt = 450, Ct = "https://stoorm.fr/#contact", Ut = {
  fixed_salary: _t,
  min_salary: Et,
  group_days: kt,
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
  W(e, "svelte-1aiywh7", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-1aiywh7.svelte-1aiywh7{display:flex;padding:77px 40px;width:calc(100% - 80px);border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1}.renumerator.svelte-1aiywh7 .block.svelte-1aiywh7{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;flex:1}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-1aiywh7 .flex.svelte-1aiywh7{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-1aiywh7 .flex p.svelte-1aiywh7{margin:0 0 30px}.renumerator.svelte-1aiywh7 .title.svelte-1aiywh7{margin-bottom:16px;text-align:left}.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{margin-top:5px}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-1aiywh7 .block.svelte-1aiywh7{display:flex;flex-direction:column;width:100%;box-sizing:border-box;justify-content:center}.renumerator.svelte-1aiywh7 .container.svelte-1aiywh7{display:flex;align-self:center;width:100%;margin-top:0}.renumerator.svelte-1aiywh7 .flex.svelte-1aiywh7{margin:5px 20px 0;font-size:1em}.renumerator.svelte-1aiywh7 .flex p.svelte-1aiywh7{margin:0 0 20px}.renumerator.svelte-1aiywh7 .block span.title.svelte-1aiywh7{font-size:1.25em}}');
}
function Rt(e) {
  let t;
  return {
    c() {
      t = m("div"), t.innerHTML = '<div class="container svelte-1aiywh7"><div class="block svelte-1aiywh7"><span class="title svelte-1aiywh7">Découvrez votre futur salaire !</span> <div class="flex svelte-1aiywh7"><p class="svelte-1aiywh7">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-1aiywh7">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', d(t, "class", "renumerator svelte-1aiywh7");
    },
    m(n, i) {
      C(n, t, i);
    },
    p: x,
    i: x,
    o: x,
    d(n) {
      n && S(t);
    }
  };
}
function Bt(e) {
  return [];
}
let Nt = class extends q {
  constructor(t) {
    super(), X(this, t, Bt, Rt, V, {}, Gt);
  }
};
K(Nt, {}, [], [], !0);
const Zt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Jt = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", Ht = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function Vt(e) {
  W(e, "svelte-mmxdu5", ".pay.svelte-mmxdu5.svelte-mmxdu5{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-mmxdu5 span.title.svelte-mmxdu5{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-mmxdu5 span.line.svelte-mmxdu5{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-mmxdu5 span.amount.svelte-mmxdu5{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-mmxdu5 a.svelte-mmxdu5{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-mmxdu5 .block.svelte-mmxdu5{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-mmxdu5 .block span.title.svelte-mmxdu5{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-mmxdu5 .flex.svelte-mmxdu5{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-mmxdu5 .flex button.svelte-mmxdu5{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-mmxdu5 .flex span.svelte-mmxdu5{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-mmxdu5 .title.svelte-mmxdu5{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-mmxdu5 span.title.svelte-mmxdu5{font-size:0.75em}}.img-btn.svelte-mmxdu5.svelte-mmxdu5{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-mmxdu5.svelte-mmxdu5{width:1.5em}.pay.svelte-mmxdu5 .flex span.svelte-mmxdu5{font-size:1.5em}.pay.svelte-mmxdu5 .block.svelte-mmxdu5{width:100%}}");
}
function Wt(e) {
  let t, n, i, u, o, s, a, c, r, f, g, I, M, y, j, tt, L, U, et, nt, z, it, _, Y, st;
  return {
    c() {
      t = m("div"), n = m("div"), i = m("span"), i.textContent = "Votre TJM", u = D(), o = m("div"), s = m("button"), s.innerHTML = `<img src="${Zt}" alt="Minus Svg icon" class="img-btn svelte-mmxdu5"/>`, a = D(), c = m("span"), r = b(
        /*tjm*/
        e[0]
      ), f = D(), g = m("button"), g.innerHTML = `<img src="${Jt}" alt="Plus Svg icon" class="img-btn svelte-mmxdu5"/>`, I = D(), M = m("span"), y = D(), j = m("span"), j.textContent = "Votre salaire annuel brut", tt = D(), L = m("span"), U = b(
        /*amount*/
        e[2]
      ), et = b(" €"), nt = D(), z = m("a"), it = b("Envie de nous rejoindre ?"), d(i, "class", "title svelte-mmxdu5"), d(s, "class", "svelte-mmxdu5"), d(c, "class", "svelte-mmxdu5"), d(g, "class", "svelte-mmxdu5"), d(o, "class", "flex svelte-mmxdu5"), d(n, "class", "block svelte-mmxdu5"), d(M, "class", "line svelte-mmxdu5"), d(j, "class", "title svelte-mmxdu5"), d(L, "class", "amount svelte-mmxdu5"), d(z, "href", _ = /*rateManager*/
      e[1].getJoinUsLink()), d(z, "class", "svelte-mmxdu5"), d(t, "class", "pay svelte-mmxdu5"), pt(t, "background", "url(" + Ht + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(h, T) {
      C(h, t, T), l(t, n), l(n, i), l(n, u), l(n, o), l(o, s), l(o, a), l(o, c), l(c, r), l(o, f), l(o, g), l(t, I), l(t, M), l(t, y), l(t, j), l(t, tt), l(t, L), l(L, U), l(L, et), l(t, nt), l(t, z), l(z, it), Y || (st = [
        ut(
          s,
          "click",
          /*click_handler*/
          e[4]
        ),
        ut(
          g,
          "click",
          /*click_handler_1*/
          e[5]
        )
      ], Y = !0);
    },
    p(h, [T]) {
      T & /*tjm*/
      1 && at(
        r,
        /*tjm*/
        h[0]
      ), T & /*amount*/
      4 && at(
        U,
        /*amount*/
        h[2]
      ), T & /*rateManager*/
      2 && _ !== (_ = /*rateManager*/
      h[1].getJoinUsLink()) && d(z, "href", _);
    },
    i: x,
    o: x,
    d(h) {
      h && S(t), Y = !1, v(st);
    }
  };
}
let Ft = 2e3;
function Xt(e, t, n) {
  let { rateManager: i } = t, { tjm: u = 600 } = t, o = i.getMinTJMValue(), { amount: s = 450 } = t;
  const a = () => n(0, u = Math.max(o, u - 10)), c = () => n(0, u = Math.min(Ft, u + 10));
  return e.$$set = (r) => {
    "rateManager" in r && n(1, i = r.rateManager), "tjm" in r && n(0, u = r.tjm), "amount" in r && n(2, s = r.amount);
  }, [u, i, s, o, a, c];
}
class ft extends q {
  constructor(t) {
    super(), X(this, t, Xt, Wt, V, { rateManager: 1, tjm: 0, amount: 2 }, Vt);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), w();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(t) {
    this.$$set({ tjm: t }), w();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(t) {
    this.$$set({ amount: t }), w();
  }
}
K(ft, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function Kt(e) {
  W(e, "svelte-1rz6yzf", `.component.svelte-1rz6yzf{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500;align-items:stretch}.block.svelte-1rz6yzf{min-width:280px;width:50%;position:relative;z-index:1;margin:0 22px 0;display:flex;flex-direction:column;flex:1;justify-content:stretch}.block.svelte-1rz6yzf:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1rz6yzf{width:100%;margin-bottom:1.5em}.component.svelte-1rz6yzf{flex-direction:column}}`);
}
function qt(e) {
  let t, n, i, u, o, s, a, c, r;
  i = new Nt({});
  function f(M) {
    e[4](M);
  }
  function g(M) {
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
    e[1]), s = new ft({ props: I }), Q.push(() => lt(s, "tjm", f)), Q.push(() => lt(s, "amount", g)), {
      c() {
        t = m("div"), n = m("div"), Mt(i.$$.fragment), u = D(), o = m("div"), Mt(s.$$.fragment), d(n, "class", "block svelte-1rz6yzf"), d(o, "class", "block svelte-1rz6yzf"), d(t, "class", "component svelte-1rz6yzf");
      },
      m(M, y) {
        C(M, t, y), l(t, n), J(i, n, null), l(t, u), l(t, o), J(s, o, null), r = !0;
      },
      p(M, [y]) {
        const j = {};
        !a && y & /*tjm*/
        1 && (a = !0, j.tjm = /*tjm*/
        M[0], ot(() => a = !1)), !c && y & /*amount*/
        2 && (c = !0, j.amount = /*amount*/
        M[1], ot(() => c = !1)), s.$set(j);
      },
      i(M) {
        r || (Z(i.$$.fragment, M), Z(s.$$.fragment, M), r = !0);
      },
      o(M) {
        ct(i.$$.fragment, M), ct(s.$$.fragment, M), r = !1;
      },
      d(M) {
        M && S(t), H(i), H(s);
      }
    }
  );
}
function te(e, t, n) {
  let { company: i } = t, u = Pt.create(i), o, s;
  function a(r) {
    o = r, n(0, o);
  }
  function c(r) {
    s = r, n(1, s), n(2, u), n(0, o);
  }
  return e.$$set = (r) => {
    "company" in r && n(3, i = r.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, s = u.getSalary(o) || 0);
  }, [o, s, u, i, a, c];
}
class yt extends q {
  constructor(t) {
    super(), X(this, t, te, qt, V, { company: 3 }, Kt);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), w();
  }
}
customElements.define("renumerator-component", K(yt, { company: {} }, [], [], !0));
class ee extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new yt({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", ee);
