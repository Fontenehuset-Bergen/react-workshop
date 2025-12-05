import { useState } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
import JuleBakstGalleri from '../components/JuleBakstGalleri'
import { MyButton } from '../components/ui/buttons/button'

// This function contains the HTML that will be rendered onto the webpage, once it has been imported to the main.tsx file ( or whichever file you are using to render the site. This function can be anything you want. )
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <MyButton label='Click Me' className="myButtonClass" />
        {/* label here is NOT default script, we MADE this in  src\components\ui\buttons\Button.tsx as part of an interface */}
        <JuleBakstGalleri />
      </div>
      
    </>
  )
}

export default App
