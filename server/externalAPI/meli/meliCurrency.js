/**
 * Aquí se manejarán las peticiones externas 
 * que provienen de la API de Mercado Libre
 */
const axios = require("axios");
const base_url = "https://api.mercadolibre.com"

const getCurrency = async (currencyId) => {
  try {
    const response = await axios.get(`${base_url}/currencies/${currencyId}`);
    const { id, symbol, decimal_places: decimals } = response.data;
    return { id, symbol, decimals };
  } catch (error) {
    throw error;
  }
};
const services = {
  getCurrency
}

module.exports = services
