function greetUser(name, callback){ // callback is a function
    console.log("hello", name); 
    callback(); // call the callback function
}

function sayGoodbye(){
    console.log("goodbye");
}
greetUser("Chinmaya", sayGoodbye);