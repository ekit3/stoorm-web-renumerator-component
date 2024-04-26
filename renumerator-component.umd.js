(function(g){typeof define=="function"&&define.amd?define(g):g()})(function(){"use strict";var Pt=Object.defineProperty;var zt=(g,b,v)=>b in g?Pt(g,b,{enumerable:!0,configurable:!0,writable:!0,value:v}):g[b]=v;var _=(g,b,v)=>(zt(g,typeof b!="symbol"?b+"":b,v),v);function g(){}function b(e){return e()}function v(){return Object.create(null)}function S(e){e.forEach(b)}function F(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function lt(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function B(e,t,n){const s=ct(e);if(!s.getElementById(t)){const i=h("style");i.id=t,i.textContent=n,ut(s,i)}}function ct(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ut(e,t){return u(e.head||e,t),t.sheet}function E(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function I(){return A(" ")}function X(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function dt(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.data!==t&&(e.data=t)}function ft(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let R;function C(e){R=e}const M=[],L=[];let w=[];const G=[],mt=Promise.resolve();let O=!1;function ht(){O||(O=!0,mt.then(j))}function J(e){w.push(e)}function Q(e){G.push(e)}const T=new Set;let k=0;function j(){if(k!==0)return;const e=R;do{try{for(;k<M.length;){const t=M[k];k++,C(t),gt(t.$$)}}catch(t){throw M.length=0,k=0,t}for(C(null),M.length=0,k=0;L.length;)L.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];T.has(n)||(T.add(n),n())}w.length=0}while(M.length);for(;G.length;)G.pop()();O=!1,T.clear(),C(e)}function gt(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}function pt(e){const t=[],n=[];w.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),w=t}const D=new Set;let $t;function U(e,t){e&&e.i&&(D.delete(e),e.i(t))}function tt(e,t,n,s){if(e&&e.o){if(D.has(e))return;D.add(e),$t.c.push(()=>{D.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function et(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function nt(e){e&&e.c()}function Z(e,t,n){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),J(()=>{const r=e.$$.on_mount.map(b).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...r):S(r),e.$$.on_mount=[]}),i.forEach(J)}function H(e,t){const n=e.$$;n.fragment!==null&&(pt(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(e,t){e.$$.dirty[0]===-1&&(M.push(e),ht(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,s,i,r,o=null,l=[-1]){const c=R;C(e);const a=e.$$={fragment:null,ctx:[],props:r,update:g,not_equal:i,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:v(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};o&&o(a.root);let p=!1;if(a.ctx=n?n(e,t.props||{},(f,$,...y)=>{const d=y.length?y[0]:$;return a.ctx&&i(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),p&&_t(e,f)),$}):[],a.update(),p=!0,S(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const f=dt(t.target);a.fragment&&a.fragment.l(f),f.forEach(N)}else a.fragment&&a.fragment.c();t.intro&&U(e.$$.fragment),Z(e,t.target,t.anchor),j()}C(c)}let st;typeof HTMLElement=="function"&&(st=class extends HTMLElement{constructor(t,n,s){super();_(this,"$$ctor");_(this,"$$s");_(this,"$$c");_(this,"$$cn",!1);_(this,"$$d",{});_(this,"$$r",!1);_(this,"$$p_d",{});_(this,"$$l",{});_(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(t,n,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const i=this.$$c.$on(t,n);this.$$l_u.set(n,i)}super.addEventListener(t,n,s)}removeEventListener(t,n,s){if(super.removeEventListener(t,n,s),this.$$c){const i=this.$$l_u.get(n);i&&(i(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(r){return()=>{let o;return{c:function(){o=h("slot"),r!=="default"&&m(o,"name",r)},m:function(a,p){E(a,o,p)},d:function(a){a&&N(o)}}}};if(await Promise.resolve(),!this.$$cn)return;const n={},s=ft(this);for(const r of this.$$s)r in s&&(n[r]=[t(r)]);for(const r of this.attributes){const o=this.$$g_p(r.name);o in this.$$d||(this.$$d[o]=P(o,r.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){const o=P(r,this.$$d[r],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,o)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const r in this.$$l)for(const o of this.$$l[r]){const l=this.$$c.$on(r,o);this.$$l_u.set(o,l)}this.$$l={}}}attributeChangedCallback(t,n,s){var i;this.$$r||(t=this.$$g_p(t),this.$$d[t]=P(t,s,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function P(e,t,n,s){var r;const i=(r=n[e])==null?void 0:r.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!n[e])return t;if(s==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function V(e,t,n,s,i,r){let o=class extends st{constructor(){super(e,n,i),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Object.keys(t).forEach(l=>{Object.defineProperty(o.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(c){var a;c=P(l,c,t),this.$$d[l]=c,(a=this.$$c)==null||a.$set({[l]:c})}})}),s.forEach(l=>{Object.defineProperty(o.prototype,l,{get(){var c;return(c=this.$$c)==null?void 0:c[l]}})}),r&&(o=r(o)),e.element=o,o}class W{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){H(this,1),this.$destroy=g}$on(t,n){if(!F(n))return g;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bt);class xt{constructor(t){_(this,"config");this.config=t}getRate(t){return this.config.jobs.find(n=>n.name===t)}getRateList(){return this.config.jobs.sort((t,n)=>t.name>n.name?1:t.name<n.name?-1:0)}getMinExperienceValue(){return this.config.min_experience}getMinTJMValue(){return this.config.tjm_base}getSalary(t){const n=this.config.fixed_salary*12+(t-this.config.tjm_base)/2*(216-this.config.group_days)*1.1153846153846154;return Math.round(n)}getJoinUsLink(){return this.config.join_link}}const yt={fixed_salary:3400,min_salary:0,group_days:15,tjm_base:450,join_link:"https://stoorm.fr/#contact"};class vt extends xt{constructor(){super(yt)}}class jt{static create(t){return new vt}}const It="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==",Mt="data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";function wt(e){B(e,"svelte-1naq16l",`@import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";.renumerator.svelte-1naq16l.svelte-1naq16l{display:flex;padding:77px 40px;width:calc(100% - 80px);flex-shrink:0;border-radius:32px;background:linear-gradient(180deg, #201a21 0%, #250e2e 100%);box-shadow:0 24px 44px 0 rgba(0, 0, 0, 0.25);backdrop-filter:blur(22px);flex-direction:column}.renumerator.svelte-1naq16l .block.svelte-1naq16l{display:flex;flex-direction:column;width:100%;box-sizing:border-box}.renumerator.svelte-1naq16l .block span.title.svelte-1naq16l{margin-bottom:40px;text-align:center;display:block;flex:1}.renumerator.svelte-1naq16l .flex.svelte-1naq16l{justify-content:space-around;display:flex;flex:1}.renumerator.svelte-1naq16l .flex button.svelte-1naq16l{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.renumerator.svelte-1naq16l .flex span.svelte-1naq16l{font-size:2em;font-weight:900;margin:5px 2px}.renumerator.svelte-1naq16l .title.svelte-1naq16l{margin-bottom:16px;text-align:left}.renumerator.svelte-1naq16l .container.svelte-1naq16l{display:flex;align-self:center;width:100%;margin-top:40px}.svelte-1naq16l .mdc-select__dropdown-icon-graphic{fill:white !important}.svelte-1naq16l .mdc-select__selected-text{color:white !important}.svelte-1naq16l .mdc-select__selected-text{font-size:16px;font-weight:500;font-family:Montserrat, serif}.svelte-1naq16l .mdc-deprecated-list-item--selected{background-color:#0E130B;color:white !important}.mdc-select__menu{background:#413946;color:white}.mdc-select__menu li{color:white}:root{--mdc-theme-primary:rgba(255, 255, 255, 0.6)}.smui-select__line-ripple{border-color:yellow}.smui-select__dropdown-icon{color:grey}.smui-select--focused .smui-select__line-ripple{border-color:blue}.svelte-1naq16l .mdc-select{background:rgba(255, 255, 255, 0.10)}.svelte-1naq16l .mdc-select__anchor{height:100px}.svelte-1naq16l .shaped-outlined,.svelte-1naq16l .shaped-outlined .mdc-select__anchor{border-radius:24px}.svelte-1naq16l .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-1naq16l .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading{border-radius:24px 0 0 24px;border-color:rgba(255, 255, 255, 0.6);width:28px}.svelte-1naq16l .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing{border-color:rgba(255, 255, 255, 0.6);border-radius:0 24px 24px 0}.svelte-1naq16l .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{border-color:rgba(255, 255, 255, 0.6)}.img-btn.svelte-1naq16l.svelte-1naq16l{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1naq16l.svelte-1naq16l{width:1.5em}.renumerator.svelte-1naq16l .flex span.svelte-1naq16l{font-size:1.5em}.renumerator.svelte-1naq16l .container.svelte-1naq16l{flex-direction:column}.renumerator.svelte-1naq16l .block.svelte-1naq16l{width:100%}}`)}function kt(e){let t,n,s,i,r,o,l,c,a,p,f,$,y,d;return{c(){t=h("div"),n=h("div"),s=h("div"),i=h("span"),i.textContent="TJM",r=I(),o=h("div"),l=h("button"),l.innerHTML=`<img src="${It}" alt="Minus Svg icon" class="img-btn svelte-1naq16l"/>`,c=I(),a=h("span"),p=A(e[0]),f=I(),$=h("button"),$.innerHTML=`<img src="${Mt}" alt="Plus Svg icon" class="img-btn svelte-1naq16l"/>`,m(i,"class","title svelte-1naq16l"),m(l,"class","svelte-1naq16l"),m(a,"class","svelte-1naq16l"),m($,"class","svelte-1naq16l"),m(o,"class","flex svelte-1naq16l"),m(s,"class","block svelte-1naq16l"),m(n,"class","container svelte-1naq16l"),m(t,"class","renumerator svelte-1naq16l")},m(x,q){E(x,t,q),u(t,n),u(n,s),u(s,i),u(s,r),u(s,o),u(o,l),u(o,c),u(o,a),u(a,p),u(o,f),u(o,$),y||(d=[X(l,"click",e[3]),X($,"click",e[4])],y=!0)},p(x,[q]){q&1&&K(p,x[0])},i:g,o:g,d(x){x&&N(t),y=!1,S(d)}}}function qt(e,t,n){let{rateManager:s}=t,{tjm:i=s.getMinTJMValue()}=t,r=s.getMinTJMValue();const o=()=>n(0,i=Math.max(r,i-10)),l=()=>n(0,i+=10);return e.$$set=c=>{"rateManager"in c&&n(2,s=c.rateManager),"tjm"in c&&n(0,i=c.tjm)},[i,r,s,o,l]}let rt=class extends W{constructor(t){super(),Y(this,t,qt,kt,z,{rateManager:2,tjm:0},wt)}get rateManager(){return this.$$.ctx[2]}set rateManager(t){this.$$set({rateManager:t}),j()}get tjm(){return this.$$.ctx[0]}set tjm(t){this.$$set({tjm:t}),j()}};V(rt,{rateManager:{},tjm:{}},[],[],!0);function St(e){B(e,"svelte-bfrk9h",".pay.svelte-bfrk9h.svelte-bfrk9h{height:447px;width:100%;background:#f42092;border-radius:32px;font-size:24px;display:flex;flex-direction:column;justify-content:center;align-items:center}.pay.svelte-bfrk9h span.title.svelte-bfrk9h{margin-top:60px;color:#0E130B;margin-bottom:20px}.pay.svelte-bfrk9h span.amount.svelte-bfrk9h{color:#0E130B;font-weight:900;font-size:60px;margin-bottom:54px}.pay.svelte-bfrk9h a.svelte-bfrk9h{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700}@media screen and (max-width: 380px){.pay.svelte-bfrk9h span.title.svelte-bfrk9h{font-size:0.75em}}")}function Nt(e){let t,n,s,i,r,o,l,c,a,p;return{c(){t=h("div"),n=h("span"),n.textContent="Votre salaire annuel brut",s=I(),i=h("span"),r=A(e[0]),o=A(" €"),l=I(),c=h("a"),a=A("Envie de nous rejoindre ?"),m(n,"class","title svelte-bfrk9h"),m(i,"class","amount svelte-bfrk9h"),m(c,"href",p=e[1].getJoinUsLink()),m(c,"class","svelte-bfrk9h"),m(t,"class","pay svelte-bfrk9h")},m(f,$){E(f,t,$),u(t,n),u(t,s),u(t,i),u(i,r),u(i,o),u(t,l),u(t,c),u(c,a)},p(f,[$]){$&1&&K(r,f[0]),$&2&&p!==(p=f[1].getJoinUsLink())&&m(c,"href",p)},i:g,o:g,d(f){f&&N(t)}}}function At(e,t,n){let{amount:s=450}=t,{rateManager:i}=t;return e.$$set=r=>{"amount"in r&&n(0,s=r.amount),"rateManager"in r&&n(1,i=r.rateManager)},[s,i]}class it extends W{constructor(t){super(),Y(this,t,At,Nt,z,{amount:0,rateManager:1},St)}get amount(){return this.$$.ctx[0]}set amount(t){this.$$set({amount:t}),j()}get rateManager(){return this.$$.ctx[1]}set rateManager(t){this.$$set({rateManager:t}),j()}}V(it,{amount:{},rateManager:{}},[],[],!0);function Ct(e){B(e,"svelte-1sqfk6p",`.component.svelte-1sqfk6p{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-1sqfk6p{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-1sqfk6p:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1sqfk6p{width:100%;margin-bottom:1.5em}.component.svelte-1sqfk6p{flex-direction:column}}`)}function Et(e){let t,n,s,i,r,o,l,c,a;function p(d){e[4](d)}let f={rateManager:e[2]};e[0]!==void 0&&(f.tjm=e[0]),s=new rt({props:f}),L.push(()=>et(s,"tjm",p));function $(d){e[5](d)}let y={rateManager:e[2]};return e[1]!==void 0&&(y.amount=e[1]),l=new it({props:y}),L.push(()=>et(l,"amount",$)),{c(){t=h("div"),n=h("div"),nt(s.$$.fragment),r=I(),o=h("div"),nt(l.$$.fragment),m(n,"class","block svelte-1sqfk6p"),m(o,"class","block svelte-1sqfk6p"),m(t,"class","component svelte-1sqfk6p")},m(d,x){E(d,t,x),u(t,n),Z(s,n,null),u(t,r),u(t,o),Z(l,o,null),a=!0},p(d,[x]){const q={};!i&&x&1&&(i=!0,q.tjm=d[0],Q(()=>i=!1)),s.$set(q);const at={};!c&&x&2&&(c=!0,at.amount=d[1],Q(()=>c=!1)),l.$set(at)},i(d){a||(U(s.$$.fragment,d),U(l.$$.fragment,d),a=!0)},o(d){tt(s.$$.fragment,d),tt(l.$$.fragment,d),a=!1},d(d){d&&N(t),H(s),H(l)}}}function Lt(e,t,n){let{company:s}=t,i=jt.create(s),r,o;function l(a){r=a,n(0,r)}function c(a){o=a,n(1,o),n(2,i),n(0,r)}return e.$$set=a=>{"company"in a&&n(3,s=a.company)},e.$$.update=()=>{e.$$.dirty&1&&n(1,o=i.getSalary(r)||0)},[r,o,i,s,l,c]}class ot extends W{constructor(t){super(),Y(this,t,Lt,Et,z,{company:3},Ct)}get company(){return this.$$.ctx[3]}set company(t){this.$$set({company:t}),j()}}customElements.define("renumerator-component",V(ot,{company:{}},[],[],!0));class Dt extends HTMLElement{connectedCallback(){const t=this.getAttribute("company"),n=t??"";new ot({target:this,props:{company:n}})}}customElements.get("renumerator-component")?console.log("déjà présent !"):customElements.define("renumerator-component",Dt)});