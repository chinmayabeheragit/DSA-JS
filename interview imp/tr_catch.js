function errorHandler(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    console.log(errorHandler(5, 0));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log(errorHandler(0, 5));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log(errorHandler(5, 5));
} catch (error) {
    console.log("Error:", error.message);
}
