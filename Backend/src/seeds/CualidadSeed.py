from flask_seeder import Seeder
from src.models.Cualidad import Cualidad


class CualidadSeed(Seeder):

    def __init__(self, db=None):
        super().__init__(db=db)
        self.priority = 1

    def run(self):
        cualidades_perros = ["Amigable",    "Juguetón",    "Leal",    "Inteligente",    "Valiente",    "Protector",    "Activo",    "Cariñoso",    "Paciente",    "Independiente",    "Entrenable",    "Sociable",    "Curioso",
                             "Ágil",    "Veloz",    "Le gusta el agua",    "Le gusta perseguir cosas",    "Le gusta cavar",    "Le gusta masticar",    "Le gusta ladrar",    "Le gusta correr",    "Le gusta acurrucarse",    "Le gusta dormir"]

        for cualidad in cualidades_perros:
            self.db.session.add(Cualidad(
                nombre=cualidad,
            ))
        self.db.session.commit()
