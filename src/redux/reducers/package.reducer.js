const packageReducer = (
  state = { packages: [], loading: false, error: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "PACKAGE_START":
      return { ...state, loading: true };
    case "PACKAGE_SUCCESS":
      return { ...state, packages: payload, loading: false, error: "" };
    case "PACKAGE_FAIL":
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};

export default packageReducer;
