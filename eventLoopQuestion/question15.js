setTimeout(() => console.log('timeout1'), 0);
Promise.resolve().then(() => {
  setTimeout(() => console.log('timeout2'), 0);
  console.log('promise');
});
console.log('sync');