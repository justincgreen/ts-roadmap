/*
  Object
  To define an object type, we simply list its properties and their types.
*/

function printCoords(pt: {x: number; y: number}) {
    console.log(pt.x);
    console.log(pt.y);
}

printCoords({x: 3, y: 7});