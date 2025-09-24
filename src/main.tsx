import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyButton } from './components/ui/buttons/Button'
import "./asstes/style/index.css"
import { HeaderLink } from './components/ui/links/HeaderLink'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header className='flex flex-row justify-around bg-gradient-to-r from from-orange-300 from-10 via-amber-100 via-30% to-amber-900 to-90%'>
      <span>
        logo
      </span>
      <nav className='flex flex-row gap-4'>
        <HeaderLink href="#" label="home"></HeaderLink>
        <HeaderLink href='#' label='about us'></HeaderLink>
      </nav>

    </header>
    <main>
      <div>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <MyButton></MyButton>
      </div>
    </main>
    <footer>
      <p>copyright 2025</p>
    </footer>
  </StrictMode>,
)
