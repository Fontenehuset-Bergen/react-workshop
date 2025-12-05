import "../assets/styles/example.css";
import { HomepageHero } from "../components/feature/Hero";
import { FadeSection } from "../components/feature/Intersection";
import { StatusBadge } from "../components/ui/badge/Status";
import { LinkButton } from "../components/ui/buttons/LinkButton";
import { TextButton } from "../components/ui/buttons/TextButton";
import { ProductCard } from "../components/ui/cards/ProductCard";

export default function App() {
  return (
    <main>
      <HomepageHero />
      <section>
        <h2>This is my button</h2>
        <TextButton label="Buy now!" />
        <h2>This is my link button</h2>
        <LinkButton label="Read More" href="#" />
      </section>
      <section>
        <h2>
          These are my <span style={{ textDecoration: "underline" }}>badges</span>
        </h2>
        <span style={{ display: "flex", gap: "2rem" }}>
          <StatusBadge />
          <StatusBadge label="50+ tilgjengelig" level="success" />
          <StatusBadge label="utsolgt" level="warning" />
        </span>
      </section>
      <section>
        <h2>My products</h2>
        <ProductCard
          productName="Krus"
          description="Du vet hva det er"
          imageUrl="/products/kontorkrus.webp"
          price={99}
          inStock
          isOnSale
        />
      </section>
      <FadeSection>
        <p>Seksjon 1</p>
      </FadeSection>
      <FadeSection>
        <p>Seksjon 2</p>
      </FadeSection>
      <FadeSection>
        <p>Seksjon 3</p>
      </FadeSection>
    </main>
  );
}
