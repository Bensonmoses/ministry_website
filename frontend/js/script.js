document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
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
            console.log("Menu button clicked!");
        });

        // ✅ Close Menu When Clicking Outside
        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove("active");
                console.log("Clicked outside, menu closed.");
            }
        });

        // ✅ Ensure Menu Closes When Clicking a Link
        document.querySelectorAll(".mobile-nav ul li a").forEach(link => {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("active");
                console.log("Menu closed after clicking link.");
            });
        });

        console.log("Mobile menu initialized successfully.");

        // ✅ Chatbot Toggle
        if (chatbotToggle && chatbotContainer) {
            chatbotToggle.addEventListener("click", function () {
                chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
                console.log("Chatbot toggled.");
            });
        } else {
            console.error("Chatbot toggle button or container not found!");
        }
    }, 500);
});
