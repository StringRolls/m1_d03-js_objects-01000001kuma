// Class code examples

const person1 = {
    firstName: "Chee Kean",
    weight: 231,
    height: 1.7,
  };
  
  const person2 = {
    firstName: "Marco Santo",
    weight: 231,
    height: 1.7,
  };
  
  const person3 = {
    firstName: "Carlitro",
    weight: 231,
    height: 1.7,
  };
  
  const person4 = {
    firstName: "Caroluna",
    weight: 231,
    height: 1.7,
    address: {
      street: "carrer de Pamplona",
      number: "96",
      planta: "PB",
      piso: "1º",
    },
  };
  
  // Accessing a property with dot notation
  console.log(
    "Info about Caroluna",
    person4.firstName,
    person4.weight,
    person4.address.piso
  );
  
  // Accessing a property with bracket notation (indirect acces, or dynamic)
  console.log(person1["weight"]);
  
  const personKey = ["firstName", "weight", "height"];
  const personAddressKey = ["street", "number", "planta", "piso"];
  
  person1.nationality = "Italian";
  
  console.log(person1.favFood);
  
  person1["favFood"] = "pizza";
  
  const newKey = `favourite book`;
  person1[newKey] = "guide to galaxy";
  
  console.log("person1: ", person1);
  
  for (key in person1) console.log(person1[key]);
  
  // Object.keys(person1)
  for (key of Object.keys(person1)) console.log(person1[key]);
  
  console.log("_____________________");
  console.log("All the objects properties: ", Object.keys(person1));

const alltheKeys = Object.keys(person4);
console.log("The keys array: ", alltheKeys);

for(const oneKey of Object.keys(person1)){
    console.log(`A key form person one ${oneKey}: `, person1[oneKey])
}
  console.log("_____________________");
  

  console.log("accessing a number", person1[1087643]);
  
  console.log("reading index from keys", Object.keys(person1)[1]);
// Objects don't have length but the dot notation will look for the label "lenght"
  console.log("object length", person1.length);
  
  const tween1 = {
    name: "Carlos",
    age: 24,
  };
  
  const tween2 = {
    name: "Carlos",
    age: 24,
  };
  
  console.log(tween1 === tween2, "Carlos" === "Carlos");
  
  for ( const oneValue in person4){
    console.log("This is one value from the object", oneValue)
}