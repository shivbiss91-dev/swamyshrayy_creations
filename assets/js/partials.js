/* =========================================================
   Shared header / footer / cart drawer / toast markup
   ========================================================= */

function renderHeader(activePage){
  const homeHref = activePage === "product" ? "index.html" : "index.html";
  return `
  <div class="notice-bar">Handmade to order, ships across India · DM us for custom colours on <a href="${instagramLink()}" target="_blank" rel="noopener">Instagram</a></div>
  <header class="site-header">
    <div class="container nav-row">
      <a href="index.html" class="brand" aria-label="${BRAND.name} home">
        <span class="brand-mark">
          <img src="img/logo-icon.png" alt="${BRAND.name} logo">
        </span>
        <span class="brand-text">
          <span class="brand-name">${BRAND.name}</span>
          <span class="brand-tag">${BRAND.tagline}</span>
        </span>
      </a>
      <nav class="main-nav" id="mainNav" aria-label="Primary">
        <ul>
          <li><a href="index.html#shop">Shop</a></li>
          <li><a href="index.html#story">Our Story</a></li>
          <li><a href="index.html#peacock">Peacock Collection</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-actions">
        <a class="icon-btn" href="${instagramLink()}" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a class="icon-btn" href="${telegramLink()}" target="_blank" rel="noopener" aria-label="Telegram">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M21 4 3 11.2l6 2.2m12-9.4L15.8 20l-4.4-6.4m9.6-9.6-9.6 9.6"/></svg>
        </a>
        <button class="icon-btn" id="cartToggle" aria-label="Open cart">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h3l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L22 6H6"/></svg>
          <span class="cart-count" style="display:none">0</span>
        </button>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter(){
  return `
  <footer id="contact">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="brand" style="margin-bottom:16px;">
            <span class="brand-mark"><img src="img/logo-icon.png" alt="${BRAND.name} logo"></span>
            <span class="brand-text"><span class="brand-name">${BRAND.name}</span></span>
          </a>
          <p>Simple, sacred &amp; special — pure cotton garlands, hand-shaped one petal at a time for the gods you welcome home.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="index.html#shop">All garlands</a></li>
            <li><a href="index.html#peacock">Peacock Collection</a></li>
            <li><a href="index.html#story">Our story</a></li>
          </ul>
        </div>
        <div>
          <h4>Good to know</h4>
          <ul>
            <li>Handmade to order</li>
            <li>Ships across India</li>
            <li>Orders confirmed via DM</li>
          </ul>
        </div>
        <div>
          <h4>Order &amp; ask us anything</h4>
          <div class="footer-contact-list">
            <a href="${instagramLink()}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
              @${BRAND.instagramHandle}
            </a>
            <a href="${telegramLink('Hi Swamishrayy Creations! I have a question about your cotton garlands.')}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M21 4 3 11.2l6 2.2m12-9.4L15.8 20l-4.4-6.4m9.6-9.6-9.6 9.6"/></svg>
              @${BRAND.telegramUsername} on Telegram
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${BRAND.name}. All garlands handmade with pure cotton, with love.</div>
    </div>
  </footer>`;
}

function renderCartDrawer(){
  return `
  <div class="cart-drawer-backdrop" id="cartBackdrop"></div>
  <aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">
    <div class="cart-head">
      <h3>Your Cart</h3>
      <button class="cart-close" id="cartClose" aria-label="Close cart">&times;</button>
    </div>
    <div class="cart-items" id="cartItems"></div>
    <div class="cart-foot" id="cartFoot" style="display:none">
      <div class="cart-total-row"><span>Total</span><span id="cartTotalValue">₹0</span></div>
      <button class="btn btn-primary btn-block" id="checkoutBtn">Checkout via Telegram</button>
      <p style="font-size:.78rem;color:var(--muted);margin-top:12px;text-align:center;">We'll confirm your order and delivery details over Telegram DM.</p>
    </div>
  </aside>`;
}

function renderToast(){
  return `
  <div class="toast" id="toast">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
    <span></span>
  </div>`;
}

function renderLoader(){
  return `
  <div id="loader">
    <div class="loader-mark">
      <img src="img/logo-icon.png" alt="${BRAND.name} logo">
    </div>
    <div class="loader-word">${BRAND.name}</div>
    <div class="loader-tag">${BRAND.tagline}</div>
  </div>`;
}

function injectPartials(activePage){
  document.getElementById("headerMount").innerHTML = renderHeader(activePage);
  document.getElementById("footerMount").innerHTML = renderFooter();
  document.getElementById("cartMount").innerHTML = renderCartDrawer();
  document.getElementById("toastMount").innerHTML = renderToast();
  document.getElementById("loaderMount").innerHTML = renderLoader();

  bindCartUI();
  bindNavToggle();

  setTimeout(() => {
    document.getElementById("loader")?.classList.add("hide");
  }, 1500);
}

function bindNavToggle(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu after tapping a link, or outside it
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
}
