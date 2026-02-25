const names = ["Chinmaya", "Rahul", "Sneha"];
const numbers = [1, 2, 3, 4, 5];
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));

numbers.forEach((value, index) => {
 console.log(index, value);
});
