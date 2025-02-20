class Person {
    constructor(name, age) {
        this.name = name; // Assigning properties
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

// Creating an object
const person1 = new Person("Alice", 25);
person1.introduce(); // Output: Hi, I'm Alice and I'm 25 years old.
