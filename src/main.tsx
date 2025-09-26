import "./assets/style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyButton } from "./components/ui/buttons/Button";
import { HeaderLayout } from "./components/layout/Header";
import { FooterLayout } from "./components/layout/Footer";
import { SectionLayout } from "./components/layout/Sections";
import { ProduceCard } from "./components/ui/cards/ProduceCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderLayout />
    <main>
      <SectionLayout>
        <h1>section header</h1>
        <p>lorem ipusum</p>
      </SectionLayout>
      <SectionLayout>
        <ProduceCard
          name="Banan" 
          description="Quite juizy yellow bannana"
          picture="/vite.svg"
          price={29}
          qnt={10}
          tags={["fruit", "tasty"]}
        />
        <ProduceCard
          name="Orange" 
          description="A sour treat"
          picture="/vite.svg"
          price={90}
          qnt={2}
          tags={["vegtable", "soury", "smelly"]}
          onSale={true}
        />
      </SectionLayout>
      <MyButton />
    </main>
    <FooterLayout />
  </StrictMode>
);
