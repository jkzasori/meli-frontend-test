import { getDetailItem } from "../services/detailService";
import DetailItemEntity from "../domain/detailItemEntity";

async function fetchItemDetail(query) {
  const itemListData = await getDetailItem(query);
  return new DetailItemEntity(
    itemListData.author,
    itemListData.item,
  );
}

export { fetchItemDetail };