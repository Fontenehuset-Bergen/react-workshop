import pekkerkakeImg from "/images/pepperkake.jpg" ;
import kakemannImg from "/images/kakemann.jpg";
import kromkakeImg from "/images/kromkake.png"
import grandmasImg from "/images/grandmas.jpg";
import type { christmasCookie } from "./../assets/types/christmasCookie.tsx";

export const julekaker : christmasCookie[] = 
[
    
    { id:  1, name : "Pepperkake", time : { hours : 1, minutes : 32} , toughness : "medium", difficulty : "easy", oneOfTheSeven : true, imageFile : pekkerkakeImg},
    { id : 2, name : "Kakemann" , time : { hours : 0, minutes : 42 }, toughness : "hard", difficulty : "hard", oneOfTheSeven : false, imageFile : kakemannImg},
    { id : 3, name : "Grandmas", time : { hours : 3, minutes : 1 }, toughness : "unetable", difficulty: "medium", oneOfTheSeven : false, imageFile : grandmasImg} ,
    { id : 4 ,name : "Krumkake", time : { hours : 1, minutes: 22}, toughness :"soft", difficulty : "easy", oneOfTheSeven: true, imageFile :  kromkakeImg },
];


