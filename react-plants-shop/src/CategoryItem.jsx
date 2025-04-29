import { Link } from "react-router";
function CategoryItem(props) {
  return (
    <div>
      <Link to={props.link}>
        <div className="category-item">
          <img
            src={props.image}
            alt={props.name}
            width="150px"
            height="150px"
          />
          <p className="plant-title">{props.title}</p>
        </div>
      </Link>
    </div>
  );
}
export default CategoryItem;
