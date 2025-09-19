import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyButton } from './components/ui/buttons/buttons'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyButton />
  </StrictMode>,
)
