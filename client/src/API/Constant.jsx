import { getToken } from "../Utils/JwtHelper";

// export const API_URLS = {
// }

export const API_BASE_URL = "http://localhost:8080";

export const getHeaders = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
};
