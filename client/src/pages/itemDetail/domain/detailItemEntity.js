
class AuthorEntity {
  constructor(name = "", lastname = "") {
    this.name = name;
    this.lastname = lastname;
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
    sold_quantity = 0,
    description = ""
    ) {
    this.id = id;
    this.title = title;
    this.price = new PriceEntity(price.currency, price.amount, price.decimals);
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
  }
}

class DetailItemEntity {
  constructor(author = {}, item = {}) {
    this.author = new AuthorEntity(author.name, author.lastname);
    this.items =  new ItemEntity(
      item?.id,
      item?.title,
      item?.price,
      item?.picture,
      item?.condition,
      item?.free_shipping,
      item.sold_quantity,
      item?.description)
  }
}

export default DetailItemEntity;
