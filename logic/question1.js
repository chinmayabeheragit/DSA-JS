let cnt = 0;  // Declare a global variable cnt and initialize it to 0

// Function that demonstrates recursion
function functionrecursion() {
    // Base case: if cnt equals 3, stop the recursion
    if (cnt === 3) {
        return;  // Exit the function (and stop further recursive calls)
    }

    // Print the current value of cnt
    console.log(cnt);

    // Increment cnt by 1
    cnt++;

    // Call the function recursively
    functionrecursion();
}

// Start the recursion by calling functionrecursion() from main()
functionrecursion();
