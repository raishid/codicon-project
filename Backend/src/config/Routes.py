import os
import glob
from importlib import import_module
from flask import Flask
import re

def register_blueprints(app: Flask):
    for file_path in glob.glob(os.path.join(os.path.dirname(__file__), '../controllers/*.py')):
        ## no __init__.py
        if os.path.basename(file_path).startswith('__'):
            continue
        module_name = os.path.splitext(os.path.basename(file_path))[0]
        variable_name = re.sub(r'[^\w\s-]', '', module_name.replace('Controller', '').lower()) 
        module = import_module(f'src.controllers.{module_name}')
        blueprint = getattr(module, f'{variable_name}_bp')
        url_prefix = getattr(module, 'url_prefix')
        app.register_blueprint(blueprint, url_prefix=url_prefix)
