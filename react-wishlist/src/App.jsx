import { useState, useEffect } from "react";
import { fetchWishes, createWish, deleteWish } from "./api";
import CategoryFilter from "./CategoryFilter";
import ModalButton from "./ModalButton";
import WishItem from "./WishItem";
import { DesignContext } from "./contexts";
import DesignPicker from "./DesignPicker";
import "./App.css";

function App() {
  const [wishes, setWishes] = useState([]);
  const [filteredWishes, setFilteredWishes] = useState([]);
  const [selected, setSelected] = useState("filter");
  const [design, setDesign] = useState("blue");

  async function getWishes() {
    const result = await fetchWishes();
    setWishes(result);
  }
  async function addWish(description, title, link, category) {
    await createWish(description, title, link, category);
    await getWishes();
  }

  async function removeWish(wish) {
    await deleteWish(wish.id);
    await getWishes();
  }
  function selectedChangeValue(value) {
    console.log(value);
    setSelected(value);
  }

  useEffect(() => {
    getWishes();
  }, []);

  useEffect(() => {
    if (selected === "filter") {
      return setFilteredWishes(wishes);
    }
    if (selected === "filter-price-1") {
      return setFilteredWishes(
        wishes.filter((t) => t.category === "category-1")
      );
    }
    if (selected === "filter-price-2") {
      return setFilteredWishes(
        wishes.filter((t) => t.category === "category-2")
      );
    }
    if (selected === "filter-price-3") {
      return setFilteredWishes(
        wishes.filter((t) => t.category === "category-3")
      );
    }
  }, [selected, wishes]);

  return (
    <DesignContext.Provider value={[design, setDesign]}>
      <div className={`root ${design}`}>
        {" "}
        // root
        <header className="top">
          <div className="inscription">&#x270E; MyWishlist</div>
          <div className="theme-choice">
            <div className="color-choice">Design choice</div>
            <DesignPicker />
          </div>
          <CategoryFilter selectedChangeValue={selectedChangeValue} />
          <button
            className="add-wishes btn btn-warning btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            + Add wishes
          </button>
        </header>
        <main>
          <div className="main-content">
            <ModalButton addWish={addWish} />
          </div>
          <div className="container">
            {filteredWishes.map((item) => (
              <WishItem
                wish={item}
                key={item.id}
                removeWish={() => {
                  removeWish(item);
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </DesignContext.Provider>
  );
}

export default App;
