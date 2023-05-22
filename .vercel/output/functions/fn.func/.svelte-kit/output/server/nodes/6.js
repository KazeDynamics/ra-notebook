import * as server from '../entries/pages/items/_itemsId_/_page.server.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/items/_itemsId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/items/[itemsId]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.6fe961a9.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/Icon.af87bf02.js","_app/immutable/chunks/functions.93e96281.js"];
export const stylesheets = [];
export const fonts = [];
