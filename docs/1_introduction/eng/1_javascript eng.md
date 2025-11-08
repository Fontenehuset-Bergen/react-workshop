# Recap of required javascript knowledge

Before we can start with React, it is a great advantage if we understand some important concepts in javascript. In this document, we will look at some of the most important topics that we will encounter in the transition from just javascript to working with other frameworks like React, Vite, etc.

## immutable vs mutable

The concept is about how to create variables in javascript, we use the `const` or `let` keywords to store text, numbers, objects, arrays or other data types.

```ts
// immutable
const myString = "kristoffer";
const myNumber = 7;

// error!
myString = "nils";

// mutable
const myArray = ["data", "skydiving", "pizza"];
const myObject = { myKey1: "Some value", myKey: 2 };

// is allowed
myArray.push("duplo");
myObject.myKey1 = "a new value";
```

In JavaScript you have the ability to change these values, which makes them mutable, but in React state must be treated immutably. This means that you do not change existing objects/arrays directly, but create new copies with the changes.
The reason we do not want to mutate the values ​​is because React uses reference equality to detect changes so that the page can be updated. To change these values, we instead use [hooks](https://react.dev/reference/react/hooks) which can take care of [states](https://react.dev/learn/state-as-a-snapshot) and tell React that the page/components should be updated. We will look more at this topic in [week 3: hooks](../3_hooks/README.md)

## Operators and short-circuiting

An operator is a symbol that combines or compares values ​​and expressions. In React, we often use operators for conditional logic and conditional rendering in components.

You may encounter the following operators when writing React code

- [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators): `===`, `!===`, `<`, `>`, `<=`, `>=`
- [Logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators): `&&` (and), `||` (or), `!` (not)
- Nullish coalescing: `??` (fall back only on null/undefined)
- Optional chaining: `?.` (safe lookup without crashing into objects)
- [Ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#conditional_ternary_operator): `cond ? A : B` (conditional expression in one line)

```tsx
// here we check that the value is the same, the isEqual variable will then be true
const isEqual = 1 === 1

// Here we check that value B is true and that value C is true, if one of them is false then A will also be false
const a = b && c

// If B is null or undefined then it falls back to C, very handy if you don't know if something exists
const a = b ?? c

// If you are working with an object that you are not sure contains a key/value pair then you can use ? after key so that the program does not return an error, instead you get undefined
const myObject = { myKey: "i love pizza" }

console.log(myObject.myKey) // i love pizza
console.log(myObject.someKey) // error (can crash the program!)
console.log(myObject?.someKey) // undefined

// Combine if/else statements into single lines with ternary, you will see this often used in javascript and especially React
if {a === 1} {
console.log("a is equal to 1")
} else {
console.log("a is not equal to 1")
}

console.log(a === 1 ? "a is equal to 1" : "a is not equal to 1")

```

When we use logical operators in react components to display content, this is called short-circuiting

```tsx
function MyComponent() {
const myNumber = 1;
return (
<div>
{myNumber > 0 && (
<p>
Since the comparison to the right of the logical operator is true,
this text is displayed on the page
</p>
)}
</div>
);
}

// You will often see combinations of these techniques in a React component
function MyProfileCard(props) {
const myName = props?.name ?? "not specified"; // if props.name was undefined then we fall back to a value we know
const myName2 = props?.name ? props.name : "not specified"; // does exactly the same as the line above.

return (
<div>
<p>name: {myName}</p>
{!props?.name && (
<a>
this link will only be displayed if props.name does not exist or is
null/undefined
</a>
)}
</div>
);
}
```

## Functions and ternaries

When you create a function, you have the choice between a regular function or an arrow function, the differences between them are small and don't matter much to us in this project (you can read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)), but it can be convenient for you to understand both.

```tsx
// A very regular function
function sum(a, b) {
return a + b;
}

// Can also be written differently
const sum2 = function (a, b) {
return a + b;
};

// Arrow functions work like a function, just written differently
const sum3 = (a, b) => a + b;
```

The advantage of arrow-functions is that we can easily create anonymous functions that can be used as a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), this technique is used a lot in React. This is more advanced and we will look at this in [week 4 effects](../4_effects/README.md)

```tsx
function MyButton() {
function handleClick() {
console.log("you clicked the button");
}
return (
<button type="button" onClick={() => handleClick()}>
button text
</button>
);
}
```

## template literals

Template literals `` allow you to build strings with interpolation (${...}) and multiline text. In React, you often use them for className, aria-\*, text content, URLs, and logging.

```tsx
const first = "Ada";
const last = "Lovelace";

// Everything inside `${ ... }` is regular JavaScript: expressions, calls, ternaries, etc.
const full = `${first} ${last}`;

// Multiline (preserves line breaks)
const msg = `Hi ${first},
Welcome back!`;

// If the expression is undefined/null, the text will be "undefined"/"null" – often not desired. Use ?? ''
const title = `${middle ?? ""}`;

// We often use this in React components to string together text
function MyGreeting(props) {
return <p>{`welcome back ${props?.name ?? ""}`}</p>;
}
```

## Object/array destructuring and spreading

Destructuring allows you to extract values ​​from objects and arrays in a concise and readable way. In React, you use this all the time – especially in props, events, hooks and when mapping lists.

```ts
const user = { id: 1, name: "Kristoffer", role: "admin" };
const { name, role } = user;

console.log(name); // name = 'Kristoffer'
console.log(role); // role = 'admin'
```

Here are some reasons why we need to use this in React

- Less noise: You only retrieve the fields you need.
- Easier to deal with props (data) in components `function MyCard({ title, children }) { ... }`
- Hooks return arrays: `const [value, setValue] = useState('')`
- Passing props: `const { className, ...rest } = props; <button {...rest} />`

```tsx
// We start from this object
const post = { title: undefined };

// We can give a default value, if post.title is undefined then it will now be "Untitled"
const { title = "Untitled" } = post;

// We can create an Alias ​​(rename locally)
const { title: heading = "Untitled" } = post;
console.log(title); // not found
console.log(heading); // found!

// Without safe defaults this may crash if user/address is undefined
const user = { name: "Kristoffer", address: { city: "Hakkebakken" } };

const {
name = "Unknown",
address: { city = "Unknown city" } = {}, // <= default empty object
} = user ?? {}; // <= default empty object
```

We can also group together or spread values ​​using `...`, these are called remainder and spread operations respectively.

```tsx
// We can use spread to use the values ​​in an object or array
const myArray = [1, 2, 3, 4];

const myArrayCopy = [...myArray]; // here we copy over all the numbers
const myArrayExpanded = [...myArray, 5]; // we can use this to add new elements, here the value will be: 1,2,3,4,5

// you can do the same with objects, if we use the user example above
const myUser = { ...user };

// if the object has only one key you are interested in you can find it more easily
const userSpread = { name, ...user };
console.log(name); // easy access to the name
```

// If we have spread the values ​​and are going to use it later we must use the same ... notation to group them back

```tsx
function myFunction({ name, ...user }) {
console.log(user); // error!
console.log(...user); // correct
}
```

We can combine destructuring/spread and rest together if we want to use data in different places. Then we have much more control over where data is sent/used

```tsx
function Button({
variant = "primary",
className = "",
...resterendeVariabler
}) {
// Don't send `variant` – just the rest
return (
<button
{...resterendeVariabler}
className={`btn btn--${variant} ${className}`}
/>
);
}
```

## Asyncron code

> [!NOTE]
> mdn has a very good article on this very [topic](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) that I recommend reading as it is quite comprehensive.

In JavaScript we have the concept of synchronous or asynchronous code, what we are talking about here is the order in which your code is executed. Normally JavaScript runs down the code line by line declaring variables and running functions, but with asynchronous code we can tell JavaScript that we want functions to be able to run at a later time. We use the keywords async and await when working with asynchronous code.

You may be used to working with `.then` if you've been to fetch before

```ts
// If I call a function that takes a long time to execute, javascript waits to continue until the function is executed
const data = functionTakesTime();

// Old method
const data = fetch('/api').then(r => r.json()).then(data => { /* ... */ }).catch(err => { /* ... */ });

// If we use an asyncron function, javascript can do other things while the function is working, here we have to wait with the await keyword
const res = await fetch('/api')
const data = res.ok ? res.json() : {}
```

When we create functions that are supposed to be asyncron it is important that we use the keyword `async`

```ts
// To create an asyncron function we must use the keyword async
async function asyncFunksjonSomTarTid() {
const res = await fetch("www.example.com/data");
if (!res.ok) throw new Error(res.statusText);
return res.json();
}

// We must use the keyword await when we are going to retrieve usable data, otherwise you will get a Promise back
const data = await asyncFunksjonSomTarTid()
```
So, what is a Promise? A [Promise](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) represents a future result with three states:
- pending → waiting
- fulfilled → OK (returns data)
- rejected → failed (returns error message)

We use `await` to retrieve the final state

## Javascript modules
In React and other large projects, it is necessary to divide our code into smaller files ("modules"), each file can export things (make them "public") and other files can import them to use them.
There are two different methods to achieve this, [CommonJS or ES-Modules](https://www.w3schools.com/nodejs/nodejs_modules_esm.asp). We will only deal with the ES-Modules method in React since it is more modern and supports asyncron better. Here we use the keywords `import` and `export`

### Export/Import
We have two main ways to export data / functions in our files.
```tsx
// src/components/Button.jsx
export default function Button({ children, ...props }) {
return <button {...props}>{children}</button>;
}

// src/App.jsx
import Button from './components/Button.jsx'; // you can choose the name "Button" freely since it is a default export
```
or
```tsx
// src/components/Button.jsx
export function Button({ children, ...props }) {
return <button {...props}>{children}</button>;
}

// src/App.jsx
import { Button } from './components/Button.jsx'; // the name "Button" is set
```
This is a bit to your taste, if your file only has one component you will use then you can choose to default to a function, remember that a file can only have a single default export!
As a rule, I just use regular export in almost all components

### Dependencies
We also use this functionality all the time when we are going to retrieve functions and data from the frameworks we use, here you will see that the import path is different since the files we are retrieving from are located in a folder called `node_modules`
When we are going to use functionality from React, we only need to write "react" in the import path
```ts
import { useState } from 'react'
```
The files for React are available in `node_modules/react` after we have installed it