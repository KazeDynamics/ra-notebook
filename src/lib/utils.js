export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj); //deep clone of an object that does a JSONparse and JSONstringify
};

export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
