import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import './assets/styles/index.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
