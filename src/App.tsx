import { MyButton } from "./components/buttons";

function App() {
  return (
    <div>
      <header>
        <a href="#hoved">hjem</a>
        <a href="#about">om oss</a>
      </header>
      <main id="hoved">
        <h1>Hello!</h1>
        <MyButton />
      </main>
      <footer>
        copyright 2025
      </footer>
    </div>
  );
}

export default App;
