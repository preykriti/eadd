from flask import Flask, request, jsonify, render_template
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/submit", methods = ["POST"])
def submitname():
    data = request.get_json()
    name = data.get("name", "")
    if name:
        return jsonify({"message": f"hello {name}. how are you"})
    else :
        return jsonify({"message": "no name"})
    
if __name__ == "__main__":
    app.run(host="localhost", port=8000)