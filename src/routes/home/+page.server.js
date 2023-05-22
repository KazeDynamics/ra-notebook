import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getItems = async () => {
		try {
			const items = serializeNonPOJOs(await locals.pb.collection('items').getFullList(undefined));
			return items;
		} catch (err) {
			console.log('Error:', err);
			throw error(err.status, err.message);
		}
	};

	return {
		items: getItems()
	};
};
