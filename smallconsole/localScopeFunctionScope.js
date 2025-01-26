function localScopeExample() {
    const localVar = "I am local"; // Local variable
    console.log(localVar); // Accessible inside the function
  }
  
  localScopeExample();
  {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // Output: "I am block-scoped"
  }
  {
    var blockVar = "I am not block-scoped";
  }
  
  console.log(blockVar); // Output: "I am not block-scoped"
  
  
//   console.log(blockVar); // Error: blockVar is not defined
  
//   console.log(localVar); // Error: localVar is not defined
  