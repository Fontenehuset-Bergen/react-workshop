/**
 * EASY 3: Operatorer & kortslutning (&&, ||, ??, ===)
 * 
 * Instruks: Bruk riktige operatorer. Unngå feil som at '' og 0 behandles som "mangler".
 */

// 1) Nullish fallback – behold '' og 0 som gyldige verdier
export function safeTitle(input: string | number | null | undefined, fallback: string): string {

  // TODO: bruk ??
  // input = typeof(input) == "number" ? input.toString() : input;

  return (input !== null && input !== undefined) ? (typeof(input) == "number" ? input.toString() : input): fallback;

  // return  input ?? fallback ;
}

// 2) Vis tekst om cond er "truthy" – ellers tom streng
export function showIf(cond: unknown, text: string): string {

  // TODO: bruk &&
  return cond ? text  : "";
}

// 3) Korrekt fallback som returnerer et tall, hvis tallet ikke er en positiv integer returner 0
export function fallbackZero(n: number | null | undefined): number {
  // TODO: bruk ??
  // n = n ?? 0;
  return (n = n ?? 0) < 0 ? 0 : n;

    // n = n ?? 0;
  // return n !== null && n !== undefined ? n : 0;
  // return n ?? 0;

  // return !n || n < 0 ? 0 : n;
   
  // return  n (n ?? 0)

}

// 4) Streng sammenligning (strict equality), pass på typen!
export function isExactZero(n: number|string): boolean {
  // TODO: bruk ===
  return (n === 0 || n === "0") ? true : false;
  // return false;
}

// 5) sørg for at tallet er innenfor min og max
export function isInRange(n: number, min: number, max: number): boolean {
  // TODO: bruk Math.min/Math.max eller sammenligninger
  return false;
}

/** -------------------------- Self-check ---------------------------- 
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx docs/1_introduction/assignment/easy/03_operators_shortcircuit.ts
 *  ------------------------------------------------------------------
*/

console.log(`Answer: ${safeTitle('', 'Untitled')}\t\t\tExpected: `);
console.log(`Answer: ${safeTitle(0, 'Untitled')}\t\t\tExpected: 0`);
console.log(`Answer: ${safeTitle(undefined, 'X')}\t\t\tExpected: X`);

console.log(`Answer: ${showIf(true, 'Hei')}\t\t\tExpected: Hei`);
console.log(`Answer: ${showIf(0, 'Hei')}\t\t\tExpected: `);

console.log(`Answer: ${fallbackZero(undefined)}\t\t\tExpected: 0`);
console.log(`Answer: ${fallbackZero(10)}\t\t\tExpected: 10`);
console.log(`Answer: ${fallbackZero(null)}\t\t\tExpected: 0`);

console.log(`Answer: ${isExactZero(0)}\t\t\tExpected: true`);
console.log(`Answer: ${isExactZero(1)}\t\t\tExpected: false`);
console.log(`Answer: ${isExactZero("0")}\t\t\tExpected: false`);

console.log(`Answer: ${isInRange(3, 0, 5)}\t\t\tExpected: true`);
console.log(`Answer: ${isInRange(-2, 0, 5)}\t\t\tExpected: false`);
console.log(`Answer: ${isInRange(10, 0, 5)}\t\t\tExpected: false`);