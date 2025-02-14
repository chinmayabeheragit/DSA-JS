async function fetchData() {
    try {
      let response = await fetch("https://api.example.com/data");
      let data = await response.json();
      console.log("Data received:", data);
    } catch (error) {
      console.log("Failed to fetch data:", error.message);
    }
  }
  
  fetchData();
  