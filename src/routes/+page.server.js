import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
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
