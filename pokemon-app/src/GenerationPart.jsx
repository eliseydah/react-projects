import { useState } from "react";
import "./GenerationPart.css";
function GenerationPart() {
  //   const [pokemonInfo, setPokemonInfo] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState("");
  //   const [url, setUrl] = useState("");
  //  --- IGNORE ---
  //   function getAllPokemonInfo(data) {
  //     setPokemonInfo(data);
  //   }
  function getPokemonInfo(event) {
    event.preventDefault();
    const url = pokemonName
      ? `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      : `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

    console.log(url);

    fetch(url)
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
      })
      .finally(() => {
        setPokemonName("");
        setPokemonNumber("");
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
          <input
            type="number"
            className="with-icon"
            onChange={(e) => setPokemonNumber(e.target.value)}
            value={pokemonNumber}
            onSubmit={getPokemonInfo}
          />
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
