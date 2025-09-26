import "./index.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyButton } from "./components/ui/buttons/buttons.tsx"
import { HeaderLayout } from './components/layout/Headers.tsx'
import { SectionLayout } from './components/layout/Sections.tsx'
import { FooterLayout } from './components/layout/Footer.tsx'
import './index.css'
import { ProduceCard } from "./components/ui/cards/ProduceCard.tsx";
import { UserProfileCard } from "./components/ui/cards/UserProfile.tsx";
import { Questionaire } from "./components/ui/cards/Questionaire.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderLayout />
   <main>
    <Questionaire />
    <UserProfileCard
      age={29}
      avatar="/vite.svg"
      description="Hi, I'm cool!"
      username="Kristoffer"
      hobbies={["Coding", "Coffee"]}
      dateOfBirth={new Date (1986, 4, 3)}
      />
    <SectionLayout>
      <h1>section header</h1>
      <p>zippidy doo dah</p>
    </SectionLayout>
    <SectionLayout>
      <ProduceCard
      name="banan"
      description="quite juicy yellow banana"
      picture="/vite.svg"
      price={29}
      qnt={10}
      tags={["fruit","tasty"]}
      onSale={false}
      />
      <ProduceCard
      name="orange"
      description="round, sour and orange"
      picture="/vite.svg"
      price={45}
      qnt={15}
      tags={["fruit","tasty","round"]}
      onSale={true}
      />
    </SectionLayout>
    <MyButton />
   </main>
    <FooterLayout />
  </StrictMode>,
)
