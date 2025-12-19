import   {useState, useEffect} from "react"
import { GetPokeNames } from "./GetPokeNames";
import { ShowPokemon } from "./ShowPokemon";

export type Status = "loading" | "error" | "done";

// her setter jeg pokeToGet to ditto...prøver på det først

const pokeToGetUrl : string = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

interface PokeData {
    results : PokeResult[]
}

export interface PokeResult {
    name : string,
    url : string
}

export interface PokeNames {
    names : PokeResult[]
    setChosenPoke : (chosen : PokeResult) => void
}

// interface Ability {

//     ability : string[2],
//     is_hidden : boolean,
//     slot : number
// }

export function GettingPokeapi()
{
    const [asyncStatus, setAsyncStatus] = useState<Status>("loading");
    const [pokeResult, setPokemonResult] = useState<PokeResult[]>([]);
    const [pokeNames, setPokeNames] = useState<PokeNames[]>([])
    const [pokeChosen, setChosenPoke] = useState<PokeResult>({ name : "none", url : "none"});
    // setPokemonData((data) =>  { pokeData.name = data;}

    // );

    console.log(pokeChosen);
    useEffect(() =>
    {
        const abortController = new AbortController();

        async function fetchPokemon() 
        {
            setAsyncStatus("loading");

            const response = await fetch(pokeToGetUrl, 
            {
                signal : abortController.signal
            }); 

            if(response.ok)
            {
                const data : PokeData = await response.json();
                setPokemonResult(data.results);
                setAsyncStatus("done");
                
            }
            else setAsyncStatus("error");
        }
        fetchPokemon();
        return () => abortController.abort();

    }, []);
 

    return(
        <div>
           <p>Status of fetch : {asyncStatus}</p>
           {asyncStatus == "done" &&
                <GetPokeNames names={pokeResult} setChosenPoke={setChosenPoke}/>
           }
           {nameChosen.name, != "none" &&
              <ShowPokemon name={nameChosen}/>
           
           }
            
        </div>
        );

}