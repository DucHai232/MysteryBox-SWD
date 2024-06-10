import { Api } from "../utils/api.util";
const API = Api();

export const openRandomProduct = (bodyOpenProduct) => {
  return API.post("/random-product", bodyOpenProduct);
};
