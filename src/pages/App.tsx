// import { useState } from 'react'
import { ChristmasCookieList, julekaker } from "../components/JuleBakstGalleri.tsx"

import  defaultBackground  from  "/images/background.jpg"
import BackgroundImage, { animType } from "../components/backgroundImage.tsx";
 
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
