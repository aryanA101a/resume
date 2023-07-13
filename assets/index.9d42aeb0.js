(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function q(){}const Ie=t=>t;function ze(t){return t()}function $e(){return Object.create(null)}function oe(t){t.forEach(ze)}function he(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let le;function Ke(t,e){return le||(le=document.createElement("a")),le.href=e,t===le.href}function Ue(t){return Object.keys(t).length===0}const Qe=typeof window<"u";let We=Qe?()=>window.performance.now():()=>Date.now(),pe=Qe?t=>requestAnimationFrame(t):q;const K=new Set;function Ve(t){K.forEach(e=>{e.c(t)||(K.delete(e),e.f())}),K.size!==0&&pe(Ve)}function Ye(t){let e;return K.size===0&&pe(Ve),{promise:new Promise(s=>{K.add(e={c:t,f:s})}),abort(){K.delete(e)}}}function o(t,e){t.appendChild(e)}function Je(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ze(t){const e=u("style");return xe(Je(t),e),e.sheet}function xe(t,e){return o(t.head||t,e),e.sheet}function T(t,e,s){t.insertBefore(e,s||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function G(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function u(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function w(){return C(" ")}function et(){return C("")}function _(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function tt(t){return Array.from(t.childNodes)}function F(t,e){e=""+e,t.data!==e&&(t.data=e)}function nt(t,e,{bubbles:s=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,s,n,e),l}const ie=new Map;let re=0;function lt(t){let e=5381,s=t.length;for(;s--;)e=(e<<5)-e^t.charCodeAt(s);return e>>>0}function st(t,e){const s={stylesheet:Ze(e),rules:{}};return ie.set(t,s),s}function it(t,e,s,n,l,r,i,c=0){const d=16.666/n;let a=`{
`;for(let M=0;M<=1;M+=d){const O=e+(s-e)*r(M);a+=M*100+`%{${i(O,1-O)}}
`}const f=a+`100% {${i(s,1-s)}}
}`,h=`__svelte_${lt(f)}_${c}`,N=Je(t),{stylesheet:y,rules:b}=ie.get(N)||st(N,t);b[h]||(b[h]=!0,y.insertRule(`@keyframes ${h} ${f}`,y.cssRules.length));const L=t.style.animation||"";return t.style.animation=`${L?`${L}, `:""}${h} ${n}ms linear ${l}ms 1 both`,re+=1,h}function be(t,e){const s=(t.style.animation||"").split(", "),n=s.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),l=s.length-n.length;l&&(t.style.animation=n.join(", "),re-=l,re||rt())}function rt(){pe(()=>{re||(ie.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&j(e)}),ie.clear())})}let _e;function ne(t){_e=t}const z=[],ke=[];let U=[];const we=[],ot=Promise.resolve();let ue=!1;function at(){ue||(ue=!0,ot.then(Xe))}function B(t){U.push(t)}const ae=new Set;let I=0;function Xe(){if(I!==0)return;const t=_e;do{try{for(;I<z.length;){const e=z[I];I++,ne(e),ct(e.$$)}}catch(e){throw z.length=0,I=0,e}for(ne(null),z.length=0,I=0;ke.length;)ke.pop()();for(let e=0;e<U.length;e+=1){const s=U[e];ae.has(s)||(ae.add(s),s())}U.length=0}while(z.length);for(;we.length;)we.pop()();ue=!1,ae.clear(),ne(t)}function ct(t){if(t.fragment!==null){t.update(),oe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}function ft(t){const e=[],s=[];U.forEach(n=>t.indexOf(n)===-1?e.push(n):s.push(n)),s.forEach(n=>n()),U=e}let x;function ut(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function De(t,e,s){t.dispatchEvent(nt(`${e?"intro":"outro"}${s}`))}const se=new Set;let ht;function Q(t,e){t&&t.i&&(se.delete(t),t.i(e))}function ee(t,e,s,n){if(t&&t.o){if(se.has(t))return;se.add(t),ht.c.push(()=>{se.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}else n&&n()}const pt={duration:0};function ce(t,e,s){const n={direction:"in"};let l=e(t,s,n),r=!1,i,c,d=0;function a(){i&&be(t,i)}function f(){const{delay:N=0,duration:y=300,easing:b=Ie,tick:L=q,css:M}=l||pt;M&&(i=it(t,0,1,y,N,b,M,d++)),L(0,1);const O=We()+N,D=O+y;c&&c.abort(),r=!0,B(()=>De(t,!0,"start")),c=Ye(H=>{if(r){if(H>=D)return L(1,0),De(t,!0,"end"),a(),r=!1;if(H>=O){const A=b((H-O)/y);L(A,1-A)}}return r})}let h=!1;return{start(){h||(h=!0,be(t),he(l)?(l=l(n),ut().then(f)):f())},invalidate(){h=!1},end(){r&&(a(),r=!1)}}}function te(t){t&&t.c()}function V(t,e,s,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,s),n||B(()=>{const i=t.$$.on_mount.map(ze).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...i):oe(i),t.$$.on_mount=[]}),r.forEach(B)}function J(t,e){const s=t.$$;s.fragment!==null&&(ft(s.after_update),oe(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(z.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,s,n,l,r,i,c=[-1]){const d=_e;ne(t);const a=t.$$={fragment:null,ctx:[],props:r,update:q,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:$e(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};i&&i(a.root);let f=!1;if(a.ctx=s?s(t,e.props||{},(h,N,...y)=>{const b=y.length?y[0]:N;return a.ctx&&l(a.ctx[h],a.ctx[h]=b)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](b),f&&_t(t,h)),N}):[],a.update(),f=!0,oe(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const h=tt(e.target);a.fragment&&a.fragment.l(h),h.forEach(j)}else a.fragment&&a.fragment.c();e.intro&&Q(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Xe()}ne(d)}class Z{$destroy(){J(this,1),this.$destroy=q}$on(e,s){if(!he(s))return q;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const l=n.indexOf(s);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!Ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(t,{delay:e=0,duration:s=400,easing:n=Ie}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:n,css:r=>`opacity: ${r*l}`}}const X=t=>new Date(t).toLocaleString("en-GB",{month:"short",year:"numeric"});function Ae(t,e,s){const n=t.slice();return n[1]=e[s],n}function je(t){let e,s,n,l=t[1].score+"",r,i,c=t[1].awards.join(", ")+"",d;return{c(){e=u("p"),s=u("strong"),s.textContent="Cumulative GPA:",n=w(),r=C(l),i=C(" \u2014 "),d=C(c)},m(a,f){T(a,e,f),o(e,s),o(e,n),o(e,r),o(e,i),o(e,d)},p(a,f){f&1&&l!==(l=a[1].score+"")&&F(r,l),f&1&&c!==(c=a[1].awards.join(", ")+"")&&F(d,c)},d(a){a&&j(e)}}}function Ee(t){let e,s,n,l,r=t[1].institution+"",i,c,d,a,f=t[1].location+"",h,N,y,b,L=t[1].studyType+"",M,O,D=t[1].area+"",H,A,m,E=X(t[1].endDate)+"",P,S,k,p,$=t[1].score!=""&&je(t);return{c(){e=u("div"),s=u("p"),n=u("a"),l=u("h4"),i=C(r),d=w(),a=u("span"),h=C(f),N=w(),y=u("p"),b=u("span"),M=C(L),O=C(", "),H=C(D),A=w(),m=u("span"),P=C(E),S=C(" (Expected)"),k=w(),$&&$.c(),p=w(),_(n,"href",c=t[1].url),_(n,"class","svelte-zbv5qa"),_(s,"class","svelte-zbv5qa"),_(y,"class","svelte-zbv5qa"),_(e,"class","svelte-zbv5qa")},m(v,g){T(v,e,g),o(e,s),o(s,n),o(n,l),o(l,i),o(s,d),o(s,a),o(a,h),o(e,N),o(e,y),o(y,b),o(b,M),o(b,O),o(b,H),o(y,A),o(y,m),o(m,P),o(m,S),T(v,k,g),$&&$.m(v,g),T(v,p,g)},p(v,g){g&1&&r!==(r=v[1].institution+"")&&F(i,r),g&1&&c!==(c=v[1].url)&&_(n,"href",c),g&1&&f!==(f=v[1].location+"")&&F(h,f),g&1&&L!==(L=v[1].studyType+"")&&F(M,L),g&1&&D!==(D=v[1].area+"")&&F(H,D),g&1&&E!==(E=X(v[1].endDate)+"")&&F(P,E),v[1].score!=""?$?$.p(v,g):($=je(v),$.c(),$.m(p.parentNode,p)):$&&($.d(1),$=null)},d(v){v&&j(e),v&&j(k),$&&$.d(v),v&&j(p)}}}function dt(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Ee(Ae(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,r){T(l,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(l,[r]){if(r&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const c=Ae(l,s,i);n[i]?n[i].p(c,r):(n[i]=Ee(c),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&j(e),G(n,l)}}}function mt(t,e,s){let{education:n}=e;return t.$$set=l=>{"education"in l&&s(0,n=l.education)},[n]}class gt extends Z{constructor(e){super(),Y(this,e,mt,dt,W,{education:0})}}function Ce(t,e,s){const n=t.slice();return n[1]=e[s],n}function Se(t,e,s){const n=t.slice();return n[4]=e[s],n}function vt(t){let e,s=t[1].name+"",n;return{c(){e=u("span"),n=C(s),_(e,"id","wn"),_(e,"class","svelte-1ik2s6i")},m(l,r){T(l,e,r),o(e,n)},p(l,r){r&1&&s!==(s=l[1].name+"")&&F(n,s)},d(l){l&&j(e)}}}function yt(t){let e,s=t[1].name+"",n,l;return{c(){e=u("a"),n=C(s),_(e,"href",l=t[1].url),_(e,"class","svelte-1ik2s6i")},m(r,i){T(r,e,i),o(e,n)},p(r,i){i&1&&s!==(s=r[1].name+"")&&F(n,s),i&1&&l!==(l=r[1].url)&&_(e,"href",l)},d(r){r&&j(e)}}}function Te(t){let e,s=t[4]+"";return{c(){e=u("li")},m(n,l){T(n,e,l),e.innerHTML=s},p(n,l){l&1&&s!==(s=n[4]+"")&&(e.innerHTML=s)},d(n){n&&j(e)}}}function Le(t){let e,s,n,l=t[1].position+"",r,i,c,d=X(t[1].startDate)+"",a,f,h=X(t[1].endDate)+"",N,y,b,L;function M(m,E){return m[1].url!=""?yt:vt}let O=M(t),D=O(t),H=t[1].highlights,A=[];for(let m=0;m<H.length;m+=1)A[m]=Te(Se(t,H,m));return{c(){e=u("p"),s=u("span"),D.c(),n=C(" | "),r=C(l),i=w(),c=u("span"),a=C(d),f=C(" \u2014 "),N=C(h),y=w(),b=u("ul");for(let m=0;m<A.length;m+=1)A[m].c();L=w(),_(e,"class","svelte-1ik2s6i")},m(m,E){T(m,e,E),o(e,s),D.m(s,null),o(s,n),o(s,r),o(e,i),o(e,c),o(c,a),o(c,f),o(c,N),T(m,y,E),T(m,b,E);for(let P=0;P<A.length;P+=1)A[P]&&A[P].m(b,null);o(b,L)},p(m,E){if(O===(O=M(m))&&D?D.p(m,E):(D.d(1),D=O(m),D&&(D.c(),D.m(s,n))),E&1&&l!==(l=m[1].position+"")&&F(r,l),E&1&&d!==(d=X(m[1].startDate)+"")&&F(a,d),E&1&&h!==(h=X(m[1].endDate)+"")&&F(N,h),E&1){H=m[1].highlights;let P;for(P=0;P<H.length;P+=1){const S=Se(m,H,P);A[P]?A[P].p(S,E):(A[P]=Te(S),A[P].c(),A[P].m(b,L))}for(;P<A.length;P+=1)A[P].d(1);A.length=H.length}},d(m){m&&j(e),D.d(),m&&j(y),m&&j(b),G(A,m)}}}function $t(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Le(Ce(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,r){T(l,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(l,[r]){if(r&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const c=Ce(l,s,i);n[i]?n[i].p(c,r):(n[i]=Le(c),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&j(e),G(n,l)}}}function bt(t,e,s){let{experience:n}=e;return t.$$set=l=>{"experience"in l&&s(0,n=l.experience)},[n]}class kt extends Z{constructor(e){super(),Y(this,e,bt,$t,W,{experience:0})}}function Pe(t,e,s){const n=t.slice();return n[1]=e[s],n}function Me(t){let e,s,n,l,r,i=t[1].username+"",c,d,a;return{c(){e=u("div"),s=u("i"),l=w(),r=u("a"),c=C(i),a=w(),_(s,"class",n="fab fa-"+t[1].network+" svelte-59uhwf"),_(r,"href",d=t[1].url),_(e,"class","contact svelte-59uhwf")},m(f,h){T(f,e,h),o(e,s),o(e,l),o(e,r),o(r,c),o(e,a)},p(f,h){h&1&&n!==(n="fab fa-"+f[1].network+" svelte-59uhwf")&&_(s,"class",n),h&1&&i!==(i=f[1].username+"")&&F(c,i),h&1&&d!==(d=f[1].url)&&_(r,"href",d)},d(f){f&&j(e)}}}function wt(t){let e,s,n=t[0].name+"",l,r,i,c,d,a,f,h=t[0].email+"",N,y,b,L,M,O,D,H,A=t[0].url.replace("https://","")+"",m,E,P,S=t[0].profiles,k=[];for(let p=0;p<S.length;p+=1)k[p]=Me(Pe(t,S,p));return{c(){e=u("section"),s=u("h1"),l=C(n),r=w(),i=u("div"),c=u("div"),d=u("i"),a=w(),f=u("a"),N=C(h),b=w(),L=u("div"),M=u("div"),O=u("i"),D=w(),H=u("a"),m=C(A),P=w();for(let p=0;p<k.length;p+=1)k[p].c();_(s,"class","svelte-59uhwf"),_(d,"class","fas fa-inbox svelte-59uhwf"),_(f,"href",y="mailto:"+t[0].email),_(c,"class","contact svelte-59uhwf"),_(O,"class","fas fa-link svelte-59uhwf"),_(H,"href",E=t[0].url),_(M,"class","contact svelte-59uhwf"),_(L,"class","lower svelte-59uhwf"),_(i,"class","contacts svelte-59uhwf"),_(e,"class","svelte-59uhwf")},m(p,$){T(p,e,$),o(e,s),o(s,l),o(e,r),o(e,i),o(i,c),o(c,d),o(c,a),o(c,f),o(f,N),o(i,b),o(i,L),o(L,M),o(M,O),o(M,D),o(M,H),o(H,m),o(L,P);for(let v=0;v<k.length;v+=1)k[v]&&k[v].m(L,null)},p(p,[$]){if($&1&&n!==(n=p[0].name+"")&&F(l,n),$&1&&h!==(h=p[0].email+"")&&F(N,h),$&1&&y!==(y="mailto:"+p[0].email)&&_(f,"href",y),$&1&&A!==(A=p[0].url.replace("https://","")+"")&&F(m,A),$&1&&E!==(E=p[0].url)&&_(H,"href",E),$&1){S=p[0].profiles;let v;for(v=0;v<S.length;v+=1){const g=Pe(p,S,v);k[v]?k[v].p(g,$):(k[v]=Me(g),k[v].c(),k[v].m(L,null))}for(;v<k.length;v+=1)k[v].d(1);k.length=S.length}},i:q,o:q,d(p){p&&j(e),G(k,p)}}}function Dt(t,e,s){let{basics:n}=e;return t.$$set=l=>{"basics"in l&&s(0,n=l.basics)},[n]}class At extends Z{constructor(e){super(),Y(this,e,Dt,wt,W,{basics:0})}}function Ne(t,e,s){const n=t.slice();return n[1]=e[s],n}function He(t){let e,s=t[1].name+"",n,l,r,i=t[1].keywords.join(", ")+"",c,d,a;return{c(){e=u("strong"),n=C(s),l=C(":"),r=w(),c=C(i),d=w(),a=u("br"),_(e,"class","svelte-n17fg2")},m(f,h){T(f,e,h),o(e,n),o(e,l),T(f,r,h),T(f,c,h),T(f,d,h),T(f,a,h)},p(f,h){h&1&&s!==(s=f[1].name+"")&&F(n,s),h&1&&i!==(i=f[1].keywords.join(", ")+"")&&F(c,i)},d(f){f&&j(e),f&&j(r),f&&j(c),f&&j(d),f&&j(a)}}}function jt(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=He(Ne(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c();_(e,"class","svelte-n17fg2")},m(l,r){T(l,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(l,[r]){if(r&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const c=Ne(l,s,i);n[i]?n[i].p(c,r):(n[i]=He(c),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&j(e),G(n,l)}}}function Et(t,e,s){let{skills:n}=e;return t.$$set=l=>{"skills"in l&&s(0,n=l.skills)},[n]}class Ct extends Z{constructor(e){super(),Y(this,e,Et,jt,W,{skills:0})}}function Oe(t,e,s){const n=t.slice();return n[1]=e[s],n}function Fe(t,e,s){const n=t.slice();return n[4]=e[s],n}function qe(t){let e,s,n,l=t[1].type+"",r,i,c;return{c(){e=u("a"),s=C("("),n=u("strong"),r=C(l),i=C(")"),_(n,"class","svelte-yb239a"),_(e,"href",c=t[1].url),_(e,"class","svelte-yb239a")},m(d,a){T(d,e,a),o(e,s),o(e,n),o(n,r),o(e,i)},p(d,a){a&1&&l!==(l=d[1].type+"")&&F(r,l),a&1&&c!==(c=d[1].url)&&_(e,"href",c)},d(d){d&&j(e)}}}function Re(t){let e,s=t[1].highlights,n=[];for(let l=0;l<s.length;l+=1)n[l]=Be(Fe(t,s,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=et()},m(l,r){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(l,r);T(l,e,r)},p(l,r){if(r&1){s=l[1].highlights;let i;for(i=0;i<s.length;i+=1){const c=Fe(l,s,i);n[i]?n[i].p(c,r):(n[i]=Be(c),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(l){G(n,l),l&&j(e)}}}function Be(t){let e,s=t[4]+"";return{c(){e=u("li")},m(n,l){T(n,e,l),e.innerHTML=s},p(n,l){l&1&&s!==(s=n[4]+"")&&(e.innerHTML=s)},d(n){n&&j(e)}}}function Ge(t){let e,s,n=t[1].name+"",l,r,i,c,d,a,f,h,N,y,b,L=t[1].description+"",M,O,D,H,A,m=t[1].technology.join(", ")+"",E,P,S=t[1].url!=""&&qe(t),k=t[1].highlights&&Re(t);return{c(){e=u("p"),s=u("strong"),l=C(n),r=w(),S&&S.c(),i=w(),c=u("a"),d=C("("),a=u("strong"),a.textContent="GitHub",f=C(")"),N=w(),y=u("ul"),b=u("li"),M=w(),k&&k.c(),O=w(),D=u("li"),H=u("strong"),H.textContent="Technology:",A=w(),E=C(m),P=w(),_(s,"class","svelte-yb239a"),_(a,"class","svelte-yb239a"),_(c,"href",h=t[1].repo),_(c,"class","svelte-yb239a"),_(e,"class","svelte-yb239a")},m(p,$){T(p,e,$),o(e,s),o(s,l),o(e,r),S&&S.m(e,null),o(e,i),o(e,c),o(c,d),o(c,a),o(c,f),T(p,N,$),T(p,y,$),o(y,b),b.innerHTML=L,o(y,M),k&&k.m(y,null),o(y,O),o(y,D),o(D,H),o(D,A),o(D,E),o(y,P)},p(p,$){$&1&&n!==(n=p[1].name+"")&&F(l,n),p[1].url!=""?S?S.p(p,$):(S=qe(p),S.c(),S.m(e,i)):S&&(S.d(1),S=null),$&1&&h!==(h=p[1].repo)&&_(c,"href",h),$&1&&L!==(L=p[1].description+"")&&(b.innerHTML=L),p[1].highlights?k?k.p(p,$):(k=Re(p),k.c(),k.m(y,O)):k&&(k.d(1),k=null),$&1&&m!==(m=p[1].technology.join(", ")+"")&&F(E,m)},d(p){p&&j(e),S&&S.d(),p&&j(N),p&&j(y),k&&k.d()}}}function St(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Ge(Oe(t,s,l));return{c(){e=u("section");for(let l=0;l<n.length;l+=1)n[l].c()},m(l,r){T(l,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(l,[r]){if(r&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const c=Oe(l,s,i);n[i]?n[i].p(c,r):(n[i]=Ge(c),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:q,o:q,d(l){l&&j(e),G(n,l)}}}function Tt(t,e,s){let{projects:n}=e;return t.$$set=l=>{"projects"in l&&s(0,n=l.projects)},[n]}class Lt extends Z{constructor(e){super(),Y(this,e,Tt,St,W,{projects:0})}}function Pt(t){let e,s,n,l,r,i,c,d,a,f,h,N,y,b,L,M,O,D,H,A,m,E,P,S,k,p,$,v;return f=new At({props:{basics:t[0].basics}}),b=new gt({props:{education:t[0].education}}),D=new Ct({props:{skills:t[0].skills}}),E=new kt({props:{experience:t[0].work}}),p=new Lt({props:{projects:t[0].projects}}),{c(){e=u("p"),s=u("a"),s.innerHTML='Download PDF <i class="fas fa-download svelte-1pkx1gf"></i>',l=w(),r=u("img"),d=w(),a=u("main"),te(f.$$.fragment),h=w(),N=u("h3"),N.innerHTML='<span class="svelte-1pkx1gf">EDUCATION</span>',y=w(),te(b.$$.fragment),L=w(),M=u("h3"),M.innerHTML='<span class="svelte-1pkx1gf">SKILLS</span>',O=w(),te(D.$$.fragment),H=w(),A=u("h3"),A.innerHTML='<span class="svelte-1pkx1gf">EXPERIENCE</span>',m=w(),te(E.$$.fragment),P=w(),S=u("h3"),S.innerHTML='<span class="svelte-1pkx1gf">PROJECTS</span>',k=w(),te(p.$$.fragment),_(s,"href","./AryanArora_Resume.pdf"),_(s,"target","__blank"),_(s,"class","svelte-1pkx1gf"),_(e,"class","svelte-1pkx1gf"),Ke(r.src,i="./qr.png")||_(r,"src",i),_(r,"alt","QR Code for PDF link"),_(r,"class","svelte-1pkx1gf"),_(N,"class","svelte-1pkx1gf"),_(M,"class","svelte-1pkx1gf"),_(A,"class","svelte-1pkx1gf"),_(S,"class","svelte-1pkx1gf"),_(a,"class","svelte-1pkx1gf")},m(g,R){T(g,e,R),o(e,s),T(g,l,R),T(g,r,R),T(g,d,R),T(g,a,R),V(f,a,null),o(a,h),o(a,N),o(a,y),V(b,a,null),o(a,L),o(a,M),o(a,O),V(D,a,null),o(a,H),o(a,A),o(a,m),V(E,a,null),o(a,P),o(a,S),o(a,k),V(p,a,null),v=!0},p(g,[R]){const de={};R&1&&(de.basics=g[0].basics),f.$set(de);const me={};R&1&&(me.education=g[0].education),b.$set(me);const ge={};R&1&&(ge.skills=g[0].skills),D.$set(ge);const ve={};R&1&&(ve.experience=g[0].work),E.$set(ve);const ye={};R&1&&(ye.projects=g[0].projects),p.$set(ye)},i(g){v||(n||B(()=>{n=ce(s,fe,{delay:200,duration:300}),n.start()}),c||B(()=>{c=ce(r,fe,{delay:250,duration:300}),c.start()}),Q(f.$$.fragment,g),Q(b.$$.fragment,g),Q(D.$$.fragment,g),Q(E.$$.fragment,g),Q(p.$$.fragment,g),$||B(()=>{$=ce(a,fe,{delay:250,duration:300}),$.start()}),v=!0)},o(g){ee(f.$$.fragment,g),ee(b.$$.fragment,g),ee(D.$$.fragment,g),ee(E.$$.fragment,g),ee(p.$$.fragment,g),v=!1},d(g){g&&j(e),g&&j(l),g&&j(r),g&&j(d),g&&j(a),J(f),J(b),J(D),J(E),J(p)}}}function Mt(t,e,s){let{resume:n}=e;return t.$$set=l=>{"resume"in l&&s(0,n=l.resume)},[n]}class Nt extends Z{constructor(e){super(),Y(this,e,Mt,Pt,W,{resume:0})}}const Ht="https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",Ot={name:"Aryan Arora",label:"",email:"aryanarora.w1@gmail.com",url:"https://aryanarora.hashnode.dev/",location:{city:"Guna",region:"Madhya Pradesh",countryCode:"IN"},profiles:[{network:"github-alt",username:"aryanA101a",url:"https://github.com/aryanA101a"},{network:"linkedin",username:"aryanar0ra",url:"https://www.linkedin.com/in/aryanar0ra"}]},Ft=[{name:"Degpeg",location:"Remote, Bangalore",position:"Software Engineer Intern( Flutter Android Development )",url:"https://www.degpeg.com/",startDate:"2021-06-29",endDate:"2021-08-29",highlights:["Worked on YouTube and Facebook Livestream apis.","Modified the video streaming plugin to extend its functionality to support multiple rtmp live streams simultaneously and on-video graphics.","Migrated the plugin to null safety manually."]},{name:"PersonaX",location:"Remote",position:"Freelance Android Developer",url:"",startDate:"2021-03-01",endDate:"2022-04-04",highlights:["Created a music course app on top of existing wordpress apis.","Implemented an interface to support multi-language podcasts."]},{name:"AlphardX",location:"Remote",position:"Freelance Android Developer",url:"",startDate:"2021-01-01",endDate:"2021-03-15",highlights:["Implemented a hardware optical fingerprint sensor via java platform channel.","Created rest-api for face-recognition in flask."]}],qt=[{institution:"Jaypee University of Engineering and Technology",location:"Guna, Madhya Pradesh",url:"https://juet.ac.in/",area:"Computer Science",studyType:"Bachelor of Science",startDate:"2020-09-01",endDate:"2024-05-15",score:"",courses:[],awards:[]}],Rt=[{name:"Languages",keywords:["C","C++","Dart","Go","Python","Assembly"]},{name:"Technologies",keywords:["Flutter","BubbleTea","GraphQL","FastAPI","SQL","Firebase"]},{name:"Concepts",keywords:["OS","Computer Architecture"]}],Bt=[{name:"Segmentation Query Generator",description:"A dynamic sql query generator based on json input.",highlights:[],startDate:"",endDate:"",repo:"https://github.com/aryanA101a/sql-segmentation-query-generator",url:"",type:"application",technology:["Python","FastApi","DuckDB","JSON-Schema"]},{name:"Villi",description:"A Bit-Torrent client written in GO.",highlights:[],startDate:"",endDate:"",repo:"https://github.com/aryanA101a/villi",url:"",type:"application",technology:["Go","BubbleTea"]},{name:"Nin",description:"A command-line text editor",highlights:[],startDate:"",endDate:"",repo:"https://github.com/aryanA101a/nin",url:"",type:"application",features:[],technology:["C"]},{name:"Batua",description:"An ethereum wallet app with full functionality and additional support for sepolia testnet.",highlights:[],startDate:"",endDate:"",repo:"https://github.com/aryanA101a/batua",url:"",type:"application",features:[],technology:["Flutter","Dart","Websockets","Rest Api","Hive"]},{name:"SortingVisualizer",description:"Sorting Visualizations on Scatter Plot.",highlights:[],startDate:"",endDate:"",repo:"https://github.com/aryanA101a/SortingVisualizer",url:"",type:"application",features:[],technology:["Flutter","Dart"]}],Gt={$schema:Ht,basics:Ot,work:Ft,education:qt,skills:Rt,projects:Bt};new Nt({target:document.getElementById("app"),props:{resume:Gt},intro:!0});
