import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
import { ChristmasCookieList, julekaker } from "./../components/feature/JuleBakstGalleri"
// import { julekaker } from "./JuleBakstGalleri"
 
function App() {


  return(
  <>
        <ChristmasCookieList cookies={julekaker} />    
   </>
    )
}

export default App
