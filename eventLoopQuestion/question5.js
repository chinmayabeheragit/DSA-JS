// DANGER: This starves the event loop forever
function recursiveNextTick() {
  process.nextTick(recursiveNextTick); // keeps rescheduling itself
}
recursiveNextTick();
// setTimeout, setImmediate, I/O callbacks NEVER run — they're blocked

// SAFE: setImmediate doesn't block the loop
function safeRecursive() {
  setImmediate(safeRecursive); // other phases still get to run
}