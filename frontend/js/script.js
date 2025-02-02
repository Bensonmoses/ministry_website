document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    menuButton.addEventListener("click", function() {
        mobileNav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove("active");
        }
    });
});
