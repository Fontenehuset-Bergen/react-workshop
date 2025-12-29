import { useState, useEffect } from "react"

export type Status = "loading" | "error" | "done";

interface TypeNameAndLink
 {
    name : string,
    url : string
 }


interface PokeTypeFile {
    count : number,
    next : string  | null,
    previous : string | null,
    results :  <TypeNameAndLink>[]
}



export function GetPokeTypes( )
{
    const [asyncStatus, setAsyncStatus] = useState<Status>("loading");
    const [pokeTypes, setPokeTypesFromApi] = useState<TypesOfPokes[]>([]);
    
    useEffect(() => 
    {
        const abortController = new AbortController();

        async function fetchPokeTypes()
        {
            setAsyncStatus("loading");

            const response = await fetch( )
        }


    });
    
   


}