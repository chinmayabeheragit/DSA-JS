function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
      return `${result}${str}<b>${values[i] || ""}</b>`;
    }, "");
  }
  
  const name = "Alice";
  const age = 25;
  
  const result = highlight`My name is ${name} and I am ${age} years old.`;
  console.log(result);
  // Output: My name is <b>Alice</b> and I am <b>25</b> years old.
  