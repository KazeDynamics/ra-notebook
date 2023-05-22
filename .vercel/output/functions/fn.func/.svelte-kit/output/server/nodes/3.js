import * as server from '../entries/pages/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.27ef12dd.js","_app/immutable/chunks/index.12c65bb6.js"];
export const stylesheets = ["_app/immutable/assets/3.ea7590c8.css"];
export const fonts = [];
