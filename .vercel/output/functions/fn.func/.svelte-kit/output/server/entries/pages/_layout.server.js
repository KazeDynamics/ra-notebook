const load = ({ locals }) => {
  if (locals.user) {
    return {
      user: locals.user
    };
  }
  return {
    user: void 0
  };
};
export {
  load
};
