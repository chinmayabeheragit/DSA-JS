const users = [
    {
        name:'jhon', age:23, job:'developer',
    },
    {
        name:'jane', age:24, job:'developer',
    },
    {
        name:'doe', age:25, job:'desginer',
    },
    {
        name:'jane', age:24, job:'engineer',
    },
    {
        name:'jhon', age:23, job:'desginer',
    },
    {
        name:'doe', age:25, job:'engineer',
    }
];

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 144


//We use 0 to make sure the accumulator sum starts as a number, ensuring all subsequent additions behave correctly.