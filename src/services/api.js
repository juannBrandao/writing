import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://segware-book-api.segware.io/api"
});

api.interceptors.request.use(async config => {
  console.log(config.baseURL)
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;