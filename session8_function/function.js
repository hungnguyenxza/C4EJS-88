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


// function tinhTong2(a, b){
//     let c = a + b;
//     return c;
// }

// let sum = tinhTong2(10, 20);
// console.log(sum);
// console.log(`Trung bình cộng: ${sum / 2}`);

// Nhận vào 1 số n, trả về tổng từ 1 -> n;
// in ra kết quả (ngoài function)

// Khai báo
// function tinhTong3(n){
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// let s = tinhTong3(100);
// console.log(s);
// console.log(tinhTong3(100));

// function giaiThua(n){
//     let p = 1;
//     for (let i = 1; i <= n; i++) {
//         p *= i;
//     }
//     return p;
// }
// // let p = giaiThua(5);
// // console.log(p);//120

// function tongCuaMang(arr){
//     let s = 0;
//     for (let i = 0; i < arr.length; i++) {
//         s += arr[i];
//     }
//     return s;
// }

// function spliceMang(arr, n){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < n){
//             newArr.push(arr[i]);
//         }        
//     }
//     return newArr;
// }

// function gt(n){
//     if(n === 1){
//         return 1;
//     }
//     return n * gt(n - 1);
// }

// console.log(gt(10));




// // Array Interation
// let arr = [1, 20, 6, 12, 7, 10, 9, 5];

// let index = arr.findIndex(function (v){
//     return v === 100;
// });

// console.log(index);

// arr.findIndex(function (v, i, a){

// });

// arr.findIndex(function (v, i){
//     return i > 5;
// })

// function giaTriBang6(v, i, a){
//     return v === 6;
// }

// arr.findIndex(giaTriBang6);

// // Tìm giá trị = 20;
// console.log(arr.find(giaTriLonHon20));
// function giaTriLonHon20(v){
//     return v > 20;
// }
// //
// let phones = ['iPhone X',
//             'Galaxy Note 10',
//             'Xperia 2'];
// //(không phân biệt hoa-thường)
// // 1. Tìm tên 1 đt có chứa chữ 'a'
// // 2. Tìm các đt có chứa chữ 'g'
// // 3. Tìm các đt có tên dài hơn 8 kí tự
// // 4. Tìm tên 1 đt có tên bắt đầu bởi 'x'

let phones = [
    {
        'name': 'iPhone X',
        'price': 20e6,
        'brand': 'Apple',
    },
    {
        'name': 'Galaxy Note 10',
        'price': 22e6,
        'brand': 'Samsung',
    },
    {
        'name': 'Xperia 2',
        'price': 15e6,
        'brand': 'Sony',
    },
    {
        'name': 'aperia 2',
        'price': 15e6,
        'brand': 'Sony',
    }
];

// 1. Tìm đt có giá lớn hơn 18 triệu
// 2. Tìm đt có tên chứa chữ 'iphone'
// 3. Tìm đt có giá trong khoảng 10 -> 20 triệu
// 4. Có đt nào < 18 triệu không
// 5. Tìm các đt của hãng Apple
// 6. Tìm đt có giá cao nhất, nhỏ nhất
// 7. Tính tổng giá trị của tất cả đt
// 8. Có bao nhiêu đt của hãng Sony
// 9. Sắp xếp đt theo tên a-z
// 10. Sắp xếp đt theo giá cao -> thấp

let result = phones.filter(function (phone, index) {
    return phone.price > 18e6;
});

// print(result);

function print(phones) {
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        console.log(`${i + 1}`);
        for (const key in phone) {
            const value = phone[key];
            console.log(`${key}: ${value}`);
        }
    }
}
// Sort by name

phones.sort(function (p1, p2){
    return p2.name.localeCompare(p1.name);
});
print(phones);




