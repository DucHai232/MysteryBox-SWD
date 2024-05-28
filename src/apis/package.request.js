import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();
export const getPackage = () => {
  const token = getToken();
  return API.get("/get-package");
};
