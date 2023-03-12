from random import choice
from flask import Blueprint
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
