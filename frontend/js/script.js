document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    if (menuButton && mobileNav) { // ✅ Prevents errors if elements are missing
        menuButton.addEventListener("click", function(event) {
            event.stopPropagation(); // ✅ Prevents immediate closure
            mobileNav.classList.toggle("active");
        });

        // ✅ Close the menu when clicking outside (but not inside)
        document.addEventListener("click", function(event) {
            if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove("active");
            }
        });

        // ✅ Prevent the menu from closing when clicking inside it
        mobileNav.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
});
