import{o as Ie,t as se}from"../chunks/index.2c758050.js";import{S as He,a as Je,I as D,g as je,f as Te,b as _e,c as ie,s as N,i as De,d as W,e as J,P as Ne,h as Ve}from"../chunks/singletons.1fcf3084.js";import{u as Be}from"../chunks/parse.5567e4e2.js";function Ge(a,o){return a==="/"||o==="ignore"?a:o==="never"?a.endsWith("/")?a.slice(0,-1):a:o==="always"&&!a.endsWith("/")?a+"/":a}function We(a){return a.split("%25").map(decodeURI).join("%25")}function Ye(a){for(const o in a)a[o]=decodeURIComponent(a[o]);return a}const Xe=["href","pathname","search","searchParams","toString","toJSON"];function Qe(a,o){const c=new URL(a);for(const f of Xe){let _=c[f];Object.defineProperty(c,f,{get(){return o(),_},enumerable:!0,configurable:!0})}return Ze(c),c}function Ze(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const et="/__data.json";function tt(a){return a.replace(/\/$/,"")+et}function Ke(a){try{return JSON.parse(sessionStorage[a])}catch{}}function Ce(a,o){const c=JSON.stringify(o);try{sessionStorage[a]=c}catch{}}function nt(...a){let o=5381;for(const c of a)if(typeof c=="string"){let f=c.length;for(;f;)o=o*33^c.charCodeAt(--f)}else if(ArrayBuffer.isView(c)){const f=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);let _=f.length;for(;_;)o=o*33^f[--_]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const le=window.fetch;window.fetch=(a,o)=>((a instanceof Request?a.method:o?.method||"GET")!=="GET"&&X.delete(ve(a)),le(a,o));const X=new Map;function at(a,o){const c=ve(a,o),f=document.querySelector(c);if(f?.textContent){const{body:_,...y}=JSON.parse(f.textContent),R=f.getAttribute("data-ttl");return R&&X.set(c,{body:_,init:y,ttl:1e3*Number(R)}),Promise.resolve(new Response(_,y))}return le(a,o)}function rt(a,o,c){if(X.size>0){const f=ve(a,c),_=X.get(f);if(_){if(performance.now()<_.ttl&&["default","force-cache","only-if-cached",void 0].includes(c?.cache))return new Response(_.body,_.init);X.delete(f)}}return le(o,c)}function ve(a,o){let f=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(o?.headers||o?.body){const _=[];o.headers&&_.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&_.push(o.body),f+=`[data-hash="${nt(..._)}"]`}return f}const ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function st(a){const o=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${lt(a).map(f=>{const _=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(_)return o.push({name:_[1],matcher:_[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(y)return o.push({name:y[1],matcher:y[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!f)return;const R=f.split(/\[(.+?)\](?!\])/);return"/"+R.map((w,b)=>{if(b%2){if(w.startsWith("x+"))return ge(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ge(String.fromCharCode(...w.slice(2).split("-").map(T=>parseInt(T,16))));const h=ot.exec(w);if(!h)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,U,x,L]=h;return o.push({name:x,matcher:L,optional:!!I,rest:!!U,chained:U?b===1&&R[0]==="":!1}),U?"(.*?)":I?"([^/]*)?":"([^/]+?)"}return ge(w)}).join("")}).join("")}/?$`),params:o}}function it(a){return!/^\([^)]+\)$/.test(a)}function lt(a){return a.slice(1).split("/").filter(it)}function ct(a,o,c){const f={},_=a.slice(1);let y=0;for(let R=0;R<o.length;R+=1){const g=o[R],w=_[R-y];if(g.chained&&g.rest&&y){f[g.name]=_.slice(R-y,R+1).filter(b=>b).join("/"),y=0;continue}if(w===void 0){g.rest&&(f[g.name]="");continue}if(!g.matcher||c[g.matcher](w)){f[g.name]=w;continue}if(g.optional&&g.chained){y++;continue}return}if(!y)return f}function ge(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ft({nodes:a,server_loads:o,dictionary:c,matchers:f}){const _=new Set(o);return Object.entries(c).map(([g,[w,b,h]])=>{const{pattern:I,params:U}=st(g),x={id:g,exec:L=>{const T=I.exec(L);if(T)return ct(T,U,f)},errors:[1,...h||[]].map(L=>a[L]),layouts:[0,...b||[]].map(R),leaf:y(w)};return x.errors.length=x.layouts.length=Math.max(x.errors.length,x.layouts.length),x});function y(g){const w=g<0;return w&&(g=~g),[w,a[g]]}function R(g){return g===void 0?g:[_.has(g),a[g]]}}let Y=class{constructor(o,c){this.status=o,typeof c=="string"?this.body={message:c}:c?this.body=c:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},qe=class{constructor(o,c){this.status=o,this.location=c}};async function ut(a){for(const o in a)if(typeof a[o]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([c,f])=>[c,await f])));return a}function dt(a){return a.filter(o=>o!=null)}const F=Ke(He)??{},G=Ke(Je)??{};function ye(a){F[a]=W()}function pt(a,o){const c=ft(a),f=a.nodes[0],_=a.nodes[1];f(),_();const y=document.documentElement,R=[],g=[];let w=null;const b={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},I=!1,U=!1,x=!0,L=!1,T=!1,H=!1,C=!1,Q,P=history.state?.[D];P||(P=Date.now(),history.replaceState({...history.state,[D]:P},"",location.href));const ce=F[P];ce&&(history.scrollRestoration="manual",scrollTo(ce.x,ce.y));let q,be,Z;async function Ee(){Z=Z||Promise.resolve(),await Z,Z=null;const e=new URL(location.href),t=M(e,!0);w=null,await xe(t,e,[])}function Se(e){g.some(t=>t?.snapshot)&&(G[e]=g.map(t=>t?.snapshot?.capture()))}function ke(e){G[e]?.forEach((t,n)=>{g[n]?.snapshot?.restore(t)})}async function fe(e,{noScroll:t=!1,replaceState:n=!1,keepFocus:r=!1,state:s={},invalidateAll:i=!1},d,l){return typeof e=="string"&&(e=new URL(e,je(document))),ae({url:e,scroll:t?W():null,keepfocus:r,redirect_chain:d,details:{state:s,replaceState:n},nav_token:l,accepted:()=>{i&&(C=!0)},blocked:()=>{},type:"goto"})}async function Re(e){return w={id:e.id,promise:Ue(e).then(t=>(t.type==="loaded"&&t.state.error&&(w=null),t))},w.promise}async function ee(...e){const n=c.filter(r=>e.some(s=>r.exec(s))).map(r=>Promise.all([...r.layouts,r.leaf].map(s=>s?.[1]())));await Promise.all(n)}async function xe(e,t,n,r,s,i={},d){be=i;let l=e&&await Ue(e);if(l||(l=await $e(t,{id:null},await V(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)),t=e?.url||t,be!==i)return!1;if(l.type==="redirect")if(n.length>10||n.includes(t.pathname))l=await te({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return fe(new URL(l.location,t).href,{},[...n,t.pathname],i),!1;else l.props.page?.status>=400&&await N.updated.check()&&await z(t);if(R.length=0,C=!1,L=!0,r&&(ye(r),Se(r)),l.props.page?.url&&l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page?.url.pathname),s&&s.details){const{details:u}=s,m=u.replaceState?0:1;if(u.state[D]=P+=m,history[u.replaceState?"replaceState":"pushState"](u.state,"",t),!u.replaceState){let v=P+1;for(;G[v]||F[v];)delete G[v],delete F[v],v+=1}}if(w=null,U?(h=l.state,l.props.page&&(l.props.page.url=t),Q.$set(l.props)):Le(l),s){const{scroll:u,keepfocus:m}=s,{activeElement:v}=document;await se();const p=document.activeElement!==v&&document.activeElement!==document.body;if(!m&&!p&&await we(),x){const k=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));u?scrollTo(u.x,u.y):k?k.scrollIntoView():scrollTo(0,0)}}else await se();x=!0,l.props.page&&(q=l.props.page),d&&d(),L=!1}function Le(e){h=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),q=e.props.page,Q=new a.root({target:o,props:{...e.props,stores:N,components:g},hydrate:!0}),ke(P);const n={from:null,to:{params:h.params,route:{id:h.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};b.after_navigate.forEach(r=>r(n)),U=!0}async function K({url:e,params:t,branch:n,status:r,error:s,route:i,form:d}){let l="never";for(const E of n)E?.slash!==void 0&&(l=E.slash);e.pathname=Ge(e.pathname,l),e.search=e.search;const u={type:"loaded",state:{url:e,params:t,branch:n,error:s,route:i},props:{constructors:dt(n).map(E=>E.node.component)}};d!==void 0&&(u.props.form=d);let m={},v=!q,p=0;for(let E=0;E<Math.max(n.length,h.branch.length);E+=1){const A=n[E],re=h.branch[E];A?.data!==re?.data&&(v=!0),A&&(m={...m,...A.data},v&&(u.props[`data_${p}`]=m),p+=1)}return(!h.url||e.href!==h.url.href||h.error!==s||d!==void 0&&d!==q.form||v)&&(u.props.page={error:s,params:t,route:{id:i?.id??null},status:r,url:new URL(e),form:d??null,data:v?m:q.data}),u}async function ue({loader:e,parent:t,url:n,params:r,route:s,server_data_node:i}){let d=null;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},u=await e();if(u.universal?.load){let m=function(...p){for(const k of p){const{href:E}=new URL(k,n);l.dependencies.add(E)}};const v={route:{get id(){return l.route=!0,s.id}},params:new Proxy(r,{get:(p,k)=>(l.params.add(k),p[k])}),data:i?.data??null,url:Qe(n,()=>{l.url=!0}),async fetch(p,k){let E;p instanceof Request?(E=p.url,k={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...k}):E=p;const A=new URL(E,n);return m(A.href),A.origin===n.origin&&(E=A.href.slice(n.origin.length)),U?rt(E,A.href,k):at(E,k)},setHeaders:()=>{},depends:m,parent(){return l.parent=!0,t()}};d=await u.universal.load.call(null,v)??null,d=d?await ut(d):null}return{node:u,loader:e,server:i,universal:u.universal?.load?{type:"data",data:d,uses:l}:null,data:d??i?.data??null,slash:u.universal?.trailingSlash??i?.slash}}function Pe(e,t,n,r,s){if(C)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.params)if(s[i]!==h.params[i])return!0;for(const i of r.dependencies)if(R.some(d=>d(new URL(i))))return!0;return!1}function de(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}async function Ue({id:e,invalidating:t,url:n,params:r,route:s}){if(w?.id===e)return w.promise;const{errors:i,layouts:d,leaf:l}=s,u=[...d,l];i.forEach(S=>S?.().catch(()=>{})),u.forEach(S=>S?.[1]().catch(()=>{}));let m=null;const v=h.url?e!==h.url.pathname+h.url.search:!1,p=h.route?s.id!==h.route.id:!1;let k=!1;const E=u.map((S,O)=>{const j=h.branch[O],$=!!S?.[0]&&(j?.loader!==S[1]||Pe(k,p,v,j.server?.uses,r));return $&&(k=!0),$});if(E.some(Boolean)){try{m=await Fe(n,E)}catch(S){return te({status:S instanceof Y?S.status:500,error:await V(S,{url:n,params:r,route:{id:s.id}}),url:n,route:s})}if(m.type==="redirect")return m}const A=m?.nodes;let re=!1;const pe=u.map(async(S,O)=>{if(!S)return;const j=h.branch[O],$=A?.[O];if((!$||$.type==="skip")&&S[1]===j?.loader&&!Pe(re,p,v,j.universal?.uses,r))return j;if(re=!0,$?.type==="error")throw $;return ue({loader:S[1],url:n,params:r,route:s,parent:async()=>{const he={};for(let me=0;me<O;me+=1)Object.assign(he,(await pe[me])?.data);return he},server_data_node:de($===void 0&&S[0]?{type:"skip"}:$??null,S[0]?j?.server:void 0)})});for(const S of pe)S.catch(()=>{});const B=[];for(let S=0;S<u.length;S+=1)if(u[S])try{B.push(await pe[S])}catch(O){if(O instanceof qe)return{type:"redirect",location:O.location};let j=500,$;if(A?.includes(O))j=O.status??j,$=O.error;else if(O instanceof Y)j=O.status,$=O.body;else{if(await N.updated.check())return await z(n);$=await V(O,{params:r,url:n,route:{id:s.id}})}const oe=await Ae(S,B,i);return oe?await K({url:n,params:r,branch:B.slice(0,oe.idx).concat(oe.node),status:j,error:$,route:s}):await $e(n,{id:s.id},$,j)}else B.push(void 0);return await K({url:n,params:r,branch:B,status:200,error:null,route:s,form:t?void 0:null})}async function Ae(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function te({status:e,error:t,url:n,route:r}){const s={};let i=null;if(a.server_loads[0]===0)try{const m=await Fe(n,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;i=m.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||I)&&await z(n)}const l=await ue({loader:f,url:n,params:s,route:r,parent:()=>Promise.resolve({}),server_data_node:de(i)}),u={node:await _(),loader:_,universal:null,server:null,data:null};return await K({url:n,params:s,branch:[l,u],status:e,error:t,route:null})}function M(e,t){if(De(e,J))return;const n=ne(e);for(const r of c){const s=r.exec(n);if(s)return{id:e.pathname+e.search,invalidating:t,route:r,params:Ye(s),url:e}}}function ne(e){return We(e.pathname.slice(J.length)||"/")}function Oe({url:e,type:t,intent:n,delta:r}){let s=!1;const i={from:{params:h.params,route:{id:h.route?.id??null},url:h.url},to:{params:n?.params??null,route:{id:n?.route?.id??null},url:e},willUnload:!n,type:t};r!==void 0&&(i.delta=r);const d={...i,cancel:()=>{s=!0}};return T||b.before_navigate.forEach(l=>l(d)),s?null:i}async function ae({url:e,scroll:t,keepfocus:n,redirect_chain:r,details:s,type:i,delta:d,nav_token:l,accepted:u,blocked:m}){const v=M(e,!1),p=Oe({url:e,type:i,delta:d,intent:v});if(!p){m();return}const k=P;u(),T=!0,U&&N.navigating.set(p),await xe(v,e,r,k,{scroll:t,keepfocus:n,details:s},l,()=>{T=!1,b.after_navigate.forEach(E=>E(p)),N.navigating.set(null)})}async function $e(e,t,n,r){return e.origin===location.origin&&e.pathname===location.pathname&&!I?await te({status:r,error:n,url:e,route:t}):await z(e)}function z(e){return location.href=e.href,new Promise(()=>{})}function ze(){let e;y.addEventListener("mousemove",i=>{const d=i.target;clearTimeout(e),e=setTimeout(()=>{r(d,2)},20)});function t(i){r(i.composedPath()[0],1)}y.addEventListener("mousedown",t),y.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(i=>{for(const d of i)d.isIntersecting&&(ee(ne(new URL(d.target.href))),n.unobserve(d.target))},{threshold:0});function r(i,d){const l=Te(i,y);if(!l)return;const{url:u,external:m}=_e(l,J);if(m)return;const v=ie(l);if(!v.reload)if(d<=v.preload_data){const p=M(u,!1);p&&Re(p)}else d<=v.preload_code&&ee(ne(u))}function s(){n.disconnect();for(const i of y.querySelectorAll("a")){const{url:d,external:l}=_e(i,J);if(l)continue;const u=ie(i);u.reload||(u.preload_code===Ne.viewport&&n.observe(i),u.preload_code===Ne.eager&&ee(ne(d)))}}b.after_navigate.push(s),s()}function V(e,t){return e instanceof Y?e.body:a.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Ie(()=>(b.after_navigate.push(e),()=>{const t=b.after_navigate.indexOf(e);b.after_navigate.splice(t,1)}))},before_navigate:e=>{Ie(()=>(b.before_navigate.push(e),()=>{const t=b.before_navigate.indexOf(e);b.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(L||!U)&&(x=!1)},goto:(e,t={})=>fe(e,t,[]),invalidate:e=>{if(typeof e=="function")R.push(e);else{const{href:t}=new URL(e,location.href);R.push(n=>n.href===t)}return Ee()},invalidateAll:()=>(C=!0,Ee()),preload_data:async e=>{const t=new URL(e,je(document)),n=M(t,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Re(n)},preload_code:ee,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:n,route:r}=h;if(!r)return;const s=await Ae(h.branch.length,n,r.errors);if(s){const i=await K({url:t,params:h.params,branch:n.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:r});h=i.state,Q.$set(i.props),se().then(we)}}else if(e.type==="redirect")fe(e.location,{invalidateAll:!0},[]);else{const t={form:e.data,page:{...q,form:e.data,status:e.status}};Q.$set(t),e.type==="success"&&se().then(we)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let t=!1;if(!T){const n={from:{params:h.params,route:{id:h.route?.id??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>t=!0};b.before_navigate.forEach(r=>r(n))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(ye(P),Ce(He,F),Se(P),Ce(Je,G))}),navigator.connection?.saveData||ze(),y.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const t=Te(e.composedPath()[0],y);if(!t)return;const{url:n,external:r,target:s}=_e(t,J);if(!n)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const i=ie(t);if(!(t instanceof SVGAElement)&&n.protocol!==location.protocol&&!(n.protocol==="https:"||n.protocol==="http:"))return;if(r||i.reload){Oe({url:n,type:"link"})||e.preventDefault(),T=!0;return}const[l,u]=n.href.split("#");if(u!==void 0&&l===location.href.split("#")[0]){H=!0,ye(P),h.url=n,N.page.set({...q,url:n}),N.page.notify();return}ae({url:n,scroll:i.noscroll?W():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:n.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),y.addEventListener("submit",e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),n=e.submitter;if((n?.formMethod||t.method)!=="get")return;const s=new URL(n?.hasAttribute("formaction")&&n?.formAction||t.action);if(De(s,J))return;const i=e.target,{noscroll:d,reload:l}=ie(i);if(l)return;e.preventDefault(),e.stopPropagation();const u=new FormData(i),m=n?.getAttribute("name");m&&u.append(m,n?.getAttribute("value")??""),s.search=new URLSearchParams(u).toString(),ae({url:s,scroll:d?W():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{if(e.state?.[D]){if(e.state[D]===P)return;const t=F[e.state[D]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){F[P]=W(),P=e.state[D],scrollTo(t.x,t.y);return}const n=e.state[D]-P;let r=!1;await ae({url:new URL(location.href),scroll:t,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=e.state[D]},blocked:()=>{history.go(-n),r=!0},type:"popstate",delta:n}),r||ke(P)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[D]:++P},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&N.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:n,params:r,route:s,data:i,form:d})=>{I=!0;const l=new URL(location.href);({params:r={},route:s={id:null}}=M(l,!1)||{});let u;try{const m=n.map(async(v,p)=>{const k=i[p];return k?.uses&&(k.uses=Me(k.uses)),ue({loader:a.nodes[v],url:l,params:r,route:s,parent:async()=>{const E={};for(let A=0;A<p;A+=1)Object.assign(E,(await m[A]).data);return E},server_data_node:de(k)})});u=await K({url:l,params:r,branch:await Promise.all(m),status:e,error:t,form:d,route:c.find(({id:v})=>v===s.id)??null})}catch(m){if(m instanceof qe){await z(new URL(m.location,location.href));return}u=await te({status:m instanceof Y?m.status:500,error:await V(m,{url:l,params:r,route:s}),url:l,route:s})}Le(u)}}}async function Fe(a,o){const c=new URL(a);c.pathname=tt(a.pathname),c.searchParams.append("x-sveltekit-invalidated",o.map(_=>_?"1":"").join("_"));const f=await le(c.href);if(!f.ok)throw new Y(f.status,await f.json());return new Promise(async _=>{const y=new Map,R=f.body.getReader(),g=new TextDecoder;function w(h){return Be(h,{Promise:I=>new Promise((U,x)=>{y.set(I,{fulfil:U,reject:x})})})}let b="";for(;;){const{done:h,value:I}=await R.read();if(h&&!b)break;for(b+=!I&&b?`
`:g.decode(I);;){const U=b.indexOf(`
`);if(U===-1)break;const x=JSON.parse(b.slice(0,U));if(b=b.slice(U+1),x.type==="redirect")return _(x);if(x.type==="data")x.nodes?.forEach(L=>{L?.type==="data"&&(L.uses=Me(L.uses),L.data=w(L.data))}),_(x);else if(x.type==="chunk"){const{id:L,data:T,error:H}=x,C=y.get(L);y.delete(L),H?C.reject(w(H)):C.fulfil(w(T))}}}})}function Me(a){return{dependencies:new Set(a?.dependencies??[]),params:new Set(a?.params??[]),parent:!!a?.parent,route:!!a?.route,url:!!a?.url}}function we(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const o=document.body,c=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),c!==null?o.setAttribute("tabindex",c):o.removeAttribute("tabindex"),new Promise(f=>{setTimeout(()=>{f(getSelection()?.removeAllRanges())})})}}async function wt(a,o,c){const f=pt(a,o);Ve({client:f}),c?await f._hydrate(c):f.goto(location.href,{replaceState:!0}),f._start_router()}export{wt as start};
