/**
 * EASY 2: Ternaries – sett sammen flere variabler med betingelser
 * 
 * Instruks: Implementer funksjonene med ? : (ternary).
 * Unngå if/else – målet er å vise at du mestrer uttrykksformen.
 */

// 1) Velg visningsnavn: first+last hvis minst én finnes, ellers username, ellers "Ukjent".
export function displayName(
  first?: string | null,
  last?: string | null,
  username?: string | null
): string {
  // TODO: bruk nested ternary + template literal

  
  let result : string = "";
  
  if(first != null || last != null)
  { // or you can write if(first || last)
    if(first) result += first; 
    if(last) result += last;
  }
  else if(username) result = username;
       else result = "Ukjent";

  return result;
/*
  A tenary askes a question (an if statement), if it checks out , you have one outcome, if not,  another, separated by a ":"
  like this - is this true (expression) ? yes, choose me : no, I'm the one you want
  but you could have a tenary as the first (or second or both) outcome. The result of that tenary would be the answer to one of the first ones (or second one) .
  Like this : (is this true (expression) ? (yes, but I don't have the answer - let me check) (epression ? ok, i chooce option1 : ok, i choose option 2) : no, I'm the one you want (same as before);
  so the first outcome is the result of the second tenary (in parentes), but the last one is in this example the same. I put a parentes on the second tenary to show that
  the answer is the answer to the first option in the first tenary, but that  is not nessesary.

  But you can have another tenary as the result of the first answer or last(or both) answers  of the second tenary and another tenary as the second answer of the main/start tenary. This is when it gets really messy.
  
  is this true (epression) : ((yes, but I dont know) expression ? ((ok, i also have two options) expression ? first answer: last answer) : ok, i chooce option 2 (same as before) ): ((I have options too) expression ? myoption1 : myoption2 ) ; 

  You can look at it this way : You have one main tenary - the rest are sub tenaries that, in the end , would be the two answers to the main tenary.


*/
  return `${ first || last ?  (first ? first + (last ? last : "") : last)  : ( username ? username : "Ukjent") }`;
}




// 2) Karakter basert på poeng
// 90+ = "A", 80+ = "B", 70+ = "C", ellers "F"
export function grade(score: number): 'A' | 'B' | 'C' | 'F' {
  // TODO: ternary-kjede
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F" ;
}

// 3) Badge: "Admin Pro", "Admin", "Pro", "Member"
export function badge(isAdmin: boolean, isPro: boolean): string {
  // TODO: kombiner flere ternaries/strings

  // return isAdmin ? isPro ?  "Admin Pro" : "Pro" : "Admin" : "Member"
  return  `${isAdmin ? isPro ? "Admin Pro" : "Admin" : isPro ?  "Pro" : "Member" }`;
}

// 4) Tekst for antall (1 => "1 item", ellers "N items")
export function countLabel(n: number): string {
  // TODO: ternary for plural
  return n === 1 ? "1 item " : `${n} items`;
}

/** -------------------------- Self-check ---------------------------- 
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx docs/1_introduction/assignment/easy/02_ternaries.ts
 *  ------------------------------------------------------------------
*/

console.log(`Answer: ${displayName('Ada', null, 'ada123')}\t\t\tExpected: Ada`);
console.log(`Answer: ${displayName(undefined, undefined, 'linus')}\t\t\tExpected: linux`);
console.log(`Answer: ${displayName(undefined, undefined, undefined)}\t\t\tExpected: undefiend`);

console.log(`Answer: ${grade(95)}\t\t\tExpected: A`);
console.log(`Answer: ${grade(81)}\t\t\tExpected: B`);
console.log(`Answer: ${grade(74)}\t\t\tExpected: C`);
console.log(`Answer: ${grade(12)}\t\t\tExpected: F`);

console.log(`Answer: ${badge(true, true)}\t\t\tExpected: Admin Pro`);
console.log(`Answer: ${badge(true, false)}\t\t\tExpected: Admin`);
console.log(`Answer: ${badge(false, true)}\t\t\tExpected: Pro`);
console.log(`Answer: ${badge(false, false)}\t\t\tExpected: Member`);

console.log(`Answer: ${countLabel(1)}\t\t\tExpected: 1 item`);
console.log(`Answer: ${countLabel(3)}\t\t\tExpected: 3 items`);
