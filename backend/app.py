import azure.functions as func
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

@app.route("/")
def home():
    return jsonify({"message": "Ministry Backend is Running!"})

# Azure Function entry point
def main(req: func.HttpRequest) -> func.HttpResponse:
    """Azure Function entry point to handle HTTP requests"""
    return func.WsgiMiddleware(app.wsgi_app).handle(req)
