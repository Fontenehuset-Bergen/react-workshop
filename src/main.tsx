// Global imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./assets/styles/global.css";

// React components
import { LandingPage } from "./app/page.tsx";
import { Header } from "./components/layout/sections/header.tsx";
import { Footer } from "./components/layout/sections/footer.tsx";
import { ScrollToTopButton } from "./components/ui/buttons/scrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <LandingPage />
    <Footer />
    <ScrollToTopButton />
  </StrictMode>
);
