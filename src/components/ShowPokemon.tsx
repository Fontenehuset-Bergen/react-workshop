import { useState, useEffect } from "react"
import { type PokeResult, type Status } from "./GettingPokeapi"

interface Stats 
{
    base_stat : number,
    effort : number,
    stat : {
        name : string,
        url : string
    }
}

interface Types {
    slot : number,
    type : {
        name : string,
        url : string
    }
}

interface Sprites 
{
    back_default : string,
    back_female : string,
    back_shiny : string,
    back_shiny_female : string, 
    front_default : string,
    front_female : string,
    front_shiny : string,
    front_shiny_female : string,
    other : 
    {
        dream_world :
        {
             front_default : string,
             front_female :string

        }
        
        home : 
        {
            front_default : string, 
            front_female : null,
            front_shiny : string,
            front_shiny_female : null
        }

        offical_artwork : 
        {
            front_default : string,
            front_shiny : string,
        }

        showdown : {

            back_default : string,
            back_female : string,
            back_shiny : string,
            back_shiny_female : null,
            front_default : string,
            front_female : string,
            front_shiny : string,
            front_shiny_female : string
        }
    }

}

interface Pokemon 
{

    id : number,
    name : string
    sprites : Sprites
    stats : Stats
    types : Types,
    group : string,

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
                const data : Pokemon = await response.json();
                setLoadedStatus("done");
                console.log(data);
            } else setLoadedStatus("error");

        }

        getPokemon();
        return() => abortController.abort();
    }, []);

    return(
        <>
         <div className="showPokeDiv">
            {isPokeLoaded === "done" &&
             <p>Pokemon loaded</p>


            }
      
         </div>
       
        </>


    )

}