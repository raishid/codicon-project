from flask_seeder import Seeder, Faker, generator
from src.models.Refugio import Refugio
import lorem

class RefugioSeed(Seeder):

    def __init__(self, db=None):
        super().__init__(db=db)
        self.priority = 1
    
    def run(self):
        faker = Faker(
            cls=Refugio,
            init={
                "nombre": generator.Name(),
                "direccion": lorem.sentence(),
                "email": generator.Email(),
                "telefono": generator.Integer(start=100000, end=9999999),
                "foto": None
            }
        )

        for refugio in faker.create(5):
            print('Adding refugio: %s' % refugio)
            self.db.session.add(refugio)
    

