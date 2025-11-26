import React from "react";
// import  {christmasCookie } from "./julekakerdata.tsx";

import pekkerkakeImg from "/images/pepperkake.jpg" ;
import kakemannImg from "/images/kakemann.jpg";
import kromkakeImg from "/images/kromkake.png"
import grandmasImg from "/images/grandmas.jpg";
import { setCSSVariable } from "./backgroundImage";
 
 export type cookingTime = {
    minutes : number,
    hours : number
}

export interface christmasCookie 
{

    id : number,
    name : string,
    time : cookingTime,
    toughness : "soft" | "medium" | "hard" | "unetable",
    difficulty : "easy" | "medium" | "hard",
    oneOfTheSeven : boolean,
    imageFile : string
    
}

export const julekaker : christmasCookie[] = 
[
    
    { id:  1, name : "Pepperkake", time : { hours : 1, minutes : 32} , toughness : "medium", difficulty : "easy", oneOfTheSeven : true, imageFile : pekkerkakeImg},
    { id : 2, name : "Kakemann" , time : { hours : 0, minutes : 42 }, toughness : "hard", difficulty : "hard", oneOfTheSeven : false, imageFile : kakemannImg},
    { id : 3, name : "Grandmas", time : { hours : 3, minutes : 1 }, toughness : "unetable", difficulty: "medium", oneOfTheSeven : false, imageFile : grandmasImg} ,
    { id : 4 ,name : "Krumkake", time : { hours : 1, minutes: 22}, toughness :"soft", difficulty : "easy", oneOfTheSeven: true, imageFile :  kromkakeImg },
];


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

export function ChristmasCookieCard({id, name, time, toughness, difficulty,  oneOfTheSeven, imageFile} : christmasCookie)
{
    // const isSevenText : string = oneOfTheSeven ? "yes" : "no";

    // har ikke lyst a bruke id her, trenger ikke å vise nummer
   
    
    return(
        <>  
            <div className="cookieCard">
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
         <>   
              <h1> My Christmas Cookie List</h1>
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