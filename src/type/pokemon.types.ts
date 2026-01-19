export interface PokemonListResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface Pokemon {
  name: string;
  id: number;
}
