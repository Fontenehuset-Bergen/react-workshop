/**
 * EASY 5: Destructuring – objekter og arrayer
 * 
 * Instruks: Bruk destructuring med fornuftige defaults. Unngå runtime-feil når felt mangler.
 */

import { stringify } from "querystring";

// 1) Object-destructuring med defaults og alias
type User = { name?: string; address?: { city?: string } };
export function userSummary(u: User): string 
{
   const name = u.name ?? "Ukjent";
   const city = u.address ? u.address.city ?? "Ukjent by" : "Ukjent by";
   
   // herfra gjør jeg det på gamle måten

  //  if(u.address != undefined && u.address.city != undefined) 
  //   u.name += ` @ ${u.address.city} ` 
  // else u.name += " @ Ukjent by";
  return `${name} @ ${city}`; 

  // - hent name med default "Ukjent"
  // - hent city fra address med default "Ukjent by"
  // - bruk sikre defaults på mellomledd (={} / ?? {})
  // return { u.name ? u.name : "Ukjent" + "@"} + { u.address ? u.address.city ? u.address.city : "Ukjent by" : "" ;
    
  // TODO:
}

// 2) Array-destructuring: hent ut brukernavnet
export function getUsername(user: [string, string, string]): string {
  // notat : vi må ned i console.log for å få vite oppsettet av array - gjør jeg dette rett ?
  // return user[1];
  const [id, userName, link] = user;
  return userName;
}

// 3) Destructuring i parameter + rest
export function pickIdAndRest(item: { id: number; [k: string]: unknown }) {
 // TODO: plukk ut id, legg resten i 'rest'


  const id = item.id;

//   const  rest  = {item.id = undefined , ...item};
  
//   return { rest};

  return id;
}

/** -------------------------- Self-check ---------------------------- 
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx docs/1_introduction/assignment/easy/05_destructuring.ts
 *  ------------------------------------------------------------------
*/

console.log(`Answer: ${userSummary({})}\t\t\tExpected: Ukjent @ Ukjent by`);
console.log(`Answer: ${userSummary({ name: 'Ada', address: { city: 'Bergen' } })}\t\t\tExpected: Ada @ Bergen`);

console.log(`Answer: ${getUsername(["12", "pålKåre", "/link"])}\t\t\tExpected: pålKåre`);

console.log(`Answer: ${JSON.stringify(pickIdAndRest({ id: 7, a: 1, b: 2 }))}\t\t\tExpected: { "id":7, "rest":{ "a":1, "b":2 }`);
