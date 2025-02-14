let book = {
    title: "JavaScript Guide",
    author: "John Doe",
    pages: 300
  };
  
  console.log(Object.keys(book));
  console.log(Object.values(book));
  console.log(Object.entries(book));
  console.log(book.hasOwnProperty("title")); // true
console.log(book.hasOwnProperty("price")); // false



  