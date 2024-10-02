interface Obj {
  name: string;
  age: number;
}

const objArr: Array<Obj> = [{name: 'Bob', age: 46}, {name: 'Linda', age: 46}]

console.log(objArr);

for(let character of objArr) {
  console.log(character.name);
}