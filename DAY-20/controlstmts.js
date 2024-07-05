//for loop
for (var i = 0; i < 5; i++) {
  console.log(i);
}
for (var i = 5; i >= 0; i--) {
  console.log(i);
}
for (var i = 0; i <= navigator; i--) {
  console.log(i);
}
//for in
var contact = {
  name: "teja",
  mobile: 1234333333,
  email: "eteja494@gmail.com",
};
for (var x in contact) {
  console.log(x + ":" + contact[x]);
}
//for of
var lst = ["a", "b", "c"];
for (var x of contact) {
  console.log(x);
}
