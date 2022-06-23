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
export { getCategory, addCategory, editCategory };
