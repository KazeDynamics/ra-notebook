import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';

// export const selectTheme = async ({ event, resolve }) => {
// 	let theme;
// 	const newTheme = event.url.searchParams.get('theme');
// 	const cookieTheme = event.cookies.get('colortheme');
// 	if (newTheme) {
// 		theme = newTheme;
// 	} else if (cookieTheme) {
// 		theme = cookieTheme;
// 	}

// 	if (theme) {
// 		return await resolve(event, {
// 			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
// 		});
// 	}
// };

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('https://kazedynamics.app:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		}
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }));

	return response;
};
