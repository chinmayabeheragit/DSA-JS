// a ()
    // var a = 20;
    // function a () {
    //     console.log(a);
    // let a = 10;
    // }

// This will work because function declarations are hoisted


// var greeting = "hey, stark";

// function newFunction() {
//   var hello = "hello";
//   console.log(hello);    // use the variable
//   console.log(greeting); // access the outer variable
// }

// newFunction(); // actually call the function


// console.log(hello); // ReferenceError: hello is not defined
//


// var  a = 10;

// (function(){
//     console.log(a); // undefined, not 10
//     //const  a = 20; // this 'a' is hoisted but not initialized, so it's in the temporal dead zone
// })();

//  let x = 5;
//           function foo() {
//            console.log(x);
//            let x = 10;
//           }
//          foo();
// This will throw a ReferenceError because 'x' is in the temporal dead zone until it's initialized with 'let x = 10;'.

//  function outer() {
//     var a = 1;
//     function inner() {
//         var a = 2;
//         console.log(a);
//     }
//     inner();
//     console.log(a);
// }
// outer();

//out put 2, 1


// console.log(foo());
// function foo() {
//     return 10;
// }
// console.log(bar());
// var bar = function() {
//     return 20;
// };

// op = 10, error


// var x = 1;
// function test() {
//     console.log(x);
//     var x = 2;
//     console.log(x);
// }
// test();
// console.log(x);

// Output:
// undefined
// 2
// 1
// Explanation:
// Inside the function 'test', the variable 'x' is hoisted to the top of the function scope, but it is not initialized until the line 'var x = 2;'. Therefore, when 'console.log(x);' is executed for the first time, it logs 'undefined' because 'x' has been declared but not yet assigned a value. After that, 'x' is assigned the value of 2, so the second 'console.log(x);' outputs 2. Finally, outside the function, 'console.log(x);' outputs 1 because it refers to the global variable 'x', which was initialized to 1.


// const obj = { a: 1 };
// function change(o) {
//     o.a = 99;
//     o = { a: 999 };
// }
// change(obj);
// console.log(obj.a);

// Output: 99
// Explanation:
// When the function 'change' is called with 'obj' as an argument, it receives a reference to the object. Inside the function, 'o.a = 99;' modifies the property 'a' of the object that 'o' references, which is the same object that 'obj' references. Therefore, 'obj.a' is updated to 99. However, when 'o = { a: 999 };' is executed, it reassigns 'o' to point to a new object, but this does not affect the original object that 'obj' references. Thus, when we log 'obj.a', it still outputs 99.


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// Output: 3, 3, 3
// Explanation:
// The variable 'i' is declared with 'var', which has function scope. By the time the callbacks passed to 'setTimeout' are executed, the loop has already completed and 'i' has been incremented to 3. Therefore, all three callbacks will log the value of 'i' at that time, which is 3. If we want to log 0, 1, and 2 instead, we can use 'let' instead of 'var', as 'let' has block scope and will create a new binding for each iteration of the loop.

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// function foo() {
//     console.log(a);
//     console.log(b);
//     var a = 1;
//     let b = 2;
// }
// foo();

// Output:
// undefined
// ReferenceError: Cannot access 'b' before initialization
// Explanation:
// In the function 'foo', the variable 'a' is declared with 'var', which is hoisted to the top of the function scope and initialized with 'undefined'. Therefore, when 'console.log(a);' is executed, it logs 'undefined'. On the other hand, the variable 'b' is declared with 'let', which is also hoisted but not initialized until its declaration is evaluated. This means that 'b' is in a temporal dead zone from the start of the function until the line 'let b = 2;' is executed. Therefore, when 'console.log(b);' is executed before the declaration of 'b', it throws a ReferenceError because 'b' cannot be accessed before it is initialized.


// console.log(foo());
// console.log(bar());

// function foo() {
//     return "I am foo";
// }
// const bar = () => {
//     return "I am bar";
// }

// Output:
// I am foo
// ReferenceError: Cannot access 'bar' before initialization
// Explanation:
// The function 'foo' is declared using a function declaration, which is hoisted to the top of its scope and can be called before its declaration. Therefore, 'console.log(foo());' successfully logs "I am foo". However, 'bar' is declared using a 'const' variable with an arrow function, which is not hoisted in the same way. The variable 'bar' is in a temporal dead zone until it is initialized with the arrow function. Therefore, when 'console.log(bar());' is executed before the initialization of 'bar', it throws a ReferenceError because 'bar' cannot be accessed before it is initialized.

// console.log(typeof foo);
// console.log(typeof bar);

// var foo = () => "foo";
// let bar = () => "bar";

// Output:
// undefined
// ReferenceError: Cannot access 'bar' before initialization
// Explanation:
// The variable 'foo' is declared with 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, 'console.log(typeof foo);' outputs 'undefined'. On the other hand, 'bar' is declared with 'let', which is also hoisted but not initialized until its declaration is evaluated. This means that 'bar' is in a temporal dead zone from the start of the script until the line 'let bar = () => "bar";' is executed. Therefore, when 'console.log(typeof bar);' is executed before the declaration of 'bar', it throws a ReferenceError because 'bar' cannot be accessed before it is initialized.

// greet();
// sayHi();

// function greet() {
//     console.log("Hello from greet");
// }
// var sayHi = () => {
//     console.log("Hello from sayHi");
// }

// Output:
// Hello from greet
// TypeError: sayHi is not a function
// Explanation:
// The function 'greet' is declared using a function declaration, which is hoisted to the top of its scope and can be called before its declaration. Therefore, 'greet();' successfully logs "Hello from greet". However, 'sayHi' is declared using a 'var' variable with an arrow function, which is hoisted but initialized with 'undefined'. Therefore, when 'sayHi();' is executed before the initialization of 'sayHi', it throws a TypeError because 'sayHi' is not a function at that point; it is 'undefined'.


// var result = add(2, 3);
// console.log(result);

// var add = (a, b) => a + b;

// Output:
// TypeError: add is not a function
// Explanation:
// The variable 'add' is declared with 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, when 'add(2, 3);' is executed, it tries to call 'undefined' as a function, which results in a TypeError. The arrow function assigned to 'add' is not hoisted in the same way as a function declaration, so it is not available at the time of the call.

// console.log(a);
// console.log(b);
// console.log(c);

// var a = () => "a";
// let b = () => "b";
// const c = () => "c";

// Output:
// undefined
// ReferenceError: Cannot access 'b' before initialization
// ReferenceError: Cannot access 'c' before initialization
// Explanation:
// The variable 'a' is declared with 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, 'console.log(a);' outputs 'undefined'. The variables 'b' and 'c' are declared with 'let' and 'const', respectively, which are also hoisted but not initialized until their declarations are evaluated. This means that both 'b' and 'c' are in a temporal dead zone from the start of the script until their respective declarations. Therefore, when 'console.log(b);' and 'console.log(c);' are executed before the declarations of 'b' and 'c', they throw ReferenceErrors because they cannot be accessed before they are initialized.

// function outer() {
//     console.log(inner());
//     var inner = () => "I am inner";
//     console.log(inner());
// }
// outer();

// Output:
// TypeError: inner is not a function
// Explanation:
// In the function 'outer', the variable 'inner' is declared with 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, when 'console.log(inner());' is executed for the first time, it tries to call 'undefined' as a function, which results in a TypeError. After that, 'inner' is assigned an arrow function that returns "I am inner", so the second 'console.log(inner());' would successfully log "I am inner" if it were reached. However, due to the error on the first call, the second call is never executed.


// var fn = fn();

// var fn = () => {
//     return "hello";
// }


// Output:
// TypeError: fn is not a function
// Explanation:
// The variable 'fn' is declared with 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, when 'var fn = fn();' is executed, it tries to call 'undefined' as a function, which results in a TypeError. The arrow function assigned to 'fn' is not hoisted in the same way as a function declaration, so it is not available at the time of the call.


// function test() {
//     console.log(typeof arrow);
//     var arrow = () => 42;
//     console.log(typeof arrow);
// }
// test();

// Output:
// undefined
// function
// Explanation:
// The variable 'arrow' is declared with 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, when 'console.log(typeof arrow);' is executed for the first time, it outputs 'undefined'. After that, 'arrow' is assigned an arrow function that returns 42, so the second 'console.log(typeof arrow);' outputs 'function'.

// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }
// const c1 = counter();
// const c2 = counter();
// c1();
// c1();
// c2();

// Output:
// 1
// 2
// 1
// Explanation:
// The 'counter' function creates a closure that captures the 'count' variable. Each time 'counter' is called, it returns a new function that has access to its own 'count' variable. When 'c1' is called, it increments and logs its own 'count', which starts at 0, so it logs 1 and then 2 on the second call. When 'c2' is called, it has its own separate 'count' variable that also starts at 0, so it logs 1 when called.

// function makeMultiplier(x) {
//     return function(y) {
//         return x * y;
//     }
// }
// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);
// console.log(double(5));
// console.log(triple(5));
// console.log(double(triple(2)));

// Output:
// 10
// 15
// 30
// Explanation:
// Each call to makeMultiplier creates a new closure capturing its own x. double remembers x=2, triple remembers x=3. For the last one, inner runs first → triple(2) = 6, then outer → double(6) = 12.
//

// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

// Output:
// start
// end
// promise
// timeout
// Explanation:
// When this code runs, it first logs "start". Then it schedules a callback for the next event loop iteration with setTimeout, which will log "timeout". Next, it schedules a microtask with Promise.resolve().then(), which will log "promise". Finally, it logs "end". After the current synchronous code finishes executing, the JavaScript engine processes the microtasks before moving on to the next event loop iteration. Therefore, "promise" is logged before "timeout".

// async function fetchData() {
//     console.log("1");
//     await Promise.resolve();
//     console.log("2");
// }
// console.log("3");
// fetchData();
// console.log("4");

// Output:
// 3
// 1
// 4
// 2
// Explanation:
// When this code runs, it first logs "3". Then it calls fetchData(), which logs "1". The await statement causes the function to pause and schedule the rest of the function (logging "2") as a microtask. Meanwhile, the main thread continues executing and logs "4". After the current synchronous code finishes, the JavaScript engine processes the microtasks, which results in logging "2".

// const arr = [1, 2, 3];
// const result = arr.map(num => num * 2).filter(num => num > 2).reduce((acc, num) => acc + num, 0);
// console.log(result);

// Output:
//10
// Explanation:
// The code performs a series of operations on the array [1, 2, 3]. First, it uses the map() method to create a new array where each number is multiplied by 2, resulting in [2, 4, 6]. Next, it uses the filter() method to create a new array that only includes numbers greater than 2, resulting in [4, 6]. Finally, it uses the reduce() method to sum up the numbers in the filtered array, starting with an initial value of 0. The calculation is as follows: 0 + 4 + 6 = 10. Therefore, the final output is 10.

// function foo() {
//     return () => {
//         return () => {
//             return 42;
//         }
//     }
// }
// console.log(foo()()());

// Output:
// 42
// Explanation:
// The function 'foo' returns a function that returns another function, which finally returns the value 42. When we call 'foo()()', we are calling the first returned function, which gives us the second returned function. Then, when we call that result with '()', we are calling the innermost function, which returns 42. Therefore, 'console.log(foo()()());' outputs 42.

// let a = 1;
// const fn = () => {
//     let a = 2;
//     return () => {
//         let a = 3;
//         return () => console.log(a);
//     }
// }
// fn()()();

// Output:
// 3
// Explanation:
// The function 'fn' creates a closure that captures the variable 'a' with the value 2. Inside 'fn', there is another function that creates another closure, capturing its own variable 'a' with the value 3. When we call 'fn()()', we are calling the first returned function, which gives us the second returned function. Then, when we call that result with '()', we are calling the innermost function, which logs the value of 'a' in its own scope, which is 3. Therefore, 'fn()()();' outputs 3.

// const promise = new Promise((resolve, reject) => {
//     console.log("1");
//     resolve("done");
//     console.log("2");
// });
// promise.then(val => console.log(val));
// console.log("3");

// Output:
// 1
// 2
// 3
// done
// Explanation:
// When the Promise is created, the executor function is executed immediately. Therefore, "1" and "2" are logged in order. After that, the .then() method schedules a callback to log the resolved value "done". Meanwhile, the main thread continues executing and logs "3". Finally, after the current synchronous code finishes, the JavaScript engine processes the microtasks, which results in logging "done".