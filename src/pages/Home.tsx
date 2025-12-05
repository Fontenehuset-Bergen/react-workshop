import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'

function App() {
  const [count, setCount] = useState(0)
  const [person, updatePerson] = useState({
    name: "Grete",
    age: 36
  })

  console.log(person, updatePerson)

  return (
    <>
      <HomepageHero />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          banana count is {count}
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
