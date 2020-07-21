let arr_empty = [];// mảng rỗng

let arr = [1, 2, 3, 4, 5];

let names = ["Tùng", 'Quang1', `Duy`];

let mixed = [1, 'Tùng', true]; // không dùng

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

let deleted = arr.splice(1, 3); // Xóa và trả về
console.log(deleted);

