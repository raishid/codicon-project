from flask_sqlalchemy import SQLAlchemy
from .Env import env


db = SQLAlchemy()

def mysql():
    db_host = env('DB_HOST')
    db_name = env('DB_NAME')
    db_user = env('DB_USER')
    db_password = env('DB_PASSWORD')
    return f'mysql://{db_user}:{db_password}@{db_host}/{db_name}'

def sqlite():
    return 'sqlite:///database.db'