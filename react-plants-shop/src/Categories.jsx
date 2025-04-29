import CategoryItem from "./CategoryItem";
import "./Categories.css";
// import { Link } from "react-router";
// import { useSearchParams } from "react-router";
function Categories() {
  const categories = [
    {
      title: "Large plants",
      image: "../images/spatifillum.png",
      link: "/catalogue?filter=Large",
    },
    {
      title: "For Beginners",
      image: "../images/cactus.jpeg",
      link: "/catalogue?filter=Easy Care",
    },
    {
      title: "Low-Light",
      image: "../images/aglaonema.jpeg",
      link: "/catalogue?filter=Low-light",
    },
    {
      title: "Succulents",
      image: "../images/succulent.jpeg",
      link: "/catalogue?filter=Succulent",
    },
    {
      title: "Moisture-loving",
      image: "../images/fittonia.jpeg",
      link: "/catalogue?filter=Regular",
    },
    {
      title: "Small plants",
      image: " ../images/tolstyanka.jpeg",
      link: "/catalogue?filter=Small",
    },
    {
      title: "Drought-tolerant",
      image: "../images/fikus.jpeg",
      link: "/catalogue?filter=Drought-tolerant",
    },
    {
      title: "Air-purifying",
      image: "../images/sansevieria.jpeg",
      link: "/catalogue?filter=Air-purifying",
    },
  ];
  return (
    <>
      <div className="item-container">
        {categories.map((item) => (
          <CategoryItem
            title={item.title}
            image={item.image}
            link={item.link}
            key={item.id}
          />
        ))}
      </div>
      <div className="category-button-container">
        {/* <button className="category-button">View All Plants</button> */}
      </div>
    </>
  );
}
export default Categories;
