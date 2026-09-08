/* ---------- Product detail page logic ---------- */

// Reviews live only in this tab's memory — starts empty, no seeded reviews.
const REVIEWS = {}; // { productId: [ {name, rating, comment, date} ] }

function getParam(name){
  return new URLSearchParams(window.location.search).get(name);
}

function starString(n){
  return "★".repeat(n) + "☆".repeat(5 - n);
}

let currentProduct = null;
let currentQty = 1;

function renderProduct(){
  const id = getParam("id") || "1";
  const p = getProductById(id);
  const wrap = document.getElementById("pdWrap");
  if (!p){
    wrap.innerHTML = `<div class="container" style="padding:80px 0;text-align:center;">
      <h2>Garland not found</h2>
      <p style="color:var(--muted);margin-bottom:24px;">This garland may have moved. Take a look at the full collection instead.</p>
      <a class="btn btn-primary" href="index.html">Back to shop</a>
    </div>`;
    return;
  }
  currentProduct = p;
  document.title = `${p.name} — Swamishrayy Creations`;

  wrap.innerHTML = `
  <div class="container pd-wrap">
    <div class="breadcrumb"><a href="index.html">Home</a> / <a href="index.html#shop">Shop</a> / ${p.name}</div>

    <div class="pd-grid">
      <div class="pd-gallery">
        <div class="main-image"><img src="${p.image}" alt="${p.name}" id="pdMainImg"></div>
      </div>

      <div class="pd-info">
        <span class="p-tag">${p.badge}</span>
        <h1>${p.name}</h1>
        <p style="color:var(--pink);font-family:var(--font-display);font-style:italic;margin-bottom:14px;">${p.tagline}</p>
        <div class="pd-rating" id="pdRatingLine">No reviews yet — be the first to share yours</div>
        <div class="pd-price">₹${p.price} <small>₹${p.mrp}</small></div>
        <p class="pd-lead">${p.shortDesc}</p>
        <blockquote class="pd-quote">${p.quote}</blockquote>

        <div class="pd-qty-row">
          <span class="qty-stepper" style="border-color:var(--line)">
            <button onclick="stepQty(-1)" aria-label="Decrease quantity">−</button>
            <span id="qtyDisplay">1</span>
            <button onclick="stepQty(1)" aria-label="Increase quantity">+</button>
          </span>
          <span style="color:var(--muted);font-size:.85rem;">Sold as shown — pair of strands</span>
        </div>

        <div class="pd-actions">
          <button class="btn btn-outline" onclick="addCurrentToCart()">Add to Cart</button>
          <button class="btn btn-primary" onclick="buyNowCurrent()">Buy Now on Telegram</button>
        </div>

        <div class="trust-mini">
          <span><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z"/></svg>100% pure cotton</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>Handmade to order</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M3 3h13v13H3zM16 8h4l1 4v4h-5"/></svg>Ships across India</span>
        </div>

        <dl class="pd-meta-list">
          ${p.details.map(d => {
            const [k, ...rest] = d.split(":");
            return `<div><dt>${k}</dt><dd>${rest.join(":").trim()}</dd></div>`;
          }).join("")}
        </dl>
      </div>
    </div>

    <div class="pd-tabs">
      <div class="tab-buttons">
        <button class="active" data-tab="overview">Description</button>
        <button data-tab="care">Craft &amp; Care</button>
        <button data-tab="reviews">Reviews</button>
      </div>

      <div class="tab-panel active" id="tab-overview">
        <h3>About this garland</h3>
        <p>${p.overview}</p>
        <h3>How it's made</h3>
        <p>${p.craft}</p>
      </div>

      <div class="tab-panel" id="tab-care">
        <h3>Care instructions</h3>
        <p>${p.care}</p>
        <ul>
          <li>Keep away from direct water, sunlight and open flames</li>
          <li>Store flat in a box or soft pouch when not in use</li>
          <li>Dust gently with a soft, dry brush to refresh the petals</li>
        </ul>
      </div>

      <div class="tab-panel" id="tab-reviews">
        <div class="rating-summary" id="ratingSummary"></div>
        <div class="review-list" id="reviewList"></div>

        <form class="review-form" id="reviewForm">
          <h3>Write a review</h3>
          <p class="hint">Bought this garland? Tell others what you thought.</p>
          <div class="star-input" id="starInput" data-value="0">
            <span data-star="1">★</span><span data-star="2">★</span><span data-star="3">★</span><span data-star="4">★</span><span data-star="5">★</span>
          </div>
          <div class="field">
            <label for="revName">Your name</label>
            <input type="text" id="revName" required placeholder="e.g. Priya S.">
          </div>
          <div class="field">
            <label for="revComment">Your review</label>
            <textarea id="revComment" required placeholder="Share how the garland looked, felt and held up..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit Review</button>
        </form>
      </div>
    </div>

    <div class="related-heading">
      <div class="section-head" style="text-align:left;margin-bottom:24px;">
        <h2>You may also like</h2>
      </div>
      <div class="products-grid" id="relatedGrid"></div>
    </div>
  </div>`;

  bindTabs();
  bindStarInput();
  renderReviews();
  renderRelated(p);

  document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const rating = parseInt(document.getElementById("starInput").dataset.value, 10);
    const name = document.getElementById("revName").value.trim();
    const comment = document.getElementById("revComment").value.trim();
    if (!rating){ showToast("Please select a star rating"); return; }
    if (!REVIEWS[p.id]) REVIEWS[p.id] = [];
    REVIEWS[p.id].push({ name, rating, comment, date: new Date() });
    e.target.reset();
    document.getElementById("starInput").dataset.value = 0;
    updateStarDisplay(0);
    renderReviews();
    showToast("Thank you — your review has been posted");
  });
}

function stepQty(delta){
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById("qtyDisplay").textContent = currentQty;
}

function addCurrentToCart(){
  if (!currentProduct) return;
  addToCart(currentProduct, currentQty);
}

function buyNowCurrent(){
  if (!currentProduct) return;
  buyNowViaTelegram(currentProduct, currentQty);
}

function bindTabs(){
  const buttons = document.querySelectorAll(".tab-buttons button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });
}

function bindStarInput(){
  const input = document.getElementById("starInput");
  const stars = input.querySelectorAll("span");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const val = parseInt(star.dataset.star, 10);
      input.dataset.value = val;
      updateStarDisplay(val);
    });
  });
}
function updateStarDisplay(val){
  document.querySelectorAll("#starInput span").forEach(star => {
    star.classList.toggle("on", parseInt(star.dataset.star, 10) <= val);
  });
}

function renderReviews(){
  const list = REVIEWS[currentProduct.id] || [];
  const summaryEl = document.getElementById("ratingSummary");
  const listEl = document.getElementById("reviewList");
  const lineEl = document.getElementById("pdRatingLine");

  if (list.length === 0){
    summaryEl.innerHTML = `
      <div class="rating-big">
        <div class="num">—</div>
        <div class="stars">${starString(0)}</div>
        <div class="count">No reviews yet</div>
      </div>
      <div class="rating-bars" style="color:var(--muted);font-size:.88rem;">Be the first to review this garland — your feedback helps other buyers decide with confidence.</div>`;
    listEl.innerHTML = `<div class="review-empty">No reviews yet. Once you've received your garland, come back and share what you thought!</div>`;
    lineEl.textContent = "No reviews yet — be the first to share yours";
    return;
  }

  const avg = (list.reduce((s, r) => s + r.rating, 0) / list.length);
  const counts = [5,4,3,2,1].map(star => list.filter(r => r.rating === star).length);

  summaryEl.innerHTML = `
    <div class="rating-big">
      <div class="num">${avg.toFixed(1)}</div>
      <div class="stars">${starString(Math.round(avg))}</div>
      <div class="count">${list.length} review${list.length > 1 ? "s" : ""}</div>
    </div>
    <div class="rating-bars">
      ${[5,4,3,2,1].map((star,i) => `
        <div class="rbar-row">
          <span>${star}★</span>
          <span class="rbar-track"><span class="rbar-fill" style="width:${(counts[i]/list.length*100).toFixed(0)}%"></span></span>
          <span>${counts[i]}</span>
        </div>`).join("")}
    </div>`;

  lineEl.innerHTML = `${starString(Math.round(avg))} <strong>${avg.toFixed(1)}</strong> · ${list.length} review${list.length > 1 ? "s" : ""}`;

  listEl.innerHTML = [...list].reverse().map(r => `
    <div class="review-item">
      <div class="rh">
        <span class="r-name">${escapeHtml(r.name) || "Anonymous"}</span>
        <span class="r-date">${r.date.toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}</span>
      </div>
      <div class="stars">${starString(r.rating)}</div>
      <p>${escapeHtml(r.comment)}</p>
    </div>`).join("");
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderRelated(current){
  const others = PRODUCTS.filter(p => p.id !== current.id).slice(0, 4);
  document.getElementById("relatedGrid").innerHTML = others.map(p => `
    <article class="product-card">
      <a href="product.html?id=${p.id}" target="_blank" rel="noopener" class="product-thumb">
        <span class="tag">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </a>
      <div class="product-body">
        <a href="product.html?id=${p.id}" target="_blank" rel="noopener" class="p-name">${p.name}</a>
        <p class="p-desc">${p.shortDesc}</p>
        <div class="p-bottom"><span class="p-price"><span class="old">₹${p.mrp}</span>₹${p.price}</span></div>
        <div class="p-actions">
          <button class="btn btn-outline btn-sm" onclick='addToCart(${JSON.stringify({id:p.id,name:p.name,price:p.price,image:p.image})})'>Add to Cart</button>
          <a class="btn btn-primary btn-sm" href="product.html?id=${p.id}" target="_blank" rel="noopener">View</a>
        </div>
      </div>
    </article>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  injectPartials("product");
  renderProduct();
});
