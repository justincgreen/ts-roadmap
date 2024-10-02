/*
  Any 
  TypeScript has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
  
  When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal
*/

let value: any;
value = 10;         // OK
value = "Hello";    // OK

// No type checking, you can perform any operation
console.log(value.toUpperCase());  // No error, but risky if value is not a string