/*var message = "Please enter the value";
var value1 = prompt(message);
console.log(value1);

confirm("The entered value is " + value1);
*/
var x = prompt("Enter Your name:");
var z = confirm("Are you 18+ ?");
if (z == true) {
  console.log("Welcome  " + x + "!");
} else {
  console.log("Try again when you cross 18");
}
