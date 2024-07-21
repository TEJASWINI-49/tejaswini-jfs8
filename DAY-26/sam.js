console.log("String Methods");
//charAt();
var x = "tejaswini";
console.log(x.charAt(6));

//concat();
var x = "teja";
var y = "swini";
x.concat(y);
//charCodeAt
console.log(x.charCodeAt(1));
//startwith()
console.log(x.startsWith("tej"));

//endswith();
console.log(x.endsWith("tej"));
//includes();
console.log(x.includes("tej"));
//indexof();
console.log(x.indexOf("tej"));

//lastindexof();
console.log(x.lastIndexOf("tej"));
//repeat();
console.log(x.repeat("tej"));
//replace();
console.log(x.replace("tej", "ud"));
//includes
var x = "teja";
console.log(x.includes("tej"));
//search
var x = "teja";
console.log(x.search("tej"));
//slice();
console.log(x.slice(0, 3));
//substring
console.log(x.substring(0, 3));
//lowercase
console.log(x.toLowerCase());
//uppercase
console.log(x.toUpperCase());
//trim
console.log(x.trim());
//
console.log("Regular expressions");
//Literal Notation
var re1 = /j.*t/i;
console.log(re1.test("Javascript"));
console.log(re1.exec("Javascript,JavapoinT"));

//Object Notation
var re2 = new RegExp("j.*t", "i");
console.log(re2.test("Javascript"));
console.log(re2.exec("Javascript,JavapoinT"));
