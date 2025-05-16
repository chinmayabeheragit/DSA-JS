const arr = [1,2,3,4,5];
const shallow = [...arr];

arr.splice(1, 2);
console.log('array', arr);
console.log('shallow', shallow);
