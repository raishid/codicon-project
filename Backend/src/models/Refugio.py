from src.config.Database import db
from datetime import datetime
from src.models.Auth import Usuario
from src.models.Ciudad import Ciudad

class Refugio(db.Model):
    __tablename__ = 'refugios'
    __table_args__ = {'mysql_engine': 'InnoDB'}

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    direccion = db.Column(db.String(255))
    email = db.Column(db.String(50))
    telefono = db.Column(db.String(50))
    foto = db.Column(db.String(255), nullable=True)
    mascotas = db.relationship('Mascota', lazy="dynamic")

    usuario_id = db.Column(db.Integer, db.ForeignKey(Usuario.id), nullable=True)
    usuario = db.relationship('Usuario', backref=db.backref('refugios_usuario', lazy=True, cascade="all, delete"))
    ciudad_id = db.Column(db.Integer, db.ForeignKey(Ciudad.id), nullable=True)
    ciudad = db.relationship('Ciudad', backref=db.backref('refugios_ciudad', lazy=True, cascade="all, delete"))

    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    
    def __init__(self, nombre, direccion, email, telefono, foto = None, usuario_id = None, ciudad_id = None):
        self.nombre = nombre
        self.direccion = direccion
        self.email = email
        self.telefono = telefono
        self.foto = foto
        self.usuario_id = usuario_id
        self.ciudad_id = ciudad_id

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'direccion': self.direccion,
            'email': self.email,
            'telefono': self.telefono,
            'foto': self.foto,
            'usuario': self.usuario.serialize() if self.usuario else None,
            'ciudad': self.ciudad.serialize() if self.ciudad else None
        }
