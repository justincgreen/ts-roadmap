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