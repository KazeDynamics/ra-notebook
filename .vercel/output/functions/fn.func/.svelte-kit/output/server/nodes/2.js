import * as server from '../entries/pages/my/settings/_layout.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/my/settings/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/my/settings/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.c7f61c39.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/stores.882b0954.js","_app/immutable/chunks/singletons.252098fa.js","_app/immutable/chunks/index.efeb27de.js","_app/immutable/chunks/paths.dc5961b8.js"];
export const stylesheets = [];
export const fonts = [];
