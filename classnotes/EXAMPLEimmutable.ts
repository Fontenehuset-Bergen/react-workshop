const myNAme = "erin";
// Not changing, mutable

myName = "ole";
// Will cause an error because myName is a const

let myAge = 38
// let is a changable aka "mutatable" variable

myAge = 39
// myAge will now be 39

myAge = "40"
// This will be an issue because this value is now a string, not a number
// Using typescript will show these kinf of errors as you go, the red underlines show that there is some kind of problem
// In this case the problem is a value type mismatch

const myHobbies = ["computah", "cooking"];
// How to mutate this const?
myHobbies.push("drawing");
// This would change the entire value of myHobbies to "drawing", not just add it
// It makes a new value to be the constant value of myHobbies
// Push does not make an error because of this

// ----- Converting this to a useState
const [myHobbies] = useState(["computers", "cooking"]);

const newHobbies = myHobbies.map((item)=> item.toUpperCase());
// This does not mutate myHobbies

function toUpperCase(string: string) {
    return string.toUpperCase()
};
// Takes in a string, returns it, and transforms it to upper case
// Does the same as the way it is written with =>

// In react rather than changing values of components, you would assign new variables

const newName = myName.length > 4 ? "ole" : myNAme;
// If my name is longer than 4 characters then make it old, if not keep it myName


// Objects
const aPerson = {
    name: "erin",
    age: 38
};

aPerson["hobbies"] = ["computer"];
// Adding new values to the value of aPerson?
// Adds a new key with a value of computer


const newPerson = {...aPerson};
// Takes all of the values of aPerson and brings it into newPerson
const newPerson = {...aPerson, hobbies: ["computer"]};
// You can add new values in this way
// This way does not change the value of aPerson, it creates a new combined variable without altering the original state


// Use States

const [person, updatePerson] = useState({
    name: "Erin",
    age: 38,
});
// This creates a useState that has an array of keys and values