document.addEventListener("DOMContentLoaded", function() {
    document.title = "HOLY SPIRIT PRAYER HOUSE";

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

    // ✅ Hide menu button on desktop automatically
    function toggleMenuButtonVisibility() {
        if (window.innerWidth > 768) {
            menuButton.style.display = "none"; // Hide on desktop
            mobileNav.classList.remove("active"); // Ensure menu closes
        } else {
            menuButton.style.display = "block"; // Show on mobile
        }
    }

    // ✅ Run function on load and resize
    toggleMenuButtonVisibility();
    window.addEventListener("resize", toggleMenuButtonVisibility);
});
