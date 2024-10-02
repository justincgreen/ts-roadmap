interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  position: string;
}

// Intersection Type: A type that combines both Person and Employee
type PersonEmployee = Person & Employee

const employee: PersonEmployee = {
  name: 'Rick',
  age: 50,
  employeeId: 111,
  position: 'Mad Scientist'
}
console.log(employee.name);
console.log(employee.position);
console.log(employee.employeeId);