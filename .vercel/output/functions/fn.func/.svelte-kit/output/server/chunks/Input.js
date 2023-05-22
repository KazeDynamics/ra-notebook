import { c as create_ssr_component, h as add_attribute, e as escape, j as each } from "./index3.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { id } = $$props;
  let { label } = $$props;
  let { type = "text" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { errors } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `<div class="form-control w-full max-w-lg mb-2"><label${add_attribute("for", id, 0)} class="label font-medium pb-1"><span class="label-text">${escape(label)}</span></label>
	<input${add_attribute(
    "class",
    type === "file" ? "file-input file-input-bordered w-full max-w-lg" : "input input-bordered w-full max-w-lg",
    0
  )}${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", id, 0)}${add_attribute("value", value, 0)}>
	${errors ? `${each(errors, (error) => {
    return `<label${add_attribute("for", id, 0)} class="label py-0 pt-1"><span class="label-text-alt text-error">${escape(error)}</span>
			</label>`;
  })}` : ``}</div>`;
});
export {
  Input as I
};
