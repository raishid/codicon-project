from flask import Blueprint, jsonify, request
from src.models.Mascota import Mascota
from src.config.Database import db

url_prefix = '/v1'
mascota_bp = Blueprint('mascotas', __name__)

@mascota_bp.route('/mascotas', methods=['GET'])
def index():
    per_page = request.args.get('per_page', default=10, type=int)
    page = request.args.get('page', default=1, type=int)
    offset = (page - 1) * per_page

    mascotas = Mascota.query.limit(per_page).offset(offset).all()
    return jsonify([mascota.serialize() for mascota in mascotas], {
        'per_page': per_page,
        'page': page,
        'total_page': Mascota.query.count() // per_page + 1,
    })

@mascota_bp.route('/mascotas', methods=['POST'])
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
        refugio_id=data['refugio_id'],
    )
    
    db.session.add(mascota)
    db.session.commit()

    return jsonify(mascota.serialize())

@mascota_bp.route('/mascotas/<id>', methods=['GET'])
def edit(id):
    mascota = Mascota.query.get(id)

    return jsonify(mascota.serialize())

@mascota_bp.route('/mascotas/<id>', methods=['PUT'])
def update(id):
    data = request.json
    mascota = Mascota.query.get(id)
    mascota.raza = data['raza']
    mascota.nombre = data['nombre']
    mascota.edad = data['edad']
    mascota.sexo = data['sexo']
    mascota.color = data['color']
    mascota.alto = data['alto']
    mascota.ancho = data['ancho']
    mascota.peso = data['peso']
    mascota.descripcion = data['descripcion']
    mascota.foto = data['foto']
    mascota.refugio_id = data['refugio_id']

    db.session.commit()

    return jsonify(mascota.serialize())

@mascota_bp.route('/mascotas/<id>', methods=['DELETE'])
def delete(id):
    mascota = Mascota.query.get(id)
    db.session.delete(mascota)
    db.session.commit()

    return jsonify({
        'message': 'Mascota eliminada'
    })