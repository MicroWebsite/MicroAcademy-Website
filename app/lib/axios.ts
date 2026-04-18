import axios from "axios";

const drupalApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DRUPAL_API_URL || "http://127.0.0.1:8888",
  headers: {
    "Content-Type": "application/json",
  },
});

export default drupalApi;
