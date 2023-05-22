import * as server from '../entries/pages/my/settings/account/_page.server.js';

export const index = 19;
export const component = async () => (await import('../entries/pages/my/settings/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/my/settings/account/+page.server.js";
export const imports = ["_app/immutable/nodes/19.c71f4cb2.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/forms.f29cd588.js","_app/immutable/chunks/parse.492575b6.js","_app/immutable/chunks/singletons.252098fa.js","_app/immutable/chunks/index.efeb27de.js","_app/immutable/chunks/paths.dc5961b8.js","_app/immutable/chunks/Input.159a4e01.js","_app/immutable/chunks/Modal.6ff41404.js","_app/immutable/chunks/toast.28380f4f.js","_app/immutable/chunks/functions.93e96281.js"];
export const stylesheets = [];
export const fonts = [];
