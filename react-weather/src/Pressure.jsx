function Pressure(props) {
  return (
    <div>
      <i className="bi bi-chevron-compact-down"></i> {props.pressure}
      <span className="pressure"> </span>
    </div>
  );
}
export default Pressure;
