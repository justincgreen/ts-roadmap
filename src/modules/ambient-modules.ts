/*
  Ambient modules in TypeScript are used to declare external modules or third-party libraries in a TypeScript program. Ambient modules provide type information for modules that have no TypeScript declarations, but are available in the global scope.
*/

// myModule.d.ts 
declare module 'my-module' {
  export function doSomething(): void;
}

// main.ts 
import * as myModule from 'my-module';
myModule.doSomething();