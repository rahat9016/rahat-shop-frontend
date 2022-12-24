import axios from "axios";
const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: `https://rahat-shop-backend-v5fm0v5op-rahat9016.vercel.app/api`,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
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
