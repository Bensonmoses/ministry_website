(async function() {
    try {
        console.log("Fetching Direct Line Token...");

        const response = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer 8wBOgG8xJgSk81WXqYwrNiq3OvDFK34SHkPsjErWZ2ib4vhc3uJ1JQQJ99BBACi5YpzAArohAAABAZBS3KHD' } // 🔹 Replace with actual key
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Direct Line token. Status: ${response.status}`);
        }

        const { token } = await response.json();
        console.log("Direct Line Token fetched successfully:", token);

        window.WebChat.renderWebChat({
            directLine: window.WebChat.createDirectLine({ token }),
            userID: 'User123',
            username: 'Guest',
            locale: 'en-US',
            styleOptions: {
                hideUploadButton: true,
                botAvatarImage: 'images/bot-avatar.png',
                userAvatarImage: 'images/user-avatar.png',
                backgroundColor: '#ffffff',
                bubbleBackground: '#f1f1f1',
                bubbleBorderRadius: 10,
            }
        }, document.getElementById('webchat-container'));

        document.getElementById("chatbot-toggle").addEventListener("click", function() {
            let chatbox = document.getElementById("webchat-container");
            chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "block" : "none";
        });

    } catch (error) {
        console.error("Chatbot Error:", error);
        alert("Chatbot failed to load. Check console for details.");
    }
})();
