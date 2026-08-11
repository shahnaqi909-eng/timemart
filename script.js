// TimeMart Shopping Cart

let cart = [];

// Add product to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " has been added to your cart! ⌚");
}

// Update cart
function updateCart() {

    // Update cart number
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    // Get cart items area
    const cartItems = document.getElementById("cart-items");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    // Display products
    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
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

    // Update total
    const cartTotal = document.getElementById("cart-total");

    if (cartTotal) {
        cartTotal.textContent = total.toLocaleString();
    }
}

// Remove product
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

// Open shopping cart
function openCart() {

    const cartModal = document.getElementById("cart-modal");

    if (cartModal) {
        cartModal.style.display = "flex";
    }

    updateCart();
}

// Close shopping cart
function closeCart() {

    const cartModal = document.getElementById("cart-modal");

    if (cartModal) {
        cartModal.style.display = "none";
    }
}

// Checkout through WhatsApp
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }

    let message = "Hello TimeMart! 👋%0A";
    message += "I want to order:%0A%0A";

    let total = 0;

    cart.forEach(function(item) {

        message += "⌚ " + item.name;
        message += " - Rs. " + item.price.toLocaleString();
        message += "%0A";

        total += item.price;
    });

    message += "%0A";
    message += "Total: Rs. " + total.toLocaleString();
    message += "%0A%0A";
    message += "Please confirm my order.";

    // CHANGE THIS TO YOUR WHATSAPP NUMBER
    const phoneNumber = "923000000000";

    const whatsappURL =
        "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
}

// Close cart if user clicks outside it
window.addEventListener("click", function(event) {

    const cartModal = document.getElementById("cart-modal");

    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }

});
