import { e as error, f as fail, r as redirect } from "../../../../../chunks/index.js";
import { s as serializeNonPOJOs, v as validateData } from "../../../../../chunks/utils.js";
import { u as updateItemSchema } from "../../../../../chunks/schemas.js";
import { serialize } from "object-to-formdata";
const load = async ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw error(401, "Unauthorized");
  }
  try {
    const item = serializeNonPOJOs(await locals.pb.collection("items").getOne(params.itemsId));
    if (locals.user.id === item.user) {
      return {
        item
      };
    } else {
      throw error(403, "Forbidden");
    }
  } catch (err) {
    console.log("Error: ", err);
    throw error(err.status, err.message);
  }
};
const actions = {
  updateItem: async ({ request, locals, params }) => {
    const body = await request.formData();
    const { formData, errors } = await validateData(body, updateItemSchema);
    if (errors) {
      return fail(400, {
        data: rest,
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("items").update(params.itemsId, serialize(formData));
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
    throw redirect(303, `/home`);
  }
};
export {
  actions,
  load
};
