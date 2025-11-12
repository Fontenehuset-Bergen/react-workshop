/**
 * EASY 1: TypeScript grunnlag – variabler & typer (uten interfaces/types)
 * 
 * Instruks: Fyll inn KORREKT type der det står /* TODO type *\
 * 
 * Når alle type errors er vekke er du ferdig
 */

// 1) Primitive typer
const age: number = 27;
const myName: string = 'Ada';
const isMember: boolean = false;
const scoreText: string = `score:${age}`;

// 2) Null/undefined-bevissthet
let maybeCount: undefined = undefined;     
let maybeNote: null = null;          

// 3) Arrays (to syntakser som betyr det samme)
const pointsA: Array<number> = [10, 20, 30];  
const pointsB:  Array<number> = [5, 15];   

// 4) Enkle funksjoner (angi parameter- og returtyper)
function add(a: number, b: number): number {
  return a + b;
}

const toUpper = (s: string): string => s.toUpperCase();

// 5) Valgfri parameter med default-verdi
function greet(who: string = 'venn'): string {
  return `Hei, ${who}`;
}

// 6) Rest-parametere
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

// 7) Små sannhetsverdier
const isAdult: /* TODO type */ = age >= 18;
