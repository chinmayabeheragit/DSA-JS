const users = [{ id: 1 }, { id: 2 }];
const found = users.find(user => user.id === 2); // { id: 2 }
console.log(found); // Output: { id: 2 }
// The find method returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.