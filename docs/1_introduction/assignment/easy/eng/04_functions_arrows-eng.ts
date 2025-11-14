/**
* EASY 4: Functions – declarations, arrow functions and ternaries
*
* Instructions: Implement both variants where specified. Use ternary where appropriate. D
*/

// 1) Rewrite the functions so that it becomes an arrow function
export function add(a: number, b: number): number {
  return a+b;
  }
  
  // 2) Rewrite this arrow function into a regular function and fix the logic so that it returns the correct answer
  export const evenOdd = (n: number): 'even' | 'odd' => {
  // tip: you can check if a number is divisible by 2 with n % 2 === 0
  return 'even';
  };

  export function evenOdd(n: number): string {
    return n % 2 === 0? "Even": "Odd";
  }
  
  /** -------------------------- Self-check ----------------------------
  * Run the following command to see if your code ran
  * npx tsx docs/1_introduction/assignment/easy/04_functions_arrows.ts
  * ------------------------------------------------------------------
  */
  
  console.log(`Answer: ${add(2, 3)}\t\t\tExpected: 5`);
  console.log(`Answer: ${evenOdd(2), evenOdd(3)}\t\t\tExpected: even odd`);