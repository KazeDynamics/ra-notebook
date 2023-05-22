import { r as redirect, f as fail, e as error } from "../../../../../chunks/index.js";
import { e as updatePasswordSchema } from "../../../../../chunks/schemas.js";
import { v as validateData } from "../../../../../chunks/utils2.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
};
const actions = {
  updatePassword: async ({ request, locals }) => {
    const { formData, errors } = await validateData(await request.formData(), updatePasswordSchema);
    if (errors) {
      return fail(400, {
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("users").update(locals.user.id, formData);
      locals.pb.authStore.clear();
    } catch {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
    throw redirect(303, "/login");
  }
};
export {
  actions,
  load
};
