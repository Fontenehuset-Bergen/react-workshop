import type { Pokemon } from "@/types/pokemon";
import type { Route } from "./+types/PokemonPage";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function loader({ params }: Route.LoaderArgs) {
  console.log(`fetching ${params.name}...`);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    { cache: "force-cache" }
  );

  // Handle responses where we can't get our pokemon
  if (!response.ok) {
    console.log(
      `Pokeapi fetch failed with status ${response.status}: ${response.statusText}`
    );
    return;
  }

  // Access the json representation of our response, which should be a pokemon
  const data: Pokemon = await response.json();
  return data;
}

export default function PokemonByName() {
  const pokemon = useLoaderData<typeof loader>();
  const [images, setImages] = useState<string[]>(["/missigno.png"]);
  const [index, setIndex] = useState<number>(0);

  // Collect all sprites available for a pokemon
  useEffect(() => {
    if (pokemon) {
      const sprites = Object.values(pokemon.sprites);
      const spriteUrls = sprites.filter((item) => typeof item === "string");

      if (spriteUrls.length) {
        setImages(spriteUrls);
      }
    }
  }, [pokemon]);
  return (
    <div className="flex-1 flex flex-col gap-4 max-w-96 mx-auto">
      <div className="relative p-4 bg-stone-900">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2"
          onClick={() => setIndex(index + 1 < images.length ? index + 1 : 0)}
        >
          <ArrowLeft />
        </button>
        <img
          className="size-48 mx-auto object-contain duration-200"
          src={images.at(index)}
        />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2"
          onClick={() => setIndex(index <= 0 ? images.length - 1 : index - 1)}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="p-4 bg-yellow-200/80 border border-black text-black rounded-md">
        {pokemon?.stats.map((stat) => (
          <span key={stat.stat.name} className="flex gap-2">
            <p className="uppercase">{stat.stat.name}</p>
            <p className="ml-auto">{stat.base_stat}</p>
          </span>
        ))}
        {!pokemon && <p className="text-center">A wild missingno appeared!</p>}
      </div>
    </div>
  );
}
