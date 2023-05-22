import { c as create_ssr_component, t as compute_rest_props, b as spread, d as escape_object, u as escape_attribute_value, i as each, v as validate_component, g as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import "../../../../../chunks/utils.js";
import { I as Input } from "../../../../../chunks/Input.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/functions.js";
import { g as getImageURL } from "../../../../../chunks/utils2.js";
const Pencil = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" }] } };
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["src", "size", "solid", "mini"]);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  let { mini = false } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  icon = src?.[solid ? "solid" : mini ? "mini" : "default"];
  return `<svg${spread(
    [
      escape_object(icon?.a),
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { "aria-hidden": "true" },
      escape_object($$restProps)
    ],
    {}
  )}>${each(icon?.path ?? [], (a) => {
    return `<path${spread([escape_object(a)], {})}></path>`;
  })}</svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let loading;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  loading = false;
  return `<div class="${"flex flex-col w-full h-full"}"><form action="${"?/updateProfile"}" method="${"POST"}" class="${"flex flex-col space-y-2 w-full"}" enctype="${"multipart/form-data"}"><h3 class="${"text-2xl font-medium"}">Update Profile</h3>
		<div class="${"form-control w-full max-w-lg"}"><label for="${"avatar"}" class="${"label font-medium pb-1"}"><span class="${"label-text"}">Profile Picture</span></label>
			<label for="${"avatar"}" class="${"avatar w-32 rounded-full hover:cursor-pointer"}"><label for="${"avatar"}" class="${"absolute -bottom-0.5 -right-0.5 hover:cursor-pointer"}"><span class="${"btn btn-circle btn-sm btn-secondary"}">${validate_component(Icon, "Icon").$$render($$result, { src: Pencil, class: "w-4 h-4" }, {}, {})}</span></label>
				<div class="${"w-32 rounded-full"}"><img${add_attribute(
    "src",
    data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`,
    0
  )} alt="${"user avatar"}" id="${"avatar-preview"}"></div></label>
			<input type="${"file"}" name="${"avatar"}" id="${"avatar"}" value="${""}" accept="${"image/*"}" hidden ${loading ? "disabled" : ""}>
			${form?.errors?.avatar ? `${each(form?.errors?.avatar, (error) => {
    return `<label for="${"avatar"}" class="${"label py-0 pt-1"}"><span class="${"label-text-alt text-error"}">${escape(error)}</span>
					</label>`;
  })}` : ``}</div>
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "name",
      label: "Name",
      value: form?.data?.name ?? data?.user?.name,
      disabled: loading,
      errors: form?.errors?.name
    },
    {},
    {}
  )}
		<div class="${"w-full max-w-lg pt-3"}"><button class="${"btn btn-primary w-full max-w-lg"}" type="${"submit"}" ${loading ? "disabled" : ""}>Update Profile
			</button></div></form></div>`;
});
export {
  Page as default
};
