// myModule.ts 
export function doSomething() {
  console.log('something')
}

// main.ts 
import { doSomething } from './myModule';
doSomething();