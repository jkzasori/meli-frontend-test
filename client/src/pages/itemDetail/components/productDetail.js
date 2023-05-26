import "./styles/productDetail.scss";

export const ProductDetail = (props) => {
  const { detailItem } = props;
  return (
    <div className="containerProductDetail">
      <div className="description">
        <div className="imgContainer">
          <img src={detailItem?.picture} alt={detailItem?.item?.title} />
        </div>
        <div className="textDescription">
          <h2>Decipción del producto</h2>
          <p>{detailItem?.description}</p>
        </div>
      </div>
      <div className="paymentZone">
        <h6>
          {detailItem?.condition === "new" ? "Nuevo" : detailItem?.condition} -
          {' '}{detailItem?.sold_quantity
            ? detailItem?.sold_quantity
            : 0} vendidos
        </h6>
        <h4>{detailItem?.item?.title}</h4>
        <h2>
          <span> {detailItem.price.currency}{Math.round(detailItem.price.amount)}</span>
        </h2>
        <button>Comprar</button>
      </div>
    </div>
  );
};