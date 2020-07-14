
// let a = Number(prompt("Nhập a"));

// if (a > 2) {
//     console.log("a lớn hơn 2");
// } else if (a < 2) {
//     console.log("a bé hơn 2");
// } else {
//     console.log("a = 2");
// }

// let b = Number(prompt("Nhập b"));
// if (a > b) {
//     console.log("a lớn hơn b");
// } else if (a < b) {
//     console.log("a nhỏ hơn b");
// } else {
//     console.log("a = b");
// }

// let c = Number(prompt("Nhập c"));
// if (a >= b && b >= c) {
//     console.log("a lớn nhất");
// } else if (b >= a && a >= c) {
//     console.log("b lớn nhất");
// } else if (c >= b && b >= a) {
//     console.log("c lớn nhất");
// } // 3 trường hợp nữa

// chỉ số BMI
// chiều cao và cân nặng
// let height = Number(prompt("Nhập chiều cao (cm): "));
// let weight = Number(prompt("Nhập cân nặng (kg): "));

// let bmi = weight / (height ** 2 / 10000);
// //console.log(bmi);
// if (bmi < 18.5) {
//     console.log("Dưới chuẩn");
// } else if (bmi <= 24.9) {
//     console.log("Bình thường");
// } else if (bmi <= 29.9) {
//     console.log("Thừa cân");
// } else {
//     console.log("Béo phì");
// }

let month = parseInt(prompt("Nhập tháng trong năm"));
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 ngày");
        break;
    case 2:
        console.log("Tháng 2 có 28 hoặc 29 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 ngày");
        break;
    default:
        console.log("Nhập sai tháng");
}
