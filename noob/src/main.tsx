import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HeaderLayout } from './components/layout/Headers.tsx'
import { FooterLayout } from './components/layout/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderLayout />
    <App />
    <FooterLayout />
  </StrictMode>,
)
