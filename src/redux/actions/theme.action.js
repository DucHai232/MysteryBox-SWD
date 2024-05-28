import * as ThemeApi from "../../apis/theme.request";

export const getThemes = () => async (dispatch) => {
  dispatch({ type: "THEME_START" });
  try {
    const response = await ThemeApi.getThemes();
    dispatch({ type: "THEME_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({
      type: "THEME_FAIL",
      payload: error.response.data.message,
    });
  }
};
