import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyButton } from './components/buttons/Buttons';
import './assets/index.css';
import { HeaderLink } from './components/links/HeaderLink';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header className="flex flex-row justify-around bg-gradient-to-l from-orange-50 to-blue-50">
      <span>
        logo  
      </span>
      <nav className="flex flex-row gap-4">
        <HeaderLink href="#" label="Home" />
        <HeaderLink href="#" label="About Us" />
      </nav>
    </header>
    <main><MyButton /></main>
    <footer></footer>
  </StrictMode>
);