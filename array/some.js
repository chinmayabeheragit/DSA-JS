const ages = [10, 20, 30];
ages.some(age => age > 18); // true
ages.some(age => age > 30); // false
ages.some(age => age > 10); // true
console.log(ages.some(age => age > 18)); // true
console.log(ages.some(age => age > 30)); // false
console.log(ages.some(age => age > 10)); // true