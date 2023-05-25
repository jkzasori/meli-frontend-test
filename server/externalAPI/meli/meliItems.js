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
    const itemDescription = itemDescriptionResponse?.data?.plain_text || "";
    const item = itemResponse.data;
    return formatData.formatItemDetail(item, itemDescription);
  } catch (error) {
    throw error;
  }
};

const services = {
  itemSearch,
  itemDetail
};

module.exports = services;
