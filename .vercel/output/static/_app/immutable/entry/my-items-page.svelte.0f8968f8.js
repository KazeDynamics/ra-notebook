import{S as C,i as F,s as H,k,q as I,y as B,a as w,l as x,m as b,r as g,z as L,h as u,c as A,n as h,b as p,F as E,A as O,d as $,f as S,g as d,B as V,v as z,e as D,X as N,D as M}from"../chunks/index.2c758050.js";import{M as X}from"../chunks/MyItem.2a850fe1.js";import{I as j}from"../chunks/Icon.f5909d5a.js";import"../chunks/forms.96d9b83f.js";function P(m,s,c){const n=m.slice();return n[1]=s[c],n}function G(m){let s,c,n=m[0].items,t=[];for(let e=0;e<n.length;e+=1)t[e]=q(P(m,n,e));const o=e=>$(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=D()},l(e){for(let l=0;l<t.length;l+=1)t[l].l(e);s=D()},m(e,l){for(let r=0;r<t.length;r+=1)t[r].m(e,l);p(e,s,l),c=!0},p(e,l){if(l&1){n=e[0].items;let r;for(r=0;r<n.length;r+=1){const i=P(e,n,r);t[r]?(t[r].p(i,l),d(t[r],1)):(t[r]=q(i),t[r].c(),d(t[r],1),t[r].m(s.parentNode,s))}for(z(),r=n.length;r<t.length;r+=1)o(r);S()}},i(e){if(!c){for(let l=0;l<n.length;l+=1)d(t[l]);c=!0}},o(e){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)$(t[l]);c=!1},d(e){N(t,e),e&&u(s)}}}function J(m){let s,c,n,t,o,e,l,r;return{c(){s=k("p"),c=I("😮"),n=w(),t=k("p"),o=I("Looks like you don't have any products in your notebook."),e=w(),l=k("a"),r=I("Add One"),this.h()},l(i){s=x(i,"P",{class:!0});var f=b(s);c=g(f,"😮"),f.forEach(u),n=A(i),t=x(i,"P",{class:!0});var v=b(t);o=g(v,"Looks like you don't have any products in your notebook."),v.forEach(u),e=A(i),l=x(i,"A",{href:!0,class:!0});var a=b(l);r=g(a,"Add One"),a.forEach(u),this.h()},h(){h(s,"class","text-center text-3xl"),h(t,"class","text-center text-3xl m-3"),h(l,"href","/items/new"),h(l,"class","btn btn-primary max-w-md mt-4")},m(i,f){p(i,s,f),E(s,c),p(i,n,f),p(i,t,f),E(t,o),p(i,e,f),p(i,l,f),E(l,r)},p:M,i:M,o:M,d(i){i&&u(s),i&&u(n),i&&u(t),i&&u(e),i&&u(l)}}}function q(m){let s,c,n,t;return s=new X({props:{item:m[1]}}),{c(){B(s.$$.fragment),c=w(),n=k("div"),this.h()},l(o){L(s.$$.fragment,o),c=A(o),n=x(o,"DIV",{class:!0}),b(n).forEach(u),this.h()},h(){h(n,"class","py-2")},m(o,e){O(s,o,e),p(o,c,e),p(o,n,e),t=!0},p(o,e){const l={};e&1&&(l.item=o[1]),s.$set(l)},i(o){t||(d(s.$$.fragment,o),t=!0)},o(o){$(s.$$.fragment,o),t=!1},d(o){V(s,o),o&&u(c),o&&u(n)}}}function K(m){let s,c,n,t,o,e,l,r;n=new j({props:{icon:"healthicons:ui-user-profile",class:"text-xxl ml-4 mb-2 inline"}});const i=[J,G],f=[];function v(a,_){return a[0].items.length===0?0:1}return e=v(m),l=f[e]=i[e](m),{c(){s=k("h2"),c=I("My Items"),B(n.$$.fragment),t=w(),o=k("div"),l.c(),this.h()},l(a){s=x(a,"H2",{class:!0});var _=b(s);c=g(_,"My Items"),L(n.$$.fragment,_),_.forEach(u),t=A(a),o=x(a,"DIV",{class:!0});var y=b(o);l.l(y),y.forEach(u),this.h()},h(){h(s,"class","text-3xl font-bold"),h(o,"class","w-full mt-4 flex flex-col items-center")},m(a,_){p(a,s,_),E(s,c),O(n,s,null),p(a,t,_),p(a,o,_),f[e].m(o,null),r=!0},p(a,[_]){let y=e;e=v(a),e===y?f[e].p(a,_):(z(),$(f[y],1,1,()=>{f[y]=null}),S(),l=f[e],l?l.p(a,_):(l=f[e]=i[e](a),l.c()),d(l,1),l.m(o,null))},i(a){r||(d(n.$$.fragment,a),d(l),r=!0)},o(a){$(n.$$.fragment,a),$(l),r=!1},d(a){a&&u(s),V(n),a&&u(t),a&&u(o),f[e].d()}}}function Q(m,s,c){let{data:n}=s;return m.$$set=t=>{"data"in t&&c(0,n=t.data)},[n]}class Y extends C{constructor(s){super(),F(this,s,Q,K,H,{data:0})}}export{Y as default};
