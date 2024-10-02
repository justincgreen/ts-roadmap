/*
  Narrowing in TypeScript refers to refining the type of a variable within a specific scope by using control flow constructs like if, switch, or typeof checks. TypeScript uses narrowing to provide more specific type information, enabling safer operations on variables that could initially have broader types.
*/

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());  // TypeScript now knows it's a string
  } else {
    console.log(value.toFixed(2));  // TypeScript now knows it's a number
  }
}