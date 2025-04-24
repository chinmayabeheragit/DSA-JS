const scores = [80, 45, 90];
const passed = scores.filter(score => score >= 50); // [80, 90]
const failed = scores.filter(score => score < 50); // [45]
console.log(passed); // [80, 90]
console.log(failed); // [45]