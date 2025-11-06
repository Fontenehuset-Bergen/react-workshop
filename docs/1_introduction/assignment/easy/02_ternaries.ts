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
  return '';
}

// 4) Tekst for antall (1 => "1 item", ellers "N items")
export function countLabel(n: number): string {
  // TODO: ternary for plural
  return '';
}

// ---------------- Self-check ----------------
console.log(displayName('Ada', null, 'ada123'));  // "Ada "
console.log(displayName(undefined, undefined, 'linus')); // "linus"
console.log(displayName(undefined, undefined, undefined)); // "Ukjent"

console.log(grade(95)); // "A"
console.log(grade(81)); // "B"
console.log(grade(74)); // "C"
console.log(grade(12)); // "F"

console.log(badge(true, true));   // "Admin Pro"
console.log(badge(true, false));  // "Admin"
console.log(badge(false, true));  // "Pro"
console.log(badge(false, false)); // "Member"

console.log(countLabel(1)); // "1 item"
console.log(countLabel(3)); // "3 items"
