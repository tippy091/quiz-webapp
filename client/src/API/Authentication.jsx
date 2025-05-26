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
      validateStatus: () => true, // ✅ Đừng tự throw nếu status !== 2xx
    });
    return response;
  } catch (err) {
    // Nếu là lỗi mạng (timeout, CORS, server chết)
    console.error("Network or unexpected error:", err);
    throw err;
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
