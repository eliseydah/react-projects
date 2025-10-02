import "./GenerationPart.css";
function GenerationPart() {
  return (
    <div className="generation-part item left">
      <img />
      <p> The type of the pokemon</p>
      <div>
        <p> Name </p>
        <input type="text" />
      </div>
      <div className="number-interaction">
        <p> Number </p>
        <button></button>
        <input type="number" />
        <button></button>
      </div>
      <button className="search-button"> Search </button>
    </div>
  );
}
export default GenerationPart;
