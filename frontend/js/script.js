// ✅ Function to Toggle Mobile Navigation Menu
function toggleMenu() {
    var mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("active");
}

// ✅ Close Menu When Clicking Outside
document.addEventListener("click", function (event) {
    var menu = document.getElementById("mobileNav");
    var menuButton = document.getElementById("menuButton");

    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove("active");
    }
});

// ✅ Add Transparent Header on Scroll
window.addEventListener("scroll", function() {
    var header = document.getElementById("mainHeader");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
