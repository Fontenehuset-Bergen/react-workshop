import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Julebakst } from './pages/Julebakst';

function App() {
    return (
        <>
            <Header title="Header" />
            <main>
                <Julebakst />
            </main>
            <Footer />
        </>
    );
}

export default App;
