import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './pages/Home'
import './assets/styles/index.css'
import JuleBakstGalleri from './components/JuleBakstGalleri';
// ?? Not sure how to make it work

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* App can be called anything, but here it is called App as an industry standard. App points to a function called App, and then renders the HTML from that function here. In this case, the App function is contained in the Home.tsx file - 
    src\main.tsx */}
    <App />
  </StrictMode>,
)
