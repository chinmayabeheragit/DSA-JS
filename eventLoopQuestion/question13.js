let count = 0;
const id = setInterval(() => {
  console.log('interval', count);
  process.nextTick(() => console.log('nextTick', count));
  count++;
  if (count === 3) clearInterval(id);
}, 0);