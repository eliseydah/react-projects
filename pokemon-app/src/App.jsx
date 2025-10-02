import GenerationPart from "./GenerationPart";
import PokemonPalettePart from "./PokemonPalettePart";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="pokemon-app">
          <GenerationPart />
          <PokemonPalettePart />
        </div>
      </div>
    </>
  );
}

export default App;
