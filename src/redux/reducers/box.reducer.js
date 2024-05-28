const boxReducer = (
  state = { boxs: [], loading: false, error: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "BOX_START":
      return { ...state, loading: true };
    case "GET_BOX_SUCCESS":
      return { ...state, boxs: payload, loading: false, error: "" };
    case "BOX_FAIL":
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};

export default boxReducer;
