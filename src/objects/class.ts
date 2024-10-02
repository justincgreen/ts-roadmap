/*
  Class
  In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Classes are a fundamental concept in object-oriented programming. 
*/

class Car {
  make: string;
  model: string;
  year: number;
  
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  drive() {
    console.log(`Check out my ${this.year} ${this.make} ${this.model}`)
  }
}

const carOne = new Car('Dodge', 'Viper', 1995);

carOne.drive();