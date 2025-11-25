import { ChristmasCookieList } from "./JuleBakstGalleri"
import { julekaker } from "./JuleBakstGalleri"
import  defaultBackground  from  "./../../../public/images/background.jpg"
import BackgroundImage, { animType } from "./backgroundImage";
 
// export type cookingTime = {
//     minutes : number,
//     hours : number
// }

// export interface christmasCookie {

//     name : string,
//     time : cookingTime,
//     toughness : "soft" | "medium" | "hard" | "unetable",
//     oneOfTheSeven : boolean,
//     imageFile : string
    
// }
// export const julekaker : christmasCookie[] = 
// [
    
//     { name : "pepperkake", time : { hours : 1, minutes : 32} , toughness : "medium", oneOfTheSeven : true, imageFile : pekkerkakeImg},
//     { name : "kakemann" , time : { hours : 0, minutes : 42 }, toughness : "hard", oneOfTheSeven : false, imageFile : kakemannImg},
//     { name : "grandmas", time : { hours : 3, minutes : 1 }, toughness : "unetable", oneOfTheSeven : false, imageFile : kromkakeImg} ,
//     { name : "krumkake", time : { hours : 1, minutes: 22}, toughness :"soft", oneOfTheSeven: true, imageFile :  grandmasImg },
// ];


function App()
{
    return(
    <>
        <BackgroundImage cssClassName="backgroundImage" imageFile={defaultBackground} animNumber={animType.FadeIn} animDuration="1s"  />
        <ChristmasCookieList cookies={julekaker} /> // fungerer ikke

   </>
    )
}