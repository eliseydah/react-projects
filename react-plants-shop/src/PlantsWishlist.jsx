import PlantCard from "./PlantCard";
import { plants } from "./plants";
function PlantsWishlist() {
  const wishArray = plants.filter((item) => {
    return item.id.toString() === window.localStorage.getItem(`${item.name}`);
  });
  console.log(wishArray);
  return (
    <div>
      <h2>Wishlist</h2>
      <div className="plants-menu">
        {wishArray.map((plant) => (
          <PlantCard
            key={plant.id}
            link="#"
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
export default PlantsWishlist;
