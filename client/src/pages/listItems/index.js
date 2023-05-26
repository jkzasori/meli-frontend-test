import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchItemList } from "./adapters/itemAdapter";
import { CardItemList } from "./components";
import { ContainerResults, BreadCrumbsMeli, LoadingMeli } from "components";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ResultsSearchContainer = () => {
  const [items, setItems] = useState([]);
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery().get("search");

  const fetchItems = useCallback(async () => {
    const itemListData = await fetchItemList(query);
    setItems(itemListData?.items || []);
    setBreadCrumbs(itemListData?.categories);
  }, [query])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const listItems = (list) => {
    return list?.map((item) => <CardItemList key={item?.id} item={item} />);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{query? `${query} | MercadoLibre.com.co` : "Mercado Libre: Encuentre lo que desea"}</title>
        <meta
          name="description"
          content="Mercado Libre, el sitio dónde encuentras todo lo que necesitas - Paga en cuotas - Envíos a todo el país."
        />
        <meta property="og:title" content={query? `${query} | MercadoLibre.com.co` : "Mercado Libre: Encuentre lo que desea"} />
        <meta property="og:description" content="Compra en Mercado Libre - Pagá en cuotas - Envíos a todo el país." />
        
        {breadCrumbs.length ? <meta name="keywords" content={breadCrumbs?.map(keyword => keyword.trim()).join(', ')} /> : ""}
      </Helmet>
      {items?.length ? <>
        {breadCrumbs?.length ? <BreadCrumbsMeli categories={breadCrumbs} /> : ""}
        <ContainerResults breadcrumbsData={breadCrumbs}>
          {listItems(items)}
        </ContainerResults>
      </> : <LoadingMeli/>
      }

    </HelmetProvider>
  );
};

export default ResultsSearchContainer;