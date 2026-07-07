//  Get basket from localStorage or start new
let cart = JSON.parse(localStorage.getItem("cart")) || [];


  

// Update cart count in nav (called on all pages)
function updateCartCount() {
  const count = cart.length;
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

// Add item to basket (used on index.html)
function addToCart(title, price) {
  cart.push({ title: title, price: parseFloat(price) }); // Make sure price is a number
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${title} added to basket.`);
}

// Show basket contents and total (used on basket.html)
function displayBasket() {
  const itemList = document.getElementById("basket-items");
  const totalPriceElement = document.getElementById("total-price");

  if (!itemList || !totalPriceElement) return; // Only run on basket.html

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - £${item.price.toFixed(2)}`;
    itemList.appendChild(li);
    total += parseFloat(item.price); // Total the price
  });

  totalPriceElement.innerHTML = `<strong>Total:</strong> £${total.toFixed(2)}`;
}

// Clear basket (used on basket.html)
function clearCart() {
  if (confirm("Are you sure you want to empty your basket?")) {
    localStorage.removeItem("cart");
    location.reload();
  }
}

// Show last 4 digits on success.html
function showLastFourDigits() {
  const lastDigits = localStorage.getItem("lastFourDigits") || "****";
  const target = document.getElementById("last-four");
  if (target) {
    target.textContent = `**** **** **** ${lastDigits}`;
    localStorage.removeItem("cart"); // Clear cart after success
  }
}

//  Run on every page
window.onload = function () {
  updateCartCount();
  displayBasket();
  showLastFourDigits();
};

// Toggle mobile menu visibility
function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    if (nav) {
        nav.classList.toggle("show");
    }
}
  