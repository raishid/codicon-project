from flask_seeder import Seeder, Faker, generator
from src.models.Mascota import Mascota
from src.models.Refugio import Refugio
from random import choice
import lorem

class MascotaSeed(Seeder):

    def __init__(self, db=None):
        super().__init__(db=db)
        self.priority = 20
    
    def run(self):
        sexo = ['Macho', 'Hembra']
        colores = ['rojo', 'naranja', 'amarillo', 'verde', 'azul', 'violeta', 'rosa', 'gris', 'blanco', 'negro', 'marrón', 'beige']
        razas_perros = ['Labrador Retriever', 'Pastor Alemán', 'Golden Retriever', 'Bulldog', 'Beagle', 'Caniche', 'Dalmata', 'Bichón Frisé', 'Pug', 'Doberman', 'Chihuahua', 'Rottweiler', 'Yorkshire Terrier', 'Cocker Spaniel', 'Husky Siberiano', 'Boxer', 'Dóberman', 'Border Collie', 'Schnauzer', 'Bóxer', 'Chow Chow', 'Maltés', 'Bulldog Francés', 'Shar Pei', 'San Bernardo', 'Teckel', 'Weimaraner', 'Shih Tzu', 'Akita Inu', 'Terranova', 'Bernese Mountain Dog', 'Galgo', 'Whippet', 'Mastín', 'Fox Terrier', 'Pinscher Miniatura', 'Jack Russell Terrier', 'Collie', 'Mastín Napolitano', 'Bull Terrier', 'Cavalier King Charles Spaniel', 'Carlino', 'Pastor Belga', 'West Highland White Terrier', 'Lebrel Afgano', 'Springer Spaniel', 'Pomerania', 'Basset Hound', 'Setter Irlandés', 'Boyero de Berna', 'Briard']
        refugios = self.db.session.query(Refugio).all()
        faker = Faker(
            cls=Mascota,
            init={
                "raza": choice(razas_perros),
                "nombre": generator.Name(),
                "edad": generator.Integer(0, 20),
                "sexo": choice(sexo),
                "color": choice(colores),
                "alto": generator.Integer(0, 2),
                "ancho": generator.Integer(0, 2),
                "peso": generator.Integer(0, 50),
                "descripcion": lorem.sentence(),
                "foto": None,
                "refugio_id": generator.Integer(1, choice(refugios).id)
            }
        )

        for mascota in faker.create(20):
            print('Adding mascota: %s' % mascota)
            self.db.session.add(mascota)
    

