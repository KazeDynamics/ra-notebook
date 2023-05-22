import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/utils.js";
import { I as Input } from "../../../../chunks/Input.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../../chunks/functions.js";
import { D as DropdownCountry, a as DropdownProcess, b as DropdownBusinessUnit, c as DropdownClass } from "../../../../chunks/DropdownClass.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"flex flex-col w-full h-full p-2"}"><div class="${"w-full"}"><form action="${"?/create"}" method="${"POST"}" class="${"flex flex-col space-y-2 w-full items-center"}"><h3 class="${"text-3xl font-bold"}">Please provide the product information</h3>
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "name",
      label: "Product Name",
      value: form?.data?.name,
      errors: form?.errors?.name
    },
    {},
    {}
  )}
			${validate_component(DropdownCountry, "DropdownCountry").$$render(
    $$result,
    {
      id: "country",
      label: "Country",
      value: form?.data?.country,
      errors: form?.errors?.country
    },
    {},
    {}
  )}
			${validate_component(DropdownProcess, "DropdownProcess").$$render(
    $$result,
    {
      id: "process",
      label: "Process Type",
      value: form?.data?.process,
      errors: form?.errors?.process
    },
    {},
    {}
  )}
			${validate_component(DropdownBusinessUnit, "DropdownBusinessUnit").$$render(
    $$result,
    {
      id: "businessUnit",
      label: "Business Unit",
      value: form?.data?.businessUnit,
      errors: form?.errors?.businessUnit
    },
    {},
    {}
  )}
			${validate_component(DropdownClass, "DropdownClass").$$render(
    $$result,
    {
      id: "class",
      label: "Class ",
      value: form?.data?.class,
      errors: form?.errors?.class
    },
    {},
    {}
  )}
			<div class="${"w-full max-w-lg pt-3"}"><button type="${"submit"}" class="${"btn btn-primary w-full max-w-lg"}">Create Item</button></div></form></div></div>`;
});
export {
  Page as default
};
