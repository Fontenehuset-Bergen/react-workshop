// types for christmasCookie

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
