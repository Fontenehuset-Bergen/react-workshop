import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './pages/Home'
import './assets/styles/index.css'
import CleanHome from './pages/CleanHome';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CleanHome />
  </StrictMode>,
)
