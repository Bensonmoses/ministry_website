document.addEventListener("DOMContentLoaded", function () {
    // ✅ Load Header and Footer Dynamically
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setupMobileMenu(); // Ensure mobile menu works after loading the header
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });

    // ✅ Function to Setup Mobile Menu
    function setupMobileMenu() {
        const menuButton = document.getElementById("menuButton");
        const mobileNav = document.getElementById("mobileNav");

        if (!menuButton || !mobileNav) return;

        // ✅ Toggle Mobile Menu on Button Click
        menuButton.addEventListener("click", function () {
            mobileNav.classList.toggle("active");
        });

        // ✅ Close Menu When Clicking Outside
        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove("active");
            }
        });

        // ✅ Ensure Menu Links Work on Click
        document.querySelectorAll(".mobile-nav ul li a").forEach(link => {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("active");
            });
        });
    }
});
