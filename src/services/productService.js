import axios from "./axiosClient";
const createProduct = (data) => {
  return axios.post("/createproduct", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const getProduct = (page) => {
  return axios.get(`/getproduct?page=${page}`);
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
export {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductByID,
};
