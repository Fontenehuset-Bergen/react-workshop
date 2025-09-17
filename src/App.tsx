import { MyButton } from "./components/buttons"

function App() {


  return (
    <>
      <header>
        <a href="#hoved">hjem </a>
        <a href="#about"> om meg</a>
      </header>
      <main id="hoved" >
        <div>
          <h1 style={{ color: 'darkgoldenrod' }}>This is a header</h1>
          <p style={{ fontSize: 20, color: 'teal' }}>Testing testing🧐👋</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, }}>
            <MyButton text={'first test'} />
            <MyButton text={'second test'} />
            <MyButton text={'third test'} />
          </div>
        </div>
      </main>
      <footer>this is the footer menu</footer>
    </>

  )
}

export default App
