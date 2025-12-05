import { MyFunction, MySecondFunction } from "./export";
// Wrapped in {} for importing multiple functions

import MyDefaultFunction from "./export";
// No {} for a single function

// Autofill knows if you have a function or a default function

import { type MyDefaultType } from "./export";


export MyDefaultFunction
export MyFunction
export MySecondFunction
export type MyDefaultType
// Ignore this, just removes errors from the import code for the purpose of example