import { getItemSearch } from "../services/itemService";
import ListItemsEntity from "../domain/ListItemsEntity";

async function fetchItemList(query) {
  const itemListData = await getItemSearch(query);
  return new ListItemsEntity(
    itemListData.author,
    itemListData.categories,
    itemListData.items,
  );
}

export { fetchItemList };