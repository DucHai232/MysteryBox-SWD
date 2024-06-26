import { Api } from "../utils/api.util";
import { getToken } from "../utils/token";
const API = Api();

export const getKidProfile = () => {
  const token = getToken();
  return API.get("/get-profiles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createInfoProfileKid = (data) => {
  const token = getToken();
  return API.post("/create-profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const banProfileKid = (id, status) => {
  const token = getToken();
  return API.patch(
    `/ban-profile/${id}`,
    {
      status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
