function Person(name, age, place){
    this.name = name;
    this.age = age;
    this.place = place;
}
const person1 = new Person("alice", 20, "newyork");
console.log(person1.age);
console.log(person1.name);
console.log(person1.place);
