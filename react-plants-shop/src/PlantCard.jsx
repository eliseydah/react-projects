import "./PlantCard.css";
import { useState, useContext } from "react";
import { BasketContext } from "./contexts";
function PlantCard(props) {
  const [basket, setBasket] = useContext(BasketContext); // basketHook = [basket, setBasket]
  const [wishlist, setWishlist] = useState(() => {
    // Проверяем, есть ли элемент в localStorage при загрузке
    return localStorage.getItem(props.name) !== null;
  });
  function removeFromBasket() {
    setBasket(basket.filter((item) => item.name !== props.name));
    console.log(basket);
  }
  function addToBasket() {
    console.log(props.plant);
    setBasket([
      ...basket,
      {
        name: props.name,
        price: props.price,
        image: props.image,
        rating: props.rating,
      },
    ]);
    console.log(basket);
  }
  const checkboxClass = wishlist ? "checkbox" : "checkbox";

  function toWishlist() {
    if (wishlist) {
      setWishlist(false);
      window.localStorage.removeItem(`${props.name}`);
    } else {
      setWishlist(true);
      window.localStorage.setItem(`${props.name}`, `${props.id}`);
    }
    console.log(`Wishlist state: ${wishlist}`);
  }
  return (
    <div>
      <div className="plant-card">
        <img src={props.image} alt={props.name} width="250px" height="250px" />
        {props.isBasket ? (
          <span></span>
        ) : (
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={wishlist}
              className={checkboxClass}
              onChange={toWishlist}
            />
            <span className="checkbox-icon"></span>
          </label>
        )}
        <h3>{props.name}</h3>
        <div className="price-and-description">
          <div>Price: {props.price}$</div>
          {props.isBasket ? (
            <div>
              <button onClick={removeFromBasket} className="remove-from-basket">
                <img
                  className="cross"
                  src="../images/cross.svg"
                  width="30px"
                  height="30px"
                />
              </button>
            </div>
          ) : null}
        </div>

        {props.isBasket ? null : (
          <div>
            <div className="icons">
              <div className="rating">
                <img
                  src="../images/star.svg"
                  alt="logo"
                  height="30px"
                  width="30px"
                  className="star-svg"
                />
                <span> {props.rating} </span>
              </div>
              <a href={`/catalogue/${props.id}`}>
                <button className="to-plant-info">Read More</button>
              </a>
              <button onClick={addToBasket}>
                <img
                  src="../images/newBasket.svg"
                  alt="logo"
                  height="30px"
                  width="30px"
                  className="basket-svg"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default PlantCard;
