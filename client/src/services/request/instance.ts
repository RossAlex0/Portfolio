import axios from "axios";

export const myPath = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
