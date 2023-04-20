var cart = [];


innercart();


async function innercart() {
    const token = localStorage.getItem("auth-token");
    await fetch("https://long-jade-coati-fez.cyclic.app/cartpage", {
        method: "GET",

        headers: {
            "Authorization": `Bearer ${token}`,
        },
    }).then((res) => res.json()).then((res) => { res.map((e) => { cart.push(e) }) }).then(() => display(cart)).catch((err) => { console.log(err) })
}

// display(cart);

function display(cart) {

    document.querySelector("#items").innerText = "";

    if (cart.length == 0) {

        window.location.href = "cart.html"

    } else {




        cart.map(function (e, i) {
            var div1 = document.createElement("div");
            div1.setAttribute("id", "cartitems");



            var div3 = document.createElement("div");
            div3.setAttribute("class", "leftmargin");
            div3.innerText = e.title;

            var div6 = document.createElement("div");
            div6.setAttribute("class", "imageandprice");


            var img = document.createElement("img");
            img.setAttribute("class", "imageclass");
            img.setAttribute("src", e.image);


            var div4 = document.createElement("div");
            div4.setAttribute("class", "boxforbtn");

            var div7 = document.createElement("div");
            //div5.setAttribute("class", "leftmargin");
            div7.innerText = "Qty: " + e.qty;



            var div5 = document.createElement("div");
            //div5.setAttribute("class", "leftmargin");
            div5.innerText = "₹ " + e.price;


            var btn = document.createElement("button");
            btn.setAttribute("class", "deletebtn");
            btn.textContent = "DELETE";
            btn.addEventListener("click", function () {
                removefun(e);
            })

            div4.append(div7, div5, btn)
            div6.append(img, div4);

            div1.append(div3, div6);

            document.querySelector("#items").append(div1);




        })
    }
    bill(cart);
    // if (cart.length == 0) {
    //     window.location.href = "cart2.html";
    // }
}


async function removefun(e) {
    const token = localStorage.getItem("auth-token");

    await fetch(`https://long-jade-coati-fez.cyclic.app/cartpage/${e._id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
        },

    }).then((res) => res.json()).then((res) => { alert("item removed"); window.location.reload() }).catch(err => console.log(err));

}

function inc_qua(e, i, k) {
    event.preventDefault();
    cart[i].quantity = k;
    cart[i].fcprice = e.quantity * e.cprice;
    cart[i].ftprice = e.quantity * e.tprice;
    cart[i].fprice = e.quantity * e.price;
    localStorage.setItem("cart", JSON.stringify(cart));
    display(cart);
}

function rem_qua(e, i) {
    cart = cart.filter(function (elem, index) {
        if (e != elem) {
            return true;
        }
    })
    display(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function bill(cart) {
    var quantity = 0;
    var MRP = 0;
    var bDiscount = 0;
    var shipping = 0;
    var stotal = 0;
    var cdiscount = 0;
    var ttotal = 0;
    cart.map(function (e, i) {
        quantity += Number(e.qty);
        MRP += Number(e.price);

    })
    bDiscount = -1 * bDiscount;
    if (MRP > 4000) {
        shipping = 0;
    }
    else {
        shipping = 200;
    }
    if (document.querySelector("#iCoupon").value == "NEW200") {
        cdiscount = -200;
    }
    if (document.querySelector("#iCoupon").value == "NEW20") {
        cdiscount = -20;
    }
    var stotal = shipping + MRP + bDiscount + cdiscount;

    document.querySelector('#Price_Summary>div:first-child>div:last-child').textContent = "₹" + MRP;
    document.querySelector("#Price_Summary>div:nth-child(2)>div:last-child").textContent = "₹" + shipping;
    document.querySelector("#Price_Summary>div:nth-child(3)>div:last-child").textContent = "₹" + (bDiscount);
    document.querySelector("#Price_Summary>div:nth-child(4)>div:last-child").textContent = "₹" + cdiscount;
    document.querySelector("#Price_Summary>div:nth-child(5)>div:last-child").textContent = "₹" + stotal;
    document.querySelector("#youhave").textContent = "You Have Save ₹" + -1 * (bDiscount + cdiscount);
    document.querySelector("#total>div>h3:last-child").textContent = "₹" + stotal;
    document.querySelector("#save>p").textContent = "Save Extra ₹" + ttotal + " with tribe Membership";
    document.querySelector("#heading>div:last-child>p").textContent = "You get ₹" + shipping + " delivery charges on this order";
    document.querySelector("#My_Bag").textContent = "My Bag contains " + quantity + " items";
    localStorage.setItem("lstotal", stotal);
}
function submit() {
    bill(cart);
}
function goToAdd() {
    window.location.href = "payment.html"
}





