import "./Header.css";
import { BasketContext } from "./contexts";
import { Link } from "react-router";
import { useContext } from "react";
function Header() {
  const [basket] = useContext(BasketContext); // basketHook = [basket, setBasket]

  return (
    <header className="container">
      <div className="logo">
        <img src="../images/plant.svg" alt="logo" height="40px" width="40px" />
        <p className="logo-text"> Plant Shop </p>
      </div>
      <ul className="navigation-bar">
        <li>
          <Link to="/" className="header-link">
            <img
              src="../images/home.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span className="header-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/catalogue">
            <img
              src="../images/menu.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span className="header-text">Catalogue</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <img
              src="../images/heart.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span className="header-text">Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/basket">
            <img
              src="../images/basket.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span className="header-text"> Cart {basket.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
