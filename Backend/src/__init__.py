# -*- coding: utf-8 -*-
from flask import Flask
from .config.Database import *
from .config.Routes import register_blueprints
from flask_migrate import Migrate
from flask_seeder import FlaskSeeder

app = Flask("src")
#ELIGE TIPO DE BASE DE DATOS mysql(), sqlite()
app.config['SQLALCHEMY_DATABASE_URI'] = mysql()


with app.app_context():
    db.init_app(app)
    migrate = Migrate(app, db)
    db.create_all()
    seeder = FlaskSeeder()
    seeder.init_app(app, db)

register_blueprints(app)

from .controllers import *