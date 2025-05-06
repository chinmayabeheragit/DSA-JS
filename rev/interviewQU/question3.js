const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
// Output: 456
// Explanation: In JavaScript, when you use an object as a key in another object, it gets converted to a string. In this case, both `b` and `c` are objects, and when they are used as keys, they are converted to the string "[object Object]". Therefore, the last assignment `a[c] = 456` overwrites the previous value `a[b] = 123`, and the final output is 456.