Promise.resolve().then(() => console.log('then'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nextTick'));