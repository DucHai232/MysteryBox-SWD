export const isDark = () => async (dispatch) => {
  dispatch({ type: "THEME_DARK" });
};

export const isLight = () => async (dispatch) => {
  dispatch({ type: "THEME_LIGHT" });
};
