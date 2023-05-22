import { r as redirect } from "../../../../chunks/index.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
};
export {
  load
};
