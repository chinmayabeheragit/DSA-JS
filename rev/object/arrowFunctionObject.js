const person = {
    name: 'Bob',

    // Arrow function — does NOT bind its own 'this'
    greet: () => {
        console.log('Hi, my name is ' + this.name); // 'this' is not what you expect here!
    }
};

person.greet(); // Output: Hi, my name is undefined
