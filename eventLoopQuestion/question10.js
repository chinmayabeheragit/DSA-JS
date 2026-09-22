function recurse(n) {
  if (n === 0) return;
  process.nextTick(() => {
    console.log('tick', n);
    recurse(n - 1);
  });
}
recurse(3);
setTimeout(() => console.log('timeout'), 0);