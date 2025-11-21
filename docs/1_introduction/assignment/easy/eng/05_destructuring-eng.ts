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

//   return `${first || last? ((first? first + " ": "") + (last? last: "")): username? username: "Unknown"}`;
// From Assignment 02
// Read this as: return first name or last name
// does last name exist?
// if last name exists, then
// check for first name, if it exists use that and a " " empty space, otherwise use "" null
// check for last name, if it exists use that, if it does not exist then use "" null
// after checking for first and last name, if those are not found then check for username
// if username is found, use that, otherwise use the string "Unknown"

const userName = u name: "Unknown";
}

// 2) Array-destructuring: get the username
export function getUsername(user: [string, string, string]): string {
// TODO

const [a, b, c] = user;

return `${user}`;
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