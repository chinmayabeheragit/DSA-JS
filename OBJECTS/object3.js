const user = {
    name: "chinmaya",
    age: 23,
    "like this coding": true

};
delete user["like this coding"];

console.log(user["like this coding"]);
console.log(user["name"]);
console.log(user["age"]);
// we can also use this type for accessing the object properties

// if we want to delete the object properties then we can use the delete operator

console.log(user);