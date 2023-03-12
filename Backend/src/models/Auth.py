from src.config.Database import db
from flask_login import UserMixin
from datetime import datetime

class Usuario(UserMixin, db.Model):
    __tablename__ = 'usuarios'
    __table_args__ = {'mysql_engine': 'InnoDB'}

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50), nullable=True)
    correo = db.Column(db.String(50))
    contrasena = db.Column(db.String(150))
    telefono = db.Column(db.String(20))
    direccion = db.Column(db.String(100))
    rol = db.Column(db.Integer)

    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    def __init__(self, nombre, apellido, correo, contrasena, telefono, direccion, rol):
        self.nombre = nombre
        self.apellido = apellido
        self.correo = correo
        self.contrasena = contrasena
        self.telefono = telefono
        self.direccion = direccion
        self.rol = rol

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'correo': self.correo,
            'contrasena': self.contrasena,
            'telefono': self.telefono,
            'direccion': self.direccion,
            'rol': self.rol,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
