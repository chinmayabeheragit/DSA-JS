// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class (inherits from Animal)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

// Creating an object of Dog class
const dog1 = new Dog("Buddy", "Labrador");
dog1.makeSound(); // Output: Buddy makes a sound.
dog1.bark();      // Output: Buddy barks!
