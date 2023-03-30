let name = "Jena";
let age = 34;
let city = "Berlin";
let favouriteFilms = ["Chunking Express", "Spirited Away", "Shoplifter"];

let person = {
  name: "jena",
  age: 32,
  city: "Berlin",
};

// console.log(person.name);
// console.log(person["name"]);

person.age += 1;

// console.log(person);

person.eyeColour = "blue";

console.log(person);

person.address = {
  street: "ritterstrasse",
  number: 12,
  city: "Berlin",
  country: "Germany",
};

delete person.city;
// console.log(person);

person["favouriteFilms"] = ["Chunking Express", "Spirited Away", "Shoplifter"];

// console.log[person.city];

// console.log("city" in person);
// console.log("favourite films" in person);

// console.log(person.address.street);

// console.log(person["favouriteFilms"][1]);

person["favouriteFilms"].push("Parasite");
// console.log(person);

for (let key in person.address) {
  console.log("key:", key, "has the value:", person.address[key]);
}
