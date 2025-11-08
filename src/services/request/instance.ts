import axios from "axios";

export const myPath = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_URL_API_KEY,
  },
});
