// import { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import PlantsBasket from "./PlantsBasket";
import { BasketContext } from "./contexts";
import PlantsMenu from "./PlantsMenu";
import PlantsWishlist from "./PlantsWishlist";
import PlantView from "./PlantView";

function App() {
  const basketHook = useState([]); // basketHook = [basket, setBasket]
  return (
    <BasketContext.Provider value={basketHook}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<PlantsMenu />} />
          <Route path="/basket" element={<PlantsBasket />} />
          <Route path="/wishlist" element={<PlantsWishlist />} />
          <Route path="/catalogue/:id" element={<PlantView />} />
        </Routes>
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;
