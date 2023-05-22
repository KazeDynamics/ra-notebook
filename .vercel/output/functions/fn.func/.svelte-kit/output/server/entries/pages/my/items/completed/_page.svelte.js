import { c as create_ssr_component, v as validate_component, i as each } from "../../../../../chunks/index3.js";
import { M as MyItem } from "../../../../../chunks/MyItem.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import "../../../../../chunks/utils.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="${"text-3xl font-bold"}">Completed Items
	${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-xxl mb-2 inline text-primary",
      icon: "material-symbols:check-circle"
    },
    {},
    {}
  )}</h2>
<div class="${"w-full mt-4 flex flex-col items-center"}">${data.items.length === 0 ? `<p class="${"text-center text-3xl"}">😮</p>
		<p class="${"text-center text-3xl m-3"}">Looks like you don&#39;t have any completed products in your notebook.
		</p>
		<a href="${"/items/new"}" class="${"btn btn-primary max-w-md mt-4"}">Add One</a>` : `${each(data.items, (item) => {
    return `${validate_component(MyItem, "MyItem").$$render($$result, { item }, {}, {})}
			<div class="${"py-2"}"></div>`;
  })}`}</div>`;
});
export {
  Page as default
};
