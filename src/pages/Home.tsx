import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
// import { badge} from "../../docs/1_introduction/assignment/easy/02_ternaries";
import * as operators from "../../docs/1_introduction/assignment/easy/03_operators_shortcircuit";


function App() {
  const [count, setCount] = useState(0)
  // console.log( badge(true, false) );


  return (
    <>
      <HomepageHero />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
