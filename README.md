# 1. What is the difference between var, let, and const?
A- var name = "Alice";
console.log(name);  Alice

var name = "Bob";   Can declare again
console.log(name);  Bob

if (true) {
  var age = 20;
}
console.log(age);  20 → var is not limited to block


B- let city = "London";
console.log(city);  London

city = "Paris";     Can change value
console.log(city);  Paris

if (true) {
  let country = "France";
  console.log(country);  France
}
 console.log(country);   block only



C- const pi = 3.14;
console.log(pi); // 3.14

pi = 3.14159;    cannot change value

const numbers = [1, 2, 3];
numbers.push(4);    Can change contents of array
console.log(numbers);  [1, 2, 3, 4]

