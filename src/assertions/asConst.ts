/*
  As Const 
  as const is a type assertion in TypeScript that allows you to assert that an expression has a specific type, and that its value should be treated as a read-only value.
*/

const colors = ['red', 'green', 'blue'] as const;

// colors is now of type readonly ['red', 'green', 'blue']
colors[0] = 'yellow'; // cannot assign because its a read-only property
console.log(colors[0]);