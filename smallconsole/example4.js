const formData = {
    username: null,
    password: "123456",
  };
  
  const username = formData.username ?? "Anonymous";
  const password = formData.password ?? "defaultPassword";
  
  console.log(`Username: ${username}, Password: ${password}`);
  // Output: Username: Anonymous, Password: 123456
  