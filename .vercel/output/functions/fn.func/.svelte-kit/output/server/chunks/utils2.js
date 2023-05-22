const { randomBytes } = await import("node:crypto");
const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};
const generateUsername = (name) => {
  const id = randomBytes(2).toString("hex");
  return `${name.slice(0, 5)}${id}`;
};
const getImageURL = (collectionId, recordId, fileName, size = "0x0") => {
  return `http://198.74.53.179:80/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
const validateData = async (formData, schema) => {
  const body = Object.fromEntries(formData);
  try {
    const data = schema.parse(body);
    return {
      formData: data,
      errors: null
    };
  } catch (err) {
    console.log("Error: ", err);
    const errors = err.flatten();
    return {
      formData: body,
      errors
    };
  }
};
export {
  generateUsername as a,
  getImageURL as g,
  serializeNonPOJOs as s,
  validateData as v
};
