/**
 * EASY 4: Funksjoner – deklarasjoner, arrow-funksjoner og ternaries
 * 
 * Instruks: Implementer begge varianter der det er spesifisert. Bruk ternary der det passer. D
 */

// 1) Skriv skriv om funksjonene slik at den blir en arrow function
export function add(a: number, b: number): number {
  return a+b;
}

// 2) Gjør skriv om denne arrow-funksjonen til en vanlig function og fiks logikken slik at den gir tibake riktig svar
export const evenOdd = (n: number): 'even' | 'odd' => {
  // tips: du kan sjekke om et tall er delbart på 2 med n % 2 === 0
  return 'even';
};


/** -------------------------- Self-check ---------------------------- 
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx docs/1_introduction/assignment/easy/04_functions_arrows.ts
 *  ------------------------------------------------------------------
*/

console.log(`Answer: ${add(2, 3)}\t\t\tExpected: 5`);
console.log(`Answer: ${evenOdd(2), evenOdd(3)}\t\t\tExpected: even odd`);