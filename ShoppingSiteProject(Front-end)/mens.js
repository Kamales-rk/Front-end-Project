let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  document.getElementById('cart-count').textContent = `🛒 Cart: ${cart.length} items`;
  alert(`${product} added to cart!`);
}
