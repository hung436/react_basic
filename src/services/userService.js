import axios from "./axiosClient";
const loginuser = (data) => {
  return axios.post("/loginuser", {
    username: data.username,
    password: data.password,
  });
};
const registeruser = () => {};
const getIsFavoriteProduct = (id) => {};
const addFavorites = () => {};
const deteleFavoriteProduct = () => {};
const changeAddress = (data) => {};
const getAddress = () => {
  return axios.get("/getaddress");
};
const order = (data) => {
  return axios.post("/order", data);
};
export {
  loginuser,
  registeruser,
  getIsFavoriteProduct,
  addFavorites,
  deteleFavoriteProduct,
  changeAddress,
  getAddress,
  order,
};
