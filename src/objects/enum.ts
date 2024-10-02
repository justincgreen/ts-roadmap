/*
  Enums is not a type-level extension of JavaScript. It allows a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
  
  Enums are more static and predefined, whereas hashmaps are dynamic and flexible.
*/

// Numeric Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// String Enum
enum Instructions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

console.log(Direction);
console.log(Instructions);