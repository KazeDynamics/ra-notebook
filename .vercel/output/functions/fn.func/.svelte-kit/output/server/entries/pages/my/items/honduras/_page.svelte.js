import { c as create_ssr_component, v as validate_component, j as each } from "../../../../../chunks/index3.js";
import { M as MyItem } from "../../../../../chunks/MyItem.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="text-3xl font-bold">Honduras${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "twemoji:flag-honduras",
      class: "text-xxl ml-4 mb-2 inline"
    },
    {},
    {}
  )}</h2>
<div class="w-full mt-4 flex flex-col items-center">${data.items.length === 0 ? `<p class="text-center text-3xl">😮</p>
		<p class="text-center text-3xl m-3">Looks like you don&#39;t have any products for this country yet.
		</p>
		<a href="/items/new" class="btn btn-primary max-w-md mt-4">Add One</a>` : `${each(data.items, (item) => {
    return `${validate_component(MyItem, "MyItem").$$render($$result, { item }, {}, {})}
			<div class="py-2"></div>`;
  })}`}</div>`;
});
export {
  Page as default
};
