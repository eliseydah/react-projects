import "./Home.css";
import { Link } from "react-router";
import Categories from "./Categories";
// import { useNavigate } from "react-router"
function Home() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/catalogue");
  // };
  window.localStorage.setItem("name", "Дока Дог");
  const name = window.localStorage.getItem("name");
  console.log(name);
  return (
    <div className="home-container">
      <div className="intro">
        <h2>Welcome to Plant Shop</h2>
        <div className="header-description-container">
          <p className="description">Find the perfect plant for your home</p>
          <p className="description">
            We help create a cozy space for living and relaxation.
          </p>
        </div>
        <Link className="catalogue-link" to="/catalogue">
          open catalogue
        </Link>
        <div className="filter-container">
          <Categories />
        </div>
      </div>
    </div>
  );
}
export default Home;
