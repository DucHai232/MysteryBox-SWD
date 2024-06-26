import * as KidApi from "../../apis/kid.request";

export const getKidProfile = () => async (dispatch) => {
  dispatch({ type: "KID_START" });
  try {
    const response = await KidApi.getKidProfile();
    dispatch({ type: "KID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "KID_FAIL", payload: error.response.data.message });
  }
};

export const createProfileKid = (data) => async (dispatch) => {
  dispatch({ type: "KID_START" });
  try {
    const response = await KidApi.createInfoProfileKid(data);
    dispatch({ type: "KID_CREATE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "KID_FAIL", payload: error.response.data.message });
  }
};

export const banProfileKid = (id, status) => async (dispatch) => {
  dispatch({ type: "KID_START" });
  try {
    const response = await KidApi.banProfileKid(id, status);
    dispatch({ type: "KID_BAN_SUCCESS", payload: { id, status } });
  } catch (error) {
    dispatch({ type: "KID_FAIL", payload: "Error" });
  }
};
