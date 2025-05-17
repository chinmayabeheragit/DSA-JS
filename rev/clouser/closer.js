// function outter () {
//     const  a = 1;
//     const  b = 7;

//     return function inner() {
//         const  a = 2;
//         const  b = 3;
//         const  c = a + b;
//         console.log(c);
//     }
// }
// const sum = outter();
// sum();


// 

function outter () {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
const counter = outter();
counter(); // 1