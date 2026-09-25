console.log('1');
Promise.resolve().then(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
});
Promise.resolve().then(() => console.log('4'));
console.log('5');

//op - M = 1, 2,4,5, 3