// console.dir(document);

// console.dir(document.getElementById("welcome"));
// console.dir(document.getElementById("welcome").innerHTML);
let h1Welcome = document.getElementById("welcome");
console.log(h1Welcome.innerHTML);// lấy dữ liệu từ html

// đẩy dữ liệu vào html
h1Welcome.innerHTML = "Xin chào C4EJS 88";

let h1Now = document.getElementById("now");
var d = new Date();// lấy ra time hiện tại
h1Now.innerHTML = d;

// let name = prompt("Nhập tên");
// document.getElementById("name").innerHTML = 
// "Xin chào " + name;

// let listMenu = [
//     "Phở Thìn",
//     "Bún cá",
//     "Cơm rang",
//     "Bún đậu",
//     "Bún đậu 2",
//     "Bún đậu 3",
// ];

// let listPContent = document.getElementsByClassName("content");
// for (let i = 0; i < listPContent.length; i++) {
//     const pContent = listPContent[i];
//     pContent.innerHTML = listMenu[i];
// }

let listMenu = [
    "Phở Thìn",
    "Bún cá",
    "Cơm rang",
    "Bún đậu",
    "Bún đậu 2",
    "Bún đậu 3",
];
displayMenu(listMenu);

// Thêm món mới
// let newFood = prompt("Nhập món mới");
// listMenu.push(newFood);
// displayMenu(listMenu);

function displayMenu(menus) {
    let domMenu = document.getElementById("food-menu");
    domMenu.innerHTML = '';// xóa dữ liệu cũ
    for (let i = 0; i < menus.length; i++) {
        const food = menus[i];
        domMenu.innerHTML += `<li>${food}</li>`;
    }
}

function onClickWelcome() {
    alert("Bạn vừa click vào welcome");
}

function onClickButton() {
    document.getElementById('welcome').innerHTML =
        "~~~~~ Hello world ~~~~~";
}

// Tạo 1 button, mỗi khi click sẽ hiện ra thời gian hiện tại
function onGetTimeNow() {
    let now = new Date();
    document.getElementById('time-now').innerHTML = now;
}

function onDisplayName() {
    let name = document.getElementById("txt-name").value;
    // tag Input phải dùng value
    document.getElementById("display-name").innerHTML =
        `Xin chao ${name}`;
}

function onRemove(t, e) {
    //document.getElementsByClassName("btn-remove")[stt].remove();
    // console.dir(t); // t là 1 dom
    //t.remove();
    console.log(e);
}

function onKeyPress(e) {
    console.log(e);
    if (e.keyCode === 13) { // e.key === 'Enter'
        onDisplayName();
    }
}