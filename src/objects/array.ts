/*
  Arrays 
  To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing.
*/

const nums: number[] = [1,2,3];
const numsTwo: Array<number> = [4,5,6];

console.log(nums);
console.log(numsTwo);

const strArray: string[] = ['Hello', 'World'];
const strArrayTwo: Array<string> = ['Hello', 'Again'];

console.log(strArray);
console.log(strArrayTwo);