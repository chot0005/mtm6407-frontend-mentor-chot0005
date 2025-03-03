// Elements
const closeMenuBtn = document.querySelector(".close-menu-icon");
const openMenuBtn = document.querySelector(".menu-icon");
const asideEl = document.querySelector("aside");
const menuLinkEls = document.querySelectorAll(".menu-link");

// Throttle Close Menu
let resizeTimeout;
function throttleCloseMenu() {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(closeMenu, 200);
}

// Event Listeners
window.addEventListener("resize", throttleCloseMenu);
window.addEventListener("scroll", throttleCloseMenu);
closeMenuBtn.addEventListener("click", closeMenu);
openMenuBtn.addEventListener("click", toggleMenu);
menuLinkEls.forEach((element) => element.addEventListener("click", closeMenu));

// Open Menu
function openMenu() {
  asideEl.classList.remove("hidden");
  asideEl.classList.add("show");
  openMenuBtn.classList.add("burger-to-cross");
}

// Close Menu
function closeMenu() {
  asideEl.classList.remove("show");
  setTimeout(() => {
    asideEl.classList.add("hidden");
  }, 300);
  openMenuBtn.classList.remove("burger-to-cross");
}

// Toggle Menu and Animate Icon
function toggleMenu() {
  const isMenuHidden = asideEl.classList.contains("hidden");
  if (isMenuHidden) {
    openMenu();
  } else {
    closeMenu();
  }
}