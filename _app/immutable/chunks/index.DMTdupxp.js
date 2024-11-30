import{a6 as z,ag as L,ah as M,e as U,u as W,ai as j,G as E,aj as B,q as G,aa as g,ak as P,al as K,am as N,an as S,Q}from"./runtime.CXT-fXB9.js";import{a as D}from"./render.-2s46nm3.js";const H=()=>performance.now(),h={tick:a=>requestAnimationFrame(a),now:()=>H(),tasks:new Set};function O(a){h.tasks.forEach(t=>{t.c(a)||(h.tasks.delete(t),t.f())}),h.tasks.size!==0&&h.tick(O)}function J(a){let t;return h.tasks.size===0&&h.tick(O),{promise:new Promise(r=>{h.tasks.add(t={c:a,f:r})}),abort(){h.tasks.delete(t)}}}function w(a,t){a.dispatchEvent(new CustomEvent(t))}function V(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function A(a){const t={},r=a.split(";");for(const e of r){const[c,s]=e.split(":");if(!c||s===void 0)break;const v=V(c.trim());t[v]=s.trim()}return t}const X=a=>a;function at(a,t,r,e){var c=(a&j)!==0,s=(a&P)!==0,v=c&&s,l=(a&K)!==0,m=v?"both":c?"in":"out",u,n=t.inert,f,o;function $(){var p=Q,b=E;N(null),S(null);try{return u??(u=r()(t,(e==null?void 0:e())??{},{direction:m}))}finally{N(p),S(b)}}var y={is_global:l,in(){var p;if(t.inert=n,!c){o==null||o.abort(),(p=o==null?void 0:o.reset)==null||p.call(o);return}s||f==null||f.abort(),w(t,"introstart"),f=x(t,$(),o,1,()=>{w(t,"introend"),f==null||f.abort(),f=u=void 0})},out(p){if(!s){p==null||p(),u=void 0;return}t.inert=!0,w(t,"outrostart"),o=x(t,$(),f,0,()=>{w(t,"outroend"),p==null||p()})},stop:()=>{f==null||f.abort(),o==null||o.abort()}},d=E;if((d.transitions??(d.transitions=[])).push(y),c&&D){var _=l;if(!_){for(var i=d.parent;i&&i.f&z;)for(;(i=i.parent)&&!(i.f&L););_=!i||(i.f&M)!==0}_&&U(()=>{W(()=>y.in())})}}function x(a,t,r,e,c){var s=e===1;if(B(t)){var v,l=!1;return G(()=>{if(!l){var _=t({direction:s?"in":"out"});v=x(a,_,r,e,c)}}),{abort:()=>{l=!0,v==null||v.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return c(),{abort:g,deactivate:g,reset:g,t:()=>e};const{delay:m=0,css:u,tick:n,easing:f=X}=t;var o=[];if(s&&r===void 0&&(n&&n(0,1),u)){var $=A(u(0,1));o.push($,$)}var y=()=>1-e,d=a.animate(o,{duration:m});return d.onfinish=()=>{var _=(r==null?void 0:r.t())??1-e;r==null||r.abort();var i=e-_,p=t.duration*Math.abs(i),b=[];if(p>0){if(u)for(var k=Math.ceil(p/16.666666666666668),T=0;T<=k;T+=1){var C=_+i*f(T/k),q=u(C,1-C);b.push(A(q))}y=()=>{var F=d.currentTime;return _+i*f(F/p)},n&&J(()=>{if(d.playState!=="running")return!1;var F=y();return n(F,1-F),!0})}d=a.animate(b,{duration:p,fill:"forwards"}),d.onfinish=()=>{y=()=>e,n==null||n(e,1-e),c()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=g)},deactivate:()=>{c=g},reset:()=>{e===0&&(n==null||n(1,0))},t:()=>y()}}const Y=a=>a;function R(a){const t=a-1;return t*t*t+1}function I(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function rt(a,{delay:t=0,duration:r=400,easing:e=Y}={}){const c=+getComputedStyle(a).opacity;return{delay:t,duration:r,easing:e,css:s=>`opacity: ${s*c}`}}function it(a,{delay:t=0,duration:r=400,easing:e=R,x:c=0,y:s=0,opacity:v=0}={}){const l=getComputedStyle(a),m=+l.opacity,u=l.transform==="none"?"":l.transform,n=m*(1-v),[f,o]=I(c),[$,y]=I(s);return{delay:t,duration:r,easing:e,css:(d,_)=>`
			transform: ${u} translate(${(1-d)*f}${o}, ${(1-d)*$}${y});
			opacity: ${m-n*_}`}}function et(a,{delay:t=0,duration:r=400,easing:e=R,axis:c="y"}={}){const s=getComputedStyle(a),v=+s.opacity,l=c==="y"?"height":"width",m=parseFloat(s[l]),u=c==="y"?["top","bottom"]:["left","right"],n=u.map(i=>`${i[0].toUpperCase()}${i.slice(1)}`),f=parseFloat(s[`padding${n[0]}`]),o=parseFloat(s[`padding${n[1]}`]),$=parseFloat(s[`margin${n[0]}`]),y=parseFloat(s[`margin${n[1]}`]),d=parseFloat(s[`border${n[0]}Width`]),_=parseFloat(s[`border${n[1]}Width`]);return{delay:t,duration:r,easing:e,css:i=>`overflow: hidden;opacity: ${Math.min(i*20,1)*v};${l}: ${i*m}px;padding-${u[0]}: ${i*f}px;padding-${u[1]}: ${i*o}px;margin-${u[0]}: ${i*$}px;margin-${u[1]}: ${i*y}px;border-${u[0]}-width: ${i*d}px;border-${u[1]}-width: ${i*_}px;`}}export{rt as a,it as f,et as s,at as t};
