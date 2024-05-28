import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();

export const createPackageInPeriod = (data) => {
  const token = getToken();
  return API.post("/create-packageinperiod", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
