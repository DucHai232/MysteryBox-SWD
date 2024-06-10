import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();
export const orderPackage = (packageId, orderData) => {
  const token = getToken();
  return API.post(`/add-order-package/${packageId}`, orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getPackageOrderByUserId = () => {
  const token = getToken();
  return API.get("/get-packageorderbyuserid", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getPackageOrderByIdPk = (packageOrderId) => {
  const token = getToken();
  return API.get(`/get-packageorderbyidpk/${packageOrderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
