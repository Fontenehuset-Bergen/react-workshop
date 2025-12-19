import { type PokeNames } from "./GettingPokeapi";

export function GetPokeNames( {names, setChosenPoke} : PokeNames)
{
    return(
        <>
          {
            names.map((current) =>
            (
                <button onClick={() => setChosenPoke(current.name)}>{current.name}</button>
            ))
                    
          }
        </>


    );

}