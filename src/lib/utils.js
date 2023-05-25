// const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj); //deep clone of an object that does a JSONparse and JSONstringify
};

// export const generateUsername = (name) => {
// 	const id = randomBytes(2).toString('hex');
// 	return `${name.slice(0, 5)}${id}`;
// };

export const generateUsername = (name) => {
	const randomBytes = (length) => {
		const values = new Uint8Array(length);
		window.crypto.getRandomValues(values);
		return Array.from(values);
	};

	const id = randomBytes(2)
		.map((byte) => byte.toString(16))
		.join('');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `https://kazedynamics.app:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};

export function generateUniqueId() {
	return Math.random().toString(36).substr(2, 9);
}
