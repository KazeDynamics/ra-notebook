import{S as z,i as C,s as F,k as v,q as E,y as B,a as I,l as x,m as $,r as g,z as L,h as m,c as A,n as h,b as p,F as w,A as M,d as k,f as O,g as d,B as V,v as j,e as D,X as H,D as S}from"../chunks/index.2c758050.js";import{M as N}from"../chunks/MyItem.2a850fe1.js";import{I as X}from"../chunks/Icon.f5909d5a.js";import"../chunks/forms.96d9b83f.js";function P(u,s,c){const r=u.slice();return r[1]=s[c],r}function G(u){let s,c,r=u[0].items,t=[];for(let e=0;e<r.length;e+=1)t[e]=q(P(u,r,e));const a=e=>k(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=D()},l(e){for(let l=0;l<t.length;l+=1)t[l].l(e);s=D()},m(e,l){for(let o=0;o<t.length;o+=1)t[o].m(e,l);p(e,s,l),c=!0},p(e,l){if(l&1){r=e[0].items;let o;for(o=0;o<r.length;o+=1){const i=P(e,r,o);t[o]?(t[o].p(i,l),d(t[o],1)):(t[o]=q(i),t[o].c(),d(t[o],1),t[o].m(s.parentNode,s))}for(j(),o=r.length;o<t.length;o+=1)a(o);O()}},i(e){if(!c){for(let l=0;l<r.length;l+=1)d(t[l]);c=!0}},o(e){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)k(t[l]);c=!1},d(e){H(t,e),e&&m(s)}}}function J(u){let s,c,r,t,a,e,l,o;return{c(){s=v("p"),c=E("😮"),r=I(),t=v("p"),a=E("Looks like you don't have any products for this country yet."),e=I(),l=v("a"),o=E("Add One"),this.h()},l(i){s=x(i,"P",{class:!0});var f=$(s);c=g(f,"😮"),f.forEach(m),r=A(i),t=x(i,"P",{class:!0});var b=$(t);a=g(b,"Looks like you don't have any products for this country yet."),b.forEach(m),e=A(i),l=x(i,"A",{href:!0,class:!0});var n=$(l);o=g(n,"Add One"),n.forEach(m),this.h()},h(){h(s,"class","text-center text-3xl"),h(t,"class","text-center text-3xl m-3"),h(l,"href","/items/new"),h(l,"class","btn btn-primary max-w-md mt-4")},m(i,f){p(i,s,f),w(s,c),p(i,r,f),p(i,t,f),w(t,a),p(i,e,f),p(i,l,f),w(l,o)},p:S,i:S,o:S,d(i){i&&m(s),i&&m(r),i&&m(t),i&&m(e),i&&m(l)}}}function q(u){let s,c,r,t;return s=new N({props:{item:u[1]}}),{c(){B(s.$$.fragment),c=I(),r=v("div"),this.h()},l(a){L(s.$$.fragment,a),c=A(a),r=x(a,"DIV",{class:!0}),$(r).forEach(m),this.h()},h(){h(r,"class","py-2")},m(a,e){M(s,a,e),p(a,c,e),p(a,r,e),t=!0},p(a,e){const l={};e&1&&(l.item=a[1]),s.$set(l)},i(a){t||(d(s.$$.fragment,a),t=!0)},o(a){k(s.$$.fragment,a),t=!1},d(a){V(s,a),a&&m(c),a&&m(r)}}}function K(u){let s,c,r,t,a,e,l,o;r=new X({props:{icon:"twemoji:flag-el-salvador",class:"text-xxl ml-4 mb-2 inline"}});const i=[J,G],f=[];function b(n,_){return n[0].items.length===0?0:1}return e=b(u),l=f[e]=i[e](u),{c(){s=v("h2"),c=E("El Salvador"),B(r.$$.fragment),t=I(),a=v("div"),l.c(),this.h()},l(n){s=x(n,"H2",{class:!0});var _=$(s);c=g(_,"El Salvador"),L(r.$$.fragment,_),_.forEach(m),t=A(n),a=x(n,"DIV",{class:!0});var y=$(a);l.l(y),y.forEach(m),this.h()},h(){h(s,"class","text-3xl font-bold"),h(a,"class","w-full mt-4 flex flex-col items-center")},m(n,_){p(n,s,_),w(s,c),M(r,s,null),p(n,t,_),p(n,a,_),f[e].m(a,null),o=!0},p(n,[_]){let y=e;e=b(n),e===y?f[e].p(n,_):(j(),k(f[y],1,1,()=>{f[y]=null}),O(),l=f[e],l?l.p(n,_):(l=f[e]=i[e](n),l.c()),d(l,1),l.m(a,null))},i(n){o||(d(r.$$.fragment,n),d(l),o=!0)},o(n){k(r.$$.fragment,n),k(l),o=!1},d(n){n&&m(s),V(r),n&&m(t),n&&m(a),f[e].d()}}}function Q(u,s,c){let{data:r}=s;return u.$$set=t=>{"data"in t&&c(0,r=t.data)},[r]}class Y extends z{constructor(s){super(),C(this,s,Q,K,F,{data:0})}}export{Y as default};
