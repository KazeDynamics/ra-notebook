import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.ac626efc.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/utils.9d64f4e6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/toast.28380f4f.js","_app/immutable/chunks/index.efeb27de.js","_app/immutable/chunks/Icon.af87bf02.js","_app/immutable/chunks/functions.93e96281.js"];
export const stylesheets = ["_app/immutable/assets/0.a8e52c10.css"];
export const fonts = [];
