function fruit(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice; // it sends back the juice value to the function call
     
}

const result = fruit(6,7);
console.log(result); // juice with 6 apples and 7 oranges
console.log(fruit(6,10));