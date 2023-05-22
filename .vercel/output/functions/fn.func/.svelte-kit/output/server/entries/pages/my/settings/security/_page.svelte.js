import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { I as Input } from "../../../../../chunks/Input.js";
import "../../../../../chunks/functions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex flex-col w-full h-full"><div class="w-full"><form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full"><h3 class="text-2xl font-medium">Change Password</h3>
			<div class="divider"></div>
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "oldPassword",
      label: "Old Password",
      type: "password",
      required: true,
      errors: form?.errors?.oldPassword
    },
    {},
    {}
  )}
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "password",
      label: "New Password",
      type: "password",
      required: true,
      errors: form?.errors?.password
    },
    {},
    {}
  )}
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "passwordConfirm",
      label: "Confirm New Password",
      type: "password",
      required: true,
      errors: form?.errors?.passwordConfirm
    },
    {},
    {}
  )}
			<a href="/reset-password" class="text-primary hover:cursor-point hover:underline">I forgot my password</a>
			<div class="w-full max-w-lg pt-3"><button type="submit" class="btn btn-primary w-full max-w-lg">Update Password </button></div></form></div></div>`;
});
export {
  Page as default
};
