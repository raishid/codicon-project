from src.config.Database import db
from datetime import datetime
from src.models.Refugio import Refugio

class Mascota(db.Model):
    __tablename__ = 'mascotas'
    __table_args__ = {'mysql_engine': 'InnoDB'}

    id = db.Column(db.Integer, primary_key=True)
    raza = db.Column(db.String(50), default='Mestizo')
    nombre = db.Column(db.String(50), nullable=True)
    edad = db.Column(db.Float)
    sexo = db.Column(db.String(50))
    color = db.Column(db.String(50))
    alto = db.Column(db.Float)
    ancho = db.Column(db.Float)
    peso = db.Column(db.Float)
    descripcion = db.Column(db.Text, nullable=True)
    foto = db.Column(db.String(255), nullable=True)
    estado = db.Column(db.Integer, default=1)

    refugio_id = db.Column(db.Integer, db.ForeignKey(Refugio.id), nullable=True)
    refugio = db.relationship('Refugio', backref=db.backref('mascotas_refugio', lazy=True, cascade="all, delete"))


    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    

    def __init__(self, raza, nombre, edad, sexo, color, alto, ancho, peso, descripcion, refugio_id, foto = None):
        self.raza = raza
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo
        self.color = color
        self.alto = alto
        self.ancho = ancho
        self.peso = peso
        self.descripcion = descripcion
        self.foto = foto
        self.refugio_id = refugio_id

    def serialize(self):
        return {
            'id': self.id,
            'raza': self.raza,
            'nombre': self.nombre,
            'edad': self.edad,
            'sexo': self.sexo,
            'color': self.color,
            'alto': self.alto,
            'ancho': self.ancho,
            'peso': self.peso,
            'descripcion': self.descripcion,
            'foto': self.foto,
            'refugio': self.refugio.serialize() if self.refugio else None
        }