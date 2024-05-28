import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();

export const getBox = () => {
  const token = getToken();
  return API.get("/get-mysterybox");
};
