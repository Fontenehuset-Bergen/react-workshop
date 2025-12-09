import { Badge } from "./badges/Badge";
import { LinkButton } from "./buttons/LinkButton";
import { TextButton } from "./buttons/TextButton";
import { Header } from "./Header"
import { DisplayProduct } from "./Product";
import { ProductList } from "./ProductList";
import  { type Product} from "./Product"
import { useState } from "react";
import { StyledSection } from "./StyledSection";

async function getJsonData(url : string) : Promise<Product []>
{
    try 
    {
        const response = await fetch(url);
    
        if(!response.ok) 
        {
             throw new Error('failed to fetch json data (HTTP status : ${response.status}');
        }
        
        const data  : Product[]  = await response.json();
        return(data);
    }
    catch(error)
    {
        console.error("Feil i forsøk på å hente json data", error)
        throw error;
    }
    // return [];
}
    
const listToDisplay = await getJsonData("/src/assets/data/product.json");
const alternativesList = await getJsonData("src/assets/data/alternatives.json")

type brands = "Samsung Galaxy" | "iPhone";

export function HeroPage ()
{
    const [brandToDisplay, setBrandToDisplay] = useState<brands>("Samsung Galaxy");

   console.log(listToDisplay);
  return( 
     <>
        
       <StyledSection title={"Alternativer til Samsung Phones"} text={"Her er vårt utvalg av iPhones. Det er begrenset. "} background="dark" 
          children={<ProductList products={alternativesList}/>} />

     
     </>
  );

}