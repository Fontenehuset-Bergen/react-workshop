// Global imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./assets/styles/global.css";

// React components
import LandingPage from "./app/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
