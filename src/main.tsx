import "./asstes/style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeaderLayout } from "./components/layout/Header";
import { FooterLayout } from "./components/layout/Footer";
import { SectionLayout } from "./components/layout/Sections";
import { ProduceCard } from "./components/ui/cards/ProduceCards";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderLayout />
    <main>
      <SectionLayout>
        <h1>Section Header</h1>
        <p>Lorem, ipsum.</p>
      </SectionLayout>
      <SectionLayout>
        <ProduceCard 
        name="Banana" 
        description="Quite juicy yellow banana" 
        picture="/vite.svg"
        price={29}
        qnt={10}
        tags={["fruit", "tasty"]}
        />
       <ProduceCard 
        name="Orange" 
        description="A zesty treat" 
        picture="/vite.svg"
        price={90}
        qnt={3}
        tags={["fruit", "zesty", "citrus"]}
        onSale={true}
        />
        <ProduceCard 
        name="Green Apple" 
        description="A sour bite" 
        picture="/vite.svg"
        price={50}
        qnt={5}
        tags={["fruit", "sour",]}
        onSale={false}
        />
      </SectionLayout>
      <MyButton/>
    </main>
    <FooterLayout/>
  </StrictMode>
);
