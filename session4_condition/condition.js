
let a = Number(prompt("Nhập a"));

if (a > 2) {
    console.log("a lớn hơn 2");
} else if (a < 2) {
    console.log("a bé hơn 2");
} else {
    console.log("a = 2");
}

let b = Number(prompt("Nhập b"));
if (a > b) {
    console.log("a lớn hơn b");
} else if (a < b) {
    console.log("a nhỏ hơn b");
} else {
    console.log("a = b");
}

let c = Number(prompt("Nhập c"));
if (a >= b && b >= c) {
    console.log("a lớn nhất");
} else if (b >= a && a >= c) {
    console.log("b lớn nhất");
} else if (c >= b && b >= a) {
    console.log("c lớn nhất");
} // 3 trường hợp nữa

// chỉ số BMI
// chiều cao và cân nặng


