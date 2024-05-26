import * as AuthApi from "../../apis/auth.request";

export const login = (data) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const response = await AuthApi.login(data);
    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  await dispatch({ type: "AUTH_LOGOUT" });
};
