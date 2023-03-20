import { error, fail, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs, validateData } from '$lib/utils';
import { updateItemSchema } from '$lib/schemas';
import { serialize } from 'object-to-formdata';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		const item = serializeNonPOJOs(await locals.pb.collection('items').getOne(params.itemsId));

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
		const body = await request.formData();

		const { formData, errors } = await validateData(body, updateItemSchema);

		if (errors) {
			return fail(400, {
				data: rest,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('items').update(params.itemsId, serialize(formData));
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/`);
	}
};
