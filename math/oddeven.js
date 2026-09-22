function isEven(n){
let r = n % 2;
if(r == 0){
    return true;
}
else
{
    return false;
}
}

let n = 20;
if(isEven(n)){
    console.log(n + " is even");
}
else
{
    console.log(n + " is odd");
}