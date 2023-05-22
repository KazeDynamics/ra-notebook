import { c as create_ssr_component, g as add_attribute, e as escape, i as each } from "./index3.js";
const DropdownBusinessUnit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { id } = $$props;
  let { label } = $$props;
  let { type = "select" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { errors } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
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
  return `<div class="${"form-control w-full max-w-lg"}"><label${add_attribute("for", id, 0)} class="${"label font-medium pb-1"}"><span class="${"label-text"}">${escape(label)}</span></label>
	<select class="${"select select-primary w-full max-w-xs"}"${add_attribute("type", type, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", id, 0)}${add_attribute("value", value, 0)}><option disabled selected value="${"Choose a Business Unit"}">Choose a Business Unit</option><option value="${"IC"}">IC</option><option value="${"PI"}">PI</option><option value="${"CRM"}">CRM</option><option value="${"EP"}">EP</option><option value="${"ENDO"}">ENDO</option><option value="${"URO"}">URO</option><option value="${"NMD"}">NMD</option></select>
	${errors ? `${each(errors, (error) => {
    return `<label${add_attribute("for", id, 0)} class="${"label py-0 pt-1"}"><span class="${"label-text-alt text-error"}">${escape(error)}</span>
			</label>`;
  })}` : ``}</div>`;
});
const DropdownCountry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { id } = $$props;
  let { label } = $$props;
  let { type = "select" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { errors } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
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
  return `<div class="${"form-control w-full max-w-lg"}"><label${add_attribute("for", id, 0)} class="${"label font-medium pb-1"}"><span class="${"label-text"}">${escape(label)}</span></label>
	<select class="${"select select-primary w-full max-w-xs"}"${add_attribute("type", type, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", id, 0)}${add_attribute("value", value, 0)}><option disabled selected value="${"Choose a country"}">Choose a country</option><option value="${"guatemala"}">Guatemala</option><option value="${"honduras"}">Honduras</option><option value="${"elSalvador"}">El Salvador</option><option value="${"nicaragua"}">Nicaragua</option><option value="${"costaRica"}">Costa Rica</option><option value="${"panama"}">Panama</option></select>
	${errors ? `${each(errors, (error) => {
    return `<label${add_attribute("for", id, 0)} class="${"label py-0 pt-1"}"><span class="${"label-text-alt text-error"}">${escape(error)}</span>
			</label>`;
  })}` : ``}</div>`;
});
const DropdownProcess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { id } = $$props;
  let { label } = $$props;
  let { type = "select" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { errors } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
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
  return `<div class="${"form-control w-full max-w-lg"}"><label${add_attribute("for", id, 0)} class="${"label font-medium pb-1"}"><span class="${"label-text"}">${escape(label)}</span></label>
	<select class="${"select select-primary w-full max-w-xs"}"${add_attribute("type", type, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", id, 0)}${add_attribute("value", value, 0)}><option disabled selected value="${"Choose a process type"}">Choose a process type</option><option value="${"productSubmission"}">Product Submission</option><option value="${"productRenewal"}">Product Renewal</option></select>
	${errors ? `${each(errors, (error) => {
    return `<label${add_attribute("for", id, 0)} class="${"label py-0 pt-1"}"><span class="${"label-text-alt text-error"}">${escape(error)}</span>
			</label>`;
  })}` : ``}</div>`;
});
const DropdownClass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { id } = $$props;
  let { label } = $$props;
  let { type = "select" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { errors } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
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
  return `<div class="${"form-control w-full max-w-lg"}"><label${add_attribute("for", id, 0)} class="${"label font-medium pb-1"}"><span class="${"label-text"}">${escape(label)}</span></label>
	<select class="${"select select-primary w-full max-w-xs"}"${add_attribute("type", type, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", id, 0)}${add_attribute("value", value, 0)}><option disabled selected value="${"Choose a Class"}">Choose a Class</option><option value="${"none"}">None</option><option value="${"class1"}">Class 1/A</option><option value="${"class2"}">Class 2/B</option><option value="${"class3"}">Class 3/C</option><option value="${"class4"}">Class 4/D</option></select>
	${errors ? `${each(errors, (error) => {
    return `<label${add_attribute("for", id, 0)} class="${"label py-0 pt-1"}"><span class="${"label-text-alt text-error"}">${escape(error)}</span>
			</label>`;
  })}` : ``}</div>`;
});
export {
  DropdownCountry as D,
  DropdownProcess as a,
  DropdownBusinessUnit as b,
  DropdownClass as c
};
