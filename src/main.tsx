import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import { ExampleUseState } from './components/ui/cards/example'







createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExampleUseState names={['Karl', 'Ole', 'Siren', 'Sander']}></ExampleUseState>
  </StrictMode>,
)
