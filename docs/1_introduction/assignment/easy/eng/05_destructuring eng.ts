/**
* EASY 5: Destructuring – objects and arrays
*
* Instructions: Use destructuring with sensible defaults. Avoid runtime errors when fields are missing.
*/

// 1) Object-destructuring with defaults and alias
type User = { name?: string; address?: { city?: string } };
export function userSummary(u: User): string {
// TODO:
// - get name with default "Unknown"
// - get city from address with default "Unknown city"
// - use safe defaults on intermediate links (={} / ?? {})
return '';
}

// 2) Array-destructuring: get the username
export function getUsername(user: [string, string, string]): string {
// TODO
return "";
}

// 3) Destructuring in parameter + rest
export function pickIdAndRest(item: { id: number; [k: string]: unknown }) {
// TODO: pick id, put rest in 'rest'
const id = 0;
const rest = {};
return { id, rest };
}

/** -------------------------- Self-check ----------------------------
* Run the following command to see if your code ran
* npx tsx docs/1_introduction/assignment/easy/05_destructuring.ts
* ------------------------------------------------------------------
*/

console.log(`Answer: ${userSummary({})}\t\t\tExpected: Unknown @ Unknown city`);
console.log(`Answer: ${userSummary({ name: 'Ada', address: { city: 'Bergen' } })}\t\t\tExpected: Ada @ Bergen`);

console.log(`Answer: ${getUsername(["12", "pålKåre", "/link"])}\t\t\tExpected: pålKåre`);

console.log(`Answer: ${JSON.stringify(pickIdAndRest({ id: 7, a: 1, b: 2 }))}\t\t\tExpected: { "id":7, "rest":{ "a":1, "b":2 }`);