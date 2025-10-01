import "./asstes/style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeaderLayout } from "./components/layout/Header";
import { FooterLayout } from "./components/layout/Footer";
import { ExampleUseState } from "./components/examples/useState";
import { ExampleUseRef } from "./components/examples/useRef";
import { ExampleUseRef2 } from "./components/examples/useRef2";
import { ExampleUseEffect } from "./components/examples/useEffect";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderLayout />
    <main style={{minHeight: 2000}}>
      <ExampleUseState names={["Ole", "John", "Lars", "Linda", "Mimi"]} />
      <ExampleUseRef/>
      <ExampleUseRef2/>
      <ExampleUseEffect/>
    </main>
    <FooterLayout />
  </StrictMode>
);
