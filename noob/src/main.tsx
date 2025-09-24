import "./index.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyButton } from "./components/buttons.tsx"
import { HeaderLayout } from './components/layout/Headers.tsx'
import { SectionLayout } from './components/layout/Sections.tsx'
import { FooterLayout } from './components/layout/Footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderLayout />
   <main>
    <SectionLayout>
      <h1>section header</h1>
    </SectionLayout>
    <MyButton />
   </main>
    <FooterLayout />
  </StrictMode>,
)
