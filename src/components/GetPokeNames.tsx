import { type PokeNames } from "./GettingPokeapi";

export function GetPokeNames( {names, setChosenName} : PokeNames)
{
    return(
        <>
          {
            names.map((current) =>
            (
                <button onClick={() => setChosenName(current.name)}>{current.name}</button>
            ))
                    
          }
        </>


    );

}