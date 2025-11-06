/**
 * EASY 1: TypeScript grunnlag – variabler & typer (uten interfaces/types)
 * 
 * Instruks: Fyll inn KORREKT type der det står /* TODO type *\
 * Målet er at fila kompilerer uten feil, og at self-check gir riktig output.
 * 
 * for å kjøre filen kan du lime inn følgende kode i terminalen:
 * npx ts-node docs/1_introduction/assignment/easy/01_ts_basics.ts
 */

// 1) Primitive typer
const age: /* TODO type */ = 27;
const myName: /* TODO type */ = 'Ada';
const isMember: /* TODO type */ = false;
const scoreText: /* TODO type */ = `score:${age}`;

// 2) Null/undefined-bevissthet
let maybeCount: /* TODO type */ = undefined;     
let maybeNote: /* TODO type */ = null;          

// 3) Arrays (to syntakser som betyr det samme)
const pointsA: /* TODO type */ = [10, 20, 30];  
const pointsB: /* TODO type */ = [5, 15];   

// 4) Enkle funksjoner (angi parameter- og returtyper)
function add(a: /* TODO type */, b: /* TODO type */): /* TODO type */ {
  return a + b;
}

const toUpper = (s: /* TODO type */): /* TODO type */ => s.toUpperCase();

// 5) Valgfri parameter med default-verdi
function greet(who: /* TODO type */ = 'venn'): /* TODO type */ {
  return `Hei, ${who}`;
}

// 6) Rest-parametere
function sumAll(...nums: /* TODO type */): /* TODO type */ {
  return nums.reduce((acc, n) => acc + n, 0);
}

// 7) Små sannhetsverdier
const isAdult: /* TODO type */ = age >= 18;
