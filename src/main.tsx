import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyButton } from './components/ui/buttons/buttons'
import './assets/global.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyButton />
  </StrictMode>,
)
