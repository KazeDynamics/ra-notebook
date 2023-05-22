import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute, i as each } from "../../../chunks/index3.js";
import "../../../chunks/utils.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../chunks/functions.js";
import { I as Icon } from "../../../chunks/Icon.js";
const ItemCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let url = "";
  if (item.country === "guatemala") {
    url = "my/items/guatemala";
  } else if (item.country === "honduras") {
    url = "my/items/honduras";
  } else if (item.country === "elSalvador") {
    url = "my/items/elSalvador";
  } else if (item.country === "nicaragua") {
    url = "my/items/nicaragua";
  } else if (item.country === "costaRica") {
    url = "my/items/costaRica";
  } else if (item.country === "panama") {
    url = "my/items/panama";
  } else {
    url = "/home";
  }
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<div class="${"card w-72 m-4 bg-base-100 shadow-xl"}"><div class="${"card-body"}"><div class="${"w-full md:h-28 h:30 flex items-center md:justify-between basis-1/2 flex-row"}"><div class="${"flex flex-col w-full h-full justify-center"}"><h2 class="${"card-title font-bold"}">${escape(item.name)}</h2>
				${item.process === "productSubmission" ? `<p class="${"text-secondary font-medium"}">Product Submission</p>` : `${item.process === "productRenewal" ? `<p class="${"text-secondary font-medium"}">Product Renewal</p>` : ``}`}</div>
			<div class="${"flex flex-col items-center justify-center"}"><h2 class="${"text-3xl"}">${item.country === "guatemala" ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-guatemala",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}` : `${item.country === "honduras" ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-honduras",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}` : `${item.country === "elSalvador" ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-el-salvador",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}` : `${item.country === "nicaragua" ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-nicaragua",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}` : `${item.country === "costaRica" ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-costa-rica",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}` : `${item.country === "panama" ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-panama",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}` : ``}`}`}`}`}`}</h2>
				<h2>${item.status === true ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-xl ml-4 mb-2 mt-1 text-green-600 scale-150 text-center",
      icon: "material-symbols:check-circle"
    },
    {},
    {}
  )}` : ``}</h2></div></div>
		<div class="${"card-actions justify-center pt-5"}"><a${add_attribute("href", url, 0)} class="${"btn btn-primary"}">View Item</a></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col gap-3"}"><h1 class="${"text-xl font-bold"}">Recent Items</h1>
	${data.items.length === 0 ? `<div class="${"w-full mt-4 flex flex-col items-center"}"><p class="${"text-center text-3xl"}">😮</p>
			<p class="${"text-center text-3xl m-3"}">Looks like you don&#39;t have any products.</p>
			<a href="${"/items/new"}" class="${"btn btn-primary max-w-md mt-4"}">Add One</a></div>` : `<div class="${"flex flex-wrap justify-center sm:justify-start"}">${each(data.items, (item) => {
    return `${validate_component(ItemCard, "ItemCard").$$render($$result, { item }, {}, {})}`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
