/**
 * MEDIUM: Array – map & sort (uten å mutere originalen)
 * Mål:
 * - Bruke map for å transformere data
 * - Sortere tall/strenger/objekter
 * - Lage sorterings-kopier (ikke muter originalen)
 */

// 1) doubleAll: returner ny liste med alle tall * 2
export function doubleAll(nums: number[]): number[] 
{
  //  spør hvorfor dette ikke funker
  // const newArray : Array<number> =  [...nums];
  // newArray.forEach(item => { item = item*2;}); 
 

  return nums.map((item : number) => item * 2);

}

// 2) trimAll: trim whitespace på hvert navn
export function trimAll(names: string[]): string[] 
{
  // TODO: 
 
  return names.map((item : string) => { item.trim(); });
  
}// 3) sortedNumbersAsc: returner SORTERT KOPI stigende (ikke mutér input!)
export function sortedNumbersAsc(nums: number[]): number[] {
  // TODO: [...nums].sort((a,b)=>a-b
  // ok, her ser det ut som Kristoffer faktisk har skrevet svaret i oppgaven.
  // etter mye om og men fant jeg ut at dette var det riktige, selv  om man skulle tro at man skulle gjøre noe annet :-)

  return [...nums].sort((a, b) => a-b);
}

// 4) sortedNumbersDesc: returner sortert kopi synkende
export function sortedNumbersDesc(nums: number[]): number[] {
  // TODO
  return [...nums].sort((a, b) => b - a)
}

// 5) case-insensitive sort på strenger (kopi)
export function sortedNamesCaseInsensitive(names: string[]): string[] {
  
  // TODO:
  return [...names].sort((a, b) =>{ return a.toLowerCase().localeCompare(b.toLowerCase()); });
}

// 6) sorter objekter på 'name' (A→Å) som kopi
type User = { id: number; name: string; age: number };
export function sortUsersByName(users: User[]): User[] {

    return [...users].sort((a, b) => a.localCompaer(name)  // Tips: bruk localeCompare på n
}

// 7) sorter objekter på 'age' (lav→høy) som kopi
export function sortUsersByAge(users: User[]): User[] {
  // TODO: numerisk sortering
  return [];
}

/** -------------------------- Self-check ----------------------------
 *  Kjør følgende kommando for å se om koden din kjørte
 *   npx tsx docs/1_introduction/assignment/medium/07_array_map_sort.ts  
 *  ------------------------------------------------------------------
*/
const nums = [3, 1, 2];
console.log(`Answer: ${JSON.stringify(doubleAll(nums))}\t\t\tExpected: [6,2,4]`);
console.log(`Answer: ${JSON.stringify(trimAll(['  Ada ', ' Linus']))}\t\tExpected: ["Ada","Linus"]`);

const asc = sortedNumbersAsc(nums);
const desc = sortedNumbersDesc(nums);
console.log(`Answer: ${JSON.stringify(asc)}\t\t\tExpected: [1,2,3]`);
console.log(`Answer: ${JSON.stringify(desc)}\t\t\tExpected: [3,2,1]`);
console.log(`Answer: ${JSON.stringify(nums)}\t\t\tExpected: [3,1,2]`);

console.log(`Answer: ${JSON.stringify(sortedNamesCaseInsensitive(['b','A','å']))}\tExpected: ["A","b","å"]`);

const users: User[] = [
  { id: 1, name: 'Linus', age: 50 },
  { id: 2, name: 'ada', age: 36 },
  { id: 3, name: 'Grace', age: 45 },
];
console.log(`Answer: ${JSON.stringify(sortUsersByName(users).map(u => u.name))}\tExpected: ["ada","Grace","Linus"]`);
console.log(`Answer: ${JSON.stringify(sortUsersByAge(users).map(u => u.age))}\t\tExpected: [36,45,50]`);
console.log(`Answer: ${JSON.stringify(users.map(u => u.name))}\t\tExpected: ["Linus","ada","Grace"]`);
