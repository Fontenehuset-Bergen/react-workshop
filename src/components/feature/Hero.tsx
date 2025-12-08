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
      <section className="productSection flex">
        <DisplayProduct  productName="Samsung s25" price="10 990 kr" description="Minste modellen i s25 serien. Oled skjerm, Snapdragon prosessor" inStock={true} imageUrl="src/assets/images/samsungs25.png"/>
      <DisplayProduct  productName="Samsung s23+" price="8 990 kr" description="Midterste modell i s23 serien. Oled skjerm, Snapdragon prosessor. 512 gb lagring" inStock={false} imageUrl="src/assets/images/samsungs23+.png"/>
      <DisplayProduct  productName="Samsung s25 Ultra" price="15 990 kr" description="Topmodellen i s25 serien. Oled skjerm, Snapdragon prosessor. SPen medfølger" inStock={true} imageUrl="src/assets/images/samsungs25Ultra.png"/>
      </section>
     
     
     </>
  );

}