import { MyButton } from "./components/buttons";

function App() {
  return (
    <div>
      <header id="#top">
        <a href="#hoved">Hjem</a>
        <a href="#bottom">Helt ned</a>
      </header>
      <main id="hoved">
        <h1>bla bla bla</h1>
        <MyButton></MyButton>
        <MyButton></MyButton>
      </main>
      
      <footer id="bottom">
        <a href="#top">Opp igjen</a>
      </footer>
    </div>
  );
}

export default App;
