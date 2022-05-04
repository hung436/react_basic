import axios from "./axiosClient";
const loginuser = (data) => {
  return axios.post("/loginuser", {
    username: data.username,
    password: data.password,
  });
};
const getOrders = (page) => {
  return axios.get(`/getorder`, { params: { page: page } });
};
const getOrderDetail = (id) => {
  return axios.get("/getorderdetail", { params: { id: id } });
};
const registeruser = () => {};
const getIsFavoriteProduct = (id) => {
  return axios.get("/getfavoriteproduct", { params: { id: id } });
};
const addFavorites = (id) => {
  return axios.post("/addfavorite", id);
};
const deteleFavoriteProduct = (id) => {
  return axios.delete("/detelefavoriteproduct", { data: { id: id } });
};
const changeAddress = (data) => {
  return axios.put("/changeaddress", { data });
};
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
  getOrders,
  getOrderDetail,
};
