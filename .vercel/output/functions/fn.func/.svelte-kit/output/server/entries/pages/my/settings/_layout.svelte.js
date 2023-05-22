import { c as create_ssr_component, i as subscribe, j as each, h as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navigation = [
    {
      title: "Profile",
      href: "/my/settings/profile"
    },
    {
      title: "Account",
      href: "/my/settings/account"
    }
  ];
  $$unsubscribe_page();
  return `<div class="w-full h-full px-2"><h3 class="text-2xl font-medium">Settings</h3>
	<div class="divider"></div></div>
<div class="flex w-full h-full space-x-4 flex-col sm:flex-row"><ul class="menu bg-base-100 w-56 p-2 rounded-box">${each(navigation, (navItem) => {
    return `<li><a${add_attribute("href", navItem.href, 0)} class="${"font-medium " + escape($page.url.pathname === navItem.href ? "active" : "", true)}">${escape(navItem.title)}</a>
			</li>`;
  })}</ul>
	<div class="w-full">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
