import "./assets/style/index.css";

import logo from "./assets/vite.svg"

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyButton } from "./components/ui/buttons/Button";
import { HeaderLink } from "./components/ui/links/HeaderLink";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header className="flex flex-row justify-around bg-gradient-to-l from-orange-400 to-purple-500">
      <span id="blalba" className="blabla">
        <img src={logo} />
      </span>
      <nav className="flex flex-row gap-4">
        <HeaderLink href="#" label="Home" />
        <HeaderLink href="#" label="About us" />
        <h1></h1>
      </nav>
    </header>
    <main>
      <MyButton />
    </main>
    <footer></footer>
  </StrictMode>
);
