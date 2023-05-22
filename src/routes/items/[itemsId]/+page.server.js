import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	const getItem = async (itemsId) => {
		try {
			const item = serializeNonPOJOs(await locals.pb.collection('items').getOne(itemsId));
			return item;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		item: getItem(params.itemsId)
	};
};
