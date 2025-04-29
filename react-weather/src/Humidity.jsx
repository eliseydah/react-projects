function Humidity(props) {
  return (
    <div>
      <i className="bi bi-droplet"></i> {props.humidity}
      <span className="humidity"></span>
    </div>
  );
}
export default Humidity;
