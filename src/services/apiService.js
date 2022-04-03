import axios from "./axiosClient";
const getAllUsers = () => {
  return axios.get("/getuser");
};
const loginadmin = (username, password) => {
  return axios.post("/loginadmin", { username: username, password: password });
};
export { getAllUsers, loginadmin };
