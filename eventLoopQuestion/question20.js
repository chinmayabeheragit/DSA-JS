let i = 0;
function loop() {
  console.log('microtask', i);
  i++;
  if (i < 3) queueMicrotask(loop);
}
queueMicrotask(loop);
console.log('sync');