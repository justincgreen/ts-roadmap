/*
  In TypeScript, namespaces are used to organize and share code across multiple files. Namespaces allow you to group related functionality into a single unit and prevent naming conflicts.
*/

// myNamespace.ts
namespace MyNamespace {
  export function doSomething() {
    console.log('something')
  }
}

// main.ts 
/// <reference path="myNamespace.ts"
MyNamespace.doSomething(); // output: something