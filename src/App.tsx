import { Mybutton } from "./components/buttons"

function App() {
  return <div>
    <header>
      <a href="#hoved">Home</a>
                        <a href="#about">About</a>
    </header>
    <main id="hoved">
      <h1>Hello</h1>
      <p>bing bong</p>
      <Mybutton></Mybutton>
    </main>
    <footer>
      copright 2025
    </footer>
  </div>
}

export default App
