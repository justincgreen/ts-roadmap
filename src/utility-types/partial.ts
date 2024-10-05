interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John',
    age: 30,
    email: 'test@example.com',
    ...user
  }
}

const newUser = createUser({name: 'Jane Doe'})

console.log(newUser);