
// Function declaration
function add(a: number, b: number): number {
  console.log(a + b);
  return a + b;  // adding : number after the function means it must return a value
}

add(1, 1);



const multiply = (a: number, b: number): number => {
  console.log(a * b);
  return a * b;
};

multiply(2,2);

// Function type
let divide: (a: number, b: number) => number;

divide = (a, b) => {
  console.log(a / b);
  return a / b;
};

divide(9, 3)