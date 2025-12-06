import { Badge } from "./badges/Badge";
import { LinkButton } from "./buttons/LinkButton";
import { TextButton } from "./buttons/TextButton";
import { Header } from "./Header"
import { DisplayProduct } from "./Product";

export function HeroPage ()
{
  return( 
     <>
      <TextButton text="this is my button"/>
      <LinkButton text={"test link"} href="https://www.elkjop.no/" ></LinkButton>
      <Badge label="Out of Stock" warning="info"/>
      <DisplayProduct productName="testproduct name" price="25.50" description="Kult produkt som er her" inStock imageUrl="test"/>
     </>
  );

}