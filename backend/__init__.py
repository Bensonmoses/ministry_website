from flask import Flask, jsonify, request
import json

app = Flask(__name__)

def load_data():
    try:
        with open("data.json", "r") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"donations": []}

def save_data(data):
    with open("data.json", "w") as file:
        json.dump(data, file, indent=4)

@app.route("/donate", methods=["POST"])
def donate():
    data = load_data()
    donation = {
        "name": request.json.get("name"),
        "email": request.json.get("email"),
        "amount": request.json.get("amount")
    }
    data["donations"].append(donation)
    save_data(data)
    return jsonify({"message": "Thank you for your donation!"}), 200

@app.route("/donations", methods=["GET"])
def get_donations():
    data = load_data()
    return jsonify(data)

@app.route("/contact", methods=["POST"])
def contact():
    message = {
        "name": request.json.get("name"),
        "email": request.json.get("email"),
        "message": request.json.get("message")
    }
    return jsonify({"message": "Thank you for reaching out! We will get back to you soon."}), 200

if __name__ == "__main__":
    app.run(debug=True)
