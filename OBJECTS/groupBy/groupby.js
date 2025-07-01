
function groupBy(array, key) {
    return array.reduce((result, item) => {
      // Get the value of the key by which we are grouping
      const groupKey = item[key];
  
      // If the group does not exist, create an array
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
  
      // Push the current item into the respective group
      result[groupKey].push(item);
  
      return result;
    }, {}); // Initial value as an empty object
  }
  
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 }
  ];
  
  const groupedByAge = groupBy(people, "age");
  console.log(groupedByAge);
  