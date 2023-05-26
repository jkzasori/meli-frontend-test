import { useState, useEffect } from "react";
import { fetchItemDetail } from "./adapter/detailItemAdapter";
import { ProductDetail } from "./components";
import { ContainerResults } from "components";
// import {
//   ContainerBigCard,
//   LoadingMeli,
//   ,
//   BreadCrumbsMeli,
// } from "../../components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';

const DetailContainer = (props) => {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState({});

  const fetchDetail = async (queryValue) => {
    const detailItemData = await fetchItemDetail(queryValue);
    console.log(detailItemData, "esta es la lista")
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
        <title>Mercado Libre: Encuentre lo que desea</title>
        <meta
          name="description"
          content="Compra en Mercado Libre - Pagá en cuotas - Envíos a todo el país."
        />
      </Helmet>
      {/* {Object.keys(detailItem).length > 0 ? (
        <>
          <Helmet>
            <title>Mercado Libre: </title>
          </Helmet>
          <BreadCrumbsMeli categories={detailItem?.categories} />
          <ContainerBigCard>
            <ProductDetail detailItem={detailItem} />
          </ContainerBigCard>
        </>
      ) : (
        <LoadingMeli />
      )} */}

      <ContainerResults>
        <ProductDetail detailItem={detailItem} />
      </ContainerResults>
    </HelmetProvider>
  );
};

export default DetailContainer;