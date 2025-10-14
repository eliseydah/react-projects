import { useState, useEffect } from "react";
import "./GenerationPart.css";
import PokemonInfo from "./PokemonInfo";
function GenerationPart({ onSearch, pokemonData }) {
  const [name, setName] = useState(pokemonData.name ? pokemonData.name : "");
  const [id, setId] = useState(pokemonData.id ? pokemonData.id : "");
  const [smallImage, setSmallImage] = useState(pokemonData.sprite);
  const [smallShinyImage, setSmallShinyImage] = useState(
    pokemonData.shinySprite
  );
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
  //   const pokemonToggleImage = () => {
  const [toggled, setToggled] = useState(false);

  // setSmallImage(pokemonData.shinySprite);
  //   };
  useEffect(() => {
    if (pokemonData) {
      setName(pokemonData.name);
      setId(pokemonData.id);
      setSmallImage(pokemonData.sprite);
      setSmallShinyImage(pokemonData.shinySprite);
    }
  }, [pokemonData]);
  return (
    <div className="generation-part item left">
      <img
        src={toggled ? smallShinyImage : smallImage}
        width="192"
        height="192"
      />
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
        <button
          className="pokemon-generation-button"
          onClick={() => setToggled(!toggled)}
        >
          <img
            className="input-icon"
            src="../images/glitter.svg"
            alt="logo"
            height="20px"
            width="20px"
          />
        </button>
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
      <div className="pokemon-generation-button-section">
        <button className="pokemon-generation-button" onClick={handleClick}>
          Search
        </button>
        <button className="pokemon-generation-button" onClick={randomPokemon}>
          Randomize
        </button>
      </div>
      <PokemonInfo pokemonData={pokemonData} />
    </div>
  );
}
export default GenerationPart;
