
class AuthorEntity {
  constructor(name = "", lastname = "") {
    this.name = name;
    this.lastname = lastname;
  }
}

class CategoryEntity {
  constructor(url = "") {
    this.url = url;
  }
}

class PriceEntity {
  constructor(currency = "", amount = 0, decimals = 0) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }
}

class ItemEntity {
  constructor(
    id = "",
    title = "",
    price = {},
    picture = "",
    condition = "",
    free_shipping = null,
    address = "") {
    this.id = id;
    this.title = title;
    this.price = new PriceEntity(price.currency, price.amount, price.decimals);
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.address = address;
  }
}

class ListItemsEntity {
  constructor(author = {}, categories = [], items = []) {
    this.author = new AuthorEntity(author.name, author.lastname);
    this.categories = categories.map(category => new CategoryEntity(category));
    this.items = items.map(item => new ItemEntity(
      item?.id,
      item?.title,
      item?.price,
      item?.picture,
      item?.condition,
      item?.free_shipping,
      item?.address))
  }
}

export default ListItemsEntity;
