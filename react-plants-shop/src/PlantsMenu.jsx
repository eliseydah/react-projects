import PlantCard from "./PlantCard";
import "./PlantsMenu.css";
import { plants } from "./plants";
import { useSearchParams } from "react-router";
function PlantsMenu() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const filteredPlants = filter
    ? plants.filter(
        (plant) =>
          plant.difficulty === filter ||
          plant.light === filter ||
          plant.type === filter ||
          plant.watering === filter ||
          plant.bonus === filter ||
          plant.size === filter
      )
    : plants;
  const plantsTitle = filter ? `${filter} plants` : "Plants catalogue";

  return (
    <div>
      <h2>{plantsTitle}</h2>
      <div className="plants-menu">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            link={`/catalogue/${plant.id}`}
            name={plant.name}
            id={plant.id}
            price={plant.price}
            image={plant.image}
            rating={plant.rating}
            toBuy={plant.toBuy}
            toWishlist={plant.toWishlist}
          />
        ))}
      </div>
    </div>
  );
}
export default PlantsMenu;
