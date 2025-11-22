import { HomepageHero } from "../components/feature/Hero";
import "../assets/styles/example.css";
import JuleBakstGalleri from "../components/JuleBakstGalleri";

function App() {
    return (
        <>
            <HomepageHero />
            <div className='card'>
                <p>
                    Endre og legg til i <code>src/App.tsx</code> legg til din
                    egen komponent og se resultatet!
                </p>
            </div>
            <div className='app-wrapper'>
                <JuleBakstGalleri />
            </div>
        </>
    );
}

export default App;
