import "./PokemonInfo.css";
function PokemonInfo({ pokemonData }) {
  return (
    <div className="pokemon-info-card">
      <section>
        <p className="pokemon-info-card-text">Type</p>
        <p>{pokemonData.types.join(", ")}</p>
      </section>
      <section className="size-section">
        <div>
          <p className="pokemon-info-card-text">Height</p>
          <p>{pokemonData.height / 10} m</p>
        </div>
        <div>
          <p className="pokemon-info-card-text">Weight</p>
          <p>{pokemonData.weight / 10} kg</p>
        </div>
      </section>
      <section>
        <p className="pokemon-info-card-text"> Base Stats </p>
        {pokemonData.stats.map((stat) => (
          <div key={stat.name} className="stat-row">
            <span className="stat-name">{stat.name}</span>
            <div className="stat-bar-container">
              <div
                className="stat-bar"
                style={{ width: `${(stat.value / 255) * 100}%` }}
              ></div>
            </div>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
export default PokemonInfo;
