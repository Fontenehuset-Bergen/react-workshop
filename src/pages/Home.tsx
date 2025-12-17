import { useState, type ChangeEvent } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
import { useRef } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false)

  const [ hobbies, setHobbies ] = useState([
    "coding", "react", "computers"
  ])

  const [ input, setInput ] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)
  // useState always updates the UI every time a value changes, useRef updates its state in memory without updating the UI

  function handleSubmit() {
    setHobbies((oldHobbies) => [...oldHobbies, input])
    setInput("")

    console.log(inputRef.current?.value)
  }

  return (
    <>
      <HomepageHero />

      <div className="card">
        <button onClick={() => setCount((old) => old + 1)}> 
          {/* "old" here can be called whatever you want, but in this syntax it always refers to the last stored state of setCount's "count" value */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

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

      
    </>
  )
}

export default App
