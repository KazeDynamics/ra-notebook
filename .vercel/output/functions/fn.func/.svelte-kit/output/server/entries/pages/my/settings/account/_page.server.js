import { f as fail, e as error } from "../../../../../chunks/index.js";
import { a as updateEmailSchema, b as updateUsernameSchema } from "../../../../../chunks/schemas.js";
import { v as validateData } from "../../../../../chunks/utils.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
};
const actions = {
  updateEmail: async ({ request, locals }) => {
    const { formData, errors } = await validateData(await request.formData(), updateEmailSchema);
    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("users").requestEmailChange(formData.email);
    } catch (err) {
      throw error(err.status, err.message);
    }
    return {
      success: true
    };
  },
  updateUsername: async ({ request, locals }) => {
    const { formData, errors } = await validateData(await request.formData(), updateUsernameSchema);
    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("users").getFirstListItem(`username = "${formData.username}"`);
    } catch (err) {
      if (err.status === 404) {
        try {
          const { username } = await locals.pb.collection("users").update(locals.user.id, { username: formData.username });
          locals.user.username = username;
          return {
            success: true
          };
        } catch (err2) {
          console.log("Error: ", err2);
          throw error(err2.status, err2.message);
        }
      }
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
  }
};
export {
  actions,
  load
};
