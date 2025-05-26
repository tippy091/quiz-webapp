import axios from "axios";

import { API_BASE_URL } from "./Constant";

export const registerAPI = async (body) => {
  const url = API_BASE_URL + "/auth/register";

  try {
    const response = await axios(url, {
      method: "POST",
      data: body,
    });
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const loginAPI = async (body) => {
  const url = API_BASE_URL + "/auth/login";

  try {
    const response = await axios.post(url, body, {
      validateStatus: () => true,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const verifyAPI = async (body) => {
  const url = API_BASE_URL + "/auth/verify";

  try {
    const response = await axios(url, {
      method: "POST",
      data: body,
    });
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};
