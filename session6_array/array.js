// let arr_empty = [];// mảng rỗng

// let arr = [1, 2, 3, 4, 5];

// let names = ["Tùng", 'Quang1', `Duy`];

// let mixed = [1, 'Tùng', true]; // không dùng

// console.log(names);

// console.log(name.length);// trả về đồ dài mảng

// console.log(names[names.length - 1]);

// let countOdd = 0;
// let isLarger10 = false;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element % 2 === 1) {
//         countOdd++;
//     }
//     if (element > 10) {
//         isLarger10 = true;
//         break;
//     }
// }
// console.log(`Có ${countOdd} số lẻ`);
// if (isLarger10) {
//     console.log("Có số lớn hơn 10");
// } else {
//     console.log("Không có số lớn hơn 10");
// }

// arr.unshift(6, 7, 8);
// console.log(arr);

// arr[6] = 10; // không dùng để thêm
// console.log(arr);

// arr[3] = 100; // sửa
// console.log(arr);
// arr[3] *= 2;
// console.log(arr);

// //
// let first = arr.shift(); // Xóa và trả về
// let last = arr.pop(); // Xóa và trả về
// // console.log(arr);
// console.log(first);
// console.log(last);

// let deleted = arr.splice(1, 3); // Xóa và trả về
// console.log(deleted);

// Bài về nhà (bảng)

// 1. Nhập 5 số
let arr = [6, 45, 10, 25, 6, 50];
let totalNumber = 5;
// for (let i = 0; i < totalNumber; i++) {
//     let n = Number(prompt("Nhập 1 số"));
//     arr.push(n);
// }

// // 2. số chẵn và số lượng
// console.log(`======== Bài 2 =========`);
// let totalEven = 0;
// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     if (value % 2 === 0) {
//         console.log(value);
//         totalEven++;
//     }
// }
// console.log(`Có ${totalEven} số chẵn`);

// // cách 2;
// let arrEven = [];
// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     if (value % 2 === 0) {
//         arrEven.push(value);
//     }
// }
// console.log(`Các số chẵn là ${arrEven}
//             Tổng số: ${arrEven.length}`);

// 3. số > 10 và số lượng

// 4. tính tổng, tbc

// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     s += value;
// }
// console.log(`Tổng là: ${s}`);
// console.log(`Trung bình cộng là: ${s / arr.length}`);

// 5. nhập 1 index, và update giá trị mới
// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     console.log(`#${i + 1}: ${value}`);
// }
// let index = parseInt(prompt("Nhập vị trí muốn sửa")) - 1;
// if (index >= 0 && index < arr.length) {
//     arr[index] = Number(prompt("Nhập giá trị mới"));

//     console.log("=========== Cập nhật thành công ===========");
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//         console.log(`#${i + 1}: ${value}`);
//     }
// } else {
//     console.log(`Sai vị trí`);
// }
// 6. nhập 1 số, xóa số bé hơn số đó
console.log(arr);
let number = Number(prompt("Nhập 1 số"));
for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value < number) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

// =========================== //

// Tìm min 

let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;
    }
}

console.log(`Giá trị nhỏ nhất là: ${min}`);

// Sắp xếp;
// 2 vòng lặp lồng nhau

