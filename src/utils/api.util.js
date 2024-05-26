import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: "https://api-mysterybox.onrender.com/api/v1",
  });
};
