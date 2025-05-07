const person = {
    name: 'alice',
    age:30,

    greet: function() {
        console.log('hello, my name is ' + this.name);
    },

    sayAge(){
        console.log('i m' + this.age + 'year old');
    }
};

person.greet();
person.sayAge();
console.log(person.name); // alice