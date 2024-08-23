var kt = Object.defineProperty;
var Tt = (e, t, n) => t in e ? kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => (Tt(e, typeof t != "symbol" ? t + "" : t, n), n);
function I() {
}
function pt(e) {
  return e();
}
function dt() {
  return /* @__PURE__ */ Object.create(null);
}
function R(e) {
  e.forEach(pt);
}
function zt(e) {
  return typeof e == "function";
}
function G(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function bt(e) {
  return Object.keys(e).length === 0;
}
function l(e, t) {
  e.appendChild(t);
}
function ot(e, t, n) {
  const i = Ot(e);
  if (!i.getElementById(t)) {
    const r = y("style");
    r.id = t, r.textContent = n, St(i, r);
  }
}
function Ot(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function St(e, t) {
  return l(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function U(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function y(e) {
  return document.createElement(e);
}
function A(e) {
  return document.createTextNode(e);
}
function h() {
  return A(" ");
}
function It(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function _t(e) {
  return Array.from(e.childNodes);
}
function $t(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Et(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function Qt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let at;
function Y(e) {
  at = e;
}
const S = [], q = [];
let _ = [];
const nt = [], Ct = /* @__PURE__ */ Promise.resolve();
let it = !1;
function Ut() {
  it || (it = !0, Ct.then(z));
}
function st(e) {
  _.push(e);
}
function Dt(e) {
  nt.push(e);
}
const et = /* @__PURE__ */ new Set();
let O = 0;
function z() {
  if (O !== 0)
    return;
  const e = at;
  do {
    try {
      for (; O < S.length; ) {
        const t = S[O];
        O++, Y(t), Yt(t.$$);
      }
    } catch (t) {
      throw S.length = 0, O = 0, t;
    }
    for (Y(null), S.length = 0, O = 0; q.length; )
      q.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      et.has(n) || (et.add(n), n());
    }
    _.length = 0;
  } while (S.length);
  for (; nt.length; )
    nt.pop()();
  it = !1, et.clear(), Y(e);
}
function Yt(e) {
  if (e.fragment !== null) {
    e.update(), R(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(st);
  }
}
function Pt(e) {
  const t = [], n = [];
  _.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), _ = t;
}
const X = /* @__PURE__ */ new Set();
let Ft;
function E(e, t) {
  e && e.i && (X.delete(e), e.i(t));
}
function P(e, t, n, i) {
  if (e && e.o) {
    if (X.has(e))
      return;
    X.add(e), Ft.c.push(() => {
      X.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function ht(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function F(e) {
  e && e.c();
}
function Q(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), st(() => {
    const u = e.$$.on_mount.map(pt).filter(zt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...u) : R(u), e.$$.on_mount = [];
  }), r.forEach(st);
}
function C(e, t) {
  const n = e.$$;
  n.fragment !== null && (Pt(n.after_update), R(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Rt(e, t) {
  e.$$.dirty[0] === -1 && (S.push(e), Ut(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function B(e, t, n, i, r, u, s = null, a = [-1]) {
  const c = at;
  Y(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: I,
    not_equal: r,
    bound: dt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: dt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  s && s(o.root);
  let m = !1;
  if (o.ctx = n ? n(e, t.props || {}, (j, D, ...M) => {
    const d = M.length ? M[0] : D;
    return o.ctx && r(o.ctx[j], o.ctx[j] = d) && (!o.skip_bound && o.bound[j] && o.bound[j](d), m && Rt(e, j)), D;
  }) : [], o.update(), m = !0, R(o.before_update), o.fragment = i ? i(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const j = _t(t.target);
      o.fragment && o.fragment.l(j), j.forEach(v);
    } else
      o.fragment && o.fragment.c();
    t.intro && E(e.$$.fragment), Q(e, t.target, t.anchor), z();
  }
  Y(c);
}
let xt;
typeof HTMLElement == "function" && (xt = class extends HTMLElement {
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
              a = y("slot"), s !== "default" && g(a, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(m, j) {
              U(m, a, j);
            },
            d: function(m) {
              m && v(a);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const i = {}, r = Qt(this);
      for (const s of this.$$s)
        s in r && (i[s] = [n(s)]);
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = K(a, s.value, this.$$p_d, "toProp"));
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
            const a = K(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(u), u();
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = K(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
function K(e, t, n, i) {
  var u;
  const r = (u = n[e]) == null ? void 0 : u.type;
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
function Z(e, t, n, i, r, u) {
  let s = class extends xt {
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
        var o;
        c = K(a, c, t), this.$$d[a] = c, (o = this.$$c) == null || o.$set({ [a]: c });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[a];
      }
    });
  }), u && (s = u(s)), e.element = /** @type {any} */
  s, s;
}
class J {
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
    C(this, 1), this.$destroy = I;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!zt(n))
      return I;
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
    this.$$set && !bt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Gt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Gt);
class Bt {
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
  getAvantagesLink() {
    return this.config.avantages_link;
  }
}
const Zt = 3400, Jt = 0, Ht = 15, Vt = 450, Wt = "https://stoorm.fr/#contact", Xt = "https://stoorm.fr/?page_id=627&preview=true#avantages", Kt = {
  fixed_salary: Zt,
  min_salary: Jt,
  group_days: Ht,
  tjm_base: Vt,
  join_link: Wt,
  avantages_link: Xt
};
class qt extends Bt {
  constructor() {
    super(Kt);
  }
}
class te {
  static create(t) {
    return new qt();
  }
}
function ee(e) {
  ot(e, "svelte-3iwghy", '@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-3iwghy.svelte-3iwghy{display:flex;border-radius:32px;background:linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);flex:1;flex-direction:column;height:100%}.renumerator.svelte-3iwghy .rem-block.svelte-3iwghy{display:flex;flex-direction:column;width:100%;margin-top:20%;box-sizing:border-box;flex:1}.renumerator.svelte-3iwghy .rem-block span.title.svelte-3iwghy{font-size:2.5em;font-weight:900;margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-3iwghy .flex.svelte-3iwghy{margin:5px 50px 0;font-size:1.25em}.renumerator.svelte-3iwghy .flex p.svelte-3iwghy{margin:0 0 30px}.renumerator.svelte-3iwghy .title.svelte-3iwghy{margin-bottom:16px;text-align:left}.renumerator.svelte-3iwghy .container.svelte-3iwghy{display:flex;align-self:center;width:100%}@media screen and (max-width: 1023px){.renumerator.svelte-3iwghy .container.svelte-3iwghy{margin-top:5px}.renumerator.svelte-3iwghy .rem-block span.title.svelte-3iwghy{font-size:2em}}@media screen and (max-width: 500px){.renumerator.svelte-3iwghy .container.svelte-3iwghy{display:flex;flex-direction:column;align-self:center;width:100%;margin-top:0}.renumerator.svelte-3iwghy .flex.svelte-3iwghy{margin:5px 20px 0;font-size:0.75em}.renumerator.svelte-3iwghy .flex p.svelte-3iwghy{margin:0 0 20px}.renumerator.svelte-3iwghy .rem-block span.title.svelte-3iwghy{font-size:1em}}');
}
function ne(e) {
  let t;
  return {
    c() {
      t = y("div"), t.innerHTML = '<div class="container svelte-3iwghy"><div class="rem-block svelte-3iwghy"><span class="title svelte-3iwghy">Découvrez votre futur salaire !</span> <div class="flex svelte-3iwghy"><p class="svelte-3iwghy">Parce que le respect entre collaborateurs et collaboratrices passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés et employées de s’épanouir dans et en dehors de leur vie professionnelle.</p> <p class="svelte-3iwghy">Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p></div></div></div>', g(t, "class", "renumerator svelte-3iwghy");
    },
    m(n, i) {
      U(n, t, i);
    },
    p: I,
    i: I,
    o: I,
    d(n) {
      n && v(t);
    }
  };
}
function ie(e) {
  return [];
}
let At = class extends J {
  constructor(t) {
    super(), B(this, t, ie, ne, G, {}, ee);
  }
};
Z(At, {}, [], [], !0);
const se = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", re = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+", oe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcyIiBoZWlnaHQ9IjI0NCIgdmlld0JveD0iMCAwIDc3MiAyNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNzQwLjA2OCAyMzcuOTE0Qzc0MC4wNjggMzc0LjA0MSA2MTMuMzk1IDQwNS45MjUgNTU3LjUyMSA0MDUuOTI1QzUwMS42NDYgNDA1LjkyNSAzOTQuMDc1IDM3NS42MzYgMzg1LjU0NiAyMzcuOTE0QzM3Ny4wMTYgMTAwLjIwNiAyNzAuMDkzIDc3LjUwMzcgMjcwLjA5MyA3Ny41MDM3QzI3MC4wOTMgNzcuNTAzNyAzNy40NDU4IDE2LjQzNzUgMzUuMzQyMiAyNDAuNUMzNS4zMjc4IDI0MS4wMDMgMzUuMzI3OSAyNDEuNTIgMzUuMzI3OSAyNDIuMDA5QzM0LjM0ODEgNDY0LjI2MSAyNzQuNzMzIDM5Ni4wODIgMjc0LjczMyAzOTYuMDgyQzI4NS45NzEgNDE4LjU5OCAzMDEuMTU3IDQ0MC45MjYgMzIxLjU0NSA0NjAuOTI3QzI4OC4xOSA0NzQuMDE3IDI1MS4xMzIgNDgxIDIxMi4yNDUgNDgxQzE0OS4wMjIgNDgxIDkzLjIxOTUgNDY0LjUzNCA0OS43NTAzIDQzNC41OUMxNS4zMDA2IDQxMC44NjcgLTExLjM4MzIgMzc4LjY2OCAtMjcuOTM4MSAzMzkuNDk5Qy0zMy4xMTA2IDMyNy4yNTcgLTM3LjI3NDYgMzE0LjM1NCAtNDAuMzg2NyAzMDAuODA1Qy00NC42MjI3IDI4Mi4zNDEgLTQ2Ljg4NDcgMjYyLjcxNCAtNDcgMjQyLjAwOVYyNDAuNUMtNDcgMTI0Ljc3NiAzMi43MiAzOS45NzMyIDEzNS40NjQgMTAuOTYzMkMxNDYuMTEyIDcuOTMxNDIgMTU3LjAxOSA1LjUxNzUxIDE2OC4xMTMgMy43NTAxOEMxODMuNDE0IDEuMjY0NDMgMTk5LjA3NiAwIDIxNC45MjUgMEMyNzQuNDQ1IDAgMzI3LjM2NiAxNC42OTkgMzY5LjYzOSA0MS40Njc1QzM3Ni40ODMgNDUuODA2OCAzODMuMDUzIDUwLjQ3NjUgMzg5LjMwNiA1NS40MTkzQzM5NS41MTYgNjAuMzE5IDQwMS40MzggNjUuNTM0OCA0MDcuMDU3IDcxLjAyMzVDNDM2LjkxIDEwMC4zMDcgNDU4LjA0NyAxMzcuNzk0IDQ2Ny44ODggMTgxLjg3NkM0NzAuMTIxIDE5MS44NDggNDcxLjc3OCAyMDIuMTc5IDQ3Mi44MyAyMTIuODEyQzQ3My43MjMgMjIxLjgyMSA0NzQuMTcgMjMxLjA2IDQ3NC4xNyAyNDAuNUg0NzUuMTIxQzQ3NS4xMDYgMjQxLjE3NSA0NzUuMTA2IDI0MS44MzYgNDc1LjEwNiAyNDIuNTEyQzQ3NS4xMDYgMjYzLjgwNiA0ODEuMDE0IDI4Mi40OTkgNDkxLjQzMSAyOTcuMDRDNTA1LjkyNSAzMTcuMTk5IDUyOS4xMjIgMzI5LjM1NSA1NTcuNTIxIDMyOS4zNTVINTU4LjA1NEM2MDcuOTkyIDMyOS4wOTYgNjM5LjkyIDI5My4xMDMgNjM5LjkyIDI0Mi41MTJDNjM5LjkyIDI0MS44MzYgNjM5LjkyMSAyNDEuMTYxIDYzOS44OTIgMjQwLjVDNjM5LjA0MiAxOTEuMTczIDYwNy42MTcgMTU1LjU4MiA1NTguNzMxIDE1NS4wMDdWMTU0Ljc5MkM1NDQuMDA2IDE1NC45NSA1MzAuNjY0IDE1Ny41NTEgNTE4Ljk3OSAxNjIuMjQ5QzUxMy42NjIgMTM4Ljc1NyA1MDQuODMgMTEyLjQ5MSA0OTAuMzIxIDg2LjQ5ODRDNDkwLjMyMSA4Ni40OTg0IDUxOS41MTIgNzkuMDk4NiA1NTguNzg4IDc2Ljk4NjRWNzUuMTE4NkM3MjEuNzE1IDc1LjU3ODMgNzQwLjA2OCAyMzcuOTE0IDc0MC4wNjggMjM3LjkxNFoiIGZpbGw9IiNGNzVDQUYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+Cgk8cGF0aCBkPSJNODE5IDI0MC43MDFDODE5IDM1Ny4wNiA3NDMuMTAzIDQ0MC45ODggNjM5LjI5NiA0NjkuOTMxQzYxMy42OCA0NzcuMDk1IDU4Ni4zOSA0ODAuOSA1NTguMTA1IDQ4MC45ODZDNTU3LjY3MyA0ODEgNTU3LjI0IDQ4MSA1NTYuODA3IDQ4MUM0OTcuODcyIDQ4MSA0NDUuMzk5IDQ2Ni43NDQgNDAzLjI5NyA0NDAuNjQ0QzM5Ni4zODggNDM2LjMyMyAzODkuNzY3IDQzMS43MTQgMzgzLjQzNSA0MjYuODE5QzM3Ny4xNzYgNDIxLjk1MiAzNzEuMjA0IDQxNi43ODMgMzY1LjU2NSA0MTEuMzI4QzMzNS44NTIgMzgyLjY4NyAzMTQuNjIgMzQ2LjAwNiAzMDQuMzIyIDMwMi43NjRDMzAxLjUwOSAyOTAuOTIgMjk5LjUwNCAyNzguNTg4IDI5OC4zOTQgMjY1Ljc5NkMyOTcuNjczIDI1Ny42MjcgMjk3LjI5OCAyNDkuMjU3IDI5Ny4yOTggMjQwLjcwMUgyOTYuMzAyQzI5NS45NTYgMjE5Ljc2OSAyOTAuMDg2IDIwMS4zMzYgMjc5LjY4NiAxODYuOTc5QzI2NS4zOTMgMTY3LjI1MyAyNDIuNTc0IDE1NS4yNjYgMjEzLjg0MyAxNTUuMjY2QzE2NS41MzggMTU1LjI2NiAxMzIuMjYzIDE5MS42NDUgMTMxLjM5NyAyNDAuNzAxQzEzMS4zNTQgMjQxLjIwMyAxMzEuMzU0IDI0MS43MDYgMTMxLjM1NCAyNDIuMjA4VjI0Mi43MTFDMTMxLjM1NCAyOTMuNDMyIDE2NC44NzQgMzI5LjQ4MiAyMTMuODQzIDMyOS40ODJDMjI3LjI0MiAzMjkuNDgyIDIzOS4zNzIgMzI2LjkyNiAyNDkuOTMgMzIyLjIwM0MyNTQuNTg5IDM0NS4xNDUgMjYyLjMzNSAzNzAuNzcxIDI3NS4wNTYgMzk2LjE1M0MyNzUuMDU2IDM5Ni4xNTMgMzQuNDEyOCA0NjQuMjc1IDM1LjM5MzYgMjQyLjIwOEMzNS4zOTM2IDI0MS43MiAzNS4zOTM1IDI0MS4yMDMgMzUuNDA4IDI0MC43MDFDMzcuNTEzOCAxNi44MjU4IDI3MC40ODMgNzMuNTc2NSAyNzAuNDgzIDczLjU3NjVDMjcwLjQ4MyA3My41NzY1IDM3Ny40NSAxMDAuNTI0IDM4NS45ODggMjM4LjExN0MzOTQuNTI3IDM3NS43MjQgNTAyLjIyOCA0MDUuOTg3IDU1OC4xNDkgNDA1Ljk4N0M2MTQuMDY5IDQwNS45ODcgNzI3LjU2OCAzNzQuMTMgNzI3LjU2OCAyMzguMTE3QzcyNy41NjggMjM4LjExNyA3MjIuNTQ5IDc2LjY2MzcgNTYwLjUyOSA3NS40NzIxVjc3LjI2NjZDNTIwLjY0NyA3OS4yOTA5IDQ5MC44NzcgODYuODI4MSA0OTAuODc3IDg2LjgyODFDNDc4LjAyNSA2My44MTQ2IDQ2MC42NzQgNDAuOTczNCA0MzcuMzY1IDIwLjUxNTRDNDc0Ljk4MiA3LjMyMTggNTE2LjcyNCAwLjE4NjYzNCA1NjAuNTI5IDBWMC40MDE5OEM3MTAuODggMC44NDcwMzIgODE5IDk0Ljg4MjEgODE5IDI0MC43MDFaIiBmaWxsPSIjRjc1Q0FGIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K";
function ae(e) {
  let t, n;
  return {
    c() {
      t = y("span"), n = A(
        /*formattedValue*/
        e[0]
      );
    },
    m(i, r) {
      U(i, t, r), l(t, n);
    },
    p(i, [r]) {
      r & /*formattedValue*/
      1 && $t(
        n,
        /*formattedValue*/
        i[0]
      );
    },
    i: I,
    o: I,
    d(i) {
      i && v(t);
    }
  };
}
function ue(e, t, n) {
  let i, { value: r } = t;
  const u = new Intl.NumberFormat(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  );
  return e.$$set = (s) => {
    "value" in s && n(1, r = s.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    2 && n(0, i = u.format(r));
  }, [i, r];
}
class rt extends J {
  constructor(t) {
    super(), B(this, t, ue, ae, G, { value: 1 });
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(t) {
    this.$$set({ value: t }), z();
  }
}
Z(rt, { value: {} }, [], [], !0);
function le(e) {
  let t, n;
  return {
    c() {
      t = y("span"), n = A(
        /*formattedValue*/
        e[0]
      );
    },
    m(i, r) {
      U(i, t, r), l(t, n);
    },
    p(i, [r]) {
      r & /*formattedValue*/
      1 && $t(
        n,
        /*formattedValue*/
        i[0]
      );
    },
    i: I,
    o: I,
    d(i) {
      i && v(t);
    }
  };
}
function ce(e, t, n) {
  let i, { value: r } = t;
  const u = new Intl.NumberFormat(
    "fr-FR",
    {
      // style: 'currency',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  );
  return e.$$set = (s) => {
    "value" in s && n(1, r = s.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    2 && n(0, i = u.format(r));
  }, [i, r];
}
class vt extends J {
  constructor(t) {
    super(), B(this, t, ce, le, G, { value: 1 });
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(t) {
    this.$$set({ value: t }), z();
  }
}
Z(vt, { value: {} }, [], [], !0);
function Me(e) {
  ot(e, "svelte-18ojyk1", ".pay.svelte-18ojyk1.svelte-18ojyk1{font-weight:900;height:100%;width:100%;background-size:contain !important;border-radius:32px;font-size:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.pay.svelte-18ojyk1 span.title.svelte-18ojyk1{margin-top:50px;color:white;margin-bottom:50px}.pay.svelte-18ojyk1 span.line.svelte-18ojyk1{margin-top:20px;color:white;border:2px white solid;width:90%;border-radius:32px}.pay.svelte-18ojyk1 span.amount.svelte-18ojyk1{color:white;font-weight:900;font-size:60px;margin-bottom:50px}.pay.svelte-18ojyk1 a.svelte-18ojyk1{color:#FFFFFF;margin-bottom:10px}.pay.svelte-18ojyk1 .joinLink.svelte-18ojyk1{display:inline-flex;padding:16px 24px;margin-top:20px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat, serif;font-size:16px;font-weight:700;margin-bottom:20px}.pay.svelte-18ojyk1 .block.svelte-18ojyk1{display:flex;flex-direction:column;width:100%;box-sizing:border-box;flex:1}.pay.svelte-18ojyk1 .block span.title.svelte-18ojyk1{margin-bottom:10px;text-align:center;display:block;flex:1}.pay.svelte-18ojyk1 .flex.svelte-18ojyk1{justify-content:center;display:flex;flex:1;margin:20px 0 20px 0}.pay.svelte-18ojyk1 .flex button.svelte-18ojyk1{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.pay.svelte-18ojyk1 .flex span.svelte-18ojyk1{font-size:2em;font-weight:900;margin:2px 2px}.pay.svelte-18ojyk1 .title.svelte-18ojyk1{margin-bottom:5px;text-align:left}@media screen and (max-width: 380px){.pay.svelte-18ojyk1 span.title.svelte-18ojyk1{font-size:0.75em}}.img-btn.svelte-18ojyk1.svelte-18ojyk1{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-18ojyk1.svelte-18ojyk1{width:1.5em}.pay.svelte-18ojyk1 .flex span.svelte-18ojyk1{font-size:1.5em}.pay.svelte-18ojyk1 .block.svelte-18ojyk1{width:100%}.advantage.svelte-18ojyk1.svelte-18ojyk1{font-size:14px}}");
}
function ge(e) {
  let t, n, i, r, u, s, a, c, o, m, j, D, M, d, p, ut, H, $, lt, x, ct, w, Mt, L, gt, V, yt, k, jt, W, T, tt, ft;
  return o = new vt({ props: { value: (
    /*tjm*/
    e[0]
  ) } }), $ = new rt({ props: { value: (
    /*amount*/
    e[2]
  ) } }), w = new rt({ props: { value: 9e3 } }), {
    c() {
      t = y("div"), n = y("div"), i = y("span"), i.textContent = "Votre TJM", r = h(), u = y("div"), s = y("button"), s.innerHTML = `<img src="${se}" alt="Minus Svg icon" class="img-btn svelte-18ojyk1"/>`, a = h(), c = y("span"), F(o.$$.fragment), m = h(), j = y("button"), j.innerHTML = `<img src="${re}" alt="Plus Svg icon" class="img-btn svelte-18ojyk1"/>`, D = h(), M = y("span"), d = h(), p = y("span"), p.textContent = "Votre salaire annuel brut", ut = h(), H = y("span"), F($.$$.fragment), lt = h(), x = y("span"), ct = A("et + de "), F(w.$$.fragment), Mt = A(" d’"), L = y("a"), gt = A("avantages sociaux"), yt = h(), k = y("a"), jt = A("Envie de nous rejoindre ?"), g(i, "class", "title svelte-18ojyk1"), g(s, "class", "svelte-18ojyk1"), g(c, "class", "svelte-18ojyk1"), g(j, "class", "svelte-18ojyk1"), g(u, "class", "flex svelte-18ojyk1"), g(n, "class", "block svelte-18ojyk1"), g(M, "class", "line svelte-18ojyk1"), g(p, "class", "title svelte-18ojyk1"), g(H, "class", "amount svelte-18ojyk1"), g(L, "href", V = /*rateManager*/
      e[1].getAvantagesLink()), g(L, "class", "svelte-18ojyk1"), g(x, "class", "advantage svelte-18ojyk1"), g(k, "class", "joinLink svelte-18ojyk1"), g(k, "href", W = /*rateManager*/
      e[1].getJoinUsLink()), g(t, "class", "pay svelte-18ojyk1"), Et(t, "background", "url(" + oe + ") no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)");
    },
    m(f, b) {
      U(f, t, b), l(t, n), l(n, i), l(n, r), l(n, u), l(u, s), l(u, a), l(u, c), Q(o, c, null), l(u, m), l(u, j), l(t, D), l(t, M), l(t, d), l(t, p), l(t, ut), l(t, H), Q($, H, null), l(t, lt), l(t, x), l(x, ct), Q(w, x, null), l(x, Mt), l(x, L), l(L, gt), l(t, yt), l(t, k), l(k, jt), T = !0, tt || (ft = [
        It(
          s,
          "click",
          /*click_handler*/
          e[4]
        ),
        It(
          j,
          "click",
          /*click_handler_1*/
          e[5]
        )
      ], tt = !0);
    },
    p(f, [b]) {
      const Nt = {};
      b & /*tjm*/
      1 && (Nt.value = /*tjm*/
      f[0]), o.$set(Nt);
      const mt = {};
      b & /*amount*/
      4 && (mt.value = /*amount*/
      f[2]), $.$set(mt), (!T || b & /*rateManager*/
      2 && V !== (V = /*rateManager*/
      f[1].getAvantagesLink())) && g(L, "href", V), (!T || b & /*rateManager*/
      2 && W !== (W = /*rateManager*/
      f[1].getJoinUsLink())) && g(k, "href", W);
    },
    i(f) {
      T || (E(o.$$.fragment, f), E($.$$.fragment, f), E(w.$$.fragment, f), T = !0);
    },
    o(f) {
      P(o.$$.fragment, f), P($.$$.fragment, f), P(w.$$.fragment, f), T = !1;
    },
    d(f) {
      f && v(t), C(o), C($), C(w), tt = !1, R(ft);
    }
  };
}
let ye = 2e3;
function je(e, t, n) {
  let { rateManager: i } = t, { tjm: r = 600 } = t, u = i.getMinTJMValue(), { amount: s = 450 } = t;
  const a = () => n(0, r = Math.max(u, r - 10)), c = () => n(0, r = Math.min(ye, r + 10));
  return e.$$set = (o) => {
    "rateManager" in o && n(1, i = o.rateManager), "tjm" in o && n(0, r = o.tjm), "amount" in o && n(2, s = o.amount);
  }, [r, i, s, u, a, c];
}
class wt extends J {
  constructor(t) {
    super(), B(this, t, je, ge, G, { rateManager: 1, tjm: 0, amount: 2 }, Me);
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(t) {
    this.$$set({ rateManager: t }), z();
  }
  get tjm() {
    return this.$$.ctx[0];
  }
  set tjm(t) {
    this.$$set({ tjm: t }), z();
  }
  get amount() {
    return this.$$.ctx[2];
  }
  set amount(t) {
    this.$$set({ amount: t }), z();
  }
}
Z(wt, { rateManager: {}, tjm: {}, amount: {} }, [], [], !0);
function fe(e) {
  ot(e, "svelte-14ojux7", `.component.svelte-14ojux7{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-14ojux7{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-14ojux7:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-14ojux7{width:100%;margin-bottom:1.5em}.component.svelte-14ojux7{flex-direction:column}}`);
}
function Ne(e) {
  let t, n, i, r, u, s, a, c, o;
  i = new At({});
  function m(M) {
    e[4](M);
  }
  function j(M) {
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
    e[1]), s = new wt({ props: D }), q.push(() => ht(s, "tjm", m)), q.push(() => ht(s, "amount", j)), {
      c() {
        t = y("div"), n = y("div"), F(i.$$.fragment), r = h(), u = y("div"), F(s.$$.fragment), g(n, "class", "block svelte-14ojux7"), g(u, "class", "block svelte-14ojux7"), g(t, "class", "component svelte-14ojux7");
      },
      m(M, d) {
        U(M, t, d), l(t, n), Q(i, n, null), l(t, r), l(t, u), Q(s, u, null), o = !0;
      },
      p(M, [d]) {
        const p = {};
        !a && d & /*tjm*/
        1 && (a = !0, p.tjm = /*tjm*/
        M[0], Dt(() => a = !1)), !c && d & /*amount*/
        2 && (c = !0, p.amount = /*amount*/
        M[1], Dt(() => c = !1)), s.$set(p);
      },
      i(M) {
        o || (E(i.$$.fragment, M), E(s.$$.fragment, M), o = !0);
      },
      o(M) {
        P(i.$$.fragment, M), P(s.$$.fragment, M), o = !1;
      },
      d(M) {
        M && v(t), C(i), C(s);
      }
    }
  );
}
function me(e, t, n) {
  let { company: i } = t, r = te.create(i), u, s;
  function a(o) {
    u = o, n(0, u);
  }
  function c(o) {
    s = o, n(1, s), n(2, r), n(0, u);
  }
  return e.$$set = (o) => {
    "company" in o && n(3, i = o.company);
  }, e.$$.update = () => {
    e.$$.dirty & /*tjm*/
    1 && n(1, s = r.getSalary(u) || 0);
  }, [u, s, r, i, a, c];
}
class Lt extends J {
  constructor(t) {
    super(), B(this, t, me, Ne, G, { company: 3 }, fe);
  }
  get company() {
    return this.$$.ctx[3];
  }
  set company(t) {
    this.$$set({ company: t }), z();
  }
}
customElements.define("renumerator-component", Z(Lt, { company: {} }, [], [], !0));
class de extends HTMLElement {
  connectedCallback() {
    const t = this.getAttribute("company"), n = t ?? "";
    new Lt({ target: this, props: { company: n } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", de);
