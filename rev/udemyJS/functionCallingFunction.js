const cutFruit = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges){
    const applePices = cutFruit(apples);
    const orangePices = cutFruit(oranges);
    console.log(apples, oranges);
    const juice = `juice with ${applePices} pieces of apple and ${orangePices} pieces of orange`;
    return juice; // it sends back the juice value to the function call
}

console.log(fruitProcessor(2,3));
