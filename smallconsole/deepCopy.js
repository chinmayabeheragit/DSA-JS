const obj1 = { name: "Alice", details: { age: 25, city: "NYC" } };
const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

obj2.details.age = 30;
console.log(obj1.details.age,obj2.details.age,obj1.name,obj2); // Output: 25 (original object unaffected)
