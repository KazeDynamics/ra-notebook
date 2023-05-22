import { r as redirect, f as fail, e as error } from "../../../../../chunks/index.js";
import { d as updateProfileSchema } from "../../../../../chunks/schemas.js";
import { v as validateData } from "../../../../../chunks/utils.js";
import { serialize } from "object-to-formdata";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
};
const actions = {
  updateProfile: async ({ request, locals }) => {
    const body = await request.formData();
    const userAvatar = body.get("avatar");
    if (userAvatar.size === 0) {
      body.delete("avatar");
    }
    const { formData, errors } = await validateData(body, updateProfileSchema);
    const { avatar, ...rest } = formData;
    if (errors) {
      return fail(400, {
        data: rest,
        errors: errors.fieldErrors
      });
    }
    try {
      const { name, avatar: avatar2 } = await locals.pb.collection("users").update(locals?.user?.id, serialize(formData));
      locals.users.name = name;
      locals.users.avatar = avatar2;
    } catch (err) {
      console.log("Error: ", err);
      throw error(400, "Something went wrong updating your profile");
    }
    return {
      success: true
    };
  }
};
export {
  actions,
  load
};
