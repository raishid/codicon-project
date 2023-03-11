from flask import jsonify
from src.routes.mascota import mascota

@mascota.routes('/')
def index():
    data = {
        "title": "Hello World",
        "body": "Flask simple MVC"
    }

    return jsonify(data)