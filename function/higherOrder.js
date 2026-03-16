// a function that either takes another function as a parameter or returns anoter function , these are commong havascript
// ex - Map, filter, reduce

function multiplyBy(factor){
    return function(num){
        return num * factor;
    };
}
const double = multiplyBy(2);
console.log(double(5)); // output will be 10 because the double function is a higher-order function that takes a factor of 2 and returns a new function that multiplies its input by that factor. When we call double(5), it multiplies 5 by 2, resulting in 10.