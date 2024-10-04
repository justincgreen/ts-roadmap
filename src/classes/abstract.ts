/*
  An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.
  
  The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete.
*/

abstract class Animal {
  abstract makeSound(): void;
  
  move():void {
    console.log('moving');
  }
}

class Dog extends Animal {
  makeSound():void {
    console.log('bark');
  }
}