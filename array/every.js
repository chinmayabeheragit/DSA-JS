const scores = [90, 85, 92];
scores.every(score => score > 80); // true
scores.every(score => score > 90); // false
scores.every(score => score > 85); // false
console.log(scores.every(score => score > 80)); // true
console.log(scores.every(score => score > 90)); // false    
console.log(scores.every(score => score > 85)); // false