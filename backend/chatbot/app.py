from flask import Flask, jsonify
import requests
import os
from dotenv import load_dotenv
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS

# ✅ Load environment variables
load_dotenv()

app = Flask(__name__)

# ✅ Enable CORS for Frontend Requests
CORS(app)

# ✅ Rate Limiter (Prevents API Abuse)
limiter = Limiter(get_remote_address, app=app, default_limits=["5 per minute"])

@app.route("/api/chatbot/token", methods=["GET"])
@limiter.limit("5 per minute")  # ✅ Limit API requests per user
def get_direct_line_token():
    direct_line_secret = os.getenv("DIRECT_LINE_SECRET")

    if not direct_line_secret:
        return jsonify({"error": "Direct Line Secret is missing!"}), 500

    headers = {"Authorization": f"Bearer {direct_line_secret}"}

    try:
        response = requests.post("https://directline.botframework.com/v3/directline/tokens/generate", headers=headers)

        if response.status_code != 200:
            response_json = response.json()
            error_message = response_json.get("error", {}).get("message", "Unknown error")
            return jsonify({"error": f"Failed to generate Direct Line token: {error_message}"}), response.status_code

        token = response.json().get("token")
        return jsonify({"token": token})

    except requests.RequestException as e:
        return jsonify({"error": f"API request failed: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=True)
