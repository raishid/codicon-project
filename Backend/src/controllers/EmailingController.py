from flask import Blueprint, request, jsonify
from src.config.Emailing import template, send_hero_email

url_prefix = '/v1'
emailing_bp = Blueprint('emailing', __name__)

@emailing_bp.route('/send', methods=['POST'])
def send_email():
    data = request.get_json()

    mensaje = template.substitute(
        nombre=data['nombre'], nombrePerrito=data['nombrePerrito']
    )

    send_hero_email(data['correo'], mensaje)

    response = jsonify({'status': 200})

    return response
