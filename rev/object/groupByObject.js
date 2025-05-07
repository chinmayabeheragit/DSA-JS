function groupBy(array, key){
    return array.reduce((acc, item)=>{
        if(!acc[item[key]]) acc[item[key]] = [];
        acc[item[key]].push(item);
        return acc;
    }, {});
}

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


// const groupedByJob = users.reduce((acc, user) => {
//     if (!acc[user.job]) acc[user.job] = [];
//     acc[user.job].push(user);
//     return acc;
// }, {});

// console.log(groupedByJob);


const result = groupBy(users, 'name');
console.log(result);
