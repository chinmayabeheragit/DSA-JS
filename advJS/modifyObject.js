let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  };
  console.log(car);

  
  // Adding a new property
  car.color = "Blue";
  
  // Updating an existing property
  car.year = 2022;
  
  // Deleting a property
  delete car.model;
  
  console.log(car);
  