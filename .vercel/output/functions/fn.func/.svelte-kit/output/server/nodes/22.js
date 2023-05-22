import * as server from '../entries/pages/register/_page.server.js';

export const index = 22;
export const component = async () => (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/22.d50e9c53.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/Input.159a4e01.js","_app/immutable/chunks/paths.dc5961b8.js","_app/immutable/chunks/functions.93e96281.js"];
export const stylesheets = [];
export const fonts = [];
