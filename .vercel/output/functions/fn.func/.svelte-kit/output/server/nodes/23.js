import * as server from '../entries/pages/reset-password/_page.server.js';

export const index = 23;
export const component = async () => (await import('../entries/pages/reset-password/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/reset-password/+page.server.js";
export const imports = ["_app/immutable/nodes/23.be607a39.js","_app/immutable/chunks/index.12c65bb6.js"];
export const stylesheets = [];
export const fonts = [];
