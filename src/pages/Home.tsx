// import Blink from 'react';
import { useState, Blink } from 'react'
import { HomepageHero } from '../components/feature/Hero'
import '../assets/styles/example.css'
import donaldImage from "../assets/images/donaldtrump.jpg";
// import { badge} from "../../docs/1_introduction/assignment/easy/02_ternaries";
import * as operators from "../../docs/1_introduction/assignment/easy/03_operators_shortcircuit";


function App() {
  const [politiciansLieCount , daliyRegistration] = useState(0)
  // console.log( badge(true, false) );


  return (
    <>
      <HomepageHero />
      <div className="card">
        <h3>Politicians lies  : { politiciansLieCount}</h3>
        <button onClick={() => daliyRegistration((politiciansLieCount) => politiciansLieCount + 6)}>
           Register complaint 
        </button>
         {politiciansLieCount >= 100 &&
            <div className="flex">  
            <img className="donaldImage" src={donaldImage}/>     
            <p className="flex trumpModeSettings" > 
             Warning! Entering Trump mode
          </p>
          </div>
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} 

export default App
