import { r as redirect, f as fail, e as error } from "../../../../chunks/index.js";
import { serialize } from "object-to-formdata";
import { c as createItemSchema } from "../../../../chunks/schemas.js";
import { v as validateData } from "../../../../chunks/utils2.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
};
const actions = {
  create: async ({ request, locals }) => {
    const body = await request.formData();
    body.append("user", locals.user.id);
    const { formData, errors } = await validateData(body, createItemSchema);
    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("items").create(serialize(formData));
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
    throw redirect(303, "/home");
  }
};
export {
  actions,
  load
};
