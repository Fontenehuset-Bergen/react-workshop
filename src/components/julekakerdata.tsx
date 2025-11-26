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
