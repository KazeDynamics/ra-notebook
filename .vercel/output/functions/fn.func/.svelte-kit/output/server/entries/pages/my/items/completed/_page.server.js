import { r as redirect, e as error } from "../../../../../chunks/index.js";
import { s as serializeNonPOJOs } from "../../../../../chunks/utils.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
  const getItemsByStatus = async () => {
    try {
      const items = serializeNonPOJOs(
        await locals.pb.collection("items").getFullList(void 0, {
          filter: `status = True`
        })
      );
      return items;
    } catch (err) {
      console.log("Error:", err);
      throw error(err.status, err.message);
    }
  };
  return {
    items: getItemsByStatus()
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
  }
};
export {
  actions,
  load
};
