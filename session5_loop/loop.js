// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let m = Number(prompt("Nhập m"));//parseInt();
// let n = Number(prompt("Nhập n"));//parseFloat();

// for (let i = m; i <= n; i++) {
//     console.log(i);
// }

// let n = Number(prompt("Nhập n"));
// let count = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         // console.log(i);
//         count++;
//         if (count > 2) {
//             break;
//         }
//     }
// }
// // console.log(`Có ${count} ước số`);
// if (count === 2) {
//     console.log("là số nguyên tố");
// } else {
//     console.log("không là số nguyên tố");
// }

// for (let i = 0; i <= 10; i++) {
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }

// Tính tổng từ 1 đến 100
// let s = 0;
// let n = Number(prompt("Nhập n"));

// for (let i = 1; i <= 100; i++) {
//     s += i;
// }

// for (let i = 0; i <= 2*n-1; i++) {
//     if(i % 2 === 1){
//         // console.log(i);
//         s += i;
//     }
// }

// for (let i = 2; i <= n; i++) {
//     s += (i - 1) * i;
// }

// Tính giai thừa của n
// let p = 1;
// for (let i = 1; i <= n; i++) {
//     p *= i;
// }
///////////////////////////

// let s = 0;
// let n = Number(prompt("Nhập n"));

// for (let i = 1; i <= n; i++) {
//     // tính giai thừa của i
//     let p = 1;
//     for (let j = 1; j <= i; j++) {
//         p *= j;
//     }

//     s += p; // s+= i!;
// }

// console.log(`Tổng là: ${s}`);


/////////////////////////////////////

// let n = Number(prompt("Nhập 1 số lớn hơn 8:"));

// while (n <= 8) {
//     n = Number(prompt("Nhập lại số lớn hơn 8:"));
// }

// console.log(n);

// Nhập 1 chuỗi nhiều hơn 8 kí tự
// let password = prompt("Nhập mật khẩu lớn hơn 8 kí tự");

// while (password.length <= 8) {
//     password = prompt("Nhập mật khẩu lớn hơn 8 kí tự");
// }

// console.log(password);

// Nhập 2 số, số đầu tiên dương, số thứ 2 âm
// sai nhập lại cả 2.

let a = Number(prompt("Nhập 1 số dương"));
let b = Number(prompt("Nhập 1 số âm"));

if (a <= 0 || b >= 0) {
    a = Number(prompt("Nhập 1 số dương"));
    b = Number(prompt("Nhập 1 số âm"));
}
console.log(a);
console.log(b);

// Nhập 1 mật khẩu dài hơn 8 kí tự
// và chứa kí tự @
// let pass = prompt("Nhập mk > 8 kí tự và chứa @");

// if(!(pass.length > 8 && pass.test('@'))){
//     pass = prompt("Nhập mk > 8 kí tự và chứa @");
// }
// console.log(pass);

////////////////
// let user = prompt("Nhập user");
// let pass = prompt("Nhập pass");

// while(!(user === 'admin' && pass === '123456')){
//     alert('Sai tk hoặc mk');
//     user = prompt("Nhập user");
//     pass = prompt("Nhập pass");
// }

// alert("Welcome admin");

///

let n = Number(prompt("Nhập 1 số lớn hơn 8:"));

while (true) {
    n = Number(prompt("Nhập lại số lớn hơn 8:"));

    if (n > 8) {
        break;
    }
}