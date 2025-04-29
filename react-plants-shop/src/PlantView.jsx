import React from "react";
import { useParams } from "react-router";
import { DIFFICULTY, LIGHT, plants, WATERING } from "./plants";
import Badge from "./Badge";
import "./PlantView.css";
function PlantView() {
  const { id } = useParams(); // Get plantId from the route
  console.log(plants);
  const plant = plants.find((plant) => plant.id === parseInt(id));

  function getDifficultyColor(difficulty) {
    if (difficulty === DIFFICULTY.EASY) {
      return "green";
    } else if (difficulty === DIFFICULTY.INTERMEDIATE) {
      return "yellow";
    } else {
      return "red";
    }
  }

  function getWateringColor(watering) {
    if (watering === WATERING.REGULAR) {
      return "blue";
    } else if (watering === WATERING.MODERATE) {
      return "green";
    } else {
      return "yellow";
    }
  }
  return (
    <div className="view-container">
      <img
        src={plant.image}
        alt={plant.name}
        className="image-plant-view"
        width="40%"
        height="80%"
      />
      <div className="plant-info">
        <h2 className="plant-name">{[plant.name]}</h2>
        <p className="plant-type">{plant.type}</p>
        <div className="rating">
          <p className="price">{[plant.price]} $</p>
          <img
            src="../images/star.svg"
            alt="logo"
            height="30px"
            width="30px"
            className="star-svg"
          />
          <span> {plant.rating} </span>
        </div>
        <div className="tags">
          <Badge
            color={getDifficultyColor(plant.difficulty)}
            text={plant.difficulty}
            image="../images/plant.svg"
          />
          {plant.light === LIGHT.LOW ? (
            <Badge
              color="blue"
              image="../images/half-sun.svg"
              text="Low-light"
            />
          ) : (
            <Badge
              color="yellow"
              image="../images/full-sun.svg"
              text="Bright light"
            />
          )}
          <Badge
            color={getWateringColor(plant.watering)}
            text={plant.watering}
            image="../images/water.svg"
          />
          {plant.petFriendly ? (
            <Badge
              color="green"
              image="../images/paw.svg"
              text="Pet friendly"
            />
          ) : (
            <Badge
              color="red"
              image="../images/no-dogs.svg"
              text="Pet dangerous"
            />
          )}
        </div>
        <h3 className="plant-type">Overview:</h3>
        <p className="plant-description">{plant.description}</p>
      </div>
    </div>
  );
}

export default PlantView;
