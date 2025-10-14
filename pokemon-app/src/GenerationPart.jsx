import { useState, useEffect } from "react";
import "./GenerationPart.css";
import PokemonInfo from "./PokemonInfo";
function GenerationPart({ onSearch, pokemonData }) {
  const [name, setName] = useState(pokemonData.name ? pokemonData.name : "");
  const [id, setId] = useState(pokemonData.id ? pokemonData.id : "");

  const handleClick = () => {
    onSearch(name.toLowerCase().trim(), id.trim());
    setName(pokemonData.name);
    setId(pokemonData.id);
  };
  const randomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    console.log(randomId);
    await onSearch("", randomId.toString());
  };
  useEffect(() => {
    if (pokemonData) {
      setName(pokemonData.name);
      setId(pokemonData.id);
    }
  }, [pokemonData]);
  return (
    <div className="generation-part item left">
      <img src={pokemonData.sprite} width="192" height="" />
      <h4> The type of the pokemon</h4>
      <p> Name </p>
      <section className="input-name-section">
        <input
          type="text"
          className="with-icon"
          placeholder="Enter the name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
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
            <img
              src="../images/arrow-down.svg"
              alt="arrow"
              height="10px"
              width="10px"
            />
          </button>
          <input
            type="number"
            className="with-icon"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <button className="pokemon-number-button">
            <img
              src="../images/arrow-up.svg"
              alt="logo"
              height="10px"
              width="10px"
            />
          </button>
        </div>
      </div>
      <div>
        <button className="search-button" onClick={handleClick}>
          Search
        </button>
        <button className="random-button" onClick={randomPokemon}>
          Randomize
        </button>
      </div>
      <PokemonInfo pokemonData={pokemonData} />
    </div>
  );
}
export default GenerationPart;
