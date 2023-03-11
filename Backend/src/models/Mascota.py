from src.config.Database import db
from datetime import datetime

class Mascota(db.Model):
    __tablename__ = 'mascotas'

    id = db.Column(db.Integer, primary_key=True)
    raza = db.Column(db.String(50))
    nombre = db.Column(db.String(50), nullable=True)
    sexo = db.Column(db.String(50))
    color = db.Column(db.String(50))
    alto = db.Column(db.Integer)
    ancho = db.Column(db.Integer)
    peso = db.Column(db.Integer)
    descripcion = db.Column(db.Text, nullable=True)

    refugio_id = db.Column(db.Integer, db.ForeignKey('refugios.id'), nullable=False)
    estado_id = db.Column(db.Integer, db.ForeignKey('estados.id'), nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    

    def __init__(self, raza, nombre, sexo, color, alto, ancho, peso, descripcion, refugio_id):
        self.raza = raza
        self.nombre = nombre
        self.sexo = sexo
        self.color = color
        self.alto = alto
        self.ancho = ancho
        self.peso = peso
        self.descripcion = descripcion
        self.refugio_id = refugio_id
