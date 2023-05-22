import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { M as Modal } from "../../../../../chunks/Modal.js";
import "../../../../../chunks/functions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  let emailModalOpen;
  let usernameModalOpen;
  let loading;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  emailModalOpen = false;
  usernameModalOpen = false;
  loading = false;
  return `<div class="flex flex-col w-full h-full space-y-12"><div class="w-full"><h3 class="text-2xl font-medium">Change Email</h3>
		<div class="divider"></div>
		${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      label: "change-email",
      checked: emailModalOpen
    },
    {},
    {
      heading: () => {
        return `<h3 slot="heading">Change Your Email</h3>`;
      },
      trigger: () => {
        return `<span slot="trigger" class="btn btn-primary">Change Email</span>`;
      },
      default: () => {
        return `<form action="?/updateEmail" method="POST" class="space-y-2">${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "email",
            type: "email",
            label: "Enter your new email address",
            required: true,
            value: form?.data?.email,
            disabled: loading,
            errors: form?.errors?.email
          },
          {},
          {}
        )}
				<button type="submit" class="btn btn-primary w-full" ${loading ? "disabled" : ""}>Change my email</button></form>`;
      }
    }
  )}</div>
	<div class="w-full"><h3 class="text-2xl font-medium">Change Username</h3>
		<div class="divider mb-0.5"></div>
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "username",
      label: "Username",
      value: data?.user?.username,
      disabled: true
    },
    {},
    {}
  )}
		${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      label: "change-username",
      checked: usernameModalOpen
    },
    {},
    {
      heading: () => {
        return `<h3 slot="heading">Change Your Username</h3>`;
      },
      trigger: () => {
        return `<span slot="trigger" class="btn btn-primary">Change Username</span>`;
      },
      default: () => {
        return `<form action="?/updateUsername" method="POST" class="space-y-2">${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "username",
            type: "text",
            label: "Enter your new username",
            required: true,
            value: form?.data?.username,
            disabled: loading,
            errors: form?.errors?.username
          },
          {},
          {}
        )}
				<button type="submit" class="btn btn-primary w-full" ${loading ? "disabled" : ""}>Change my username</button></form>`;
      }
    }
  )}</div></div>`;
});
export {
  Page as default
};
