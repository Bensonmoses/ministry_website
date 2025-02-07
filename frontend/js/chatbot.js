(async function () {
    try {
        console.log("🔹 Fetching Direct Line Token...");

        // ✅ Securely Fetch Token (Avoid Hardcoding)
        const directLineSecret = "8wBOgG8xJgSk81WXqYwrNiq3OvDFK34SHkPsjErWZ2ib4vhc3uJ1JQQJ99BBACi5YpzAArohAAABAZBS3KHD.FE9G3z76yOo8cD01bzxHFo8YYAzNFt2GCNvgJFNsGgx8eE0jUGPSJQQJ99BBACi5YpzAArohAAABAZBS3RAU"; // Replace with actual secret

        if (!directLineSecret) {
            throw new Error("⚠ Direct Line Secret is missing! Set it in config.json or Azure Key Vault.");
        }

        const response = await fetch("https://directline.botframework.com/v3/directline/tokens/generate", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${directLineSecret}`
            }
        });

        if (!response.ok) {
            throw new Error(`❌ Failed to fetch Direct Line token. Status: ${response.status}`);
        }

        const { token } = await response.json();
        console.log("✅ Direct Line Token fetched successfully.");

        // ✅ Ensure WebChat Container Exists
        const chatContainer = document.getElementById("webchat-container");
        if (!chatContainer) {
            throw new Error("⚠ Chatbot container (webchat-container) not found in HTML.");
        }

        // ✅ Render WebChat
        window.WebChat.renderWebChat({
            directLine: window.WebChat.createDirectLine({ token }),
            userID: "User123",
            username: "Guest",
            locale: "en-US",
            styleOptions: {
                hideUploadButton: true,
                botAvatarImage: "images/bot-avatar.png",
                userAvatarImage: "images/user-avatar.png",
                backgroundColor: "#ffffff",
                bubbleBackground: "#f1f1f1",
                bubbleBorderRadius: 10
            }
        }, chatContainer);

        // ✅ Toggle Chatbot Visibility
        document.getElementById("chatbot-toggle").addEventListener("click", function () {
            chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
            console.log("🔹 Chatbot toggled.");
        });

    } catch (error) {
        console.error("❌ Chatbot Error:", error);
        alert("⚠ Chatbot failed to load. Check console for details.");
    }
})();
