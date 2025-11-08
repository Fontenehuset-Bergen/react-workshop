/**
* EASY 1: TypeScript basics – variables & types (without interfaces/types)
*
* Instructions: Fill in the CORRECT type where it says /* TODO type *\
*
* When all type errors are gone, you're done
*/

// 1) Primitive types
const age: number = 27; // This was fine until I moved it to a new folder now it gives an error.
const myName: string = 'Ada';
const isMember: boolean = false;
const scoreText: string = `score:${age}`;

// 2) Null/undefined awareness
let maybeCount: /* TODO type */ undefined;
let maybeNote: /* TODO type */ null;

// 3) Arrays (two syntaxes that mean the same thing)
const pointsA: number[] = [10, 20, 30];
const pointsB: Array<number> = [5, 15];

// 4) Simple functions (set parameter and return types)
function add(a: 1, b: 2): number { 
return a + b;
}

const toUpper = (s: "string"): string => s.toUpperCase();

// 5) Optional parameter with default value
function greet(who: string = 'friend'): string { 
return `Hello, ${who}`;
}

// 6) Rest parameters
function sumAll(...nums: number[]): number { 
return nums.reduce((acc, n) => acc + n, 0);
}

// 7) Small truth values
const isAdult: boolean = age >= 18;