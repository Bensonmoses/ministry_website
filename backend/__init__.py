import azure.functions as func
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/message")
def home():
    return jsonify({"message": "Ministry Backend is Running!"})

def main(req: func.HttpRequest) -> func.HttpResponse:
    """Azure Function entry point"""
    return func.WsgiMiddleware(app.wsgi_app).handle(req)
