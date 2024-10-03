/*
  Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, instead of being limited to a single data type. A generic type is defined using angle brackets <T> and can be used as a placeholder for a specific data type. The actual data type is specified when the function or class is used.
*/

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'

console.log(output);
  
function count<T>(arg: T): T {
  return arg;
}

let num = count<number>(2);

console.log(num);