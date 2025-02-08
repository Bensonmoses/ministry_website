document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotPopup = document.getElementById("chatbot-popup");
    const closeChatbot = document.getElementById("close-chatbot");

    chatbotToggle.addEventListener("click", function () {
        chatbotPopup.classList.add("active");

        // Smoothly fade out the button instead of hiding it instantly
        chatbotToggle.style.opacity = "0";
        chatbotToggle.style.pointerEvents = "none";
    });

    closeChatbot.addEventListener("click", function () {
        chatbotPopup.classList.remove("active");

        // Smoothly fade in the button after chatbot closes
        setTimeout(() => {
            chatbotToggle.style.opacity = "1";
            chatbotToggle.style.pointerEvents = "auto";
        }, 300);
    });
});
