import "./SunInfo.css";
function SunInfo(props) {
  return (
    <div className="sun-info">
      <p>
        <i className="bi bi-sunrise"></i> {props.sunrise}
        <span className="sunrise"></span>
      </p>
      <p>
        <i className="bi bi-sunset"></i> {props.sunset}
        <span className="sunset"></span>
      </p>
    </div>
  );
}
export default SunInfo;
