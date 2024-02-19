import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return axiosIntance.get(endpoint);
  },

  post(endpoint, body) {
    return axiosIntance.post(endpoint, body);
  },

  put(endpoint, body) {
    return axiosIntance.put(endpoint, body);
  },

  delete(endpoint) {
    return axiosIntance.delete(endpoint);
  },
};
