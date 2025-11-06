/**
 * EASY 5: Destructuring – objekter og arrayer
 * 
 * Instruks: Bruk destructuring med fornuftige defaults. Unngå runtime-feil når felt mangler.
 */

// 1) Object-destructuring med defaults og alias
type User = { name?: string; address?: { city?: string } };
export function userSummary(u: User): string {
  // TODO:
  // - hent name med default "Ukjent"
  // - hent city fra address med default "Ukjent by"
  // - bruk sikre defaults på mellomledd (={} / ?? {})
  return '';
}

// 2) Array-destructuring: hent første og siste verdi
export function firstAndLast<T>(arr: T[]): [T | undefined, T | undefined] {
  // TODO: destructuring for første; siste kan du hente via indeks eller slice
  return [undefined, undefined];
}

// 3) Destructuring i parameter + rest
export function pickIdAndRest(item: { id: number; [k: string]: unknown }) {
  // TODO: plukk ut id, legg resten i 'rest'
  const id = 0;
  const rest = {};
  return { id, rest };
}

// ---------------- Self-check ----------------
console.log(userSummary({})); // "Ukjent @ Ukjent by"
console.log(userSummary({ name: 'Ada', address: { city: 'Bergen' } })); // "Ada @ Bergen"

console.log(firstAndLast([1, 2, 3])); // [1, 3]
console.log(firstAndLast<string>([])); // [undefined, undefined]

console.log(pickIdAndRest({ id: 7, a: 1, b: 2 })); // { id:7, rest:{ a:1, b:2 } }
