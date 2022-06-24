import axios from './axiosClient';
let getCategory = () => {
  return axios.get('/getcategory');
};
let addCategory = (data) => {
  return axios.post('/createcategory', { name: data });
};
let editCategory = (id, name) => {
  return axios.put('/editcategory', { id: id, name: name });
};
let deleteCategory = (id) => {
  return axios.delete('/deletecategory', { data: { id: id } });
};
export { getCategory, addCategory, editCategory, deleteCategory };
