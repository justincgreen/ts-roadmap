/*
  The non-null assertion operator (!) is a type assertion in TypeScript that allows you to tell the compiler that a value will never be null or undefined.
*/

let name: string | null = null;

let nameLength = name!.length;