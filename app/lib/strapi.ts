import axios from "axios";

const strapiApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337",
  headers: {
    "Content-Type": "application/json",
  },
});

strapiApi.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default strapiApi;
