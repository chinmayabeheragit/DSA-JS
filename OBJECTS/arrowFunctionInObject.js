//so normally we define function in object like 

const user = {
    name:'stark',
    age:24,
    job:'developer',

    //regular function
    greet() {
        console.log('hi my name is ' + this.name  +  " "+'i am' + this.age + 'years old' + 'my job is ' + this.job );
        console.log(`hi, my name is ${this.name} , i am ${this.age} years of old, and i am a ${this.job} thank you`);
        console.log(`hi, my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
        console.log(`my job is ${this.job}`);
     
    }
}
console.log(user);
user.greet();


//but if we do arrow function like 

const user2 = {
    name:'stark',
    age:24,
    job:'developer',

    //regular function
    greet: () => {
        console.log('hi my name is ' + this.name  +  " "+'i am' + this.age + 'years old' + 'my job is ' + this.job );
        console.log(`hi, my name is ${this.name} , i am ${this.age} years of old, and i am a ${this.job} thank you`);
        console.log(`hi, my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
        console.log(`my job is ${this.job}`);
     
    }
}
console.log(user2);
user2.greet();


// it does not work because we can't use arrow inside object