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

    // Hero Section Button Click Event
    const learnMoreButton = document.querySelector(".cta-button");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function() {
            alert("Thank you for your interest! More information coming soon.");
        });
    }
});
