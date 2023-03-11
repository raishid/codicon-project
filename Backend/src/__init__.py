# -*- coding: utf-8 -*-
from flask import Flask
from .config.Database import *
from .config.Routes import register_blueprints
from flask_migrate import Migrate

app = Flask("src")
#ELIGE TIPO DE BASE DE DATOS mysql(), sqlite()
app.config['SQLALCHEMY_DATABASE_URI'] = mysql()

with app.app_context():
    db.init_app(app)
    db.create_all()
    migrate = Migrate(app, db)

register_blueprints(app)

from .controllers import *