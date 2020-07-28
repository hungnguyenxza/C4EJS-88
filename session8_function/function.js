function hello() {
    console.log("Welcome C4EJS 88");
}
// hello();
// hello();
// hello();

function welcome(s) {
    console.log(s);
}
// let xinChao = "Welcome C4E 11111";
// welcome(xinChao);

// function tinhTong(a, b) {
//     let c = a + b;
//     console.log(c);
// }
// let soThuNhat = 10;
// let soThuHai = 5;
// tinhTong(soThuNhat, soThuHai);

// function giaiPtBac1(a, b) {
//     if (a === 0) {
//         if (b === 0) {
//             console.log("Vô số nghiệm");
//         }
//         else {
//             console.log("Vô nghiệm");
//         }
//     } else {
//         let x = -b / a;
//         console.log(`Nghiệm duy nhất: ${x}`);
//     }
// }


function tinhTong2(a, b){
    let c = a + b;
    return c;
}

let sum = tinhTong2(10, 20);
console.log(sum);
console.log(`Trung bình cộng: ${sum / 2}`);

// Nhận vào 1 số n, trả về tổng từ 1 -> n;
// in ra kết quả (ngoài function)

function tinhTong3(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let s = tinhTong3(100);
console.log(s);