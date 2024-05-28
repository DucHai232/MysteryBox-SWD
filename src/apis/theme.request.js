import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();
export const getThemes = () => {
  return API.get("/get-themes");
};
