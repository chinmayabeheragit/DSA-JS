const func = (function(a) {
    delete a; // it is use in object only it is not use in function
    return a;
})(5);

console.log(func)
// Output: 5
// The delete operator is used to remove a property from an object. It does not work on variables or function parameters.