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

let s = 0;
let n = Number(prompt("Nhập n"));

for (let i = 1; i <= n; i++) {
    // tính giai thừa của i
    let p = 1;
    for (let j = 1; j <= i; j++) {
        p *= j;
    }

    s += p; // s+= i!;
}



console.log(`Tổng là: ${s}`);