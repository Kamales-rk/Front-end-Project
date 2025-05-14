let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const totalText = document.getElementById('total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalText.textContent = `Total: $${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Cart is empty!');
    return;
  }
  alert('Checkout successful!');
  cart = [];
  renderCart();
}
