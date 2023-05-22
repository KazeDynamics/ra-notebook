import { r as redirect, e as error } from "../../../chunks/index.js";
import { s as serializeNonPOJOs } from "../../../chunks/utils2.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
  const getItems = async () => {
    try {
      const items = serializeNonPOJOs(await locals.pb.collection("items").getFullList(void 0));
      return items;
    } catch (err) {
      console.log("Error:", err);
      throw error(err.status, err.message);
    }
  };
  return {
    items: getItems()
  };
};
export {
  load
};
