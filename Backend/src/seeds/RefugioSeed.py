from flask_seeder import Seeder, Faker, generator
from src.models.Refugio import Refugio
from random import choice
from src.models.Auth import Usuario
import lorem

class RefugioSeed(Seeder):

    def __init__(self, db=None):
        super().__init__(db=db)
        self.priority = 5
    
    def run(self):
        usuarios = Usuario.query.all()
        faker = Faker(
            cls=Refugio,
            init={
                "nombre": generator.Name(),
                "direccion": lorem.sentence(),
                "email": generator.Email(),
                "telefono": generator.Integer(start=100000, end=9999999),
                "foto": None,
                "usuario_id": generator.Integer(1, choice(usuarios).id)
            }
        )

        for refugio in faker.create(5):
            print('Adding refugio: %s' % refugio)
            self.db.session.add(refugio)
    

