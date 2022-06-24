import axios from './axiosClient';
const getAllUsers = (id) => {
  return axios.get(`/getuser?id=${id}`);
};
const loginadmin = (username, password) => {
  return axios.post('/loginadmin', { username: username, password: password });
};
const createNewUser = (data) => {
  return axios.post('/createuser', data);
};
const updateUser = (data) => {
  return axios.put('/updateuser', data);
};
const deleteUser = (id) => {
  return axios.delete('/deleteuser', { data: { id: id } });
};
export { getAllUsers, loginadmin, createNewUser, deleteUser, updateUser };
