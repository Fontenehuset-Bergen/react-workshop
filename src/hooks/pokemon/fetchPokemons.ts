import { useEffect, useState } from "react";
import type { PokemonListResult } from "../../type/pokemon.types";

export function usePokemons() {
  const [pokemons, setPokemons] = useState<PokemonListResult>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  async function fetchPokemons(
    url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  ) {
    try {
      const result = await fetch(url);
      if (!result.ok) return;

      const data: PokemonListResult = await result.json();
      if (data && data.results?.length) {
        console.log(data);
        setPokemons(data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, fetchPokemons };
}
