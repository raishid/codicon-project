# -*- coding: utf-8 -*-
from flask import Flask
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_principal import Principal
from .config.Database import *
from .config.Env import env
from .config.Routes import register_blueprints
from .models.Auth import Usuario

app = Flask("src")
app.config['SECRET_KEY'] = env('SECRET_KEY')
#ELIGE TIPO DE BASE DE DATOS mysql(), sqlite()
app.config['SQLALCHEMY_DATABASE_URI'] = mysql()

with app.app_context():
    db.init_app(app)
    db.create_all()
    migrate = Migrate(app, db)

    Principal(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.user_login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return Usuario.query.get(int(user_id))

register_blueprints(app)

from .controllers import *
