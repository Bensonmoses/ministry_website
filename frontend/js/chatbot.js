document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotPopup = document.getElementById("chatbot-popup");
    const closeChatbot = document.getElementById("close-chatbot");

    chatbotToggle.addEventListener("click", function () {
        chatbotPopup.classList.add("active");
        chatbotToggle.style.display = "none"; // Hide button when chatbot is open
    });

    closeChatbot.addEventListener("click", function () {
        chatbotPopup.classList.remove("active");
        chatbotToggle.style.display = "block"; // Show button when chatbot is closed
    });
});
