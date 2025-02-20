const specificDate = new Date("2024-12-25");
console.log(specificDate);  // Wed Dec 25 2024 05:30:00 GMT+0530 (IST)

const customDate = new Date(2024, 11, 25); // Month is 0-indexed (0 = January)
console.log(customDate);  // Wed Dec 25 2024 00:00:00 GMT+0530 (IST)
