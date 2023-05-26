import axios from "axios";

const base = process.env.REACT_APP_API_ENDPOINT_URL || "http://localhost:3050/";

export const meliHTTP = axios.create({
  baseURL: base,
});