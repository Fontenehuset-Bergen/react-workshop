import { useState } from 'react'
import { HeroPage} from '../components/feature/Hero';
import { Header } from '../components/feature/Header';
import { Footer } from '../components/feature/Footer';

import '../assets/styles/example.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       <HeroPage />
       <Footer />
     
    </>
  )
}

export default App;
