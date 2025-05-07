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

const slicedUsers = users.slice(0,3);
console.log(slicedUsers);
