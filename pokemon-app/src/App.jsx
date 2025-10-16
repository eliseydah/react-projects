import { useState, useEffect, useCallback } from "react";
import ColorThief from "colorthief";
import GenerationPart from "./GenerationPart";
import PokemonPalettePart from "./PokemonPalettePart";
import { ThemeProvider } from "./ThemeProvider";
import "./App.css";

function App() {
  const [image, setImage] = useState(
    `https://www.pokemonpalette.com/images/pokemon/official-artwork/25.png`
  );

  const [pokemonData, setPokemonData] = useState(null);
  const [palette, setPalette] = useState([]);
  const getPokemonInfo = useCallback(async (pokemonName, pokemonNumber) => {
    let url = "";
    if (pokemonNumber) {
      url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    } else if (pokemonName) {
      url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    } else {
      throw new Error("Please enter a name or an ID");
    }

    console.log(url);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const formattedData = {
          name: data.name,
          id: data.id,
          types: data.types.map((typeInfo) => typeInfo.type.name),
          abilities: data.abilities.map(
            (abilityInfo) => abilityInfo.ability.name
          ),
          stats: data.stats.map((statInfo) => ({
            name: statInfo.stat.name,
            value: statInfo.base_stat,
          })),
          height: data.height,
          weight: data.weight,
          sprite: data.sprites.front_default,
          shinySprite: data.sprites.front_shiny,
        };
        setPokemonData(formattedData);
        console.log(pokemonData);
        setImage(
          `https://www.pokemonpalette.com/images/pokemon/official-artwork/${data.id}.png`
        );
      })
      .catch((err) => {
        console.error(err);
        alert("Wrong pokemon name");
      });
  }, []);

  useEffect(() => {
    if (pokemonData?.sprite) {
      const colorThief = new ColorThief();

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = pokemonData.sprite;

      img.onload = () => {
        try {
          const colors = colorThief.getPalette(img, 6);
          setPalette(colors); // сохраняем палитру
          console.log("Палитра покемона:", colors);
        } catch (err) {
          console.error("Не удалось получить палитру:", err);
        }
      };
    }
  }, [pokemonData]);

  useEffect(() => {
    getPokemonInfo(null, 25); // по ID
  }, [getPokemonInfo]);

  return (
    <ThemeProvider>
      <div>
        {pokemonData && palette.length && (
          <div className="pokemon-app">
            <GenerationPart
              onSearch={getPokemonInfo}
              pokemonData={pokemonData}
            />

            <PokemonPalettePart
              image={image}
              pokemonData={pokemonData}
              palette={palette}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
