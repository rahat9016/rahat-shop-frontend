import axios from "axios";
import { api } from "../urlConfig";

const axiosInstance = axios.create({
  baseURL: api,
  headers: {},
});

axiosInstance.interceptors.request.use((req) => {
  return req;
});
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
