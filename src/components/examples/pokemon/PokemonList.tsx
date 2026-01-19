import { usePokemons } from "../../../hooks/pokemon/fetchPokemons";

export function PokemonList() {
  const { pokemons, fetchPokemons } = usePokemons();

  return (
    <div>
      <aside style={{ display: "flex", flexDirection: "column" }}>
        <h2>Available pokemons</h2>
        {pokemons.results.map(({ name, url }) => (
          <a key={name + url} href={url}>
            {name}
          </a>
        ))}
        <span>
          <button type="button" disabled={!!pokemons.next}>
            prev
          </button>
          <button type="button" onClick={() => fetchPokemons()}>
            reset
          </button>
          <button type="button" disabled={!!pokemons.previous}>
            next
          </button>
        </span>
      </aside>
    </div>
  );
}
