import "./Badge.css";
function Badge(props) {
  return (
    <div className={`badge ${props.color}`}>
      {props.image ? (
        <img src={props.image} alt="logo" height="30px" width="30px" />
      ) : null}
      <span className="badge-text"> {props.text}</span>
    </div>
  );
}
export default Badge;
