import axios from "./axiosClient";
let getCategory = () => {
  return axios.get("/getcategory");
};
export { getCategory };
