/*
  Union Types in TypeScript allow you to specify multiple possible types for a single variable or parameter. A union type is written as a vertical bar | separated list of types.
*/

let id: string | number = 5;

id = 'Bob';

console.log(id);