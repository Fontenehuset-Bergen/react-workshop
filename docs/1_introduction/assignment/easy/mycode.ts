

// ghost operator - the one that is not there and yet, it exists :-)
// some things are errors and ----- (like "status") because of typescript

// this might be something you know, but there might be some things here that you don't


let isPageActive = false;
let status = "unknown";

if(isPageActive)  status = "Your in that page";  // we dont need {} when there is only one statement
else  status = "Your in another page"

// the if(pageIsActive) is the same as if(pageIsActive == true) or if(pageIsActive != false)

// this also applies to other data types, like numbers

let numStudents = 5;
let message = "dont know how many yet"

if(numStudents)  message = `There are ${numStudents} on campus today`;
else message = "There are no students on campus today";

// if the number is above 0 (zero) - the if(numStudents) expression is true

//  applies also to  html elements

const myDiv = document.querySelector("#myDiv");
if(myDiv) myDiv.textContent = "Hello world";

// if the elements exists (not null), its ok to continue, the expression is true - don't need to console.log

// as long as a variable or const is not Null or not 0, its true 
// not quite sure about numbers below zero, like -1, i think theyre false and the expression won't continue

function getStudentNumber()
{
    let studentNumber;
    /* something happens here that finds the student number */
    /* it becomes 2 */

    return studentNumber;  // this is 2
     
    if(studentNumber === 1) // this never happens because the function returns something and ends
    {
        /*do something ; */
    }
 
}   

// if you have an array of students, called students, you could

const students = ["Harald", "Erin", "Robert", "Ørjan", "Niko", "Eilif", "Julie"];
const studentNameDiv = document.querySelector("#studentNameDiv");
console.log(studentNameDiv);  // check if its there

studentNameDiv.textContent = students[getStudentNumber()];  // that would be Robert, the function returns 2 

// you could also write

let nr = getStudentNumber();  // could also be a const if its not supposed to change
studentNameDiv.textContent = students[nr];  

// but this is not nessesary if youre not gonna use the "let nr" later on 

// in typescript this would be :


function getStudentNumber() : number // we have to tell what the functions returns, in this case a number, void if it returns nothing  ( function returnsNothing() : void )
{
    let studentNumber : number = 0;  // you have to set a start value i think, you have to use "number | undefined" if its supposed to also allow an undefined value

    // becomes 2 here somewhere

    return studentNumber;  // you have to do this, because you've said that this function will return a number

}

const students : Array<string> = ["Harald", "Erin", "Robert", "Ørjan", "Niko", "Eilif", "Julie"];

const studentNameDiv = document.querySelector("#studentNameDiv");

if(studentNameDiv) studentName.textContent = students[getStudentNumber()]; // that would be Robert and we have to check if theh html element exists - typescript rule 

// you could write :
if(studentNameDiv != null) studentName.textContent = students[getStudentNumber()];  // same thing, but you have to check the element for it not being null, because its not a boolean - if(studentNameDiv == true) would not work, I think (not sure)

// ternaries

/*
    You could look at a ternary as if it is a mini-function, in the end it returns a value 

*/

let numStudents = 5;
let message = "dont know how many yet"

message = numStudents ?  `There are ${numStudents} on campus today` : "There are no students on campus today";

// instead of using the message let variable, you could put it directly in a return statement in a function that supplies the message instead

function getMessage(num : number) : string   // the num represents numStudents which we are going to pass as an argument or parameter (not quite sure about the definition here) in this function
{
    return num ? `There are ${num} on campus today` : "There are no students on campus today";
 
    // you could also write her - but not nessesary

    const stringToReturn : string = num ? `There are ${num} on campus today` : "There are no students on campus today";
    return stringToReturn;

}

// we call this function like this

message = getMessage(numStudents);   // it returns the result of the ternary - we supply the function with the numStudents that is 5 - the result being "There are 5 students on campus today"


// this would be with a html element

const displayMessageDiv = document.querySelector("#displayMessageDiv"),
if(displayMessageDiv) displayMessageDiv.textContent = getMessage(numStudents);   // returns the message directly into textContent
