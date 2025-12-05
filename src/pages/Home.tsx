import { useState } from 'react'
import { HeroPage} from '../components/feature/Hero'
import '../assets/styles/example.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <HeroPage />
     
    </>
  )
}

export default App
