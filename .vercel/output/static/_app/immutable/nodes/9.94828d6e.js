import{S as q,i as z,s as G,e as x,t as I,x as C,a as E,c as b,b as k,d as g,y as L,f as m,g as M,o as h,h as p,j as w,z as O,v as $,C as S,r as d,B as V,D as j,G as D,w as H,n as A}from"../chunks/index.12c65bb6.js";import{M as N}from"../chunks/MyItem.6fb17bb6.js";import{I as F}from"../chunks/Icon.af87bf02.js";import"../chunks/paths.dc5961b8.js";function P(u,s,c){const o=u.slice();return o[1]=s[c],o}function J(u){let s,c,o=u[0].items,t=[];for(let e=0;e<o.length;e+=1)t[e]=B(P(u,o,e));const n=e=>$(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=D()},l(e){for(let l=0;l<t.length;l+=1)t[l].l(e);s=D()},m(e,l){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,l);p(e,s,l),c=!0},p(e,l){if(l&1){o=e[0].items;let r;for(r=0;r<o.length;r+=1){const a=P(e,o,r);t[r]?(t[r].p(a,l),d(t[r],1)):(t[r]=B(a),t[r].c(),d(t[r],1),t[r].m(s.parentNode,s))}for(j(),r=o.length;r<t.length;r+=1)n(r);S()}},i(e){if(!c){for(let l=0;l<o.length;l+=1)d(t[l]);c=!0}},o(e){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)$(t[l]);c=!1},d(e){H(t,e),e&&m(s)}}}function K(u){let s,c,o,t,n,e,l,r;return{c(){s=x("p"),c=I("😮"),o=E(),t=x("p"),n=I("Looks like you don't have any products in your notebook."),e=E(),l=x("a"),r=I("Add One"),this.h()},l(a){s=b(a,"P",{class:!0});var f=k(s);c=g(f,"😮"),f.forEach(m),o=M(a),t=b(a,"P",{class:!0});var v=k(t);n=g(v,"Looks like you don't have any products in your notebook."),v.forEach(m),e=M(a),l=b(a,"A",{href:!0,class:!0});var i=k(l);r=g(i,"Add One"),i.forEach(m),this.h()},h(){h(s,"class","text-center text-3xl"),h(t,"class","text-center text-3xl m-3"),h(l,"href","/items/new"),h(l,"class","btn btn-primary max-w-md mt-4")},m(a,f){p(a,s,f),w(s,c),p(a,o,f),p(a,t,f),w(t,n),p(a,e,f),p(a,l,f),w(l,r)},p:A,i:A,o:A,d(a){a&&m(s),a&&m(o),a&&m(t),a&&m(e),a&&m(l)}}}function B(u){let s,c,o,t;return s=new N({props:{item:u[1]}}),{c(){C(s.$$.fragment),c=E(),o=x("div"),this.h()},l(n){L(s.$$.fragment,n),c=M(n),o=b(n,"DIV",{class:!0}),k(o).forEach(m),this.h()},h(){h(o,"class","py-2")},m(n,e){O(s,n,e),p(n,c,e),p(n,o,e),t=!0},p(n,e){const l={};e&1&&(l.item=n[1]),s.$set(l)},i(n){t||(d(s.$$.fragment,n),t=!0)},o(n){$(s.$$.fragment,n),t=!1},d(n){V(s,n),n&&m(c),n&&m(o)}}}function Q(u){let s,c,o,t,n,e,l,r;o=new F({props:{icon:"healthicons:ui-user-profile",class:"text-xxl ml-4 mb-2 inline"}});const a=[K,J],f=[];function v(i,_){return i[0].items.length===0?0:1}return e=v(u),l=f[e]=a[e](u),{c(){s=x("h2"),c=I("My Items"),C(o.$$.fragment),t=E(),n=x("div"),l.c(),this.h()},l(i){s=b(i,"H2",{class:!0});var _=k(s);c=g(_,"My Items"),L(o.$$.fragment,_),_.forEach(m),t=M(i),n=b(i,"DIV",{class:!0});var y=k(n);l.l(y),y.forEach(m),this.h()},h(){h(s,"class","text-3xl font-bold"),h(n,"class","w-full mt-4 flex flex-col items-center")},m(i,_){p(i,s,_),w(s,c),O(o,s,null),p(i,t,_),p(i,n,_),f[e].m(n,null),r=!0},p(i,[_]){let y=e;e=v(i),e===y?f[e].p(i,_):(j(),$(f[y],1,1,()=>{f[y]=null}),S(),l=f[e],l?l.p(i,_):(l=f[e]=a[e](i),l.c()),d(l,1),l.m(n,null))},i(i){r||(d(o.$$.fragment,i),d(l),r=!0)},o(i){$(o.$$.fragment,i),$(l),r=!1},d(i){i&&m(s),V(o),i&&m(t),i&&m(n),f[e].d()}}}function R(u,s,c){let{data:o}=s;return u.$$set=t=>{"data"in t&&c(0,o=t.data)},[o]}class Y extends q{constructor(s){super(),z(this,s,R,Q,G,{data:0})}}export{Y as component};
