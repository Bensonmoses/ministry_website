document.addEventListener("DOMContentLoaded", function () {
    // ✅ Load Header and Footer Dynamically
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setTimeout(setupMobileMenu, 100); // Ensure mobile menu loads after insertion
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});

// ✅ Function to Setup Mobile Menu
function setupMobileMenu() {
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    if (!menuButton || !mobileNav) return;

    // ✅ Toggle Mobile Menu on Button Click
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileNav.classList.toggle("active");
    });

    // ✅ Close Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove("active");
        }
    });

    // ✅ Ensure Menu Closes When Clicking a Link
    document.querySelectorAll(".mobile-nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("active");
        });
    });
}
