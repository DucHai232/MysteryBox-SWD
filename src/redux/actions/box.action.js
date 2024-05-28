import * as BoxApi from "../../apis/box.request";

export const getBox = () => async (dispatch) => {
  dispatch({ type: "BOX_START" });
  try {
    const response = await BoxApi.getBox();
    dispatch({ type: "GET_BOX_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "BOX_FAIL", payload: error.response.data.message });
  }
};
