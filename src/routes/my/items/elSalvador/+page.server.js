import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getItemCountry = async (elSalvador) => {
		try {
			const items = serializeNonPOJOs(
				await locals.pb.collection('items').getFullList(undefined, {
					filter: `country = "${elSalvador}"`
				})
			);
			return items;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		items: getItemCountry(locals.user.id)
	};
};

export const actions = {
	deleteItem: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('items').delete(id);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
