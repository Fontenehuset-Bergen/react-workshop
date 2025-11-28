import React from "react";
// import  {christmasCookie } from "./julekakerdata.tsx";

import type { christmasCookie , cookingTime} from "../assets/types/christmasCookie";



function getTimeString(timeToCook : cookingTime ) : string 
{
    return `${timeToCook.hours ? timeToCook.hours + " hours and" : ""}  ${timeToCook.minutes} minutes` ;
}

function getDifficultyEmoji(difficulty :christmasCookie["difficulty"]) : string
{
    if(difficulty === "easy") return "😀";
    if(difficulty === "medium") return "😳";
    return "🙁";
}

export function ChristmasCookieCard({ name, time, toughness, difficulty,  oneOfTheSeven, imageFile} : christmasCookie)
{
    // har ikke lyst a bruke id her, trenger ikke å vise nummer
  
    return(
        <>   <div className="cookieCard">
                <img className="cookieImage" src={imageFile}/>
                <p className="categoryText">Cookie name : <span className="cookieInfoText">{name}</span></p>
                <p className="categoryText">Time to make : <span className="cookieInfoText">{getTimeString(time)}</span></p>  
                <p className="categoryText">Hardness : <span className="cookieInfoText"> {toughness}</span></p>
                <p className="categoryText">Difficulty : <span className="cookieInfoText"> {difficulty}<span>{ getDifficultyEmoji(difficulty)}</span> </span>  </p>
                <p className="categoryText">One of the seven : <span className="cookieInfoText"> {oneOfTheSeven ? "yes" : "no"}</span></p>
            </div>
            </>
    );
}

export function ChristmasCookieList({ cookies} : { cookies  : christmasCookie[]})
{       
    return(
         <>   <h1> My Christmas Cookie List</h1>
              <div className="cookieDiv grid">
                {cookies.map((currentCookie) =>
                    {
                      return <ChristmasCookieCard key={currentCookie.id} id={currentCookie.id} name={currentCookie.name} time={currentCookie.time} toughness={currentCookie.toughness} difficulty={currentCookie.difficulty} oneOfTheSeven={currentCookie.oneOfTheSeven} imageFile={currentCookie.imageFile}/>
                    })
                }
            </div>
          </>
    )
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    // export function TheWholeStack(cookies : christmasCoockies [])
    // {
    //     return(
    //         <>
    //             <div className="cookieList">
  
    //             </div>
              
            
    //         </>
    //     );

    // }