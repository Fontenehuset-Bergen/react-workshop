import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { PokemonPage } from "./pages/Pokemon";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonPage />1
  </StrictMode>
);
