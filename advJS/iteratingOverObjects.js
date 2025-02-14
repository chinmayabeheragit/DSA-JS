let student = {
    name: "Emma",
    grade: "A",
    subject: "Math"
  };
  
  for (let key in student) {
    console.log(key + ": " + student[key]);
  }
  