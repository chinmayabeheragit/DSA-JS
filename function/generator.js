function * numbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}
const gen = numbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// output will be 1, 2, 3, 4 because the generator function yields each value one at a time and we can use .next() to get the next value in the sequence.