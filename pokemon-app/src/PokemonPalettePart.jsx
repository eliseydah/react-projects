import "./PokemonPalettePart.css";
import ColorBlock from "./ColorBlock";
function PokemonPalettePart({ image, pokemonName }) {
  return (
    <div className="container item right">
      <div className="pokemon-palette-part">
        <div className="text-section">
          <h2>A website inspired by colors.</h2>
          <p>
            Every Pokémon has its own unique palette. Enter a name or Pokédex
            number, and this site will reveal the top three colors that bring
            your Pokémon to life. Discover patterns, compare favorites, or just
            enjoy exploring the colorful side of the Pokédex.
            <span>{pokemonName}</span>
          </p>
          <div className="button-section">
            <button className="scroll-button"> scroll down</button>
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
