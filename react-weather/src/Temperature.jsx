function Temperature(props) {
  return (
    <div>
      <i className="bi bi-thermometer-half"></i>
      {props.temperature}
      <span className="temperature"></span> °C
    </div>
  );
}
export default Temperature;
