from src.config.Database import db

class Ciudad(db.Model):
    __tablename__ = 'ciudades'
    __table_args__ = {'mysql_engine': 'InnoDB'}

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    pais = db.Column(db.String(50), nullable=False)
    

    def __init__(self, nombre, pais):
        self.nombre = nombre
        self.pais = pais
        

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'pais': self.pais
        }