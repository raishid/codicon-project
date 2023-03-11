from flask import Flask
from src.config.Database import *

app = Flask("src")
#ELIGE TIPO DE BASE DE DATOS mysql(), sqlite()
app.config['SQLALCHEMY_DATABASE_URI'] = mysql()


with app.app_context():
    db.init_app(app)
    db.create_all()

from .controllers import *