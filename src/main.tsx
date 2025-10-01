import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
/*import { ExampleUseState } from './components/ui/cards/example'*/
import { Card } from './components/ui/cards/cards'
import { MyButton } from './components/ui/buttons/buttons'







createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card></Card>
    <MyButton></MyButton>
  </StrictMode>,
)


/*<ExampleUseState names={['Karl', 'Ole', 'Siren', 'Sander']}></ExampleUseState>*/