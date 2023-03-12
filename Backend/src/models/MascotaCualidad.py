from src.config.Database import db
from src.models.Cualidad import Cualidad
from src.models.Mascota import Mascota

class MascotaCualidad(db.Model):
    __tablename__ = 'mascotas_cualidades'
    __table_args__ = {'mysql_engine': 'InnoDB'}

    id = db.Column(db.Integer, primary_key=True)
    mascota_id = db.Column('mascota_id', db.Integer, db.ForeignKey(Mascota.id))
    mascota = db.relationship('Mascota', backref="related_mascotas")
    cualidad_id = db.Column('cualidad_id', db.Integer, db.ForeignKey(Cualidad.id))
    cualidad = db.relationship('Cualidad', backref="related_cualidades")


    def __init__(self, mascota_id, cualidad_id):
        self.mascota_id = mascota_id
        self.cualidad_id = cualidad_id
    
    def serialize(self):
        return {
            'id': self.id,
            'mascota_id': self.mascota_id,
            'cualidad_id': self.cualidad_id
        }