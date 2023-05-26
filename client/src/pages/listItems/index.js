import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchItemList } from "./adapters/itemAdapter";
import { CardItemList } from "./components";
import { ContainerResults } from "components";
// import {ContainerResults} from './style'
// import {
//   LoadingMeli,
//   BreadCrumbsMeli,
// } from "../../components";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ResultsSearchContainer = () => {
  const [items, setItems] = useState([]);
  // const [breadCrumbs, setBreadCrumbs] = useState([]);
  // const [loading, setLoading] = useState(false);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery().get("search");

  const fetchItems = async (queryValue) => {
    const itemListData = await fetchItemList(queryValue);
    console.log(itemListData, "esta es la lista")
    setItems(itemListData?.items || []);
  };
  useEffect(() => {
    fetchItems(query)
  }, [query])

  // useEffect(() => {
  //   setLoading(true);
  //   fetchItemList.itemSearch(query).then((res) => {
  //     setLoading(false);
  //     if (res.status === 200) {
  //       if (!res.data.error) {
  //         setItems(res?.data?.response?.items);
  //         setBreadCrumbs(res?.data?.response?.breadCrumbs);
  //       }
  //     }
  //   });
  // }, [query]);

  const listItems = (list) => {
    return list?.map((item) => <CardItemList key={item?.id} item={item} />);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercado Libre: Encuentre lo que desea - {query}</title>
        <meta
          name="description"
          content="Mercado Libre, el sitio dónde encuentras todo lo que necesitas - Paga en cuotas - Envíos a todo el país."
        />
      </Helmet>
      {/* {loading ? (
        <LoadingMeli />
      ) : items?.length > 0 ? (
        <ContainerResults>
          <BreadCrumbsMeli categories={breadCrumbs.slice(0, 4)} />
          <ContainerBigCard>{listItems(items)}</ContainerBigCard>
        </ContainerResults>
      ) : (
        <h6>Nunca pare de buscar</h6>
      )} */}
      <ContainerResults>
        {listItems(items)}
      </ContainerResults>
    </HelmetProvider>
  );
};

export default ResultsSearchContainer;