// ✅ Function to Toggle Mobile Navigation Menu
function toggleMenu() {
    var mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("active");
}

// ✅ Close menu when clicking outside
document.addEventListener("click", function (event) {
    var menu = document.getElementById("mobileNav");
    var menuButton = document.getElementById("menuButton");

    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove("active");
    }
});
