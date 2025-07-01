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

const newUsers = [...users]; // an shallow copy of the array
console.log(newUsers); // remaining elements in the array

const splicedUsers = newUsers.splice(0,3);
console.log(splicedUsers); // removed elements from the array
console.log(newUsers); // remaining elements in the array
console.log(users); // original array is not modified

