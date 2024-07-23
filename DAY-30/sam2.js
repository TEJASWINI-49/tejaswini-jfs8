console.log("Reg expressions");
//dot(.)
var re = /h.t/g;
var text = "hat pot  hit hurt";
var res = text.match(re);
console.log(res);
//^Cart
var re = /^The/gi;
var text = "the Apple";
var res = text.match(re);
console.log(res);
//$Dollar
var re = /Boy.$/gi;
var text = "I am boy.";
var res = text.match(re);
console.log(res);
//*Astrik
var re = /ab*c/gi;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);
//*Plus
var re = /ab+c/gi;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);
//?Question mark
var re = /ab+c/gi;
var text = "abc bac abbc abd";
var res = text.match(re);
console.log(res);
//{}Curly braces
var re = /\d{3}-\d{3}-\d{4}/g;
var text = "123-123-1232,1234567899";
var res = text.match(re);
console.log(res);
//[] braces
var re = /[ch]at/g;
var text = "hat cat mat chhat";
var res = text.match(re);
console.log(res);

//pipe
var re = /cat|hat/g;
var text = "I have a cat with hat and bat";
var res = text.match(re);
console.log(res);
