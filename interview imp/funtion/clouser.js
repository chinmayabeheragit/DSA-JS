function outer (){
    let count = 0; // private variable

    return function inner(){
        count ++; // closure
        // count = count + 1;
        console.log(count);
    }
}
const counter = outer(); // counter is a closure function
counter(); // 1
counter();
counter();
counter();