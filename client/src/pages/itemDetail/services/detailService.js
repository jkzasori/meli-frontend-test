import { meliHTTP } from "services/api";

export const getDetailItem = async (id) => {
  try {
    const response = await meliHTTP.get(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
