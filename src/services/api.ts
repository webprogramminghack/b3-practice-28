import axios from "axios";
import { APIConfig } from "../config/apiConfig";

export const api = axios.create({
  baseURL: APIConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
