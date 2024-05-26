import { Api } from "../utils/api.util";
const API = Api();
export const getPackage = () => {
  return API.get("/get-package");
};
