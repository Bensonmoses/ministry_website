document.addEventListener("DOMContentLoaded", function() {
    // ✅ Fix Title Issue (Ensures title is always correct)
    document.title = "HOLY SPIRIT PRAYER HOUSE";

    // ✅ Mobile Navigation Logic
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    if (menuButton && mobileNav) {
        menuButton.addEventListener("click", function(event) {
            event.stopPropagation();
            mobileNav.classList.toggle("active");
        });

        document.addEventListener("click", function(event) {
            if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove("active");
            }
        });

        mobileNav.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
});
