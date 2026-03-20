setTimeout(()=>console.log("timeout"),0);
setImmediate(()=>console.log("immediate"));
//  out put is not fixed it can be timeout first or immediate first. It depends on the event loop and how it handles the timers and immediates.
//  In general, setImmediate is executed before setTimeout with a delay of 0, but this is not guaranteed in all environments.

const fs = require("fs");
fs.readFile(__filename,()=>{
    setTimeout(()=>console.log("timeout"),0);
    setImmediate(()=>console.log("immediate"));
})
//After the I/O callback finishes, Node.js directly moves to the check phase, before going back to timers.