import GenerationPart from "./GenerationPart";
import PokemonPalettePart from "./PokemonPalettePart";
import "./App.css";

function App() {
  //  const [pokemonName, setPokemonName] = useState("");
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
          <GenerationPart onSearch={getPokemonInfo} />
          <PokemonPalettePart />
        </div>
      </div>
    </>
  );
}

export default App;
