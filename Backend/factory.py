#import all files in the foldeder seeders

from os import listdir
from os.path import isfile, join
from os import path
import importlib

mypath = path.dirname(path.abspath(__file__)) + "/src/seeders"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
for file in onlyfiles:
    if file != "__init__.py":
        importlib.import_module("src.seeders."+file[:-3])