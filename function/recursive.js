function factorial(n){
    if(n === 0) return 1 ;
    return n * factorial(n-1);
}
console.log(factorial(5));
// output will be 120 because the factorial function is a recursive function that calls itself with a smaller value of n until it reaches the base case where n is 0. The result is the product of all positive integers up to n, which is 5 * 4 * 3 * 2 * 1 = 120.
//A function that calls itself until a condition is met. Very useful for problems like factorial, Fibonacci, or tree traversals.
