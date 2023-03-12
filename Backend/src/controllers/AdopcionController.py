from random import choice
from flask import Blueprint, request, jsonify
from src.config.Database import db
from src.models.Mascota import Mascota

url_prefix = '/v1'
adopcion_bp = Blueprint('adopcion', __name__)

@adopcion_bp.route('/mascotas/random', methods=['GET'])
def random_adoption():
    mascotas_disponibles = Mascota.query.filter_by(estado=1).all()

    mascota = choice(mascotas_disponibles)
    mascota.estado = 2

    db.session.commit()

    return mascota.serialize()

@adopcion_bp.route('mascotas/adoptar', methods=['POST'])
def pet_adoption():
    data = request.get_json()
    id_mascota = data['id_mascota']

    mascota = Mascota.query.get(id_mascota)
    mascota.estado = 2

    db.session.commit()

    response = jsonify({'status': 200})

    return response

@adopcion_bp.route('mascotas/cancelar', methods=['POST'])
def pet_cancel_adoption():
    data = request.get_json()
    id_mascota = data['id_mascota']

    mascota = Mascota.query.get(id_mascota)
    mascota.estado = 1

    db.session.commit()

    response = jsonify({'status': 200})

    return response

@adopcion_bp.route('mascotas/confirmar', methods=['POST'])
def pet_confirm_adoption():
    data = request.get_json()
    id_mascota = data['id_mascota']

    mascota = Mascota.query.get(id_mascota)
    mascota.estado = 3

    db.session.commit()

    response = jsonify({'status': 200})

    return response
