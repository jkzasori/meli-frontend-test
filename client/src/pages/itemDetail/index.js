import { useState, useEffect } from "react";
import { fetchItemDetail } from "./adapter/detailItemAdapter";
import { ProductDetail } from "./components";
import { ContainerResults, BreadCrumbsMeli, LoadingMeli } from "components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';

const DetailContainer = (props) => {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState({});

  const fetchDetail = async (queryValue) => {
    const detailItemData = await fetchItemDetail(queryValue);
    setDetailItem(detailItemData?.items || []);
  };

  useEffect(() => {
    if (id) {
      fetchDetail(id)
    }
  }, [id]);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{detailItem?.title ? `${detailItem?.title} | Mercado libre` : "Mercado Libre: Encuentre lo que desea"}</title>
        <meta
          name="description"
          content={detailItem?.description || "Compra en Mercado Libre - Pagá en cuotas - Envíos a todo el país."}
        />
        <meta property="og:title" content={detailItem?.title? `${detailItem?.title} | Mercado libre` : "Mercado Libre: Encuentre lo que desea"} />
        <meta property="og:description" content={detailItem?.description || "Compra en Mercado Libre - Pagá en cuotas - Envíos a todo el país."} />
        {detailItem?.categories?.length ? <meta name="keywords" content={detailItem?.categories?.map(keyword => keyword.trim()).join(', ')} /> : ""}
      </Helmet>
      {Object.keys(detailItem).length ?
        <>
          {detailItem?.categories?.length ? <BreadCrumbsMeli categories={detailItem?.categories} /> : ""}
          <ContainerResults>
            <ProductDetail detailItem={detailItem} />
          </ContainerResults>
        </> : <LoadingMeli />}
    </HelmetProvider>
  );
};

export default DetailContainer;