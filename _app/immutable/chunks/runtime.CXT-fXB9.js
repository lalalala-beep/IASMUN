var Rn=Array.isArray,Sn=Array.from,Nn=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Dn=Object.prototype,xn=Array.prototype,Zt=Object.getPrototypeOf;function kn(t){return typeof t=="function"}const Cn=()=>{};function bn(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,vt=4,Y=8,nt=16,T=32,Z=64,S=128,V=256,p=512,g=1024,b=2048,C=4096,j=8192,Jt=16384,pt=32768,Pn=65536,Qt=1<<18,ht=1<<19,it=Symbol("$state"),Fn=Symbol("");function dt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Et(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function tn(){throw new Error("effect_in_unowned_derived")}function nn(t){throw new Error("effect_orphan")}function rn(){throw new Error("effect_update_depth_exceeded")}function Ln(){throw new Error("hydration_failed")}function qn(t){throw new Error("lifecycle_legacy_only")}function Mn(t){throw new Error("props_invalid_value")}function Hn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function en(){throw new Error("state_unsafe_local_read")}function an(){throw new Error("state_unsafe_mutation")}let z=!1;function jn(){z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function Bn(t){return yt(rt(t))}function sn(t,n=!1){var e;const r=rt(t);return n||(r.equals=Et),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Un(t,n=!1){return yt(sn(t,n))}function yt(t){return u!==null&&u.f&m&&(y===null?Tn([t]):y.push(t)),t}function Vn(t,n){return Tt(t,Kt(()=>Gt(t))),n}function Tt(t,n){return u!==null&&lt()&&u.f&(m|nt)&&(y===null||!y.includes(t))&&an(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),wt(t,g),lt()&&o!==null&&o.f&p&&!(o.f&T)&&(_!==null&&_.includes(t)?(E(o,g),J(o)):I===null?wn([t]):I.push(t))),n}function wt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),a=r.length,s=0;s<a;s++){var l=r[s],i=l.f;i&g||!e&&l===o||(E(l,n),i&(p|S)&&(i&m?wt(l,b):J(l)))}}const Gn=1,Kn=2,$n=4,Zn=8,zn=16,Jn=1,Qn=2,Wn=4,Xn=8,tr=16,nr=1,rr=2,er=4,ar=1,sr=2,on="[",un="[!",fn="]",mt={},lr=Symbol();function At(t){console.warn("hydration_mismatch")}let R=!1;function or(t){R=t}let d;function q(t){if(t===null)throw At(),mt;return d=t}function ur(){return q(N(d))}function ir(t){if(R){if(N(d)!==null)throw At(),mt;d=t}}function fr(t=1){if(R){for(var n=t,r=d;n--;)r=N(r);d=r}}function _r(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===on||r===un)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ft,_n,It,gt;function cr(){if(ft===void 0){ft=window,_n=document;var t=Element.prototype,n=Node.prototype;It=ut(n,"firstChild").get,gt=ut(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Q(t=""){return document.createTextNode(t)}function W(t){return It.call(t)}function N(t){return gt.call(t)}function vr(t,n){if(!R)return W(t);var r=W(d);if(r===null)r=d.appendChild(Q());else if(n&&r.nodeType!==3){var e=Q();return r==null||r.before(e),q(e),e}return q(r),r}function pr(t,n){if(!R){var r=W(t);return r instanceof Comment&&r.data===""?N(r):r}return d}function hr(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=N(e);if(!R)return e;var a=e.nodeType;if(r&&a!==3){var s=Q();return e==null||e.before(s),q(s),s}return q(e),e}function dr(t){t.textContent=""}function cn(t){var n=m|g;o===null?n|=S:o.f|=ht;const r={children:null,ctx:f,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function Er(t){const n=cn(t);return n.equals=Et,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):F(e)}}}function Rt(t){var n,r=o;$(t.parent);try{Ot(t),n=Yt(t)}finally{$(r)}return n}function St(t){var n=Rt(t),r=(D||t.f&S)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function et(t){Ot(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){o===null&&u===null&&nn(),u!==null&&u.f&S&&tn(),st&&Xt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var a=(t&Z)!==0,s=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{_t(!0),B(l),l.f|=Jt}catch(c){throw F(l),c}finally{_t(i)}}else n!==null&&J(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ht)===0;if(!w&&!a&&e&&(s!==null&&vn(l,s),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function yr(t){const n=P(Y,null,!1);return E(n,p),n.teardown=t,n}function Tr(t){Nt();var n=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Dt(t);return e}}function wr(t){return Nt(),at(t)}function mr(t){const n=P(Z,t,!0);return()=>{F(n)}}function Dt(t){return P(vt,t,!1)}function Ar(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,Tt(r.l.r2,!0),Kt(n))})}function Ir(){var t=f;at(()=>{if(Gt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),L(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return P(Y,t,!0)}function gr(t){return pn(t)}function pn(t,n=0){return P(Y|nt|n,t,!0)}function Or(t,n=!0){return P(Y|T,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=st,e=u;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:N(e);e.remove(),e=s}r=!0}Ct(t,n&&!r),kt(t),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const w of l)w.stop();xt(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rr(t,n){var r=[];Pt(t,r,!0),dn(r,()=>{F(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Pt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&pt)!==0||(e.f&T)!==0;Pt(e,n,s?r:!1),e=a}}}function Sr(t){Ft(t,!0)}function Ft(t,n){if(t.f&C){L(t)&&B(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,a=(r.f&pt)!==0||(r.f&T)!==0;Ft(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let G=!1,X=[];function Lt(){G=!1;const t=X.slice();X=[],zt(t)}function Nr(t){G||(G=!0,queueMicrotask(Lt)),X.push(t)}function En(){G&&Lt()}const qt=0,yn=1;let U=qt,M=!1,x=!1,st=!1;function _t(t){x=t}function ct(t){st=t}let O=[],k=0;let u=null;function K(t){u=t}let o=null;function $(t){o=t}let y=null;function Tn(t){y=t}let _=null,h=0,I=null;function wn(t){I=t}let Mt=0,D=!1,f=null;function Ht(){return++Mt}function lt(){return!z||f!==null&&f.l===null}function L(t){var l,i;var n=t.f;if(n&g)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var a;if(n&V){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(t);t.f^=V}for(a=0;a<r.length;a++){var s=r[a];if(L(s)&&St(s),e&&o!==null&&!D&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||E(t,p)}return!1}function mn(t,n,r){throw t}function Yt(t){var ot;var n=_,r=h,e=I,a=u,s=D,l=y,i=f,w=t.f;_=null,h=0,I=null,u=w&(T|Z)?null:t,D=!x&&(w&S)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,I=e,u=a,D=s,y=l,f=i}}function An(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(S|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=o;o=t;try{n&nt?hn(t):Ct(t),kt(t),xt(t);var e=Yt(t);t.teardown=typeof e=="function"?e:null,t.version=Mt}catch(a){mn(a)}finally{o=r}}}function jt(){k>1e3&&(k=0,rn()),k++}function Bt(t){var n=t.length;if(n!==0){jt();var r=x;x=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var s=[];Ut(a,s),In(s)}}finally{x=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&L(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function gn(){if(M=!1,k>1001)return;const t=O;O=[],Bt(t),M||(k=0)}function J(t){U===qt&&(M||(M=!0,queueMicrotask(gn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|T)){if(!(r&p))return;n.f^=p}}O.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,s=(a&T)!==0,l=s&&(a&p)!==0;if(!l&&!(a&C))if(a&Y){s?r.f^=p:L(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else a&vt&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ut(i,n)}function Vt(t){var n=U,r=O;try{jt();const a=[];U=yn,O=a,M=!1,Bt(r);var e=t==null?void 0:t();return En(),(O.length>0||a.length>0)&&Vt(),k=0,e}finally{U=n,O=r}}async function Dr(){await Promise.resolve(),Vt()}function Gt(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Rt(t);return et(t),e}if(u!==null){y!==null&&y.includes(t)&&en();var a=u.deps;_===null&&a!==null&&a[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&o!==null&&o.f&p&&!(o.f&T)&&I.includes(t)&&(E(o,g),J(o))}else if(r&&t.deps===null){var s=t,l=s.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(s))&&(l.deriveds??(l.deriveds=[])).push(s)}return r&&(s=t,L(s)&&St(s)),t.v}function Kt(t){const n=u;try{return u=null,t()}finally{u=n}}const On=~(g|b|p);function E(t,n){t.f=t.f&On|n}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function kr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];$(s.effect),K(s.reaction),Dt(s.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let a in e){const s=e[a].get;if(s)try{s.call(t)}catch{}}}}}export{wr as $,un as A,_r as B,or as C,Sr as D,$n as E,Rr as F,o as G,mt as H,C as I,Gn as J,ln as K,Kn as L,Pt as M,dr as N,dn as O,fn as P,u as Q,Zn as R,it as S,sn as T,rt as U,zn as V,Ar as W,Ir as X,Gt as Y,Tt as Z,Un as _,kr as a,Tr as a0,f as a1,bn as a2,zt as a3,Cr as a4,cn as a5,pt as a6,Qt as a7,on as a8,jn as a9,Wn as aA,Et as aB,T as aC,Z as aD,Jn as aE,z as aF,Qn as aG,Xn as aH,Er as aI,tr as aJ,qn as aK,ar as aL,sr as aM,Vt as aN,Bn as aO,fr as aP,Wt as aQ,ft as aR,Cn as aa,_n as ab,Vn as ac,Fn as ad,Zt as ae,$t as af,nt as ag,Jt as ah,nr as ai,kn as aj,rr as ak,er as al,K as am,$ as an,Nn as ao,cr as ap,Ln as aq,mr as ar,Dn as as,xn as at,Hn as au,lr as av,ut as aw,Yn as ax,Mn as ay,Pn as az,Dr as b,vr as c,at as d,Dt as e,pr as f,pn as g,R as h,ur as i,Or as j,d as k,N as l,At as m,q as n,W as o,xr as p,Nr as q,ir as r,hr as s,gr as t,Kt as u,F as v,yr as w,Q as x,Rn as y,Sn as z};
