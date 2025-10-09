import "./PokemonPalettePart.css";
import ThemeToggler from "./ThemeToggler";
import ColorBlock from "./ColorBlock";
function PokemonPalettePart({ image, pokemonName }) {
  return (
    <div className="container item right">
      <div className="pokemon-palette-part">
        <div className="text-section">
          <h2>A website inspired by colors.</h2>
          <span>
            Every Pokémon has its own unique palette. Enter a name or Pokédex
            number, and this site will reveal the top three colors that bring
            your Pokémon to life. Discover patterns, compare favorites, or just
            enjoy exploring the colorful side of the Pokédex.
          </span>
          <p className="pokemon-name-text">{pokemonName}</p>

          <div className="button-section">
            <button className="scroll-button">
              <span>scroll down</span>{" "}
              <img
                src="../images/arrow-down.svg"
                alt="arrow"
                height="20px"
                width="20px"
              />
            </button>
            <ThemeToggler />
            {/* <input type="checkbox" className="theme" /> */}
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="pokemon" />
        </div>
      </div>
      <div className="colors-section">
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
      </div>
    </div>
  );
}
export default PokemonPalettePart;
