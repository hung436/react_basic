import axios from "axios";

// eslint-disable-next-line no-unused-vars
import _ from "lodash";
// import config from "./config";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  // withCredentials: true
  // headers: { "Content-Type": "multipart/form-data" },
});

instance.interceptors.response.use((response) => {
  // eslint-disable-next-line no-unused-vars
  const { data } = response;
  return response.data;
});

export default instance;
