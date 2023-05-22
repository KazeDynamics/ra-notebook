import * as server from '../entries/pages/my/settings/profile/_page.server.js';

export const index = 20;
export const component = async () => (await import('../entries/pages/my/settings/profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/my/settings/profile/+page.server.js";
export const imports = ["_app/immutable/nodes/20.98798883.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/forms.f29cd588.js","_app/immutable/chunks/parse.492575b6.js","_app/immutable/chunks/singletons.252098fa.js","_app/immutable/chunks/index.efeb27de.js","_app/immutable/chunks/paths.dc5961b8.js","_app/immutable/chunks/Input.159a4e01.js","_app/immutable/chunks/toast.28380f4f.js","_app/immutable/chunks/functions.93e96281.js","_app/immutable/chunks/utils.9d64f4e6.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = [];
export const fonts = [];
