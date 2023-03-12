from flask_seeder import Seeder
from src.models.Ciudad import Ciudad

class CiudadSeed(Seeder):

    def __init__(self, db=None):
        super().__init__(db=db)
        self.priority = 1

    def run(self):
        ciudades = ['Amazonas',     'Anzoátegui',     'Apure',     'Aragua',     'Barinas',     'Bolívar',     'Carabobo',     'Cojedes',     'Delta Amacuro',     'Falcón',     'Guárico',
                    'Lara',     'Mérida',     'Miranda',     'Monagas',     'Nueva Esparta',     'Portuguesa',     'Sucre',     'Táchira',     'Trujillo',     'Vargas',     'Yaracuy',     'Zulia']
        for ciudad in ciudades:
            self.db.session.add(Ciudad(
                nombre=ciudad,
                pais='Venezuela'
            ))    
        self.db.session.commit()
