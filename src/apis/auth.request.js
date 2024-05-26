import { Api } from "../utils/api.util";
const API = Api();
export const login = (data) => {
  return API.post("/login", data);
};
