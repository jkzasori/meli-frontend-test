const extCurrencyServices = require("../externalAPI/meli/meliCurrency");

const formatItemsSearch = async function (data) {
  try {
    const [categories, author] = await Promise.all([
      getCategories(data.filters),
      getAuthor()
    ]);

    const items = await Promise.all(
      data.results.slice(0, 4).map(item => getItem(item))
    );

    return {
      author,
      categories,
      items
    };
  } catch (error) {
    throw error;
  }
};


const getCategories = async function (filters) {
  try {
    const categoryFilter = filters.find(filter => filter.id === "category");

    if (categoryFilter && categoryFilter.values.length > 0) {
      const categories = categoryFilter.values[0].path_from_root.map(value => value.name);
      return categories;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

const getAuthor = () => ({
  name: "José",
  lastname: "Támara"
});

const getItem = async (data, detail = false) => {
  const result = {
    id: data.id,
    title: data.title,
    price: {
      currency: "$",
      amount: data.price,
      decimals: "2"
    },
    picture: "",
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
  };

  if (data.currency_id) {
    const currencyData = await extCurrencyServices.getCurrency(data.currency_id);
    result.price.currency = currencyData.symbol;
    result.price.decimals = currencyData.decimals;
  }

  if (detail) {
    result.picture = data.pictures?.[0]?.url || "";
    result.sold_quantity = data.sold_quantity
  } else {
    result.picture = data.thumbnail || "";
    result.address = data.address?.state_name || "";
  }

  return result;
};

const formatItemDetail = async (data, itemDescription, itemCategories) => {
  try {
    const [item, author] = await Promise.all([
      getItem(data, true), getAuthor()
    ]);
    
    item.description = itemDescription || ""
    item.categories = itemCategories || []

    return {
      author,
      item
    };
  } catch (error) {
    throw error;
  }
};


const formatData = {
  formatItemsSearch,
  formatItemDetail
}

module.exports = formatData
