const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 }; // Shallow copy using spread operator

obj2.name = "Bob";
obj1.age = 30;
console.log(obj1.name,obj2.name,obj1.age); // Output: "Alice" (original object unaffected)
