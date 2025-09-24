import "./assets/style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyButton } from "./components/buttons/Buttons";
import { HeaderLayout } from "./components/layout/Header";
import { FooterLayout } from "./components/layout/Footer";
import { SectionLayout } from "./components/layout/sections";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderLayout />
    <main>
      <SectionLayout>
        <h1>section header</h1>
      </SectionLayout>
      <MyButton />
    </main>
    <FooterLayout />
  </StrictMode>
);
