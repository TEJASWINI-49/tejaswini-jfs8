console.log("arrays");
var a = [10, 20, "teja", 34.5];
var b = new Array(100, 200, "tejaswini", 89.9);
console.log(a);
console.log(b);
console.log(a[2]);
console.log(b[1]);
a[0] = 1000;
console.log(a);
b[0] = 400.56;
console.log(b);
let x = [10, 20, 30, "a", "b", "c"];
console.log(x);
x.push(21);
console.log(x);
y = x.pop();
console.log(y);
console.log(x);
y = x.shift();
console.log(y);
console.log(x);
y = x.unshift(70);
console.log(x);
console.log(y);
y = x.slice(2, 4);
console.log(y);
y = x.slice(4);
console.log(y);

a = [10, 20, 30];
b = [40, 50, 60];
y = b.concat(a);
console.log(y);
vary = a.concat(b);
console.log(y);

x = ["a", "b", "c", "b", "b"];
var y = x.join("&");
console.log(y);
var y = x.join(" ");
console.log(y);
var y = x.indexOf("b");
console.log(y);

x = [1, 2, 3, 4];
var y = x.forEach(function (i) {
  return i;
});
console.log(y);
