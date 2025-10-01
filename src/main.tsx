import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ExampleUseState } from './components/usestate.tsx'
import { ExampleUseRef } from './components/useref.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <main>
        <ExampleUseState names={["ole", "john", "Lars", "Olivia", "Margrete"]} />
        <ExampleUseRef />
      </main>
  </StrictMode>,
)
