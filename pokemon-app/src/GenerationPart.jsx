import "./GenerationPart.css";
function GenerationPart() {
  return (
    <div className="generation-part item left">
      <img />
      <p> The type of the pokemon</p>
      <section>
        <p> Name </p>
        <input
          type="text"
          className="with-icon"
          placeholder="Enter the name..."
        />
        <img
          className="input-icon"
          src="../images/glitter.svg"
          alt="logo"
          height="20px"
          width="20px"
        />
      </section>
      <div>
        <p> National Pokedex Number</p>
        <div className="number-interaction">
          <button className="pokemon-number-button">
            {" "}
            <img
              src="../images/arrow-down.svg"
              alt="logo"
              height="10px"
              width="10px"
            />
          </button>
          <input type="number" className="with-icon" />
          <button className="pokemon-number-button">
            {" "}
            <img
              src="../images/arrow-up.svg"
              alt="logo"
              height="10px"
              width="10px"
            />
          </button>
        </div>
      </div>
      <button className="search-button"> Search </button>
    </div>
  );
}
export default GenerationPart;
