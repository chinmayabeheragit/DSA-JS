const person = {
    name: 'alice',
    age:30,

    greet: function() { // regular function or we can call traditional function 
        console.log('hello, my name is ' + this.name);
    },

    sayAge(){ // shorthand method definition this is an ES6 features method
        console.log(`i m ${this.name} and  ${this.age}  'year old`);
    }
};

person.greet();
person.sayAge();
console.log(person.name); // alice