import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
<<<<<<< Updated upstream
=======
import { useRef } from 'react'
import { Counter } from '../components/Counter'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter />


      <HomepageHero />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
<<<<<<< Updated upstream
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======

      <button type="button" onClick={() => setIsDropdownOpen((dropdownstate) => !dropdownstate)}>toggle dropdown</button>
      {isDropdownOpen && <p>This is my dropdown</p>}
      {/* onclick, check the state of setIsDropdownOpen, => change the value to the opposite (boolean) of the state it is currently in */}

      <div>
        {hobbies.map((hobby) => <span key={hobby}><p>{hobby}</p></span>)}
        {/* What is a "key" used for here? */}
        <p>{hobbies.join(", ")}</p>
        <p>{input}</p>
        <input type="text" ref={inputRef} placeholder="enter hobby" value={input} onChange={(event) => setInput(event.currentTarget.value)} />
        <p><button onClick={handleSubmit}>submit hobby</button></p>
      </div>
>>>>>>> Stashed changes
    </>
  )
}

export default App
