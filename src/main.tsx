// Global imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyButton } from "./components/Button";
import "./assets/global.css"
import { HeaderLink } from "./components/ui/link/HeaderLink";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header className="flex flex-row justify-around p-2"> 
  
  <span>logo</span>
  <nav>
      <HeaderLink href="#" label="about" />
      <HeaderLink href="#" label="home" />
      </nav>
    </header>
    
    <main>
      <MyButton />
    </main>
    <footer></footer>

  </StrictMode>
);
