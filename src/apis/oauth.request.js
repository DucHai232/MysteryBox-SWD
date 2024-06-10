import axios from "axios";

export const loginOAuthGoogle = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        "http://localhost:8080/api/auth/login-oauth-success",
        { id }
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
