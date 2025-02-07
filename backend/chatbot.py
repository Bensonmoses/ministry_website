import azure.functions as func
import logging
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Chatbot API is running on Azure!"})

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.json
    user_input = data.get("message", "")

    # Simple bot response
    bot_response = f"Echo: {user_input}"
    
    return jsonify({"response": bot_response})

def main(req: func.HttpRequest) -> func.HttpResponse:
    """Azure Function entry point."""
    logging.info("Chatbot function triggered.")

    # Convert Azure Functions request to Flask request
    with app.test_request_context(
        path=req.url, method=req.method, headers=req.headers, data=req.get_body()
    ):
        response = app.full_dispatch_request()

    return func.HttpResponse(response.get_data(), mimetype="application/json", status_code=response.status_code)
