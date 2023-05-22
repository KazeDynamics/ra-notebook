import { r as redirect, e as error } from "../../../../../chunks/index.js";
import { s as serializeNonPOJOs } from "../../../../../chunks/utils.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
  const getItemsByCountry = async () => {
    try {
      const items = serializeNonPOJOs(
        await locals.pb.collection("items").getFullList(void 0, {
          filter: `country = "nicaragua"`
        })
      );
      return items;
    } catch (err) {
      console.log("Error:", err);
      throw error(err.status, err.message);
    }
  };
  return {
    items: getItemsByCountry()
  };
};
const actions = {
  deleteItem: async ({ request, locals }) => {
    const { id } = Object.fromEntries(await request.formData());
    try {
      await locals.pb.collection("items").delete(id);
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
    return {
      success: true
    };
  },
  updateItem: async ({ request, locals }) => {
    const { id } = Object.fromEntries(await request.formData());
    try {
      await locals.pb.collection("items").update(id, { status: true });
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
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
