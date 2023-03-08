from src import app
from flask import jsonify
"""
    Import MOdels
from src.models.Hello import Hello
"""
#route index
@app.route('/', methods = ['GET'])
def index():
    data = {
        "title": "Hello World",
        "body": "Flask simple MVC"
    }

    return jsonify(data)