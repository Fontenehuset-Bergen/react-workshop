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




// ---------------- Self-check ----------------
console.log(add(2, 3)); // 5 
console.log(evenOdd(2), evenOdd(3)); // "even" "odd"
