// var dataArray = JSON.parse(localStorage.getItem("store")) || [];
require("dotenv").config();

// console.log(process.env.SERVER);


console.log(process.env.SERVER);

// async function storedata() {
//     event.preventDefault();
//     var objArray = {
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("pass").value,
//     };

//     await fetch(process.env.SERVER`/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(objArray),
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             window.location.href = "login.html";
//         })
//         .catch((err) => console.log(err));

    // dataArray.push(objArray);
    // localStorage.setItem("store", JSON.stringify(dataArray));
    // var st = JSON.parse(localStorage.getItem("store"));
    // console.log(st);
    // window.location.href = "login.html";
    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("pass").value = "";
    // document.getElementById("mobile").value = "";
// }