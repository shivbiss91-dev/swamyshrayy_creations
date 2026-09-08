/* ---------- Homepage logic ---------- */

function renderProductCard(p){
  return `
  <article class="product-card">
    <a href="product.html?id=${p.id}" target="_blank" rel="noopener" class="product-thumb">
      <span class="tag">${p.badge}</span>
      <img src="${p.image}" alt="${p.name}" loading="lazy">
    </a>
    <div class="product-body">
      <a href="product.html?id=${p.id}" target="_blank" rel="noopener" class="p-name">${p.name}</a>
      <p class="p-desc">${p.shortDesc}</p>
      <div class="p-bottom">
        <span class="p-price"><span class="old">₹${p.mrp}</span>₹${p.price}</span>
      </div>
      <div class="p-actions">
        <button class="btn btn-outline btn-sm" onclick='addToCart(${JSON.stringify({id:p.id,name:p.name,price:p.price,image:p.image})})'>Add to Cart</button>
        <a class="btn btn-primary btn-sm" href="product.html?id=${p.id}" target="_blank" rel="noopener">View</a>
      </div>
    </div>
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  injectPartials("home");

  const grid = document.getElementById("productsGrid");
  if (grid){
    grid.innerHTML = PRODUCTS.map(renderProductCard).join("");
  }
});
