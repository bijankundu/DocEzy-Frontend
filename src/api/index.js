import axios from "axios";

export const API_URL = "http://localhost:8008/api";

const api = axios.create({
  baseURL: API_URL,
});

export function authHeader() {
  const authToken = localStorage.getItem("token");

  if (authToken) {
    return { headers: { Authorization: `Bearer ` + authToken } };
  } else return {};
}

export default api;
