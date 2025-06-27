import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const tokenString = localStorage.getItem("accessToken");
    const token = tokenString || null;
    if (token && token !== "undefined" && token !== "null") {
      newConfig.headers.authorization = token;
    }
    return newConfig;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data && response.data.data && response.data.data.rows) {
      return response.data.data.rows;
    }
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (errors) => {
    if (errors.response?.status === 401) {
      localStorage.clear();
      const currentUrl = window.location.pathname;
      if (currentUrl !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(errors);
  },
);
export default axiosClient;
