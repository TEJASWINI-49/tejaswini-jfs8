function fun1(name) {
  console.log("My name is " + name);
}
function fun2(age) {
  console.log("My age is " + age);
}
export { fun1 as name, fun2 as number };
