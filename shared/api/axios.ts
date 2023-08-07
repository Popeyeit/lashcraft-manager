import axios from "axios";

export const api = axios.create({
  baseURL: "https://lashcrafthouse-manager.vercel.app/api",
  timeout: 3000,
  withCredentials: true,
});
