let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged = Object.assign({}, obj1, obj2);
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(merged);
