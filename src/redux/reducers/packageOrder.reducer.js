const packageOrderReducer = (
  state = { packageOrders: [], order: null, loading: false, error: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "PACKAGE_ORDER_START":
      return { ...state, loading: true };
    case "PACKAGE_ORDER_SUCCESS":
      const newPackageOrders = [...state.packageOrders, payload];
      return {
        ...state,
        packageOrders: newPackageOrders,
        order: payload,
        loading: false,
        error: "",
      };

    case "GET_PACKAGE_ORDER_SUCCESS":
      return {
        ...state,
        packageOrders: payload,
        loading: false,
      };
    case "PACKAGE_ORDER_FAIL":
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};

export default packageOrderReducer;
