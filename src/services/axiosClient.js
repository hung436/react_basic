import axios from "axios";
import { StorageKeys } from "../constant/storage-key";
import { refreshToken } from "../views/Auth/userSlice";
import { logoutCart } from "../views/Cart/cartSlice";
import { toast } from "react-toastify";

// eslint-disable-next-line no-unused-vars
// import _ from "lodash";
// import config from "./config";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  // withCredentials: true
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const URLS = ["/getaddress", "/order", "/getorder", "/getorderdetail"];

    const dynamicURL = ["/user/favorites/"];
    const dynamicURLNeedToken = dynamicURL.some((item) => {
      return config.url.includes(item);
    });

    if (URLS.includes(config.url) || dynamicURLNeedToken) {
      const token = localStorage.getItem(StorageKeys.TOKEN);
      config.headers.authorization = token ? `Bearer ${token}` : "";
    }

    // const URLSADMIN = [
    //   "admin/product-list",
    //   "/admin/products",
    //   "/admin/orders",
    //   "/admin/user",
    //   "/admin/users",
    // ];
    // const dynamicURLAdminNeedToken = URLSADMIN.some((item) => {
    //   return config.url.includes(item);
    // });

    // if (dynamicURLAdminNeedToken) {
    //   const admin = JSON.parse(localStorage.getItem(StorageKeys.ADMIN));
    //   const token = admin.access_token;
    //   config.headers.Authorization = token ? `Bearer ${token}` : "";
    // }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { data } = response;
    return response.data;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { config, status } = error.response;

    if (status === 401 && !config._retry) {
      config._retry = true;
      try {
        const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
        const refresh = user.refreshToken;

        const res = await axios.post("http://localhost:8080/api/refresh", {
          refreshToken: refresh,
        });

        localStorage.setItem(StorageKeys.TOKEN, res.data);

        return axiosClient(config);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
