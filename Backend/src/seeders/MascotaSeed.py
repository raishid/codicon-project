from faker import Faker
from src.models.Mascota import Mascota
from src.config.Database import mysql
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

db = create_engine(mysql())
session = sessionmaker(bind=db)
sec = session()

faker = Faker()

for i in range(10):
    mascota = Mascota(
        raza=faker.name(),
        nombre=faker.name(),
        edad=faker.random_int(min=1, max=20),
        sexo=faker.name(),
        color=faker.name(),
        alto=faker.random_int(min=1, max=20),
        ancho=faker.random_int(min=1, max=20),
        peso=faker.random_int(min=1, max=20),
        descripcion=faker.text(),
        foto=faker.name(),
        refugio_id=faker.random_int(min=1, max=20),
    )
    sec.add(mascota)
    sec.commit()

