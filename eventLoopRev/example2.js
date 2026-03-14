Promise.resolve()
.then(() => {
console.log("A");
Promise.resolve().then(() => console.log("B"));
})
.then(()=>console.log("C"));

{/**
    A → B → C
Why: When "A" runs, it queues "B" as a new microtask. The .then("C") is already queued but "B" was added to the microtask queue before "C" gets to execute. 


   ┌─────────────────────────┐
   │        timers           │  ← setTimeout, setInterval callbacks
   └──────────┬──────────────┘
              │
   ┌──────────▼──────────────┐
   │     pending callbacks   │  ← I/O errors from previous cycle
   └──────────┬──────────────┘
              │
   ┌──────────▼──────────────┐
   │       idle, prepare     │  ← internal use only
   └──────────┬──────────────┘
              │
   ┌──────────▼──────────────┐
   │          poll           │  ← fetch new I/O events (fs, network)
   └──────────┬──────────────┘
              │
   ┌──────────▼──────────────┐
   │         check           │  ← setImmediate callbacks  ← 👀
   └──────────┬──────────────┘
              │
   ┌──────────▼──────────────┐
   │    close callbacks      │  ← socket.on('close') etc
   └─────────────────────────┘
              │
              └──── back to top (timers again)
*/}