document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotPopup = document.getElementById("chatbot-popup");
    const closeChatbot = document.getElementById("close-chatbot");

    chatbotToggle.addEventListener("click", function () {
        chatbotPopup.classList.add("active");

        // Smooth transition
        setTimeout(() => {
            chatbotToggle.style.display = "none"; // Hide button smoothly
        }, 300);
    });

    closeChatbot.addEventListener("click", function () {
        chatbotPopup.classList.remove("active");

        // Delay before showing button again
        setTimeout(() => {
            chatbotToggle.style.display = "flex";
        }, 300);
    });
});
