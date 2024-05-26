import * as PackageApi from "../../apis/package.request";

export const getDataPackage = () => async (dispatch) => {
  dispatch({ type: "PACKAGE_START" });
  try {
    const response = await PackageApi.getPackage();
    dispatch({ type: "PACKAGE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "PACKAGE_FAIL", payload: error.response.data.message });
  }
};
