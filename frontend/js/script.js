document.addEventListener("DOMContentLoaded", function() {
    // ✅ Load Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setupMobileMenu(); // Ensure mobile menu works after loading
        });

    // ✅ Load Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });

    // ✅ Setup Mobile Menu
    function setupMobileMenu() {
        const menuButton = document.getElementById("menuButton");
        const mobileNav = document.createElement("nav");
        mobileNav.className = "mobile-nav";
        mobileNav.innerHTML = document.querySelector(".desktop-nav").innerHTML;
        document.body.appendChild(mobileNav);

        menuButton.addEventListener("click", function() {
            mobileNav.classList.toggle("active");
        });

        document.addEventListener("click", function(event) {
            if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove("active");
            }
        });
    }
});
