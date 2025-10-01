// Global imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProfileCard } from "./components/ui/cards/UserProfile.tsx";

// Styles
import "./assets/styles/global.css";

// React components
import { LandingPage } from "./app/page.tsx";
import { Header } from "./components/layout/sections/header.tsx";
import { Footer } from "./components/layout/sections/footer.tsx";
import { ScrollToTopButton } from "./components/ui/buttons/scrollToTop.tsx";
import { Questionnaire } from "./components/ui/cards/Questionnaire.tsx";
import { TodoList } from "./components/feature/TodoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />

    <LandingPage />
    <main>
       <TodoList initialValue={["Import useState","Define initial value"]} />
      
      <Questionnaire />
     
      <UserProfileCard
        age={35}
        avatar="/vite.svg"
        description="Hi it me"
        username="Me"
        hobbies={["beans", "books"]}
        dateOfBirth={new Date(1990, 0, 31,)}
        isMember={true}
      // defaults to true if only set to isMember
      />
      <UserProfileCard
        age={35}
        avatar="/vite.svg"
        description="Schoorpa"
        username="Loois"
        hobbies={["cats", "crafts"]}
        dateOfBirth={new Date(1990, 1, 1)}
        isMember={false}
      // defaults to true if only set to isMember
      />
    </main>
    <Footer />
    <ScrollToTopButton />
  </StrictMode>
);
