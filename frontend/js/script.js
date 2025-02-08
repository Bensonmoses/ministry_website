document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.getElementById("webchat-container");

    if (!menuButton || !mobileNav) {
        console.error("Menu button or mobile navigation not found!");
        return;
    }

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

    // ✅ Close Menu When Pressing Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            mobileNav.classList.remove("active");
        }
    });

    // ✅ Keyboard Accessibility for Mobile Menu
    menuButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            mobileNav.classList.toggle("active");
        }
    });

    // ✅ Chatbot Toggle
    if (chatbotToggle && chatbotContainer) {
        chatbotToggle.addEventListener("click", function () {
            chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
        });
    }
});
