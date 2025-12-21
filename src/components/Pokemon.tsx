import { useEffect, useState } from "react";

interface pokemonInt {
    name: string,
    url: string,
};

interface pokeDex {
    id: number,
    sprites: {front_default: string},
};

export function PokemonApi() {
    const [ pokemonData, setPokemonData ] = useState<pokemonInt[]>([]);
    const [ currentPokemon, setCurrentPokemon ] = useState<pokemonInt>({name: "", url: ""});
    const [ pokeDexInfo, setPokeDexInfo ] = useState<pokeDex[]>([]);
    

    console.log(currentPokemon.url)

    useEffect(
        () => {
            const abortController = new AbortController();
            const pokeurl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
            async function fetchPokemon() {
                const pokeResult = await fetch(pokeurl, { signal: abortController.signal });
                const pokeData: { results: pokemonInt[] } = await pokeResult.json();
                const pokemonList = pokeData.results
                setPokemonData(pokemonList)
            }
            fetchPokemon();

            const dexurl = currentPokemon.url;
            console.log(dexurl)
            async function fetchPokeDex() {
                const pokedexResult = await fetch(dexurl, { signal: abortController.signal });
                const pokedexData: { results: pokeDex[] } = await pokedexResult.json();
                const pokeDexEntry = pokedexData.results
                setPokeDexInfo(pokeDexEntry)
            }
            fetchPokeDex();

            return () => abortController.abort();
        }, []);

    return(
        <>
            <div className="pokemonArray">
                {pokemonData.map( (apokemon) => 
                    <button className="pokemonButton" type="button" onClick={() => setCurrentPokemon(apokemon)}>
                        {apokemon.name}
                    </button>
                )}
            </div>

            <div>
                The current pokemon is {currentPokemon.name}

                {pokeDexInfo.map( (apokemonsinfo) =>
                <>
                <p>Name: {apokemonsinfo.id}</p>
                <img src={apokemonsinfo.sprites.front_default} alt="sprite" />
                <img src={pokeDexInfo.sprites.front_default} />
                </>
                )}
 
            </div>
        </>
    )
}