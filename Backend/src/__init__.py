from flask import Flask
from .config.Database import *
from .config.Routes import register_blueprints

app = Flask("src")
#ELIGE TIPO DE BASE DE DATOS mysql(), sqlite()
app.config['SQLALCHEMY_DATABASE_URI'] = mysql()

with app.app_context():
    db.init_app(app)
    db.create_all()

register_blueprints(app)

from .controllers import *