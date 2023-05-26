/**
 * Aquí se manejarán las peticiones externas 
 * que provienen de la API de Mercado Libre
 */
const axios = require("axios");
const formatData = require("../../utils/formatDataMeli")
const base_url = "https://api.mercadolibre.com"
const itemSearch = async (query) => {
  try {
    const response = await axios.get(`${base_url}/sites/MLA/search?q=${query}`);
    return formatData.formatItemsSearch(response.data);
  } catch (error) {
    throw error;
  }
};

const itemDetail = async (id) => {
  try {
    const itemDescriptionResponse = await axios.get(`${base_url}/items/${id}/description`);    
    const itemResponse = await axios.get(`${base_url}/items/${id}`);
    const itemCategoriesResponse = await axios.get(`${base_url}/categories/${itemResponse?.data?.category_id}`);
    const itemDescription = itemDescriptionResponse?.data?.plain_text || "";
    const itemCategories = itemCategoriesResponse?.data?.path_from_root?.map(category=> category?.name)
    const item = itemResponse.data;
    
    return formatData.formatItemDetail(item, itemDescription, itemCategories);
  } catch (error) {
    throw error;
  }
};


const services = {
  itemSearch,
  itemDetail
};

module.exports = services;
