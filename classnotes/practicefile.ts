/*Practicing typescript functions with ternaries

FROM HOMEWORK ASSIGNMENT: ../docs/1_introduction/assignment/easy/eng/02_ternaries-eng.ts

3) Badge: "Admin Pro", "Admin", "Pro", "Member"
export function badge(isAdmin: boolean, isPro: boolean): string {
  // TODO: kombiner flere ternaries/strings
  // TODO: combine multiple ternaries/strings
  return `${isAdmin? (isPro? "Admin Pro": "Admin"): (isPro? "Pro": "Member")}`;
}

npm tsx /classnotes/practicefile.ts

*/

function getUserAccessLevel(userTag: string): number {
    // 0 = Admin Pro, 1 = Admin, 2 = Pro
    return userTag === "Admin Pro"? 0: userTag === "Admin"? 1: 2;
}
console.log(getUserAccessLevel("Admin Pro"));