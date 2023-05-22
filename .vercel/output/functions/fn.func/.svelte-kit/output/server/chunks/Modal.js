import { c as create_ssr_component, h as add_attribute } from "./index3.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { checked } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  return `<label${add_attribute("for", label, 0)}>${slots.trigger ? slots.trigger({}) : ``}</label>

<input type="checkbox"${add_attribute("id", label, 0)} class="modal-toggle" ${checked ? "checked" : ""}>
<label${add_attribute("for", label, 0)} class="modal modal-bottom sm:modal-middle "><label for="" class="modal-box"><div class="font-bold text-xl text-center">${slots.heading ? slots.heading({}) : ``}</div>
		<div class="my-2">${slots.default ? slots.default({}) : ``}</div>
		<div class="modal-action justify-center">${slots.actions ? slots.actions({}) : ``}</div></label></label>`;
});
export {
  Modal as M
};
