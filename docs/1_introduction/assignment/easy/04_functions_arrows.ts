/**
 * EASY 4: Funksjoner – deklarasjoner, arrow-funksjoner og ternaries
 * 
 * Instruks: Implementer begge varianter der det er spesifisert. Bruk ternary der det passer.
 */

// 1) Skriv både deklarasjon OG arrow med implicit return (to varianter av samme funksjon)
export function add(a: number, b: number): number {
  // TODO
  return 0;
}
export const add2 = (a: number, b: number): number => {
  // TODO (implicit return mulig)
  return 0;
};

// 2) Gjør om if/else til en ternary (returner "even"/"odd")
export const evenOdd = (n: number): 'even' | 'odd' => {
  // TODO: ternary på n % 2 === 0
  return 'even';
};

// 3) Default-parameter og template literal
export const greet = (name: string = 'venn'): string => {
  // TODO
  return '';
};

// 4) Lag en liten closure: makeAdder(step) -> (n) => n + step
export function makeAdder(step: number) {
  // TODO: returner en arrow-funksjon som bruker step
  return (n: number) => n;
}

// ---------------- Self-check ----------------
console.log(add(2, 3), add2(2, 3)); // 5 5
console.log(evenOdd(2), evenOdd(3)); // "even" "odd"
console.log(greet(), greet('Ada'));  // "Hei, venn" "Hei, Ada"
const plus5 = makeAdder(5);
console.log(plus5(10));              // 15
