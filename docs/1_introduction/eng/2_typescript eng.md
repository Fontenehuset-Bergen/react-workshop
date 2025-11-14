# Typescript
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) (abbreviated as TS) is just regular JavaScript, but with data types included. You write regular JavaScript in your files, but you add extra type information that explains what you expect variables and functions to work with.
All the type information that we add via Typescript is converted to regular JavaScript when our code is run, so Typescript only exists when you are developing your code to make it easier for you to find errors. We say that "typescript compiles to regular js" so that the browser and server can understand our code.

So why should we care about Typescript if it just turns into Javascript?
- We get fewer bugs in our code
- The editor screams if you use the wrong types
- We get better autocomplete and suggestions
- You see right away what functions expect from arguments and returns
- Safer when changing existing code
- Types let you do it yourself

## Basic types
[Primitive values](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
```ts
let n: number = 42;
let s: string = 'hi';
let ok: boolean = true;
let maybe: null | undefined; // can be null or undefined
```
[Arrays and objects](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
```ts
let names: string[] = ['Ada', 'Linus'];
let nums: Array<number> = [1, 2, 3]; // alternative syntax

type Person = {
id: number;
name: string;
email?: string; // ? = optional
readonly role: 'user' | 'admin'; // cannot be changed afterwards
};

const p: Person = { id: 1, name: 'Ada', role: 'admin' };
```
You don't need to write the type every time. TS often guesses (type inference).
```ts
const count = 0; // infer: number
const users = []; // infer: any[] (empty array → give hint!)
const users2: Person[] = []; // better
```

## Features
[Parameters and return value](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
```ts
function add(a: number, b: number): number { 
return a + b;
}

const greet = (name: string = 'friend'): string => `Hello, ${name}!`;
```

Optional and rest parameters
```ts
function log(message: string, level?: 'info' | 'warn' | 'error') { /* ... */ }
function sumAll(...nums: number[]): number { 
return nums.reduce((acc, n) => acc + n, 0);
}
```

[void and never](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
```ts
function notify(msg: string): void { console.log(msg); } // returns nothing
function fail(msg: string): never { throw new Error(msg); } // always terminates
```

You can end up in situations where a type can be either A or B, here we can use the character `|` which means [union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
```ts
type ID = number | string;

function load(id: ID) {
if (typeof id === 'string') {
// here TS knows that id is string
return fetch(`/user/${id.toLowerCase()}`);
}
// here TS knows that id is number
return fetch(`/user/${id}`);
}
```

## Interfaces and types
When you need more extensive type information for data you have the option to declare interfaces or types that explain the content, mostly it does the same
```ts
type BirdType = {
wings: 2;
};

interface BirdInterface {
wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

// It is also possible to mix the methods
const bird3: BirdInterface = bird1;
```
you can also extend if you need to store more data
```ts
type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
colourful: true;
flies: false;
}
interface Chicken extends BirdInterface { 
colourful: false; 
flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colorful: false, flies: false };
```

You can follow this example further [in the sandbox to typescriptlang.org](https://www.typescriptlang.org/play/#code/PTAEBUasFMCdtAQ3qALgdwPagLaIJYB2ammANgM4mgA m0AxmcgqjKBZIgA4KYBmSQgCgQoTACMAVg1QAuUEVRw+ietCqJCNNAE8eSMvkQV1AOhHALEGDqQoAbnFsV8OfE1gAaQdr6ZYaGw4mBSooP SYOMHE9MbqVqphrAgUiDjQ5kKoeggAQviwNOA5oAC8oADeQqCg6EQA5hTyAEwA3EIAvu1CisqqeQU0AJKESrAqapXVtQ1NoG2dQkIRhKGg 4oMAjPL5hcX65RUzhI0toF3LmKthG4XNO4MjYxMIh8en8+fdorkMiACuJggOQAyvRYPguGF8Bp2KhYP96Kh-rBEGRdPoKDpQtAcJ4rPhUA ByKhcEIucRkFjYXqwNwAD0C0AKoEB1MwmRWa1uNAAzA9Ck8+pNyjzNt8wFBoLZxJhWOx-lwybAwtB6UotA0xMkArSXhotBizFZ9gg0UYTF QaNhWDDQPYjApRnATEj8FcjRRvOhIO5oATneN+lROI4kKAANbSrCFTLZfQAeXQ6LehEwSJRhDR8nh-wQHVAADJQLsijl2vGEAAlCREMqVU BpjOwLNkeQqSj5oslx6Bl7dPX9UAABWgqnTEdAao1NCopdNUxqETImBRfH+bbQCOg7RqfEM6nbaJM7Q6PT7Q4Awr76FHiNPoFo573nkOqk vyKvxhuj53d6B93wQ8AOPHdFiEKkwkwZN5CTFMGzqE45mabwm2RFtsy3PMvgg6AwnoG873ka98FvR96yORCPhQ8JPzXH8QM7bxAOAjsgQu E1ODCVJ8Bob0EHgCIokfbQdFXVkgUHNQqEwRwAkrBJDDiChTFAEEeHofA+FItEyB0bxxD+NlQDE-4ZjIdF6jw9Y8LGKdYFgfwrHSChUis lTQCGARTNASBZLgMQ5KZADyBXKj7Mc2AvRM8TYmEUQTAQPz0GBHgwQhKFwk0UAuEch06DQF0As0bRghQPx6DZGhnPUNz1FqGBiBjCMtTqe UpPqwwo1AEiyMITJoPggjSLvdphr6+tBolUAE0IBA8EkfxaC0vg4EfSZDIwaByMrAwLXq+wqA6igEhQVhEGhC9pLsXgeGIEqjT25SbvCFc TBocxRCgO10k0KgfLiqd1REwQnVfDbbDoRhkC1QkEnYBgrm0VBXAyJYOtAABpQkNUXHKUSi+RZXIMdCFPdGroQbHUFx99aJXFF5FCCETnJ qwRmCuUYACWIgUQR64rTG4EAIzQrO0VdUBcAr+AJKXaAYDwLvdfqll24dFS4WxDmmZd-CZ+EGlPbp1c17W8dQTBsXkQh-hwQzYGNpZRAAE WgO6aC1D1TICepMGPbxbStFa1sISYIg3bRDKQKwyRcFGwyW-m5vqZXHFUgAJaDoCCvwAi4f5KVIvSgbj6BqtEStosJElw02uzYgs6g8G65 IcFBjrMlEWbeAEZIbLWeAKC-a684R5kTgMdF+GC8urKsXn6uQVdDSr+0jsp6Kg7hVRJ388YwqsVh4EQbQ7X5v3MG0LgmEmS2d5VWRnbASA aa4JoQFCXf9-3aDTCE4AABHPMoQVYUGALyAA7M0XkUDeQAFZgBV3BJCVAAABaY6aDDpoKrsAeBzQABsAAOZopCAAMABifBxDSHNDIUIIAA)


.