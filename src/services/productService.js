import axios from "./axiosClient";
const createProduct = (data) => {
  return axios.post("/createproduct", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const getProduct = (page) => {
  return axios.get(`/getproduct?page=${page}`);
};
const getProductFill = (id, action) => {
  return axios.get("/getproductfill", { params: { action: action, id: id } });
};
const updateProduct = (data) => {
  return axios.put("/editproduct", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const deleteProduct = (id) => {
  return axios.delete("/deleteproduct", { data: { id: id } });
};
const getProductByID = (id) => {
  return axios.get(`/getproductbyid?id=${id}`);
};
const getAllOrder = (page) => {
  return axios.get("/getallorder", { params: { page: page } });
};
export {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductByID,
  getProductFill,
  getAllOrder,
};
