import "../assets/styles/example.css";
import { HomepageHero } from "../components/features/Hero";
import { StatusBadge } from "../components/ui/badge/Status";
import { LinkButton } from "../components/ui/buttons/LinkButton";
import { TextButton } from "../components/ui/buttons/TextButton";
import { ProductCard } from "../components/ui/cards/ProductCard";
import { Section } from "../components/features/Section";
import { Paragraph } from "../components/ui/text/Paragraph";

export default function App() {
  return (
    <main>
      <HomepageHero />
      <h1>Assignment solution examples</h1>
      <h2>Easy</h2>
      <Section label="1) Layout">
        <p>You can scroll to the <a href="#example-header">header</a> on the top and the <a href="#example-footer">footer</a> at the bottom by clicking the links</p>
      </Section>
      <Section label="2a) TextButton">
        <p>This is just a dummy button that doesn't do anything yet</p>
        <TextButton label="Buy now!" />
      </Section>
      <Section id="link-example" label="2b) LinkButton">
        <p>We can create a link that looks like a button</p>
        <LinkButton label="Read More" href="#link-example" />
      </Section>
      <Section label="2c) Parragraph">
        <p>
          We can add as much text as we want and modify styling directly when
          using the component
        </p>
        <Paragraph text="hello world in 12px" textSize={12} />
        <Paragraph text="hello world in 24px" textSize={24} />
        <Paragraph text="hello world in 36px" textSize={36} />
      </Section>
      <Section label="3d) Badges">
        <p>
          Badges have multiple uses, but mainly we use them for grabbing
          attention when attaching to other components. I'll reuse them in the product card component below
        </p>
        <span style={{ display: "flex", gap: "2rem" }}>
          <StatusBadge label="Snart tomt" level="info" />
          <StatusBadge label="50+ tilgjengelig" level="success" />
          <StatusBadge label="utsolgt" level="warning" />
        </span>
      </Section>
      <Section label="4) Butikk produkt komponent">
        <ProductCard
          productName="Kontor krus"
          description="Morsomt krus til kontoret, ca 0.2ml volum"
          imageUrl="/products/kontorkrus.webp"
          price={199}
          inStock
          isOnSale
        />
        <ProductCard
          productName="Skrivebords lampe 500w"
          description="Anbefalt til bruk på kontor, kan tilrekke møll hvis brukt riktig"
          imageUrl="/products/skrivebordslampe.png"
          price={1299}
        />
      </Section>
      <h2>Medium</h2>
      <h2>Hard</h2>
      <h2>Bonus</h2>
    </main>
  );
}
