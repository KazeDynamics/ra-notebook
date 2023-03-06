import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (itemId) => {
		try {
			const item = serializeNonPOJOs(await locals.pb.collection('items').getOne(itemId));
			return item;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		item: getItem(params.itemId)
	};
};
