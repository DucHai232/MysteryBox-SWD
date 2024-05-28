import * as PackageOrderApi from "../../apis/packageOrder.request";

export const orderPackage = (packageId, orderData) => async (dispatch) => {
  dispatch({ type: "PACKAGE_ORDER_START" });
  try {
    const response = await PackageOrderApi.orderPackage(packageId, orderData);
    dispatch({ type: "PACKAGE_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({
      type: "PACKAGE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getPackageOrderByUserId = () => async (dispatch) => {
  dispatch({ type: "PACKAGE_ORDER_START" });
  try {
    const response = await PackageOrderApi.getPackageOrderByUserId();
    dispatch({ type: "GET_PACKAGE_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({
      type: "PACKAGE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};
