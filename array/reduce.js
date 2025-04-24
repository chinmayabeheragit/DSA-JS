const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0); // 600
console.log(total); // 600
// The reduce method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.