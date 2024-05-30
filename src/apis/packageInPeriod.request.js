import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();

export const createPackageInPeriod = (data) => {
  const token = getToken();
  return API.post("/create-packageinperiod", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getPackageInPeriodByPackageOrderId = (packageOrderId) => {
  const token = getToken();
  return API.get(`/get-packageinperiod-by-packageOrder/${packageOrderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
