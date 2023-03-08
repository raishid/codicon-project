from flask import Flask

app = Flask("src")

from .controllers import *