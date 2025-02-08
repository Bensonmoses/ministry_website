document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotPopup = document.getElementById("chatbot-popup");
    const closeChatbot = document.getElementById("close-chatbot");

    chatbotToggle.addEventListener("click", function () {
        chatbotPopup.classList.add("active");

        // Ensure chatbot popup is visible on mobile
        chatbotPopup.style.display = "block";

        // Smooth fade-out effect for button
        chatbotToggle.style.opacity = "0";
        chatbotToggle.style.pointerEvents = "none";
    });

    closeChatbot.addEventListener("click", function () {
        chatbotPopup.classList.remove("active");

        // Ensure chatbot button returns after closing
        setTimeout(() => {
            chatbotPopup.style.display = "none";
            chatbotToggle.style.opacity = "1";
            chatbotToggle.style.pointerEvents = "auto";
        }, 300);
    });
});
