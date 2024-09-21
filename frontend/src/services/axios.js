import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://88.222.245.236:5000/api",
});

export default axiosInstance;
