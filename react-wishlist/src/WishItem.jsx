import "./WishItem.css";
function WishItem(props) {
  return (
    <div className="wish-container card" tabIndex="0">
      <div className="wish-wrap card-body">
        <div className="top-message">
          <div>
            <h5 className="wish-name card-title">{props.wish.title}</h5>
            <p className="wish-category"> {props.wish.category}</p>
            <p className="wish-description card-text">
              {props.wish.description}
            </p>
          </div>
          <div className="button-wrap">
            <a href="wish.link" className="wish-link btn btn-primary">
              Go somewhere
            </a>
            <button
              className="wish-delete-button"
              type="button"
              onClick={props.removeWish}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WishItem;
