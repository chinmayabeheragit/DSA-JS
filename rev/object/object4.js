const property = "name";
const name = "chinmaya";

const user = {
    [property]: name,
}
console.log(user); // { name: 'chinmaya' }
console.log(user[property]); // chinmaya
console.log(user.name); // chinmaya
console.log(user["name"]); // chinmaya