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

    id : number,
    name : string,
    time : cookingTime,
    toughness : "soft" | "medium" | "hard" | "unetable",
    oneOfTheSeven : boolean,
    imageFile : string
    
}

export const julekaker : christmasCookie[] = 
[
    
    { id:  1, name : "pepperkake", time : { hours : 1, minutes : 32} , toughness : "medium", oneOfTheSeven : true, imageFile : pekkerkakeImg},
    { id : 2, name : "kakemann" , time : { hours : 0, minutes : 42 }, toughness : "hard", oneOfTheSeven : false, imageFile : kakemannImg},
    { id : 3, name : "grandmas", time : { hours : 3, minutes : 1 }, toughness : "unetable", oneOfTheSeven : false, imageFile : grandmasImg} ,
    { id : 4 ,name : "krumkake", time : { hours : 1, minutes: 22}, toughness :"soft", oneOfTheSeven: true, imageFile :  kromkakeImg },
];

// ikke brukt ennå

function getTimeString(timeToCook : cookingTime ) : string 
{
    return `${timeToCook.hours} time og ${timeToCook.minutes} minutter` ;
}


export function ChristmasCookieCard({id, name, time, toughness, oneOfTheSeven, imageFile} : christmasCookie)
{
    // const isSevenText : string = oneOfTheSeven ? "yes" : "no";

    // har ikke lyst a bruke id her, trenger ikke å vise nummer

    return(
        <>  
  
            <div className="cookieCard">
                <img className="cookieImage" src={imageFile}/>
                <p>Cookie name : {name}</p>
                <p>Time to make : {time.hours} : {time.minutes} </p>
                <p>Hardness :  {toughness}</p>
                <p>One of the seven : {oneOfTheSeven ? "yes" : "no"}</p>
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