import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Julebakst } from './pages/Julebakst';

function App() {
    return (
        <>
            <Header title="Header" />
            <main>
                <Hero />
                <Julebakst />
            </main>
            <Footer />
        </>
    );
}

export default App;
