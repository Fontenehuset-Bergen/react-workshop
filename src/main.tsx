import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './pages/Home'
import './assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <body>
      
    <header></header>
    </body>
    <App />
    <main>

    <footer></footer>
    </main>
  </StrictMode>,
)
