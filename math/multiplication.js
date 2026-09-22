function multiply(n){
    for(let i = 1; i <= 10; ++i)
        console.log(n + " * " + i + " = " + n*i);
    
}
let n = 5;
console.log("Multiplication table of " + n);
multiply(n);