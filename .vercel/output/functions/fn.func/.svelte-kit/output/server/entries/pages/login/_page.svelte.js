import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/utils.js";
import { I as Input } from "../../../chunks/Input.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../../chunks/functions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let loading = false;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"flex flex-col items-center h-full w-full pt-8"}"><h2 class="${"mt-2 text-center text-3xl font-bold tracking-tight text-base-content"}">Login to your account
	</h2>
	<p class="${"text-center mt-1"}">Or <a href="${"/register"}" class="${"text-primary font-medium hover:cursor-pointer hover:underline"}">register</a> if you don&#39;t already have an account.
	</p>
	<form action="${"?/login"}" method="${"POST"}" class="${"flex flex-col items-center space-y-2 w-full pt-4"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "email",
      id: "email",
      label: "Email",
      value: form?.data?.email ?? "",
      errors: form?.errors?.email,
      disabled: loading
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
      errors: form?.errors?.password,
      disabled: loading
    },
    {},
    {}
  )}
		<div class="${"w-full max-w-lg"}"><a href="${"/reset-password"}" class="${"font-medium text-primary hover:cursor-pointer hover:underline"}">Forgot Password?</a></div>

		<div class="${"w-full max-w-lg pt-2"}"><button type="${"submit"}" class="${"btn btn-primary w-full"}" ${""}>Login</button></div>
		${form?.notVerified ? `<div class="${"alert alert-error shadow-lg w-full max-w-lg"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"stroke-current flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
					<span>You must verify your email before you can login.</span></div></div>` : ``}</form></div>`;
});
export {
  Page as default
};
