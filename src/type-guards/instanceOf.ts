/*
  instanceof operator is a way to narrow down the type of a variable. It is used to check if an object is an instance of a class.
*/

class Bird {
  fly() {
    console.log('Flying');    
  }
}

const pet = new Bird();

if(pet instanceof Bird) {
  pet.fly();
}else {
  console.log('Pet is not a bird');
}