from flask_seeder import Seeder
from src.models.Auth import Usuario
from werkzeug.security import generate_password_hash

class RefugioSeed(Seeder):

    def __init__(self, db=None):
        super().__init__(db=db)
        self.priority = 1
    
    def run(self):
        user = Usuario(
            nombre = 'admin',
            apellido = 'admin',
            correo = 'admin@admin.com',
            contrasena = generate_password_hash('admin', method='sha256'),
            telefono = '123456789',
            direccion = 'caracas',
            rol = 1,
        )

        userRefugio = Usuario(
            nombre = 'refugio',
            apellido = None,
            correo = 'refugio@refugio.com',
            contrasena = generate_password_hash('refugio', method='sha256'),
            telefono = '123456789',
            direccion = 'caracas',
            rol = 2,
        )


        userNormal = Usuario(
            nombre = 'usuario',
            apellido = None,
            correo = 'usuario@usuario.com',
            contrasena = generate_password_hash('usuario', method='sha256'),
            telefono = '123456789',
            direccion = 'caracas',
            rol = 3,
        )


        self.db.session.add(user)
        self.db.session.add(userRefugio)
        self.db.session.add(userNormal)
