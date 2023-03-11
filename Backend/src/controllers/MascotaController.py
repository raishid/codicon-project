from flask import Blueprint, jsonify, request
from src.models.Mascota import Mascota
from src.config.Database import db

url_prefix = '/'
mascota_bp = Blueprint('mascotas', __name__)

@mascota_bp.route('/', methods=['GET'])
def index():
    data = Mascota.query.all()

    return jsonify(data)

@mascota_bp.route('/mascota', methods=['POST'])
def create():
    data = request.json
    mascota = Mascota(
        raza=data['raza'],
        nombre=data['nombre'],
        edad=data['edad'],
        sexo=data['sexo'],
        color=data['color'],
        alto=data['alto'],
        ancho=data['ancho'],
        peso=data['peso'],
        descripcion=data['descripcion'],
        foto=data['foto'],
    )
    
    db.session.add(mascota)
    db.session.commit()

    return jsonify(mascota)