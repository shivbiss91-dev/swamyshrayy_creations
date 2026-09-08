/* =========================================================
   Cart — kept in memory for this browser tab.
   Checkout hands the order over to Telegram/Instagram DM,
   since Swamishrayy Creations takes orders there directly.
   ========================================================= */

const CART = { items: [] }; // { id, name, price, image, qty }

function addToCart(product, qty = 1){
  const existing = CART.items.find(i => i.id === product.id);
  if (existing){
    existing.qty += qty;
  } else {
    CART.items.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty });
  }
  renderCart();
  updateCartCount();
  showToast(`Added "${product.name}" to your cart`);
}

function removeFromCart(id){
  CART.items = CART.items.filter(i => i.id !== id);
  renderCart();
  updateCartCount();
}

function changeQty(id, delta){
  const item = CART.items.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){ removeFromCart(id); return; }
  renderCart();
  updateCartCount();
}

function cartTotal(){
  return CART.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}
function cartCount(){
  return CART.items.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartCount(){
  document.querySelectorAll(".cart-count").forEach(el => {
    const c = cartCount();
    el.textContent = c;
    el.style.display = c > 0 ? "flex" : "none";
  });
}

function renderCart(){
  const list = document.getElementById("cartItems");
  const foot = document.getElementById("cartFoot");
  if (!list) return;

  if (CART.items.length === 0){
    list.innerHTML = `<div class="cart-empty">
      <p>Your cart is empty.</p>
      <p>Browse our cotton garlands and add your favourites.</p>
    </div>`;
    if (foot) foot.style.display = "none";
    return;
  }

  if (foot) foot.style.display = "block";
  list.innerHTML = CART.items.map(i => `
    <div class="cart-item">
      <img src="${i.image}" alt="${i.name}">
      <div class="ci-info">
        <div class="ci-name">${i.name}</div>
        <div class="ci-meta">
          <span>₹${i.price} × </span>
          <span class="qty-stepper">
            <button onclick="changeQty(${i.id},-1)" aria-label="Decrease quantity">−</button>
            <span>${i.qty}</span>
            <button onclick="changeQty(${i.id},1)" aria-label="Increase quantity">+</button>
          </span>
          <button class="ci-remove" onclick="removeFromCart(${i.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  const totalEl = document.getElementById("cartTotalValue");
  if (totalEl) totalEl.textContent = `₹${cartTotal()}`;
}

function openCart(){
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("cartBackdrop")?.classList.add("open");
}
function closeCart(){
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("cartBackdrop")?.classList.remove("open");
}

function checkoutViaTelegram(){
  if (CART.items.length === 0) return;
  let msg = `Hi Swamishrayy Creations! I'd like to order:\n`;
  CART.items.forEach(i => { msg += `• ${i.name} × ${i.qty} — ₹${i.price * i.qty}\n`; });
  msg += `\nTotal: ₹${cartTotal()}\n\nPlease confirm availability and delivery details.`;
  window.open(telegramLink(msg), "_blank");
}

function buyNowViaTelegram(product, qty){
  const msg = `Hi Swamishrayy Creations! I'd like to order:\n• ${product.name} × ${qty} — ₹${product.price * qty}\n\nPlease confirm availability and delivery details.`;
  window.open(telegramLink(msg), "_blank");
}

let toastTimer;
function showToast(text){
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.querySelector("span").textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function bindCartUI(){
  updateCartCount();
  renderCart();
  document.getElementById("cartToggle")?.addEventListener("click", openCart);
  document.getElementById("cartToggleMobile")?.addEventListener("click", openCart);
  document.getElementById("cartClose")?.addEventListener("click", closeCart);
  document.getElementById("cartBackdrop")?.addEventListener("click", closeCart);
  document.getElementById("checkoutBtn")?.addEventListener("click", checkoutViaTelegram);
}
