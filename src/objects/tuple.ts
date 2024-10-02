/*
  Tuple 
  A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
*/

type StringNumberPair = [string, number];

const pair: StringNumberPair = ['Howdy', 3];

const first = pair[0];
const second = pair[1];
const third = pair[2];
console.log(first, second);
console.log(third); // Error: index out of bounds