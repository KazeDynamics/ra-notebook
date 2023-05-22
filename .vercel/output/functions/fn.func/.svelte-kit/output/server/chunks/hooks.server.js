import PocketBase from "pocketbase";
import { s as serializeNonPOJOs } from "./utils2.js";
const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase("http://198.74.53.179:80");
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection("users").authRefresh();
      event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
    }
  } catch (_) {
    event.locals.pb.authStore.clear();
    event.locals.user = void 0;
  }
  const response = await resolve(event);
  response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));
  return response;
};
export {
  handle
};
