import{p as f}from"./parse.492575b6.js";import{c as m}from"./singletons.252098fa.js";const b=m("invalidate_all"),y=m("apply_action");function h(t){const n=JSON.parse(t);return n.data&&(n.data=f(n.data)),n}function g(t){return HTMLElement.prototype.cloneNode.call(t)}function L(t,n=()=>{}){const c=async({action:a,result:e,reset:r})=>{e.type==="success"&&(r!==!1&&HTMLFormElement.prototype.reset.call(t),await b()),(location.origin+location.pathname===a.origin+a.pathname||e.type==="redirect"||e.type==="error")&&y(e)};async function s(a){a.preventDefault();const e=new URL(a.submitter?.hasAttribute("formaction")?a.submitter.formAction:g(t).action),r=new FormData(t),l=a.submitter?.getAttribute("name");l&&r.append(l,a.submitter?.getAttribute("value")??"");const p=new AbortController;let u=!1;const d=await n({action:e,cancel:()=>u=!0,controller:p,get data(){return r},formData:r,get form(){return t},formElement:t,submitter:a.submitter})??c;if(u)return;let i;try{const o=await fetch(e,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:r,signal:p.signal});i=h(await o.text()),i.type==="error"&&(i.status=o.status)}catch(o){if(o?.name==="AbortError")return;i={type:"error",error:o}}d({action:e,get data(){return r},formData:r,get form(){return t},formElement:t,update:o=>c({action:e,result:i,reset:o?.reset}),result:i})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",s),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",s)}}}export{y as a,L as e,b as i};
