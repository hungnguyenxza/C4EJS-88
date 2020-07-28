// 1. Tạo mảng gồm 3 điện thoại,
// chứa tên, giá, hãng

let phones = [
    {
        'name': 'iPhone X',
        'price': 20e6,
        'brand': 'Apple'
    },
    {
        'name': 'Galaxy Note 10',
        'price': 22e6,
        'brand': 'Samsung'
    },
    {
        'name': 'Xperia 2',
        'price': 15e6,
        'brand': 'Sony'
    }
];

// 2. In 
// for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     console.log(`${i + 1}`);
//     for (const key in phone) {
//         const value = phone[key];
//         console.log(`${key}: ${value}`);
//     }
// }

// 3. Nhập thêm đt
// let newName = prompt("Nhập tên:");
// let newPrice = Number(prompt("Nhập giá:"));
// let newBrand = prompt("Nhập hãng:");
// let newPhone = {
//     'name': newName,
//     'price': newPrice,
//     'brand': newBrand,
// };
// phones.push(newPhone);

// 4. In giá từ 10 - 20
// console.log("Đt có giá từ 10 đến 20 triệu");
// for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     if(phone.price >= 10e6 && phone.price <= 20e6){
//         for (const key in phone) {
//             const value = phone[key];
//             console.log(`${key}: ${value}`);
//         }
//     }
// }

// 5. In đt có chữ iphone (ko phân biệt hoa thường)
console.log("Đt có chữ iphone");
let search = 'iphone';
for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.name.toLowerCase()
        .includes(search.toLowerCase())) {

        console.log(phone);
    }
}

// 6. in ra hãng đt Apple
// Tương tự 5.

// 7. Cho ng dùng nhập 1 số thứ tự
// cho sửa thông tin của đt đó
let stt = Number(prompt("Nhập vị trí muốn sửa: "));
stt = stt - 1;
if (stt >= 0 && stt < phones.length) {
    phones[stt].name = prompt("Nhập tên mới");
    phones[stt].price = prompt("Nhập giá mới");
    phones[stt].brand = prompt("Nhập hãng mới");
} else {
    console.log("Nhập sai");
}
//8. Tìm đt giá cao nhất
let max = phones[0];
for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (max.price < phone.price) {
        max = phone;
    }
}
console.log(`Đt giá lớn nhất là:`);
for (const key in max) {
    const value = max[key];
    console.log(`${key}: ${value}`);
}