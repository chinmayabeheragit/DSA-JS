let obj1 = { x: 10 };
let obj2 = obj1; // Copy by reference
obj2.x = 20;
obj1.x = 30;
console.log(obj1.x,obj2.x); // Output: 20 (obj1 is affected)
