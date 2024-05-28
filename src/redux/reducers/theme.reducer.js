const themeReducer = (
  state = { themes: [], loading: false, error: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "THEME_START":
      return { ...state, loading: true };
    case "THEME_SUCCESS":
      return { ...state, themes: payload, loading: false, error: "" };
    case "THEME_FAIL":
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};

export default themeReducer;
