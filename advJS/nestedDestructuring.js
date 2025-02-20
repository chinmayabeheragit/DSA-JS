const user = {
    name: "Alice",
    address: { city: "New York", zip: 10001 }
  };
  
  const { name, address: { city, zip } } = user;
  
  console.log(city, zip); // New York 10001
  