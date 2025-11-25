import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
import { ChristmasCookieList, julekaker } from "./../components/feature/JuleBakstGalleri"

import  defaultBackground  from  "./../../../public/images/background.jpg"
import BackgroundImage, { animType } from "./../components/feature/BackgroundImage"
 
// import { julekaker } from "./JuleBakstGalleri"
 
function App() {


  return(
  <>
        <BackgroundImage cssClassName="backgroundImage" imageFile={defaultBackground} animNumber={animType.FadeIn} animDuration="1s"  />
        <ChristmasCookieList cookies={julekaker} />    
   </>
    )
}

export default App
