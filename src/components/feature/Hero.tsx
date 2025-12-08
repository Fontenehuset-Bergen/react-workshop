import { Badge } from "./badges/Badge";
import { LinkButton } from "./buttons/LinkButton";
import { TextButton } from "./buttons/TextButton";
import { Header } from "./Header"
import { DisplayProduct } from "./Product";

export function HeroPage ()
{
  return( 
     <>
      {/* <TextButton text="this is my button"/>
      <LinkButton text={"test link"} href="https://www.elkjop.no/" ></LinkButton>
      <Badge label="Out of Stock" warning="info"/> */}
      <DisplayProduct  productName="Samsung s25" price="10 990 kr" description="Minste modellen i s25 serien. Oled skjerm, Snapdragon prosessor" inStock={true} imageUrl="src/assets/images/samsungs25.png"/>
     </>
  );

}