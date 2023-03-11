from flask import Blueprint, jsonify, request
from src.models.Refugio import Refugio
from src.config.Database import db

url_prefix = '/v1'
refugio_bp = Blueprint('refugio', __name__)

@refugio_bp.route('/refugios', methods=['GET'])
def index():
    per_page = request.args.get('per_page', default=10, type=int)
    page = request.args.get('page', default=1, type=int)
    offset = (page - 1) * per_page

    refugios = Refugio.query.limit(per_page).offset(offset).all()

    return jsonify([refugio.serialize() for refugio in refugios], {
        'per_page': per_page,
        'page': page,
        'total_page': Refugio.query.count() // per_page + 1,
    })

@refugio_bp.route('/refugios', methods=['POST'])
def create():
    data = request.json

    refugio = Refugio(
        nombre=data['nombre'],
        direccion=data['direccion'],
        email=data['email'],
        telefono=data['telefono'],
        foto=data['foto'],
    );
    
    db.session.add(refugio)
    db.session.commit()

    return jsonify(refugio.serialize())

@refugio_bp.route('/refugios/<id>', methods=['GET'])
def edit(id):
    mascota = Refugio.query.get(id)

    return jsonify(mascota.serialize())

@refugio_bp.route('/refugios/<id>', methods=['PUT'])
def update(id):
    data = request.json
    refugio = Refugio.query.get(id)
    refugio.nombre = data['nombre']
    refugio.direccion = data['direccion']
    refugio.email = data['email']
    refugio.telefono = data['telefono']
    refugio.foto = data['foto']

    db.session.commit()

    return jsonify(refugio.serialize())

@refugio_bp.route('/refugios/<id>', methods=['DELETE'])
def delete(id):
    refugio = Refugio.query.get(id)
    db.session.delete(refugio)
    db.session.commit()

    return jsonify({
        'message': 'Refugio eliminado'
    })