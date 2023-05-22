import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index3.js";
import "../../../../../chunks/utils.js";
import { I as Input } from "../../../../../chunks/Input.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/functions.js";
import { D as DropdownCountry, a as DropdownProcess, b as DropdownBusinessUnit, c as DropdownClass } from "../../../../../chunks/DropdownClass.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"flex flex-col w-full h-full p-2"}"><div class="${"w-full"}"><form method="${"POST"}" action="${"?/updateItem"}" class="${"flex flex-col space-y-2 w-full items-center"}"><h3 class="${"text-3xl font-bold"}">Edit ${escape(data.item.name)}</h3>
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "name",
      label: "Item name",
      value: form?.data?.name ?? data.item.name,
      errors: form?.errors?.name
    },
    {},
    {}
  )}
			${validate_component(DropdownCountry, "DropdownCountry").$$render(
    $$result,
    {
      id: "country",
      label: "Item country",
      value: form?.data?.country ?? data.item.country,
      errors: form?.errors?.country,
      disabled: true
    },
    {},
    {}
  )}
			${validate_component(DropdownProcess, "DropdownProcess").$$render(
    $$result,
    {
      id: "process",
      label: "Item process",
      value: form?.data?.process ?? data.item.process,
      errors: form?.errors?.process,
      disabled: true
    },
    {},
    {}
  )}
			${validate_component(DropdownBusinessUnit, "DropdownBusinessUnit").$$render(
    $$result,
    {
      id: "businessUnit",
      label: "Item business unit",
      value: form?.data?.businessUnit ?? data.item.businessUnit,
      errors: form?.errors?.businessUnit
    },
    {},
    {}
  )}
			${validate_component(DropdownClass, "DropdownClass").$$render(
    $$result,
    {
      id: "class",
      label: "Class",
      value: form?.data?.class ?? data.item.class,
      errors: form?.errors?.class,
      disabled: true
    },
    {},
    {}
  )}
			<div class="${"w-full max-w-lg pt-3"}"><button type="${"submit"}" class="${"btn btn-primary w-full max-w-lg"}">Save Changes</button></div></form></div></div>`;
});
export {
  Page as default
};
