import{S as L,i as Q,s as W,k as U,q as G,a as D,y as O,l as E,m as C,r as J,h as b,c as S,z as P,n as m,b as X,F as n,A as T,Z as Y,u as x,g as V,d as q,B as A}from"../chunks/index.2c758050.js";import{e as ee}from"../chunks/forms.96d9b83f.js";import{I as se}from"../chunks/Input.ffd93c2c.js";import"../chunks/functions.31e05279.js";import{D as ae,a as te,b as re,c as ne}from"../chunks/DropdownClass.7863b167.js";function oe(a){let o,u,s,i,k,l=a[0].item.name+"",_,F,d,z,f,H,c,M,p,N,$,R,v,g,Z,B,j,K;return d=new se({props:{id:"name",label:"Item name",value:a[1]?.data?.name??a[0].item.name,errors:a[1]?.errors?.name}}),f=new ae({props:{id:"country",label:"Item country",value:a[1]?.data?.country??a[0].item.country,errors:a[1]?.errors?.country,disabled:!0}}),c=new te({props:{id:"process",label:"Item process",value:a[1]?.data?.process??a[0].item.process,errors:a[1]?.errors?.process,disabled:!0}}),p=new re({props:{id:"businessUnit",label:"Item business unit",value:a[1]?.data?.businessUnit??a[0].item.businessUnit,errors:a[1]?.errors?.businessUnit}}),$=new ne({props:{id:"class",label:"Class",value:a[1]?.data?.class??a[0].item.class,errors:a[1]?.errors?.class,disabled:!0}}),{c(){o=U("div"),u=U("div"),s=U("form"),i=U("h3"),k=G("Edit "),_=G(l),F=D(),O(d.$$.fragment),z=D(),O(f.$$.fragment),H=D(),O(c.$$.fragment),M=D(),O(p.$$.fragment),N=D(),O($.$$.fragment),R=D(),v=U("div"),g=U("button"),Z=G("Save Changes"),this.h()},l(e){o=E(e,"DIV",{class:!0});var r=C(o);u=E(r,"DIV",{class:!0});var w=C(u);s=E(w,"FORM",{method:!0,action:!0,class:!0});var t=C(s);i=E(t,"H3",{class:!0});var h=C(i);k=J(h,"Edit "),_=J(h,l),h.forEach(b),F=S(t),P(d.$$.fragment,t),z=S(t),P(f.$$.fragment,t),H=S(t),P(c.$$.fragment,t),M=S(t),P(p.$$.fragment,t),N=S(t),P($.$$.fragment,t),R=S(t),v=E(t,"DIV",{class:!0});var y=C(v);g=E(y,"BUTTON",{type:!0,class:!0});var I=C(g);Z=J(I,"Save Changes"),I.forEach(b),y.forEach(b),t.forEach(b),w.forEach(b),r.forEach(b),this.h()},h(){m(i,"class","text-3xl font-bold"),m(g,"type","submit"),m(g,"class","btn btn-primary w-full max-w-lg"),m(v,"class","w-full max-w-lg pt-3"),m(s,"method","POST"),m(s,"action","?/updateItem"),m(s,"class","flex flex-col space-y-2 w-full items-center"),m(u,"class","w-full"),m(o,"class","flex flex-col w-full h-full p-2")},m(e,r){X(e,o,r),n(o,u),n(u,s),n(s,i),n(i,k),n(i,_),n(s,F),T(d,s,null),n(s,z),T(f,s,null),n(s,H),T(c,s,null),n(s,M),T(p,s,null),n(s,N),T($,s,null),n(s,R),n(s,v),n(v,g),n(g,Z),B=!0,j||(K=Y(ee.call(null,s,a[2])),j=!0)},p(e,[r]){(!B||r&1)&&l!==(l=e[0].item.name+"")&&x(_,l);const w={};r&3&&(w.value=e[1]?.data?.name??e[0].item.name),r&2&&(w.errors=e[1]?.errors?.name),d.$set(w);const t={};r&3&&(t.value=e[1]?.data?.country??e[0].item.country),r&2&&(t.errors=e[1]?.errors?.country),f.$set(t);const h={};r&3&&(h.value=e[1]?.data?.process??e[0].item.process),r&2&&(h.errors=e[1]?.errors?.process),c.$set(h);const y={};r&3&&(y.value=e[1]?.data?.businessUnit??e[0].item.businessUnit),r&2&&(y.errors=e[1]?.errors?.businessUnit),p.$set(y);const I={};r&3&&(I.value=e[1]?.data?.class??e[0].item.class),r&2&&(I.errors=e[1]?.errors?.class),$.$set(I)},i(e){B||(V(d.$$.fragment,e),V(f.$$.fragment,e),V(c.$$.fragment,e),V(p.$$.fragment,e),V($.$$.fragment,e),B=!0)},o(e){q(d.$$.fragment,e),q(f.$$.fragment,e),q(c.$$.fragment,e),q(p.$$.fragment,e),q($.$$.fragment,e),B=!1},d(e){e&&b(o),A(d),A(f),A(c),A(p),A($),j=!1,K()}}}function le(a,o,u){let{data:s}=o,{form:i}=o;const k=()=>async({result:l,update:_})=>{switch(l.type){case"success":await invalidateAll();break;case"error":break;default:await _()}};return a.$$set=l=>{"data"in l&&u(0,s=l.data),"form"in l&&u(1,i=l.form)},[s,i,k]}class ce extends L{constructor(o){super(),Q(this,o,le,oe,W,{data:0,form:1})}}export{ce as default};