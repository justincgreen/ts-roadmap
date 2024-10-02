interface Person {
  name: string;
  age: number;
  occupation?: string;
}

const user = {
  name: "Janet",
  age: 30,
  occupation: "Engineer",
  hobbies: ["hiking", "reading"],
} satisfies Person;

// The `user` object satisfies the `Person` type, ensuring that `name`, `age`, and `occupation`
// are correctly typed. However, `hobbies` is still inferred, even though it's not part of the `Person` interface.

function greet(person: Person) {
  console.log(`Hello, my name is ${person.name} and I'm ${person.age} years old.`);
}

greet(user); // Works, even though `user` has extra properties like `hobbies`