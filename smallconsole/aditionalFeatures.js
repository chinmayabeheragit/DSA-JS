const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  
  const table = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(person => `<tr><td>${person.name}</td><td>${person.age}</td></tr>`).join("")}
    </tbody>
  </table>
  `;
  
  console.log(table);
  /* Output:
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>25</td></tr>
      <tr><td>Bob</td><td>30</td></tr>
      <tr><td>Charlie</td><td>35</td></tr>
    </tbody>
  </table>
  */
  