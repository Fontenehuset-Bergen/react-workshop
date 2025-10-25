import type { Pokemon } from "@/types/pokemon";

export async function loader({ params, request }) {
  console.log(`fetching ${params.name}...`);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    {
      cache: "force-cache",
      signal: request.signal,
    }
  );
  if (!response.ok) {
    console.log(
      `Pokeapi fetch failed with status ${response.status}: ${response.statusText}`
    );
    return;
  }
  const data: Pokemon = await response.json();
  return data;
}

export default function PokemonByName() {}