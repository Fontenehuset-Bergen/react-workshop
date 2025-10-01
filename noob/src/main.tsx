import "./index.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeaderLayout } from './components/layout/Headers.tsx'
import { SectionLayout } from './components/layout/Sections.tsx'
import { FooterLayout } from './components/layout/Footer.tsx'
import './index.css'
import { UserProfileCard } from "./components/ui/cards/UserProfile.tsx";
import { ExampleUserRef2 } from "./components/feature/useRef.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderLayout />
   <main>
    <ExampleUserRef2 />
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
   </main>
    <FooterLayout />
  </StrictMode>,
)
