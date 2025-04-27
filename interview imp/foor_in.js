let person = {
    name:"alice",
    age: 25,
    country:"usa"
};
for(let key in person) {
    console.log(key + ":" + person[key]);
}