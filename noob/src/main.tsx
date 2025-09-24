import "./index.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyButton } from "./components/buttons.tsx"
import { HeaderLayout } from './components/layout/Headers.tsx'
import { SectionLayout } from './components/layout/Sections.tsx'
import { FooterLayout } from './components/layout/Footer.tsx'
import './index.css'
import { ProduceCard } from "./components/ui/cards/ProduceCards.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderLayout />
   <main>
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
      />
      <ProduceCard
      name="orange"
      description="round and orange"
      picture="/vite.svg"
      price={45}
      qnt={15}
      tags={["fruit","tasty","round"]}
      />
    </SectionLayout>
    <MyButton />
   </main>
    <FooterLayout />
  </StrictMode>,
)
