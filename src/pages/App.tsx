import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomepageHero />
     
    </>
  )
}

export default App
