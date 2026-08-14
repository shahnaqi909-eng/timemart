let cart = [];


/* FILTER */

function toggleFilter(id) {

    const element = document.getElementById(id);

    if (element) {
        element.classList.toggle("show");
    }

}


/* MOBILE MENU */

function toggleMenu() {

    const menu = document.getElementById("navigation");

    if (menu) {
        menu.classList.toggle("open");
    }

}


/* FAVORITES */

function addFavorite(element) {

    if (element.innerHTML.trim() === "♡") {

        element.innerHTML = "♥";
        element.style.color = "#c7531a";

    } else {

        element.innerHTML = "♡";
        element.style.color = "#111";

    }

}


/* CART */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart! ⌚");

}


function updateCart() {

    const count = document.getElementById("cart-count");
    const items = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    if (count) {
        count.textContent = cart.length;
    }

    if (!items) {
        return;
    }

    items.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total += item.price;

        items.innerHTML += `
            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <span>
                    Rs. ${item.price.toLocaleString()}
                </span>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;

    });

    if (totalElement) {
        totalElement.textContent = total.toLocaleString();
    }

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    const modal = document.getElementById("cart-modal");

    if (modal) {
        modal.style.display = "flex";
    }

    updateCart();

}


function closeCart() {

    const modal = document.getElementById("cart-modal");

    if (modal) {
        modal.style.display = "none";
    }

}


/* WHATSAPP CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let message = "Hello TimeMart! I want to order:%0A%0A";

    let total = 0;


    cart.forEach(function(item) {

        message += "⌚ " + item.name;
        message += " - Rs. " + item.price.toLocaleString();
        message += "%0A";

        total += item.price;

    });


    message += "%0ATotal: Rs. " + total.toLocaleString();


    /*
       CHANGE THIS NUMBER
       TO YOUR WHATSAPP NUMBER
    */

    const phone = "923287173589";


    window.open(
        "https://wa.me/" + phone + "?text=" + message,
        "_blank"
    );

}


/* SEARCH */

function searchProducts() {

    const search = prompt("What watch are you looking for?");

    if (search) {

        alert(
            "Searching TimeMart for: " + search
        );

    }

}
