/**
 * EASY 3: Operatorer & kortslutning (&&, ||, ??, ===)
 * 
 * Instruks: Bruk riktige operatorer. Unngå feil som at '' og 0 behandles som "mangler".
 */

// 1) Nullish fallback – behold '' og 0 som gyldige verdier
export function safeTitle(input: string | number | null | undefined, fallback: string): string {
  // TODO: bruk ??
  return '';
}

// 2) Vis tekst om cond er "truthy" – ellers tom streng
export function showIf(cond: unknown, text: string): string {
  // TODO: bruk &&
  return '';
}

// 3) Korrekt fallback for tall der 0 er gyldig verdi
export function fallbackZero(n: number | null | undefined): number {
  // TODO: bruk ??
  return 0;
}

// 4) Streng sammenligning (strict equality)
export function isExactZero(n: number): boolean {
  // TODO: bruk ===
  return false;
}

// 5) Clamp: sørg for at tallet er i [min, max]
export function clamp(n: number, min: number, max: number): number {
  // TODO: bruk Math.min/Math.max eller sammenligninger
  return n;
}

// ---------------- Self-check ----------------
console.log(safeTitle('', 'Untitled'));     // ''
console.log(safeTitle(0, 'Untitled'));      // '0'
console.log(safeTitle(undefined, 'X'));     // 'X'

console.log(showIf(true, 'Hei'));           // 'Hei'
console.log(showIf(0, 'Hei'));              // ''

console.log(fallbackZero(undefined));       // 0
console.log(fallbackZero(0));               // 0

console.log(isExactZero(0));                // true
console.log(isExactZero(1));                // false

console.log(clamp(10, 0, 5));               // 5
console.log(clamp(-2, 0, 5));               // 0
console.log(clamp(3, 0, 5));                // 3
