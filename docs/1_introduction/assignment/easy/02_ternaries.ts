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
  return '';
}

// 2) Karakter basert på poeng
// 90+ = "A", 80+ = "B", 70+ = "C", ellers "F"
export function grade(score: number): 'A' | 'B' | 'C' | 'F' {
  // TODO: ternary-kjede
  return 'F';
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
  return '';
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
