import { useState, useEffect } from "react"
import { type PokeResult, type Status } from "./GettingPokeapi"

interface Pokemon {
    id : number,
    name : string
    sprites
    stats
    types
}


export function ShowPokemon({url } : PokeResult)
{
    const [isPokeLoaded, setLoadedStatus] = useState<Status>("loading");

    useEffect(() =>
    {
        const abortController = new AbortController();
        async function getPokemon()
        {
            const response = await fetch(url);
            if(response.ok)
            {
                const data = await response.json();
                setLoadedStatus("done");
            } else setLoadedStatus("error");

        }

        getPokemon();
        return() => abortController.abort();
    }, []);

    return(
        <>
         <div className="showPokeDiv">
            {isPokeLoaded === "done" &&



            }
      
         </div>
       
        </>


    )

}