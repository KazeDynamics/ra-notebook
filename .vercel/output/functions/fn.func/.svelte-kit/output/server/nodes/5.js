import * as server from '../entries/pages/items/new/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/items/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/items/new/+page.server.js";
export const imports = ["_app/immutable/nodes/5.d3347e9c.js","_app/immutable/chunks/index.12c65bb6.js","_app/immutable/chunks/forms.f29cd588.js","_app/immutable/chunks/parse.492575b6.js","_app/immutable/chunks/singletons.252098fa.js","_app/immutable/chunks/index.efeb27de.js","_app/immutable/chunks/paths.dc5961b8.js","_app/immutable/chunks/Input.159a4e01.js","_app/immutable/chunks/functions.93e96281.js","_app/immutable/chunks/DropdownClass.0d944803.js"];
export const stylesheets = [];
export const fonts = [];
