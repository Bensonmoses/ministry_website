document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const menuButton = document.getElementById("menuButton");
        const mobileNav = document.getElementById("mobileNav");

        if (!menuButton || !mobileNav) {
            console.error("Menu button or mobile navigation not found!");
            return;
        }

        // ✅ Toggle Mobile Menu on Button Click
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileNav.classList.toggle("active");
            console.log("Menu button clicked!"); // Debugging
        });

        // ✅ Close Menu When Clicking Outside
        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove("active");
                console.log("Clicked outside, menu closed."); // Debugging
            }
        });

        // ✅ Ensure Menu Closes When Clicking a Link
        document.querySelectorAll(".mobile-nav ul li a").forEach(link => {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("active");
                console.log("Menu closed after clicking link."); // Debugging
            });
        });

        console.log("Mobile menu initialized successfully."); // Debugging
    }, 500);
});
