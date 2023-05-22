import * as server from '../entries/pages/home/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/4.577ab046.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/paths.dc5961b8.js","_app/immutable/chunks/functions.93e96281.js","_app/immutable/chunks/Icon.af87bf02.js"];
export const stylesheets = [];
export const fonts = [];
