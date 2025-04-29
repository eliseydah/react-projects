import React, { useContext, useState } from "react";
import { BasketContext } from "./contexts";
import PlantCard from "./PlantCard";
import "./PlantsBasket.css";
import ModalComponent from "./ModalComponent";

const PlantsBasket = () => {
  const [basket] = useContext(BasketContext); // basketHook = [basket, setBasket]
  const [modal, setModal] = useState(false);
  const isBasket = true;
  let prices = basket.map((plant) => {
    return plant.price;
  });
  let totalPrice = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(prices);
  function onBuy() {
    setModal(true);
  }
  return (
    <div>
      <h1>My Basket</h1>
      <p>Your basket has {basket.length} items</p>
      <div className="plants-menu">
        {basket.map((plant, index) => (
          <PlantCard
            key={index}
            link="#"
            name={plant.name}
            price={plant.price}
            image={plant.image}
            rating={plant.rating}
            toBuy={plant.toBuy}
            toWishlist={plant.toWishlist}
            isBasket={isBasket}
          />
        ))}
      </div>
      {modal ? (
        <ModalComponent onClose={() => setModal(false)} />
      ) : (
        <span></span>
      )}
      <p className="totalPrice">Subtotal: {totalPrice}$</p>
      <button className="buyButton" onClick={onBuy}>
        Buy Now
      </button>
    </div>
  );
};
export default PlantsBasket;
