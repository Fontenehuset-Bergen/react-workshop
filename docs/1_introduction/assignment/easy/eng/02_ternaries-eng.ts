/**
 * EASY 2: Ternaries – sett sammen flere variabler med betingelser
 * 
 * Instruks: Implementer funksjonene med ? : (ternary).
 * Unngå if/else – målet er å vise at du mestrer uttrykksformen.
 */

// 1) Velg visningsnavn: first+last hvis minst én finnes, ellers username, ellers "Ukjent".
// 1) Choose display name: first+last if at least one exists, otherwise username, otherwise "Unknown".
export function displayName(
  first?: string | null,
  last?: string | null,
  username?: string | null
): string {
  // TODO: bruk nested ternary + template literal
  // TODO: use nested ternary + template literal
  return `${first || last? ((first? first + " ": "") + (last? last: "")): username? username: "Unknown"}`;
}

const aPerson: string = displayName("Erin", "Wajca");
console.log(`Username is ${displayName("Erin")}`);

// 2) Karakter basert på poeng
// 90+ = "A", 80+ = "B", 70+ = "C", ellers "F"
// 2) Grade based on points
// 90+ = "A", 80+ = "B", 70+ = "C", otherwise "F"
export function grade(score: number): 'A' | 'B' | 'C' | 'F' {
  // TODO: ternary-kjede
  // TODO: ternary chain

return score >= 90? "A": score >= 80? "B": score >= 70? "C": "F";
}

// 3) Badge: "Admin Pro", "Admin", "Pro", "Member"
export function badge(isAdmin: boolean, isPro: boolean): string {
  // TODO: kombiner flere ternaries/strings
  // TODO: combine multiple ternaries/strings
  return `${isAdmin? (isPro? "Admin Pro": "Admin"): (isPro? "Pro": "Member")}`;
}

const userPrivs: string = badge(true, true);
console.log(userPrivs);



// 4) Tekst for antall (1 => "1 item", ellers "N items")
// 4) Text for quantity (1 => "1 item", otherwise "N items")
export function countLabel(n: number): string {
  // TODO: ternary for plural
return n === 1? "1 item": `${n} items`;
}




function getUserAccessLevel(userTag: string): number {
  // 0 = Admin Pro, 1 = Admin, 2 = Pro
  return userTag === "Admin Pro"? 0: userTag === "Admin"? 1: 2;
}
// console.log(getUserAccessLevel("Pro"));
console.log(`User access level is ${getUserAccessLevel("Pro")}`);





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
