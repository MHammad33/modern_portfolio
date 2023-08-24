// * Select DOM items
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const menuLines = document.querySelectorAll(".btn-line");

// * Set initial state of menu
let showMenu = false;

// * Click on Menu button
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBrand.classList.add("show");
        navItems.forEach(item => {
            item.classList.add("show");
        });
        // Set menu state true
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBrand.classList.remove("show");
        navItems.forEach(item => {
            item.classList.remove("show");
        });
        // Set menu state true
        showMenu = false;
    }
}

