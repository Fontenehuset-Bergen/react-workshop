import { HomepageHero } from "../components/feature/Hero";
import "../assets/styles/example.css";
import JuleBakstGalleri from "../components/JuleBakstGalleri";
import { MyButton } from "../components/ui/buttons/Button";
// import Julebrus from "../components/Julebrus";

function App() {
  return (
    <>
      <HomepageHero />
      <MyButton label="blambla" className="" />
      <div className="card">
        <p>
          Endre og legg til i <code>src/App.tsx</code> legg til din egen
          komponent og se resultatet!
        </p>
      </div>
      <div className="app-wrapper">
        <JuleBakstGalleri />
        {/* <Julebrus /> */}
      </div>
    </>
  );
}

export default App;
