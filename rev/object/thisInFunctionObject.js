const person = {
    name: 'Bob',
    age:30,
    job: 'developer',

    // Arrow function — does NOT bind its own 'this'
    greet : function () {
        console.log('hi , my name is '+ this.name + ' and my age is ' + this.age + ' and my job is ' + this.job);
        console.log(`Hi, my name is ${this.name}`);
        console.log(`my age is ${this.age}`); 
        console.log(`my job is ${this.job}`);
    }
};

person.greet(); // Output: Hi, my name is undefined
