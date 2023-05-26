import { meliHTTP } from "services/api";

export const getItemSearch = async (query) => {
  try {
    const response = await meliHTTP.get(`/api/items?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
