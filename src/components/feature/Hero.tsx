import { Badge } from "./badges/Badge";
import { LinkButton } from "./buttons/LinkButton";
import { TextButton } from "./buttons/TextButton";
import { Header } from "./Header"
import { DisplayProduct } from "./Product";
import { ProductList } from "./ProductList";
import  { type Product} from "./Product"


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

export function HeroPage ()
{
   console.log(listToDisplay);
  return( 
     <>
      <ProductList products={listToDisplay}/>
     
     </>
  );

}