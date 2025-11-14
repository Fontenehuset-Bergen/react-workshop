/**
* EASY 3: Operators & Short Circuit (&&, ||, ??, ===)
*
* Instructions: Use correct operators. Avoid errors like '' and 0 being treated as "missing".
*/

// 1) Nullish fallback – keep '' and 0 as valid values
export function safeTitle(input: string | number | null | undefined, fallback: string): string {
  // TODO: use ??
  return '';
  }
  
  // 2) Show text if cond is "truthy" – otherwise empty string
  export function showIf(cond: unknown, text: string): string {
  // TODO: use &&
  return cond? text: "";
  }
  
  // 3) Correct fallback that returns a number, if the number is not a positive integer return 0

// Nullish coalescing: ??(fall back only at null/undefined)

  export function fallbackZero(n: number | null | undefined): number {
  // TODO: use ??

  // n = name of a variable that can only be a number or null/undefined
  // fallbackZero = a function that returns a number
  return n ?? 0;
  // return n >= 0? n: 0;
  }
  
  // 4) Strict equality, be careful with the type!
  export function isExactZero(n: number|string): boolean {
  // TODO: use ===
  // return false;
  // AmI supposed to remove this?

  return n === 0? true: false;
  // is n the same value and data type as the number 0? if yes, then return TRUE. otherwise, return FALSE
  }
  
  // 5) make sure the number is within min and max
  export function isInRange(n: number, min: number, max: number): boolean {
  // TODO: use Math.min/Math.max or comparisons
  return false;
  }
  
  /** -------------------------- Self-check ----------------------------
  * Run the following command to see if your code ran
  * npx tsx docs/1_introduction/assignment/easy/03_operators_shortcircuit.ts
  * ------------------------------------------------------------------
  */
  
  console.log(`Answer: ${safeTitle('', 'Untitled')}\t\t\tExpected: `);
  console.log(`Answer: ${safeTitle(0, 'Untitled')}\t\t\tExpected: 0`);
  console.log(`Answer: ${safeTitle(undefined, 'X')}\t\t\tExpected: X`);
  
  console.log(`Answer: ${showIf(true, 'Hello')}\t\t\tExpected: Hello`);
  console.log(`Answer: ${showIf(0, 'Hello')}\t\t\tExpected: `);
  
  console.log(`Answer: ${fallbackZero(undefined)}\t\t\tExpected: 0`);
  console.log(`Answer: ${fallbackZero(10)}\t\t\tExpected: 10`);
  console.log(`Answer: ${fallbackZero(null)}\t\t\tExpected: 0`);
  
  console.log(`Answer: ${isExactZero(0)}\t\t\tExpected: true`);
  console.log(`Answer: ${isExactZero(1)}\t\t\tExpected: false`);
  console.log(`Answer: ${isExactZero("0")}\t\t\tExpected: false`);
  
  console.log(`Answer: ${isInRange(3, 0, 5)}\t\t\tExpected: true`);
  console.log(`Answer: ${isInRange(-2, 0, 5)}\t\t\tExpected: false`);
  console.log(`Answer: ${isInRange(10, 0, 5)}\t\t\tExpected: false`);