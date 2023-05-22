import { f as fail, e as error, r as redirect } from "../../../chunks/index.js";
import { v as validateData } from "../../../chunks/utils.js";
import { l as loginUserSchema } from "../../../chunks/schemas.js";
const actions = {
  login: async ({ request, locals }) => {
    const { formData, errors } = await validateData(await request.formData(), loginUserSchema);
    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("users").authWithPassword(formData.email, formData.password);
      if (!locals.pb?.authStore?.model?.verified) {
        locals.pb.authStore.clear();
        return {
          notVerified: true
        };
      }
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
    throw redirect(303, "/home");
  }
};
export {
  actions
};
