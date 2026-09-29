let count = 0;
const id = setInterval(() => {
  Promise.resolve().then(() => console.log('promise', count));
  console.log('interval', count);
  count++;
  if (count === 2) clearInterval(id);
}, 0);