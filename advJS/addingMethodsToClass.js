class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    stop() {
        console.log(`${this.brand} ${this.model} is stopping.`);
    }
}

// Creating an object
const car1 = new Car("Toyota", "Camry");
car1.start(); // Output: Toyota Camry is starting...
car1.stop();  // Output: Toyota Camry is stopping.
