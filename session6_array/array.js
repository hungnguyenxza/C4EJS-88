let arr_empty = [];// mảng rỗng

let arr = [1, 2, 3, 4, 5];

let names = ["Tùng", 'Quang', `Duy`];

let mixed = [1, 'Tùng', true]; // không dùng

// console.log(names);

// console.log(name.length);// trả về đồ dài mảng

// console.log(names[names.length - 1]);

let countOdd = 0;
let isLarger10 = false;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 1) {
        countOdd++;
    }
    if (element > 10) {
        isLarger10 = true;
        break;
    }
}
console.log(`Có ${countOdd} số lẻ`);
if (isLarger10) {
    console.log("Có số lớn hơn 10");
} else {
    console.log("Không có số lớn hơn 10");
}

