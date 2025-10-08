import { useState } from "react";
import GenerationPart from "./GenerationPart";
import PokemonPalettePart from "./PokemonPalettePart";

import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [smallImage, setSmallImage] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  // const [pokemonNumber, setPokemonNumber] = useState("");

  async function getPokemonInfo(pokemonName, pokemonNumber) {
    // event.preventDefault();
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
        setImage(
          `https://www.pokemonpalette.com/images/pokemon/official-artwork/${data.id}.png`
        );
        setSmallImage(data.sprites.front_default);
        setPokemonName(data.name);
        console.log(image);
        // getAllPokemonInfo(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Wrong pokemon name");
      });
    // .finally(() => {
    //   setPokemonName("");
    //   setPokemonNumber("");
    // });
  }
  return (
    <>
      <div>
        <div className="pokemon-app">
          <GenerationPart onSearch={getPokemonInfo} smallImage={smallImage} />
          <PokemonPalettePart image={image} pokemonName={pokemonName} />
        </div>
      </div>
    </>
  );
}

export default App;
