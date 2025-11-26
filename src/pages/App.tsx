// import { useState } from 'react'
import  defaultBackground  from  "/images/background.jpg"
import { BackgroundImage, animType } from "./../components/BackgroundImage.tsx"
import { julekaker } from "../components/julekakerdata.tsx";
import { ChristmasCookieList } from "../components/JuleBakstGalleri.tsx";

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
