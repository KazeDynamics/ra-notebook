export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj); //deep clone of an object that does a JSONparse and JSONstringify
};
