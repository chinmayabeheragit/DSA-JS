for(var i = 0; i < 5; i++){
    setTimeout(()=>console.log(i),100);
}

{/**⚙️ What truly happens?

var is function-scoped, not block-scoped.

Only one single i exists for the entire loop.

By the time setTimeout executes (after 100ms),
the loop has already completed.

👉 Final value of i = 5

✅ Output
5
5
5
5
5 */}

for(let i = 0; i < 5; i++){
    setTimeout(()=>console.log(i),100);
}

{/**
    ⚙️ What changes?

let is block-scoped.

Each iteration creates a new, separate i.

Each setTimeout captures its own copy.

✅ Output
0
1
2
3
4 */}

for(var i = 0; i < 5; i++){
((n) => setTimeout(()=>console.log(n),100))(i);
}

{/***⚙️ What’s happening here?

var still has one shared i

But we introduce an IIFE (Immediately Invoked Function Expression)

(n) => { ... }

Each iteration passes current i as n

n becomes a new parameter (local variable) for each call

✅ Output
0
1
2
3
4

You create a fresh memory (n) for every iteration —
a manual version of what let does naturally. */}