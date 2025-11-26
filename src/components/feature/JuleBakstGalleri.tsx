import React from "react";
// import  {christmasCookie } from "./julekakerdata.tsx";

import pekkerkakeImg from "/images/pepperkake.jpg" ;
import kakemannImg from "/images/kakemann.jpg";
import kromkakeImg from "/images/kromkake.jpg"
import grandmasImg from "/images/grandmas.jpg";
 
 export type cookingTime = {
    minutes : number,
    hours : number
}

export interface christmasCookie {

    id : number,
    name : string,
    time : cookingTime,
    toughness : "soft" | "medium" | "hard" | "unetable",
    oneOfTheSeven : boolean,
    imageFile : string
    
}

export const julekaker : christmasCookie[] = 
[
    
    { id:  1, name : "Pepperkake", time : { hours : 1, minutes : 32} , toughness : "medium", oneOfTheSeven : true, imageFile : pekkerkakeImg},
    { id : 2, name : "Kakemann" , time : { hours : 0, minutes : 42 }, toughness : "hard", oneOfTheSeven : false, imageFile : kakemannImg},
    { id : 3, name : "Grandmas", time : { hours : 3, minutes : 1 }, toughness : "unetable", oneOfTheSeven : false, imageFile : grandmasImg} ,
    { id : 4 ,name : "Krumkake", time : { hours : 1, minutes: 22}, toughness :"soft", oneOfTheSeven: true, imageFile :  kromkakeImg },
];


function getTimeString(timeToCook : cookingTime ) : string 
{
    return `${timeToCook.hours ? timeToCook.hours + " hours and" : ""}  ${timeToCook.minutes} minutes` ;
}


export function ChristmasCookieCard({id, name, time, toughness, oneOfTheSeven, imageFile} : christmasCookie)
{
    // const isSevenText : string = oneOfTheSeven ? "yes" : "no";

    // har ikke lyst a bruke id her, trenger ikke å vise nummer

    return(
        <>  
  
            <div className="cookieCard">
                <img className="cookieImage" src={imageFile}/>
                <p className="categoryText">Cookie name : <span className="cookieInfoText">{name}</span></p>
                <p className="categoryText">Time to make :<span className="cookieInfoText">{getTimeString(time)}</span></p>  
                <p className="categoryText">Hardness : <span className="cookieInfoText"> {toughness}</span></p>
                <p className="categoryText">One of the seven : <span className="cookieInfoText"> {oneOfTheSeven ? "yes" : "no"}</span></p>
            </div>
            </>
    );
}



export function ChristmasCookieList({ cookies} : { cookies  : christmasCookie[]})
{
    return(
        <>
            
            <div className="cookieDiv grid">
                {cookies.map((currentCookie) =>
                    {
                   
                       return <ChristmasCookieCard key={currentCookie.id} id={currentCookie.id} name={currentCookie.name} time={currentCookie.time} toughness={currentCookie.toughness} oneOfTheSeven={currentCookie.oneOfTheSeven} imageFile={currentCookie.imageFile}/>

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