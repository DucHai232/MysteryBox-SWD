import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();

export const getCurrentPeriod = () => {
  const token = getToken();
  return API.get("/get-current-period");
};
