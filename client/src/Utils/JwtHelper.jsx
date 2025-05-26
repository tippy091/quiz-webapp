import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
  const token = localStorage.getItem("authToken");

  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds

    // Check if the Token is expired

    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Token decoding failed:", error);
    return false;
  }
};

export const saveToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const logOut = () => {
  localStorage.clear();
};

export const getToken = () => {
  return localStorage.getItem("authToken");
};
