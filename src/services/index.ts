import axios from "axios";

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    _limit: 10,
  },
});

api.interceptors.response.use(
  ({ data }) => data,
  (error) => error
);
