from flask import Blueprint, jsonify, request
from src.models.Mascota import Mascota

url_prefix = '/'
mascota_bp = Blueprint('mascotas', __name__)

@mascota_bp.route('/', methods=['GET'])
def index():
    data = Mascota.query.all()

    return jsonify(data)