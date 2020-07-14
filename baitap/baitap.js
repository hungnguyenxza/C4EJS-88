
// Bài 3 - b

let x = Number(prompt("Nhập x"));
const pi = Math.PI;
let x2 = x**2;

let y = (Math.sin(pi * x2) + Math.sqrt(x2 + 1)) 
/ (Math.pow(Math.E, 2*x) + Math.cos(pi * x / 4));

console.log(y);