var xe = Object.defineProperty;
var Ae = (t, e, n) => e in t ? xe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var f = (t, e, n) => (Ae(t, typeof e != "symbol" ? e + "" : e, n), n);
function p() {
}
function Ie(t) {
  return t();
}
function ge() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(Ie);
}
function De(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function $e(t) {
  return Object.keys(t).length === 0;
}
function u(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  const i = be(t);
  if (!i.getElementById(e)) {
    const l = N("style");
    l.id = e, l.textContent = n, we(i, l);
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
function we(t, e) {
  return u(
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
function N(t) {
  return document.createElement(t);
}
function z(t) {
  return document.createTextNode(t);
}
function D() {
  return z(" ");
}
function Me(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function M(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Le(t) {
  return Array.from(t.childNodes);
}
function Ne(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function ve(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Te(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let K;
function S(t) {
  K = t;
}
const w = [], Y = [];
let L = [];
const B = [], Oe = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function Se() {
  Z || (Z = !0, Oe.then(v));
}
function J(t) {
  L.push(t);
}
function de(t) {
  B.push(t);
}
const R = /* @__PURE__ */ new Set();
let b = 0;
function v() {
  if (b !== 0)
    return;
  const t = K;
  do {
    try {
      for (; b < w.length; ) {
        const e = w[b];
        b++, S(e), _e(e.$$);
      }
    } catch (e) {
      throw w.length = 0, b = 0, e;
    }
    for (S(null), w.length = 0, b = 0; Y.length; )
      Y.pop()();
    for (let e = 0; e < L.length; e += 1) {
      const n = L[e];
      R.has(n) || (R.add(n), n());
    }
    L.length = 0;
  } while (w.length);
  for (; B.length; )
    B.pop()();
  Z = !1, R.clear(), S(t);
}
function _e(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
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
function fe(t, e, n, i) {
  if (t && t.o) {
    if (C.has(t))
      return;
    C.add(t), Ee.c.push(() => {
      C.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function ye(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function je(t) {
  t && t.c();
}
function H(t, e, n) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), J(() => {
    const a = t.$$.on_mount.map(Ie).filter(De);
    t.$$.on_destroy ? t.$$.on_destroy.push(...a) : _(a), t.$$.on_mount = [];
  }), l.forEach(J);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (ke(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Qe(t, e) {
  t.$$.dirty[0] === -1 && (w.push(t), Se(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(t, e, n, i, l, a, s = null, o = [-1]) {
  const c = K;
  S(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: p,
    not_equal: l,
    bound: ge(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: ge(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(r.root);
  let y = !1;
  if (r.ctx = n ? n(t, e.props || {}, (d, I, ...g) => {
    const j = g.length ? g[0] : I;
    return r.ctx && l(r.ctx[d], r.ctx[d] = j) && (!r.skip_bound && r.bound[d] && r.bound[d](j), y && Qe(t, d)), I;
  }) : [], r.update(), y = !0, _(r.before_update), r.fragment = i ? i(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Le(e.target);
      r.fragment && r.fragment.l(d), d.forEach(k);
    } else
      r.fragment && r.fragment.c();
    e.intro && F(t.$$.fragment), H(t, e.target, e.anchor), v();
  }
  S(c);
}
let me;
typeof HTMLElement == "function" && (me = class extends HTMLElement {
  constructor(e, n, i) {
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
              o = N("slot"), s !== "default" && M(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(y, d) {
              q(y, o, d);
            },
            d: function(y) {
              y && k(o);
            }
          };
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const i = {}, l = Te(this);
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
  var a;
  const l = (a = n[t]) == null ? void 0 : a.type;
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
function te(t, e, n, i, l, a) {
  let s = class extends me {
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
  }), a && (s = a(s)), t.element = /** @type {any} */
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
  $on(e, n) {
    if (!De(n))
      return p;
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
    f(this, "config");
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
  X(t, "svelte-3iwghy", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-3iwghy.svelte-3iwghy{display:flex;border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1;flex-direction:column;height:100%}.renumerator.svelte-3iwghy .rem-block.svelte-3iwghy{display:flex;flex-direction:column;width:100%;margin-top:20%;box-sizing:border-box;flex:1}.renumerator.svelte-3iwghy .rem-block span.title.svelte-3iwghy{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-3iwghy .flex.svelte-3iwghy{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-3iwghy .flex p.svelte-3iwghy{margin:0 0 30px}.renumerator.svelte-3iwghy .title.svelte-3iwghy{margin-bottom:16px;text-align:left}.renumerator.svelte-3iwghy .container.svelte-3iwghy{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-3iwghy .container.svelte-3iwghy{margin-top:5px}.renumerator.svelte-3iwghy .rem-block span.title.svelte-3iwghy{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-3iwghy .container.svelte-3iwghy{display:flex;flex-direction:column;align-self:center;width:100%;margin-top:0}.renumerator.svelte-3iwghy .flex.svelte-3iwghy{margin:5px 20px 0;font-size:0.75em}.renumerator.svelte-3iwghy .flex p.svelte-3iwghy{margin:0 0 20px}.renumerator.svelte-3iwghy .rem-block span.title.svelte-3iwghy{font-size:1em}}');
}
function Ve(t) {
  let e;
  return {
    c() {
      e = N("div"), e.innerHTML = '<div class="container svelte-3iwghy"><div class="rem-block svelte-3iwghy"><span class="title svelte-3iwghy">Découvrez votre futur salaire !</span> <div class="flex svelte-3iwghy"><p class="svelte-3iwghy">Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-3iwghy">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', M(e, "class", "renumerator svelte-3iwghy");
    },
    m(n, i) {
      q(n, e, i);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && k(e);
    }
  };
}
function We(t) {
  return [];
}
let he = class extends ne {
  constructor(e) {
    super(), ee(this, e, We, Ve, W, {}, He);
  }
};
te(he, {}, [], [], !0);
const Xe = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", Ke = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", et = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function tt(t) {
  X(t, "svelte-1qglebt", ".pay.svelte-1qglebt.svelte-1qglebt{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-1qglebt span.title.svelte-1qglebt{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-1qglebt span.line.svelte-1qglebt{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-1qglebt span.amount.svelte-1qglebt{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-1qglebt a.svelte-1qglebt{color:#FFFFFF;margin-bottom:10px}.pay.svelte-1qglebt .joinLink.svelte-1qglebt{display:inline-flex;padding:16px 24px;margin-top:20px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-1qglebt .block.svelte-1qglebt{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-1qglebt .block span.title.svelte-1qglebt{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-1qglebt .flex.svelte-1qglebt{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-1qglebt .flex button.svelte-1qglebt{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-1qglebt .title.svelte-1qglebt{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-1qglebt span.title.svelte-1qglebt{font-size:0.75em}}.img-btn.svelte-1qglebt.svelte-1qglebt{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1qglebt.svelte-1qglebt{width:1.5em}.pay.svelte-1qglebt .flex span.svelte-1qglebt{font-size:1.5em}.pay.svelte-1qglebt .block.svelte-1qglebt{width:100%}.advantage.svelte-1qglebt.svelte-1qglebt{font-size:14px}}");
}
function nt(t) {
  let e, n, i, l, a, s, o, c, r, y, d, I, g, j, m, ie, T, P, se, re, O, le, x, oe, E, ae, A, ue, Q, G, ce;
  return {
    c() {
      e = N("div"), n = N("div"), i = N("span"), i.textContent = "Votre TJM", l = D(), a = N("div"), s = N("button"), s.innerHTML = `<img src="${Xe}" alt="Minus Svg icon" class="img-btn svelte-1qglebt"/>`, o = D(), c = N("span"), r = z(
        /*tjm*/
        t[0]
      ), y = D(), d = N("button"), d.innerHTML = `<img src="${Ke}" alt="Plus Svg icon" class="img-btn svelte-1qglebt"/>`, I = D(), g = N("span"), j = D(), m = N("span"), m.textContent = "Votre salaire annuel brut", ie = D(), T = N("span"), P = z(
        /*amount*/
        t[2]
      ), se = z(" €"), re = D(), O = N("span"), le = z("et + de 9000€ d'"), x = N("a"), oe = z("avantages sociaux"), ae = D(), A = N("a"), ue = z("Envie de nous rejoindre ?"), M(i, "class", "title svelte-1qglebt"), M(s, "class", "svelte-1qglebt"), M(c, "class", "svelte-1qglebt"), M(d, "class", "svelte-1qglebt"), M(a, "class", "flex svelte-1qglebt"), M(n, "class", "block svelte-1qglebt"), M(g, "class", "line svelte-1qglebt"), M(m, "class", "title svelte-1qglebt"), M(T, "class", "amount svelte-1qglebt"), M(x, "href", E = /*rateManager*/
      t[1].getAvantagesLink()), M(x, "class", "svelte-1qglebt"), M(O, "class", "advantage svelte-1qglebt"), M(A, "class", "joinLink svelte-1qglebt"), M(A, "href", Q = /*rateManager*/
      t[1].getJoinUsLink()), M(e, "class", "pay svelte-1qglebt"), ve(e, "background", "url(" + et + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(h, $) {
      q(h, e, $), u(e, n), u(n, i), u(n, l), u(n, a), u(a, s), u(a, o), u(a, c), u(c, r), u(a, y), u(a, d), u(e, I), u(e, g), u(e, j), u(e, m), u(e, ie), u(e, T), u(T, P), u(T, se), u(e, re), u(e, O), u(O, le), u(O, x), u(x, oe), u(e, ae), u(e, A), u(A, ue), G || (ce = [
        Me(
          s,
          "click",
          /*click_handler*/
          t[4]
        ),
        Me(
          d,
          "click",
          /*click_handler_1*/
          t[5]
        )
      ], G = !0);
    },
    p(h, [$]) {
      $ & /*tjm*/
      1 && Ne(
        r,
        /*tjm*/
        h[0]
      ), $ & /*amount*/
      4 && Ne(
        P,
        /*amount*/
        h[2]
      ), $ & /*rateManager*/
      2 && E !== (E = /*rateManager*/
      h[1].getAvantagesLink()) && M(x, "href", E), $ & /*rateManager*/
      2 && Q !== (Q = /*rateManager*/
      h[1].getJoinUsLink()) && M(A, "href", Q);
    },
    i: p,
    o: p,
    d(h) {
      h && k(e), G = !1, _(ce);
    }
  };
}
let it = 2e3;
function st(t, e, n) {
  let { rateManager: i } = e, { tjm: l = 600 } = e, a = i.getMinTJMValue(), { amount: s = 450 } = e;
  const o = () => n(0, l = Math.max(a, l - 10)), c = () => n(0, l = Math.min(it, l + 10));
  return t.$$set = (r) => {
    "rateManager" in r && n(1, i = r.rateManager), "tjm" in r && n(0, l = r.tjm), "amount" in r && n(2, s = r.amount);
  }, [l, i, s, a, o, c];
}
class pe extends ne {
  constructor(e) {
    super(), ee(this, e, st, nt, W, { rateManager: 1, tjm: 0, amount: 2 }, tt);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(e) {
    this.$$set({ rateManager: e }), v();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(e) {
    this.$$set({ tjm: e }), v();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(e) {
    this.$$set({ amount: e }), v();
  }
}
te(pe, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function rt(t) {
  X(t, "svelte-14ojux7", `.component.svelte-14ojux7{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-14ojux7{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-14ojux7:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-14ojux7{width:100%;margin-bottom:1.5em}.component.svelte-14ojux7{flex-direction:column}}`);
}
function lt(t) {
  let e, n, i, l, a, s, o, c, r;
  i = new he({});
  function y(g) {
    t[4](g);
  }
  function d(g) {
    t[5](g);
  }
  let I = { rateManager: (
    /*rateManager*/
    t[2]
  ) };
  return (
    /*tjm*/
    t[0] !== void 0 && (I.tjm = /*tjm*/
    t[0]), /*amount*/
    t[1] !== void 0 && (I.amount = /*amount*/
    t[1]), s = new pe({ props: I }), Y.push(() => ye(s, "tjm", y)), Y.push(() => ye(s, "amount", d)), {
      c() {
        e = N("div"), n = N("div"), je(i.$$.fragment), l = D(), a = N("div"), je(s.$$.fragment), M(n, "class", "block svelte-14ojux7"), M(a, "class", "block svelte-14ojux7"), M(e, "class", "component svelte-14ojux7");
      },
      m(g, j) {
        q(g, e, j), u(e, n), H(i, n, null), u(e, l), u(e, a), H(s, a, null), r = !0;
      },
      p(g, [j]) {
        const m = {};
        !o && j & /*tjm*/
        1 && (o = !0, m.tjm = /*tjm*/
        g[0], de(() => o = !1)), !c && j & /*amount*/
        2 && (c = !0, m.amount = /*amount*/
        g[1], de(() => c = !1)), s.$set(m);
      },
      i(g) {
        r || (F(i.$$.fragment, g), F(s.$$.fragment, g), r = !0);
      },
      o(g) {
        fe(i.$$.fragment, g), fe(s.$$.fragment, g), r = !1;
      },
      d(g) {
        g && k(e), V(i), V(s);
      }
    }
  );
}
function ot(t, e, n) {
  let { company: i } = e, l = Fe.create(i), a, s;
  function o(r) {
    a = r, n(0, a);
  }
  function c(r) {
    s = r, n(1, s), n(2, l), n(0, a);
  }
  return t.$$set = (r) => {
    "company" in r && n(3, i = r.company);
  }, t.$$.update = () => {
    t.$$.dirty & /*tjm*/
    1 && n(1, s = l.getSalary(a) || 0);
  }, [a, s, l, i, o, c];
}
class ze extends ne {
  constructor(e) {
    super(), ee(this, e, ot, lt, W, { company: 3 }, rt);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(e) {
    this.$$set({ company: e }), v();
  }
}
customElements.define("renumerator-component", te(ze, { company: {} }, [], [], !0));
class at extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("company"), n = e ?? "";
    new ze({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", at);
