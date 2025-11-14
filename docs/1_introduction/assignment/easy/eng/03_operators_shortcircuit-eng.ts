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

  // Integer: Number that is not a decimal number. Whole number. 1 2 3 4 5...... Not 1.3 5.6 etc ( Negative or Positive )
// Nullish coalescing: ??(fall back only at null/undefined)

// **** NULLISH COALESCEING = thing of it like "null switching" - Switch null/undefined to an accreptable value/data type

  export function fallbackZero(n: number | null | undefined): number {
    // Null/Undefined means something doesn't exist

    // TODO: use ??
    // ?? = Switch. Switches to the thing defined after it. Example: ?? 0 = Switches the value to 0. ONLY if the thing before it is null or undefined. For example: n = n ?? 0 - If n is null or undefined, it switches it to zero.
    // n = 6 ?? 0 - Nothing happens, because 6 is not null/undefined. n = 6

    // n = name of a variable that can only be a number or null/undefined
    // fallbackZero = a function that returns a number

    // if n is null/undefined use 0 instead
    // n = n ?? 0;
    // if n exists, it becomes n, if it is undefined it becomes 0
  return (n = n ?? 0) < 0? 0: n;
  }
  
  // 4) Strict equality, be careful with the type!
  export function isExactZero(n: number|string): boolean {
  // TODO: use ===
  // return false;
  // AmI supposed to remove this?

  return n === 0 || n === "0"? true: false;
  // is n the same value and data type as the number 0? if yes, then return TRUE. otherwise, return FALSE
  }
  
  // 5) make sure the number is within min and max
  export function isInRange(n: number, minimumNumber: number, maximumNumber: number): boolean {
  // TODO: use Math.min/Math.max or comparisons
  // Math.__ does calculations - is an object - math functions

  // Make n: is a number within max(number) and min(number)
    // Return a true or false
  
  return n >= Math.min(minimumNumber, maximumNumber) && n <= Math.max(maximumNumber, minimumNumber)? true: false;
  // Math.min will assign whichever value is lowest to be the min value and use that as min
  
  
  // Math.min(minimumNumber)
  // Math.min is a method - a function within an object. Like a nested function. Function that does something internally, isolated to the object is is inside of

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