const myName = "Grete"
// myName = "Gertrud"


let myAge = 30
myAge = 40

const myHobbies = ["games", "codings"]
//mutates myHobbies
myHobbies.push("skiing")

//does not mutate myHobbies
const newHobbies = myHobbies.map(toUpperCase)
function toUpperCase(string: string){
    return string.toUpperCase
}

const myPerson = {
    name: "Grete",
    age: 36
}



// myPerson["hobbies" ] = ["computah"]
// console.log(myPerson)

const newPerson = {...myPerson, hobbies: ["computah", "cats"]}

console.log(myName, myAge, newHobbies, myPerson, newPerson)
