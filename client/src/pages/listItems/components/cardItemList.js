import imgShipping from "assets/img/ic_shipping.png";
import { useNavigate } from "react-router-dom";
import "./styles/cardItemList.scss";

export const CardItemList = (props) => {
  const navigate = useNavigate();
  const { item } = props;

  const locationDetail = () => {
    navigate(`/items/${item?.id}`);
  };

  return (
    <>
      < div className="cardItemContainer" onClick={() => locationDetail()}>
        <div className="groupBasicData">
          <img className="imgItem" src={item?.picture} alt={item.title} />
          <div className="containerGroupText">
            <h2>
              <span> {item.price.currency}{Math.round(item.price.amount)}</span>
              {item?.free_shipping ? (
                <img src={imgShipping} alt="free shipping" />
              ) : (
                ""
              )}
            </h2>
            <h4>{item?.title}</h4>
          </div>
        </div>

        <div className="condition">{item?.address}</div>
      </div >
      <hr className="HR" />
    </>
  );
};
