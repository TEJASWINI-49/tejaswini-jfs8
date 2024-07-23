//OBJECTS
//literal notation
var obj = {
  name: "teja",
  number: "8767576576",
  age: "20",
};
console.log(obj);
//Adding
obj.gender = "female";
//Accessing
console.log(obj.mobile);
//modifictaion
obj.name = "tejaswini";
console.log(obj);
//Deleting
delete obj.age;
console.log(obj);
//Methods

var keyss = Object.keys(obj);
console.log(keyss);
var values = Object.values(obj);
console.log(values);
var entries1 = Object.entries(obj);
console.log(entries1);
//Objects Constructors
var obj = new Object();
console.log(obj);
//Adding
obj["name"] = "teja";
obj["mobile"] = "56756565664";
obj["age"] = "28";
obj["gender"] = "female";

console.log(obj);
//Modifying
obj["mobile"] = "765654564564";
console.log(obj);
console.log(obj["name"]);
//deleting
delete obj["age"];
console.log(obj);
//Methods
var k = Object.keys(obj);
console.log(k);
var v = Object.values(obj);
console.log(v);
var e = Object.entries(obj);
console.log(e);
