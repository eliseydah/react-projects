import "./PokemonPalettePart.css";
import ThemeToggler from "./ThemeToggler";
import ColorBlock from "./ColorBlock";
function PokemonPalettePart({ image, pokemonData, palette }) {
  const color1 = `rgb(${palette[0].join(",")})`;
  const color2 = `rgb(${palette[1].join(",")})`;
  const color3 = `rgb(${palette[2].join(",")})`;
  const gradientStyle = {
    background: `linear-gradient(90deg, ${color1}, ${color2}, ${color3}) text`,
    WebkitTextFillColor: "transparent",
    fontSize: "48px",
    fontWeight: "bold",
  };

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
          <p style={gradientStyle} className="pokemon-name-text">
            {pokemonData.name}
          </p>

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
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="pokemon" />
        </div>
      </div>
      <div className="colors-section">
        {palette.map((color, index) => (
          <ColorBlock key={index} color={color} />
        ))}
      </div>
    </div>
  );
}
export default PokemonPalettePart;
