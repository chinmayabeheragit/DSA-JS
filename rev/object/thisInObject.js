const person = {
    name: 'Bob',
    greet() {
        console.log('Hi, my name is ' + this.name); // Works correctly
    }
};
person.greet(); // Output: Hi, my name is Bob
