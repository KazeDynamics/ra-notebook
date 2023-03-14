import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		const item = serializeNonPOJOs(await locals.pb.collection('items').getOne(params.itemId));

		if (locals.user.id === item.user) {
			return {
				item
			};
		} else {
			throw error(403, 'Forbidden');
		}
	} catch (err) {
		console.log('Error: ', err);
		throw error(err.status, err.message);
	}
};

export const actions = {
	updateItem: async ({ request, locals, params }) => {
		const formData = await request.formData();
		try {
			await locals.pb.collection('items').update(params.itemId, formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/my/items`);
	}
};
