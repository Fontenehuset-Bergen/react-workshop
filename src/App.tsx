import { MyButton } from './buttons';

function App() {
  return (
    <div>
      <header>
        <h1>Hello!</h1>
        <p>Dette er en test!</p>
        <a href="#hoved">Hjem</a>
        <a href="#om-oss">Om oss</a>
      </header>
      <main id="hoved">
        <MyButton />
      </main>
    </div>
    
  );
}

export default App;
