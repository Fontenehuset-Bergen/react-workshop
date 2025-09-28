import "./assets/style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyButton } from "./components/ui/buttons/Button";
import { HeaderLayout } from "./components/layout/Header";
import { FooterLayout } from "./components/layout/Footer";
import { SectionLayout } from "./components/layout/Sections";
import { ProduceCard } from "./components/ui/cards/ProduceCard";
import { UserProfileCard } from "./components/ui/cards/UserProfile";
import { Questioneer } from "./components/ui/cards/Questioneer";
import { YuriisCard } from "./components/ui/cards/YuriisCard";{}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderLayout />
    <main>
      <YuriisCard
        age={36}
        avatar="/vite.svg"
        description="Hola!"
        username="Yurii"
        hobbies={["Coding", "coffee"]}
        dateOfBirth={new Date(1988, 10, 7)}
        isMember={true}
      />
      <Questioneer />
      <UserProfileCard
        age={29}
        avatar="/vite.svg"
        description="Hi, im cool!"
        username="Kristoffer"
        hobbies={["Coding", "coffee"]}
        dateOfBirth={new Date(2000, 1, 4)}
        isMember={true}
      />
      <UserProfileCard
        age={32}
        avatar="/vite.svg"
        description="Super awesome guest"
        username="Karoline"
        hobbies={["Sports", "Relaxing"]}
        dateOfBirth={new Date(1980, 1, 7)}
      />

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
