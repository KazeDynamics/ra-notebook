import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col w-full mt-4"><h2>Product Name: <h1 class="text-3xl font-bold">${escape(data.item.name)}</h1></h2>
	<h2 class="mt-6">Country:
		${data.item.country === "guatemala" ? `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-guatemala",
      class: "text-5xl"
    },
    {},
    {}
  )}</div>` : `${data.item.country === "honduras" ? `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-honduras",
      class: "text-5xl"
    },
    {},
    {}
  )}</div>` : `${data.item.country === "elSalvador" ? `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-el-salvador",
      class: "text-5xl"
    },
    {},
    {}
  )}</div>` : `${data.item.country === "nicaragua" ? `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-nicaragua",
      class: "text-5xl"
    },
    {},
    {}
  )}</div>` : `${data.item.country === "costaRica" ? `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-costa-rica",
      class: "text-5xl"
    },
    {},
    {}
  )}</div>` : `${data.item.country === "panama" ? `<div>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-panama",
      class: "text-5xl"
    },
    {},
    {}
  )}</div>` : ``}`}`}`}`}`}</h2>
	<h2 class="mt-6">Process Type:
		${data.item.process === "productSubmission" ? `<h1 class="text-3xl font-bold">Product Submission</h1>` : `${data.item.process === "productRenewal" ? `<h1 class="text-3xl font-bold">Product Renewal</h1>` : ``}`}</h2>
	<h2 class="mt-6">Business Unit: <h1 class="text-3xl font-bold">${escape(data.item.businessUnit)}</h1></h2>
	<h2 class="mt-6">Created on: <h1 class="text-3xl font-bold">${escape(data.item.created.split(" ")[0])}</h1></h2></div>`;
});
export {
  Page as default
};
