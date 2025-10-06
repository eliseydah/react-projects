import { useState } from "react";
import "./GenerationPart.css";
function GenerationPart() {
  //   const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  //   const [pokemonNumber, setPokemonNumber] = useState("");
  //   function getAllPokemonInfo(data) {
  //     setPokemonInfo(data);
  //   }
  function getPokemonInfo(event) {
    event.preventDefault();
    setPokemonName(""),
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        // `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=8698a1225dd8dbde8eb62a37a25c278e`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // getAllPokemonInfo(data);
        })
        .catch((err) => {
          console.error(err);
          alert("Wrong pokemon name");
        });
  }
  return (
    <div className="generation-part item left">
      <img />
      <h4> The type of the pokemon</h4>
      <p> Name </p>
      <section className="input-name-section">
        <input
          type="text"
          className="with-icon"
          placeholder="Enter the name..."
          onChange={(e) => setPokemonName(e.target.value)}
          value={pokemonName}
          onSubmit={getPokemonInfo}
        />
        <img
          className="input-icon"
          src="../images/glitter.svg"
          alt="logo"
          height="20px"
          width="20px"
        />
      </section>
      <p> National Pokedex Number</p>
      <div>
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
      <button className="search-button" onClick={getPokemonInfo}>
        {" "}
        Search{" "}
      </button>
    </div>
  );
}
export default GenerationPart;
