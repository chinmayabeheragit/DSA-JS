function Car(make, model, year) {
  this.make = make;   // 'this' refers to the new object being created
  this.model = model; // assigning the 'model' property to the new object
  this.year = year;   // assigning the 'year' property to the new object
}

const myCar = new Car("Eagle", "Talon TSi", 1993);   // creates a new Car object and assigns it to 'myCar'
const randCar = new Car("Nissan", "300ZX", 1992);    // creates a new Car object and assigns it to 'randCar'
const kenCar = new Car("Mazda", "Miata", 1990);      // creates a new Car object and assigns it to 'kenCar'

console.log(myCar);   // logs the 'myCar' object
console.log(randCar); // logs the 'randCar' object
console.log(kenCar);  // logs the 'kenCar' object
