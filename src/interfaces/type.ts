type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};

// Hybrid type
type StringOrNumber = string | number;

const item: StringOrNumber = 1;

console.log(item);