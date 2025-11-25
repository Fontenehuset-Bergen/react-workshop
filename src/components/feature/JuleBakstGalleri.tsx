import React from "react";
// import { christmasCookie }  from "./julekakerdata";

import pekkerkakeImg from "./../../../public/images/pepperkake.jpg" ;
import kakemannImg from "./../../../public/images/kakemann.jpg";
import kromkakeImg from "./../../../public/images/kromkake.jpg"
import grandmasImg from "./../../../public/images/grandmas.jpg";
 
 export type cookingTime = {
    minutes : number,
    hours : number
}

export interface christmasCookie {

    name : string,
    time : cookingTime,
    toughness : "soft" | "medium" | "hard" | "unetable",
    oneOfTheSeven : boolean,
    imageFile : string
    
}

export const julekaker : christmasCookie[] = 
[
    
    { name : "pepperkake", time : { hours : 1, minutes : 32} , toughness : "medium", oneOfTheSeven : true, imageFile : pekkerkakeImg},
    { name : "kakemann" , time : { hours : 0, minutes : 42 }, toughness : "hard", oneOfTheSeven : false, imageFile : kakemannImg},
    { name : "grandmas", time : { hours : 3, minutes : 1 }, toughness : "unetable", oneOfTheSeven : false, imageFile : grandmasImg} ,
    { name : "krumkake", time : { hours : 1, minutes: 22}, toughness :"soft", oneOfTheSeven: true, imageFile :  kromkakeImg },
];

// ikke brukt ennå

function getTimeString(timeToCook : cookingTime ) : string 
{
    return `${timeToCook.hours} time og ${timeToCook.minutes} minutter` ;
}


export function ChristmasCookieCard( { name, time, toughness, oneOfTheSeven, imageFile} : christmasCookie)
{
    // const isSevenText : string = oneOfTheSeven ? "yes" : "no";

    return(
        <>
            <div className="cookieCard">
                <img className="cookieImage" src={imageFile}/>
                <p>Cookie name : {name}</p>
                <p>Time to make : {time.hours} : {time.minutes} </p>
                <p>Hardness :  {toughness}</p>
                <p>One of the seven : {oneOfTheSeven ? "yes" : "no"}</p>
                {/* <p>One of the seven : {isSevenText} </p> */}
            </div>
            </>
    );
}



export function ChristmasCookieList({ cookies} : { cookies  : christmasCookie[]})
{
    return(
        <>
            <div className="cookieDiv">
                {cookies.map((currentCookie) =>
                    {
                       return <ChristmasCookieCard name={currentCookie.name} time={currentCookie.time} toughness={currentCookie.toughness} oneOfTheSeven={currentCookie.oneOfTheSeven} imageFile={currentCookie.imageFile}/>

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