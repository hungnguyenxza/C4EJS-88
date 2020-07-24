// let object_empty = {};

// let myInfo = {
//     'name': 'Hung',
//     age: 25,
//     "school": 'ĐHBK',
//     favorite: ['watching', "reading"],
//     'class': {
//         'name': 'C4EJS 88'
//     }
// };

// console.log(myInfo);
// // Thêm mới
// myInfo['country'] = 'VN';
// myInfo.birthDay = 1996;
// console.log(myInfo);
// // Update
// myInfo['age'] = 20;
// myInfo.class = 'DHQG';
// console.log(myInfo);
// //Delete
// delete myInfo['class'];
// delete myInfo.favorite;
// console.log(myInfo);
// // Truy vấn
// for (const key in obj) {
//     // if (obj.hasOwnProperty(key)) {
//     // }
//     const value = obj[key];
//     // console.log(key);
//     // console.log(value);

//     console.log(`${key}: ${value}`);
// }

//

let obj = {};
obj.name = prompt("Nhập tên");
obj['age'] = Number(prompt("Nhập tuổi"));
obj.school = prompt("Nhập trường");

for (const key in obj) {
    const value = obj[key];
    console.log(`${key}: ${value}`);
}

let editKey = prompt("Nhập thông tin muốn sửa:");
if (obj.hasOwnProperty(editKey)) {
    obj[editKey] = prompt("Nhập giá trị mới");
    console.log('====== Cập nhật thành công =======');
    for (const key in obj) {
        const value = obj[key];
        console.log(`${key}: ${value}`);
    }
} else {
    alert("Nhập sai");
}

// Nhập value ==> xóa key
let valueDelete = prompt("Nhập giá trị muốn xóa:");
for (const key in obj) {
    const value = obj[key];
    if(value === valueDelete){
        delete obj[key];
    }
}
for (const key in obj) {
    const value = obj[key];
    console.log(`${key}: ${value}`);
}

