import { error, invalid, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs, validateData } from '$lib/utils';
import { updateItemSchema } from '$lib/schemas';
import { serialize } from 'object-to-formdata';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		const item = serializeNonPOJOs(await locals.pb.collection('items').getOne(params.itemId));

		if (locals.user.id === project.user) {
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
		const { ...rest } = formData;

		if (errors) {
			return invalid(400, {
				data: rest,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('items').update(params.itemId, serialize(formData));
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/`);
	}
};
