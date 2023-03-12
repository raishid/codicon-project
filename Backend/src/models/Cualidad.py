from src.config.Database import db

class Cualidad(db.Model):
    __tablename__ = 'cualidades'
    __table_args__ = {'mysql_engine': 'InnoDB'}

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    
    mascotas = db.relationship('Mascota', secondary='mascotas_cualidades', lazy='dynamic', backref=db.backref('cualidades_mascotas', lazy=True))


    def __init__(self, nombre):
        self.nombre = nombre
        

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
        }