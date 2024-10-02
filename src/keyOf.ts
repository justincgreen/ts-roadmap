/*
  The keyof operator in TypeScript is used to get the union of keys from an object type. Here’s an example of how it can be used:
*/

interface Person {
  name: string;
  age: number;
  occupation: string;
}

// `keyof Person` creates a union of the keys: "name" | "age" | "occupation"
type PersonKeys = keyof Person;

// Now, `PersonKeys` can only be "name", "age", or "occupation"
let key1: PersonKeys = "name";        // Valid
let key2: PersonKeys = "age";         // Valid
let key3: PersonKeys = "occupation";  // Valid

// Invalid examples (will result in TypeScript errors):
// let key4: PersonKeys = "salary";   // Error: Type '"salary"' is not assignable to type 'PersonKeys'.