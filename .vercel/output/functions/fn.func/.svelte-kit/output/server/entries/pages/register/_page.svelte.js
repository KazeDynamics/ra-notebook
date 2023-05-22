import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { I as Input } from "../../../chunks/Input.js";
import "../../../chunks/utils.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../chunks/functions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"flex flex-col items-center h-full w-full pt-8"}"><h2 class="${"mt-2 text-center text-3xl font-bold tracking-tight text-base-content"}">Register for an account
	</h2>
	<p class="${"text-center mt-1"}">Or <a href="${"/login"}" class="${"text-primary font-medium hover:cursor-pointer hover:underline"}">sign in</a> if you already have an account.
	</p>
	<form action="${"?/register"}" method="${"POST"}" class="${"flex flex-col items-center space-y-2 w-full pt-4"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "name",
      label: "Name",
      value: form?.data?.name,
      errors: form?.errors?.name
    },
    {},
    {}
  )}
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "email",
      id: "email",
      label: "Email",
      value: form?.data?.email,
      errors: form?.errors?.email
    },
    {},
    {}
  )}
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "password",
      label: "Password",
      errors: form?.errors?.password
    },
    {},
    {}
  )}
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "passwordConfirm",
      label: "Confirm Password",
      errors: form?.errors?.passwordConfirm
    },
    {},
    {}
  )}
		<div class="${"w-full max-w-lg pt-2"}"><button type="${"submit"}" class="${"btn btn-primary w-full"}">Register</button></div></form></div>`;
});
export {
  Page as default
};
