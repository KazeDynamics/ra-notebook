import { f as fail, e as error, r as redirect } from "../../../chunks/index.js";
import { r as registerUserSchema } from "../../../chunks/schemas.js";
import { v as validateData, a as generateUsername } from "../../../chunks/utils2.js";
const actions = {
  register: async ({ locals, request }) => {
    const { formData, errors } = await validateData(await request.formData(), registerUserSchema);
    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors
      });
    }
    let username = generateUsername(formData.name.split(" ").join("")).toLowerCase();
    try {
      await locals.pb.collection("users").create({ username, ...formData });
      await locals.pb.collection("users").requestVerification(formData.email);
    } catch (err) {
      console.log("Error: ", err);
      throw error(500, "Something went wrong");
    }
    throw redirect(303, "/login");
  }
};
export {
  actions
};
