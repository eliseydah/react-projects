import "./index.css";
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { BasketContext } from "./contexts.jsx";
import App from "./App.jsx";

const root = document.getElementById("root");
// const [basket, setBasket] = useState([]);

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
    {/* <BasketContext.Provider value={{ basket, setBasket }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<PlantsMenu />} />
          <Route path="/basket" element={<PlantsBasket />} />
        </Routes>
      </BrowserRouter>
    </BasketContext.Provider> */}
  </StrictMode>
);
